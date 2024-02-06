const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const superAdmin = require('../models/superAdmin');
const Verification = require('../models/verification');
const { default: mongoose } = require('mongoose');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const saltRounds = 10;

module.exports = async (req, res) => {
  const { email, password, name } = req.body;

  bcrypt.hash(password, saltRounds).then((result1)=>{
    superAdmin.create({
        email, password:result1, name
    }).then((resu)=>{
        // MongoClient.connect()
        res.status(200).json({success:true})
    }).catch((error)=>{
        console.log(error)
    })
    
  })
  .catch((error)=>{
    console.log(error)
  })
};