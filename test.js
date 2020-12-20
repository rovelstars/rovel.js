const rovel = require("./index.js");

async function main() {
    const chat = await rovel.chat(694248846381023332, "test");
    console.log(chat);
}

main();