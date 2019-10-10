var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code will delete the users
router.delete('/:user_id', function (req, res) {
    connection.query(`update users SET  status = 0 where  status = '1' AND user_id='${req.params.user_id}'`, (error, rows, fields) => {
      if (!error){
       // res.send(rows);
       res.status(200).json({"success":true,'msg':'user deleted succesfully'})
      }
      else{
        console.log(error);
        return res.status(500).json({"success":false,'msg':'Server Issue'});
      }
    });
  });
  
module.exports = router;