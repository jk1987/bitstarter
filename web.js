var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    mybuf = readFileSync("./index.html");
    var buf = new Buffer(mybuf);
    response.send(buf.toString('utc-8'));
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
};
	   
