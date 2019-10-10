var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//to view single user details or profile
router.get('/:user_id', function (req, res) {
    connection.query(`select * from users where user_id='${req.params.user_id}'`, (error, rows, fields) => {
      if (!error){
        res.send(rows);
        console.log(rows);
      }
      else
        console.log(error);
    });
  });
  
module.exports = router;