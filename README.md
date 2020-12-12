# rovel.js
# update 1.1.1 - Welcome to the update of terminal awesomeness!

# Install!
```bash
npm i rovel.js -g
```

You can download it globally so if you are in development.
But its recommended to install it locally in your project if you are in production mode.

[![Discord](https://img.shields.io/discord/602906543356379156?color=%237289da&label=chat%20with%20us&logo=discord&style=for-the-badge)](https://discord.gg/953XCpHbKF)
[![Version](https://img.shields.io/npm/v/rovel.js?color=red&label=rovel.js&style=for-the-badge)](https://npmjs.com/package/rovel.js)
[![License](https://img.shields.io/npm/l/rovel.js?style=for-the-badge)](https://npmjs.com/package/rovel.js)
[![Build Status](https://img.shields.io/github/workflow/status/sayantan300/rovel.js/Node.js%20CI?label=nodejs%20build&logo=github&style=for-the-badge)](https://github.com/rovelstars/rovel.js)


The NPM package all wanted. Docs are currently in progress, please join our discord server if you want to help us with creatung docs and helping with more stuff!
 If you are eager to know what does rovel.js does, kindly join the discord server and ask us.

 Updates in **1.1.0** :
 - Added api querying for npm packages!
 - Added Number Approxer, like converting 1000 into 1k
 - Added Lodash like functions, and I give credits to lodash for creating those!
 - Added Node Emoji, which is a package exclusively for emojis in your code.
 - Added test.js file which tests our pkg fully!
 - Update: If you just want to use a part of our pkg, like you are using emojis only from our code, you can load that only, thus decreasing memory usage and starting your code more fast. If you want to use this, do like this:
 ```js
 const emoji = require('rovel.js/extra/node-emoji');
 console.log(emoji.get("sunglasses")+" I work!");
 ```
 the list of parts are:
 - ansi-colors 
 - approx        
 - did-you-mean  
 - node-emoji
 - api-npm      
 - commander.js  
 - lodash        
 - node-fetch

 Please note that this parts' name will be changed within some days.
