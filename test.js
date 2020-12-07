const { base, chat } = require('./index.js');
chat("owner", "bye").then(r=>console.log(r));
base().then(r=>console.log(r));
