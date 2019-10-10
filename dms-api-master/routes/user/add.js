var connection = require('../../config');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();

// post api for adding new users by using following fields

router.post('/', function (req, res) {
  var users = {
    "user_name": req.body.user_name,
    "mobile": req.body.mobile,
    "email": req.body.email,
    "password": req.body.password,
    "profile_pic": req.body.profile_pic,
    "area_id": req.body.area_id,
    "status":1,
    "role": req.body.role

  }
  var use = users;

  // for hashing password by using crypto module
  const key = crypto.pbkdf2Sync(use.password, 'salt', 10, 10, 'sha512');
  use.password = key.toString("hex");

// signup will not happen if email  already exist
  connection.query(`select count(email) as count from users where email='${req.body.email}'`, function (error, results) {
    if (error) {
      console.log(error);
    }

    if (results[0].count > 0) {
      res.json({
        msg: "Email already exists"
      })
    } else {
        
        //if email does not exist in system then new user will added
      connection.query('insert into users set ?', use, function (error, results, fields) {
        if (error) {
          res.json({
            status: false,
            message: 'there are some error with query'
            
          })
          console.log(error);

        } else {

          res.json({
            status: true,
            data: results,
            message: 'User added sucessfully'
          })
        }
      });
    }
  });
});
module.exports = router;