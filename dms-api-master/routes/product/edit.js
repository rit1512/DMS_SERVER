var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//following code will edit product details by using put method
router.put('/:product_id', (req, res) => {
    let sql = `update product set  product_name='${req.body.product_name}',
    product_cat='${req.body.product_cat}',
    quantity_status='${req.body.quantity_status}' where product_id= '${req.params.product_id}'`;
    connection.query(sql, (error, rows, fields) => {
      if (!error){
       res.status(200).json(rows);
       console.log(rows);
         }
       else{
           res.status(404).json(error);
        console.log(error);
       }
       
    });
  });

  module.exports = router;