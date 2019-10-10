var express = require('express');
var router = express.Router();

// adding new shop
var addshop = require('./add');
router.use('/addshop', addshop);


// show shop deatails api
var viewshop = require('./view');
router.use('/viewshop', viewshop);

// show shop deatails api
var inactiveshop = require('./inactive');
router.use('/inactiveshop', inactiveshop);

//edit shop details api
var editshop = require('./edit');
router.use('/updateshop', editshop);

//delete shop api
var deleteshop = require('./delete');
router.use('/deleteshop', deleteshop);

// show shop viewone api
var viewone = require('./viewone');
router.use('/viewone', viewone);


module.exports = router;