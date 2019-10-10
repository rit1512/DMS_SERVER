var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code will delete the brand by updating status 1 to 0 

router.delete('/:brand_id', function (req, res) {
    connection.query(`update brand SET  status = 0 where  status = '1' AND brand_id='${req.params.brand_id}'`, (error, rows, fields) => {
      if (!error){
       // res.send(rows);
       console.log(rows);
       res.status(200).json({"success":true,'msg':'Brand deleted succesfully'})
      }
      else{
        console.log(error);
        return res.status(500).json({"success":false,'msg':'Server Issue'});
      }
    });
  });
  
module.exports = router;