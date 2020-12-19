// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"hquK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEfAULT_ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var NumberToAlphabet = function () {
  function NumberToAlphabet(_alphabet) {
    if (_alphabet === void 0) {
      _alphabet = DEfAULT_ALPHABET;
    }

    this._alphabet = _alphabet;

    if (_alphabet.length <= 0) {
      throw new Error('Alphabet must contain at least 1 item.');
    }

    this._alphabet.forEach(function (letter) {
      if (typeof letter !== 'string' || letter.length !== 1) {
        throw new Error('Each item in the alphabet must be a single letter.');
      }
    });

    this._alphabetLength = _alphabet.length;
  }

  NumberToAlphabet.prototype.numberToString = function (number) {
    if (typeof number !== 'number') {
      throw new Error('Must be a nunber.');
    }

    if (number <= 0) {
      throw new RangeError('Number must be > 0.');
    }

    var res = '';
    var a = number - 1;

    while (true) {
      var remainder = a % this._alphabetLength;
      res = this._alphabet[remainder] + res;

      if (a < this._alphabetLength) {
        break;
      }

      a = Math.floor(a / this._alphabetLength) - 1;
    }

    return res;
  };

  NumberToAlphabet.prototype.stringToNumber = function (input) {
    var _this = this;

    if (!input.length) {
      throw new Error('Input must not be empty.');
    }

    return input.split('').reverse().reduce(function (acc, letter, i) {
      var offset = _this._alphabet.indexOf(letter);

      if (offset <= -1) {
        throw new Error("Letter missing from alphabet: " + letter);
      }

      return acc + (offset + 1) * Math.pow(_this._alphabetLength, i);
    }, 0);
  };

  return NumberToAlphabet;
}();

exports.NumberToAlphabet = NumberToAlphabet;
},{}]},{},["hquK"], "NumberToAlphabet")
//# sourceMappingURL=/number-to-alphabet.js.map