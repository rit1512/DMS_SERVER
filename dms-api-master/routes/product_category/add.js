var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code  will add new product
router.post('/',  (req, res, error)=> {
    var product_cat = {
      "product_cat":req.body.product_cat,
      "product_description": req.body.product_description,
       "status":1
  }

    connection.query('select  count(product_cat) as count from product_cat where product_cat=? ',[product_cat.product_cat], (error,results) => {
        if(results[0].count)
        {
            
            connection.query(`update product_cat set status="1" where status= "0" AND product_cat=?`,[product_cat.product_cat], (error) =>{
                if(!error){
                res.json({
                    status:true,
                    message:"product_cat is already added"
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
    connection.query('insert into product_cat set ?', product_cat, function (error, results, fields) {
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
                message: 'product_cat added sucessfully'
            })
            console.log(results);
        }
    });
  }
    }) 
});

module.exports = router


// var connection = require('../../config');
// const express = require('express');
// const router = express.Router();

// //this code  will add new product category
// router.post('/',  (req, res)=> {
//     var product_cat = {
//         "product_cat":req.body.product_cat,
//         "product_description": req.body.product_description,
//          "status":1
//     }

//     connection.query('insert into product_cat set ?', product_cat, function (error, results, fields) {
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
//                 message: 'Product category added sucessfully'
//             })
//             console.log(results);
//         }
//     });
// });

// module.exports = router;