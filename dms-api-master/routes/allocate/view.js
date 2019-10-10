var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view details in allocate products
router.get('/',  (req, res)=> {
    connection.query(`select * from allocate where status='1'`, (error, rows, fields) => {
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