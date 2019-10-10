var connection = require('../../config');
const express = require('express');
const router = express.Router();

//this code will delete the product category by updating status 1 to

router.delete('/:product_cat_id', function (req, res) {
    connection.query(`update product_cat SET  status = 0 where  status = '1' AND product_cat_id='${req.params.product_cat_id}'`, (error, rows, fields) => {
      if (!error){
       // res.send(rows);
       console.log(rows);
       res.status(200).json({"success":true,'msg':'Product Category deleted succesfully'})
       }
      else{
        console.log(error);
        return res.status(500).json({"success":false,'msg':'Server Issue'});
      }
    });
  });
  
module.exports = router;