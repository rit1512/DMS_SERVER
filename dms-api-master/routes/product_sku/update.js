var connection = require('../../config');
const express = require('express');
const router = express.Router();

//following code will edit product sku details by using put method
router.put('/:product_sku_id', (req, res) => {
    let sql = `update product_sku set product_id= '${req.body.product_id}',
   brand_id='${req.body.brand_id}',brand_name='${req.body.brand_name}' where product_sku_id= '${req.params.product_sku_id}'`;
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