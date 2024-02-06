const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const SuperAdmin = require('../models/superAdmin')
//const Admin = require('../models/Admin');

require('dotenv').config();


const saltRounds = 10;

module.exports = async (req, res) => {
  const {token, id} = req.body;
  SuperAdmin.findById(id)
  .then((result1)=>{
    if(result1){
      jwt.verify(token, 'mylittleadminsecret')
      .then((result2)=>{
        if(result2){
          res.status(201).json({success:true})
        }else{
          res.status(500).json({success:false, message:"not logedIn"})
        }
      })
      .catch((error)=>{
        console.log(error)
      })
    }else{
      // ressjcjsc
    }
  })
  .catch(( error)=>{
    console.log(error)
  })
};