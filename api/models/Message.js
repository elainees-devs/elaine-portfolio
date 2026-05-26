const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/
  },
  subject: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 10
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Message || mongoose.model('Message', MessageSchema);
