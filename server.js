var fs = require('fs');
var http = require('http');
var express = require('express');

var server = express.createServer()
  .use(express.favicon())
  .use(express.logger())
  .use('/css', express.static(__dirname + '/css'))
  .use('/img', express.static(__dirname + '/img'))
  .use('/js', express.static(__dirname + '/js'))
  .use(express.bodyParser())

server.set('view options', { pretty: true });

server.get('/', function(req, res){
  res.render('index.jade');
});

server.get('/projects', function(req, res){
  res.render('projects.jade');
});

server.set('view options', {
  layout: false
});

var port = process.env.PORT || 3000;
server.listen(port);

var nowjs = require("now");
var everyone = nowjs.initialize(server);

everyone.now.logStuff = function(msg){
    console.log(msg);
}
