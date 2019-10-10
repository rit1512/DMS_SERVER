var connection = require('../../config');
const express = require('express');
const router = express.Router();

//following code will edit company details by using put method
router.put('/:company_id', (req, res) => {
    let sql = `update company set company_name= '${req.body.company_name}',
   company_mobile='${req.body.company_mobile}',company_email='${req.body.company_email}' where company_id= '${req.params.company_id}'`;
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