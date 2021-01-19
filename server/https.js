#!/usr/bin/env node

const https = require('https')
const fs = require('fs')
if(!process.argv[2]){
 console.error("Please enter the html file to host.");
 process.exit(0);
}
if(!process.argv[3]){
 console.warn("Using port - 3000");
}
const server = https.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream(process.argv[2]).pipe(res)
});

server.listen(process.argv[3] || 3000);