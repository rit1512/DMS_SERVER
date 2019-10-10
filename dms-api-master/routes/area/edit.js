var connection = require('../../config');
const express = require('express');
const router = express.Router();

//following code will edit shop details by using put method
router.put('/:area_id', (req, res) => {
    let sql = `update area set area_name= '${req.body.area_name}',
   area_brief='${req.body.area_brief}' where area_id= '${req.params.area_id}'`;
    connection.query(sql, (error, rows, fields) => {
      if (!error){
       res.status(200).json(rows);
       console.log(rows);
         }
       else{
           res.status(404).json(error);
        console.log(error);
       }
       
    });
  });

  module.exports = router;