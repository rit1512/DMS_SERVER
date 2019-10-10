var connection = require('../../config');
const express = require('express');
const router = express.Router();

//To view product sku  details
router.get('/',  (req, res)=> {
    connection.query(`select * from product_sku where status='1'`, (error, rows, fields) => {
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