var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view product category  details
router.get('/:shop_id',  (req, res)=> {
    connection.query(`select * from shop where shop_status='1' AND shop_id='${req.params.shop_id}'`, (error, rows, fields) => {
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