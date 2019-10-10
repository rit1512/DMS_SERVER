var connection = require('../../config');
const express = require('express');
const router = express.Router();
//const auth= require('../auth');

//this code  will add shop
router.post('/',  (req, res)=> {
    var shop = {
        "shop_name": req.body.shop_name,
        "shop_email": req.body.shop_email,
        "Contact_No":req.body.Contact_No,
         "shop_location":req.body.shop_location,
        "shop_pic":req.body.shop_pic,
         "shop_status":1
    }

    connection.query('insert into shop set ?', shop, function (error, results, fields) {
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
                message: 'Shop added sucessfully'
            })
            console.log(results);
        }
    });
});

module.exports = router;