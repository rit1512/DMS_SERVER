var express = require('express');
var router = express.Router();



router.get('/',(req, res, next) => 
{
	// console.log("req.session.cookie.maxAge"+req.session.cookie.maxAge);
	// req.session.destroy();

	req.token="";
	res.cookie('token','', { maxAge: 0, httpOnly: true });
	res.status(205).json({"success":true,'msg':'admin login page'});     
});

module.exports = router;