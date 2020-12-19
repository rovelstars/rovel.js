#!/usr/bin/env node

//require
const json = require("../lib/json");
const {execapp, execarg} = require("../lib/execapp.js");
const {clear} = require("../lib/clear.js");
const {$HOME,isWin} = require("./data.js");
const fs = require("fs");
const path = require("path");
clear(isWin);
//welcome function

        function welcome(){
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
	console.log("Hello User! Rovel OS is setting up!");
        setTimeout(function(){
	console.log("Loading rovel os configuration for the first time use!");
	},4000);
	json.readFile("config.json", function(err, obj){
		if(err) throw err;
		json.writeFile($HOME+"/.rovelos.json", obj).then(res=>console.log("Loading Files...")).catch(err=>console.log(`Error! ${err}`));	
  setTimeout(function(){console.log('Done.');},5000);
  setTimeout(function(){clear(isWin)},6000);
  setTimeout(function(){welcome()}, 9000);
})};
