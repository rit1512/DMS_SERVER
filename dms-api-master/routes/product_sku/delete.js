var connection = require('../../config');
const express = require('express');
const router = express.Router();

//this code will delete the product sku by updating status 1 to

router.delete('/:product_sku_id', function (req, res) {
    connection.query(`update product_sku SET  status = 0 where  status = '1' AND product_sku_id='${req.params.product_sku_id}'`, (error, rows, fields) => {
      if (!error){
       // res.send(rows);
       console.log(rows);
       res.status(200).json({"success":true,'msg':'Product sku deleted succesfully'})
       }
      else{
        console.log(error);
        return res.status(500).json({"success":false,'msg':'Server Issue'});
      }
    });
  });
  
module.exports = router;