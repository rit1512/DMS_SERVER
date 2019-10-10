var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view product category  details
router.get('/',  (req, res)=> {
    
    // var  sql=`SELECT shop.shop_name,shop.shop_location,users.user_name,users.mobile,product.product_name,product_cat.product_cat FROM ((users
    // INNER JOIN product ON users.user_id = product.product_id)
    // INNER JOIN shop ON users.user_id = shop.shop_id)
    // INNER JOIN product_cat ON users.user_id=product_cat.product_cat_id;`
    var sql =`select * from users where status='1';select * from shop where  shop_status = '1';select * from product where status='1';select * from product_cat where status='1'`
    connection.query(sql, (error, rows, fields) => {
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