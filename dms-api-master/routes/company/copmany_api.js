var express = require('express');
var router = express.Router();

// adding new company admin
var login = require('./login');
router.use('/login', login);

// view new company admin
var viewcompany = require('./view');
router.use('/viewcompany', viewcompany);

// view new company admin update
var updatecompany = require('./update');
router.use('/updatecompany', updatecompany);

// adding new company logout
var logout = require('./logout');
router.use('/logout', logout);



module.exports = router;