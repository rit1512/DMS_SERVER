var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view single users  details
router.get('/:user_id',  (req, res)=> {
    connection.query(`select * from users where status='1' AND user_id='${req.params.user_id}'`, (error, rows, fields) => {
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