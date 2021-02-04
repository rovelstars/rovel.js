//plugins
const pkg = require("./package.json");
const text = require("./plugins/colors/index.js");
const approx = require("./plugins/approx/index.js");
const func = require("./plugins/functions/index.js");
const netspeed = require("./plugins/netspeed/app.js");
const npm = require("./plugins/api-npm/api.js");
const fetch = require("./plugins/fetch/lib/index.js");
const clihelp = require("./plugins/clihelp/lib/index.js");
const emoji = require("./plugins/node-emoji/index.js");
const env = require("./plugins/env/lib/main.js");
const time = require("./plugins/time/time.js");
const pkgjs = require("./plugins/pkgjs/index.js");
const supportsColors = require("./plugins/supports-colors");
const figlet = require("./plugins/figlet/lib/node-figlet.js");

//check whether terminal support colors
text.enabled = supportsColors.hasBasic;

//functions
const {exec} = require("child_process");
const download = require("./app/download.js");
const listpost = require("./app/listpost.js");
const {execapp, execarg} = require("./rovelos/lib/execapp.js");
const {clear} = require("./rovelos/lib/clear.js");
const osdata = require("./rovelos/bin/data.js");
const spinner = require("./rovelos/lib/spin/index.js");

//check for updates ¯\_(ツ)_/¯

npm.getdetails("rovel.js", test);
function test(data) {
    if (pkg.version < data['dist-tags'].latest) {
        console.log(text.red.bold(`New update for ROVEL.JS! Please update your version ${pkg.version} with the current version ${data["dist-tags"].latest}!`));
    }

    if (pkg.beta == true && pkg.betabuild > data['dist-tags'].latest) {
        console.log(text.green.bold(`Thanks for installing the beta update of ROVEL.JS! Please note that beta versions may not work properly, and features given in beta may be removed. So please use this beta for testing purposes. If you find any bugs with beta version, kindly let us know either in github issues or in our discord server!\nStable Release:${data["dist-tags"].latest}\nBeta Version: ${pkg.betabuild}`));
    }
}

if (process.argv.includes("--test")) {
	require("./test.js");
	console.log(text.green.bold("Test file works ✓"));
    console.log(text.green.bold("Successfully Loaded All Plugins and Apps.\n")+text.yellow("If any error would occur, original error would popup."));
    process.exit(0);
}
//start of stuff for later ones.

//export plugins
module.exports = {pkg, text, approx, func, netspeed, npm, fetch, clihelp, emoji, download, listpost, env, time, exec, execapp, execarg, osdata, clear, spinner, pkgjs, supportsColors, figlet};


