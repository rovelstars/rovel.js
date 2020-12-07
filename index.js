const fetch = require('node-fetch');
const rovelos = require('shelljs');
const baseurl = "https://rovelapi.glitch.me";

function guildstats(botid, key, guild) {
	fetch(`https://bots.rovelstars.ga/api/v1/bots/${botid}/stats`, {
		body: JSON.stringify({ guildCount: guild }),
		headers: {
			'Authorization': key,
			'Content-Type': 'application/json'
		},
		method: 'POST',
	});
};
async function chat(userid, msg) {
	return await fetch(baseurl+`/chat?user=${userid}&msg=${msg}`).then(r=>r.text())};
async function base() {
	return await fetch(baseurl).then(res => res.text())
	};
function rovelexec(msg) {
	rovelos.exec(msg);
}
module.exports = {guildstats, chat, base, rovelexec};
