var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(express.static('assets'));
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '20mb'}));


ledstatus = "off";

app.get('/', function (req, res) {
    res.sendfile('assets/index.html');
});

app.get('/gifs', function (req, res) {
    res.sendfile('assets/gifs.html');
});

app.get('/motion', function(req, res) {
	console.log("Motion detected");
	request("https://maker.ifttt.com/trigger/web_button_is_pressed/with/key/l9uHDHqqI570kbcVJ9_jFummpIxMaD069ZRJXvCHLuW", function (error, response, body) {
		console.log('E-mail sent');
		res.send(200);
	});
	
});

app.get('/ledstatus', function(req, res) {
	res.send({ledstatus: ledstatus});
});

app.post('/ledstatus', function(req, res) {
	if (ledstatus === "on") {
		ledstatus = "off";
	} else {
		ledstatus = "on";
	}
	res.send({ledstatus: ledstatus});
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});


