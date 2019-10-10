var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code  will add products in godown
router.post('/',  (req, res)=> {
    var godown = {
        "product_name": req.body.product_name,
        "product_cat": req.body.product_cat,
        "quantity":req.body.quantity,
         "cost_per_unit":req.body.cost_per_unit,
        "total_cost":req.body.cost_per_uint*req.body.quantity,
        "total_box":req.body.total_box,
        "box_amt":req.body.cost_per_uint*req.body.quantity*req.body.total_box,
     "date_of_coming":new Date(),
         "status":1
    }

    connection.query('insert into godown set ?', godown, function (error, results, fields) {
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
                message: 'Product in godown added sucessfully'
            })
            console.log(results);
        }
    });
});

module.exports = router;