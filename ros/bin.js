#!/usr/bin/env node

const {cli, spinner} = require("../index.js");
const prog = cli('ros');
prog.version('0.1');
prog.command('install').describe('Installs Rovel OS on your device. Requires an Internet connection and needs zsh installed. If you don\'t have zsh installed, kindly run "man 2 roveljs" to view the documentation.').action(()=>{

});

