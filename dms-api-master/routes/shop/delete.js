var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code will delete the shop 
router.delete('/:shop_id', function (req, res) {
    connection.query(`update shop SET  shop_status = 0 where  shop_status = '1' AND shop_id='${req.params.shop_id}'`, (error, rows, fields) => {
      if (!error){
       // res.send(rows);
       console.log(rows);
       res.status(200).json({"success":true,'msg':'shop deleted succesfully'})
      }
      else{
        console.log(error);
        return res.status(500).json({"success":false,'msg':'Server Issue'});
      }
    });
  });
  
module.exports = router;