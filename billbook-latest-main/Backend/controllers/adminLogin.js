const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const SuperAdmin = require('../models/superAdmin')
require('dotenv').config();


module.exports = async (req, res) => {
  const { email, password } = req.body;
  SuperAdmin.findOne({email})
  .then((emailGot)=>{

      if(emailGot){
        bcrypt.compare(password, emailGot?.password)
      .then((hasPass)=>{
        if(hasPass){
          const token = jwt.sign(
            { user_id: emailGot._id, email },
            "mylittleadminsecret",
            {
              expiresIn: '1d',
            }
          );
          res.status(200).json({success: true, token})
        }else{s
          res.status(400).json({message:"password is wrong"})
        }
    })  
    .catch((error)=>{
      console.log(error)
    })
      }else{
        res.status(400).json({message:"User Not Founds"})
      }
  })
  .catch((error)=>{
    console.log(error)
  })
 
};