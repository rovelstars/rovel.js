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
function chat(userid, msg) {
	fetch(baseurl+`/chat?user=${userid}&msg=${msg}`).then(r=>r.text()).then(d=>{
		return new Promise((res, rej)=>{
		res = d});
	})};
function base() {
//	fetch(baseurl).then(r=>r.text()).then(d=>return d);
}
function rovelexec(msg) {
	rovelos.exec(msg);
}
module.exports = {guildstats, chat, base, rovelexec};
