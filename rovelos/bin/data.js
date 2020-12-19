const $HOME = require('os').homedir();
var isWin = process.platform === "win32";
module.exports={$HOME, isWin};
