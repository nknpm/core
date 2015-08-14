"use strict";

var http = require("http");
var string = require("lodash/string");
var request = require("./request.js");
var response = require("./response.js");

function Server(conf, route, next) {
  var server = http.createServer(function (req, res) {
    var timer = require("./timer").start();
    console.log(req.method + ' ' + req.headers.host + req.url + ' for ' + req.connection.remoteAddress);
    res.writeHead(conf.code, conf.headers);
    res.write(route, function () {
      console.log('Transmitting ' + conf.headers['content-type'] + '');
    });
    res.end(function () {
      console.log('Done in ' + timer.end().elapsed() + 'ms');
      console.log('Resume listening on port ' + conf.port + '...');
    });
  });

  server.listen(conf.port, function () {
    var re = /(?!\/)([a-zA-Z0-9_\-\.]+$)/g;
    var pname = process.title.match(re);
    var pfile = process.mainModule.filename.match(re);
    console.log(string.capitalize(pname) + ' "' + pfile + '" listening on port ' + conf.port + '...');
  }).on('error', function (e) {
    console.log(e);
  });
  return next();
}

module.exports = Server;
