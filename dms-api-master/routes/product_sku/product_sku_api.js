var express = require('express');
var router = express.Router();

// adding new product sku 
var addproductsku = require('./add');
router.use('/addproductsku', addproductsku);


// show product sku deatails api
var viewproductsku = require('./view');
router.use('/viewproductsku', viewproductsku);

//edit product sku  details api
var updateproductsku = require('./update');
router.use('/updateproductsku', updateproductsku);

//delete product sku  api
var deleteproductsku = require('./delete');
router.use('/deleteproductsku', deleteproductsku);


module.exports = router;