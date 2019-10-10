var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view product category  details
router.get('/',  (req, res)=> {
    connection.query(`select * from brand where status='1'`, (error, rows, fields) => {
      if (!error){
        res.send(rows);
        console.log(rows);
      }
      else
    {
        res.status(404).json(error);
        console.log(error);
    }
    });
  });
  
module.exports = router;