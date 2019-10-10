var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view shop details
router.get('/', (req, res)=> {
    connection.query(`select * from shop where  shop_status = '1'`, (error, rows, fields) => {
      if (!error){
        res.send(rows);
        console.log(error);
      }
      else
    {
        res.status(404).json(error)
        console.log(error);
    }
        
    });
  });
  
module.exports = router;