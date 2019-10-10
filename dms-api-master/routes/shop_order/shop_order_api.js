var express = require('express');
var router = express.Router();

// adding new order
var addorder = require('./add');
router.use('/addorder', addorder);


// show order deatails api
var vieworder = require('./view');
router.use('/vieworder', vieworder);


//edit order details api
var editorder = require('./update');
router.use('/updateorder', editorder);

//edit viewall details api
var viewall = require('./viewall');
router.use('/viewall', viewall);


//delete order api
var deleteorder = require('./delete');
router.use('/deleteorder', deleteorder);

// show order viewone api
var viewone = require('./viewone');
router.use('/viewone', viewone);


module.exports = router;