var express = require('express');
var router = express.Router();

// adding new product
var addproduct = require('./add');
router.use('/addproduct', addproduct);


// show product deatails api
var viewproduct = require('./view');
router.use('/viewproduct', viewproduct);

//edit product details api
var editproduct = require('./edit');
router.use('/editproduct', editproduct);

//delete product api
var deleteproduct = require('./delete');
router.use('/deleteproduct', deleteproduct);

//delete product api
var viewone = require('./viewone');
router.use('/viewone', viewone);




module.exports = router;