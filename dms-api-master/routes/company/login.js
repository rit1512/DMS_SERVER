
const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const connection = require("../../config");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router()

//post api for user login
router.post('/', (req,res) => {
  var company_email=req.body.company_email
  var company_password=req.body.company_password
  //key = crypto.pbkdf2Sync(company_password, "salt", 10, 10, "sha512");
  //company_password = key.toString("hex");
  connection.query('SELECT * FROM company WHERE company_email = ?',[company_email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].company_password == company_password){
        const token = jwt.sign({ company_id: results[0].company_id },"edunomics" );
       // res.status(200).json({"success":true,'msg':'company dashboard','companydata':results,'tokenKey':token  }); 
        res.header("auth-token", token).json({"success":true,'msg':'company dashboard','companydata':results,tokenKey:token  }); 
      }
      else{
        res.send({
          code:204,
          msg:"Password does not match"
            });
      }
    }
    else{
      res.send({
        code:204,
        msg:"Email does not exits"
          });
    }
  }
  });


})

module.exports = router;

  