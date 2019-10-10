var connection = require('../../config');
const express = require('express');
const router = express.Router();
const auth= require('../auth');

//following code will edit brand details by using put method
router.put('/:brand_id', (req, res) => {
 
    let sql = `update brand set brand_name= '${req.body.brand_name}',product_name= '${req.body.product_name}'
    where brand_id= '${req.params.brand_id}'`;
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