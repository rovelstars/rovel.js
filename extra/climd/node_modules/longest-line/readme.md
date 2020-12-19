# longest-line [![Build Status](https://travis-ci.org/danilosampaio/longest-line.svg?branch=master)](https://travis-ci.org/danilosampaio/longest-line)

> Get the longest line length of a string.
> It also correctly calculate the length of the line containing ansi escape codes.


## Install

```
$ npm install --save longest-line
```


## Usage

```js
var longestLine = require('longest-line');

longestLine('Supercalifragilisticexpialidocious\n is long\n word');
//=> 34


longestLine('\u001b[1mthis\u001b[22m\n is a dummy\n text');
//=> 11
```


## API

### longestLine(input, [options])

#### input

*Required*  
Type: `string`


#### options

##### stripAnsiCodes

Type: `boolean`  
Default: `true`

Get the real length of a string.


## License

MIT © [Danilo Sampaio](http://github.org/danilosampaio)
