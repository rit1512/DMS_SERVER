var express = require('express');
var router = express.Router();

// adding new brand
var addbrand = require('./add');
router.use('/addbrand', addbrand);


// show brand deatails api
var viewbrand = require('./view');
router.use('/viewbrand', viewbrand);

// show single brand deatails api
var viewone = require('./viewone');
router.use('/viewone', viewone);

//edit brand details api
var updatebrand = require('./update');
router.use('/updatebrand', updatebrand);

//delete brand api
var deletebrand = require('./delete');
router.use('/deletebrand', deletebrand);




module.exports = router;