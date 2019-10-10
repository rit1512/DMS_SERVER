var connection = require('../../config');
const express = require('express');
const router = express.Router();
const auth= require('../auth');

//following code for edit user details using put method
router.put('/:user_id', (req, res) => {
    let sql = `update users set user_name= '${req.body.user_name}',
   mobile= '${req.body.mobile}',email='${req.body.email}',profile_pic='${req.body.profile_pic}' where user_id= '${req.params.user_id}'`;
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