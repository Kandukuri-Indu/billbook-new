const mongoose = require('mongoose');

const VerificationSchema = new mongoose.Schema({
 userId: String,
 uniqueString: String,
 createdAt: String,
 expiredAt: String,
 
});

module.exports = mongoose.model('Verification', VerificationSchema);
