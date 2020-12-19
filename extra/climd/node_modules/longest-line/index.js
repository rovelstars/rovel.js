'use strict';
var stripAnsi = require('strip-ansi');

module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};
	var stripAnsiCodes = opts.stripAnsiCodes || true;	

	var lines = stripAnsiCodes ? stripAnsi(str).split('\n') : str.split('\n');

	return lines.reduce(function(p,c){
		return c.length > p.length ? c : p;
	}).length;
};
