var express = require("express");
var router = express.Router();

//user api
var Users = require('./user/user_api');
router.use('/user_api', Users);

//shop api 
var Shop = require('./shop/shop_api');
router.use('/shop_api', Shop);

//product api 
var Product = require('./product/product_api');
router.use('/product_api', Product);

//Area api 
var Area = require('./area/area_api');
router.use('/area_api', Area);

//product category api 
var Product_cat = require('./product_category/product_cat_api');
router.use('/product_cat_api', Product_cat);

//product category api 
var Brand = require('./brand/brand_api');
router.use('/brand_api', Brand);

// product sku api
var Product_sku = require('./product_sku/product_sku_api');
router.use('/sku_api', Product_sku);

// company api
var company = require('./company/copmany_api');
router.use('/company', company);

// godown api
var godown = require('./product_in_godown/product_in_api');
router.use('/godown', godown);

// company api
var shop_order = require('./shop_order/shop_order_api');
router.use('/shop_order', shop_order);

// allocate api
var allocate_api = require('./allocate/allocate_api');
router.use('/allocate_api', allocate_api);

module.exports = router;