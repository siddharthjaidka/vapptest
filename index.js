var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var server = require('http').createServer(app);
var path = require('path');
app.use(express.static(__dirname + '/yol'));
app.use(express.static(__dirname + '/vtour'));
app.use(express.static(__dirname + '/mo'));


// Set request headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
	next();
});


// Cross-Origin
app.use(
	cors({
		origin: '*'
	})
);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// json spaces set
app.set('json spaces', 2);


// define base route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'vtour/tour.html'));
});


// listen for requests
server.listen(3000, '0.0.0.0', () => {
    console.log('VAPP Server is listening on port 3000');
});
