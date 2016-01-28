'use strict';

var express = require('express');
var app = express();
require('dotenv').load();

app.get('/', function (req, res) {
	var response = new Object();
	response.ipaddress = req.headers['x-forwarded-for'];
	response.language = req.headers['accept-language'].substr(0,5);
	var os = req.headers['user-agent'];
	response.software = os.substring(os.indexOf('(') + 1, (os.indexOf(')')));
	console.log(os.length);
	console.log(os.length - os.indexOf(')'));
	console.log(os.indexOf(')'));
	res.send(JSON.stringify(response));
	console.log(req.headers);
});

var port = process.env.PORT;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});