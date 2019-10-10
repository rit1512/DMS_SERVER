var connection = require('../../config');
const express = require('express');
const router = express.Router();

//this code  will add new product SKU
router.post('/',  (req, res)=> {
    var product_sku = {
        "product_sku_id":req.body.product_sku_id,
        "product_id": req.body.product_id,
        "brand_id": req.body.brand_id,
        "brand_name": req.body.brand_name,
         "status":1
    }

    connection.query('insert into product_sku set ?', product_sku, function (error, results, fields) {
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
                message: 'Product sku added sucessfully'
            })
            console.log(results);
        }
    });
});

module.exports = router;