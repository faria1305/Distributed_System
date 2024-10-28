const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  message: { type: String },
  
  seenBy:[{type:String}],
  totalRecipients: { type: Number, required: true },
});

module.exports = mongoose.model('Notification', notificationSchema);
