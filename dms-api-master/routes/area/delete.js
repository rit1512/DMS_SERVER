var connection = require('../../config');
const express = require('express');
const router = express.Router();

//this code will delete the shop 
router.delete('/:area_id', function (req, res) {
    connection.query(`update area SET  area_status = 0 where  area_status = '1' AND area_id='${req.params.area_id}'`, (error, rows, fields) => {
      if (!error){
       // res.send(rows);
       console.log(rows);
       res.status(200).json({"success":true,'msg':'Area deleted succesfully'})
      }
      else{
        console.log(error);
        return res.status(500).json({"success":false,'msg':'Server Issue'});
      }
    });
  });
  
module.exports = router;