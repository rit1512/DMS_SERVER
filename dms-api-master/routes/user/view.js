var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view user details
router.get('/', function (req, res) {
    connection.query(`select * from users where status='1'`, (error, rows, fields) => {
      if (!error)
        res.send(rows);
      else
    {
        res.status(400).json(error)
        console.log(error);
    }
        
    });
  });
  
module.exports = router;