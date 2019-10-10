var express = require('express');
var router = express.Router();

// adding new product category 
var addproductcat = require('./add');
router.use('/addproductcat', addproductcat);


// show product category deatails api
var viewproductcat = require('./view');
router.use('/viewproductcat', viewproductcat);

//edit product category  details api
var updateproductcat = require('./update');
router.use('/updateproductcat', updateproductcat);

//delete product category  api
var deleteproductcat = require('./delete');
router.use('/deleteproductcat', deleteproductcat);

//delete product category  api
var viewone = require('./viewone');
router.use('/viewone', viewone);







module.exports = router;