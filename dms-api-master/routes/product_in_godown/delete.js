var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code will delete the godown product
router.delete('/:godown_id', function (req, res) {
    connection.query(`update godown SET  status = 0 where  status = '1' AND godown_id='${req.params.godown_id}'`, (error, rows, fields) => {
      if (!error){
       // res.send(rows);
       console.log(rows);
       res.status(200).json({"success":true,'msg':'Product deleted succesfully'})
      }
      else{
        console.log(error);
        return res.status(500).json({"success":false,'msg':'Server Issue'});
      }
    });
  });
  
module.exports = router;