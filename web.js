#!/usr/bin/env mode

var express = require('express');
var fs  = require("fs");
var app = express.createServer(express.logger());

var text = fs.readFileSync('/index.html', 'utf8')
console.log(text);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
