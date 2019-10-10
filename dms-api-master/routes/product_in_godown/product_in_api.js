var express = require('express');
var router = express.Router();

// adding new product in godown 
var add_in = require('./add');
router.use('/add_in', add_in);

// view new product in godown 
var view_in = require('./view');
router.use('/view_in', view_in);

// view new product in godown 
var delete_in = require('./delete');
router.use('/delete_in', delete_in);

module.exports = router;