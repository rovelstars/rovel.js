const { compile } = require('./compile.js');
const rovel = require('../../index.js');
compile("what.txt").then(r=>console.log(r)).catch(e=>console.log(rovel.text.red.bold(e)));
