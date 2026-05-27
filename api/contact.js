const nodemailer = require('nodemailer');

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT } = process.env;
if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) {
  throw new Error('SMTP_* and CONTACT_RECIPIENT environment variables must be set');
}

const isSecure = Number(SMTP_PORT) === 465;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: isSecure,
  requireTLS: !isSecure,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 8000
});

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
    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`,
      replyTo: email.trim(),
      to: CONTACT_RECIPIENT,
      subject: `[Portfolio Contact] ${subject.trim()}`,
      text: `From: ${name.trim()} (${email.trim()})\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;color:#333;">Name</td><td style="padding:8px;">${name.trim()}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#333;background:#f5f5f5;">Email</td><td style="padding:8px;background:#f5f5f5;">${email.trim()}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#333;">Subject</td><td style="padding:8px;">${subject.trim()}</td></tr>
        </table>
        <hr style="margin:16px 0;">
        <h3>Message</h3>
        <p style="white-space:pre-wrap;color:#555;">${message.trim()}</p>
      `
    });

    console.log('Contact email sent from:', email.trim());
    return res.status(200).set(headers).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Failed to send contact email:', err.code, err.message, err.command);
    return res.status(500).set(headers).json({
      error: 'Server error. Please email me directly at emuhombe@gmail.com'
    });
  }
};
