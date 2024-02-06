const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const adminLogin = require('../controllers/adminLogin');
const register = require('../controllers/register');
//const customerController = require('../controllers/customerController');

router.use(express.json());
router.use(cookieParser());
router.use(
  express.urlencoded({
    extended: true,
  })
);

// Admin routes
router.post('/register', register);
router.post('/login', adminLogin);
//router.post('/Customer', customerController);

module.exports = router;


