#!/usr/bin/env node

const rovel = require("./index.js");
console.log(rovel.text.green.bold("Loaded ROVEL.JS"));
var m = new rovel.matcher("hello hi");
console.log(m.get('heelo'));
if(process.argv[2]){
console.log(rovel.prettynum(process.argv[2]));
}
console.log(rovel.emoji.get('smile'));
