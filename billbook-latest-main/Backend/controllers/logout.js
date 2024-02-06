const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.post('/logout', (req, res) => {
  
  res.clearCookie('token');

  
  res.status(200).json({ success: true, message: 'Logout successful' });
});

module.exports = router;
