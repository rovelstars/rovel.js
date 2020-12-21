#!/usr/bin/env node

//require
const {execapp, execarg} = require("../lib/execapp.js");
const {clear} = require("../lib/clear.js");
const {$HOME,isWin} = require("./data.js");
const text = require("../../index.js").text;
const fs = require("fs");
//welcome function

        function welcome(){
	clear(isWin);
	let rovel = require("rovel.js");
	let config = require(`${$HOME}/.rovelos.json`);
	console.log(`Welcome back ${config.username}! Please wait while Rovel OS is starting up...`);
	
	setTimeout(function(){
		console.log(config.welmsg);
		console.log("Login as "+rovel.text.red.bold(config.username));
	}, 10000);
	};
if(fs.existsSync(`${$HOME}/.rovelos.json`)){
	setTimeout(function(){welcome()}, 3000);
};
if(!fs.existsSync(`${$HOME}/.rovelos.json`)){
	console.log("Uh oh! No config file found. Please reinstall OS. If you deleted the config file, you can bring it back by running:");
	console.log(text.yellow.bold("rovelos-install -co"));
	console.log("Which will install the default config file again in its place.");
};
