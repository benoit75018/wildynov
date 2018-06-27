<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcrypt');


router.post('/admin',[check('email').isEmail()], (req, res) => {

    const password = req.body.password
    const email = req.body.email
    
    ////////check if mail is valide ////////
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(422).json({ errors: validationErrors.array() });
    }
    ///////////////////////////////////////////
  
    //////check into database if password and mail match //////////////
  
    connection.query('SELECT * FROM profile WHERE email = ?', [email], function(selectError, results, fields) {
      if (selectError) {
        // console.log("error ocurred",error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
      } else if (results.length < 1) {
        res.send({
          "code": 204,
          "success": "Email does not exits"
        });
      } else {
        bcrypt.compare(password, results[0].password, function (bcryptError, validPassword) {
          if (!validPassword || bcryptError) {
            res.send({
              "code": 204,
              "success": "Email and password does not match"
            });
          } else {
            res.send({
              "code": 200,
              "success": "login sucessfull"
            });
          }
        })
      }
    })
  })
  
  
  
  
  module.exports = router;
=======
const express = require('express')
const router = express.Router()
const connection = require('../../helpers/connect.js')
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



module.exports = router
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
