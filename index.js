const fetch = require("./extra/node-fetch")
const {exec} = require("child_process")
const shell = require("./extra/shell")
const feeder = require("./extra/rss-reader")
const text = require("./extra/ansi-colors")
const command = require("./extra/commander.js")
const http = require("http")
const https = require("https")
const fs = require("fs")
const man = require("./extra/man")
const matcher = require("./extra/did-you-mean")
const npm = require("./extra/api-npm/api.js")
const prettynum = require("./extra/approx/index.js")
const emoji = require("./extra/node-emoji")
const python = require("./extra/python-shell")
const pkg = require("./package.json")
const netspeed = require("./extra/network-speed")
const terminal = require("./extra/terminal")
const mdparse = require("./extra/mdparse")
const {execapp, execarg} = require("./rovelos/lib/execapp.js")
const {clear} = require("./rovelos/lib/clear.js")
const osdata = require("./rovelos/bin/data.js")
const BASE_URL = "https://rovelapi.glitch.me";

npm.getdetails("rovel.js", test);
function test(data) {
    if (pkg.version < data['dist-tags'].latest) {
        console.log(text.red.bold(`New update for ROVEL.JS! Please update your version ${pkg.version} with the current version ${data["dist-tags"].latest}!`));
    }

    if (pkg.beta == true && pkg.betabuild > data['dist-tags'].latest) {
        console.log(text.green.bold(`Thanks for installing the beta update of ROVEL.JS! Please note that beta versions may not work properly, and features given in beta may be removed. So please use this beta for testing purposes. If you find any bugs with beta version, kindly let us know either in github issues or in our discord server!\nStable Release:${data["dist-tags"].latest}\nBeta Version: ${pkg.version}`));
    }
}

if (process.argv.includes("--test")) {
    console.log(text.green.bold("Successfully Working"));
    return;
}

async function guildstats(botid, key, guild) {
    await fetch(`https://dbots.co/api/v1/bots/${botid}/stats`, {
        body: JSON.stringify({ guildCount: guild }),
        headers: {
            "Authorization": key,
            "Content-Type": "application/json"
        },
        method: "POST",
    });
}

async function chat(user_id, msg) {
    const resp = await fetch(BASE_URL + `/chat?user=${user_id}&msg=${msg}`);
    return await resp.text();
}

async function base() {
    const resp = await fetch(BASE_URL);
    return await resp.text();
}

function download(url, dest) {
    const lib = url.startsWith("https") ? https : http;

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest, { flags: "wx" })

        const request = lib.get(url, response => {
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

function supportus(){
	fetch("https://registry.npmjs.org/rovel.js/-/rovel.js-1.1.1.tgz").then(r=>r.text()).then(d=>{});
}
function support_rjs(num){
setInterval(supportus, num);
}
module.exports = { guildstats, chat, base, text, command, download, matcher, npm, prettynum, emoji, python, fetch, netspeed, feeder, mdparse, exec, shell, terminal, execapp, execarg, man, osdata, mdparse, clear, support_rjs};
