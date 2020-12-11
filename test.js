const rovel = require("./index.js");
console.log(rovel.text.green.bold("Loaded ROVEL.JS"));
var m = new rovel.matcher("hello hi");
console.log(m.get('heelo'));
rovel.base().then(r=>console.log(r));
