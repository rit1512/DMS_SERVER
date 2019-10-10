var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code  will allocate products to employee
router.post('/',  (req, res)=> {
    var allocate = {
        "user_name": req.body.user_name,
        "product_name": req.body.product_name,
        "product_cat": req.body.product_cat,
        "quntity":req.body.quntity,
        "date":new Date(),
         "status":1
    }

    connection.query('insert into allocate set ?', allocate, function (error, results, fields) {
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
                message: 'Product  allocate to employee sucessfully'
            })
            console.log(results);
        }
    });
});

module.exports = router;