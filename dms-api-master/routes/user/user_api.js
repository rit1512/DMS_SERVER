var express = require('express');
var router = express.Router();

// adding new user
var addusers = require('./add');
router.use('/adduser', addusers);

//login
var userlogin = require('./login');
router.use('/login', userlogin);

//forget password api
var forgetPassword = require('./forgetPassword');
router.use('/forgetpassword', forgetPassword);

//reset password api
var resetPassword = require('./resetPassword');
router.use('/resetpassword', resetPassword);

// show user deatails api
var viewusers = require('./view');
router.use('/viewuser', viewusers);

//edit user details api
var updateusers = require('./update');
router.use('/updateuser', updateusers);

//delete user api
var deleteusers = require('./delete');
router.use('/deleteuser', deleteusers);

//show profle api
var myprofile = require('./profile');
router.use('/myprofile', myprofile);

//show profle api
var viewone = require('./viewone');
router.use('/viewone', viewone);


module.exports = router;