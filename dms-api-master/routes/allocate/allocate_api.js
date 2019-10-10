var express = require('express');
var router = express.Router();

// Allocatre new product to employee
var allocate = require('./add');
router.use('/allocate', allocate);

// Allocatre new product to employee
var viewallocate = require('./view');
router.use('/viewallocate', viewallocate);



module.exports = router;