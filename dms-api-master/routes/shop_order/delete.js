var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code will delete the shop order
router.delete('/:order_id', function (req, res) {
    connection.query(`update shop_order SET  status = 0 where  status = '1' AND order_id='${req.params.order_id}'`, (error, rows, fields) => {
      if (!error){
       // res.send(rows);
       console.log(rows);
       res.status(200).json({"success":true,'msg':'Order deleted succesfully'})
      }
      else{
        console.log(error);
        return res.status(500).json({"success":false,'msg':'Server Issue'});
      }
    });
  });
  
module.exports = router;