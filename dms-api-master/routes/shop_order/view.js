var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view shop details
router.get('/', (req, res)=> {
  var sql=`select s.shop_name,p.product_name,so.quantity 
  from shop_order so join shop s
   on  so.shop_id=s.shop_id
   join product p on so.product_id =p.product_id
   join product_cat pc on so.product_cat_id= pc.product_cat_id join users u on so.user_id=u.user_id`
    connection.query(sql, (error, rows, fields) => {
      if (!error){
        res.send(rows);
        console.log(error);
      }
      else
    {
        res.status(404).json(error)
        console.log(error);
    }
        
    });
  });
  
module.exports = router;