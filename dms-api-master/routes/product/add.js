var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code  will add new product
router.post('/',  (req, res, error)=> {
    var product = {
      // "product_cat_id": req.body.product_cat_id,
       "product_name": req.body.product_name,
        "product_cat":req.body.product_cat,
       "quantity_status":req.body.quantity_status,
        "status":1
                 }

    connection.query('select  count(product_cat) as count from product where product_cat=? ',[product.product_cat], (error,results) => {
        if(results[0].count)
        {
            
            connection.query(`update product set status="1" where status= "0" AND product_cat=?`,[product.product_cat], (error) =>{
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
    connection.query('insert into product set ?', product, function (error, results, fields) {
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
                message: 'product added sucessfully'
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
// //const auth= require('../auth');

// //this code  will add new product
// router.post('/',  (req, res)=> {
//     var product = {
//        // "product_cat_id": req.body.product_cat_id,
//         "product_name": req.body.product_name,
//          "product_cat":req.body.product_cat,
//         "quantity_status":req.body.quantity_status,
//          "status":1
//     }

//     connection.query('insert into product set ?', product, function (error, results, fields) {
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
//                 message: 'Product added sucessfully'
//             })
//             console.log(results);
//         }
//     });
// });

// module.exports = router;