const user_collection = require('../../models/users');
const nodemailer = require('nodemailer');
require('dotenv').config();
const otpGenerator = require('otp-generator');
const { forgotPassword } = require('../../emailTemplates/forgotPassword');

module.exports = async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_AUTH_USER,
      pass: process.env.GMAIL_AUTH_PASSWORD,
    },
  });

  user_collection
    .find({
      Email: email,
    })
    .then((result) => {
      const otp = otpGenerator.generate(4, {
        digits: true,
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      user_collection
        .findOneAndUpdate(
          { Email: result[0].Email },
          {
            $set: {
              otp: otp,
            },
          }
        )
        .then((updateResult) => {
          let mailClientOption = {
            from: '<chandinip859@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Forgot Password.', // Subject liners

            text: 'Hello world?', // plain text body
            html: forgotPassword(result[0].name, otp),
          };

          transporter.sendMail(mailClientOption, (err, info) => {
            if (!err) {
            } else {
              console.log(err);
            }
          });
          res.send({ Status: 'Success', authEmail: result[0].authEmail });
        })
        .catch((e) => {
          res.send({ Status: 'Failed to send otp ,Please try after soe time' });
        });
    })
    .catch((e) => {
      res.send({ Status: 'Email is Not Registered' });
    });
};
