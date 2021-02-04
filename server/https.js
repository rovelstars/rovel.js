#!/usr/bin/env node

var fs = require('fs'),
    https = require('https');

https.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(process.argv[2] || 3000);
console.warn(`HTTPS-Server listening on ${process.argv[2] || 3000}`);
