
const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const connection = require("../../config");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router()

//post api for user login
router.post('/', (req,res) => {
  var email=req.body.email
  var password=req.body.password
  key = crypto.pbkdf2Sync(password, "salt", 10, 10, "sha512");
 // password = key.toString("hex");
  connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == key.toString("hex")){
        const token = jwt.sign({ user_id: results[0].user_id },process.env.TOKEN_SECRET );
       // res.status(200).json({"success":true,'msg':'company dashboard','companydata':results,'tokenKey':token  }); 
        res.header("auth-token", token).json({"success":true,'msg':'Employee dashboard','employeedata':results, tokenKey:token  }); 
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

  

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
// const connection = require("../../config");
// const dotenv = require("dotenv");
// dotenv.config();
// const router = express.Router();
// //post api for user login
// router.post("/", (req, res) => {
//   req.token="";
//   let { email, password } = req.body;

// // for hashing password by using crypto module
//   key = crypto.pbkdf2Sync(password, "salt", 10, 10, "sha512");
//   password = key.toString("hex");

// //for checking the email and password if feilds is empty
//   if (!email || !password) 
//   {
//     return res.status(400).json({ msg: "Please enter all fields" });
//   }

//  // checking user login credential 
//   let sql = `SELECT user_id from users where email='${email}' and password='${password}'`;
//   connection.query(sql, function(error, results) {
//     if (error) {
//       return res.json({
//         status: false,
//         message: error
//       });
//     }
//     console.log(error);
    
//     if (results[0].user_id> 0) {
//       //const id= result[0].user_id;
      
//       //Create and assign  a token with user_id
//      //const token = jwt.sign({ user_id: result[0].user_id },"edunomics" );
//       const token = jwt.sign({ user_id: result[0].user_id },process.env.TOKEN_SECRET );
//      // res.header("auth-token", token).json({msg:"ok",tokenkey:token});
//      res.status(200).json({'tokenKey':token});
//       console.log(token,`${result[0].user_id}`);
//       req.token=token;
//     }
//   });
// });

// module.exports = router;
