const mongoose = require('mongoose');
const Message = require('./models/Message');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI environment variable is not set');

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 1
    }).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxReqs = 5;

  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return true;
  }

  if (now - record.start > windowMs) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return true;
  }

  if (record.count >= maxReqs) return false;
  record.count++;
  return true;
}

module.exports = async function handler(req, res) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (req.method === 'OPTIONS') {
    return res.status(200).set(headers).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).set(headers).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).set(headers).json({
      error: 'Too many requests. Please try again in a minute.'
    });
  }

  const { name, email, subject, message } = req.body || {};

  const errors = [];
  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters');
  if (!email || !/^\S+@\S+\.\S+$/.test(email.trim())) errors.push('Valid email is required');
  if (!subject || subject.trim().length < 3) errors.push('Subject must be at least 3 characters');
  if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters');

  if (errors.length) {
    return res.status(400).set(headers).json({ error: errors.join('; ') });
  }

  try {
    await connectDB();
    const msg = await Message.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    });
    console.log('Contact message saved:', msg._id);
    return res.status(200).set(headers).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Failed to save contact message:', err);
    return res.status(500).set(headers).json({
      error: 'Server error. Please email me directly at emuhombe@gmail.com'
    });
  }
};
