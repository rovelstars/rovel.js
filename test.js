const rovel = require("./index.js");
const pkg = require("./package.json");
rovel.npm.getdetails("rovel.js", test);

function test(data) {
if(pkg.version < data['dist-tags'].latest){
	console.log(rovel.text.red.bold(`New update for ROVEL.JS! Please update your version ${pkg.version} with the current version ${data["dist-tags"].latest}!`));
}}
