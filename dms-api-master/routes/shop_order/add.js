 var connection = require('../../config');
const express = require('express');
const router = express.Router();

//this code  will add  shop order
router.post('/',  (req, res)=> {
    console.log(req)
     //var sql="";
     //var sql_arr=new Array();

   
     // let InsertQuery=`INSERT into shop_order(shop_id,product_,product_cat,quantity,emp_name,emp_mob,location,order_date,status) values ?`;
//  for (let j = 0; j < req.body.shop_order_array; j++) {
//     var order = {
//         "shop_name": req.body.shop_order_array[j].shop_name,
//         "product_name": req.body.shop_order_array[j].product_name,
//         "product_cat": req.body.shop_order_array[j].product_cat,
//         "quantity": req.body.shop_order_array[j].quantity,
//         "emp_name": req.body.shop_order_array[j].emp_name,
//         "emp_mob": req.body.shop_order_array[j].emp_mob,
//         "location": req.body.shop_order_array[j].location,
//         "order_date": new Date(),
//          "status":1
//     };
//     sql_arr[j]=order;
//      sql =sql+'insert into shop_order set ? ;';
//     }
InsertQuery=`INSERT into shop_order(shop_id,quantity,product_id,user_id,product_cat_id) values  ?`;
    connection.query(InsertQuery,[req.body.shop_order_array.map(item=>[item.shop_id,
        item.quantity,
        item.product_id,
        item.product_cat_id,
        item.user_id
    ])],
         function (error, results, fields) {
        // console.log("dfdf")
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
            console.log(error);
        } else {
            res.json({
                status: true,
                data: results,
                message: 'Order added sucessfully'
            })
            console.log(results);
        }
    });
});

module.exports = router;
