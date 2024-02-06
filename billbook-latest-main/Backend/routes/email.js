const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chandinihirola@gmail.com',
    pass: 'cpmcvhrrsphmkufm',
  },
});

exports.transporter = transporter;