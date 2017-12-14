
//First Task

var Event = require("events").EventEmitter;

var logger = new Event();
var d = new Date();

logger.on('log_in', function(a){
	console.log(a + " logged in");
	console.log(d.getHours() + ':' + d.getMinutes());
});

logger.on('action', function(){
	setTimeout(function(){ 
		console.log("Added post 'Wild life'");
	}, 2000);
});

logger.on('log_out', function(a){ 
	setTimeout(function(){ 
		console.log(a + " logged out");
	}, 3000);
});

logger.emit('log_in', 'Vasya');
logger.emit('action');
logger.emit('log_out', 'Vasya');

//Second Task
var http = require("http");

var app = http.createServer(function (req, res){
	if(req.url ==='/about'){
		res.write('<h1>About us</h1>');
		console.log(req.url);
		res.end();
	} else if(req.url ==='/stop'){
			app.close();
			res.end();
	}
});

app.listen(3000, function (){
console.log("Server on localhost:3000");
});

//Third Task
var req = require('request');

var URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

req(URL, function (err, res, body) {
    if (err) throw err;
    console.log('privat: '+ body);
});

//Fourth Task
var fs = require('fs')
var request = require('request');

var URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

request(URL).pipe(fs.createWriteStream('example.js'));