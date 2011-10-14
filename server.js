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

server.get('/', function(req, res){
  res.render('index.jade');
});

server.set('view options', {
  layout: false
});

server.listen(3000);

server.configure('development', function(){
  server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

server.configure('production', function(){
  server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var nowjs = require("now");
var everyone = nowjs.initialize(server);

everyone.now.logStuff = function(msg){
    console.log(msg);
}
