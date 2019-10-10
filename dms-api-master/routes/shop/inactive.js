var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//To view shop details
router.get('/',  (req, res)=> {
    connection.query(`select shop_name,shop_email,Contact_No, shop_location,shop_pic from shop where  shop_status = '0'`, (error, rows, fields) => {
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