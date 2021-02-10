#!/usr/bin/env node
const rovel = require("./index.js");
const pkg = require("./package.json");
let cli = rovel.cli;
const prog = cli('rovel');
prog.version(pkg.betabuild || pkg.version);
prog.command('exec <code>').describe('Execute nodejs code in terminal. rovel.js predefined as "rovel".').example('exec "console.log(\"hello\")"').action((code)=>{
	eval(code);
});

prog.command('ms').describe('Show the speed of your terminal in miliseconds').example('ms').action(()=>{
	while(true){
console.time('Speed')

let i = 0;
while (i < 1000000) { i ++ }
console.clear();
console.timeEnd('Speed')};
});

prog.parse(process.argv);
