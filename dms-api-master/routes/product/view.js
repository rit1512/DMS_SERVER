var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view product  details
router.get('/',  (req, res)=> {
    connection.query(`select * from product where status='1'`, (error, rows, fields) => {
      if (!error){
        res.send(rows);
        // res.json({
        //     status: true,
        //     message: 'Product added sucessfully'
        //   })
        console.log(rows);
      }
      else
    {
        res.status(404).json(error);
        // res.json({
        //     status: false,
        //     message: 'There is some error in query'
        //   })
        console.log(error);
    }
    });
  });
  
module.exports = router;