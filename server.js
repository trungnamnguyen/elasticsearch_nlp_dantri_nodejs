var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');

var httpServer = http.createServer(app);

httpServer.listen(8888, function(){
    console.log ('http:8888');

});

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile('index.html');
})