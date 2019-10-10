var express = require('express');
var router = express.Router();

//adding new area
var addarea = require('./add');
router.use('/addarea', addarea);


// show area deatails api
var viewarea = require('./view');
router.use('/viewarea', viewarea);

//edit area details api
var editarea = require('./edit');
router.use('/updatearea', editarea);

//delete area api
var deletearea = require('./delete');
router.use('/deletearea', deletearea);




module.exports = router;