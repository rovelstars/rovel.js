const fetch = require("./extra/node-fetch")
const { exec, child } = require("child_process")
const baseurl = "https://rovelapi.glitch.me"
const text = require("./extra/ansi-colors")
const command = require("./extra/commander.js")
const http = require("http")
const fs = require("fs")
const matcher = require("./extra/did-you-mean")
const npm = require("./extra/api-npm/api.js")
const prettynum = require("./extra/approx/index.js")
const emoji = require("./extra/node-emoji")
const python = require("./extra/python-shell")
const pkg = require("./package.json")
const netspeed = require("./extra/network-speed")
npm.getdetails("rovel.js", test);
function test(data) {
	if(pkg.version < data['dist-tags'].latest){
		console.log(text.red.bold(`New update for ROVEL.JS! Please update your version ${pkg.version} with the current version ${data["dist-tags"].latest}!`));
	}
	if(pkg.beta==true && pkg.betabuild > data['dist-tags'].latest){
		console.log(text.green.bold(`Thanks for installing the beta update of ROVEL.JS! Please note that beta versions may not work properly, and features given in beta may be removed. So please use this beta for testing purposes. If you find any bugs with beta version, kindly let us know either in github issues or in our discord server!\nStable Release:${data["dist-tags"].latest}\nBeta Version: ${pkg.version}`));
	}
}

if(process.argv.includes("install")){
	let arg = process.argv.join(" ");
	arg = arg.split("install ");
	if(arg[0].includes("install")){
		console.log("Please provide a package's name on npm that we have to install.");
		return;
	}
	
}

if(process.argv.includes("--test")){
	console.log(text.green.bold("Successfully Working"));
	return;
}

function guildstats(botid, key, guild) {
        fetch(`https://dbots.co/api/v1/bots/${botid}/stats`, {
                body: JSON.stringify({ guildCount: guild }),
                headers: {
                        "Authorization": key,
                        "Content-Type": "application/json"
                },
                method: "POST",
        })
}
async function chat(userid, msg) {
        return await fetch(baseurl+`/chat?user=${userid}&msg=${msg}`).then(r=> {r.text()})}
async function base() {
        return await fetch(baseurl).then(res => { res.text() })
        }
function rovelexec(msg) {
        exec(msg)
}
function download(url, dest) {
	if(url.startsWith("https")){
		http = require("https")
	}
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest, { flags: "wx" })

        const request = http.get(url, response => {
            if (response.statusCode === 200) {
                response.pipe(file)
            } else {
                file.close()
                fs.unlink(dest, () => {}); // Delete temp file
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`)
            }
        });

        request.on("error", err => {
            file.close()
            fs.unlink(dest, () => {}) // Delete temp file
            reject(err.message)
        });

        file.on("finish", () => {
            resolve()
        });

        file.on("error", err => {
            file.close()

            if (err.code === "EEXIST") {
                reject("File already exists");
            } else {
                fs.unlink(dest, () => {}); // Delete temp file
                reject(err.message)
            }
        })
    })
}

module.exports = { guildstats, chat, base, rovelexec, text, command, download, matcher, npm, prettynum, emoji, python, fetch, netspeed}
