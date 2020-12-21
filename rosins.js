#!/usr/bin/env node

const rovel = require("./index.js");
const {execapp, execarg} = require("./rovelos/lib/execapp.js");

if(process.argv[2]==undefined){
console.log("Starting installation of Rovel OS...");
execarg("node","rovelos/install.js");
}

if(process.argv.includes("--done")){
console.log(rovel.text.green.bold("Completed installing Rovel OS successfully ✓\nPlease run \"rovelos-login\" to start Rovel OS.\nThanks from Rovel Team for installing Rovel OS!"));
}

if(process.argv.includes("-co")){
console.log(rovel.text.yellow("Installing Configuration only."));
execarg("node","rovelos/install.js --config");
}
