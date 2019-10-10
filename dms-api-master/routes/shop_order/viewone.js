var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view product category  details
router.get('/:order_id',  (req, res)=> {
    connection.query(`select * from shop_order where status='1' AND order_id='${req.params.order_id}'`, (error, rows, fields) => {
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