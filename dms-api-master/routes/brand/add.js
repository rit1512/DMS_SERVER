var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code  will add new Brand
router.post('/',  (req, res, error)=> {
    var brand = {
        "brand_name": req.body.brand_name,
        "product_name": req.body.product_name,
        "status":1
    }

    connection.query('select  count(product_name) as count from brand where product_name=? ',[brand.product_name], (error,results) => {
        if(results[0].count)
        {
            
            connection.query(`update brand set status="1" where status= "0" AND product_name=?`,[brand.product_name], (error) =>{
                if(!error){
                res.json({
                    status:true,
                    message:"product is already added"
                })
               
                }
                else{
                    res.json({
                        status:false,
                        message:"there are some error 1 with query"
                    })
                    console.log(error)
                }
            })
        } 
  else{
    connection.query('insert into brand set ?', brand, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error 2 with query'
            })
            console.log(error);
        } else {
            res.json({
                status: true,
                data: results,
                message: 'Brand added sucessfully'
            })
            console.log(results);
        }
    });
  }
    }) 
});

module.exports = router
// router.post('/',  (req, res)=> {
//     var brand = {
//         "brand_name": req.body.brand_name,
//         "product_name": req.body.product_name,
//              "status":1
//     }

//     connection.query('insert into brand set ?', brand, function (error, results, fields) {
//         if (error) {
//             res.json({
//                 status: false,
//                 message: 'there are some error with query'
//             })
//             console.log(error);
//         } else {
//             res.json({
//                 status: true,
//                 data: results,
//                 message: 'Brand added sucessfully'
//             })
//             console.log(results);
//         }
//     });
// });

//module.exports = router;