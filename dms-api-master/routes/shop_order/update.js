var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//following code will edit shop details by using put method
router.put('/:order_id', (req, res) => {
    let sql = `update shop_order set shop_name= '${req.body.shop_name}',
   product_name='${req.body.product_name}',product_cat='${req.body.product_cat}',quantity='${req.body.quantity}',emp_name='${req.body.emp_name}',emp_mob='${req.body.emp_mob}',location='${req.body.location}' where order_id='${req.params.order_id}'`;
    connection.query(sql, (error, rows, fields) => {
      if (!error){
       //res.status(200).json(rows);
       res.json({
        status: true,
        msg: 'Order updated succesfully'
    })
       console.log(rows);
         }
       else{
           res.status(404).json(error);
        console.log(error);
       }
       
    });
  });

  module.exports = router;