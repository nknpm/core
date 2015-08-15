"use strict";

var http = require("http");
var string = require("lodash/string");
var request = require("./request.js");
var response = require("./response.js");

function Server(conf, output, next) {
  
  var server = http.createServer(function (req, res) {
    var clock = require("./clock").start();
    console.log(req.method + ' ' + req.headers.host + req.url + ' for ' + req.connection.remoteAddress);
    res.writeHead(conf.code, conf.headers);
    res.write(output, function () {
      console.log('Sending ' + conf.headers['content-type'] + '');
    });
    res.end(function () {
      console.log('Finished in ' + clock.elapsed() + 'ms');
      console.log('Resume listening on port ' + conf.port + '...');
    });
  });

  server.listen(conf.port, function () {
    var re = /(?!\/)([a-zA-Z0-9_\-\.]+$)/g;
    var procName = process.title.match(re);
    var procFile = process.mainModule.filename.match(re);
    console.log(string.capitalize(procName) + ' "' + procFile + '" listening on port ' + conf.port + '...');
  }).on('error', function (e) {
    console.log(e);
  });
  
  return next();
}

module.exports = Server;
