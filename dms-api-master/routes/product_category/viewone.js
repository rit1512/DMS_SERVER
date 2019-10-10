var connection = require('../../config');
const express = require('express');
const router = express.Router();

//To view product category  details
router.get('/:product_cat_id',  (req, res)=> {
    connection.query(`select * from product_cat where status='1' AND product_cat_id='${req.params.product_cat_id}'`, (error, rows, fields) => {
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