var connection = require('../../config');
const express = require('express');
const router = express.Router();

//To view area details
router.get('/',  (req, res)=> {
    connection.query(`select * from area where  area_status = '1'`, (error, rows, fields) => {
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