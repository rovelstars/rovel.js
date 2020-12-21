#!/usr/bin/env node

const {execapp, execarg} = require("./lib/execapp.js");
const rovel = require("../index.js");
const spin = require('./lib/spin');
const dotenv = require("../extra/dotenv");
const spinner = spin('Loading Packages').start();
const {$HOME} = require("./bin/data.js");
const fs = require("fs");

if(process.argv[2]==undefined || process.argv.includes("--config")){
function loadconfig(num) {
	if(!fs.existsSync(`${$HOME}/.ros.env`)){
	fs.readFile("./bin/config.env", 'utf8', function(err, data){
	fs.writeFile(`${$HOME}/.ros.env`, data, function(err){
		if (err) throw error;
	})})
	}}
	if(fs.existsSync(`${$HOME}/.ros.env`)){
		let tex = rovel.text.red.bold("\nThe configuration File exists. Therefore, closing the installation.");
		spinner.text = tex;
		spinner.fail();
		process.exit(0);
}
setTimeout(() => {
	spinner.color = 'red';
	spinner.text = 'Loading Configuration';
	spinner.spinner = 'bounce'
	loadconfig()
}, 3000);
setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Saving Configuration';
	spinner.spinner = 'bounce'
}, 6000);
setTimeout(() => {
	spinner.text = "Saved Configuration!";
	spinner.succeed();
	execarg("node","../rosins.js --done");
}, 9000);
}
