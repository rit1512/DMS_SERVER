var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//following code will edit shop details by using put method
router.put('/:shop_id', (req, res) => {
    let sql = `update shop set shop_name= '${req.body.shop_name}',
   shop_email='${req.body.shop_email}',shop_location='${req.body.shop_location}',shop_pic='${req.body.shop_pic}' where shop_id= '${req.params.shop_id}'`;
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