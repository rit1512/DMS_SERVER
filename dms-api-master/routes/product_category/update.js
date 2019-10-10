var connection = require('../../config');
const express = require('express');
const router = express.Router();

//following code will edit product category details by using put method
router.put('/:product_cat_id', (req, res) => {
    let sql = `update product_cat set product_cat= '${req.body.product_cat}',
   product_description='${req.body.product_description}' where product_cat_id= '${req.params.product_cat_id}'`;
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