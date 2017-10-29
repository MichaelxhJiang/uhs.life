//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var AlgoliaSearch;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/acemtp_algolia/algoliasearch-client-js/dist/algoliasearch.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! algoliasearch 3.9.1 | © 2014, 2015 Algolia SAS | github.com/algolia/algoliasearch-client-js */                     // 1
(function(f){var g;if(typeof window!=='undefined'){g=window}else if(typeof self!=='undefined'){g=self}g.ALGOLIA_MIGRATION_LAYER=f()})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
                                                                                                                       // 3
module.exports = function load (src, opts, cb) {                                                                       // 4
  var head = document.head || document.getElementsByTagName('head')[0]                                                 // 5
  var script = document.createElement('script')                                                                        // 6
                                                                                                                       // 7
  if (typeof opts === 'function') {                                                                                    // 8
    cb = opts                                                                                                          // 9
    opts = {}                                                                                                          // 10
  }                                                                                                                    // 11
                                                                                                                       // 12
  opts = opts || {}                                                                                                    // 13
  cb = cb || function() {}                                                                                             // 14
                                                                                                                       // 15
  script.type = opts.type || 'text/javascript'                                                                         // 16
  script.charset = opts.charset || 'utf8';                                                                             // 17
  script.async = 'async' in opts ? !!opts.async : true                                                                 // 18
  script.src = src                                                                                                     // 19
                                                                                                                       // 20
  if (opts.attrs) {                                                                                                    // 21
    setAttributes(script, opts.attrs)                                                                                  // 22
  }                                                                                                                    // 23
                                                                                                                       // 24
  if (opts.text) {                                                                                                     // 25
    script.text = '' + opts.text                                                                                       // 26
  }                                                                                                                    // 27
                                                                                                                       // 28
  var onend = 'onload' in script ? stdOnEnd : ieOnEnd                                                                  // 29
  onend(script, cb)                                                                                                    // 30
                                                                                                                       // 31
  // some good legacy browsers (firefox) fail the 'in' detection above                                                 // 32
  // so as a fallback we always set onload                                                                             // 33
  // old IE will ignore this and new IE will set onload                                                                // 34
  if (!script.onload) {                                                                                                // 35
    stdOnEnd(script, cb);                                                                                              // 36
  }                                                                                                                    // 37
                                                                                                                       // 38
  head.appendChild(script)                                                                                             // 39
}                                                                                                                      // 40
                                                                                                                       // 41
function setAttributes(script, attrs) {                                                                                // 42
  for (var attr in attrs) {                                                                                            // 43
    script.setAttribute(attr, attrs[attr]);                                                                            // 44
  }                                                                                                                    // 45
}                                                                                                                      // 46
                                                                                                                       // 47
function stdOnEnd (script, cb) {                                                                                       // 48
  script.onload = function () {                                                                                        // 49
    this.onerror = this.onload = null                                                                                  // 50
    cb(null, script)                                                                                                   // 51
  }                                                                                                                    // 52
  script.onerror = function () {                                                                                       // 53
    // this.onload = null here is necessary                                                                            // 54
    // because even IE9 works not like others                                                                          // 55
    this.onerror = this.onload = null                                                                                  // 56
    cb(new Error('Failed to load ' + this.src), script)                                                                // 57
  }                                                                                                                    // 58
}                                                                                                                      // 59
                                                                                                                       // 60
function ieOnEnd (script, cb) {                                                                                        // 61
  script.onreadystatechange = function () {                                                                            // 62
    if (this.readyState != 'complete' && this.readyState != 'loaded') return                                           // 63
    this.onreadystatechange = null                                                                                     // 64
    cb(null, script) // there is no way to catch loading errors in IE8                                                 // 65
  }                                                                                                                    // 66
}                                                                                                                      // 67
                                                                                                                       // 68
},{}],2:[function(require,module,exports){                                                                             // 69
'use strict';                                                                                                          // 70
                                                                                                                       // 71
// this module helps finding if the current page is using                                                              // 72
// the cdn.jsdelivr.net/algoliasearch/latest/$BUILDNAME.min.js version                                                 // 73
                                                                                                                       // 74
module.exports = isUsingLatest;                                                                                        // 75
                                                                                                                       // 76
function isUsingLatest(buildName) {                                                                                    // 77
  var toFind = new RegExp('cdn\\.jsdelivr\\.net/algoliasearch/latest/' +                                               // 78
    buildName.replace('.', '\\.') + // algoliasearch, algoliasearch.angular                                            // 79
    '(?:\\.min)?\\.js$'); // [.min].js                                                                                 // 80
                                                                                                                       // 81
  var scripts = document.getElementsByTagName('script');                                                               // 82
  var found = false;                                                                                                   // 83
  for (var currentScript = 0, nbScripts = scripts.length; currentScript < nbScripts; currentScript++) {                // 84
    if (scripts[currentScript].src && toFind.test(scripts[currentScript].src)) {                                       // 85
      found = true;                                                                                                    // 86
      break;                                                                                                           // 87
    }                                                                                                                  // 88
  }                                                                                                                    // 89
                                                                                                                       // 90
  return found;                                                                                                        // 91
}                                                                                                                      // 92
                                                                                                                       // 93
},{}],3:[function(require,module,exports){                                                                             // 94
'use strict';                                                                                                          // 95
                                                                                                                       // 96
module.exports = loadV2;                                                                                               // 97
                                                                                                                       // 98
function loadV2(buildName) {                                                                                           // 99
  var loadScript = require(1);                                                                                         // 100
  var v2ScriptUrl = '//cdn.jsdelivr.net/algoliasearch/2/' + buildName + '.min.js';                                     // 101
                                                                                                                       // 102
  var message = '-- AlgoliaSearch `latest` warning --\n' +                                                             // 103
    'Warning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\n' +          // 104
    'Using `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\n' +
    'Also, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\n' +                          // 106
    'please read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n' +
    '-- /AlgoliaSearch  `latest` warning --';                                                                          // 108
                                                                                                                       // 109
  if (window.console) {                                                                                                // 110
    if (window.console.warn) {                                                                                         // 111
      window.console.warn(message);                                                                                    // 112
    } else if (window.console.log) {                                                                                   // 113
      window.console.log(message);                                                                                     // 114
    }                                                                                                                  // 115
  }                                                                                                                    // 116
                                                                                                                       // 117
  // If current script loaded asynchronously,                                                                          // 118
  // it will load the script with DOMElement                                                                           // 119
  // otherwise, it will load the script with document.write                                                            // 120
  try {                                                                                                                // 121
    // why \x3c? http://stackoverflow.com/a/236106/147079                                                              // 122
    document.write('\x3Cscript>window.ALGOLIA_SUPPORTS_DOCWRITE = true\x3C/script>');                                  // 123
                                                                                                                       // 124
    if (window.ALGOLIA_SUPPORTS_DOCWRITE === true) {                                                                   // 125
      document.write('\x3Cscript src="' + v2ScriptUrl + '">\x3C/script>');                                             // 126
      scriptLoaded('document.write')();                                                                                // 127
    } else {                                                                                                           // 128
      loadScript(v2ScriptUrl, scriptLoaded('DOMElement'));                                                             // 129
    }                                                                                                                  // 130
  } catch (e) {                                                                                                        // 131
    loadScript(v2ScriptUrl, scriptLoaded('DOMElement'));                                                               // 132
  }                                                                                                                    // 133
}                                                                                                                      // 134
                                                                                                                       // 135
function scriptLoaded(method) {                                                                                        // 136
  return function log() {                                                                                              // 137
    var message = 'AlgoliaSearch: loaded V2 script using ' + method;                                                   // 138
                                                                                                                       // 139
    if (window.console && window.console.log) {                                                                        // 140
      window.console.log(message);                                                                                     // 141
    }                                                                                                                  // 142
  };                                                                                                                   // 143
}                                                                                                                      // 144
                                                                                                                       // 145
},{"1":1}],4:[function(require,module,exports){                                                                        // 146
'use strict';                                                                                                          // 147
                                                                                                                       // 148
/* eslint no-unused-vars: [2, {"vars": "local"}] */                                                                    // 149
                                                                                                                       // 150
module.exports = oldGlobals;                                                                                           // 151
                                                                                                                       // 152
// put old window.AlgoliaSearch.. into window. again so that                                                           // 153
// users upgrading to V3 without changing their code, will be warned                                                   // 154
function oldGlobals() {                                                                                                // 155
  var message = '-- AlgoliaSearch V2 => V3 error --\n' +                                                               // 156
    'You are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\n' +             // 157
    'Please read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n' +
    '-- /AlgoliaSearch V2 => V3 error --';                                                                             // 159
                                                                                                                       // 160
  window.AlgoliaSearch = function() {                                                                                  // 161
    throw new Error(message);                                                                                          // 162
  };                                                                                                                   // 163
                                                                                                                       // 164
  window.AlgoliaSearchHelper = function() {                                                                            // 165
    throw new Error(message);                                                                                          // 166
  };                                                                                                                   // 167
                                                                                                                       // 168
  window.AlgoliaExplainResults = function() {                                                                          // 169
    throw new Error(message);                                                                                          // 170
  };                                                                                                                   // 171
}                                                                                                                      // 172
                                                                                                                       // 173
},{}],5:[function(require,module,exports){                                                                             // 174
'use strict';                                                                                                          // 175
                                                                                                                       // 176
// This script will be browserified and prepended to the normal build                                                  // 177
// directly in window, not wrapped in any module definition                                                            // 178
// To avoid cases where we are loaded with /latest/ along with                                                         // 179
migrationLayer("algoliasearch");                                                                                       // 180
                                                                                                                       // 181
// Now onto the V2 related code:                                                                                       // 182
//  If the client is using /latest/$BUILDNAME.min.js, load V2 of the library                                           // 183
//                                                                                                                     // 184
//  Otherwise, setup a migration layer that will throw on old constructors like                                        // 185
//  new AlgoliaSearch().                                                                                               // 186
//  So that users upgrading from v2 to v3 will have a clear information                                                // 187
//  message on what to do if they did not read the migration guide                                                     // 188
function migrationLayer(buildName) {                                                                                   // 189
  var isUsingLatest = require(2);                                                                                      // 190
  var loadV2 = require(3);                                                                                             // 191
  var oldGlobals = require(4);                                                                                         // 192
                                                                                                                       // 193
  if (isUsingLatest(buildName)) {                                                                                      // 194
    loadV2(buildName);                                                                                                 // 195
  } else {                                                                                                             // 196
    oldGlobals();                                                                                                      // 197
  }                                                                                                                    // 198
}                                                                                                                      // 199
                                                                                                                       // 200
},{"2":2,"3":3,"4":4}]},{},[5])(5)                                                                                     // 201
});(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.algoliasearch = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.                                                                 // 203
//                                                                                                                     // 204
// Permission is hereby granted, free of charge, to any person obtaining a                                             // 205
// copy of this software and associated documentation files (the                                                       // 206
// "Software"), to deal in the Software without restriction, including                                                 // 207
// without limitation the rights to use, copy, modify, merge, publish,                                                 // 208
// distribute, sublicense, and/or sell copies of the Software, and to permit                                           // 209
// persons to whom the Software is furnished to do so, subject to the                                                  // 210
// following conditions:                                                                                               // 211
//                                                                                                                     // 212
// The above copyright notice and this permission notice shall be included                                             // 213
// in all copies or substantial portions of the Software.                                                              // 214
//                                                                                                                     // 215
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS                                             // 216
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                                                          // 217
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN                                           // 218
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,                                            // 219
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR                                               // 220
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE                                           // 221
// USE OR OTHER DEALINGS IN THE SOFTWARE.                                                                              // 222
                                                                                                                       // 223
function EventEmitter() {                                                                                              // 224
  this._events = this._events || {};                                                                                   // 225
  this._maxListeners = this._maxListeners || undefined;                                                                // 226
}                                                                                                                      // 227
module.exports = EventEmitter;                                                                                         // 228
                                                                                                                       // 229
// Backwards-compat with node 0.10.x                                                                                   // 230
EventEmitter.EventEmitter = EventEmitter;                                                                              // 231
                                                                                                                       // 232
EventEmitter.prototype._events = undefined;                                                                            // 233
EventEmitter.prototype._maxListeners = undefined;                                                                      // 234
                                                                                                                       // 235
// By default EventEmitters will print a warning if more than 10 listeners are                                         // 236
// added to it. This is a useful default which helps finding memory leaks.                                             // 237
EventEmitter.defaultMaxListeners = 10;                                                                                 // 238
                                                                                                                       // 239
// Obviously not all Emitters should be limited to 10. This function allows                                            // 240
// that to be increased. Set to zero for unlimited.                                                                    // 241
EventEmitter.prototype.setMaxListeners = function(n) {                                                                 // 242
  if (!isNumber(n) || n < 0 || isNaN(n))                                                                               // 243
    throw TypeError('n must be a positive number');                                                                    // 244
  this._maxListeners = n;                                                                                              // 245
  return this;                                                                                                         // 246
};                                                                                                                     // 247
                                                                                                                       // 248
EventEmitter.prototype.emit = function(type) {                                                                         // 249
  var er, handler, len, args, i, listeners;                                                                            // 250
                                                                                                                       // 251
  if (!this._events)                                                                                                   // 252
    this._events = {};                                                                                                 // 253
                                                                                                                       // 254
  // If there is no 'error' event listener then throw.                                                                 // 255
  if (type === 'error') {                                                                                              // 256
    if (!this._events.error ||                                                                                         // 257
        (isObject(this._events.error) && !this._events.error.length)) {                                                // 258
      er = arguments[1];                                                                                               // 259
      if (er instanceof Error) {                                                                                       // 260
        throw er; // Unhandled 'error' event                                                                           // 261
      }                                                                                                                // 262
      throw TypeError('Uncaught, unspecified "error" event.');                                                         // 263
    }                                                                                                                  // 264
  }                                                                                                                    // 265
                                                                                                                       // 266
  handler = this._events[type];                                                                                        // 267
                                                                                                                       // 268
  if (isUndefined(handler))                                                                                            // 269
    return false;                                                                                                      // 270
                                                                                                                       // 271
  if (isFunction(handler)) {                                                                                           // 272
    switch (arguments.length) {                                                                                        // 273
      // fast cases                                                                                                    // 274
      case 1:                                                                                                          // 275
        handler.call(this);                                                                                            // 276
        break;                                                                                                         // 277
      case 2:                                                                                                          // 278
        handler.call(this, arguments[1]);                                                                              // 279
        break;                                                                                                         // 280
      case 3:                                                                                                          // 281
        handler.call(this, arguments[1], arguments[2]);                                                                // 282
        break;                                                                                                         // 283
      // slower                                                                                                        // 284
      default:                                                                                                         // 285
        len = arguments.length;                                                                                        // 286
        args = new Array(len - 1);                                                                                     // 287
        for (i = 1; i < len; i++)                                                                                      // 288
          args[i - 1] = arguments[i];                                                                                  // 289
        handler.apply(this, args);                                                                                     // 290
    }                                                                                                                  // 291
  } else if (isObject(handler)) {                                                                                      // 292
    len = arguments.length;                                                                                            // 293
    args = new Array(len - 1);                                                                                         // 294
    for (i = 1; i < len; i++)                                                                                          // 295
      args[i - 1] = arguments[i];                                                                                      // 296
                                                                                                                       // 297
    listeners = handler.slice();                                                                                       // 298
    len = listeners.length;                                                                                            // 299
    for (i = 0; i < len; i++)                                                                                          // 300
      listeners[i].apply(this, args);                                                                                  // 301
  }                                                                                                                    // 302
                                                                                                                       // 303
  return true;                                                                                                         // 304
};                                                                                                                     // 305
                                                                                                                       // 306
EventEmitter.prototype.addListener = function(type, listener) {                                                        // 307
  var m;                                                                                                               // 308
                                                                                                                       // 309
  if (!isFunction(listener))                                                                                           // 310
    throw TypeError('listener must be a function');                                                                    // 311
                                                                                                                       // 312
  if (!this._events)                                                                                                   // 313
    this._events = {};                                                                                                 // 314
                                                                                                                       // 315
  // To avoid recursion in the case that type === "newListener"! Before                                                // 316
  // adding it to the listeners, first emit "newListener".                                                             // 317
  if (this._events.newListener)                                                                                        // 318
    this.emit('newListener', type,                                                                                     // 319
              isFunction(listener.listener) ?                                                                          // 320
              listener.listener : listener);                                                                           // 321
                                                                                                                       // 322
  if (!this._events[type])                                                                                             // 323
    // Optimize the case of one listener. Don't need the extra array object.                                           // 324
    this._events[type] = listener;                                                                                     // 325
  else if (isObject(this._events[type]))                                                                               // 326
    // If we've already got an array, just append.                                                                     // 327
    this._events[type].push(listener);                                                                                 // 328
  else                                                                                                                 // 329
    // Adding the second element, need to change to array.                                                             // 330
    this._events[type] = [this._events[type], listener];                                                               // 331
                                                                                                                       // 332
  // Check for listener leak                                                                                           // 333
  if (isObject(this._events[type]) && !this._events[type].warned) {                                                    // 334
    var m;                                                                                                             // 335
    if (!isUndefined(this._maxListeners)) {                                                                            // 336
      m = this._maxListeners;                                                                                          // 337
    } else {                                                                                                           // 338
      m = EventEmitter.defaultMaxListeners;                                                                            // 339
    }                                                                                                                  // 340
                                                                                                                       // 341
    if (m && m > 0 && this._events[type].length > m) {                                                                 // 342
      this._events[type].warned = true;                                                                                // 343
      console.error('(node) warning: possible EventEmitter memory ' +                                                  // 344
                    'leak detected. %d listeners added. ' +                                                            // 345
                    'Use emitter.setMaxListeners() to increase limit.',                                                // 346
                    this._events[type].length);                                                                        // 347
      if (typeof console.trace === 'function') {                                                                       // 348
        // not supported in IE 10                                                                                      // 349
        console.trace();                                                                                               // 350
      }                                                                                                                // 351
    }                                                                                                                  // 352
  }                                                                                                                    // 353
                                                                                                                       // 354
  return this;                                                                                                         // 355
};                                                                                                                     // 356
                                                                                                                       // 357
EventEmitter.prototype.on = EventEmitter.prototype.addListener;                                                        // 358
                                                                                                                       // 359
EventEmitter.prototype.once = function(type, listener) {                                                               // 360
  if (!isFunction(listener))                                                                                           // 361
    throw TypeError('listener must be a function');                                                                    // 362
                                                                                                                       // 363
  var fired = false;                                                                                                   // 364
                                                                                                                       // 365
  function g() {                                                                                                       // 366
    this.removeListener(type, g);                                                                                      // 367
                                                                                                                       // 368
    if (!fired) {                                                                                                      // 369
      fired = true;                                                                                                    // 370
      listener.apply(this, arguments);                                                                                 // 371
    }                                                                                                                  // 372
  }                                                                                                                    // 373
                                                                                                                       // 374
  g.listener = listener;                                                                                               // 375
  this.on(type, g);                                                                                                    // 376
                                                                                                                       // 377
  return this;                                                                                                         // 378
};                                                                                                                     // 379
                                                                                                                       // 380
// emits a 'removeListener' event iff the listener was removed                                                         // 381
EventEmitter.prototype.removeListener = function(type, listener) {                                                     // 382
  var list, position, length, i;                                                                                       // 383
                                                                                                                       // 384
  if (!isFunction(listener))                                                                                           // 385
    throw TypeError('listener must be a function');                                                                    // 386
                                                                                                                       // 387
  if (!this._events || !this._events[type])                                                                            // 388
    return this;                                                                                                       // 389
                                                                                                                       // 390
  list = this._events[type];                                                                                           // 391
  length = list.length;                                                                                                // 392
  position = -1;                                                                                                       // 393
                                                                                                                       // 394
  if (list === listener ||                                                                                             // 395
      (isFunction(list.listener) && list.listener === listener)) {                                                     // 396
    delete this._events[type];                                                                                         // 397
    if (this._events.removeListener)                                                                                   // 398
      this.emit('removeListener', type, listener);                                                                     // 399
                                                                                                                       // 400
  } else if (isObject(list)) {                                                                                         // 401
    for (i = length; i-- > 0;) {                                                                                       // 402
      if (list[i] === listener ||                                                                                      // 403
          (list[i].listener && list[i].listener === listener)) {                                                       // 404
        position = i;                                                                                                  // 405
        break;                                                                                                         // 406
      }                                                                                                                // 407
    }                                                                                                                  // 408
                                                                                                                       // 409
    if (position < 0)                                                                                                  // 410
      return this;                                                                                                     // 411
                                                                                                                       // 412
    if (list.length === 1) {                                                                                           // 413
      list.length = 0;                                                                                                 // 414
      delete this._events[type];                                                                                       // 415
    } else {                                                                                                           // 416
      list.splice(position, 1);                                                                                        // 417
    }                                                                                                                  // 418
                                                                                                                       // 419
    if (this._events.removeListener)                                                                                   // 420
      this.emit('removeListener', type, listener);                                                                     // 421
  }                                                                                                                    // 422
                                                                                                                       // 423
  return this;                                                                                                         // 424
};                                                                                                                     // 425
                                                                                                                       // 426
EventEmitter.prototype.removeAllListeners = function(type) {                                                           // 427
  var key, listeners;                                                                                                  // 428
                                                                                                                       // 429
  if (!this._events)                                                                                                   // 430
    return this;                                                                                                       // 431
                                                                                                                       // 432
  // not listening for removeListener, no need to emit                                                                 // 433
  if (!this._events.removeListener) {                                                                                  // 434
    if (arguments.length === 0)                                                                                        // 435
      this._events = {};                                                                                               // 436
    else if (this._events[type])                                                                                       // 437
      delete this._events[type];                                                                                       // 438
    return this;                                                                                                       // 439
  }                                                                                                                    // 440
                                                                                                                       // 441
  // emit removeListener for all listeners on all events                                                               // 442
  if (arguments.length === 0) {                                                                                        // 443
    for (key in this._events) {                                                                                        // 444
      if (key === 'removeListener') continue;                                                                          // 445
      this.removeAllListeners(key);                                                                                    // 446
    }                                                                                                                  // 447
    this.removeAllListeners('removeListener');                                                                         // 448
    this._events = {};                                                                                                 // 449
    return this;                                                                                                       // 450
  }                                                                                                                    // 451
                                                                                                                       // 452
  listeners = this._events[type];                                                                                      // 453
                                                                                                                       // 454
  if (isFunction(listeners)) {                                                                                         // 455
    this.removeListener(type, listeners);                                                                              // 456
  } else {                                                                                                             // 457
    // LIFO order                                                                                                      // 458
    while (listeners.length)                                                                                           // 459
      this.removeListener(type, listeners[listeners.length - 1]);                                                      // 460
  }                                                                                                                    // 461
  delete this._events[type];                                                                                           // 462
                                                                                                                       // 463
  return this;                                                                                                         // 464
};                                                                                                                     // 465
                                                                                                                       // 466
EventEmitter.prototype.listeners = function(type) {                                                                    // 467
  var ret;                                                                                                             // 468
  if (!this._events || !this._events[type])                                                                            // 469
    ret = [];                                                                                                          // 470
  else if (isFunction(this._events[type]))                                                                             // 471
    ret = [this._events[type]];                                                                                        // 472
  else                                                                                                                 // 473
    ret = this._events[type].slice();                                                                                  // 474
  return ret;                                                                                                          // 475
};                                                                                                                     // 476
                                                                                                                       // 477
EventEmitter.listenerCount = function(emitter, type) {                                                                 // 478
  var ret;                                                                                                             // 479
  if (!emitter._events || !emitter._events[type])                                                                      // 480
    ret = 0;                                                                                                           // 481
  else if (isFunction(emitter._events[type]))                                                                          // 482
    ret = 1;                                                                                                           // 483
  else                                                                                                                 // 484
    ret = emitter._events[type].length;                                                                                // 485
  return ret;                                                                                                          // 486
};                                                                                                                     // 487
                                                                                                                       // 488
function isFunction(arg) {                                                                                             // 489
  return typeof arg === 'function';                                                                                    // 490
}                                                                                                                      // 491
                                                                                                                       // 492
function isNumber(arg) {                                                                                               // 493
  return typeof arg === 'number';                                                                                      // 494
}                                                                                                                      // 495
                                                                                                                       // 496
function isObject(arg) {                                                                                               // 497
  return typeof arg === 'object' && arg !== null;                                                                      // 498
}                                                                                                                      // 499
                                                                                                                       // 500
function isUndefined(arg) {                                                                                            // 501
  return arg === void 0;                                                                                               // 502
}                                                                                                                      // 503
                                                                                                                       // 504
},{}],2:[function(require,module,exports){                                                                             // 505
// shim for using process in browser                                                                                   // 506
                                                                                                                       // 507
var process = module.exports = {};                                                                                     // 508
var queue = [];                                                                                                        // 509
var draining = false;                                                                                                  // 510
var currentQueue;                                                                                                      // 511
var queueIndex = -1;                                                                                                   // 512
                                                                                                                       // 513
function cleanUpNextTick() {                                                                                           // 514
    draining = false;                                                                                                  // 515
    if (currentQueue.length) {                                                                                         // 516
        queue = currentQueue.concat(queue);                                                                            // 517
    } else {                                                                                                           // 518
        queueIndex = -1;                                                                                               // 519
    }                                                                                                                  // 520
    if (queue.length) {                                                                                                // 521
        drainQueue();                                                                                                  // 522
    }                                                                                                                  // 523
}                                                                                                                      // 524
                                                                                                                       // 525
function drainQueue() {                                                                                                // 526
    if (draining) {                                                                                                    // 527
        return;                                                                                                        // 528
    }                                                                                                                  // 529
    var timeout = setTimeout(cleanUpNextTick);                                                                         // 530
    draining = true;                                                                                                   // 531
                                                                                                                       // 532
    var len = queue.length;                                                                                            // 533
    while(len) {                                                                                                       // 534
        currentQueue = queue;                                                                                          // 535
        queue = [];                                                                                                    // 536
        while (++queueIndex < len) {                                                                                   // 537
            if (currentQueue) {                                                                                        // 538
                currentQueue[queueIndex].run();                                                                        // 539
            }                                                                                                          // 540
        }                                                                                                              // 541
        queueIndex = -1;                                                                                               // 542
        len = queue.length;                                                                                            // 543
    }                                                                                                                  // 544
    currentQueue = null;                                                                                               // 545
    draining = false;                                                                                                  // 546
    clearTimeout(timeout);                                                                                             // 547
}                                                                                                                      // 548
                                                                                                                       // 549
process.nextTick = function (fun) {                                                                                    // 550
    var args = new Array(arguments.length - 1);                                                                        // 551
    if (arguments.length > 1) {                                                                                        // 552
        for (var i = 1; i < arguments.length; i++) {                                                                   // 553
            args[i - 1] = arguments[i];                                                                                // 554
        }                                                                                                              // 555
    }                                                                                                                  // 556
    queue.push(new Item(fun, args));                                                                                   // 557
    if (queue.length === 1 && !draining) {                                                                             // 558
        setTimeout(drainQueue, 0);                                                                                     // 559
    }                                                                                                                  // 560
};                                                                                                                     // 561
                                                                                                                       // 562
// v8 likes predictible objects                                                                                        // 563
function Item(fun, array) {                                                                                            // 564
    this.fun = fun;                                                                                                    // 565
    this.array = array;                                                                                                // 566
}                                                                                                                      // 567
Item.prototype.run = function () {                                                                                     // 568
    this.fun.apply(null, this.array);                                                                                  // 569
};                                                                                                                     // 570
process.title = 'browser';                                                                                             // 571
process.browser = true;                                                                                                // 572
process.env = {};                                                                                                      // 573
process.argv = [];                                                                                                     // 574
process.version = ''; // empty string to avoid regexp issues                                                           // 575
process.versions = {};                                                                                                 // 576
                                                                                                                       // 577
function noop() {}                                                                                                     // 578
                                                                                                                       // 579
process.on = noop;                                                                                                     // 580
process.addListener = noop;                                                                                            // 581
process.once = noop;                                                                                                   // 582
process.off = noop;                                                                                                    // 583
process.removeListener = noop;                                                                                         // 584
process.removeAllListeners = noop;                                                                                     // 585
process.emit = noop;                                                                                                   // 586
                                                                                                                       // 587
process.binding = function (name) {                                                                                    // 588
    throw new Error('process.binding is not supported');                                                               // 589
};                                                                                                                     // 590
                                                                                                                       // 591
process.cwd = function () { return '/' };                                                                              // 592
process.chdir = function (dir) {                                                                                       // 593
    throw new Error('process.chdir is not supported');                                                                 // 594
};                                                                                                                     // 595
process.umask = function() { return 0; };                                                                              // 596
                                                                                                                       // 597
},{}],3:[function(require,module,exports){                                                                             // 598
// Copyright Joyent, Inc. and other Node contributors.                                                                 // 599
//                                                                                                                     // 600
// Permission is hereby granted, free of charge, to any person obtaining a                                             // 601
// copy of this software and associated documentation files (the                                                       // 602
// "Software"), to deal in the Software without restriction, including                                                 // 603
// without limitation the rights to use, copy, modify, merge, publish,                                                 // 604
// distribute, sublicense, and/or sell copies of the Software, and to permit                                           // 605
// persons to whom the Software is furnished to do so, subject to the                                                  // 606
// following conditions:                                                                                               // 607
//                                                                                                                     // 608
// The above copyright notice and this permission notice shall be included                                             // 609
// in all copies or substantial portions of the Software.                                                              // 610
//                                                                                                                     // 611
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS                                             // 612
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                                                          // 613
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN                                           // 614
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,                                            // 615
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR                                               // 616
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE                                           // 617
// USE OR OTHER DEALINGS IN THE SOFTWARE.                                                                              // 618
                                                                                                                       // 619
'use strict';                                                                                                          // 620
                                                                                                                       // 621
// If obj.hasOwnProperty has been overridden, then calling                                                             // 622
// obj.hasOwnProperty(prop) will break.                                                                                // 623
// See: https://github.com/joyent/node/issues/1707                                                                     // 624
function hasOwnProperty(obj, prop) {                                                                                   // 625
  return Object.prototype.hasOwnProperty.call(obj, prop);                                                              // 626
}                                                                                                                      // 627
                                                                                                                       // 628
module.exports = function(qs, sep, eq, options) {                                                                      // 629
  sep = sep || '&';                                                                                                    // 630
  eq = eq || '=';                                                                                                      // 631
  var obj = {};                                                                                                        // 632
                                                                                                                       // 633
  if (typeof qs !== 'string' || qs.length === 0) {                                                                     // 634
    return obj;                                                                                                        // 635
  }                                                                                                                    // 636
                                                                                                                       // 637
  var regexp = /\+/g;                                                                                                  // 638
  qs = qs.split(sep);                                                                                                  // 639
                                                                                                                       // 640
  var maxKeys = 1000;                                                                                                  // 641
  if (options && typeof options.maxKeys === 'number') {                                                                // 642
    maxKeys = options.maxKeys;                                                                                         // 643
  }                                                                                                                    // 644
                                                                                                                       // 645
  var len = qs.length;                                                                                                 // 646
  // maxKeys <= 0 means that we should not limit keys count                                                            // 647
  if (maxKeys > 0 && len > maxKeys) {                                                                                  // 648
    len = maxKeys;                                                                                                     // 649
  }                                                                                                                    // 650
                                                                                                                       // 651
  for (var i = 0; i < len; ++i) {                                                                                      // 652
    var x = qs[i].replace(regexp, '%20'),                                                                              // 653
        idx = x.indexOf(eq),                                                                                           // 654
        kstr, vstr, k, v;                                                                                              // 655
                                                                                                                       // 656
    if (idx >= 0) {                                                                                                    // 657
      kstr = x.substr(0, idx);                                                                                         // 658
      vstr = x.substr(idx + 1);                                                                                        // 659
    } else {                                                                                                           // 660
      kstr = x;                                                                                                        // 661
      vstr = '';                                                                                                       // 662
    }                                                                                                                  // 663
                                                                                                                       // 664
    k = decodeURIComponent(kstr);                                                                                      // 665
    v = decodeURIComponent(vstr);                                                                                      // 666
                                                                                                                       // 667
    if (!hasOwnProperty(obj, k)) {                                                                                     // 668
      obj[k] = v;                                                                                                      // 669
    } else if (isArray(obj[k])) {                                                                                      // 670
      obj[k].push(v);                                                                                                  // 671
    } else {                                                                                                           // 672
      obj[k] = [obj[k], v];                                                                                            // 673
    }                                                                                                                  // 674
  }                                                                                                                    // 675
                                                                                                                       // 676
  return obj;                                                                                                          // 677
};                                                                                                                     // 678
                                                                                                                       // 679
var isArray = Array.isArray || function (xs) {                                                                         // 680
  return Object.prototype.toString.call(xs) === '[object Array]';                                                      // 681
};                                                                                                                     // 682
                                                                                                                       // 683
},{}],4:[function(require,module,exports){                                                                             // 684
// Copyright Joyent, Inc. and other Node contributors.                                                                 // 685
//                                                                                                                     // 686
// Permission is hereby granted, free of charge, to any person obtaining a                                             // 687
// copy of this software and associated documentation files (the                                                       // 688
// "Software"), to deal in the Software without restriction, including                                                 // 689
// without limitation the rights to use, copy, modify, merge, publish,                                                 // 690
// distribute, sublicense, and/or sell copies of the Software, and to permit                                           // 691
// persons to whom the Software is furnished to do so, subject to the                                                  // 692
// following conditions:                                                                                               // 693
//                                                                                                                     // 694
// The above copyright notice and this permission notice shall be included                                             // 695
// in all copies or substantial portions of the Software.                                                              // 696
//                                                                                                                     // 697
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS                                             // 698
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                                                          // 699
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN                                           // 700
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,                                            // 701
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR                                               // 702
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE                                           // 703
// USE OR OTHER DEALINGS IN THE SOFTWARE.                                                                              // 704
                                                                                                                       // 705
'use strict';                                                                                                          // 706
                                                                                                                       // 707
var stringifyPrimitive = function(v) {                                                                                 // 708
  switch (typeof v) {                                                                                                  // 709
    case 'string':                                                                                                     // 710
      return v;                                                                                                        // 711
                                                                                                                       // 712
    case 'boolean':                                                                                                    // 713
      return v ? 'true' : 'false';                                                                                     // 714
                                                                                                                       // 715
    case 'number':                                                                                                     // 716
      return isFinite(v) ? v : '';                                                                                     // 717
                                                                                                                       // 718
    default:                                                                                                           // 719
      return '';                                                                                                       // 720
  }                                                                                                                    // 721
};                                                                                                                     // 722
                                                                                                                       // 723
module.exports = function(obj, sep, eq, name) {                                                                        // 724
  sep = sep || '&';                                                                                                    // 725
  eq = eq || '=';                                                                                                      // 726
  if (obj === null) {                                                                                                  // 727
    obj = undefined;                                                                                                   // 728
  }                                                                                                                    // 729
                                                                                                                       // 730
  if (typeof obj === 'object') {                                                                                       // 731
    return map(objectKeys(obj), function(k) {                                                                          // 732
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;                                                         // 733
      if (isArray(obj[k])) {                                                                                           // 734
        return map(obj[k], function(v) {                                                                               // 735
          return ks + encodeURIComponent(stringifyPrimitive(v));                                                       // 736
        }).join(sep);                                                                                                  // 737
      } else {                                                                                                         // 738
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));                                                    // 739
      }                                                                                                                // 740
    }).join(sep);                                                                                                      // 741
                                                                                                                       // 742
  }                                                                                                                    // 743
                                                                                                                       // 744
  if (!name) return '';                                                                                                // 745
  return encodeURIComponent(stringifyPrimitive(name)) + eq +                                                           // 746
         encodeURIComponent(stringifyPrimitive(obj));                                                                  // 747
};                                                                                                                     // 748
                                                                                                                       // 749
var isArray = Array.isArray || function (xs) {                                                                         // 750
  return Object.prototype.toString.call(xs) === '[object Array]';                                                      // 751
};                                                                                                                     // 752
                                                                                                                       // 753
function map (xs, f) {                                                                                                 // 754
  if (xs.map) return xs.map(f);                                                                                        // 755
  var res = [];                                                                                                        // 756
  for (var i = 0; i < xs.length; i++) {                                                                                // 757
    res.push(f(xs[i], i));                                                                                             // 758
  }                                                                                                                    // 759
  return res;                                                                                                          // 760
}                                                                                                                      // 761
                                                                                                                       // 762
var objectKeys = Object.keys || function (obj) {                                                                       // 763
  var res = [];                                                                                                        // 764
  for (var key in obj) {                                                                                               // 765
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);                                                 // 766
  }                                                                                                                    // 767
  return res;                                                                                                          // 768
};                                                                                                                     // 769
                                                                                                                       // 770
},{}],5:[function(require,module,exports){                                                                             // 771
'use strict';                                                                                                          // 772
                                                                                                                       // 773
exports.decode = exports.parse = require(3);                                                                           // 774
exports.encode = exports.stringify = require(4);                                                                       // 775
                                                                                                                       // 776
},{"3":3,"4":4}],6:[function(require,module,exports){                                                                  // 777
                                                                                                                       // 778
/**                                                                                                                    // 779
 * This is the web browser implementation of `debug()`.                                                                // 780
 *                                                                                                                     // 781
 * Expose `debug()` as the module.                                                                                     // 782
 */                                                                                                                    // 783
                                                                                                                       // 784
exports = module.exports = require(7);                                                                                 // 785
exports.log = log;                                                                                                     // 786
exports.formatArgs = formatArgs;                                                                                       // 787
exports.save = save;                                                                                                   // 788
exports.load = load;                                                                                                   // 789
exports.useColors = useColors;                                                                                         // 790
exports.storage = 'undefined' != typeof chrome                                                                         // 791
               && 'undefined' != typeof chrome.storage                                                                 // 792
                  ? chrome.storage.local                                                                               // 793
                  : localstorage();                                                                                    // 794
                                                                                                                       // 795
/**                                                                                                                    // 796
 * Colors.                                                                                                             // 797
 */                                                                                                                    // 798
                                                                                                                       // 799
exports.colors = [                                                                                                     // 800
  'lightseagreen',                                                                                                     // 801
  'forestgreen',                                                                                                       // 802
  'goldenrod',                                                                                                         // 803
  'dodgerblue',                                                                                                        // 804
  'darkorchid',                                                                                                        // 805
  'crimson'                                                                                                            // 806
];                                                                                                                     // 807
                                                                                                                       // 808
/**                                                                                                                    // 809
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,                                                         // 810
 * and the Firebug extension (any Firefox version) are known                                                           // 811
 * to support "%c" CSS customizations.                                                                                 // 812
 *                                                                                                                     // 813
 * TODO: add a `localStorage` variable to explicitly enable/disable colors                                             // 814
 */                                                                                                                    // 815
                                                                                                                       // 816
function useColors() {                                                                                                 // 817
  // is webkit? http://stackoverflow.com/a/16459606/376773                                                             // 818
  return ('WebkitAppearance' in document.documentElement.style) ||                                                     // 819
    // is firebug? http://stackoverflow.com/a/398120/376773                                                            // 820
    (window.console && (console.firebug || (console.exception && console.table))) ||                                   // 821
    // is firefox >= v31?                                                                                              // 822
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages                                     // 823
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);                      // 824
}                                                                                                                      // 825
                                                                                                                       // 826
/**                                                                                                                    // 827
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.                                           // 828
 */                                                                                                                    // 829
                                                                                                                       // 830
exports.formatters.j = function(v) {                                                                                   // 831
  return JSON.stringify(v);                                                                                            // 832
};                                                                                                                     // 833
                                                                                                                       // 834
                                                                                                                       // 835
/**                                                                                                                    // 836
 * Colorize log arguments if enabled.                                                                                  // 837
 *                                                                                                                     // 838
 * @api public                                                                                                         // 839
 */                                                                                                                    // 840
                                                                                                                       // 841
function formatArgs() {                                                                                                // 842
  var args = arguments;                                                                                                // 843
  var useColors = this.useColors;                                                                                      // 844
                                                                                                                       // 845
  args[0] = (useColors ? '%c' : '')                                                                                    // 846
    + this.namespace                                                                                                   // 847
    + (useColors ? ' %c' : ' ')                                                                                        // 848
    + args[0]                                                                                                          // 849
    + (useColors ? '%c ' : ' ')                                                                                        // 850
    + '+' + exports.humanize(this.diff);                                                                               // 851
                                                                                                                       // 852
  if (!useColors) return args;                                                                                         // 853
                                                                                                                       // 854
  var c = 'color: ' + this.color;                                                                                      // 855
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));                                   // 856
                                                                                                                       // 857
  // the final "%c" is somewhat tricky, because there could be other                                                   // 858
  // arguments passed either before or after the %c, so we need to                                                     // 859
  // figure out the correct index to insert the CSS into                                                               // 860
  var index = 0;                                                                                                       // 861
  var lastC = 0;                                                                                                       // 862
  args[0].replace(/%[a-z%]/g, function(match) {                                                                        // 863
    if ('%%' === match) return;                                                                                        // 864
    index++;                                                                                                           // 865
    if ('%c' === match) {                                                                                              // 866
      // we only are interested in the *last* %c                                                                       // 867
      // (the user may have provided their own)                                                                        // 868
      lastC = index;                                                                                                   // 869
    }                                                                                                                  // 870
  });                                                                                                                  // 871
                                                                                                                       // 872
  args.splice(lastC, 0, c);                                                                                            // 873
  return args;                                                                                                         // 874
}                                                                                                                      // 875
                                                                                                                       // 876
/**                                                                                                                    // 877
 * Invokes `console.log()` when available.                                                                             // 878
 * No-op when `console.log` is not a "function".                                                                       // 879
 *                                                                                                                     // 880
 * @api public                                                                                                         // 881
 */                                                                                                                    // 882
                                                                                                                       // 883
function log() {                                                                                                       // 884
  // this hackery is required for IE8/9, where                                                                         // 885
  // the `console.log` function doesn't have 'apply'                                                                   // 886
  return 'object' === typeof console                                                                                   // 887
    && console.log                                                                                                     // 888
    && Function.prototype.apply.call(console.log, console, arguments);                                                 // 889
}                                                                                                                      // 890
                                                                                                                       // 891
/**                                                                                                                    // 892
 * Save `namespaces`.                                                                                                  // 893
 *                                                                                                                     // 894
 * @param {String} namespaces                                                                                          // 895
 * @api private                                                                                                        // 896
 */                                                                                                                    // 897
                                                                                                                       // 898
function save(namespaces) {                                                                                            // 899
  try {                                                                                                                // 900
    if (null == namespaces) {                                                                                          // 901
      exports.storage.removeItem('debug');                                                                             // 902
    } else {                                                                                                           // 903
      exports.storage.debug = namespaces;                                                                              // 904
    }                                                                                                                  // 905
  } catch(e) {}                                                                                                        // 906
}                                                                                                                      // 907
                                                                                                                       // 908
/**                                                                                                                    // 909
 * Load `namespaces`.                                                                                                  // 910
 *                                                                                                                     // 911
 * @return {String} returns the previously persisted debug modes                                                       // 912
 * @api private                                                                                                        // 913
 */                                                                                                                    // 914
                                                                                                                       // 915
function load() {                                                                                                      // 916
  var r;                                                                                                               // 917
  try {                                                                                                                // 918
    r = exports.storage.debug;                                                                                         // 919
  } catch(e) {}                                                                                                        // 920
  return r;                                                                                                            // 921
}                                                                                                                      // 922
                                                                                                                       // 923
/**                                                                                                                    // 924
 * Enable namespaces listed in `localStorage.debug` initially.                                                         // 925
 */                                                                                                                    // 926
                                                                                                                       // 927
exports.enable(load());                                                                                                // 928
                                                                                                                       // 929
/**                                                                                                                    // 930
 * Localstorage attempts to return the localstorage.                                                                   // 931
 *                                                                                                                     // 932
 * This is necessary because safari throws                                                                             // 933
 * when a user disables cookies/localstorage                                                                           // 934
 * and you attempt to access it.                                                                                       // 935
 *                                                                                                                     // 936
 * @return {LocalStorage}                                                                                              // 937
 * @api private                                                                                                        // 938
 */                                                                                                                    // 939
                                                                                                                       // 940
function localstorage(){                                                                                               // 941
  try {                                                                                                                // 942
    return window.localStorage;                                                                                        // 943
  } catch (e) {}                                                                                                       // 944
}                                                                                                                      // 945
                                                                                                                       // 946
},{"7":7}],7:[function(require,module,exports){                                                                        // 947
                                                                                                                       // 948
/**                                                                                                                    // 949
 * This is the common logic for both the Node.js and web browser                                                       // 950
 * implementations of `debug()`.                                                                                       // 951
 *                                                                                                                     // 952
 * Expose `debug()` as the module.                                                                                     // 953
 */                                                                                                                    // 954
                                                                                                                       // 955
exports = module.exports = debug;                                                                                      // 956
exports.coerce = coerce;                                                                                               // 957
exports.disable = disable;                                                                                             // 958
exports.enable = enable;                                                                                               // 959
exports.enabled = enabled;                                                                                             // 960
exports.humanize = require(8);                                                                                         // 961
                                                                                                                       // 962
/**                                                                                                                    // 963
 * The currently active debug mode names, and names to skip.                                                           // 964
 */                                                                                                                    // 965
                                                                                                                       // 966
exports.names = [];                                                                                                    // 967
exports.skips = [];                                                                                                    // 968
                                                                                                                       // 969
/**                                                                                                                    // 970
 * Map of special "%n" handling functions, for the debug "format" argument.                                            // 971
 *                                                                                                                     // 972
 * Valid key names are a single, lowercased letter, i.e. "n".                                                          // 973
 */                                                                                                                    // 974
                                                                                                                       // 975
exports.formatters = {};                                                                                               // 976
                                                                                                                       // 977
/**                                                                                                                    // 978
 * Previously assigned color.                                                                                          // 979
 */                                                                                                                    // 980
                                                                                                                       // 981
var prevColor = 0;                                                                                                     // 982
                                                                                                                       // 983
/**                                                                                                                    // 984
 * Previous log timestamp.                                                                                             // 985
 */                                                                                                                    // 986
                                                                                                                       // 987
var prevTime;                                                                                                          // 988
                                                                                                                       // 989
/**                                                                                                                    // 990
 * Select a color.                                                                                                     // 991
 *                                                                                                                     // 992
 * @return {Number}                                                                                                    // 993
 * @api private                                                                                                        // 994
 */                                                                                                                    // 995
                                                                                                                       // 996
function selectColor() {                                                                                               // 997
  return exports.colors[prevColor++ % exports.colors.length];                                                          // 998
}                                                                                                                      // 999
                                                                                                                       // 1000
/**                                                                                                                    // 1001
 * Create a debugger with the given `namespace`.                                                                       // 1002
 *                                                                                                                     // 1003
 * @param {String} namespace                                                                                           // 1004
 * @return {Function}                                                                                                  // 1005
 * @api public                                                                                                         // 1006
 */                                                                                                                    // 1007
                                                                                                                       // 1008
function debug(namespace) {                                                                                            // 1009
                                                                                                                       // 1010
  // define the `disabled` version                                                                                     // 1011
  function disabled() {                                                                                                // 1012
  }                                                                                                                    // 1013
  disabled.enabled = false;                                                                                            // 1014
                                                                                                                       // 1015
  // define the `enabled` version                                                                                      // 1016
  function enabled() {                                                                                                 // 1017
                                                                                                                       // 1018
    var self = enabled;                                                                                                // 1019
                                                                                                                       // 1020
    // set `diff` timestamp                                                                                            // 1021
    var curr = +new Date();                                                                                            // 1022
    var ms = curr - (prevTime || curr);                                                                                // 1023
    self.diff = ms;                                                                                                    // 1024
    self.prev = prevTime;                                                                                              // 1025
    self.curr = curr;                                                                                                  // 1026
    prevTime = curr;                                                                                                   // 1027
                                                                                                                       // 1028
    // add the `color` if not set                                                                                      // 1029
    if (null == self.useColors) self.useColors = exports.useColors();                                                  // 1030
    if (null == self.color && self.useColors) self.color = selectColor();                                              // 1031
                                                                                                                       // 1032
    var args = Array.prototype.slice.call(arguments);                                                                  // 1033
                                                                                                                       // 1034
    args[0] = exports.coerce(args[0]);                                                                                 // 1035
                                                                                                                       // 1036
    if ('string' !== typeof args[0]) {                                                                                 // 1037
      // anything else let's inspect with %o                                                                           // 1038
      args = ['%o'].concat(args);                                                                                      // 1039
    }                                                                                                                  // 1040
                                                                                                                       // 1041
    // apply any `formatters` transformations                                                                          // 1042
    var index = 0;                                                                                                     // 1043
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {                                                  // 1044
      // if we encounter an escaped % then don't increase the array index                                              // 1045
      if (match === '%%') return match;                                                                                // 1046
      index++;                                                                                                         // 1047
      var formatter = exports.formatters[format];                                                                      // 1048
      if ('function' === typeof formatter) {                                                                           // 1049
        var val = args[index];                                                                                         // 1050
        match = formatter.call(self, val);                                                                             // 1051
                                                                                                                       // 1052
        // now we need to remove `args[index]` since it's inlined in the `format`                                      // 1053
        args.splice(index, 1);                                                                                         // 1054
        index--;                                                                                                       // 1055
      }                                                                                                                // 1056
      return match;                                                                                                    // 1057
    });                                                                                                                // 1058
                                                                                                                       // 1059
    if ('function' === typeof exports.formatArgs) {                                                                    // 1060
      args = exports.formatArgs.apply(self, args);                                                                     // 1061
    }                                                                                                                  // 1062
    var logFn = enabled.log || exports.log || console.log.bind(console);                                               // 1063
    logFn.apply(self, args);                                                                                           // 1064
  }                                                                                                                    // 1065
  enabled.enabled = true;                                                                                              // 1066
                                                                                                                       // 1067
  var fn = exports.enabled(namespace) ? enabled : disabled;                                                            // 1068
                                                                                                                       // 1069
  fn.namespace = namespace;                                                                                            // 1070
                                                                                                                       // 1071
  return fn;                                                                                                           // 1072
}                                                                                                                      // 1073
                                                                                                                       // 1074
/**                                                                                                                    // 1075
 * Enables a debug mode by namespaces. This can include modes                                                          // 1076
 * separated by a colon and wildcards.                                                                                 // 1077
 *                                                                                                                     // 1078
 * @param {String} namespaces                                                                                          // 1079
 * @api public                                                                                                         // 1080
 */                                                                                                                    // 1081
                                                                                                                       // 1082
function enable(namespaces) {                                                                                          // 1083
  exports.save(namespaces);                                                                                            // 1084
                                                                                                                       // 1085
  var split = (namespaces || '').split(/[\s,]+/);                                                                      // 1086
  var len = split.length;                                                                                              // 1087
                                                                                                                       // 1088
  for (var i = 0; i < len; i++) {                                                                                      // 1089
    if (!split[i]) continue; // ignore empty strings                                                                   // 1090
    namespaces = split[i].replace(/\*/g, '.*?');                                                                       // 1091
    if (namespaces[0] === '-') {                                                                                       // 1092
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));                                                // 1093
    } else {                                                                                                           // 1094
      exports.names.push(new RegExp('^' + namespaces + '$'));                                                          // 1095
    }                                                                                                                  // 1096
  }                                                                                                                    // 1097
}                                                                                                                      // 1098
                                                                                                                       // 1099
/**                                                                                                                    // 1100
 * Disable debug output.                                                                                               // 1101
 *                                                                                                                     // 1102
 * @api public                                                                                                         // 1103
 */                                                                                                                    // 1104
                                                                                                                       // 1105
function disable() {                                                                                                   // 1106
  exports.enable('');                                                                                                  // 1107
}                                                                                                                      // 1108
                                                                                                                       // 1109
/**                                                                                                                    // 1110
 * Returns true if the given mode name is enabled, false otherwise.                                                    // 1111
 *                                                                                                                     // 1112
 * @param {String} name                                                                                                // 1113
 * @return {Boolean}                                                                                                   // 1114
 * @api public                                                                                                         // 1115
 */                                                                                                                    // 1116
                                                                                                                       // 1117
function enabled(name) {                                                                                               // 1118
  var i, len;                                                                                                          // 1119
  for (i = 0, len = exports.skips.length; i < len; i++) {                                                              // 1120
    if (exports.skips[i].test(name)) {                                                                                 // 1121
      return false;                                                                                                    // 1122
    }                                                                                                                  // 1123
  }                                                                                                                    // 1124
  for (i = 0, len = exports.names.length; i < len; i++) {                                                              // 1125
    if (exports.names[i].test(name)) {                                                                                 // 1126
      return true;                                                                                                     // 1127
    }                                                                                                                  // 1128
  }                                                                                                                    // 1129
  return false;                                                                                                        // 1130
}                                                                                                                      // 1131
                                                                                                                       // 1132
/**                                                                                                                    // 1133
 * Coerce `val`.                                                                                                       // 1134
 *                                                                                                                     // 1135
 * @param {Mixed} val                                                                                                  // 1136
 * @return {Mixed}                                                                                                     // 1137
 * @api private                                                                                                        // 1138
 */                                                                                                                    // 1139
                                                                                                                       // 1140
function coerce(val) {                                                                                                 // 1141
  if (val instanceof Error) return val.stack || val.message;                                                           // 1142
  return val;                                                                                                          // 1143
}                                                                                                                      // 1144
                                                                                                                       // 1145
},{"8":8}],8:[function(require,module,exports){                                                                        // 1146
/**                                                                                                                    // 1147
 * Helpers.                                                                                                            // 1148
 */                                                                                                                    // 1149
                                                                                                                       // 1150
var s = 1000;                                                                                                          // 1151
var m = s * 60;                                                                                                        // 1152
var h = m * 60;                                                                                                        // 1153
var d = h * 24;                                                                                                        // 1154
var y = d * 365.25;                                                                                                    // 1155
                                                                                                                       // 1156
/**                                                                                                                    // 1157
 * Parse or format the given `val`.                                                                                    // 1158
 *                                                                                                                     // 1159
 * Options:                                                                                                            // 1160
 *                                                                                                                     // 1161
 *  - `long` verbose formatting [false]                                                                                // 1162
 *                                                                                                                     // 1163
 * @param {String|Number} val                                                                                          // 1164
 * @param {Object} options                                                                                             // 1165
 * @return {String|Number}                                                                                             // 1166
 * @api public                                                                                                         // 1167
 */                                                                                                                    // 1168
                                                                                                                       // 1169
module.exports = function(val, options){                                                                               // 1170
  options = options || {};                                                                                             // 1171
  if ('string' == typeof val) return parse(val);                                                                       // 1172
  // long, short were "future reserved words in js", YUI compressor fail on them                                       // 1173
  // https://github.com/algolia/algoliasearch-client-js/issues/113#issuecomment-111978606                              // 1174
  // https://github.com/yui/yuicompressor/issues/47                                                                    // 1175
  // https://github.com/rauchg/ms.js/pull/40                                                                           // 1176
  return options['long']                                                                                               // 1177
    ? _long(val)                                                                                                       // 1178
    : _short(val);                                                                                                     // 1179
};                                                                                                                     // 1180
                                                                                                                       // 1181
/**                                                                                                                    // 1182
 * Parse the given `str` and return milliseconds.                                                                      // 1183
 *                                                                                                                     // 1184
 * @param {String} str                                                                                                 // 1185
 * @return {Number}                                                                                                    // 1186
 * @api private                                                                                                        // 1187
 */                                                                                                                    // 1188
                                                                                                                       // 1189
function parse(str) {                                                                                                  // 1190
  str = '' + str;                                                                                                      // 1191
  if (str.length > 10000) return;                                                                                      // 1192
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) return;                                                                                                  // 1194
  var n = parseFloat(match[1]);                                                                                        // 1195
  var type = (match[2] || 'ms').toLowerCase();                                                                         // 1196
  switch (type) {                                                                                                      // 1197
    case 'years':                                                                                                      // 1198
    case 'year':                                                                                                       // 1199
    case 'yrs':                                                                                                        // 1200
    case 'yr':                                                                                                         // 1201
    case 'y':                                                                                                          // 1202
      return n * y;                                                                                                    // 1203
    case 'days':                                                                                                       // 1204
    case 'day':                                                                                                        // 1205
    case 'd':                                                                                                          // 1206
      return n * d;                                                                                                    // 1207
    case 'hours':                                                                                                      // 1208
    case 'hour':                                                                                                       // 1209
    case 'hrs':                                                                                                        // 1210
    case 'hr':                                                                                                         // 1211
    case 'h':                                                                                                          // 1212
      return n * h;                                                                                                    // 1213
    case 'minutes':                                                                                                    // 1214
    case 'minute':                                                                                                     // 1215
    case 'mins':                                                                                                       // 1216
    case 'min':                                                                                                        // 1217
    case 'm':                                                                                                          // 1218
      return n * m;                                                                                                    // 1219
    case 'seconds':                                                                                                    // 1220
    case 'second':                                                                                                     // 1221
    case 'secs':                                                                                                       // 1222
    case 'sec':                                                                                                        // 1223
    case 's':                                                                                                          // 1224
      return n * s;                                                                                                    // 1225
    case 'milliseconds':                                                                                               // 1226
    case 'millisecond':                                                                                                // 1227
    case 'msecs':                                                                                                      // 1228
    case 'msec':                                                                                                       // 1229
    case 'ms':                                                                                                         // 1230
      return n;                                                                                                        // 1231
  }                                                                                                                    // 1232
}                                                                                                                      // 1233
                                                                                                                       // 1234
/**                                                                                                                    // 1235
 * Short format for `ms`.                                                                                              // 1236
 *                                                                                                                     // 1237
 * @param {Number} ms                                                                                                  // 1238
 * @return {String}                                                                                                    // 1239
 * @api private                                                                                                        // 1240
 */                                                                                                                    // 1241
                                                                                                                       // 1242
function _short(ms) {                                                                                                  // 1243
  if (ms >= d) return Math.round(ms / d) + 'd';                                                                        // 1244
  if (ms >= h) return Math.round(ms / h) + 'h';                                                                        // 1245
  if (ms >= m) return Math.round(ms / m) + 'm';                                                                        // 1246
  if (ms >= s) return Math.round(ms / s) + 's';                                                                        // 1247
  return ms + 'ms';                                                                                                    // 1248
}                                                                                                                      // 1249
                                                                                                                       // 1250
/**                                                                                                                    // 1251
 * Long format for `ms`.                                                                                               // 1252
 *                                                                                                                     // 1253
 * @param {Number} ms                                                                                                  // 1254
 * @return {String}                                                                                                    // 1255
 * @api private                                                                                                        // 1256
 */                                                                                                                    // 1257
                                                                                                                       // 1258
function _long(ms) {                                                                                                   // 1259
  return plural(ms, d, 'day')                                                                                          // 1260
    || plural(ms, h, 'hour')                                                                                           // 1261
    || plural(ms, m, 'minute')                                                                                         // 1262
    || plural(ms, s, 'second')                                                                                         // 1263
    || ms + ' ms';                                                                                                     // 1264
}                                                                                                                      // 1265
                                                                                                                       // 1266
/**                                                                                                                    // 1267
 * Pluralization helper.                                                                                               // 1268
 */                                                                                                                    // 1269
                                                                                                                       // 1270
function plural(ms, n, name) {                                                                                         // 1271
  if (ms < n) return;                                                                                                  // 1272
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;                                                            // 1273
  return Math.ceil(ms / n) + ' ' + name + 's';                                                                         // 1274
}                                                                                                                      // 1275
                                                                                                                       // 1276
},{}],9:[function(require,module,exports){                                                                             // 1277
(function (process,global){                                                                                            // 1278
/*!                                                                                                                    // 1279
 * @overview es6-promise - a tiny implementation of Promises/A+.                                                       // 1280
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license                                                                               // 1282
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE                           // 1283
 * @version   3.0.2                                                                                                    // 1284
 */                                                                                                                    // 1285
                                                                                                                       // 1286
(function() {                                                                                                          // 1287
    "use strict";                                                                                                      // 1288
    function lib$es6$promise$utils$$objectOrFunction(x) {                                                              // 1289
      return typeof x === 'function' || (typeof x === 'object' && x !== null);                                         // 1290
    }                                                                                                                  // 1291
                                                                                                                       // 1292
    function lib$es6$promise$utils$$isFunction(x) {                                                                    // 1293
      return typeof x === 'function';                                                                                  // 1294
    }                                                                                                                  // 1295
                                                                                                                       // 1296
    function lib$es6$promise$utils$$isMaybeThenable(x) {                                                               // 1297
      return typeof x === 'object' && x !== null;                                                                      // 1298
    }                                                                                                                  // 1299
                                                                                                                       // 1300
    var lib$es6$promise$utils$$_isArray;                                                                               // 1301
    if (!Array.isArray) {                                                                                              // 1302
      lib$es6$promise$utils$$_isArray = function (x) {                                                                 // 1303
        return Object.prototype.toString.call(x) === '[object Array]';                                                 // 1304
      };                                                                                                               // 1305
    } else {                                                                                                           // 1306
      lib$es6$promise$utils$$_isArray = Array.isArray;                                                                 // 1307
    }                                                                                                                  // 1308
                                                                                                                       // 1309
    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;                                              // 1310
    var lib$es6$promise$asap$$len = 0;                                                                                 // 1311
    var lib$es6$promise$asap$$toString = {}.toString;                                                                  // 1312
    var lib$es6$promise$asap$$vertxNext;                                                                               // 1313
    var lib$es6$promise$asap$$customSchedulerFn;                                                                       // 1314
                                                                                                                       // 1315
    var lib$es6$promise$asap$$asap = function asap(callback, arg) {                                                    // 1316
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;                                               // 1317
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;                                                // 1318
      lib$es6$promise$asap$$len += 2;                                                                                  // 1319
      if (lib$es6$promise$asap$$len === 2) {                                                                           // 1320
        // If len is 2, that means that we need to schedule an async flush.                                            // 1321
        // If additional callbacks are queued before the queue is flushed, they                                        // 1322
        // will be processed by this flush that we are scheduling.                                                     // 1323
        if (lib$es6$promise$asap$$customSchedulerFn) {                                                                 // 1324
          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);                                        // 1325
        } else {                                                                                                       // 1326
          lib$es6$promise$asap$$scheduleFlush();                                                                       // 1327
        }                                                                                                              // 1328
      }                                                                                                                // 1329
    }                                                                                                                  // 1330
                                                                                                                       // 1331
    function lib$es6$promise$asap$$setScheduler(scheduleFn) {                                                          // 1332
      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;                                                            // 1333
    }                                                                                                                  // 1334
                                                                                                                       // 1335
    function lib$es6$promise$asap$$setAsap(asapFn) {                                                                   // 1336
      lib$es6$promise$asap$$asap = asapFn;                                                                             // 1337
    }                                                                                                                  // 1338
                                                                                                                       // 1339
    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;                    // 1340
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};                               // 1341
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
                                                                                                                       // 1344
    // test for web worker but not in IE10                                                                             // 1345
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&                                   // 1346
      typeof importScripts !== 'undefined' &&                                                                          // 1347
      typeof MessageChannel !== 'undefined';                                                                           // 1348
                                                                                                                       // 1349
    // node                                                                                                            // 1350
    function lib$es6$promise$asap$$useNextTick() {                                                                     // 1351
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively                          // 1352
      // see https://github.com/cujojs/when/issues/410 for details                                                     // 1353
      return function() {                                                                                              // 1354
        process.nextTick(lib$es6$promise$asap$$flush);                                                                 // 1355
      };                                                                                                               // 1356
    }                                                                                                                  // 1357
                                                                                                                       // 1358
    // vertx                                                                                                           // 1359
    function lib$es6$promise$asap$$useVertxTimer() {                                                                   // 1360
      return function() {                                                                                              // 1361
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);                                                  // 1362
      };                                                                                                               // 1363
    }                                                                                                                  // 1364
                                                                                                                       // 1365
    function lib$es6$promise$asap$$useMutationObserver() {                                                             // 1366
      var iterations = 0;                                                                                              // 1367
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);                   // 1368
      var node = document.createTextNode('');                                                                          // 1369
      observer.observe(node, { characterData: true });                                                                 // 1370
                                                                                                                       // 1371
      return function() {                                                                                              // 1372
        node.data = (iterations = ++iterations % 2);                                                                   // 1373
      };                                                                                                               // 1374
    }                                                                                                                  // 1375
                                                                                                                       // 1376
    // web worker                                                                                                      // 1377
    function lib$es6$promise$asap$$useMessageChannel() {                                                               // 1378
      var channel = new MessageChannel();                                                                              // 1379
      channel.port1.onmessage = lib$es6$promise$asap$$flush;                                                           // 1380
      return function () {                                                                                             // 1381
        channel.port2.postMessage(0);                                                                                  // 1382
      };                                                                                                               // 1383
    }                                                                                                                  // 1384
                                                                                                                       // 1385
    function lib$es6$promise$asap$$useSetTimeout() {                                                                   // 1386
      return function() {                                                                                              // 1387
        setTimeout(lib$es6$promise$asap$$flush, 1);                                                                    // 1388
      };                                                                                                               // 1389
    }                                                                                                                  // 1390
                                                                                                                       // 1391
    var lib$es6$promise$asap$$queue = new Array(1000);                                                                 // 1392
    function lib$es6$promise$asap$$flush() {                                                                           // 1393
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {                                                           // 1394
        var callback = lib$es6$promise$asap$$queue[i];                                                                 // 1395
        var arg = lib$es6$promise$asap$$queue[i+1];                                                                    // 1396
                                                                                                                       // 1397
        callback(arg);                                                                                                 // 1398
                                                                                                                       // 1399
        lib$es6$promise$asap$$queue[i] = undefined;                                                                    // 1400
        lib$es6$promise$asap$$queue[i+1] = undefined;                                                                  // 1401
      }                                                                                                                // 1402
                                                                                                                       // 1403
      lib$es6$promise$asap$$len = 0;                                                                                   // 1404
    }                                                                                                                  // 1405
                                                                                                                       // 1406
    function lib$es6$promise$asap$$attemptVertx() {                                                                    // 1407
      try {                                                                                                            // 1408
        var r = require;                                                                                               // 1409
        var vertx = r('vertx');                                                                                        // 1410
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;                                       // 1411
        return lib$es6$promise$asap$$useVertxTimer();                                                                  // 1412
      } catch(e) {                                                                                                     // 1413
        return lib$es6$promise$asap$$useSetTimeout();                                                                  // 1414
      }                                                                                                                // 1415
    }                                                                                                                  // 1416
                                                                                                                       // 1417
    var lib$es6$promise$asap$$scheduleFlush;                                                                           // 1418
    // Decide what async method to use to triggering processing of queued callbacks:                                   // 1419
    if (lib$es6$promise$asap$$isNode) {                                                                                // 1420
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();                                       // 1421
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {                                                        // 1422
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();                               // 1423
    } else if (lib$es6$promise$asap$$isWorker) {                                                                       // 1424
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();                                 // 1425
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {                   // 1426
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();                                      // 1427
    } else {                                                                                                           // 1428
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();                                     // 1429
    }                                                                                                                  // 1430
                                                                                                                       // 1431
    function lib$es6$promise$$internal$$noop() {}                                                                      // 1432
                                                                                                                       // 1433
    var lib$es6$promise$$internal$$PENDING   = void 0;                                                                 // 1434
    var lib$es6$promise$$internal$$FULFILLED = 1;                                                                      // 1435
    var lib$es6$promise$$internal$$REJECTED  = 2;                                                                      // 1436
                                                                                                                       // 1437
    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();                      // 1438
                                                                                                                       // 1439
    function lib$es6$promise$$internal$$selfFulfillment() {                                                            // 1440
      return new TypeError("You cannot resolve a promise with itself");                                                // 1441
    }                                                                                                                  // 1442
                                                                                                                       // 1443
    function lib$es6$promise$$internal$$cannotReturnOwn() {                                                            // 1444
      return new TypeError('A promises callback cannot return that same promise.');                                    // 1445
    }                                                                                                                  // 1446
                                                                                                                       // 1447
    function lib$es6$promise$$internal$$getThen(promise) {                                                             // 1448
      try {                                                                                                            // 1449
        return promise.then;                                                                                           // 1450
      } catch(error) {                                                                                                 // 1451
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;                                                       // 1452
        return lib$es6$promise$$internal$$GET_THEN_ERROR;                                                              // 1453
      }                                                                                                                // 1454
    }                                                                                                                  // 1455
                                                                                                                       // 1456
    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {                   // 1457
      try {                                                                                                            // 1458
        then.call(value, fulfillmentHandler, rejectionHandler);                                                        // 1459
      } catch(e) {                                                                                                     // 1460
        return e;                                                                                                      // 1461
      }                                                                                                                // 1462
    }                                                                                                                  // 1463
                                                                                                                       // 1464
    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {                               // 1465
       lib$es6$promise$asap$$asap(function(promise) {                                                                  // 1466
        var sealed = false;                                                                                            // 1467
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {                               // 1468
          if (sealed) { return; }                                                                                      // 1469
          sealed = true;                                                                                               // 1470
          if (thenable !== value) {                                                                                    // 1471
            lib$es6$promise$$internal$$resolve(promise, value);                                                        // 1472
          } else {                                                                                                     // 1473
            lib$es6$promise$$internal$$fulfill(promise, value);                                                        // 1474
          }                                                                                                            // 1475
        }, function(reason) {                                                                                          // 1476
          if (sealed) { return; }                                                                                      // 1477
          sealed = true;                                                                                               // 1478
                                                                                                                       // 1479
          lib$es6$promise$$internal$$reject(promise, reason);                                                          // 1480
        }, 'Settle: ' + (promise._label || ' unknown promise'));                                                       // 1481
                                                                                                                       // 1482
        if (!sealed && error) {                                                                                        // 1483
          sealed = true;                                                                                               // 1484
          lib$es6$promise$$internal$$reject(promise, error);                                                           // 1485
        }                                                                                                              // 1486
      }, promise);                                                                                                     // 1487
    }                                                                                                                  // 1488
                                                                                                                       // 1489
    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {                                         // 1490
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {                                                  // 1491
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);                                                 // 1492
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {                                            // 1493
        lib$es6$promise$$internal$$reject(promise, thenable._result);                                                  // 1494
      } else {                                                                                                         // 1495
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {                                    // 1496
          lib$es6$promise$$internal$$resolve(promise, value);                                                          // 1497
        }, function(reason) {                                                                                          // 1498
          lib$es6$promise$$internal$$reject(promise, reason);                                                          // 1499
        });                                                                                                            // 1500
      }                                                                                                                // 1501
    }                                                                                                                  // 1502
                                                                                                                       // 1503
    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {                                  // 1504
      if (maybeThenable.constructor === promise.constructor) {                                                         // 1505
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);                                          // 1506
      } else {                                                                                                         // 1507
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);                                                  // 1508
                                                                                                                       // 1509
        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {                                                      // 1510
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);                 // 1511
        } else if (then === undefined) {                                                                               // 1512
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);                                                  // 1513
        } else if (lib$es6$promise$utils$$isFunction(then)) {                                                          // 1514
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);                              // 1515
        } else {                                                                                                       // 1516
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);                                                  // 1517
        }                                                                                                              // 1518
      }                                                                                                                // 1519
    }                                                                                                                  // 1520
                                                                                                                       // 1521
    function lib$es6$promise$$internal$$resolve(promise, value) {                                                      // 1522
      if (promise === value) {                                                                                         // 1523
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());                      // 1524
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {                                                     // 1525
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);                                                // 1526
      } else {                                                                                                         // 1527
        lib$es6$promise$$internal$$fulfill(promise, value);                                                            // 1528
      }                                                                                                                // 1529
    }                                                                                                                  // 1530
                                                                                                                       // 1531
    function lib$es6$promise$$internal$$publishRejection(promise) {                                                    // 1532
      if (promise._onerror) {                                                                                          // 1533
        promise._onerror(promise._result);                                                                             // 1534
      }                                                                                                                // 1535
                                                                                                                       // 1536
      lib$es6$promise$$internal$$publish(promise);                                                                     // 1537
    }                                                                                                                  // 1538
                                                                                                                       // 1539
    function lib$es6$promise$$internal$$fulfill(promise, value) {                                                      // 1540
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }                                           // 1541
                                                                                                                       // 1542
      promise._result = value;                                                                                         // 1543
      promise._state = lib$es6$promise$$internal$$FULFILLED;                                                           // 1544
                                                                                                                       // 1545
      if (promise._subscribers.length !== 0) {                                                                         // 1546
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);                                       // 1547
      }                                                                                                                // 1548
    }                                                                                                                  // 1549
                                                                                                                       // 1550
    function lib$es6$promise$$internal$$reject(promise, reason) {                                                      // 1551
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }                                           // 1552
      promise._state = lib$es6$promise$$internal$$REJECTED;                                                            // 1553
      promise._result = reason;                                                                                        // 1554
                                                                                                                       // 1555
      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);                                // 1556
    }                                                                                                                  // 1557
                                                                                                                       // 1558
    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {                         // 1559
      var subscribers = parent._subscribers;                                                                           // 1560
      var length = subscribers.length;                                                                                 // 1561
                                                                                                                       // 1562
      parent._onerror = null;                                                                                          // 1563
                                                                                                                       // 1564
      subscribers[length] = child;                                                                                     // 1565
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;                                      // 1566
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;                                        // 1567
                                                                                                                       // 1568
      if (length === 0 && parent._state) {                                                                             // 1569
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);                                        // 1570
      }                                                                                                                // 1571
    }                                                                                                                  // 1572
                                                                                                                       // 1573
    function lib$es6$promise$$internal$$publish(promise) {                                                             // 1574
      var subscribers = promise._subscribers;                                                                          // 1575
      var settled = promise._state;                                                                                    // 1576
                                                                                                                       // 1577
      if (subscribers.length === 0) { return; }                                                                        // 1578
                                                                                                                       // 1579
      var child, callback, detail = promise._result;                                                                   // 1580
                                                                                                                       // 1581
      for (var i = 0; i < subscribers.length; i += 3) {                                                                // 1582
        child = subscribers[i];                                                                                        // 1583
        callback = subscribers[i + settled];                                                                           // 1584
                                                                                                                       // 1585
        if (child) {                                                                                                   // 1586
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);                                 // 1587
        } else {                                                                                                       // 1588
          callback(detail);                                                                                            // 1589
        }                                                                                                              // 1590
      }                                                                                                                // 1591
                                                                                                                       // 1592
      promise._subscribers.length = 0;                                                                                 // 1593
    }                                                                                                                  // 1594
                                                                                                                       // 1595
    function lib$es6$promise$$internal$$ErrorObject() {                                                                // 1596
      this.error = null;                                                                                               // 1597
    }                                                                                                                  // 1598
                                                                                                                       // 1599
    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();                     // 1600
                                                                                                                       // 1601
    function lib$es6$promise$$internal$$tryCatch(callback, detail) {                                                   // 1602
      try {                                                                                                            // 1603
        return callback(detail);                                                                                       // 1604
      } catch(e) {                                                                                                     // 1605
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;                                                          // 1606
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;                                                             // 1607
      }                                                                                                                // 1608
    }                                                                                                                  // 1609
                                                                                                                       // 1610
    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {                           // 1611
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),                                                   // 1612
          value, error, succeeded, failed;                                                                             // 1613
                                                                                                                       // 1614
      if (hasCallback) {                                                                                               // 1615
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);                                                 // 1616
                                                                                                                       // 1617
        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {                                                    // 1618
          failed = true;                                                                                               // 1619
          error = value.error;                                                                                         // 1620
          value = null;                                                                                                // 1621
        } else {                                                                                                       // 1622
          succeeded = true;                                                                                            // 1623
        }                                                                                                              // 1624
                                                                                                                       // 1625
        if (promise === value) {                                                                                       // 1626
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());                    // 1627
          return;                                                                                                      // 1628
        }                                                                                                              // 1629
                                                                                                                       // 1630
      } else {                                                                                                         // 1631
        value = detail;                                                                                                // 1632
        succeeded = true;                                                                                              // 1633
      }                                                                                                                // 1634
                                                                                                                       // 1635
      if (promise._state !== lib$es6$promise$$internal$$PENDING) {                                                     // 1636
        // noop                                                                                                        // 1637
      } else if (hasCallback && succeeded) {                                                                           // 1638
        lib$es6$promise$$internal$$resolve(promise, value);                                                            // 1639
      } else if (failed) {                                                                                             // 1640
        lib$es6$promise$$internal$$reject(promise, error);                                                             // 1641
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {                                                   // 1642
        lib$es6$promise$$internal$$fulfill(promise, value);                                                            // 1643
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {                                                    // 1644
        lib$es6$promise$$internal$$reject(promise, value);                                                             // 1645
      }                                                                                                                // 1646
    }                                                                                                                  // 1647
                                                                                                                       // 1648
    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {                                         // 1649
      try {                                                                                                            // 1650
        resolver(function resolvePromise(value){                                                                       // 1651
          lib$es6$promise$$internal$$resolve(promise, value);                                                          // 1652
        }, function rejectPromise(reason) {                                                                            // 1653
          lib$es6$promise$$internal$$reject(promise, reason);                                                          // 1654
        });                                                                                                            // 1655
      } catch(e) {                                                                                                     // 1656
        lib$es6$promise$$internal$$reject(promise, e);                                                                 // 1657
      }                                                                                                                // 1658
    }                                                                                                                  // 1659
                                                                                                                       // 1660
    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {                                              // 1661
      var enumerator = this;                                                                                           // 1662
                                                                                                                       // 1663
      enumerator._instanceConstructor = Constructor;                                                                   // 1664
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);                                           // 1665
                                                                                                                       // 1666
      if (enumerator._validateInput(input)) {                                                                          // 1667
        enumerator._input     = input;                                                                                 // 1668
        enumerator.length     = input.length;                                                                          // 1669
        enumerator._remaining = input.length;                                                                          // 1670
                                                                                                                       // 1671
        enumerator._init();                                                                                            // 1672
                                                                                                                       // 1673
        if (enumerator.length === 0) {                                                                                 // 1674
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);                                  // 1675
        } else {                                                                                                       // 1676
          enumerator.length = enumerator.length || 0;                                                                  // 1677
          enumerator._enumerate();                                                                                     // 1678
          if (enumerator._remaining === 0) {                                                                           // 1679
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);                                // 1680
          }                                                                                                            // 1681
        }                                                                                                              // 1682
      } else {                                                                                                         // 1683
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());                          // 1684
      }                                                                                                                // 1685
    }                                                                                                                  // 1686
                                                                                                                       // 1687
    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {                                // 1688
      return lib$es6$promise$utils$$isArray(input);                                                                    // 1689
    };                                                                                                                 // 1690
                                                                                                                       // 1691
    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {                                   // 1692
      return new Error('Array Methods must be provided an Array');                                                     // 1693
    };                                                                                                                 // 1694
                                                                                                                       // 1695
    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {                                              // 1696
      this._result = new Array(this.length);                                                                           // 1697
    };                                                                                                                 // 1698
                                                                                                                       // 1699
    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;                                  // 1700
                                                                                                                       // 1701
    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {                                         // 1702
      var enumerator = this;                                                                                           // 1703
                                                                                                                       // 1704
      var length  = enumerator.length;                                                                                 // 1705
      var promise = enumerator.promise;                                                                                // 1706
      var input   = enumerator._input;                                                                                 // 1707
                                                                                                                       // 1708
      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {                      // 1709
        enumerator._eachEntry(input[i], i);                                                                            // 1710
      }                                                                                                                // 1711
    };                                                                                                                 // 1712
                                                                                                                       // 1713
    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {                                 // 1714
      var enumerator = this;                                                                                           // 1715
      var c = enumerator._instanceConstructor;                                                                         // 1716
                                                                                                                       // 1717
      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {                                                             // 1718
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {                          // 1719
          entry._onerror = null;                                                                                       // 1720
          enumerator._settledAt(entry._state, i, entry._result);                                                       // 1721
        } else {                                                                                                       // 1722
          enumerator._willSettleAt(c.resolve(entry), i);                                                               // 1723
        }                                                                                                              // 1724
      } else {                                                                                                         // 1725
        enumerator._remaining--;                                                                                       // 1726
        enumerator._result[i] = entry;                                                                                 // 1727
      }                                                                                                                // 1728
    };                                                                                                                 // 1729
                                                                                                                       // 1730
    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {                          // 1731
      var enumerator = this;                                                                                           // 1732
      var promise = enumerator.promise;                                                                                // 1733
                                                                                                                       // 1734
      if (promise._state === lib$es6$promise$$internal$$PENDING) {                                                     // 1735
        enumerator._remaining--;                                                                                       // 1736
                                                                                                                       // 1737
        if (state === lib$es6$promise$$internal$$REJECTED) {                                                           // 1738
          lib$es6$promise$$internal$$reject(promise, value);                                                           // 1739
        } else {                                                                                                       // 1740
          enumerator._result[i] = value;                                                                               // 1741
        }                                                                                                              // 1742
      }                                                                                                                // 1743
                                                                                                                       // 1744
      if (enumerator._remaining === 0) {                                                                               // 1745
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);                                               // 1746
      }                                                                                                                // 1747
    };                                                                                                                 // 1748
                                                                                                                       // 1749
    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {                            // 1750
      var enumerator = this;                                                                                           // 1751
                                                                                                                       // 1752
      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {                                       // 1753
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);                                         // 1754
      }, function(reason) {                                                                                            // 1755
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);                                         // 1756
      });                                                                                                              // 1757
    };                                                                                                                 // 1758
    function lib$es6$promise$promise$all$$all(entries) {                                                               // 1759
      return new lib$es6$promise$enumerator$$default(this, entries).promise;                                           // 1760
    }                                                                                                                  // 1761
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;                                       // 1762
    function lib$es6$promise$promise$race$$race(entries) {                                                             // 1763
      /*jshint validthis:true */                                                                                       // 1764
      var Constructor = this;                                                                                          // 1765
                                                                                                                       // 1766
      var promise = new Constructor(lib$es6$promise$$internal$$noop);                                                  // 1767
                                                                                                                       // 1768
      if (!lib$es6$promise$utils$$isArray(entries)) {                                                                  // 1769
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));                  // 1770
        return promise;                                                                                                // 1771
      }                                                                                                                // 1772
                                                                                                                       // 1773
      var length = entries.length;                                                                                     // 1774
                                                                                                                       // 1775
      function onFulfillment(value) {                                                                                  // 1776
        lib$es6$promise$$internal$$resolve(promise, value);                                                            // 1777
      }                                                                                                                // 1778
                                                                                                                       // 1779
      function onRejection(reason) {                                                                                   // 1780
        lib$es6$promise$$internal$$reject(promise, reason);                                                            // 1781
      }                                                                                                                // 1782
                                                                                                                       // 1783
      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {                      // 1784
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);  // 1785
      }                                                                                                                // 1786
                                                                                                                       // 1787
      return promise;                                                                                                  // 1788
    }                                                                                                                  // 1789
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;                                    // 1790
    function lib$es6$promise$promise$resolve$$resolve(object) {                                                        // 1791
      /*jshint validthis:true */                                                                                       // 1792
      var Constructor = this;                                                                                          // 1793
                                                                                                                       // 1794
      if (object && typeof object === 'object' && object.constructor === Constructor) {                                // 1795
        return object;                                                                                                 // 1796
      }                                                                                                                // 1797
                                                                                                                       // 1798
      var promise = new Constructor(lib$es6$promise$$internal$$noop);                                                  // 1799
      lib$es6$promise$$internal$$resolve(promise, object);                                                             // 1800
      return promise;                                                                                                  // 1801
    }                                                                                                                  // 1802
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;                           // 1803
    function lib$es6$promise$promise$reject$$reject(reason) {                                                          // 1804
      /*jshint validthis:true */                                                                                       // 1805
      var Constructor = this;                                                                                          // 1806
      var promise = new Constructor(lib$es6$promise$$internal$$noop);                                                  // 1807
      lib$es6$promise$$internal$$reject(promise, reason);                                                              // 1808
      return promise;                                                                                                  // 1809
    }                                                                                                                  // 1810
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;                              // 1811
                                                                                                                       // 1812
    var lib$es6$promise$promise$$counter = 0;                                                                          // 1813
                                                                                                                       // 1814
    function lib$es6$promise$promise$$needsResolver() {                                                                // 1815
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');       // 1816
    }                                                                                                                  // 1817
                                                                                                                       // 1818
    function lib$es6$promise$promise$$needsNew() {                                                                     // 1819
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }                                                                                                                  // 1821
                                                                                                                       // 1822
    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;                                           // 1823
    /**                                                                                                                // 1824
      Promise objects represent the eventual result of an asynchronous operation. The                                  // 1825
      primary way of interacting with a promise is through its `then` method, which                                    // 1826
      registers callbacks to receive either a promise's eventual value or the reason                                   // 1827
      why the promise cannot be fulfilled.                                                                             // 1828
                                                                                                                       // 1829
      Terminology                                                                                                      // 1830
      -----------                                                                                                      // 1831
                                                                                                                       // 1832
      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.         // 1833
      - `thenable` is an object or function that defines a `then` method.                                              // 1834
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).                         // 1835
      - `exception` is a value that is thrown using the throw statement.                                               // 1836
      - `reason` is a value that indicates why a promise was rejected.                                                 // 1837
      - `settled` the final resting state of a promise, fulfilled or rejected.                                         // 1838
                                                                                                                       // 1839
      A promise can be in one of three states: pending, fulfilled, or rejected.                                        // 1840
                                                                                                                       // 1841
      Promises that are fulfilled have a fulfillment value and are in the fulfilled                                    // 1842
      state.  Promises that are rejected have a rejection reason and are in the                                        // 1843
      rejected state.  A fulfillment value is never a thenable.                                                        // 1844
                                                                                                                       // 1845
      Promises can also be said to *resolve* a value.  If this value is also a                                         // 1846
      promise, then the original promise's settled state will match the value's                                        // 1847
      settled state.  So a promise that *resolves* a promise that rejects will                                         // 1848
      itself reject, and a promise that *resolves* a promise that fulfills will                                        // 1849
      itself fulfill.                                                                                                  // 1850
                                                                                                                       // 1851
                                                                                                                       // 1852
      Basic Usage:                                                                                                     // 1853
      ------------                                                                                                     // 1854
                                                                                                                       // 1855
      ```js                                                                                                            // 1856
      var promise = new Promise(function(resolve, reject) {                                                            // 1857
        // on success                                                                                                  // 1858
        resolve(value);                                                                                                // 1859
                                                                                                                       // 1860
        // on failure                                                                                                  // 1861
        reject(reason);                                                                                                // 1862
      });                                                                                                              // 1863
                                                                                                                       // 1864
      promise.then(function(value) {                                                                                   // 1865
        // on fulfillment                                                                                              // 1866
      }, function(reason) {                                                                                            // 1867
        // on rejection                                                                                                // 1868
      });                                                                                                              // 1869
      ```                                                                                                              // 1870
                                                                                                                       // 1871
      Advanced Usage:                                                                                                  // 1872
      ---------------                                                                                                  // 1873
                                                                                                                       // 1874
      Promises shine when abstracting away asynchronous interactions such as                                           // 1875
      `XMLHttpRequest`s.                                                                                               // 1876
                                                                                                                       // 1877
      ```js                                                                                                            // 1878
      function getJSON(url) {                                                                                          // 1879
        return new Promise(function(resolve, reject){                                                                  // 1880
          var xhr = new XMLHttpRequest();                                                                              // 1881
                                                                                                                       // 1882
          xhr.open('GET', url);                                                                                        // 1883
          xhr.onreadystatechange = handler;                                                                            // 1884
          xhr.responseType = 'json';                                                                                   // 1885
          xhr.setRequestHeader('Accept', 'application/json');                                                          // 1886
          xhr.send();                                                                                                  // 1887
                                                                                                                       // 1888
          function handler() {                                                                                         // 1889
            if (this.readyState === this.DONE) {                                                                       // 1890
              if (this.status === 200) {                                                                               // 1891
                resolve(this.response);                                                                                // 1892
              } else {                                                                                                 // 1893
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));                 // 1894
              }                                                                                                        // 1895
            }                                                                                                          // 1896
          };                                                                                                           // 1897
        });                                                                                                            // 1898
      }                                                                                                                // 1899
                                                                                                                       // 1900
      getJSON('/posts.json').then(function(json) {                                                                     // 1901
        // on fulfillment                                                                                              // 1902
      }, function(reason) {                                                                                            // 1903
        // on rejection                                                                                                // 1904
      });                                                                                                              // 1905
      ```                                                                                                              // 1906
                                                                                                                       // 1907
      Unlike callbacks, promises are great composable primitives.                                                      // 1908
                                                                                                                       // 1909
      ```js                                                                                                            // 1910
      Promise.all([                                                                                                    // 1911
        getJSON('/posts'),                                                                                             // 1912
        getJSON('/comments')                                                                                           // 1913
      ]).then(function(values){                                                                                        // 1914
        values[0] // => postsJSON                                                                                      // 1915
        values[1] // => commentsJSON                                                                                   // 1916
                                                                                                                       // 1917
        return values;                                                                                                 // 1918
      });                                                                                                              // 1919
      ```                                                                                                              // 1920
                                                                                                                       // 1921
      @class Promise                                                                                                   // 1922
      @param {function} resolver                                                                                       // 1923
      Useful for tooling.                                                                                              // 1924
      @constructor                                                                                                     // 1925
    */                                                                                                                 // 1926
    function lib$es6$promise$promise$$Promise(resolver) {                                                              // 1927
      this._id = lib$es6$promise$promise$$counter++;                                                                   // 1928
      this._state = undefined;                                                                                         // 1929
      this._result = undefined;                                                                                        // 1930
      this._subscribers = [];                                                                                          // 1931
                                                                                                                       // 1932
      if (lib$es6$promise$$internal$$noop !== resolver) {                                                              // 1933
        if (!lib$es6$promise$utils$$isFunction(resolver)) {                                                            // 1934
          lib$es6$promise$promise$$needsResolver();                                                                    // 1935
        }                                                                                                              // 1936
                                                                                                                       // 1937
        if (!(this instanceof lib$es6$promise$promise$$Promise)) {                                                     // 1938
          lib$es6$promise$promise$$needsNew();                                                                         // 1939
        }                                                                                                              // 1940
                                                                                                                       // 1941
        lib$es6$promise$$internal$$initializePromise(this, resolver);                                                  // 1942
      }                                                                                                                // 1943
    }                                                                                                                  // 1944
                                                                                                                       // 1945
    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;                                       // 1946
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;                                     // 1947
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;                               // 1948
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;                                 // 1949
    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;                               // 1950
    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;                                         // 1951
    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;                                               // 1952
                                                                                                                       // 1953
    lib$es6$promise$promise$$Promise.prototype = {                                                                     // 1954
      constructor: lib$es6$promise$promise$$Promise,                                                                   // 1955
                                                                                                                       // 1956
    /**                                                                                                                // 1957
      The primary way of interacting with a promise is through its `then` method,                                      // 1958
      which registers callbacks to receive either a promise's eventual value or the                                    // 1959
      reason why the promise cannot be fulfilled.                                                                      // 1960
                                                                                                                       // 1961
      ```js                                                                                                            // 1962
      findUser().then(function(user){                                                                                  // 1963
        // user is available                                                                                           // 1964
      }, function(reason){                                                                                             // 1965
        // user is unavailable, and you are given the reason why                                                       // 1966
      });                                                                                                              // 1967
      ```                                                                                                              // 1968
                                                                                                                       // 1969
      Chaining                                                                                                         // 1970
      --------                                                                                                         // 1971
                                                                                                                       // 1972
      The return value of `then` is itself a promise.  This second, 'downstream'                                       // 1973
      promise is resolved with the return value of the first promise's fulfillment                                     // 1974
      or rejection handler, or rejected if the handler throws an exception.                                            // 1975
                                                                                                                       // 1976
      ```js                                                                                                            // 1977
      findUser().then(function (user) {                                                                                // 1978
        return user.name;                                                                                              // 1979
      }, function (reason) {                                                                                           // 1980
        return 'default name';                                                                                         // 1981
      }).then(function (userName) {                                                                                    // 1982
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it                                   // 1983
        // will be `'default name'`                                                                                    // 1984
      });                                                                                                              // 1985
                                                                                                                       // 1986
      findUser().then(function (user) {                                                                                // 1987
        throw new Error('Found user, but still unhappy');                                                              // 1988
      }, function (reason) {                                                                                           // 1989
        throw new Error('`findUser` rejected and we're unhappy');                                                      // 1990
      }).then(function (value) {                                                                                       // 1991
        // never reached                                                                                               // 1992
      }, function (reason) {                                                                                           // 1993
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.                                  // 1994
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.                           // 1995
      });                                                                                                              // 1996
      ```                                                                                                              // 1997
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
                                                                                                                       // 1999
      ```js                                                                                                            // 2000
      findUser().then(function (user) {                                                                                // 2001
        throw new PedagogicalException('Upstream error');                                                              // 2002
      }).then(function (value) {                                                                                       // 2003
        // never reached                                                                                               // 2004
      }).then(function (value) {                                                                                       // 2005
        // never reached                                                                                               // 2006
      }, function (reason) {                                                                                           // 2007
        // The `PedgagocialException` is propagated all the way down to here                                           // 2008
      });                                                                                                              // 2009
      ```                                                                                                              // 2010
                                                                                                                       // 2011
      Assimilation                                                                                                     // 2012
      ------------                                                                                                     // 2013
                                                                                                                       // 2014
      Sometimes the value you want to propagate to a downstream promise can only be                                    // 2015
      retrieved asynchronously. This can be achieved by returning a promise in the                                     // 2016
      fulfillment or rejection handler. The downstream promise will then be pending                                    // 2017
      until the returned promise is settled. This is called *assimilation*.                                            // 2018
                                                                                                                       // 2019
      ```js                                                                                                            // 2020
      findUser().then(function (user) {                                                                                // 2021
        return findCommentsByAuthor(user);                                                                             // 2022
      }).then(function (comments) {                                                                                    // 2023
        // The user's comments are now available                                                                       // 2024
      });                                                                                                              // 2025
      ```                                                                                                              // 2026
                                                                                                                       // 2027
      If the assimliated promise rejects, then the downstream promise will also reject.                                // 2028
                                                                                                                       // 2029
      ```js                                                                                                            // 2030
      findUser().then(function (user) {                                                                                // 2031
        return findCommentsByAuthor(user);                                                                             // 2032
      }).then(function (comments) {                                                                                    // 2033
        // If `findCommentsByAuthor` fulfills, we'll have the value here                                               // 2034
      }, function (reason) {                                                                                           // 2035
        // If `findCommentsByAuthor` rejects, we'll have the reason here                                               // 2036
      });                                                                                                              // 2037
      ```                                                                                                              // 2038
                                                                                                                       // 2039
      Simple Example                                                                                                   // 2040
      --------------                                                                                                   // 2041
                                                                                                                       // 2042
      Synchronous Example                                                                                              // 2043
                                                                                                                       // 2044
      ```javascript                                                                                                    // 2045
      var result;                                                                                                      // 2046
                                                                                                                       // 2047
      try {                                                                                                            // 2048
        result = findResult();                                                                                         // 2049
        // success                                                                                                     // 2050
      } catch(reason) {                                                                                                // 2051
        // failure                                                                                                     // 2052
      }                                                                                                                // 2053
      ```                                                                                                              // 2054
                                                                                                                       // 2055
      Errback Example                                                                                                  // 2056
                                                                                                                       // 2057
      ```js                                                                                                            // 2058
      findResult(function(result, err){                                                                                // 2059
        if (err) {                                                                                                     // 2060
          // failure                                                                                                   // 2061
        } else {                                                                                                       // 2062
          // success                                                                                                   // 2063
        }                                                                                                              // 2064
      });                                                                                                              // 2065
      ```                                                                                                              // 2066
                                                                                                                       // 2067
      Promise Example;                                                                                                 // 2068
                                                                                                                       // 2069
      ```javascript                                                                                                    // 2070
      findResult().then(function(result){                                                                              // 2071
        // success                                                                                                     // 2072
      }, function(reason){                                                                                             // 2073
        // failure                                                                                                     // 2074
      });                                                                                                              // 2075
      ```                                                                                                              // 2076
                                                                                                                       // 2077
      Advanced Example                                                                                                 // 2078
      --------------                                                                                                   // 2079
                                                                                                                       // 2080
      Synchronous Example                                                                                              // 2081
                                                                                                                       // 2082
      ```javascript                                                                                                    // 2083
      var author, books;                                                                                               // 2084
                                                                                                                       // 2085
      try {                                                                                                            // 2086
        author = findAuthor();                                                                                         // 2087
        books  = findBooksByAuthor(author);                                                                            // 2088
        // success                                                                                                     // 2089
      } catch(reason) {                                                                                                // 2090
        // failure                                                                                                     // 2091
      }                                                                                                                // 2092
      ```                                                                                                              // 2093
                                                                                                                       // 2094
      Errback Example                                                                                                  // 2095
                                                                                                                       // 2096
      ```js                                                                                                            // 2097
                                                                                                                       // 2098
      function foundBooks(books) {                                                                                     // 2099
                                                                                                                       // 2100
      }                                                                                                                // 2101
                                                                                                                       // 2102
      function failure(reason) {                                                                                       // 2103
                                                                                                                       // 2104
      }                                                                                                                // 2105
                                                                                                                       // 2106
      findAuthor(function(author, err){                                                                                // 2107
        if (err) {                                                                                                     // 2108
          failure(err);                                                                                                // 2109
          // failure                                                                                                   // 2110
        } else {                                                                                                       // 2111
          try {                                                                                                        // 2112
            findBoooksByAuthor(author, function(books, err) {                                                          // 2113
              if (err) {                                                                                               // 2114
                failure(err);                                                                                          // 2115
              } else {                                                                                                 // 2116
                try {                                                                                                  // 2117
                  foundBooks(books);                                                                                   // 2118
                } catch(reason) {                                                                                      // 2119
                  failure(reason);                                                                                     // 2120
                }                                                                                                      // 2121
              }                                                                                                        // 2122
            });                                                                                                        // 2123
          } catch(error) {                                                                                             // 2124
            failure(err);                                                                                              // 2125
          }                                                                                                            // 2126
          // success                                                                                                   // 2127
        }                                                                                                              // 2128
      });                                                                                                              // 2129
      ```                                                                                                              // 2130
                                                                                                                       // 2131
      Promise Example;                                                                                                 // 2132
                                                                                                                       // 2133
      ```javascript                                                                                                    // 2134
      findAuthor().                                                                                                    // 2135
        then(findBooksByAuthor).                                                                                       // 2136
        then(function(books){                                                                                          // 2137
          // found books                                                                                               // 2138
      }).catch(function(reason){                                                                                       // 2139
        // something went wrong                                                                                        // 2140
      });                                                                                                              // 2141
      ```                                                                                                              // 2142
                                                                                                                       // 2143
      @method then                                                                                                     // 2144
      @param {Function} onFulfilled                                                                                    // 2145
      @param {Function} onRejected                                                                                     // 2146
      Useful for tooling.                                                                                              // 2147
      @return {Promise}                                                                                                // 2148
    */                                                                                                                 // 2149
      then: function(onFulfillment, onRejection) {                                                                     // 2150
        var parent = this;                                                                                             // 2151
        var state = parent._state;                                                                                     // 2152
                                                                                                                       // 2153
        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;                                                                                                 // 2155
        }                                                                                                              // 2156
                                                                                                                       // 2157
        var child = new this.constructor(lib$es6$promise$$internal$$noop);                                             // 2158
        var result = parent._result;                                                                                   // 2159
                                                                                                                       // 2160
        if (state) {                                                                                                   // 2161
          var callback = arguments[state - 1];                                                                         // 2162
          lib$es6$promise$asap$$asap(function(){                                                                       // 2163
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);                                 // 2164
          });                                                                                                          // 2165
        } else {                                                                                                       // 2166
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);                             // 2167
        }                                                                                                              // 2168
                                                                                                                       // 2169
        return child;                                                                                                  // 2170
      },                                                                                                               // 2171
                                                                                                                       // 2172
    /**                                                                                                                // 2173
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same                               // 2174
      as the catch block of a try/catch statement.                                                                     // 2175
                                                                                                                       // 2176
      ```js                                                                                                            // 2177
      function findAuthor(){                                                                                           // 2178
        throw new Error('couldn't find that author');                                                                  // 2179
      }                                                                                                                // 2180
                                                                                                                       // 2181
      // synchronous                                                                                                   // 2182
      try {                                                                                                            // 2183
        findAuthor();                                                                                                  // 2184
      } catch(reason) {                                                                                                // 2185
        // something went wrong                                                                                        // 2186
      }                                                                                                                // 2187
                                                                                                                       // 2188
      // async with promises                                                                                           // 2189
      findAuthor().catch(function(reason){                                                                             // 2190
        // something went wrong                                                                                        // 2191
      });                                                                                                              // 2192
      ```                                                                                                              // 2193
                                                                                                                       // 2194
      @method catch                                                                                                    // 2195
      @param {Function} onRejection                                                                                    // 2196
      Useful for tooling.                                                                                              // 2197
      @return {Promise}                                                                                                // 2198
    */                                                                                                                 // 2199
      'catch': function(onRejection) {                                                                                 // 2200
        return this.then(null, onRejection);                                                                           // 2201
      }                                                                                                                // 2202
    };                                                                                                                 // 2203
    function lib$es6$promise$polyfill$$polyfill() {                                                                    // 2204
      var local;                                                                                                       // 2205
                                                                                                                       // 2206
      if (typeof global !== 'undefined') {                                                                             // 2207
          local = global;                                                                                              // 2208
      } else if (typeof self !== 'undefined') {                                                                        // 2209
          local = self;                                                                                                // 2210
      } else {                                                                                                         // 2211
          try {                                                                                                        // 2212
              local = Function('return this')();                                                                       // 2213
          } catch (e) {                                                                                                // 2214
              throw new Error('polyfill failed because global object is unavailable in this environment');             // 2215
          }                                                                                                            // 2216
      }                                                                                                                // 2217
                                                                                                                       // 2218
      var P = local.Promise;                                                                                           // 2219
                                                                                                                       // 2220
      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {                        // 2221
        return;                                                                                                        // 2222
      }                                                                                                                // 2223
                                                                                                                       // 2224
      local.Promise = lib$es6$promise$promise$$default;                                                                // 2225
    }                                                                                                                  // 2226
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;                                        // 2227
                                                                                                                       // 2228
    var lib$es6$promise$umd$$ES6Promise = {                                                                            // 2229
      'Promise': lib$es6$promise$promise$$default,                                                                     // 2230
      'polyfill': lib$es6$promise$polyfill$$default                                                                    // 2231
    };                                                                                                                 // 2232
                                                                                                                       // 2233
    /* global define:true module:true window: true */                                                                  // 2234
    if (typeof define === 'function' && define['amd']) {                                                               // 2235
      define(function() { return lib$es6$promise$umd$$ES6Promise; });                                                  // 2236
    } else if (typeof module !== 'undefined' && module['exports']) {                                                   // 2237
      module['exports'] = lib$es6$promise$umd$$ES6Promise;                                                             // 2238
    } else if (typeof this !== 'undefined') {                                                                          // 2239
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;                                                            // 2240
    }                                                                                                                  // 2241
                                                                                                                       // 2242
    lib$es6$promise$polyfill$$default();                                                                               // 2243
}).call(this);                                                                                                         // 2244
                                                                                                                       // 2245
                                                                                                                       // 2246
}).call(this,require(2),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],10:[function(require,module,exports){                                                                       // 2248
if (typeof Object.create === 'function') {                                                                             // 2249
  // implementation from standard node.js 'util' module                                                                // 2250
  module.exports = function inherits(ctor, superCtor) {                                                                // 2251
    ctor.super_ = superCtor                                                                                            // 2252
    ctor.prototype = Object.create(superCtor.prototype, {                                                              // 2253
      constructor: {                                                                                                   // 2254
        value: ctor,                                                                                                   // 2255
        enumerable: false,                                                                                             // 2256
        writable: true,                                                                                                // 2257
        configurable: true                                                                                             // 2258
      }                                                                                                                // 2259
    });                                                                                                                // 2260
  };                                                                                                                   // 2261
} else {                                                                                                               // 2262
  // old school shim for old browsers                                                                                  // 2263
  module.exports = function inherits(ctor, superCtor) {                                                                // 2264
    ctor.super_ = superCtor                                                                                            // 2265
    var TempCtor = function () {}                                                                                      // 2266
    TempCtor.prototype = superCtor.prototype                                                                           // 2267
    ctor.prototype = new TempCtor()                                                                                    // 2268
    ctor.prototype.constructor = ctor                                                                                  // 2269
  }                                                                                                                    // 2270
}                                                                                                                      // 2271
                                                                                                                       // 2272
},{}],11:[function(require,module,exports){                                                                            // 2273
var arrayEach = require(14),                                                                                           // 2274
    baseEach = require(18),                                                                                            // 2275
    createForEach = require(30);                                                                                       // 2276
                                                                                                                       // 2277
/**                                                                                                                    // 2278
 * Iterates over elements of `collection` invoking `iteratee` for each element.                                        // 2279
 * The `iteratee` is bound to `thisArg` and invoked with three arguments:                                              // 2280
 * (value, index|key, collection). Iteratee functions may exit iteration early                                         // 2281
 * by explicitly returning `false`.                                                                                    // 2282
 *                                                                                                                     // 2283
 * **Note:** As with other "Collections" methods, objects with a "length" property                                     // 2284
 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`                                            // 2285
 * may be used for object iteration.                                                                                   // 2286
 *                                                                                                                     // 2287
 * @static                                                                                                             // 2288
 * @memberOf _                                                                                                         // 2289
 * @alias each                                                                                                         // 2290
 * @category Collection                                                                                                // 2291
 * @param {Array|Object|string} collection The collection to iterate over.                                             // 2292
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.                                         // 2293
 * @param {*} [thisArg] The `this` binding of `iteratee`.                                                              // 2294
 * @returns {Array|Object|string} Returns `collection`.                                                                // 2295
 * @example                                                                                                            // 2296
 *                                                                                                                     // 2297
 * _([1, 2]).forEach(function(n) {                                                                                     // 2298
 *   console.log(n);                                                                                                   // 2299
 * }).value();                                                                                                         // 2300
 * // => logs each value from left to right and returns the array                                                      // 2301
 *                                                                                                                     // 2302
 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {                                                                    // 2303
 *   console.log(n, key);                                                                                              // 2304
 * });                                                                                                                 // 2305
 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)                           // 2306
 */                                                                                                                    // 2307
var forEach = createForEach(arrayEach, baseEach);                                                                      // 2308
                                                                                                                       // 2309
module.exports = forEach;                                                                                              // 2310
                                                                                                                       // 2311
},{"14":14,"18":18,"30":30}],12:[function(require,module,exports){                                                     // 2312
/** Used as the `TypeError` message for "Functions" methods. */                                                        // 2313
var FUNC_ERROR_TEXT = 'Expected a function';                                                                           // 2314
                                                                                                                       // 2315
/* Native method references for those with the same name as other `lodash` methods. */                                 // 2316
var nativeMax = Math.max;                                                                                              // 2317
                                                                                                                       // 2318
/**                                                                                                                    // 2319
 * Creates a function that invokes `func` with the `this` binding of the                                               // 2320
 * created function and arguments from `start` and beyond provided as an array.                                        // 2321
 *                                                                                                                     // 2322
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
 *                                                                                                                     // 2324
 * @static                                                                                                             // 2325
 * @memberOf _                                                                                                         // 2326
 * @category Function                                                                                                  // 2327
 * @param {Function} func The function to apply a rest parameter to.                                                   // 2328
 * @param {number} [start=func.length-1] The start position of the rest parameter.                                     // 2329
 * @returns {Function} Returns the new function.                                                                       // 2330
 * @example                                                                                                            // 2331
 *                                                                                                                     // 2332
 * var say = _.restParam(function(what, names) {                                                                       // 2333
 *   return what + ' ' + _.initial(names).join(', ') +                                                                 // 2334
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);                                                              // 2335
 * });                                                                                                                 // 2336
 *                                                                                                                     // 2337
 * say('hello', 'fred', 'barney', 'pebbles');                                                                          // 2338
 * // => 'hello fred, barney, & pebbles'                                                                               // 2339
 */                                                                                                                    // 2340
function restParam(func, start) {                                                                                      // 2341
  if (typeof func != 'function') {                                                                                     // 2342
    throw new TypeError(FUNC_ERROR_TEXT);                                                                              // 2343
  }                                                                                                                    // 2344
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);                                       // 2345
  return function() {                                                                                                  // 2346
    var args = arguments,                                                                                              // 2347
        index = -1,                                                                                                    // 2348
        length = nativeMax(args.length - start, 0),                                                                    // 2349
        rest = Array(length);                                                                                          // 2350
                                                                                                                       // 2351
    while (++index < length) {                                                                                         // 2352
      rest[index] = args[start + index];                                                                               // 2353
    }                                                                                                                  // 2354
    switch (start) {                                                                                                   // 2355
      case 0: return func.call(this, rest);                                                                            // 2356
      case 1: return func.call(this, args[0], rest);                                                                   // 2357
      case 2: return func.call(this, args[0], args[1], rest);                                                          // 2358
    }                                                                                                                  // 2359
    var otherArgs = Array(start + 1);                                                                                  // 2360
    index = -1;                                                                                                        // 2361
    while (++index < start) {                                                                                          // 2362
      otherArgs[index] = args[index];                                                                                  // 2363
    }                                                                                                                  // 2364
    otherArgs[start] = rest;                                                                                           // 2365
    return func.apply(this, otherArgs);                                                                                // 2366
  };                                                                                                                   // 2367
}                                                                                                                      // 2368
                                                                                                                       // 2369
module.exports = restParam;                                                                                            // 2370
                                                                                                                       // 2371
},{}],13:[function(require,module,exports){                                                                            // 2372
/**                                                                                                                    // 2373
 * Copies the values of `source` to `array`.                                                                           // 2374
 *                                                                                                                     // 2375
 * @private                                                                                                            // 2376
 * @param {Array} source The array to copy values from.                                                                // 2377
 * @param {Array} [array=[]] The array to copy values to.                                                              // 2378
 * @returns {Array} Returns `array`.                                                                                   // 2379
 */                                                                                                                    // 2380
function arrayCopy(source, array) {                                                                                    // 2381
  var index = -1,                                                                                                      // 2382
      length = source.length;                                                                                          // 2383
                                                                                                                       // 2384
  array || (array = Array(length));                                                                                    // 2385
  while (++index < length) {                                                                                           // 2386
    array[index] = source[index];                                                                                      // 2387
  }                                                                                                                    // 2388
  return array;                                                                                                        // 2389
}                                                                                                                      // 2390
                                                                                                                       // 2391
module.exports = arrayCopy;                                                                                            // 2392
                                                                                                                       // 2393
},{}],14:[function(require,module,exports){                                                                            // 2394
/**                                                                                                                    // 2395
 * A specialized version of `_.forEach` for arrays without support for callback                                        // 2396
 * shorthands and `this` binding.                                                                                      // 2397
 *                                                                                                                     // 2398
 * @private                                                                                                            // 2399
 * @param {Array} array The array to iterate over.                                                                     // 2400
 * @param {Function} iteratee The function invoked per iteration.                                                      // 2401
 * @returns {Array} Returns `array`.                                                                                   // 2402
 */                                                                                                                    // 2403
function arrayEach(array, iteratee) {                                                                                  // 2404
  var index = -1,                                                                                                      // 2405
      length = array.length;                                                                                           // 2406
                                                                                                                       // 2407
  while (++index < length) {                                                                                           // 2408
    if (iteratee(array[index], index, array) === false) {                                                              // 2409
      break;                                                                                                           // 2410
    }                                                                                                                  // 2411
  }                                                                                                                    // 2412
  return array;                                                                                                        // 2413
}                                                                                                                      // 2414
                                                                                                                       // 2415
module.exports = arrayEach;                                                                                            // 2416
                                                                                                                       // 2417
},{}],15:[function(require,module,exports){                                                                            // 2418
var baseCopy = require(17),                                                                                            // 2419
    keys = require(53);                                                                                                // 2420
                                                                                                                       // 2421
/**                                                                                                                    // 2422
 * The base implementation of `_.assign` without support for argument juggling,                                        // 2423
 * multiple sources, and `customizer` functions.                                                                       // 2424
 *                                                                                                                     // 2425
 * @private                                                                                                            // 2426
 * @param {Object} object The destination object.                                                                      // 2427
 * @param {Object} source The source object.                                                                           // 2428
 * @returns {Object} Returns `object`.                                                                                 // 2429
 */                                                                                                                    // 2430
function baseAssign(object, source) {                                                                                  // 2431
  return source == null                                                                                                // 2432
    ? object                                                                                                           // 2433
    : baseCopy(source, keys(source), object);                                                                          // 2434
}                                                                                                                      // 2435
                                                                                                                       // 2436
module.exports = baseAssign;                                                                                           // 2437
                                                                                                                       // 2438
},{"17":17,"53":53}],16:[function(require,module,exports){                                                             // 2439
var arrayCopy = require(13),                                                                                           // 2440
    arrayEach = require(14),                                                                                           // 2441
    baseAssign = require(15),                                                                                          // 2442
    baseForOwn = require(21),                                                                                          // 2443
    initCloneArray = require(33),                                                                                      // 2444
    initCloneByTag = require(34),                                                                                      // 2445
    initCloneObject = require(35),                                                                                     // 2446
    isArray = require(46),                                                                                             // 2447
    isObject = require(49);                                                                                            // 2448
                                                                                                                       // 2449
/** `Object#toString` result references. */                                                                            // 2450
var argsTag = '[object Arguments]',                                                                                    // 2451
    arrayTag = '[object Array]',                                                                                       // 2452
    boolTag = '[object Boolean]',                                                                                      // 2453
    dateTag = '[object Date]',                                                                                         // 2454
    errorTag = '[object Error]',                                                                                       // 2455
    funcTag = '[object Function]',                                                                                     // 2456
    mapTag = '[object Map]',                                                                                           // 2457
    numberTag = '[object Number]',                                                                                     // 2458
    objectTag = '[object Object]',                                                                                     // 2459
    regexpTag = '[object RegExp]',                                                                                     // 2460
    setTag = '[object Set]',                                                                                           // 2461
    stringTag = '[object String]',                                                                                     // 2462
    weakMapTag = '[object WeakMap]';                                                                                   // 2463
                                                                                                                       // 2464
var arrayBufferTag = '[object ArrayBuffer]',                                                                           // 2465
    float32Tag = '[object Float32Array]',                                                                              // 2466
    float64Tag = '[object Float64Array]',                                                                              // 2467
    int8Tag = '[object Int8Array]',                                                                                    // 2468
    int16Tag = '[object Int16Array]',                                                                                  // 2469
    int32Tag = '[object Int32Array]',                                                                                  // 2470
    uint8Tag = '[object Uint8Array]',                                                                                  // 2471
    uint8ClampedTag = '[object Uint8ClampedArray]',                                                                    // 2472
    uint16Tag = '[object Uint16Array]',                                                                                // 2473
    uint32Tag = '[object Uint32Array]';                                                                                // 2474
                                                                                                                       // 2475
/** Used to identify `toStringTag` values supported by `_.clone`. */                                                   // 2476
var cloneableTags = {};                                                                                                // 2477
cloneableTags[argsTag] = cloneableTags[arrayTag] =                                                                     // 2478
cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =                                                               // 2479
cloneableTags[dateTag] = cloneableTags[float32Tag] =                                                                   // 2480
cloneableTags[float64Tag] = cloneableTags[int8Tag] =                                                                   // 2481
cloneableTags[int16Tag] = cloneableTags[int32Tag] =                                                                    // 2482
cloneableTags[numberTag] = cloneableTags[objectTag] =                                                                  // 2483
cloneableTags[regexpTag] = cloneableTags[stringTag] =                                                                  // 2484
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =                                                             // 2485
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;                                                            // 2486
cloneableTags[errorTag] = cloneableTags[funcTag] =                                                                     // 2487
cloneableTags[mapTag] = cloneableTags[setTag] =                                                                        // 2488
cloneableTags[weakMapTag] = false;                                                                                     // 2489
                                                                                                                       // 2490
/** Used for native method references. */                                                                              // 2491
var objectProto = Object.prototype;                                                                                    // 2492
                                                                                                                       // 2493
/**                                                                                                                    // 2494
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)      // 2495
 * of values.                                                                                                          // 2496
 */                                                                                                                    // 2497
var objToString = objectProto.toString;                                                                                // 2498
                                                                                                                       // 2499
/**                                                                                                                    // 2500
 * The base implementation of `_.clone` without support for argument juggling                                          // 2501
 * and `this` binding `customizer` functions.                                                                          // 2502
 *                                                                                                                     // 2503
 * @private                                                                                                            // 2504
 * @param {*} value The value to clone.                                                                                // 2505
 * @param {boolean} [isDeep] Specify a deep clone.                                                                     // 2506
 * @param {Function} [customizer] The function to customize cloning values.                                            // 2507
 * @param {string} [key] The key of `value`.                                                                           // 2508
 * @param {Object} [object] The object `value` belongs to.                                                             // 2509
 * @param {Array} [stackA=[]] Tracks traversed source objects.                                                         // 2510
 * @param {Array} [stackB=[]] Associates clones with source counterparts.                                              // 2511
 * @returns {*} Returns the cloned value.                                                                              // 2512
 */                                                                                                                    // 2513
function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {                                           // 2514
  var result;                                                                                                          // 2515
  if (customizer) {                                                                                                    // 2516
    result = object ? customizer(value, key, object) : customizer(value);                                              // 2517
  }                                                                                                                    // 2518
  if (result !== undefined) {                                                                                          // 2519
    return result;                                                                                                     // 2520
  }                                                                                                                    // 2521
  if (!isObject(value)) {                                                                                              // 2522
    return value;                                                                                                      // 2523
  }                                                                                                                    // 2524
  var isArr = isArray(value);                                                                                          // 2525
  if (isArr) {                                                                                                         // 2526
    result = initCloneArray(value);                                                                                    // 2527
    if (!isDeep) {                                                                                                     // 2528
      return arrayCopy(value, result);                                                                                 // 2529
    }                                                                                                                  // 2530
  } else {                                                                                                             // 2531
    var tag = objToString.call(value),                                                                                 // 2532
        isFunc = tag == funcTag;                                                                                       // 2533
                                                                                                                       // 2534
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {                                                   // 2535
      result = initCloneObject(isFunc ? {} : value);                                                                   // 2536
      if (!isDeep) {                                                                                                   // 2537
        return baseAssign(result, value);                                                                              // 2538
      }                                                                                                                // 2539
    } else {                                                                                                           // 2540
      return cloneableTags[tag]                                                                                        // 2541
        ? initCloneByTag(value, tag, isDeep)                                                                           // 2542
        : (object ? value : {});                                                                                       // 2543
    }                                                                                                                  // 2544
  }                                                                                                                    // 2545
  // Check for circular references and return its corresponding clone.                                                 // 2546
  stackA || (stackA = []);                                                                                             // 2547
  stackB || (stackB = []);                                                                                             // 2548
                                                                                                                       // 2549
  var length = stackA.length;                                                                                          // 2550
  while (length--) {                                                                                                   // 2551
    if (stackA[length] == value) {                                                                                     // 2552
      return stackB[length];                                                                                           // 2553
    }                                                                                                                  // 2554
  }                                                                                                                    // 2555
  // Add the source value to the stack of traversed objects and associate it with its clone.                           // 2556
  stackA.push(value);                                                                                                  // 2557
  stackB.push(result);                                                                                                 // 2558
                                                                                                                       // 2559
  // Recursively populate clone (susceptible to call stack limits).                                                    // 2560
  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {                                                    // 2561
    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);                                 // 2562
  });                                                                                                                  // 2563
  return result;                                                                                                       // 2564
}                                                                                                                      // 2565
                                                                                                                       // 2566
module.exports = baseClone;                                                                                            // 2567
                                                                                                                       // 2568
},{"13":13,"14":14,"15":15,"21":21,"33":33,"34":34,"35":35,"46":46,"49":49}],17:[function(require,module,exports){     // 2569
/**                                                                                                                    // 2570
 * Copies properties of `source` to `object`.                                                                          // 2571
 *                                                                                                                     // 2572
 * @private                                                                                                            // 2573
 * @param {Object} source The object to copy properties from.                                                          // 2574
 * @param {Array} props The property names to copy.                                                                    // 2575
 * @param {Object} [object={}] The object to copy properties to.                                                       // 2576
 * @returns {Object} Returns `object`.                                                                                 // 2577
 */                                                                                                                    // 2578
function baseCopy(source, props, object) {                                                                             // 2579
  object || (object = {});                                                                                             // 2580
                                                                                                                       // 2581
  var index = -1,                                                                                                      // 2582
      length = props.length;                                                                                           // 2583
                                                                                                                       // 2584
  while (++index < length) {                                                                                           // 2585
    var key = props[index];                                                                                            // 2586
    object[key] = source[key];                                                                                         // 2587
  }                                                                                                                    // 2588
  return object;                                                                                                       // 2589
}                                                                                                                      // 2590
                                                                                                                       // 2591
module.exports = baseCopy;                                                                                             // 2592
                                                                                                                       // 2593
},{}],18:[function(require,module,exports){                                                                            // 2594
var baseForOwn = require(21),                                                                                          // 2595
    createBaseEach = require(28);                                                                                      // 2596
                                                                                                                       // 2597
/**                                                                                                                    // 2598
 * The base implementation of `_.forEach` without support for callback                                                 // 2599
 * shorthands and `this` binding.                                                                                      // 2600
 *                                                                                                                     // 2601
 * @private                                                                                                            // 2602
 * @param {Array|Object|string} collection The collection to iterate over.                                             // 2603
 * @param {Function} iteratee The function invoked per iteration.                                                      // 2604
 * @returns {Array|Object|string} Returns `collection`.                                                                // 2605
 */                                                                                                                    // 2606
var baseEach = createBaseEach(baseForOwn);                                                                             // 2607
                                                                                                                       // 2608
module.exports = baseEach;                                                                                             // 2609
                                                                                                                       // 2610
},{"21":21,"28":28}],19:[function(require,module,exports){                                                             // 2611
var createBaseFor = require(29);                                                                                       // 2612
                                                                                                                       // 2613
/**                                                                                                                    // 2614
 * The base implementation of `baseForIn` and `baseForOwn` which iterates                                              // 2615
 * over `object` properties returned by `keysFunc` invoking `iteratee` for                                             // 2616
 * each property. Iteratee functions may exit iteration early by explicitly                                            // 2617
 * returning `false`.                                                                                                  // 2618
 *                                                                                                                     // 2619
 * @private                                                                                                            // 2620
 * @param {Object} object The object to iterate over.                                                                  // 2621
 * @param {Function} iteratee The function invoked per iteration.                                                      // 2622
 * @param {Function} keysFunc The function to get the keys of `object`.                                                // 2623
 * @returns {Object} Returns `object`.                                                                                 // 2624
 */                                                                                                                    // 2625
var baseFor = createBaseFor();                                                                                         // 2626
                                                                                                                       // 2627
module.exports = baseFor;                                                                                              // 2628
                                                                                                                       // 2629
},{"29":29}],20:[function(require,module,exports){                                                                     // 2630
var baseFor = require(19),                                                                                             // 2631
    keysIn = require(54);                                                                                              // 2632
                                                                                                                       // 2633
/**                                                                                                                    // 2634
 * The base implementation of `_.forIn` without support for callback                                                   // 2635
 * shorthands and `this` binding.                                                                                      // 2636
 *                                                                                                                     // 2637
 * @private                                                                                                            // 2638
 * @param {Object} object The object to iterate over.                                                                  // 2639
 * @param {Function} iteratee The function invoked per iteration.                                                      // 2640
 * @returns {Object} Returns `object`.                                                                                 // 2641
 */                                                                                                                    // 2642
function baseForIn(object, iteratee) {                                                                                 // 2643
  return baseFor(object, iteratee, keysIn);                                                                            // 2644
}                                                                                                                      // 2645
                                                                                                                       // 2646
module.exports = baseForIn;                                                                                            // 2647
                                                                                                                       // 2648
},{"19":19,"54":54}],21:[function(require,module,exports){                                                             // 2649
var baseFor = require(19),                                                                                             // 2650
    keys = require(53);                                                                                                // 2651
                                                                                                                       // 2652
/**                                                                                                                    // 2653
 * The base implementation of `_.forOwn` without support for callback                                                  // 2654
 * shorthands and `this` binding.                                                                                      // 2655
 *                                                                                                                     // 2656
 * @private                                                                                                            // 2657
 * @param {Object} object The object to iterate over.                                                                  // 2658
 * @param {Function} iteratee The function invoked per iteration.                                                      // 2659
 * @returns {Object} Returns `object`.                                                                                 // 2660
 */                                                                                                                    // 2661
function baseForOwn(object, iteratee) {                                                                                // 2662
  return baseFor(object, iteratee, keys);                                                                              // 2663
}                                                                                                                      // 2664
                                                                                                                       // 2665
module.exports = baseForOwn;                                                                                           // 2666
                                                                                                                       // 2667
},{"19":19,"53":53}],22:[function(require,module,exports){                                                             // 2668
var arrayEach = require(14),                                                                                           // 2669
    baseMergeDeep = require(23),                                                                                       // 2670
    isArray = require(46),                                                                                             // 2671
    isArrayLike = require(36),                                                                                         // 2672
    isObject = require(49),                                                                                            // 2673
    isObjectLike = require(40),                                                                                        // 2674
    isTypedArray = require(51),                                                                                        // 2675
    keys = require(53);                                                                                                // 2676
                                                                                                                       // 2677
/**                                                                                                                    // 2678
 * The base implementation of `_.merge` without support for argument juggling,                                         // 2679
 * multiple sources, and `this` binding `customizer` functions.                                                        // 2680
 *                                                                                                                     // 2681
 * @private                                                                                                            // 2682
 * @param {Object} object The destination object.                                                                      // 2683
 * @param {Object} source The source object.                                                                           // 2684
 * @param {Function} [customizer] The function to customize merged values.                                             // 2685
 * @param {Array} [stackA=[]] Tracks traversed source objects.                                                         // 2686
 * @param {Array} [stackB=[]] Associates values with source counterparts.                                              // 2687
 * @returns {Object} Returns `object`.                                                                                 // 2688
 */                                                                                                                    // 2689
function baseMerge(object, source, customizer, stackA, stackB) {                                                       // 2690
  if (!isObject(object)) {                                                                                             // 2691
    return object;                                                                                                     // 2692
  }                                                                                                                    // 2693
  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),                                     // 2694
      props = isSrcArr ? undefined : keys(source);                                                                     // 2695
                                                                                                                       // 2696
  arrayEach(props || source, function(srcValue, key) {                                                                 // 2697
    if (props) {                                                                                                       // 2698
      key = srcValue;                                                                                                  // 2699
      srcValue = source[key];                                                                                          // 2700
    }                                                                                                                  // 2701
    if (isObjectLike(srcValue)) {                                                                                      // 2702
      stackA || (stackA = []);                                                                                         // 2703
      stackB || (stackB = []);                                                                                         // 2704
      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);                                       // 2705
    }                                                                                                                  // 2706
    else {                                                                                                             // 2707
      var value = object[key],                                                                                         // 2708
          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,                          // 2709
          isCommon = result === undefined;                                                                             // 2710
                                                                                                                       // 2711
      if (isCommon) {                                                                                                  // 2712
        result = srcValue;                                                                                             // 2713
      }                                                                                                                // 2714
      if ((result !== undefined || (isSrcArr && !(key in object))) &&                                                  // 2715
          (isCommon || (result === result ? (result !== value) : (value === value)))) {                                // 2716
        object[key] = result;                                                                                          // 2717
      }                                                                                                                // 2718
    }                                                                                                                  // 2719
  });                                                                                                                  // 2720
  return object;                                                                                                       // 2721
}                                                                                                                      // 2722
                                                                                                                       // 2723
module.exports = baseMerge;                                                                                            // 2724
                                                                                                                       // 2725
},{"14":14,"23":23,"36":36,"40":40,"46":46,"49":49,"51":51,"53":53}],23:[function(require,module,exports){             // 2726
var arrayCopy = require(13),                                                                                           // 2727
    isArguments = require(45),                                                                                         // 2728
    isArray = require(46),                                                                                             // 2729
    isArrayLike = require(36),                                                                                         // 2730
    isPlainObject = require(50),                                                                                       // 2731
    isTypedArray = require(51),                                                                                        // 2732
    toPlainObject = require(52);                                                                                       // 2733
                                                                                                                       // 2734
/**                                                                                                                    // 2735
 * A specialized version of `baseMerge` for arrays and objects which performs                                          // 2736
 * deep merges and tracks traversed objects enabling objects with circular                                             // 2737
 * references to be merged.                                                                                            // 2738
 *                                                                                                                     // 2739
 * @private                                                                                                            // 2740
 * @param {Object} object The destination object.                                                                      // 2741
 * @param {Object} source The source object.                                                                           // 2742
 * @param {string} key The key of the value to merge.                                                                  // 2743
 * @param {Function} mergeFunc The function to merge values.                                                           // 2744
 * @param {Function} [customizer] The function to customize merged values.                                             // 2745
 * @param {Array} [stackA=[]] Tracks traversed source objects.                                                         // 2746
 * @param {Array} [stackB=[]] Associates values with source counterparts.                                              // 2747
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.                                      // 2748
 */                                                                                                                    // 2749
function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {                                   // 2750
  var length = stackA.length,                                                                                          // 2751
      srcValue = source[key];                                                                                          // 2752
                                                                                                                       // 2753
  while (length--) {                                                                                                   // 2754
    if (stackA[length] == srcValue) {                                                                                  // 2755
      object[key] = stackB[length];                                                                                    // 2756
      return;                                                                                                          // 2757
    }                                                                                                                  // 2758
  }                                                                                                                    // 2759
  var value = object[key],                                                                                             // 2760
      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,                              // 2761
      isCommon = result === undefined;                                                                                 // 2762
                                                                                                                       // 2763
  if (isCommon) {                                                                                                      // 2764
    result = srcValue;                                                                                                 // 2765
    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {                                      // 2766
      result = isArray(value)                                                                                          // 2767
        ? value                                                                                                        // 2768
        : (isArrayLike(value) ? arrayCopy(value) : []);                                                                // 2769
    }                                                                                                                  // 2770
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {                                                       // 2771
      result = isArguments(value)                                                                                      // 2772
        ? toPlainObject(value)                                                                                         // 2773
        : (isPlainObject(value) ? value : {});                                                                         // 2774
    }                                                                                                                  // 2775
    else {                                                                                                             // 2776
      isCommon = false;                                                                                                // 2777
    }                                                                                                                  // 2778
  }                                                                                                                    // 2779
  // Add the source value to the stack of traversed objects and associate                                              // 2780
  // it with its merged value.                                                                                         // 2781
  stackA.push(srcValue);                                                                                               // 2782
  stackB.push(result);                                                                                                 // 2783
                                                                                                                       // 2784
  if (isCommon) {                                                                                                      // 2785
    // Recursively merge objects and arrays (susceptible to call stack limits).                                        // 2786
    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);                                             // 2787
  } else if (result === result ? (result !== value) : (value === value)) {                                             // 2788
    object[key] = result;                                                                                              // 2789
  }                                                                                                                    // 2790
}                                                                                                                      // 2791
                                                                                                                       // 2792
module.exports = baseMergeDeep;                                                                                        // 2793
                                                                                                                       // 2794
},{"13":13,"36":36,"45":45,"46":46,"50":50,"51":51,"52":52}],24:[function(require,module,exports){                     // 2795
/**                                                                                                                    // 2796
 * The base implementation of `_.property` without support for deep paths.                                             // 2797
 *                                                                                                                     // 2798
 * @private                                                                                                            // 2799
 * @param {string} key The key of the property to get.                                                                 // 2800
 * @returns {Function} Returns the new function.                                                                       // 2801
 */                                                                                                                    // 2802
function baseProperty(key) {                                                                                           // 2803
  return function(object) {                                                                                            // 2804
    return object == null ? undefined : object[key];                                                                   // 2805
  };                                                                                                                   // 2806
}                                                                                                                      // 2807
                                                                                                                       // 2808
module.exports = baseProperty;                                                                                         // 2809
                                                                                                                       // 2810
},{}],25:[function(require,module,exports){                                                                            // 2811
var identity = require(56);                                                                                            // 2812
                                                                                                                       // 2813
/**                                                                                                                    // 2814
 * A specialized version of `baseCallback` which only supports `this` binding                                          // 2815
 * and specifying the number of arguments to provide to `func`.                                                        // 2816
 *                                                                                                                     // 2817
 * @private                                                                                                            // 2818
 * @param {Function} func The function to bind.                                                                        // 2819
 * @param {*} thisArg The `this` binding of `func`.                                                                    // 2820
 * @param {number} [argCount] The number of arguments to provide to `func`.                                            // 2821
 * @returns {Function} Returns the callback.                                                                           // 2822
 */                                                                                                                    // 2823
function bindCallback(func, thisArg, argCount) {                                                                       // 2824
  if (typeof func != 'function') {                                                                                     // 2825
    return identity;                                                                                                   // 2826
  }                                                                                                                    // 2827
  if (thisArg === undefined) {                                                                                         // 2828
    return func;                                                                                                       // 2829
  }                                                                                                                    // 2830
  switch (argCount) {                                                                                                  // 2831
    case 1: return function(value) {                                                                                   // 2832
      return func.call(thisArg, value);                                                                                // 2833
    };                                                                                                                 // 2834
    case 3: return function(value, index, collection) {                                                                // 2835
      return func.call(thisArg, value, index, collection);                                                             // 2836
    };                                                                                                                 // 2837
    case 4: return function(accumulator, value, index, collection) {                                                   // 2838
      return func.call(thisArg, accumulator, value, index, collection);                                                // 2839
    };                                                                                                                 // 2840
    case 5: return function(value, other, key, object, source) {                                                       // 2841
      return func.call(thisArg, value, other, key, object, source);                                                    // 2842
    };                                                                                                                 // 2843
  }                                                                                                                    // 2844
  return function() {                                                                                                  // 2845
    return func.apply(thisArg, arguments);                                                                             // 2846
  };                                                                                                                   // 2847
}                                                                                                                      // 2848
                                                                                                                       // 2849
module.exports = bindCallback;                                                                                         // 2850
                                                                                                                       // 2851
},{"56":56}],26:[function(require,module,exports){                                                                     // 2852
(function (global){                                                                                                    // 2853
/** Native method references. */                                                                                       // 2854
var ArrayBuffer = global.ArrayBuffer,                                                                                  // 2855
    Uint8Array = global.Uint8Array;                                                                                    // 2856
                                                                                                                       // 2857
/**                                                                                                                    // 2858
 * Creates a clone of the given array buffer.                                                                          // 2859
 *                                                                                                                     // 2860
 * @private                                                                                                            // 2861
 * @param {ArrayBuffer} buffer The array buffer to clone.                                                              // 2862
 * @returns {ArrayBuffer} Returns the cloned array buffer.                                                             // 2863
 */                                                                                                                    // 2864
function bufferClone(buffer) {                                                                                         // 2865
  var result = new ArrayBuffer(buffer.byteLength),                                                                     // 2866
      view = new Uint8Array(result);                                                                                   // 2867
                                                                                                                       // 2868
  view.set(new Uint8Array(buffer));                                                                                    // 2869
  return result;                                                                                                       // 2870
}                                                                                                                      // 2871
                                                                                                                       // 2872
module.exports = bufferClone;                                                                                          // 2873
                                                                                                                       // 2874
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],27:[function(require,module,exports){                                                                            // 2876
var bindCallback = require(25),                                                                                        // 2877
    isIterateeCall = require(38),                                                                                      // 2878
    restParam = require(12);                                                                                           // 2879
                                                                                                                       // 2880
/**                                                                                                                    // 2881
 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.                                                          // 2882
 *                                                                                                                     // 2883
 * @private                                                                                                            // 2884
 * @param {Function} assigner The function to assign values.                                                           // 2885
 * @returns {Function} Returns the new assigner function.                                                              // 2886
 */                                                                                                                    // 2887
function createAssigner(assigner) {                                                                                    // 2888
  return restParam(function(object, sources) {                                                                         // 2889
    var index = -1,                                                                                                    // 2890
        length = object == null ? 0 : sources.length,                                                                  // 2891
        customizer = length > 2 ? sources[length - 2] : undefined,                                                     // 2892
        guard = length > 2 ? sources[2] : undefined,                                                                   // 2893
        thisArg = length > 1 ? sources[length - 1] : undefined;                                                        // 2894
                                                                                                                       // 2895
    if (typeof customizer == 'function') {                                                                             // 2896
      customizer = bindCallback(customizer, thisArg, 5);                                                               // 2897
      length -= 2;                                                                                                     // 2898
    } else {                                                                                                           // 2899
      customizer = typeof thisArg == 'function' ? thisArg : undefined;                                                 // 2900
      length -= (customizer ? 1 : 0);                                                                                  // 2901
    }                                                                                                                  // 2902
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {                                                      // 2903
      customizer = length < 3 ? undefined : customizer;                                                                // 2904
      length = 1;                                                                                                      // 2905
    }                                                                                                                  // 2906
    while (++index < length) {                                                                                         // 2907
      var source = sources[index];                                                                                     // 2908
      if (source) {                                                                                                    // 2909
        assigner(object, source, customizer);                                                                          // 2910
      }                                                                                                                // 2911
    }                                                                                                                  // 2912
    return object;                                                                                                     // 2913
  });                                                                                                                  // 2914
}                                                                                                                      // 2915
                                                                                                                       // 2916
module.exports = createAssigner;                                                                                       // 2917
                                                                                                                       // 2918
},{"12":12,"25":25,"38":38}],28:[function(require,module,exports){                                                     // 2919
var getLength = require(31),                                                                                           // 2920
    isLength = require(39),                                                                                            // 2921
    toObject = require(42);                                                                                            // 2922
                                                                                                                       // 2923
/**                                                                                                                    // 2924
 * Creates a `baseEach` or `baseEachRight` function.                                                                   // 2925
 *                                                                                                                     // 2926
 * @private                                                                                                            // 2927
 * @param {Function} eachFunc The function to iterate over a collection.                                               // 2928
 * @param {boolean} [fromRight] Specify iterating from right to left.                                                  // 2929
 * @returns {Function} Returns the new base function.                                                                  // 2930
 */                                                                                                                    // 2931
function createBaseEach(eachFunc, fromRight) {                                                                         // 2932
  return function(collection, iteratee) {                                                                              // 2933
    var length = collection ? getLength(collection) : 0;                                                               // 2934
    if (!isLength(length)) {                                                                                           // 2935
      return eachFunc(collection, iteratee);                                                                           // 2936
    }                                                                                                                  // 2937
    var index = fromRight ? length : -1,                                                                               // 2938
        iterable = toObject(collection);                                                                               // 2939
                                                                                                                       // 2940
    while ((fromRight ? index-- : ++index < length)) {                                                                 // 2941
      if (iteratee(iterable[index], index, iterable) === false) {                                                      // 2942
        break;                                                                                                         // 2943
      }                                                                                                                // 2944
    }                                                                                                                  // 2945
    return collection;                                                                                                 // 2946
  };                                                                                                                   // 2947
}                                                                                                                      // 2948
                                                                                                                       // 2949
module.exports = createBaseEach;                                                                                       // 2950
                                                                                                                       // 2951
},{"31":31,"39":39,"42":42}],29:[function(require,module,exports){                                                     // 2952
var toObject = require(42);                                                                                            // 2953
                                                                                                                       // 2954
/**                                                                                                                    // 2955
 * Creates a base function for `_.forIn` or `_.forInRight`.                                                            // 2956
 *                                                                                                                     // 2957
 * @private                                                                                                            // 2958
 * @param {boolean} [fromRight] Specify iterating from right to left.                                                  // 2959
 * @returns {Function} Returns the new base function.                                                                  // 2960
 */                                                                                                                    // 2961
function createBaseFor(fromRight) {                                                                                    // 2962
  return function(object, iteratee, keysFunc) {                                                                        // 2963
    var iterable = toObject(object),                                                                                   // 2964
        props = keysFunc(object),                                                                                      // 2965
        length = props.length,                                                                                         // 2966
        index = fromRight ? length : -1;                                                                               // 2967
                                                                                                                       // 2968
    while ((fromRight ? index-- : ++index < length)) {                                                                 // 2969
      var key = props[index];                                                                                          // 2970
      if (iteratee(iterable[key], key, iterable) === false) {                                                          // 2971
        break;                                                                                                         // 2972
      }                                                                                                                // 2973
    }                                                                                                                  // 2974
    return object;                                                                                                     // 2975
  };                                                                                                                   // 2976
}                                                                                                                      // 2977
                                                                                                                       // 2978
module.exports = createBaseFor;                                                                                        // 2979
                                                                                                                       // 2980
},{"42":42}],30:[function(require,module,exports){                                                                     // 2981
var bindCallback = require(25),                                                                                        // 2982
    isArray = require(46);                                                                                             // 2983
                                                                                                                       // 2984
/**                                                                                                                    // 2985
 * Creates a function for `_.forEach` or `_.forEachRight`.                                                             // 2986
 *                                                                                                                     // 2987
 * @private                                                                                                            // 2988
 * @param {Function} arrayFunc The function to iterate over an array.                                                  // 2989
 * @param {Function} eachFunc The function to iterate over a collection.                                               // 2990
 * @returns {Function} Returns the new each function.                                                                  // 2991
 */                                                                                                                    // 2992
function createForEach(arrayFunc, eachFunc) {                                                                          // 2993
  return function(collection, iteratee, thisArg) {                                                                     // 2994
    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))                             // 2995
      ? arrayFunc(collection, iteratee)                                                                                // 2996
      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));                                                      // 2997
  };                                                                                                                   // 2998
}                                                                                                                      // 2999
                                                                                                                       // 3000
module.exports = createForEach;                                                                                        // 3001
                                                                                                                       // 3002
},{"25":25,"46":46}],31:[function(require,module,exports){                                                             // 3003
var baseProperty = require(24);                                                                                        // 3004
                                                                                                                       // 3005
/**                                                                                                                    // 3006
 * Gets the "length" property value of `object`.                                                                       // 3007
 *                                                                                                                     // 3008
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)                // 3009
 * that affects Safari on at least iOS 8.1-8.3 ARM64.                                                                  // 3010
 *                                                                                                                     // 3011
 * @private                                                                                                            // 3012
 * @param {Object} object The object to query.                                                                         // 3013
 * @returns {*} Returns the "length" value.                                                                            // 3014
 */                                                                                                                    // 3015
var getLength = baseProperty('length');                                                                                // 3016
                                                                                                                       // 3017
module.exports = getLength;                                                                                            // 3018
                                                                                                                       // 3019
},{"24":24}],32:[function(require,module,exports){                                                                     // 3020
var isNative = require(48);                                                                                            // 3021
                                                                                                                       // 3022
/**                                                                                                                    // 3023
 * Gets the native function at `key` of `object`.                                                                      // 3024
 *                                                                                                                     // 3025
 * @private                                                                                                            // 3026
 * @param {Object} object The object to query.                                                                         // 3027
 * @param {string} key The key of the method to get.                                                                   // 3028
 * @returns {*} Returns the function if it's native, else `undefined`.                                                 // 3029
 */                                                                                                                    // 3030
function getNative(object, key) {                                                                                      // 3031
  var value = object == null ? undefined : object[key];                                                                // 3032
  return isNative(value) ? value : undefined;                                                                          // 3033
}                                                                                                                      // 3034
                                                                                                                       // 3035
module.exports = getNative;                                                                                            // 3036
                                                                                                                       // 3037
},{"48":48}],33:[function(require,module,exports){                                                                     // 3038
/** Used for native method references. */                                                                              // 3039
var objectProto = Object.prototype;                                                                                    // 3040
                                                                                                                       // 3041
/** Used to check objects for own properties. */                                                                       // 3042
var hasOwnProperty = objectProto.hasOwnProperty;                                                                       // 3043
                                                                                                                       // 3044
/**                                                                                                                    // 3045
 * Initializes an array clone.                                                                                         // 3046
 *                                                                                                                     // 3047
 * @private                                                                                                            // 3048
 * @param {Array} array The array to clone.                                                                            // 3049
 * @returns {Array} Returns the initialized clone.                                                                     // 3050
 */                                                                                                                    // 3051
function initCloneArray(array) {                                                                                       // 3052
  var length = array.length,                                                                                           // 3053
      result = new array.constructor(length);                                                                          // 3054
                                                                                                                       // 3055
  // Add array properties assigned by `RegExp#exec`.                                                                   // 3056
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {                                  // 3057
    result.index = array.index;                                                                                        // 3058
    result.input = array.input;                                                                                        // 3059
  }                                                                                                                    // 3060
  return result;                                                                                                       // 3061
}                                                                                                                      // 3062
                                                                                                                       // 3063
module.exports = initCloneArray;                                                                                       // 3064
                                                                                                                       // 3065
},{}],34:[function(require,module,exports){                                                                            // 3066
var bufferClone = require(26);                                                                                         // 3067
                                                                                                                       // 3068
/** `Object#toString` result references. */                                                                            // 3069
var boolTag = '[object Boolean]',                                                                                      // 3070
    dateTag = '[object Date]',                                                                                         // 3071
    numberTag = '[object Number]',                                                                                     // 3072
    regexpTag = '[object RegExp]',                                                                                     // 3073
    stringTag = '[object String]';                                                                                     // 3074
                                                                                                                       // 3075
var arrayBufferTag = '[object ArrayBuffer]',                                                                           // 3076
    float32Tag = '[object Float32Array]',                                                                              // 3077
    float64Tag = '[object Float64Array]',                                                                              // 3078
    int8Tag = '[object Int8Array]',                                                                                    // 3079
    int16Tag = '[object Int16Array]',                                                                                  // 3080
    int32Tag = '[object Int32Array]',                                                                                  // 3081
    uint8Tag = '[object Uint8Array]',                                                                                  // 3082
    uint8ClampedTag = '[object Uint8ClampedArray]',                                                                    // 3083
    uint16Tag = '[object Uint16Array]',                                                                                // 3084
    uint32Tag = '[object Uint32Array]';                                                                                // 3085
                                                                                                                       // 3086
/** Used to match `RegExp` flags from their coerced string values. */                                                  // 3087
var reFlags = /\w*$/;                                                                                                  // 3088
                                                                                                                       // 3089
/**                                                                                                                    // 3090
 * Initializes an object clone based on its `toStringTag`.                                                             // 3091
 *                                                                                                                     // 3092
 * **Note:** This function only supports cloning values with tags of                                                   // 3093
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.                                                        // 3094
 *                                                                                                                     // 3095
 * @private                                                                                                            // 3096
 * @param {Object} object The object to clone.                                                                         // 3097
 * @param {string} tag The `toStringTag` of the object to clone.                                                       // 3098
 * @param {boolean} [isDeep] Specify a deep clone.                                                                     // 3099
 * @returns {Object} Returns the initialized clone.                                                                    // 3100
 */                                                                                                                    // 3101
function initCloneByTag(object, tag, isDeep) {                                                                         // 3102
  var Ctor = object.constructor;                                                                                       // 3103
  switch (tag) {                                                                                                       // 3104
    case arrayBufferTag:                                                                                               // 3105
      return bufferClone(object);                                                                                      // 3106
                                                                                                                       // 3107
    case boolTag:                                                                                                      // 3108
    case dateTag:                                                                                                      // 3109
      return new Ctor(+object);                                                                                        // 3110
                                                                                                                       // 3111
    case float32Tag: case float64Tag:                                                                                  // 3112
    case int8Tag: case int16Tag: case int32Tag:                                                                        // 3113
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:                                               // 3114
      var buffer = object.buffer;                                                                                      // 3115
      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);                        // 3116
                                                                                                                       // 3117
    case numberTag:                                                                                                    // 3118
    case stringTag:                                                                                                    // 3119
      return new Ctor(object);                                                                                         // 3120
                                                                                                                       // 3121
    case regexpTag:                                                                                                    // 3122
      var result = new Ctor(object.source, reFlags.exec(object));                                                      // 3123
      result.lastIndex = object.lastIndex;                                                                             // 3124
  }                                                                                                                    // 3125
  return result;                                                                                                       // 3126
}                                                                                                                      // 3127
                                                                                                                       // 3128
module.exports = initCloneByTag;                                                                                       // 3129
                                                                                                                       // 3130
},{"26":26}],35:[function(require,module,exports){                                                                     // 3131
/**                                                                                                                    // 3132
 * Initializes an object clone.                                                                                        // 3133
 *                                                                                                                     // 3134
 * @private                                                                                                            // 3135
 * @param {Object} object The object to clone.                                                                         // 3136
 * @returns {Object} Returns the initialized clone.                                                                    // 3137
 */                                                                                                                    // 3138
function initCloneObject(object) {                                                                                     // 3139
  var Ctor = object.constructor;                                                                                       // 3140
  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {                                                          // 3141
    Ctor = Object;                                                                                                     // 3142
  }                                                                                                                    // 3143
  return new Ctor;                                                                                                     // 3144
}                                                                                                                      // 3145
                                                                                                                       // 3146
module.exports = initCloneObject;                                                                                      // 3147
                                                                                                                       // 3148
},{}],36:[function(require,module,exports){                                                                            // 3149
var getLength = require(31),                                                                                           // 3150
    isLength = require(39);                                                                                            // 3151
                                                                                                                       // 3152
/**                                                                                                                    // 3153
 * Checks if `value` is array-like.                                                                                    // 3154
 *                                                                                                                     // 3155
 * @private                                                                                                            // 3156
 * @param {*} value The value to check.                                                                                // 3157
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.                                           // 3158
 */                                                                                                                    // 3159
function isArrayLike(value) {                                                                                          // 3160
  return value != null && isLength(getLength(value));                                                                  // 3161
}                                                                                                                      // 3162
                                                                                                                       // 3163
module.exports = isArrayLike;                                                                                          // 3164
                                                                                                                       // 3165
},{"31":31,"39":39}],37:[function(require,module,exports){                                                             // 3166
/** Used to detect unsigned integer values. */                                                                         // 3167
var reIsUint = /^\d+$/;                                                                                                // 3168
                                                                                                                       // 3169
/**                                                                                                                    // 3170
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)               // 3171
 * of an array-like value.                                                                                             // 3172
 */                                                                                                                    // 3173
var MAX_SAFE_INTEGER = 9007199254740991;                                                                               // 3174
                                                                                                                       // 3175
/**                                                                                                                    // 3176
 * Checks if `value` is a valid array-like index.                                                                      // 3177
 *                                                                                                                     // 3178
 * @private                                                                                                            // 3179
 * @param {*} value The value to check.                                                                                // 3180
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.                                        // 3181
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.                                        // 3182
 */                                                                                                                    // 3183
function isIndex(value, length) {                                                                                      // 3184
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;                                            // 3185
  length = length == null ? MAX_SAFE_INTEGER : length;                                                                 // 3186
  return value > -1 && value % 1 == 0 && value < length;                                                               // 3187
}                                                                                                                      // 3188
                                                                                                                       // 3189
module.exports = isIndex;                                                                                              // 3190
                                                                                                                       // 3191
},{}],38:[function(require,module,exports){                                                                            // 3192
var isArrayLike = require(36),                                                                                         // 3193
    isIndex = require(37),                                                                                             // 3194
    isObject = require(49);                                                                                            // 3195
                                                                                                                       // 3196
/**                                                                                                                    // 3197
 * Checks if the provided arguments are from an iteratee call.                                                         // 3198
 *                                                                                                                     // 3199
 * @private                                                                                                            // 3200
 * @param {*} value The potential iteratee value argument.                                                             // 3201
 * @param {*} index The potential iteratee index or key argument.                                                      // 3202
 * @param {*} object The potential iteratee object argument.                                                           // 3203
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.                         // 3204
 */                                                                                                                    // 3205
function isIterateeCall(value, index, object) {                                                                        // 3206
  if (!isObject(object)) {                                                                                             // 3207
    return false;                                                                                                      // 3208
  }                                                                                                                    // 3209
  var type = typeof index;                                                                                             // 3210
  if (type == 'number'                                                                                                 // 3211
      ? (isArrayLike(object) && isIndex(index, object.length))                                                         // 3212
      : (type == 'string' && index in object)) {                                                                       // 3213
    var other = object[index];                                                                                         // 3214
    return value === value ? (value === other) : (other !== other);                                                    // 3215
  }                                                                                                                    // 3216
  return false;                                                                                                        // 3217
}                                                                                                                      // 3218
                                                                                                                       // 3219
module.exports = isIterateeCall;                                                                                       // 3220
                                                                                                                       // 3221
},{"36":36,"37":37,"49":49}],39:[function(require,module,exports){                                                     // 3222
/**                                                                                                                    // 3223
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)               // 3224
 * of an array-like value.                                                                                             // 3225
 */                                                                                                                    // 3226
var MAX_SAFE_INTEGER = 9007199254740991;                                                                               // 3227
                                                                                                                       // 3228
/**                                                                                                                    // 3229
 * Checks if `value` is a valid array-like length.                                                                     // 3230
 *                                                                                                                     // 3231
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).         // 3232
 *                                                                                                                     // 3233
 * @private                                                                                                            // 3234
 * @param {*} value The value to check.                                                                                // 3235
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.                                       // 3236
 */                                                                                                                    // 3237
function isLength(value) {                                                                                             // 3238
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;                        // 3239
}                                                                                                                      // 3240
                                                                                                                       // 3241
module.exports = isLength;                                                                                             // 3242
                                                                                                                       // 3243
},{}],40:[function(require,module,exports){                                                                            // 3244
/**                                                                                                                    // 3245
 * Checks if `value` is object-like.                                                                                   // 3246
 *                                                                                                                     // 3247
 * @private                                                                                                            // 3248
 * @param {*} value The value to check.                                                                                // 3249
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.                                          // 3250
 */                                                                                                                    // 3251
function isObjectLike(value) {                                                                                         // 3252
  return !!value && typeof value == 'object';                                                                          // 3253
}                                                                                                                      // 3254
                                                                                                                       // 3255
module.exports = isObjectLike;                                                                                         // 3256
                                                                                                                       // 3257
},{}],41:[function(require,module,exports){                                                                            // 3258
var isArguments = require(45),                                                                                         // 3259
    isArray = require(46),                                                                                             // 3260
    isIndex = require(37),                                                                                             // 3261
    isLength = require(39),                                                                                            // 3262
    keysIn = require(54);                                                                                              // 3263
                                                                                                                       // 3264
/** Used for native method references. */                                                                              // 3265
var objectProto = Object.prototype;                                                                                    // 3266
                                                                                                                       // 3267
/** Used to check objects for own properties. */                                                                       // 3268
var hasOwnProperty = objectProto.hasOwnProperty;                                                                       // 3269
                                                                                                                       // 3270
/**                                                                                                                    // 3271
 * A fallback implementation of `Object.keys` which creates an array of the                                            // 3272
 * own enumerable property names of `object`.                                                                          // 3273
 *                                                                                                                     // 3274
 * @private                                                                                                            // 3275
 * @param {Object} object The object to query.                                                                         // 3276
 * @returns {Array} Returns the array of property names.                                                               // 3277
 */                                                                                                                    // 3278
function shimKeys(object) {                                                                                            // 3279
  var props = keysIn(object),                                                                                          // 3280
      propsLength = props.length,                                                                                      // 3281
      length = propsLength && object.length;                                                                           // 3282
                                                                                                                       // 3283
  var allowIndexes = !!length && isLength(length) &&                                                                   // 3284
    (isArray(object) || isArguments(object));                                                                          // 3285
                                                                                                                       // 3286
  var index = -1,                                                                                                      // 3287
      result = [];                                                                                                     // 3288
                                                                                                                       // 3289
  while (++index < propsLength) {                                                                                      // 3290
    var key = props[index];                                                                                            // 3291
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {                                  // 3292
      result.push(key);                                                                                                // 3293
    }                                                                                                                  // 3294
  }                                                                                                                    // 3295
  return result;                                                                                                       // 3296
}                                                                                                                      // 3297
                                                                                                                       // 3298
module.exports = shimKeys;                                                                                             // 3299
                                                                                                                       // 3300
},{"37":37,"39":39,"45":45,"46":46,"54":54}],42:[function(require,module,exports){                                     // 3301
var isObject = require(49);                                                                                            // 3302
                                                                                                                       // 3303
/**                                                                                                                    // 3304
 * Converts `value` to an object if it's not one.                                                                      // 3305
 *                                                                                                                     // 3306
 * @private                                                                                                            // 3307
 * @param {*} value The value to process.                                                                              // 3308
 * @returns {Object} Returns the object.                                                                               // 3309
 */                                                                                                                    // 3310
function toObject(value) {                                                                                             // 3311
  return isObject(value) ? value : Object(value);                                                                      // 3312
}                                                                                                                      // 3313
                                                                                                                       // 3314
module.exports = toObject;                                                                                             // 3315
                                                                                                                       // 3316
},{"49":49}],43:[function(require,module,exports){                                                                     // 3317
var baseClone = require(16),                                                                                           // 3318
    bindCallback = require(25),                                                                                        // 3319
    isIterateeCall = require(38);                                                                                      // 3320
                                                                                                                       // 3321
/**                                                                                                                    // 3322
 * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,                                        // 3323
 * otherwise they are assigned by reference. If `customizer` is provided it's                                          // 3324
 * invoked to produce the cloned values. If `customizer` returns `undefined`                                           // 3325
 * cloning is handled by the method instead. The `customizer` is bound to                                              // 3326
 * `thisArg` and invoked with up to three argument; (value [, index|key, object]).                                     // 3327
 *                                                                                                                     // 3328
 * **Note:** This method is loosely based on the                                                                       // 3329
 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
 * The enumerable properties of `arguments` objects and objects created by                                             // 3331
 * constructors other than `Object` are cloned to plain `Object` objects. An                                           // 3332
 * empty object is returned for uncloneable values such as functions, DOM nodes,                                       // 3333
 * Maps, Sets, and WeakMaps.                                                                                           // 3334
 *                                                                                                                     // 3335
 * @static                                                                                                             // 3336
 * @memberOf _                                                                                                         // 3337
 * @category Lang                                                                                                      // 3338
 * @param {*} value The value to clone.                                                                                // 3339
 * @param {boolean} [isDeep] Specify a deep clone.                                                                     // 3340
 * @param {Function} [customizer] The function to customize cloning values.                                            // 3341
 * @param {*} [thisArg] The `this` binding of `customizer`.                                                            // 3342
 * @returns {*} Returns the cloned value.                                                                              // 3343
 * @example                                                                                                            // 3344
 *                                                                                                                     // 3345
 * var users = [                                                                                                       // 3346
 *   { 'user': 'barney' },                                                                                             // 3347
 *   { 'user': 'fred' }                                                                                                // 3348
 * ];                                                                                                                  // 3349
 *                                                                                                                     // 3350
 * var shallow = _.clone(users);                                                                                       // 3351
 * shallow[0] === users[0];                                                                                            // 3352
 * // => true                                                                                                          // 3353
 *                                                                                                                     // 3354
 * var deep = _.clone(users, true);                                                                                    // 3355
 * deep[0] === users[0];                                                                                               // 3356
 * // => false                                                                                                         // 3357
 *                                                                                                                     // 3358
 * // using a customizer callback                                                                                      // 3359
 * var el = _.clone(document.body, function(value) {                                                                   // 3360
 *   if (_.isElement(value)) {                                                                                         // 3361
 *     return value.cloneNode(false);                                                                                  // 3362
 *   }                                                                                                                 // 3363
 * });                                                                                                                 // 3364
 *                                                                                                                     // 3365
 * el === document.body                                                                                                // 3366
 * // => false                                                                                                         // 3367
 * el.nodeName                                                                                                         // 3368
 * // => BODY                                                                                                          // 3369
 * el.childNodes.length;                                                                                               // 3370
 * // => 0                                                                                                             // 3371
 */                                                                                                                    // 3372
function clone(value, isDeep, customizer, thisArg) {                                                                   // 3373
  if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {                             // 3374
    isDeep = false;                                                                                                    // 3375
  }                                                                                                                    // 3376
  else if (typeof isDeep == 'function') {                                                                              // 3377
    thisArg = customizer;                                                                                              // 3378
    customizer = isDeep;                                                                                               // 3379
    isDeep = false;                                                                                                    // 3380
  }                                                                                                                    // 3381
  return typeof customizer == 'function'                                                                               // 3382
    ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 3))                                                   // 3383
    : baseClone(value, isDeep);                                                                                        // 3384
}                                                                                                                      // 3385
                                                                                                                       // 3386
module.exports = clone;                                                                                                // 3387
                                                                                                                       // 3388
},{"16":16,"25":25,"38":38}],44:[function(require,module,exports){                                                     // 3389
var baseClone = require(16),                                                                                           // 3390
    bindCallback = require(25);                                                                                        // 3391
                                                                                                                       // 3392
/**                                                                                                                    // 3393
 * Creates a deep clone of `value`. If `customizer` is provided it's invoked                                           // 3394
 * to produce the cloned values. If `customizer` returns `undefined` cloning                                           // 3395
 * is handled by the method instead. The `customizer` is bound to `thisArg`                                            // 3396
 * and invoked with up to three argument; (value [, index|key, object]).                                               // 3397
 *                                                                                                                     // 3398
 * **Note:** This method is loosely based on the                                                                       // 3399
 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
 * The enumerable properties of `arguments` objects and objects created by                                             // 3401
 * constructors other than `Object` are cloned to plain `Object` objects. An                                           // 3402
 * empty object is returned for uncloneable values such as functions, DOM nodes,                                       // 3403
 * Maps, Sets, and WeakMaps.                                                                                           // 3404
 *                                                                                                                     // 3405
 * @static                                                                                                             // 3406
 * @memberOf _                                                                                                         // 3407
 * @category Lang                                                                                                      // 3408
 * @param {*} value The value to deep clone.                                                                           // 3409
 * @param {Function} [customizer] The function to customize cloning values.                                            // 3410
 * @param {*} [thisArg] The `this` binding of `customizer`.                                                            // 3411
 * @returns {*} Returns the deep cloned value.                                                                         // 3412
 * @example                                                                                                            // 3413
 *                                                                                                                     // 3414
 * var users = [                                                                                                       // 3415
 *   { 'user': 'barney' },                                                                                             // 3416
 *   { 'user': 'fred' }                                                                                                // 3417
 * ];                                                                                                                  // 3418
 *                                                                                                                     // 3419
 * var deep = _.cloneDeep(users);                                                                                      // 3420
 * deep[0] === users[0];                                                                                               // 3421
 * // => false                                                                                                         // 3422
 *                                                                                                                     // 3423
 * // using a customizer callback                                                                                      // 3424
 * var el = _.cloneDeep(document.body, function(value) {                                                               // 3425
 *   if (_.isElement(value)) {                                                                                         // 3426
 *     return value.cloneNode(true);                                                                                   // 3427
 *   }                                                                                                                 // 3428
 * });                                                                                                                 // 3429
 *                                                                                                                     // 3430
 * el === document.body                                                                                                // 3431
 * // => false                                                                                                         // 3432
 * el.nodeName                                                                                                         // 3433
 * // => BODY                                                                                                          // 3434
 * el.childNodes.length;                                                                                               // 3435
 * // => 20                                                                                                            // 3436
 */                                                                                                                    // 3437
function cloneDeep(value, customizer, thisArg) {                                                                       // 3438
  return typeof customizer == 'function'                                                                               // 3439
    ? baseClone(value, true, bindCallback(customizer, thisArg, 3))                                                     // 3440
    : baseClone(value, true);                                                                                          // 3441
}                                                                                                                      // 3442
                                                                                                                       // 3443
module.exports = cloneDeep;                                                                                            // 3444
                                                                                                                       // 3445
},{"16":16,"25":25}],45:[function(require,module,exports){                                                             // 3446
var isArrayLike = require(36),                                                                                         // 3447
    isObjectLike = require(40);                                                                                        // 3448
                                                                                                                       // 3449
/** Used for native method references. */                                                                              // 3450
var objectProto = Object.prototype;                                                                                    // 3451
                                                                                                                       // 3452
/** Used to check objects for own properties. */                                                                       // 3453
var hasOwnProperty = objectProto.hasOwnProperty;                                                                       // 3454
                                                                                                                       // 3455
/** Native method references. */                                                                                       // 3456
var propertyIsEnumerable = objectProto.propertyIsEnumerable;                                                           // 3457
                                                                                                                       // 3458
/**                                                                                                                    // 3459
 * Checks if `value` is classified as an `arguments` object.                                                           // 3460
 *                                                                                                                     // 3461
 * @static                                                                                                             // 3462
 * @memberOf _                                                                                                         // 3463
 * @category Lang                                                                                                      // 3464
 * @param {*} value The value to check.                                                                                // 3465
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.                                 // 3466
 * @example                                                                                                            // 3467
 *                                                                                                                     // 3468
 * _.isArguments(function() { return arguments; }());                                                                  // 3469
 * // => true                                                                                                          // 3470
 *                                                                                                                     // 3471
 * _.isArguments([1, 2, 3]);                                                                                           // 3472
 * // => false                                                                                                         // 3473
 */                                                                                                                    // 3474
function isArguments(value) {                                                                                          // 3475
  return isObjectLike(value) && isArrayLike(value) &&                                                                  // 3476
    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');                               // 3477
}                                                                                                                      // 3478
                                                                                                                       // 3479
module.exports = isArguments;                                                                                          // 3480
                                                                                                                       // 3481
},{"36":36,"40":40}],46:[function(require,module,exports){                                                             // 3482
var getNative = require(32),                                                                                           // 3483
    isLength = require(39),                                                                                            // 3484
    isObjectLike = require(40);                                                                                        // 3485
                                                                                                                       // 3486
/** `Object#toString` result references. */                                                                            // 3487
var arrayTag = '[object Array]';                                                                                       // 3488
                                                                                                                       // 3489
/** Used for native method references. */                                                                              // 3490
var objectProto = Object.prototype;                                                                                    // 3491
                                                                                                                       // 3492
/**                                                                                                                    // 3493
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)      // 3494
 * of values.                                                                                                          // 3495
 */                                                                                                                    // 3496
var objToString = objectProto.toString;                                                                                // 3497
                                                                                                                       // 3498
/* Native method references for those with the same name as other `lodash` methods. */                                 // 3499
var nativeIsArray = getNative(Array, 'isArray');                                                                       // 3500
                                                                                                                       // 3501
/**                                                                                                                    // 3502
 * Checks if `value` is classified as an `Array` object.                                                               // 3503
 *                                                                                                                     // 3504
 * @static                                                                                                             // 3505
 * @memberOf _                                                                                                         // 3506
 * @category Lang                                                                                                      // 3507
 * @param {*} value The value to check.                                                                                // 3508
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.                                 // 3509
 * @example                                                                                                            // 3510
 *                                                                                                                     // 3511
 * _.isArray([1, 2, 3]);                                                                                               // 3512
 * // => true                                                                                                          // 3513
 *                                                                                                                     // 3514
 * _.isArray(function() { return arguments; }());                                                                      // 3515
 * // => false                                                                                                         // 3516
 */                                                                                                                    // 3517
var isArray = nativeIsArray || function(value) {                                                                       // 3518
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;                         // 3519
};                                                                                                                     // 3520
                                                                                                                       // 3521
module.exports = isArray;                                                                                              // 3522
                                                                                                                       // 3523
},{"32":32,"39":39,"40":40}],47:[function(require,module,exports){                                                     // 3524
var isObject = require(49);                                                                                            // 3525
                                                                                                                       // 3526
/** `Object#toString` result references. */                                                                            // 3527
var funcTag = '[object Function]';                                                                                     // 3528
                                                                                                                       // 3529
/** Used for native method references. */                                                                              // 3530
var objectProto = Object.prototype;                                                                                    // 3531
                                                                                                                       // 3532
/**                                                                                                                    // 3533
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)      // 3534
 * of values.                                                                                                          // 3535
 */                                                                                                                    // 3536
var objToString = objectProto.toString;                                                                                // 3537
                                                                                                                       // 3538
/**                                                                                                                    // 3539
 * Checks if `value` is classified as a `Function` object.                                                             // 3540
 *                                                                                                                     // 3541
 * @static                                                                                                             // 3542
 * @memberOf _                                                                                                         // 3543
 * @category Lang                                                                                                      // 3544
 * @param {*} value The value to check.                                                                                // 3545
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.                                 // 3546
 * @example                                                                                                            // 3547
 *                                                                                                                     // 3548
 * _.isFunction(_);                                                                                                    // 3549
 * // => true                                                                                                          // 3550
 *                                                                                                                     // 3551
 * _.isFunction(/abc/);                                                                                                // 3552
 * // => false                                                                                                         // 3553
 */                                                                                                                    // 3554
function isFunction(value) {                                                                                           // 3555
  // The use of `Object#toString` avoids issues with the `typeof` operator                                             // 3556
  // in older versions of Chrome and Safari which return 'function' for regexes                                        // 3557
  // and Safari 8 which returns 'object' for typed array constructors.                                                 // 3558
  return isObject(value) && objToString.call(value) == funcTag;                                                        // 3559
}                                                                                                                      // 3560
                                                                                                                       // 3561
module.exports = isFunction;                                                                                           // 3562
                                                                                                                       // 3563
},{"49":49}],48:[function(require,module,exports){                                                                     // 3564
var isFunction = require(47),                                                                                          // 3565
    isObjectLike = require(40);                                                                                        // 3566
                                                                                                                       // 3567
/** Used to detect host constructors (Safari > 5). */                                                                  // 3568
var reIsHostCtor = /^\[object .+?Constructor\]$/;                                                                      // 3569
                                                                                                                       // 3570
/** Used for native method references. */                                                                              // 3571
var objectProto = Object.prototype;                                                                                    // 3572
                                                                                                                       // 3573
/** Used to resolve the decompiled source of functions. */                                                             // 3574
var fnToString = Function.prototype.toString;                                                                          // 3575
                                                                                                                       // 3576
/** Used to check objects for own properties. */                                                                       // 3577
var hasOwnProperty = objectProto.hasOwnProperty;                                                                       // 3578
                                                                                                                       // 3579
/** Used to detect if a method is native. */                                                                           // 3580
var reIsNative = RegExp('^' +                                                                                          // 3581
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')                                               // 3582
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'                                    // 3583
);                                                                                                                     // 3584
                                                                                                                       // 3585
/**                                                                                                                    // 3586
 * Checks if `value` is a native function.                                                                             // 3587
 *                                                                                                                     // 3588
 * @static                                                                                                             // 3589
 * @memberOf _                                                                                                         // 3590
 * @category Lang                                                                                                      // 3591
 * @param {*} value The value to check.                                                                                // 3592
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.                                    // 3593
 * @example                                                                                                            // 3594
 *                                                                                                                     // 3595
 * _.isNative(Array.prototype.push);                                                                                   // 3596
 * // => true                                                                                                          // 3597
 *                                                                                                                     // 3598
 * _.isNative(_);                                                                                                      // 3599
 * // => false                                                                                                         // 3600
 */                                                                                                                    // 3601
function isNative(value) {                                                                                             // 3602
  if (value == null) {                                                                                                 // 3603
    return false;                                                                                                      // 3604
  }                                                                                                                    // 3605
  if (isFunction(value)) {                                                                                             // 3606
    return reIsNative.test(fnToString.call(value));                                                                    // 3607
  }                                                                                                                    // 3608
  return isObjectLike(value) && reIsHostCtor.test(value);                                                              // 3609
}                                                                                                                      // 3610
                                                                                                                       // 3611
module.exports = isNative;                                                                                             // 3612
                                                                                                                       // 3613
},{"40":40,"47":47}],49:[function(require,module,exports){                                                             // 3614
/**                                                                                                                    // 3615
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.                                    // 3616
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)                                   // 3617
 *                                                                                                                     // 3618
 * @static                                                                                                             // 3619
 * @memberOf _                                                                                                         // 3620
 * @category Lang                                                                                                      // 3621
 * @param {*} value The value to check.                                                                                // 3622
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.                                            // 3623
 * @example                                                                                                            // 3624
 *                                                                                                                     // 3625
 * _.isObject({});                                                                                                     // 3626
 * // => true                                                                                                          // 3627
 *                                                                                                                     // 3628
 * _.isObject([1, 2, 3]);                                                                                              // 3629
 * // => true                                                                                                          // 3630
 *                                                                                                                     // 3631
 * _.isObject(1);                                                                                                      // 3632
 * // => false                                                                                                         // 3633
 */                                                                                                                    // 3634
function isObject(value) {                                                                                             // 3635
  // Avoid a V8 JIT bug in Chrome 19-20.                                                                               // 3636
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.                                          // 3637
  var type = typeof value;                                                                                             // 3638
  return !!value && (type == 'object' || type == 'function');                                                          // 3639
}                                                                                                                      // 3640
                                                                                                                       // 3641
module.exports = isObject;                                                                                             // 3642
                                                                                                                       // 3643
},{}],50:[function(require,module,exports){                                                                            // 3644
var baseForIn = require(20),                                                                                           // 3645
    isArguments = require(45),                                                                                         // 3646
    isObjectLike = require(40);                                                                                        // 3647
                                                                                                                       // 3648
/** `Object#toString` result references. */                                                                            // 3649
var objectTag = '[object Object]';                                                                                     // 3650
                                                                                                                       // 3651
/** Used for native method references. */                                                                              // 3652
var objectProto = Object.prototype;                                                                                    // 3653
                                                                                                                       // 3654
/** Used to check objects for own properties. */                                                                       // 3655
var hasOwnProperty = objectProto.hasOwnProperty;                                                                       // 3656
                                                                                                                       // 3657
/**                                                                                                                    // 3658
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)      // 3659
 * of values.                                                                                                          // 3660
 */                                                                                                                    // 3661
var objToString = objectProto.toString;                                                                                // 3662
                                                                                                                       // 3663
/**                                                                                                                    // 3664
 * Checks if `value` is a plain object, that is, an object created by the                                              // 3665
 * `Object` constructor or one with a `[[Prototype]]` of `null`.                                                       // 3666
 *                                                                                                                     // 3667
 * **Note:** This method assumes objects created by the `Object` constructor                                           // 3668
 * have no inherited enumerable properties.                                                                            // 3669
 *                                                                                                                     // 3670
 * @static                                                                                                             // 3671
 * @memberOf _                                                                                                         // 3672
 * @category Lang                                                                                                      // 3673
 * @param {*} value The value to check.                                                                                // 3674
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.                                       // 3675
 * @example                                                                                                            // 3676
 *                                                                                                                     // 3677
 * function Foo() {                                                                                                    // 3678
 *   this.a = 1;                                                                                                       // 3679
 * }                                                                                                                   // 3680
 *                                                                                                                     // 3681
 * _.isPlainObject(new Foo);                                                                                           // 3682
 * // => false                                                                                                         // 3683
 *                                                                                                                     // 3684
 * _.isPlainObject([1, 2, 3]);                                                                                         // 3685
 * // => false                                                                                                         // 3686
 *                                                                                                                     // 3687
 * _.isPlainObject({ 'x': 0, 'y': 0 });                                                                                // 3688
 * // => true                                                                                                          // 3689
 *                                                                                                                     // 3690
 * _.isPlainObject(Object.create(null));                                                                               // 3691
 * // => true                                                                                                          // 3692
 */                                                                                                                    // 3693
function isPlainObject(value) {                                                                                        // 3694
  var Ctor;                                                                                                            // 3695
                                                                                                                       // 3696
  // Exit early for non `Object` objects.                                                                              // 3697
  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||                         // 3698
      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
    return false;                                                                                                      // 3700
  }                                                                                                                    // 3701
  // IE < 9 iterates inherited properties before own properties. If the first                                          // 3702
  // iterated property is an object's own property then there are no inherited                                         // 3703
  // enumerable properties.                                                                                            // 3704
  var result;                                                                                                          // 3705
  // In most environments an object's own properties are iterated before                                               // 3706
  // its inherited properties. If the last iterated property is an object's                                            // 3707
  // own property then there are no inherited enumerable properties.                                                   // 3708
  baseForIn(value, function(subValue, key) {                                                                           // 3709
    result = key;                                                                                                      // 3710
  });                                                                                                                  // 3711
  return result === undefined || hasOwnProperty.call(value, result);                                                   // 3712
}                                                                                                                      // 3713
                                                                                                                       // 3714
module.exports = isPlainObject;                                                                                        // 3715
                                                                                                                       // 3716
},{"20":20,"40":40,"45":45}],51:[function(require,module,exports){                                                     // 3717
var isLength = require(39),                                                                                            // 3718
    isObjectLike = require(40);                                                                                        // 3719
                                                                                                                       // 3720
/** `Object#toString` result references. */                                                                            // 3721
var argsTag = '[object Arguments]',                                                                                    // 3722
    arrayTag = '[object Array]',                                                                                       // 3723
    boolTag = '[object Boolean]',                                                                                      // 3724
    dateTag = '[object Date]',                                                                                         // 3725
    errorTag = '[object Error]',                                                                                       // 3726
    funcTag = '[object Function]',                                                                                     // 3727
    mapTag = '[object Map]',                                                                                           // 3728
    numberTag = '[object Number]',                                                                                     // 3729
    objectTag = '[object Object]',                                                                                     // 3730
    regexpTag = '[object RegExp]',                                                                                     // 3731
    setTag = '[object Set]',                                                                                           // 3732
    stringTag = '[object String]',                                                                                     // 3733
    weakMapTag = '[object WeakMap]';                                                                                   // 3734
                                                                                                                       // 3735
var arrayBufferTag = '[object ArrayBuffer]',                                                                           // 3736
    float32Tag = '[object Float32Array]',                                                                              // 3737
    float64Tag = '[object Float64Array]',                                                                              // 3738
    int8Tag = '[object Int8Array]',                                                                                    // 3739
    int16Tag = '[object Int16Array]',                                                                                  // 3740
    int32Tag = '[object Int32Array]',                                                                                  // 3741
    uint8Tag = '[object Uint8Array]',                                                                                  // 3742
    uint8ClampedTag = '[object Uint8ClampedArray]',                                                                    // 3743
    uint16Tag = '[object Uint16Array]',                                                                                // 3744
    uint32Tag = '[object Uint32Array]';                                                                                // 3745
                                                                                                                       // 3746
/** Used to identify `toStringTag` values of typed arrays. */                                                          // 3747
var typedArrayTags = {};                                                                                               // 3748
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =                                                              // 3749
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =                                                                   // 3750
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =                                                                  // 3751
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =                                                          // 3752
typedArrayTags[uint32Tag] = true;                                                                                      // 3753
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =                                                                   // 3754
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =                                                             // 3755
typedArrayTags[dateTag] = typedArrayTags[errorTag] =                                                                   // 3756
typedArrayTags[funcTag] = typedArrayTags[mapTag] =                                                                     // 3757
typedArrayTags[numberTag] = typedArrayTags[objectTag] =                                                                // 3758
typedArrayTags[regexpTag] = typedArrayTags[setTag] =                                                                   // 3759
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;                                                        // 3760
                                                                                                                       // 3761
/** Used for native method references. */                                                                              // 3762
var objectProto = Object.prototype;                                                                                    // 3763
                                                                                                                       // 3764
/**                                                                                                                    // 3765
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)      // 3766
 * of values.                                                                                                          // 3767
 */                                                                                                                    // 3768
var objToString = objectProto.toString;                                                                                // 3769
                                                                                                                       // 3770
/**                                                                                                                    // 3771
 * Checks if `value` is classified as a typed array.                                                                   // 3772
 *                                                                                                                     // 3773
 * @static                                                                                                             // 3774
 * @memberOf _                                                                                                         // 3775
 * @category Lang                                                                                                      // 3776
 * @param {*} value The value to check.                                                                                // 3777
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.                                 // 3778
 * @example                                                                                                            // 3779
 *                                                                                                                     // 3780
 * _.isTypedArray(new Uint8Array);                                                                                     // 3781
 * // => true                                                                                                          // 3782
 *                                                                                                                     // 3783
 * _.isTypedArray([]);                                                                                                 // 3784
 * // => false                                                                                                         // 3785
 */                                                                                                                    // 3786
function isTypedArray(value) {                                                                                         // 3787
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];                   // 3788
}                                                                                                                      // 3789
                                                                                                                       // 3790
module.exports = isTypedArray;                                                                                         // 3791
                                                                                                                       // 3792
},{"39":39,"40":40}],52:[function(require,module,exports){                                                             // 3793
var baseCopy = require(17),                                                                                            // 3794
    keysIn = require(54);                                                                                              // 3795
                                                                                                                       // 3796
/**                                                                                                                    // 3797
 * Converts `value` to a plain object flattening inherited enumerable                                                  // 3798
 * properties of `value` to own properties of the plain object.                                                        // 3799
 *                                                                                                                     // 3800
 * @static                                                                                                             // 3801
 * @memberOf _                                                                                                         // 3802
 * @category Lang                                                                                                      // 3803
 * @param {*} value The value to convert.                                                                              // 3804
 * @returns {Object} Returns the converted plain object.                                                               // 3805
 * @example                                                                                                            // 3806
 *                                                                                                                     // 3807
 * function Foo() {                                                                                                    // 3808
 *   this.b = 2;                                                                                                       // 3809
 * }                                                                                                                   // 3810
 *                                                                                                                     // 3811
 * Foo.prototype.c = 3;                                                                                                // 3812
 *                                                                                                                     // 3813
 * _.assign({ 'a': 1 }, new Foo);                                                                                      // 3814
 * // => { 'a': 1, 'b': 2 }                                                                                            // 3815
 *                                                                                                                     // 3816
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));                                                                     // 3817
 * // => { 'a': 1, 'b': 2, 'c': 3 }                                                                                    // 3818
 */                                                                                                                    // 3819
function toPlainObject(value) {                                                                                        // 3820
  return baseCopy(value, keysIn(value));                                                                               // 3821
}                                                                                                                      // 3822
                                                                                                                       // 3823
module.exports = toPlainObject;                                                                                        // 3824
                                                                                                                       // 3825
},{"17":17,"54":54}],53:[function(require,module,exports){                                                             // 3826
var getNative = require(32),                                                                                           // 3827
    isArrayLike = require(36),                                                                                         // 3828
    isObject = require(49),                                                                                            // 3829
    shimKeys = require(41);                                                                                            // 3830
                                                                                                                       // 3831
/* Native method references for those with the same name as other `lodash` methods. */                                 // 3832
var nativeKeys = getNative(Object, 'keys');                                                                            // 3833
                                                                                                                       // 3834
/**                                                                                                                    // 3835
 * Creates an array of the own enumerable property names of `object`.                                                  // 3836
 *                                                                                                                     // 3837
 * **Note:** Non-object values are coerced to objects. See the                                                         // 3838
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)                                              // 3839
 * for more details.                                                                                                   // 3840
 *                                                                                                                     // 3841
 * @static                                                                                                             // 3842
 * @memberOf _                                                                                                         // 3843
 * @category Object                                                                                                    // 3844
 * @param {Object} object The object to query.                                                                         // 3845
 * @returns {Array} Returns the array of property names.                                                               // 3846
 * @example                                                                                                            // 3847
 *                                                                                                                     // 3848
 * function Foo() {                                                                                                    // 3849
 *   this.a = 1;                                                                                                       // 3850
 *   this.b = 2;                                                                                                       // 3851
 * }                                                                                                                   // 3852
 *                                                                                                                     // 3853
 * Foo.prototype.c = 3;                                                                                                // 3854
 *                                                                                                                     // 3855
 * _.keys(new Foo);                                                                                                    // 3856
 * // => ['a', 'b'] (iteration order is not guaranteed)                                                                // 3857
 *                                                                                                                     // 3858
 * _.keys('hi');                                                                                                       // 3859
 * // => ['0', '1']                                                                                                    // 3860
 */                                                                                                                    // 3861
var keys = !nativeKeys ? shimKeys : function(object) {                                                                 // 3862
  var Ctor = object == null ? undefined : object.constructor;                                                          // 3863
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||                                                      // 3864
      (typeof object != 'function' && isArrayLike(object))) {                                                          // 3865
    return shimKeys(object);                                                                                           // 3866
  }                                                                                                                    // 3867
  return isObject(object) ? nativeKeys(object) : [];                                                                   // 3868
};                                                                                                                     // 3869
                                                                                                                       // 3870
module.exports = keys;                                                                                                 // 3871
                                                                                                                       // 3872
},{"32":32,"36":36,"41":41,"49":49}],54:[function(require,module,exports){                                             // 3873
var isArguments = require(45),                                                                                         // 3874
    isArray = require(46),                                                                                             // 3875
    isIndex = require(37),                                                                                             // 3876
    isLength = require(39),                                                                                            // 3877
    isObject = require(49);                                                                                            // 3878
                                                                                                                       // 3879
/** Used for native method references. */                                                                              // 3880
var objectProto = Object.prototype;                                                                                    // 3881
                                                                                                                       // 3882
/** Used to check objects for own properties. */                                                                       // 3883
var hasOwnProperty = objectProto.hasOwnProperty;                                                                       // 3884
                                                                                                                       // 3885
/**                                                                                                                    // 3886
 * Creates an array of the own and inherited enumerable property names of `object`.                                    // 3887
 *                                                                                                                     // 3888
 * **Note:** Non-object values are coerced to objects.                                                                 // 3889
 *                                                                                                                     // 3890
 * @static                                                                                                             // 3891
 * @memberOf _                                                                                                         // 3892
 * @category Object                                                                                                    // 3893
 * @param {Object} object The object to query.                                                                         // 3894
 * @returns {Array} Returns the array of property names.                                                               // 3895
 * @example                                                                                                            // 3896
 *                                                                                                                     // 3897
 * function Foo() {                                                                                                    // 3898
 *   this.a = 1;                                                                                                       // 3899
 *   this.b = 2;                                                                                                       // 3900
 * }                                                                                                                   // 3901
 *                                                                                                                     // 3902
 * Foo.prototype.c = 3;                                                                                                // 3903
 *                                                                                                                     // 3904
 * _.keysIn(new Foo);                                                                                                  // 3905
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)                                                           // 3906
 */                                                                                                                    // 3907
function keysIn(object) {                                                                                              // 3908
  if (object == null) {                                                                                                // 3909
    return [];                                                                                                         // 3910
  }                                                                                                                    // 3911
  if (!isObject(object)) {                                                                                             // 3912
    object = Object(object);                                                                                           // 3913
  }                                                                                                                    // 3914
  var length = object.length;                                                                                          // 3915
  length = (length && isLength(length) &&                                                                              // 3916
    (isArray(object) || isArguments(object)) && length) || 0;                                                          // 3917
                                                                                                                       // 3918
  var Ctor = object.constructor,                                                                                       // 3919
      index = -1,                                                                                                      // 3920
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,                                                // 3921
      result = Array(length),                                                                                          // 3922
      skipIndexes = length > 0;                                                                                        // 3923
                                                                                                                       // 3924
  while (++index < length) {                                                                                           // 3925
    result[index] = (index + '');                                                                                      // 3926
  }                                                                                                                    // 3927
  for (var key in object) {                                                                                            // 3928
    if (!(skipIndexes && isIndex(key, length)) &&                                                                      // 3929
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {                                   // 3930
      result.push(key);                                                                                                // 3931
    }                                                                                                                  // 3932
  }                                                                                                                    // 3933
  return result;                                                                                                       // 3934
}                                                                                                                      // 3935
                                                                                                                       // 3936
module.exports = keysIn;                                                                                               // 3937
                                                                                                                       // 3938
},{"37":37,"39":39,"45":45,"46":46,"49":49}],55:[function(require,module,exports){                                     // 3939
var baseMerge = require(22),                                                                                           // 3940
    createAssigner = require(27);                                                                                      // 3941
                                                                                                                       // 3942
/**                                                                                                                    // 3943
 * Recursively merges own enumerable properties of the source object(s), that                                          // 3944
 * don't resolve to `undefined` into the destination object. Subsequent sources                                        // 3945
 * overwrite property assignments of previous sources. If `customizer` is                                              // 3946
 * provided it's invoked to produce the merged values of the destination and                                           // 3947
 * source properties. If `customizer` returns `undefined` merging is handled                                           // 3948
 * by the method instead. The `customizer` is bound to `thisArg` and invoked                                           // 3949
 * with five arguments: (objectValue, sourceValue, key, object, source).                                               // 3950
 *                                                                                                                     // 3951
 * @static                                                                                                             // 3952
 * @memberOf _                                                                                                         // 3953
 * @category Object                                                                                                    // 3954
 * @param {Object} object The destination object.                                                                      // 3955
 * @param {...Object} [sources] The source objects.                                                                    // 3956
 * @param {Function} [customizer] The function to customize assigned values.                                           // 3957
 * @param {*} [thisArg] The `this` binding of `customizer`.                                                            // 3958
 * @returns {Object} Returns `object`.                                                                                 // 3959
 * @example                                                                                                            // 3960
 *                                                                                                                     // 3961
 * var users = {                                                                                                       // 3962
 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]                                                                // 3963
 * };                                                                                                                  // 3964
 *                                                                                                                     // 3965
 * var ages = {                                                                                                        // 3966
 *   'data': [{ 'age': 36 }, { 'age': 40 }]                                                                            // 3967
 * };                                                                                                                  // 3968
 *                                                                                                                     // 3969
 * _.merge(users, ages);                                                                                               // 3970
 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }                                  // 3971
 *                                                                                                                     // 3972
 * // using a customizer callback                                                                                      // 3973
 * var object = {                                                                                                      // 3974
 *   'fruits': ['apple'],                                                                                              // 3975
 *   'vegetables': ['beet']                                                                                            // 3976
 * };                                                                                                                  // 3977
 *                                                                                                                     // 3978
 * var other = {                                                                                                       // 3979
 *   'fruits': ['banana'],                                                                                             // 3980
 *   'vegetables': ['carrot']                                                                                          // 3981
 * };                                                                                                                  // 3982
 *                                                                                                                     // 3983
 * _.merge(object, other, function(a, b) {                                                                             // 3984
 *   if (_.isArray(a)) {                                                                                               // 3985
 *     return a.concat(b);                                                                                             // 3986
 *   }                                                                                                                 // 3987
 * });                                                                                                                 // 3988
 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }                                           // 3989
 */                                                                                                                    // 3990
var merge = createAssigner(baseMerge);                                                                                 // 3991
                                                                                                                       // 3992
module.exports = merge;                                                                                                // 3993
                                                                                                                       // 3994
},{"22":22,"27":27}],56:[function(require,module,exports){                                                             // 3995
/**                                                                                                                    // 3996
 * This method returns the first argument provided to it.                                                              // 3997
 *                                                                                                                     // 3998
 * @static                                                                                                             // 3999
 * @memberOf _                                                                                                         // 4000
 * @category Utility                                                                                                   // 4001
 * @param {*} value Any value.                                                                                         // 4002
 * @returns {*} Returns `value`.                                                                                       // 4003
 * @example                                                                                                            // 4004
 *                                                                                                                     // 4005
 * var object = { 'user': 'fred' };                                                                                    // 4006
 *                                                                                                                     // 4007
 * _.identity(object) === object;                                                                                      // 4008
 * // => true                                                                                                          // 4009
 */                                                                                                                    // 4010
function identity(value) {                                                                                             // 4011
  return value;                                                                                                        // 4012
}                                                                                                                      // 4013
                                                                                                                       // 4014
module.exports = identity;                                                                                             // 4015
                                                                                                                       // 4016
},{}],57:[function(require,module,exports){                                                                            // 4017
(function (process){                                                                                                   // 4018
'use strict';                                                                                                          // 4019
                                                                                                                       // 4020
module.exports = AlgoliaSearch;                                                                                        // 4021
                                                                                                                       // 4022
// default debug activated in dev environments                                                                         // 4023
// this is triggered in package.json, using the envify transform                                                       // 4024
if ("production" === 'development') {                                                                                  // 4025
  require(6).enable('algoliasearch*');                                                                                 // 4026
}                                                                                                                      // 4027
                                                                                                                       // 4028
var errors = require(63);                                                                                              // 4029
                                                                                                                       // 4030
/*                                                                                                                     // 4031
 * Algolia Search library initialization                                                                               // 4032
 * https://www.algolia.com/                                                                                            // 4033
 *                                                                                                                     // 4034
 * @param {string} applicationID - Your applicationID, found in your dashboard                                         // 4035
 * @param {string} apiKey - Your API key, found in your dashboard                                                      // 4036
 * @param {Object} [opts]                                                                                              // 4037
 * @param {number} [opts.timeout=2000] - The request timeout set in milliseconds,                                      // 4038
 * another request will be issued after this timeout                                                                   // 4039
 * @param {string} [opts.protocol='http:'] - The protocol used to query Algolia Search API.                            // 4040
 *                                        Set to 'https:' to force using https.                                        // 4041
 *                                        Default to document.location.protocol in browsers                            // 4042
 * @param {Object|Array} [opts.hosts={                                                                                 // 4043
 *           read: [this.applicationID + '-dsn.algolia.net'].concat([                                                  // 4044
 *             this.applicationID + '-1.algolianet.com',                                                               // 4045
 *             this.applicationID + '-2.algolianet.com',                                                               // 4046
 *             this.applicationID + '-3.algolianet.com']                                                               // 4047
 *           ]),                                                                                                       // 4048
 *           write: [this.applicationID + '.algolia.net'].concat([                                                     // 4049
 *             this.applicationID + '-1.algolianet.com',                                                               // 4050
 *             this.applicationID + '-2.algolianet.com',                                                               // 4051
 *             this.applicationID + '-3.algolianet.com']                                                               // 4052
 *           ]) - The hosts to use for Algolia Search API.                                                             // 4053
 *           If you provide them, you will less benefit from our HA implementation                                     // 4054
 */                                                                                                                    // 4055
function AlgoliaSearch(applicationID, apiKey, opts) {                                                                  // 4056
  var debug = require(6)('algoliasearch');                                                                             // 4057
                                                                                                                       // 4058
  var clone = require(43);                                                                                             // 4059
  var isArray = require(46);                                                                                           // 4060
                                                                                                                       // 4061
  var usage = 'Usage: algoliasearch(applicationID, apiKey, opts)';                                                     // 4062
                                                                                                                       // 4063
  if (!applicationID) {                                                                                                // 4064
    throw new errors.AlgoliaSearchError('Please provide an application ID. ' + usage);                                 // 4065
  }                                                                                                                    // 4066
                                                                                                                       // 4067
  if (!apiKey) {                                                                                                       // 4068
    throw new errors.AlgoliaSearchError('Please provide an API key. ' + usage);                                        // 4069
  }                                                                                                                    // 4070
                                                                                                                       // 4071
  this.applicationID = applicationID;                                                                                  // 4072
  this.apiKey = apiKey;                                                                                                // 4073
                                                                                                                       // 4074
  var defaultHosts = [                                                                                                 // 4075
    this.applicationID + '-1.algolianet.com',                                                                          // 4076
    this.applicationID + '-2.algolianet.com',                                                                          // 4077
    this.applicationID + '-3.algolianet.com'                                                                           // 4078
  ];                                                                                                                   // 4079
  this.hosts = {                                                                                                       // 4080
    read: [],                                                                                                          // 4081
    write: []                                                                                                          // 4082
  };                                                                                                                   // 4083
                                                                                                                       // 4084
  this.hostIndex = {                                                                                                   // 4085
    read: 0,                                                                                                           // 4086
    write: 0                                                                                                           // 4087
  };                                                                                                                   // 4088
                                                                                                                       // 4089
  opts = opts || {};                                                                                                   // 4090
                                                                                                                       // 4091
  var protocol = opts.protocol || 'https:';                                                                            // 4092
  var timeout = opts.timeout === undefined ? 2000 : opts.timeout;                                                      // 4093
                                                                                                                       // 4094
  // while we advocate for colon-at-the-end values: 'http:' for `opts.protocol`                                        // 4095
  // we also accept `http` and `https`. It's a common error.                                                           // 4096
  if (!/:$/.test(protocol)) {                                                                                          // 4097
    protocol = protocol + ':';                                                                                         // 4098
  }                                                                                                                    // 4099
                                                                                                                       // 4100
  if (opts.protocol !== 'http:' && opts.protocol !== 'https:') {                                                       // 4101
    throw new errors.AlgoliaSearchError('protocol must be `http:` or `https:` (was `' + opts.protocol + '`)');         // 4102
  }                                                                                                                    // 4103
                                                                                                                       // 4104
  // no hosts given, add defaults                                                                                      // 4105
  if (!opts.hosts) {                                                                                                   // 4106
    this.hosts.read = [this.applicationID + '-dsn.algolia.net'].concat(defaultHosts);                                  // 4107
    this.hosts.write = [this.applicationID + '.algolia.net'].concat(defaultHosts);                                     // 4108
  } else if (isArray(opts.hosts)) {                                                                                    // 4109
    this.hosts.read = clone(opts.hosts);                                                                               // 4110
    this.hosts.write = clone(opts.hosts);                                                                              // 4111
  } else {                                                                                                             // 4112
    this.hosts.read = clone(opts.hosts.read);                                                                          // 4113
    this.hosts.write = clone(opts.hosts.write);                                                                        // 4114
  }                                                                                                                    // 4115
                                                                                                                       // 4116
  // add protocol and lowercase hosts                                                                                  // 4117
  this.hosts.read = map(this.hosts.read, prepareHost(protocol));                                                       // 4118
  this.hosts.write = map(this.hosts.write, prepareHost(protocol));                                                     // 4119
  this.requestTimeout = timeout;                                                                                       // 4120
                                                                                                                       // 4121
  this.extraHeaders = [];                                                                                              // 4122
  this.cache = {};                                                                                                     // 4123
                                                                                                                       // 4124
  this._ua = opts._ua;                                                                                                 // 4125
  this._useCache = opts._useCache === undefined ? true : opts._useCache;                                               // 4126
                                                                                                                       // 4127
  this._setTimeout = opts._setTimeout;                                                                                 // 4128
                                                                                                                       // 4129
  debug('init done, %j', this);                                                                                        // 4130
}                                                                                                                      // 4131
                                                                                                                       // 4132
AlgoliaSearch.prototype = {                                                                                            // 4133
  /*                                                                                                                   // 4134
   * Delete an index                                                                                                   // 4135
   *                                                                                                                   // 4136
   * @param indexName the name of index to delete                                                                      // 4137
   * @param callback the result callback called with two arguments                                                     // 4138
   *  error: null or Error('message')                                                                                  // 4139
   *  content: the server answer that contains the task ID                                                             // 4140
   */                                                                                                                  // 4141
  deleteIndex: function(indexName, callback) {                                                                         // 4142
    return this._jsonRequest({                                                                                         // 4143
      method: 'DELETE',                                                                                                // 4144
      url: '/1/indexes/' + encodeURIComponent(indexName),                                                              // 4145
      hostType: 'write',                                                                                               // 4146
      callback: callback                                                                                               // 4147
    });                                                                                                                // 4148
  },                                                                                                                   // 4149
  /**                                                                                                                  // 4150
   * Move an existing index.                                                                                           // 4151
   * @param srcIndexName the name of index to copy.                                                                    // 4152
   * @param dstIndexName the new index name that will contains a copy of                                               // 4153
   * srcIndexName (destination will be overriten if it already exist).                                                 // 4154
   * @param callback the result callback called with two arguments                                                     // 4155
   *  error: null or Error('message')                                                                                  // 4156
   *  content: the server answer that contains the task ID                                                             // 4157
   */                                                                                                                  // 4158
  moveIndex: function(srcIndexName, dstIndexName, callback) {                                                          // 4159
    var postObj = {                                                                                                    // 4160
      operation: 'move', destination: dstIndexName                                                                     // 4161
    };                                                                                                                 // 4162
    return this._jsonRequest({                                                                                         // 4163
      method: 'POST',                                                                                                  // 4164
      url: '/1/indexes/' + encodeURIComponent(srcIndexName) + '/operation',                                            // 4165
      body: postObj,                                                                                                   // 4166
      hostType: 'write',                                                                                               // 4167
      callback: callback                                                                                               // 4168
    });                                                                                                                // 4169
  },                                                                                                                   // 4170
  /**                                                                                                                  // 4171
   * Copy an existing index.                                                                                           // 4172
   * @param srcIndexName the name of index to copy.                                                                    // 4173
   * @param dstIndexName the new index name that will contains a copy                                                  // 4174
   * of srcIndexName (destination will be overriten if it already exist).                                              // 4175
   * @param callback the result callback called with two arguments                                                     // 4176
   *  error: null or Error('message')                                                                                  // 4177
   *  content: the server answer that contains the task ID                                                             // 4178
   */                                                                                                                  // 4179
  copyIndex: function(srcIndexName, dstIndexName, callback) {                                                          // 4180
    var postObj = {                                                                                                    // 4181
      operation: 'copy', destination: dstIndexName                                                                     // 4182
    };                                                                                                                 // 4183
    return this._jsonRequest({                                                                                         // 4184
      method: 'POST',                                                                                                  // 4185
      url: '/1/indexes/' + encodeURIComponent(srcIndexName) + '/operation',                                            // 4186
      body: postObj,                                                                                                   // 4187
      hostType: 'write',                                                                                               // 4188
      callback: callback                                                                                               // 4189
    });                                                                                                                // 4190
  },                                                                                                                   // 4191
  /**                                                                                                                  // 4192
   * Return last log entries.                                                                                          // 4193
   * @param offset Specify the first entry to retrieve (0-based, 0 is the most recent log entry).                      // 4194
   * @param length Specify the maximum number of entries to retrieve starting                                          // 4195
   * at offset. Maximum allowed value: 1000.                                                                           // 4196
   * @param callback the result callback called with two arguments                                                     // 4197
   *  error: null or Error('message')                                                                                  // 4198
   *  content: the server answer that contains the task ID                                                             // 4199
   */                                                                                                                  // 4200
  getLogs: function(offset, length, callback) {                                                                        // 4201
    if (arguments.length === 0 || typeof offset === 'function') {                                                      // 4202
      // getLogs([cb])                                                                                                 // 4203
      callback = offset;                                                                                               // 4204
      offset = 0;                                                                                                      // 4205
      length = 10;                                                                                                     // 4206
    } else if (arguments.length === 1 || typeof length === 'function') {                                               // 4207
      // getLogs(1, [cb)]                                                                                              // 4208
      callback = length;                                                                                               // 4209
      length = 10;                                                                                                     // 4210
    }                                                                                                                  // 4211
                                                                                                                       // 4212
    return this._jsonRequest({                                                                                         // 4213
      method: 'GET',                                                                                                   // 4214
      url: '/1/logs?offset=' + offset + '&length=' + length,                                                           // 4215
      hostType: 'read',                                                                                                // 4216
      callback: callback                                                                                               // 4217
    });                                                                                                                // 4218
  },                                                                                                                   // 4219
  /*                                                                                                                   // 4220
   * List all existing indexes (paginated)                                                                             // 4221
   *                                                                                                                   // 4222
   * @param page The page to retrieve, starting at 0.                                                                  // 4223
   * @param callback the result callback called with two arguments                                                     // 4224
   *  error: null or Error('message')                                                                                  // 4225
   *  content: the server answer with index list                                                                       // 4226
   */                                                                                                                  // 4227
  listIndexes: function(page, callback) {                                                                              // 4228
    var params = '';                                                                                                   // 4229
                                                                                                                       // 4230
    if (page === undefined || typeof page === 'function') {                                                            // 4231
      callback = page;                                                                                                 // 4232
    } else {                                                                                                           // 4233
      params = '?page=' + page;                                                                                        // 4234
    }                                                                                                                  // 4235
                                                                                                                       // 4236
    return this._jsonRequest({                                                                                         // 4237
      method: 'GET',                                                                                                   // 4238
      url: '/1/indexes' + params,                                                                                      // 4239
      hostType: 'read',                                                                                                // 4240
      callback: callback                                                                                               // 4241
    });                                                                                                                // 4242
  },                                                                                                                   // 4243
                                                                                                                       // 4244
  /*                                                                                                                   // 4245
   * Get the index object initialized                                                                                  // 4246
   *                                                                                                                   // 4247
   * @param indexName the name of index                                                                                // 4248
   * @param callback the result callback with one argument (the Index instance)                                        // 4249
   */                                                                                                                  // 4250
  initIndex: function(indexName) {                                                                                     // 4251
    return new this.Index(this, indexName);                                                                            // 4252
  },                                                                                                                   // 4253
  /*                                                                                                                   // 4254
   * List all existing user keys with their associated ACLs                                                            // 4255
   *                                                                                                                   // 4256
   * @param callback the result callback called with two arguments                                                     // 4257
   *  error: null or Error('message')                                                                                  // 4258
   *  content: the server answer with user keys list                                                                   // 4259
   */                                                                                                                  // 4260
  listUserKeys: function(callback) {                                                                                   // 4261
    return this._jsonRequest({                                                                                         // 4262
      method: 'GET',                                                                                                   // 4263
      url: '/1/keys',                                                                                                  // 4264
      hostType: 'read',                                                                                                // 4265
      callback: callback                                                                                               // 4266
    });                                                                                                                // 4267
  },                                                                                                                   // 4268
  /*                                                                                                                   // 4269
   * Get ACL of a user key                                                                                             // 4270
   *                                                                                                                   // 4271
   * @param key                                                                                                        // 4272
   * @param callback the result callback called with two arguments                                                     // 4273
   *  error: null or Error('message')                                                                                  // 4274
   *  content: the server answer with user keys list                                                                   // 4275
   */                                                                                                                  // 4276
  getUserKeyACL: function(key, callback) {                                                                             // 4277
    return this._jsonRequest({                                                                                         // 4278
      method: 'GET',                                                                                                   // 4279
      url: '/1/keys/' + key,                                                                                           // 4280
      hostType: 'read',                                                                                                // 4281
      callback: callback                                                                                               // 4282
    });                                                                                                                // 4283
  },                                                                                                                   // 4284
  /*                                                                                                                   // 4285
   * Delete an existing user key                                                                                       // 4286
   * @param key                                                                                                        // 4287
   * @param callback the result callback called with two arguments                                                     // 4288
   *  error: null or Error('message')                                                                                  // 4289
   *  content: the server answer with user keys list                                                                   // 4290
   */                                                                                                                  // 4291
  deleteUserKey: function(key, callback) {                                                                             // 4292
    return this._jsonRequest({                                                                                         // 4293
      method: 'DELETE',                                                                                                // 4294
      url: '/1/keys/' + key,                                                                                           // 4295
      hostType: 'write',                                                                                               // 4296
      callback: callback                                                                                               // 4297
    });                                                                                                                // 4298
  },                                                                                                                   // 4299
  /*                                                                                                                   // 4300
   * Add a new global API key                                                                                          // 4301
   *                                                                                                                   // 4302
   * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that                        // 4303
   *   can contains the following values:                                                                              // 4304
   *     - search: allow to search (https and http)                                                                    // 4305
   *     - addObject: allows to add/update an object in the index (https only)                                         // 4306
   *     - deleteObject : allows to delete an existing object (https only)                                             // 4307
   *     - deleteIndex : allows to delete index content (https only)                                                   // 4308
   *     - settings : allows to get index settings (https only)                                                        // 4309
   *     - editSettings : allows to change index settings (https only)                                                 // 4310
   * @param {Object} [params] - Optionnal parameters to set for the key                                                // 4311
   * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
   * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour           // 4313
   * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call                     // 4314
   * @param {string[]} params.indexes - Allowed targeted indexes for this key                                          // 4315
   * @param {string} params.description - A description for your key                                                   // 4316
   * @param {string[]} params.referers - A list of authorized referers                                                 // 4317
   * @param {Object} params.queryParameters - Force the key to use specific query parameters                           // 4318
   * @param {Function} callback - The result callback called with two arguments                                        // 4319
   *   error: null or Error('message')                                                                                 // 4320
   *   content: the server answer with user keys list                                                                  // 4321
   * @return {Promise|undefined} Returns a promise if no callback given                                                // 4322
   * @example                                                                                                          // 4323
   * client.addUserKey(['search'], {                                                                                   // 4324
   *   validity: 300,                                                                                                  // 4325
   *   maxQueriesPerIPPerHour: 2000,                                                                                   // 4326
   *   maxHitsPerQuery: 3,                                                                                             // 4327
   *   indexes: ['fruits'],                                                                                            // 4328
   *   description: 'Eat three fruits',                                                                                // 4329
   *   referers: ['*.algolia.com'],                                                                                    // 4330
   *   queryParameters: {                                                                                              // 4331
   *     tagFilters: ['public'],                                                                                       // 4332
   *   }                                                                                                               // 4333
   * })                                                                                                                // 4334
   * @see {@link https://www.algolia.com/doc/rest_api#AddKey|Algolia REST API Documentation}                           // 4335
   */                                                                                                                  // 4336
  addUserKey: function(acls, params, callback) {                                                                       // 4337
    var isArray = require(46);                                                                                         // 4338
    var usage = 'Usage: client.addUserKey(arrayOfAcls[, params, callback])';                                           // 4339
                                                                                                                       // 4340
    if (!isArray(acls)) {                                                                                              // 4341
      throw new Error(usage);                                                                                          // 4342
    }                                                                                                                  // 4343
                                                                                                                       // 4344
    if (arguments.length === 1 || typeof params === 'function') {                                                      // 4345
      callback = params;                                                                                               // 4346
      params = null;                                                                                                   // 4347
    }                                                                                                                  // 4348
                                                                                                                       // 4349
    var postObj = {                                                                                                    // 4350
      acl: acls                                                                                                        // 4351
    };                                                                                                                 // 4352
                                                                                                                       // 4353
    if (params) {                                                                                                      // 4354
      postObj.validity = params.validity;                                                                              // 4355
      postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;                                                  // 4356
      postObj.maxHitsPerQuery = params.maxHitsPerQuery;                                                                // 4357
      postObj.indexes = params.indexes;                                                                                // 4358
      postObj.description = params.description;                                                                        // 4359
                                                                                                                       // 4360
      if (params.queryParameters) {                                                                                    // 4361
        postObj.queryParameters = this._getSearchParams(params.queryParameters, '');                                   // 4362
      }                                                                                                                // 4363
                                                                                                                       // 4364
      postObj.referers = params.referers;                                                                              // 4365
    }                                                                                                                  // 4366
                                                                                                                       // 4367
    return this._jsonRequest({                                                                                         // 4368
      method: 'POST',                                                                                                  // 4369
      url: '/1/keys',                                                                                                  // 4370
      body: postObj,                                                                                                   // 4371
      hostType: 'write',                                                                                               // 4372
      callback: callback                                                                                               // 4373
    });                                                                                                                // 4374
  },                                                                                                                   // 4375
  /**                                                                                                                  // 4376
   * Add a new global API key                                                                                          // 4377
   * @deprecated Please use client.addUserKey()                                                                        // 4378
   */                                                                                                                  // 4379
  addUserKeyWithValidity: deprecate(function(acls, params, callback) {                                                 // 4380
    return this.addUserKey(acls, params, callback);                                                                    // 4381
  }, deprecatedMessage('client.addUserKeyWithValidity()', 'client.addUserKey()')),                                     // 4382
                                                                                                                       // 4383
  /**                                                                                                                  // 4384
   * Update an existing API key                                                                                        // 4385
   * @param {string} key - The key to update                                                                           // 4386
   * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that                        // 4387
   *   can contains the following values:                                                                              // 4388
   *     - search: allow to search (https and http)                                                                    // 4389
   *     - addObject: allows to add/update an object in the index (https only)                                         // 4390
   *     - deleteObject : allows to delete an existing object (https only)                                             // 4391
   *     - deleteIndex : allows to delete index content (https only)                                                   // 4392
   *     - settings : allows to get index settings (https only)                                                        // 4393
   *     - editSettings : allows to change index settings (https only)                                                 // 4394
   * @param {Object} [params] - Optionnal parameters to set for the key                                                // 4395
   * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
   * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour           // 4397
   * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call                     // 4398
   * @param {string[]} params.indexes - Allowed targeted indexes for this key                                          // 4399
   * @param {string} params.description - A description for your key                                                   // 4400
   * @param {string[]} params.referers - A list of authorized referers                                                 // 4401
   * @param {Object} params.queryParameters - Force the key to use specific query parameters                           // 4402
   * @param {Function} callback - The result callback called with two arguments                                        // 4403
   *   error: null or Error('message')                                                                                 // 4404
   *   content: the server answer with user keys list                                                                  // 4405
   * @return {Promise|undefined} Returns a promise if no callback given                                                // 4406
   * @example                                                                                                          // 4407
   * client.updateUserKey('APIKEY', ['search'], {                                                                      // 4408
   *   validity: 300,                                                                                                  // 4409
   *   maxQueriesPerIPPerHour: 2000,                                                                                   // 4410
   *   maxHitsPerQuery: 3,                                                                                             // 4411
   *   indexes: ['fruits'],                                                                                            // 4412
   *   description: 'Eat three fruits',                                                                                // 4413
   *   referers: ['*.algolia.com'],                                                                                    // 4414
   *   queryParameters: {                                                                                              // 4415
   *     tagFilters: ['public'],                                                                                       // 4416
   *   }                                                                                                               // 4417
   * })                                                                                                                // 4418
   * @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}                   // 4419
   */                                                                                                                  // 4420
  updateUserKey: function(key, acls, params, callback) {                                                               // 4421
    var isArray = require(46);                                                                                         // 4422
    var usage = 'Usage: client.updateUserKey(key, arrayOfAcls[, params, callback])';                                   // 4423
                                                                                                                       // 4424
    if (!isArray(acls)) {                                                                                              // 4425
      throw new Error(usage);                                                                                          // 4426
    }                                                                                                                  // 4427
                                                                                                                       // 4428
    if (arguments.length === 2 || typeof params === 'function') {                                                      // 4429
      callback = params;                                                                                               // 4430
      params = null;                                                                                                   // 4431
    }                                                                                                                  // 4432
                                                                                                                       // 4433
    var putObj = {                                                                                                     // 4434
      acl: acls                                                                                                        // 4435
    };                                                                                                                 // 4436
                                                                                                                       // 4437
    if (params) {                                                                                                      // 4438
      putObj.validity = params.validity;                                                                               // 4439
      putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;                                                   // 4440
      putObj.maxHitsPerQuery = params.maxHitsPerQuery;                                                                 // 4441
      putObj.indexes = params.indexes;                                                                                 // 4442
      putObj.description = params.description;                                                                         // 4443
                                                                                                                       // 4444
      if (params.queryParameters) {                                                                                    // 4445
        putObj.queryParameters = this._getSearchParams(params.queryParameters, '');                                    // 4446
      }                                                                                                                // 4447
                                                                                                                       // 4448
      putObj.referers = params.referers;                                                                               // 4449
    }                                                                                                                  // 4450
                                                                                                                       // 4451
    return this._jsonRequest({                                                                                         // 4452
      method: 'PUT',                                                                                                   // 4453
      url: '/1/keys/' + key,                                                                                           // 4454
      body: putObj,                                                                                                    // 4455
      hostType: 'write',                                                                                               // 4456
      callback: callback                                                                                               // 4457
    });                                                                                                                // 4458
  },                                                                                                                   // 4459
                                                                                                                       // 4460
  /**                                                                                                                  // 4461
   * Set the extra security tagFilters header                                                                          // 4462
   * @param {string|array} tags The list of tags defining the current security filters                                 // 4463
   */                                                                                                                  // 4464
  setSecurityTags: function(tags) {                                                                                    // 4465
    if (Object.prototype.toString.call(tags) === '[object Array]') {                                                   // 4466
      var strTags = [];                                                                                                // 4467
      for (var i = 0; i < tags.length; ++i) {                                                                          // 4468
        if (Object.prototype.toString.call(tags[i]) === '[object Array]') {                                            // 4469
          var oredTags = [];                                                                                           // 4470
          for (var j = 0; j < tags[i].length; ++j) {                                                                   // 4471
            oredTags.push(tags[i][j]);                                                                                 // 4472
          }                                                                                                            // 4473
          strTags.push('(' + oredTags.join(',') + ')');                                                                // 4474
        } else {                                                                                                       // 4475
          strTags.push(tags[i]);                                                                                       // 4476
        }                                                                                                              // 4477
      }                                                                                                                // 4478
      tags = strTags.join(',');                                                                                        // 4479
    }                                                                                                                  // 4480
                                                                                                                       // 4481
    this.securityTags = tags;                                                                                          // 4482
  },                                                                                                                   // 4483
                                                                                                                       // 4484
  /**                                                                                                                  // 4485
   * Set the extra user token header                                                                                   // 4486
   * @param {string} userToken The token identifying a uniq user (used to apply rate limits)                           // 4487
   */                                                                                                                  // 4488
  setUserToken: function(userToken) {                                                                                  // 4489
    this.userToken = userToken;                                                                                        // 4490
  },                                                                                                                   // 4491
                                                                                                                       // 4492
  /**                                                                                                                  // 4493
   * Initialize a new batch of search queries                                                                          // 4494
   * @deprecated use client.search()                                                                                   // 4495
   */                                                                                                                  // 4496
  startQueriesBatch: deprecate(function startQueriesBatchDeprecated() {                                                // 4497
    this._batch = [];                                                                                                  // 4498
  }, deprecatedMessage('client.startQueriesBatch()', 'client.search()')),                                              // 4499
                                                                                                                       // 4500
  /**                                                                                                                  // 4501
   * Add a search query in the batch                                                                                   // 4502
   * @deprecated use client.search()                                                                                   // 4503
   */                                                                                                                  // 4504
  addQueryInBatch: deprecate(function addQueryInBatchDeprecated(indexName, query, args) {                              // 4505
    this._batch.push({                                                                                                 // 4506
      indexName: indexName,                                                                                            // 4507
      query: query,                                                                                                    // 4508
      params: args                                                                                                     // 4509
    });                                                                                                                // 4510
  }, deprecatedMessage('client.addQueryInBatch()', 'client.search()')),                                                // 4511
                                                                                                                       // 4512
  /**                                                                                                                  // 4513
   * Clear all queries in client's cache                                                                               // 4514
   * @return undefined                                                                                                 // 4515
   */                                                                                                                  // 4516
  clearCache: function() {                                                                                             // 4517
    this.cache = {};                                                                                                   // 4518
  },                                                                                                                   // 4519
                                                                                                                       // 4520
  /**                                                                                                                  // 4521
   * Launch the batch of queries using XMLHttpRequest.                                                                 // 4522
   * @deprecated use client.search()                                                                                   // 4523
   */                                                                                                                  // 4524
  sendQueriesBatch: deprecate(function sendQueriesBatchDeprecated(callback) {                                          // 4525
    return this.search(this._batch, callback);                                                                         // 4526
  }, deprecatedMessage('client.sendQueriesBatch()', 'client.search()')),                                               // 4527
                                                                                                                       // 4528
  /**                                                                                                                  // 4529
  * Set the number of milliseconds a request can take before automatically being terminated.                           // 4530
  *                                                                                                                    // 4531
  * @param {Number} milliseconds                                                                                       // 4532
  */                                                                                                                   // 4533
  setRequestTimeout: function(milliseconds) {                                                                          // 4534
    if (milliseconds) {                                                                                                // 4535
      this.requestTimeout = parseInt(milliseconds, 10);                                                                // 4536
    }                                                                                                                  // 4537
  },                                                                                                                   // 4538
                                                                                                                       // 4539
  /**                                                                                                                  // 4540
   * Search through multiple indices at the same time                                                                  // 4541
   * @param  {Object[]}   queries  An array of queries you want to run.                                                // 4542
   * @param {string} queries[].indexName The index name you want to target                                             // 4543
   * @param {string} [queries[].query] The query to issue on this index. Can also be passed into `params`              // 4544
   * @param {Object} queries[].params Any search param like hitsPerPage, ..                                            // 4545
   * @param  {Function} callback Callback to be called                                                                 // 4546
   * @return {Promise|undefined} Returns a promise if no callback given                                                // 4547
   */                                                                                                                  // 4548
  search: function(queries, callback) {                                                                                // 4549
    var isArray = require(46);                                                                                         // 4550
    var usage = 'Usage: client.search(arrayOfQueries[, callback])';                                                    // 4551
                                                                                                                       // 4552
    if (!isArray(queries)) {                                                                                           // 4553
      throw new Error(usage);                                                                                          // 4554
    }                                                                                                                  // 4555
                                                                                                                       // 4556
    var client = this;                                                                                                 // 4557
                                                                                                                       // 4558
    var postObj = {                                                                                                    // 4559
      requests: map(queries, function prepareRequest(query) {                                                          // 4560
        var params = '';                                                                                               // 4561
                                                                                                                       // 4562
        // allow query.query                                                                                           // 4563
        // so we are mimicing the index.search(query, params) method                                                   // 4564
        // {indexName:, query:, params:}                                                                               // 4565
        if (query.query !== undefined) {                                                                               // 4566
          params += 'query=' + encodeURIComponent(query.query);                                                        // 4567
        }                                                                                                              // 4568
                                                                                                                       // 4569
        return {                                                                                                       // 4570
          indexName: query.indexName,                                                                                  // 4571
          params: client._getSearchParams(query.params, params)                                                        // 4572
        };                                                                                                             // 4573
      })                                                                                                               // 4574
    };                                                                                                                 // 4575
                                                                                                                       // 4576
    return this._jsonRequest({                                                                                         // 4577
      cache: this.cache,                                                                                               // 4578
      method: 'POST',                                                                                                  // 4579
      url: '/1/indexes/*/queries',                                                                                     // 4580
      body: postObj,                                                                                                   // 4581
      hostType: 'read',                                                                                                // 4582
      callback: callback                                                                                               // 4583
    });                                                                                                                // 4584
  },                                                                                                                   // 4585
                                                                                                                       // 4586
  /**                                                                                                                  // 4587
   * Perform write operations accross multiple indexes.                                                                // 4588
   *                                                                                                                   // 4589
   * To reduce the amount of time spent on network round trips,                                                        // 4590
   * you can create, update, or delete several objects in one call,                                                    // 4591
   * using the batch endpoint (all operations are done in the given order).                                            // 4592
   *                                                                                                                   // 4593
   * Available actions:                                                                                                // 4594
   *   - addObject                                                                                                     // 4595
   *   - updateObject                                                                                                  // 4596
   *   - partialUpdateObject                                                                                           // 4597
   *   - partialUpdateObjectNoCreate                                                                                   // 4598
   *   - deleteObject                                                                                                  // 4599
   *                                                                                                                   // 4600
   * https://www.algolia.com/doc/rest_api#Indexes                                                                      // 4601
   * @param  {Object[]} operations An array of operations to perform                                                   // 4602
   * @return {Promise|undefined} Returns a promise if no callback given                                                // 4603
   * @example                                                                                                          // 4604
   * client.batch([{                                                                                                   // 4605
   *   action: 'addObject',                                                                                            // 4606
   *   indexName: 'clients',                                                                                           // 4607
   *   body: {                                                                                                         // 4608
   *     name: 'Bill'                                                                                                  // 4609
   *   }                                                                                                               // 4610
   * }, {                                                                                                              // 4611
   *   action: 'udpateObject',                                                                                         // 4612
   *   indexName: 'fruits',                                                                                            // 4613
   *   body: {                                                                                                         // 4614
   *     objectID: '29138',                                                                                            // 4615
   *     name: 'banana'                                                                                                // 4616
   *   }                                                                                                               // 4617
   * }], cb)                                                                                                           // 4618
   */                                                                                                                  // 4619
  batch: function(operations, callback) {                                                                              // 4620
    var isArray = require(46);                                                                                         // 4621
    var usage = 'Usage: client.batch(operations[, callback])';                                                         // 4622
                                                                                                                       // 4623
    if (!isArray(operations)) {                                                                                        // 4624
      throw new Error(usage);                                                                                          // 4625
    }                                                                                                                  // 4626
                                                                                                                       // 4627
    return this._jsonRequest({                                                                                         // 4628
      method: 'POST',                                                                                                  // 4629
      url: '/1/indexes/*/batch',                                                                                       // 4630
      body: {                                                                                                          // 4631
        requests: operations                                                                                           // 4632
      },                                                                                                               // 4633
      hostType: 'write',                                                                                               // 4634
      callback: callback                                                                                               // 4635
    });                                                                                                                // 4636
  },                                                                                                                   // 4637
                                                                                                                       // 4638
  // environment specific methods                                                                                      // 4639
  destroy: notImplemented,                                                                                             // 4640
  enableRateLimitForward: notImplemented,                                                                              // 4641
  disableRateLimitForward: notImplemented,                                                                             // 4642
  useSecuredAPIKey: notImplemented,                                                                                    // 4643
  disableSecuredAPIKey: notImplemented,                                                                                // 4644
  generateSecuredApiKey: notImplemented,                                                                               // 4645
  /*                                                                                                                   // 4646
   * Index class constructor.                                                                                          // 4647
   * You should not use this method directly but use initIndex() function                                              // 4648
   */                                                                                                                  // 4649
  Index: function(algoliasearch, indexName) {                                                                          // 4650
    this.indexName = indexName;                                                                                        // 4651
    this.as = algoliasearch;                                                                                           // 4652
    this.typeAheadArgs = null;                                                                                         // 4653
    this.typeAheadValueOption = null;                                                                                  // 4654
                                                                                                                       // 4655
    // make sure every index instance has it's own cache                                                               // 4656
    this.cache = {};                                                                                                   // 4657
  },                                                                                                                   // 4658
  /**                                                                                                                  // 4659
  * Add an extra field to the HTTP request                                                                             // 4660
  *                                                                                                                    // 4661
  * @param name the header field name                                                                                  // 4662
  * @param value the header field value                                                                                // 4663
  */                                                                                                                   // 4664
  setExtraHeader: function(name, value) {                                                                              // 4665
    this.extraHeaders.push({                                                                                           // 4666
      name: name.toLowerCase(), value: value                                                                           // 4667
    });                                                                                                                // 4668
  },                                                                                                                   // 4669
                                                                                                                       // 4670
  /**                                                                                                                  // 4671
  * Augment sent x-algolia-agent with more data, each agent part                                                       // 4672
  * is automatically separated from the others by a semicolon;                                                         // 4673
  *                                                                                                                    // 4674
  * @param algoliaAgent the agent to add                                                                               // 4675
  */                                                                                                                   // 4676
  addAlgoliaAgent: function(algoliaAgent) {                                                                            // 4677
    this._ua += ';' + algoliaAgent;                                                                                    // 4678
  },                                                                                                                   // 4679
                                                                                                                       // 4680
  _sendQueriesBatch: function(params, callback) {                                                                      // 4681
    function prepareParams() {                                                                                         // 4682
      var reqParams = '';                                                                                              // 4683
      for (var i = 0; i < params.requests.length; ++i) {                                                               // 4684
        var q = '/1/indexes/' +                                                                                        // 4685
          encodeURIComponent(params.requests[i].indexName) +                                                           // 4686
          '?' + params.requests[i].params;                                                                             // 4687
        reqParams += i + '=' + encodeURIComponent(q) + '&';                                                            // 4688
      }                                                                                                                // 4689
      return reqParams;                                                                                                // 4690
    }                                                                                                                  // 4691
                                                                                                                       // 4692
    return this._jsonRequest({                                                                                         // 4693
      cache: this.cache,                                                                                               // 4694
      method: 'POST',                                                                                                  // 4695
      url: '/1/indexes/*/queries',                                                                                     // 4696
      body: params,                                                                                                    // 4697
      hostType: 'read',                                                                                                // 4698
      fallback: {                                                                                                      // 4699
        method: 'GET',                                                                                                 // 4700
        url: '/1/indexes/*',                                                                                           // 4701
        body: {                                                                                                        // 4702
          params: prepareParams()                                                                                      // 4703
        }                                                                                                              // 4704
      },                                                                                                               // 4705
      callback: callback                                                                                               // 4706
    });                                                                                                                // 4707
  },                                                                                                                   // 4708
  /*                                                                                                                   // 4709
   * Wrapper that try all hosts to maximize the quality of service                                                     // 4710
   */                                                                                                                  // 4711
  _jsonRequest: function(opts) {                                                                                       // 4712
    var requestDebug = require(6)('algoliasearch:' + opts.url);                                                        // 4713
                                                                                                                       // 4714
    var body;                                                                                                          // 4715
    var cache = opts.cache;                                                                                            // 4716
    var client = this;                                                                                                 // 4717
    var tries = 0;                                                                                                     // 4718
    var usingFallback = false;                                                                                         // 4719
                                                                                                                       // 4720
    if (opts.body !== undefined) {                                                                                     // 4721
      body = safeJSONStringify(opts.body);                                                                             // 4722
    }                                                                                                                  // 4723
                                                                                                                       // 4724
    requestDebug('request start');                                                                                     // 4725
                                                                                                                       // 4726
    function doRequest(requester, reqOpts) {                                                                           // 4727
      var cacheID;                                                                                                     // 4728
                                                                                                                       // 4729
      if (client._useCache) {                                                                                          // 4730
        cacheID = opts.url;                                                                                            // 4731
      }                                                                                                                // 4732
                                                                                                                       // 4733
      // as we sometime use POST requests to pass parameters (like query='aa'),                                        // 4734
      // the cacheID must also include the body to be different between calls                                          // 4735
      if (client._useCache && body) {                                                                                  // 4736
        cacheID += '_body_' + reqOpts.body;                                                                            // 4737
      }                                                                                                                // 4738
                                                                                                                       // 4739
      // handle cache existence                                                                                        // 4740
      if (client._useCache && cache && cache[cacheID] !== undefined) {                                                 // 4741
        requestDebug('serving response from cache');                                                                   // 4742
        return client._promise.resolve(JSON.parse(cache[cacheID]));                                                    // 4743
      }                                                                                                                // 4744
                                                                                                                       // 4745
      // if we reached max tries                                                                                       // 4746
      if (tries >= client.hosts[opts.hostType].length ||                                                               // 4747
        // or we need to switch to fallback                                                                            // 4748
        client.useFallback && !usingFallback) {                                                                        // 4749
        // and there's no fallback or we are already using a fallback                                                  // 4750
        if (!opts.fallback || !client._request.fallback || usingFallback) {                                            // 4751
          requestDebug('could not get any response');                                                                  // 4752
          // then stop                                                                                                 // 4753
          return client._promise.reject(new errors.AlgoliaSearchError(                                                 // 4754
            'Cannot connect to the AlgoliaSearch API.' +                                                               // 4755
            ' Send an email to support@algolia.com to report and resolve the issue.' +                                 // 4756
            ' Application id was: ' + client.applicationID                                                             // 4757
          ));                                                                                                          // 4758
        }                                                                                                              // 4759
                                                                                                                       // 4760
        requestDebug('switching to fallback');                                                                         // 4761
                                                                                                                       // 4762
        // let's try the fallback starting from here                                                                   // 4763
        tries = 0;                                                                                                     // 4764
                                                                                                                       // 4765
        // method, url and body are fallback dependent                                                                 // 4766
        reqOpts.method = opts.fallback.method;                                                                         // 4767
        reqOpts.url = opts.fallback.url;                                                                               // 4768
        reqOpts.jsonBody = opts.fallback.body;                                                                         // 4769
        if (reqOpts.jsonBody) {                                                                                        // 4770
          reqOpts.body = safeJSONStringify(reqOpts.jsonBody);                                                          // 4771
        }                                                                                                              // 4772
                                                                                                                       // 4773
        reqOpts.timeout = client.requestTimeout * (tries + 1);                                                         // 4774
        client.hostIndex[opts.hostType] = 0;                                                                           // 4775
        usingFallback = true; // the current request is now using fallback                                             // 4776
        return doRequest(client._request.fallback, reqOpts);                                                           // 4777
      }                                                                                                                // 4778
                                                                                                                       // 4779
      var url = client.hosts[opts.hostType][client.hostIndex[opts.hostType]] + reqOpts.url;                            // 4780
      var options = {                                                                                                  // 4781
        body: body,                                                                                                    // 4782
        jsonBody: opts.body,                                                                                           // 4783
        method: reqOpts.method,                                                                                        // 4784
        headers: client._computeRequestHeaders(),                                                                      // 4785
        timeout: reqOpts.timeout,                                                                                      // 4786
        debug: requestDebug                                                                                            // 4787
      };                                                                                                               // 4788
                                                                                                                       // 4789
      requestDebug('method: %s, url: %s, headers: %j, timeout: %d',                                                    // 4790
        options.method, url, options.headers, options.timeout);                                                        // 4791
                                                                                                                       // 4792
      if (requester === client._request.fallback) {                                                                    // 4793
        requestDebug('using fallback');                                                                                // 4794
      }                                                                                                                // 4795
                                                                                                                       // 4796
      // `requester` is any of this._request or this._request.fallback                                                 // 4797
      // thus it needs to be called using the client as context                                                        // 4798
      return requester.call(client, url, options).then(success, tryFallback);                                          // 4799
                                                                                                                       // 4800
      function success(httpResponse) {                                                                                 // 4801
        // compute the status of the response,                                                                         // 4802
        //                                                                                                             // 4803
        // When in browser mode, using XDR or JSONP, we have no statusCode available                                   // 4804
        // So we rely on our API response `status` property.                                                           // 4805
        // But `waitTask` can set a `status` property which is not the statusCode (it's the task status)               // 4806
        // So we check if there's a `message` along `status` and it means it's an error                                // 4807
        //                                                                                                             // 4808
        // That's the only case where we have a response.status that's not the http statusCode                         // 4809
        var status = httpResponse && httpResponse.body && httpResponse.body.message && httpResponse.body.status ||     // 4810
                                                                                                                       // 4811
          // this is important to check the request statusCode AFTER the body eventual                                 // 4812
          // statusCode because some implementations (jQuery XDomainRequest transport) may                             // 4813
          // send statusCode 200 while we had an error                                                                 // 4814
          httpResponse.statusCode ||                                                                                   // 4815
                                                                                                                       // 4816
          // When in browser mode, using XDR or JSONP                                                                  // 4817
          // we default to success when no error (no response.status && response.message)                              // 4818
          // If there was a JSON.parse() error then body is null and it fails                                          // 4819
          httpResponse && httpResponse.body && 200;                                                                    // 4820
                                                                                                                       // 4821
        requestDebug('received response: statusCode: %s, computed statusCode: %d, headers: %j',                        // 4822
          httpResponse.statusCode, status, httpResponse.headers);                                                      // 4823
                                                                                                                       // 4824
        if (process.env.DEBUG && process.env.DEBUG.indexOf('debugBody') !== -1) {                                      // 4825
          requestDebug('body: %j', httpResponse.body);                                                                 // 4826
        }                                                                                                              // 4827
                                                                                                                       // 4828
        var ok = status === 200 || status === 201;                                                                     // 4829
        var retry = !ok && Math.floor(status / 100) !== 4 && Math.floor(status / 100) !== 1;                           // 4830
                                                                                                                       // 4831
        if (client._useCache && ok && cache) {                                                                         // 4832
          cache[cacheID] = httpResponse.responseText;                                                                  // 4833
        }                                                                                                              // 4834
                                                                                                                       // 4835
        if (ok) {                                                                                                      // 4836
          return httpResponse.body;                                                                                    // 4837
        }                                                                                                              // 4838
                                                                                                                       // 4839
        if (retry) {                                                                                                   // 4840
          tries += 1;                                                                                                  // 4841
          return retryRequest();                                                                                       // 4842
        }                                                                                                              // 4843
                                                                                                                       // 4844
        var unrecoverableError = new errors.AlgoliaSearchError(                                                        // 4845
          httpResponse.body && httpResponse.body.message                                                               // 4846
        );                                                                                                             // 4847
                                                                                                                       // 4848
        return client._promise.reject(unrecoverableError);                                                             // 4849
      }                                                                                                                // 4850
                                                                                                                       // 4851
      function tryFallback(err) {                                                                                      // 4852
        // error cases:                                                                                                // 4853
        //  While not in fallback mode:                                                                                // 4854
        //    - CORS not supported                                                                                     // 4855
        //    - network error                                                                                          // 4856
        //  While in fallback mode:                                                                                    // 4857
        //    - timeout                                                                                                // 4858
        //    - network error                                                                                          // 4859
        //    - badly formatted JSONP (script loaded, did not call our callback)                                       // 4860
        //  In both cases:                                                                                             // 4861
        //    - uncaught exception occurs (TypeError)                                                                  // 4862
        requestDebug('error: %s, stack: %s', err.message, err.stack);                                                  // 4863
                                                                                                                       // 4864
        if (!(err instanceof errors.AlgoliaSearchError)) {                                                             // 4865
          err = new errors.Unknown(err && err.message, err);                                                           // 4866
        }                                                                                                              // 4867
                                                                                                                       // 4868
        tries += 1;                                                                                                    // 4869
                                                                                                                       // 4870
        // stop the request implementation when:                                                                       // 4871
        if (                                                                                                           // 4872
          // we did not generate this error,                                                                           // 4873
          // it comes from a throw in some other piece of code                                                         // 4874
          err instanceof errors.Unknown ||                                                                             // 4875
                                                                                                                       // 4876
          // server sent unparsable JSON                                                                               // 4877
          err instanceof errors.UnparsableJSON ||                                                                      // 4878
                                                                                                                       // 4879
          // max tries and already using fallback or no fallback                                                       // 4880
          tries >= client.hosts[opts.hostType].length &&                                                               // 4881
          (usingFallback || !opts.fallback || !client._request.fallback)) {                                            // 4882
          // stop request implementation for this command                                                              // 4883
          return client._promise.reject(err);                                                                          // 4884
        }                                                                                                              // 4885
                                                                                                                       // 4886
        client.hostIndex[opts.hostType] = ++client.hostIndex[opts.hostType] % client.hosts[opts.hostType].length;      // 4887
                                                                                                                       // 4888
        if (err instanceof errors.RequestTimeout) {                                                                    // 4889
          return retryRequest();                                                                                       // 4890
        } else if (client._request.fallback && !client.useFallback) {                                                  // 4891
          // if any error occured but timeout, use fallback for the rest                                               // 4892
          // of the session                                                                                            // 4893
          client.useFallback = true;                                                                                   // 4894
        }                                                                                                              // 4895
                                                                                                                       // 4896
        return doRequest(requester, reqOpts);                                                                          // 4897
      }                                                                                                                // 4898
                                                                                                                       // 4899
      function retryRequest() {                                                                                        // 4900
        client.hostIndex[opts.hostType] = ++client.hostIndex[opts.hostType] % client.hosts[opts.hostType].length;      // 4901
        reqOpts.timeout = client.requestTimeout * (tries + 1);                                                         // 4902
        return doRequest(requester, reqOpts);                                                                          // 4903
      }                                                                                                                // 4904
    }                                                                                                                  // 4905
                                                                                                                       // 4906
    // we can use a fallback if forced AND fallback parameters are available                                           // 4907
    var useFallback = client.useFallback && opts.fallback;                                                             // 4908
    var requestOptions = useFallback ? opts.fallback : opts;                                                           // 4909
                                                                                                                       // 4910
    var promise = doRequest(                                                                                           // 4911
      // set the requester                                                                                             // 4912
      useFallback ? client._request.fallback : client._request, {                                                      // 4913
        url: requestOptions.url,                                                                                       // 4914
        method: requestOptions.method,                                                                                 // 4915
        body: body,                                                                                                    // 4916
        jsonBody: opts.body,                                                                                           // 4917
        timeout: client.requestTimeout * (tries + 1)                                                                   // 4918
      }                                                                                                                // 4919
    );                                                                                                                 // 4920
                                                                                                                       // 4921
    // either we have a callback                                                                                       // 4922
    // either we are using promises                                                                                    // 4923
    if (opts.callback) {                                                                                               // 4924
      promise.then(function okCb(content) {                                                                            // 4925
        exitPromise(function() {                                                                                       // 4926
          opts.callback(null, content);                                                                                // 4927
        }, client._setTimeout || setTimeout);                                                                          // 4928
      }, function nookCb(err) {                                                                                        // 4929
        exitPromise(function() {                                                                                       // 4930
          opts.callback(err);                                                                                          // 4931
        }, client._setTimeout || setTimeout);                                                                          // 4932
      });                                                                                                              // 4933
    } else {                                                                                                           // 4934
      return promise;                                                                                                  // 4935
    }                                                                                                                  // 4936
  },                                                                                                                   // 4937
                                                                                                                       // 4938
  /*                                                                                                                   // 4939
  * Transform search param object in query string                                                                      // 4940
  */                                                                                                                   // 4941
  _getSearchParams: function(args, params) {                                                                           // 4942
    if (this._isUndefined(args) || args === null) {                                                                    // 4943
      return params;                                                                                                   // 4944
    }                                                                                                                  // 4945
    for (var key in args) {                                                                                            // 4946
      if (key !== null && args[key] !== undefined && args.hasOwnProperty(key)) {                                       // 4947
        params += params === '' ? '' : '&';                                                                            // 4948
        params += key + '=' + encodeURIComponent(Object.prototype.toString.call(args[key]) === '[object Array]' ? safeJSONStringify(args[key]) : args[key]);
      }                                                                                                                // 4950
    }                                                                                                                  // 4951
    return params;                                                                                                     // 4952
  },                                                                                                                   // 4953
                                                                                                                       // 4954
  _isUndefined: function(obj) {                                                                                        // 4955
    return obj === void 0;                                                                                             // 4956
  },                                                                                                                   // 4957
                                                                                                                       // 4958
  _computeRequestHeaders: function() {                                                                                 // 4959
    var forEach = require(11);                                                                                         // 4960
                                                                                                                       // 4961
    var requestHeaders = {                                                                                             // 4962
      'x-algolia-api-key': this.apiKey,                                                                                // 4963
      'x-algolia-application-id': this.applicationID,                                                                  // 4964
      'x-algolia-agent': this._ua                                                                                      // 4965
    };                                                                                                                 // 4966
                                                                                                                       // 4967
    if (this.userToken) {                                                                                              // 4968
      requestHeaders['x-algolia-usertoken'] = this.userToken;                                                          // 4969
    }                                                                                                                  // 4970
                                                                                                                       // 4971
    if (this.securityTags) {                                                                                           // 4972
      requestHeaders['x-algolia-tagfilters'] = this.securityTags;                                                      // 4973
    }                                                                                                                  // 4974
                                                                                                                       // 4975
    if (this.extraHeaders) {                                                                                           // 4976
      forEach(this.extraHeaders, function addToRequestHeaders(header) {                                                // 4977
        requestHeaders[header.name] = header.value;                                                                    // 4978
      });                                                                                                              // 4979
    }                                                                                                                  // 4980
                                                                                                                       // 4981
    return requestHeaders;                                                                                             // 4982
  }                                                                                                                    // 4983
};                                                                                                                     // 4984
                                                                                                                       // 4985
/*                                                                                                                     // 4986
 * Contains all the functions related to one index                                                                     // 4987
 * You should use AlgoliaSearch.initIndex(indexName) to retrieve this object                                           // 4988
 */                                                                                                                    // 4989
AlgoliaSearch.prototype.Index.prototype = {                                                                            // 4990
  /*                                                                                                                   // 4991
   * Clear all queries in cache                                                                                        // 4992
   */                                                                                                                  // 4993
  clearCache: function() {                                                                                             // 4994
    this.cache = {};                                                                                                   // 4995
  },                                                                                                                   // 4996
  /*                                                                                                                   // 4997
   * Add an object in this index                                                                                       // 4998
   *                                                                                                                   // 4999
   * @param content contains the javascript object to add inside the index                                             // 5000
   * @param objectID (optional) an objectID you want to attribute to this object                                       // 5001
   * (if the attribute already exist the old object will be overwrite)                                                 // 5002
   * @param callback (optional) the result callback called with two arguments:                                         // 5003
   *  error: null or Error('message')                                                                                  // 5004
   *  content: the server answer that contains 3 elements: createAt, taskId and objectID                               // 5005
   */                                                                                                                  // 5006
  addObject: function(content, objectID, callback) {                                                                   // 5007
    var indexObj = this;                                                                                               // 5008
                                                                                                                       // 5009
    if (arguments.length === 1 || typeof objectID === 'function') {                                                    // 5010
      callback = objectID;                                                                                             // 5011
      objectID = undefined;                                                                                            // 5012
    }                                                                                                                  // 5013
                                                                                                                       // 5014
    return this.as._jsonRequest({                                                                                      // 5015
      method: objectID !== undefined ?                                                                                 // 5016
        'PUT' : // update or create                                                                                    // 5017
        'POST', // create (API generates an objectID)                                                                  // 5018
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + // create                                          // 5019
        (objectID !== undefined ? '/' + encodeURIComponent(objectID) : ''), // update or create                        // 5020
      body: content,                                                                                                   // 5021
      hostType: 'write',                                                                                               // 5022
      callback: callback                                                                                               // 5023
    });                                                                                                                // 5024
  },                                                                                                                   // 5025
  /*                                                                                                                   // 5026
   * Add several objects                                                                                               // 5027
   *                                                                                                                   // 5028
   * @param objects contains an array of objects to add                                                                // 5029
   * @param callback (optional) the result callback called with two arguments:                                         // 5030
   *  error: null or Error('message')                                                                                  // 5031
   *  content: the server answer that updateAt and taskID                                                              // 5032
   */                                                                                                                  // 5033
  addObjects: function(objects, callback) {                                                                            // 5034
    var isArray = require(46);                                                                                         // 5035
    var usage = 'Usage: index.addObjects(arrayOfObjects[, callback])';                                                 // 5036
                                                                                                                       // 5037
    if (!isArray(objects)) {                                                                                           // 5038
      throw new Error(usage);                                                                                          // 5039
    }                                                                                                                  // 5040
                                                                                                                       // 5041
    var indexObj = this;                                                                                               // 5042
    var postObj = {                                                                                                    // 5043
      requests: []                                                                                                     // 5044
    };                                                                                                                 // 5045
    for (var i = 0; i < objects.length; ++i) {                                                                         // 5046
      var request = {                                                                                                  // 5047
        action: 'addObject',                                                                                           // 5048
        body: objects[i]                                                                                               // 5049
      };                                                                                                               // 5050
      postObj.requests.push(request);                                                                                  // 5051
    }                                                                                                                  // 5052
    return this.as._jsonRequest({                                                                                      // 5053
      method: 'POST',                                                                                                  // 5054
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',                                          // 5055
      body: postObj,                                                                                                   // 5056
      hostType: 'write',                                                                                               // 5057
      callback: callback                                                                                               // 5058
    });                                                                                                                // 5059
  },                                                                                                                   // 5060
  /*                                                                                                                   // 5061
   * Get an object from this index                                                                                     // 5062
   *                                                                                                                   // 5063
   * @param objectID the unique identifier of the object to retrieve                                                   // 5064
   * @param attrs (optional) if set, contains the array of attribute names to retrieve                                 // 5065
   * @param callback (optional) the result callback called with two arguments                                          // 5066
   *  error: null or Error('message')                                                                                  // 5067
   *  content: the object to retrieve or the error message if a failure occured                                        // 5068
   */                                                                                                                  // 5069
  getObject: function(objectID, attrs, callback) {                                                                     // 5070
    var indexObj = this;                                                                                               // 5071
                                                                                                                       // 5072
    if (arguments.length === 1 || typeof attrs === 'function') {                                                       // 5073
      callback = attrs;                                                                                                // 5074
      attrs = undefined;                                                                                               // 5075
    }                                                                                                                  // 5076
                                                                                                                       // 5077
    var params = '';                                                                                                   // 5078
    if (attrs !== undefined) {                                                                                         // 5079
      params = '?attributes=';                                                                                         // 5080
      for (var i = 0; i < attrs.length; ++i) {                                                                         // 5081
        if (i !== 0) {                                                                                                 // 5082
          params += ',';                                                                                               // 5083
        }                                                                                                              // 5084
        params += attrs[i];                                                                                            // 5085
      }                                                                                                                // 5086
    }                                                                                                                  // 5087
                                                                                                                       // 5088
    return this.as._jsonRequest({                                                                                      // 5089
      method: 'GET',                                                                                                   // 5090
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/' + encodeURIComponent(objectID) + params,       // 5091
      hostType: 'read',                                                                                                // 5092
      callback: callback                                                                                               // 5093
    });                                                                                                                // 5094
  },                                                                                                                   // 5095
                                                                                                                       // 5096
  /*                                                                                                                   // 5097
   * Get several objects from this index                                                                               // 5098
   *                                                                                                                   // 5099
   * @param objectIDs the array of unique identifier of objects to retrieve                                            // 5100
   */                                                                                                                  // 5101
  getObjects: function(objectIDs, attributesToRetrieve, callback) {                                                    // 5102
    var isArray = require(46);                                                                                         // 5103
    var usage = 'Usage: index.getObjects(arrayOfObjectIDs[, callback])';                                               // 5104
                                                                                                                       // 5105
    if (!isArray(objectIDs)) {                                                                                         // 5106
      throw new Error(usage);                                                                                          // 5107
    }                                                                                                                  // 5108
                                                                                                                       // 5109
    var indexObj = this;                                                                                               // 5110
                                                                                                                       // 5111
    if (arguments.length === 1 || typeof attributesToRetrieve === 'function') {                                        // 5112
      callback = attributesToRetrieve;                                                                                 // 5113
      attributesToRetrieve = undefined;                                                                                // 5114
    }                                                                                                                  // 5115
                                                                                                                       // 5116
    var body = {                                                                                                       // 5117
      requests: map(objectIDs, function prepareRequest(objectID) {                                                     // 5118
        var request = {                                                                                                // 5119
          indexName: indexObj.indexName,                                                                               // 5120
          objectID: objectID                                                                                           // 5121
        };                                                                                                             // 5122
                                                                                                                       // 5123
        if (attributesToRetrieve) {                                                                                    // 5124
          request.attributesToRetrieve = attributesToRetrieve.join(',');                                               // 5125
        }                                                                                                              // 5126
                                                                                                                       // 5127
        return request;                                                                                                // 5128
      })                                                                                                               // 5129
    };                                                                                                                 // 5130
                                                                                                                       // 5131
    return this.as._jsonRequest({                                                                                      // 5132
      method: 'POST',                                                                                                  // 5133
      url: '/1/indexes/*/objects',                                                                                     // 5134
      hostType: 'read',                                                                                                // 5135
      body: body,                                                                                                      // 5136
      callback: callback                                                                                               // 5137
    });                                                                                                                // 5138
  },                                                                                                                   // 5139
                                                                                                                       // 5140
  /*                                                                                                                   // 5141
   * Update partially an object (only update attributes passed in argument)                                            // 5142
   *                                                                                                                   // 5143
   * @param partialObject contains the javascript attributes to override, the                                          // 5144
   *  object must contains an objectID attribute                                                                       // 5145
   * @param callback (optional) the result callback called with two arguments:                                         // 5146
   *  error: null or Error('message')                                                                                  // 5147
   *  content: the server answer that contains 3 elements: createAt, taskId and objectID                               // 5148
   */                                                                                                                  // 5149
  partialUpdateObject: function(partialObject, callback) {                                                             // 5150
    var indexObj = this;                                                                                               // 5151
    return this.as._jsonRequest({                                                                                      // 5152
      method: 'POST',                                                                                                  // 5153
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/' + encodeURIComponent(partialObject.objectID) + '/partial',
      body: partialObject,                                                                                             // 5155
      hostType: 'write',                                                                                               // 5156
      callback: callback                                                                                               // 5157
    });                                                                                                                // 5158
  },                                                                                                                   // 5159
  /*                                                                                                                   // 5160
   * Partially Override the content of several objects                                                                 // 5161
   *                                                                                                                   // 5162
   * @param objects contains an array of objects to update (each object must contains a objectID attribute)            // 5163
   * @param callback (optional) the result callback called with two arguments:                                         // 5164
   *  error: null or Error('message')                                                                                  // 5165
   *  content: the server answer that updateAt and taskID                                                              // 5166
   */                                                                                                                  // 5167
  partialUpdateObjects: function(objects, callback) {                                                                  // 5168
    var isArray = require(46);                                                                                         // 5169
    var usage = 'Usage: index.partialUpdateObjects(arrayOfObjects[, callback])';                                       // 5170
                                                                                                                       // 5171
    if (!isArray(objects)) {                                                                                           // 5172
      throw new Error(usage);                                                                                          // 5173
    }                                                                                                                  // 5174
                                                                                                                       // 5175
    var indexObj = this;                                                                                               // 5176
    var postObj = {                                                                                                    // 5177
      requests: []                                                                                                     // 5178
    };                                                                                                                 // 5179
    for (var i = 0; i < objects.length; ++i) {                                                                         // 5180
      var request = {                                                                                                  // 5181
        action: 'partialUpdateObject',                                                                                 // 5182
        objectID: objects[i].objectID,                                                                                 // 5183
        body: objects[i]                                                                                               // 5184
      };                                                                                                               // 5185
      postObj.requests.push(request);                                                                                  // 5186
    }                                                                                                                  // 5187
    return this.as._jsonRequest({                                                                                      // 5188
      method: 'POST',                                                                                                  // 5189
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',                                          // 5190
      body: postObj,                                                                                                   // 5191
      hostType: 'write',                                                                                               // 5192
      callback: callback                                                                                               // 5193
    });                                                                                                                // 5194
  },                                                                                                                   // 5195
  /*                                                                                                                   // 5196
   * Override the content of object                                                                                    // 5197
   *                                                                                                                   // 5198
   * @param object contains the javascript object to save, the object must contains an objectID attribute              // 5199
   * @param callback (optional) the result callback called with two arguments:                                         // 5200
   *  error: null or Error('message')                                                                                  // 5201
   *  content: the server answer that updateAt and taskID                                                              // 5202
   */                                                                                                                  // 5203
  saveObject: function(object, callback) {                                                                             // 5204
    var indexObj = this;                                                                                               // 5205
    return this.as._jsonRequest({                                                                                      // 5206
      method: 'PUT',                                                                                                   // 5207
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/' + encodeURIComponent(object.objectID),         // 5208
      body: object,                                                                                                    // 5209
      hostType: 'write',                                                                                               // 5210
      callback: callback                                                                                               // 5211
    });                                                                                                                // 5212
  },                                                                                                                   // 5213
  /*                                                                                                                   // 5214
   * Override the content of several objects                                                                           // 5215
   *                                                                                                                   // 5216
   * @param objects contains an array of objects to update (each object must contains a objectID attribute)            // 5217
   * @param callback (optional) the result callback called with two arguments:                                         // 5218
   *  error: null or Error('message')                                                                                  // 5219
   *  content: the server answer that updateAt and taskID                                                              // 5220
   */                                                                                                                  // 5221
  saveObjects: function(objects, callback) {                                                                           // 5222
    var isArray = require(46);                                                                                         // 5223
    var usage = 'Usage: index.saveObjects(arrayOfObjects[, callback])';                                                // 5224
                                                                                                                       // 5225
    if (!isArray(objects)) {                                                                                           // 5226
      throw new Error(usage);                                                                                          // 5227
    }                                                                                                                  // 5228
                                                                                                                       // 5229
    var indexObj = this;                                                                                               // 5230
    var postObj = {                                                                                                    // 5231
      requests: []                                                                                                     // 5232
    };                                                                                                                 // 5233
    for (var i = 0; i < objects.length; ++i) {                                                                         // 5234
      var request = {                                                                                                  // 5235
        action: 'updateObject',                                                                                        // 5236
        objectID: objects[i].objectID,                                                                                 // 5237
        body: objects[i]                                                                                               // 5238
      };                                                                                                               // 5239
      postObj.requests.push(request);                                                                                  // 5240
    }                                                                                                                  // 5241
    return this.as._jsonRequest({                                                                                      // 5242
      method: 'POST',                                                                                                  // 5243
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',                                          // 5244
      body: postObj,                                                                                                   // 5245
      hostType: 'write',                                                                                               // 5246
      callback: callback                                                                                               // 5247
    });                                                                                                                // 5248
  },                                                                                                                   // 5249
  /*                                                                                                                   // 5250
   * Delete an object from the index                                                                                   // 5251
   *                                                                                                                   // 5252
   * @param objectID the unique identifier of object to delete                                                         // 5253
   * @param callback (optional) the result callback called with two arguments:                                         // 5254
   *  error: null or Error('message')                                                                                  // 5255
   *  content: the server answer that contains 3 elements: createAt, taskId and objectID                               // 5256
   */                                                                                                                  // 5257
  deleteObject: function(objectID, callback) {                                                                         // 5258
    if (typeof objectID === 'function' || typeof objectID !== 'string' && typeof objectID !== 'number') {              // 5259
      var err = new errors.AlgoliaSearchError('Cannot delete an object without an objectID');                          // 5260
      callback = objectID;                                                                                             // 5261
      if (typeof callback === 'function') {                                                                            // 5262
        return callback(err);                                                                                          // 5263
      }                                                                                                                // 5264
                                                                                                                       // 5265
      return this.as._promise.reject(err);                                                                             // 5266
    }                                                                                                                  // 5267
                                                                                                                       // 5268
    var indexObj = this;                                                                                               // 5269
    return this.as._jsonRequest({                                                                                      // 5270
      method: 'DELETE',                                                                                                // 5271
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/' + encodeURIComponent(objectID),                // 5272
      hostType: 'write',                                                                                               // 5273
      callback: callback                                                                                               // 5274
    });                                                                                                                // 5275
  },                                                                                                                   // 5276
  /*                                                                                                                   // 5277
   * Delete several objects from an index                                                                              // 5278
   *                                                                                                                   // 5279
   * @param objectIDs contains an array of objectID to delete                                                          // 5280
   * @param callback (optional) the result callback called with two arguments:                                         // 5281
   *  error: null or Error('message')                                                                                  // 5282
   *  content: the server answer that contains 3 elements: createAt, taskId and objectID                               // 5283
   */                                                                                                                  // 5284
  deleteObjects: function(objectIDs, callback) {                                                                       // 5285
    var isArray = require(46);                                                                                         // 5286
    var usage = 'Usage: index.deleteObjects(arrayOfObjectIDs[, callback])';                                            // 5287
                                                                                                                       // 5288
    if (!isArray(objectIDs)) {                                                                                         // 5289
      throw new Error(usage);                                                                                          // 5290
    }                                                                                                                  // 5291
                                                                                                                       // 5292
    var indexObj = this;                                                                                               // 5293
    var postObj = {                                                                                                    // 5294
      requests: map(objectIDs, function prepareRequest(objectID) {                                                     // 5295
        return {                                                                                                       // 5296
          action: 'deleteObject',                                                                                      // 5297
          objectID: objectID,                                                                                          // 5298
          body: {                                                                                                      // 5299
            objectID: objectID                                                                                         // 5300
          }                                                                                                            // 5301
        };                                                                                                             // 5302
      })                                                                                                               // 5303
    };                                                                                                                 // 5304
                                                                                                                       // 5305
    return this.as._jsonRequest({                                                                                      // 5306
      method: 'POST',                                                                                                  // 5307
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',                                          // 5308
      body: postObj,                                                                                                   // 5309
      hostType: 'write',                                                                                               // 5310
      callback: callback                                                                                               // 5311
    });                                                                                                                // 5312
  },                                                                                                                   // 5313
  /*                                                                                                                   // 5314
   * Delete all objects matching a query                                                                               // 5315
   *                                                                                                                   // 5316
   * @param query the query string                                                                                     // 5317
   * @param params the optional query parameters                                                                       // 5318
   * @param callback (optional) the result callback called with one argument                                           // 5319
   *  error: null or Error('message')                                                                                  // 5320
   */                                                                                                                  // 5321
  deleteByQuery: function(query, params, callback) {                                                                   // 5322
    var clone = require(43);                                                                                           // 5323
                                                                                                                       // 5324
    var indexObj = this;                                                                                               // 5325
    var client = indexObj.as;                                                                                          // 5326
                                                                                                                       // 5327
    if (arguments.length === 1 || typeof params === 'function') {                                                      // 5328
      callback = params;                                                                                               // 5329
      params = {};                                                                                                     // 5330
    } else {                                                                                                           // 5331
      params = clone(params);                                                                                          // 5332
    }                                                                                                                  // 5333
                                                                                                                       // 5334
    params.attributesToRetrieve = 'objectID';                                                                          // 5335
    params.hitsPerPage = 1000;                                                                                         // 5336
    params.distinct = false;                                                                                           // 5337
                                                                                                                       // 5338
    // when deleting, we should never use cache to get the                                                             // 5339
    // search results                                                                                                  // 5340
    this.clearCache();                                                                                                 // 5341
                                                                                                                       // 5342
    // there's a problem in how we use the promise chain,                                                              // 5343
    // see how waitTask is done                                                                                        // 5344
    var promise = this                                                                                                 // 5345
      .search(query, params)                                                                                           // 5346
      .then(stopOrDelete);                                                                                             // 5347
                                                                                                                       // 5348
    function stopOrDelete(searchContent) {                                                                             // 5349
      // stop here                                                                                                     // 5350
      if (searchContent.nbHits === 0) {                                                                                // 5351
        // return indexObj.as._request.resolve();                                                                      // 5352
        return searchContent;                                                                                          // 5353
      }                                                                                                                // 5354
                                                                                                                       // 5355
      // continue and do a recursive call                                                                              // 5356
      var objectIDs = map(searchContent.hits, function getObjectID(object) {                                           // 5357
        return object.objectID;                                                                                        // 5358
      });                                                                                                              // 5359
                                                                                                                       // 5360
      return indexObj                                                                                                  // 5361
        .deleteObjects(objectIDs)                                                                                      // 5362
        .then(waitTask)                                                                                                // 5363
        .then(doDeleteByQuery);                                                                                        // 5364
    }                                                                                                                  // 5365
                                                                                                                       // 5366
    function waitTask(deleteObjectsContent) {                                                                          // 5367
      return indexObj.waitTask(deleteObjectsContent.taskID);                                                           // 5368
    }                                                                                                                  // 5369
                                                                                                                       // 5370
    function doDeleteByQuery() {                                                                                       // 5371
      return indexObj.deleteByQuery(query, params);                                                                    // 5372
    }                                                                                                                  // 5373
                                                                                                                       // 5374
    if (!callback) {                                                                                                   // 5375
      return promise;                                                                                                  // 5376
    }                                                                                                                  // 5377
                                                                                                                       // 5378
    promise.then(success, failure);                                                                                    // 5379
                                                                                                                       // 5380
    function success() {                                                                                               // 5381
      exitPromise(function exit() {                                                                                    // 5382
        callback(null);                                                                                                // 5383
      }, client._setTimeout || setTimeout);                                                                            // 5384
    }                                                                                                                  // 5385
                                                                                                                       // 5386
    function failure(err) {                                                                                            // 5387
      exitPromise(function exit() {                                                                                    // 5388
        callback(err);                                                                                                 // 5389
      }, client._setTimeout || setTimeout);                                                                            // 5390
    }                                                                                                                  // 5391
  },                                                                                                                   // 5392
                                                                                                                       // 5393
  /*                                                                                                                   // 5394
   * Search inside the index using XMLHttpRequest request (Using a POST query to                                       // 5395
   * minimize number of OPTIONS queries: Cross-Origin Resource Sharing).                                               // 5396
   *                                                                                                                   // 5397
   * @param query the full text query                                                                                  // 5398
   * @param args (optional) if set, contains an object with query parameters:                                          // 5399
   * - page: (integer) Pagination parameter used to select the page to retrieve.                                       // 5400
   *                   Page is zero-based and defaults to 0. Thus,                                                     // 5401
   *                   to retrieve the 10th page you need to set page=9                                                // 5402
   * - hitsPerPage: (integer) Pagination parameter used to select the number of hits per page. Defaults to 20.         // 5403
   * - attributesToRetrieve: a string that contains the list of object attributes                                      // 5404
   * you want to retrieve (let you minimize the answer size).                                                          // 5405
   *   Attributes are separated with a comma (for example "name,address").                                             // 5406
   *   You can also use an array (for example ["name","address"]).                                                     // 5407
   *   By default, all attributes are retrieved. You can also use '*' to retrieve all                                  // 5408
   *   values when an attributesToRetrieve setting is specified for your index.                                        // 5409
   * - attributesToHighlight: a string that contains the list of attributes you                                        // 5410
   *   want to highlight according to the query.                                                                       // 5411
   *   Attributes are separated by a comma. You can also use an array (for example ["name","address"]).                // 5412
   *   If an attribute has no match for the query, the raw value is returned.                                          // 5413
   *   By default all indexed text attributes are highlighted.                                                         // 5414
   *   You can use `*` if you want to highlight all textual attributes.                                                // 5415
   *   Numerical attributes are not highlighted.                                                                       // 5416
   *   A matchLevel is returned for each highlighted attribute and can contain:                                        // 5417
   *      - full: if all the query terms were found in the attribute,                                                  // 5418
   *      - partial: if only some of the query terms were found,                                                       // 5419
   *      - none: if none of the query terms were found.                                                               // 5420
   * - attributesToSnippet: a string that contains the list of attributes to snippet alongside                         // 5421
   * the number of words to return (syntax is `attributeName:nbWords`).                                                // 5422
   *    Attributes are separated by a comma (Example: attributesToSnippet=name:10,content:10).                         // 5423
   *    You can also use an array (Example: attributesToSnippet: ['name:10','content:10']).                            // 5424
   *    By default no snippet is computed.                                                                             // 5425
   * - minWordSizefor1Typo: the minimum number of characters in a query word to accept one typo in this word.          // 5426
   * Defaults to 3.                                                                                                    // 5427
   * - minWordSizefor2Typos: the minimum number of characters in a query word                                          // 5428
   * to accept two typos in this word. Defaults to 7.                                                                  // 5429
   * - getRankingInfo: if set to 1, the result hits will contain ranking                                               // 5430
   * information in _rankingInfo attribute.                                                                            // 5431
   * - aroundLatLng: search for entries around a given                                                                 // 5432
   * latitude/longitude (specified as two floats separated by a comma).                                                // 5433
   *   For example aroundLatLng=47.316669,5.016670).                                                                   // 5434
   *   You can specify the maximum distance in meters with the aroundRadius parameter (in meters)                      // 5435
   *   and the precision for ranking with aroundPrecision                                                              // 5436
   *   (for example if you set aroundPrecision=100, two objects that are distant of                                    // 5437
   *   less than 100m will be considered as identical for "geo" ranking parameter).                                    // 5438
   *   At indexing, you should specify geoloc of an object with the _geoloc attribute                                  // 5439
   *   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})                                                     // 5440
   * - insideBoundingBox: search entries inside a given area defined by the two extreme points                         // 5441
   * of a rectangle (defined by 4 floats: p1Lat,p1Lng,p2Lat,p2Lng).                                                    // 5442
   *   For example insideBoundingBox=47.3165,4.9665,47.3424,5.0201).                                                   // 5443
   *   At indexing, you should specify geoloc of an object with the _geoloc attribute                                  // 5444
   *   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})                                                     // 5445
   * - numericFilters: a string that contains the list of numeric filters you want to                                  // 5446
   * apply separated by a comma.                                                                                       // 5447
   *   The syntax of one filter is `attributeName` followed by `operand` followed by `value`.                          // 5448
   *   Supported operands are `<`, `<=`, `=`, `>` and `>=`.                                                            // 5449
   *   You can have multiple conditions on one attribute like for example numericFilters=price>100,price<1000.         // 5450
   *   You can also use an array (for example numericFilters: ["price>100","price<1000"]).                             // 5451
   * - tagFilters: filter the query by a set of tags. You can AND tags by separating them by commas.                   // 5452
   *   To OR tags, you must add parentheses. For example, tags=tag1,(tag2,tag3) means tag1 AND (tag2 OR tag3).         // 5453
   *   You can also use an array, for example tagFilters: ["tag1",["tag2","tag3"]]                                     // 5454
   *   means tag1 AND (tag2 OR tag3).                                                                                  // 5455
   *   At indexing, tags should be added in the _tags** attribute                                                      // 5456
   *   of objects (for example {"_tags":["tag1","tag2"]}).                                                             // 5457
   * - facetFilters: filter the query by a list of facets.                                                             // 5458
   *   Facets are separated by commas and each facet is encoded as `attributeName:value`.                              // 5459
   *   For example: `facetFilters=category:Book,author:John%20Doe`.                                                    // 5460
   *   You can also use an array (for example `["category:Book","author:John%20Doe"]`).                                // 5461
   * - facets: List of object attributes that you want to use for faceting.                                            // 5462
   *   Comma separated list: `"category,author"` or array `['category','author']`                                      // 5463
   *   Only attributes that have been added in **attributesForFaceting** index setting                                 // 5464
   *   can be used in this parameter.                                                                                  // 5465
   *   You can also use `*` to perform faceting on all attributes specified in **attributesForFaceting**.              // 5466
   * - queryType: select how the query words are interpreted, it can be one of the following value:                    // 5467
   *    - prefixAll: all query words are interpreted as prefixes,                                                      // 5468
   *    - prefixLast: only the last word is interpreted as a prefix (default behavior),                                // 5469
   *    - prefixNone: no query word is interpreted as a prefix. This option is not recommended.                        // 5470
   * - optionalWords: a string that contains the list of words that should                                             // 5471
   * be considered as optional when found in the query.                                                                // 5472
   *   Comma separated and array are accepted.                                                                         // 5473
   * - distinct: If set to 1, enable the distinct feature (disabled by default)                                        // 5474
   * if the attributeForDistinct index setting is set.                                                                 // 5475
   *   This feature is similar to the SQL "distinct" keyword: when enabled                                             // 5476
   *   in a query with the distinct=1 parameter,                                                                       // 5477
   *   all hits containing a duplicate value for the attributeForDistinct attribute are removed from results.          // 5478
   *   For example, if the chosen attribute is show_name and several hits have                                         // 5479
   *   the same value for show_name, then only the best                                                                // 5480
   *   one is kept and others are removed.                                                                             // 5481
   * - restrictSearchableAttributes: List of attributes you want to use for                                            // 5482
   * textual search (must be a subset of the attributesToIndex index setting)                                          // 5483
   * either comma separated or as an array                                                                             // 5484
   * @param callback the result callback called with two arguments:                                                    // 5485
   *  error: null or Error('message'). If false, the content contains the error.                                       // 5486
   *  content: the server answer that contains the list of results.                                                    // 5487
   */                                                                                                                  // 5488
  search: buildSearchMethod('query'),                                                                                  // 5489
                                                                                                                       // 5490
  /*                                                                                                                   // 5491
   * -- BETA --                                                                                                        // 5492
   * Search a record similar to the query inside the index using XMLHttpRequest request (Using a POST query to         // 5493
   * minimize number of OPTIONS queries: Cross-Origin Resource Sharing).                                               // 5494
   *                                                                                                                   // 5495
   * @param query the similar query                                                                                    // 5496
   * @param args (optional) if set, contains an object with query parameters.                                          // 5497
   *   All search parameters are supported (see search function), restrictSearchableAttributes and facetFilters        // 5498
   *   are the two most useful to restrict the similar results and get more relevant content                           // 5499
   */                                                                                                                  // 5500
  similarSearch: buildSearchMethod('similarQuery'),                                                                    // 5501
                                                                                                                       // 5502
  /*                                                                                                                   // 5503
   * Browse index content. The response content will have a `cursor` property that you can use                         // 5504
   * to browse subsequent pages for this query. Use `index.browseFrom(cursor)` when you want.                          // 5505
   *                                                                                                                   // 5506
   * @param {string} query - The full text query                                                                       // 5507
   * @param {Object} [queryParameters] - Any search query parameter                                                    // 5508
   * @param {Function} [callback] - The result callback called with two arguments                                      // 5509
   *   error: null or Error('message')                                                                                 // 5510
   *   content: the server answer with the browse result                                                               // 5511
   * @return {Promise|undefined} Returns a promise if no callback given                                                // 5512
   * @example                                                                                                          // 5513
   * index.browse('cool songs', {                                                                                      // 5514
   *   tagFilters: 'public,comments',                                                                                  // 5515
   *   hitsPerPage: 500                                                                                                // 5516
   * }, callback);                                                                                                     // 5517
   * @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}                           // 5518
   */                                                                                                                  // 5519
  // pre 3.5.0 usage, backward compatible                                                                              // 5520
  // browse: function(page, hitsPerPage, callback) {                                                                   // 5521
  browse: function(query, queryParameters, callback) {                                                                 // 5522
    var merge = require(55);                                                                                           // 5523
                                                                                                                       // 5524
    var indexObj = this;                                                                                               // 5525
                                                                                                                       // 5526
    var page;                                                                                                          // 5527
    var hitsPerPage;                                                                                                   // 5528
                                                                                                                       // 5529
    // we check variadic calls that are not the one defined                                                            // 5530
    // .browse()/.browse(fn)                                                                                           // 5531
    // => page = 0                                                                                                     // 5532
    if (arguments.length === 0 || arguments.length === 1 && typeof arguments[0] === 'function') {                      // 5533
      page = 0;                                                                                                        // 5534
      callback = arguments[0];                                                                                         // 5535
      query = undefined;                                                                                               // 5536
    } else if (typeof arguments[0] === 'number') {                                                                     // 5537
      // .browse(2)/.browse(2, 10)/.browse(2, fn)/.browse(2, 10, fn)                                                   // 5538
      page = arguments[0];                                                                                             // 5539
      if (typeof arguments[1] === 'number') {                                                                          // 5540
        hitsPerPage = arguments[1];                                                                                    // 5541
      } else if (typeof arguments[1] === 'function') {                                                                 // 5542
        callback = arguments[1];                                                                                       // 5543
        hitsPerPage = undefined;                                                                                       // 5544
      }                                                                                                                // 5545
      query = undefined;                                                                                               // 5546
      queryParameters = undefined;                                                                                     // 5547
    } else if (typeof arguments[0] === 'object') {                                                                     // 5548
      // .browse(queryParameters)/.browse(queryParameters, cb)                                                         // 5549
      if (typeof arguments[1] === 'function') {                                                                        // 5550
        callback = arguments[1];                                                                                       // 5551
      }                                                                                                                // 5552
      queryParameters = arguments[0];                                                                                  // 5553
      query = undefined;                                                                                               // 5554
    } else if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {                               // 5555
      // .browse(query, cb)                                                                                            // 5556
      callback = arguments[1];                                                                                         // 5557
      queryParameters = undefined;                                                                                     // 5558
    }                                                                                                                  // 5559
                                                                                                                       // 5560
    // otherwise it's a .browse(query)/.browse(query, queryParameters)/.browse(query, queryParameters, cb)             // 5561
                                                                                                                       // 5562
    // get search query parameters combining various possible calls                                                    // 5563
    // to .browse();                                                                                                   // 5564
    queryParameters = merge({}, queryParameters || {}, {                                                               // 5565
      page: page,                                                                                                      // 5566
      hitsPerPage: hitsPerPage,                                                                                        // 5567
      query: query                                                                                                     // 5568
    });                                                                                                                // 5569
                                                                                                                       // 5570
    var params = this.as._getSearchParams(queryParameters, '');                                                        // 5571
                                                                                                                       // 5572
    return this.as._jsonRequest({                                                                                      // 5573
      method: 'GET',                                                                                                   // 5574
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/browse?' + params,                               // 5575
      hostType: 'read',                                                                                                // 5576
      callback: callback                                                                                               // 5577
    });                                                                                                                // 5578
  },                                                                                                                   // 5579
                                                                                                                       // 5580
  /*                                                                                                                   // 5581
   * Continue browsing from a previous position (cursor), obtained via a call to `.browse()`.                          // 5582
   *                                                                                                                   // 5583
   * @param {string} query - The full text query                                                                       // 5584
   * @param {Object} [queryParameters] - Any search query parameter                                                    // 5585
   * @param {Function} [callback] - The result callback called with two arguments                                      // 5586
   *   error: null or Error('message')                                                                                 // 5587
   *   content: the server answer with the browse result                                                               // 5588
   * @return {Promise|undefined} Returns a promise if no callback given                                                // 5589
   * @example                                                                                                          // 5590
   * index.browseFrom('14lkfsakl32', callback);                                                                        // 5591
   * @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}                           // 5592
   */                                                                                                                  // 5593
  browseFrom: function(cursor, callback) {                                                                             // 5594
    return this.as._jsonRequest({                                                                                      // 5595
      method: 'GET',                                                                                                   // 5596
      url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/browse?cursor=' + encodeURIComponent(cursor),        // 5597
      hostType: 'read',                                                                                                // 5598
      callback: callback                                                                                               // 5599
    });                                                                                                                // 5600
  },                                                                                                                   // 5601
                                                                                                                       // 5602
  /*                                                                                                                   // 5603
   * Browse all content from an index using events. Basically this will do                                             // 5604
   * .browse() -> .browseFrom -> .browseFrom -> .. until all the results are returned                                  // 5605
   *                                                                                                                   // 5606
   * @param {string} query - The full text query                                                                       // 5607
   * @param {Object} [queryParameters] - Any search query parameter                                                    // 5608
   * @return {EventEmitter}                                                                                            // 5609
   * @example                                                                                                          // 5610
   * var browser = index.browseAll('cool songs', {                                                                     // 5611
   *   tagFilters: 'public,comments',                                                                                  // 5612
   *   hitsPerPage: 500                                                                                                // 5613
   * });                                                                                                               // 5614
   *                                                                                                                   // 5615
   * browser.on('result', function resultCallback(content) {                                                           // 5616
   *   console.log(content.hits);                                                                                      // 5617
   * });                                                                                                               // 5618
   *                                                                                                                   // 5619
   * // if any error occurs, you get it                                                                                // 5620
   * browser.on('error', function(err) {                                                                               // 5621
   *   throw err;                                                                                                      // 5622
   * });                                                                                                               // 5623
   *                                                                                                                   // 5624
   * // when you have browsed the whole index, you get this event                                                      // 5625
   * browser.on('end', function() {                                                                                    // 5626
   *   console.log('finished');                                                                                        // 5627
   * });                                                                                                               // 5628
   *                                                                                                                   // 5629
   * // at any point if you want to stop the browsing process, you can stop it manually                                // 5630
   * // otherwise it will go on and on                                                                                 // 5631
   * browser.stop();                                                                                                   // 5632
   *                                                                                                                   // 5633
   * @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}                           // 5634
   */                                                                                                                  // 5635
  browseAll: function(query, queryParameters) {                                                                        // 5636
    if (typeof query === 'object') {                                                                                   // 5637
      queryParameters = query;                                                                                         // 5638
      query = undefined;                                                                                               // 5639
    }                                                                                                                  // 5640
                                                                                                                       // 5641
    var merge = require(55);                                                                                           // 5642
                                                                                                                       // 5643
    var IndexBrowser = require(58);                                                                                    // 5644
                                                                                                                       // 5645
    var browser = new IndexBrowser();                                                                                  // 5646
    var client = this.as;                                                                                              // 5647
    var index = this;                                                                                                  // 5648
    var params = client._getSearchParams(                                                                              // 5649
      merge({}, queryParameters || {}, {                                                                               // 5650
        query: query                                                                                                   // 5651
      }), ''                                                                                                           // 5652
    );                                                                                                                 // 5653
                                                                                                                       // 5654
    // start browsing                                                                                                  // 5655
    browseLoop();                                                                                                      // 5656
                                                                                                                       // 5657
    function browseLoop(cursor) {                                                                                      // 5658
      if (browser._stopped) {                                                                                          // 5659
        return;                                                                                                        // 5660
      }                                                                                                                // 5661
                                                                                                                       // 5662
      var queryString;                                                                                                 // 5663
                                                                                                                       // 5664
      if (cursor !== undefined) {                                                                                      // 5665
        queryString = 'cursor=' + encodeURIComponent(cursor);                                                          // 5666
      } else {                                                                                                         // 5667
        queryString = params;                                                                                          // 5668
      }                                                                                                                // 5669
                                                                                                                       // 5670
      client._jsonRequest({                                                                                            // 5671
        method: 'GET',                                                                                                 // 5672
        url: '/1/indexes/' + encodeURIComponent(index.indexName) + '/browse?' + queryString,                           // 5673
        hostType: 'read',                                                                                              // 5674
        callback: browseCallback                                                                                       // 5675
      });                                                                                                              // 5676
    }                                                                                                                  // 5677
                                                                                                                       // 5678
    function browseCallback(err, content) {                                                                            // 5679
      if (browser._stopped) {                                                                                          // 5680
        return;                                                                                                        // 5681
      }                                                                                                                // 5682
                                                                                                                       // 5683
      if (err) {                                                                                                       // 5684
        browser._error(err);                                                                                           // 5685
        return;                                                                                                        // 5686
      }                                                                                                                // 5687
                                                                                                                       // 5688
      browser._result(content);                                                                                        // 5689
                                                                                                                       // 5690
      // no cursor means we are finished browsing                                                                      // 5691
      if (content.cursor === undefined) {                                                                              // 5692
        browser._end();                                                                                                // 5693
        return;                                                                                                        // 5694
      }                                                                                                                // 5695
                                                                                                                       // 5696
      browseLoop(content.cursor);                                                                                      // 5697
    }                                                                                                                  // 5698
                                                                                                                       // 5699
    return browser;                                                                                                    // 5700
  },                                                                                                                   // 5701
                                                                                                                       // 5702
  /*                                                                                                                   // 5703
   * Get a Typeahead.js adapter                                                                                        // 5704
   * @param searchParams contains an object with query parameters (see search for details)                             // 5705
   */                                                                                                                  // 5706
  ttAdapter: function(params) {                                                                                        // 5707
    var self = this;                                                                                                   // 5708
    return function ttAdapter(query, syncCb, asyncCb) {                                                                // 5709
      var cb;                                                                                                          // 5710
                                                                                                                       // 5711
      if (typeof asyncCb === 'function') {                                                                             // 5712
        // typeahead 0.11                                                                                              // 5713
        cb = asyncCb;                                                                                                  // 5714
      } else {                                                                                                         // 5715
        // pre typeahead 0.11                                                                                          // 5716
        cb = syncCb;                                                                                                   // 5717
      }                                                                                                                // 5718
                                                                                                                       // 5719
      self.search(query, params, function searchDone(err, content) {                                                   // 5720
        if (err) {                                                                                                     // 5721
          cb(err);                                                                                                     // 5722
          return;                                                                                                      // 5723
        }                                                                                                              // 5724
                                                                                                                       // 5725
        cb(content.hits);                                                                                              // 5726
      });                                                                                                              // 5727
    };                                                                                                                 // 5728
  },                                                                                                                   // 5729
                                                                                                                       // 5730
  /*                                                                                                                   // 5731
   * Wait the publication of a task on the server.                                                                     // 5732
   * All server task are asynchronous and you can check with this method that the task is published.                   // 5733
   *                                                                                                                   // 5734
   * @param taskID the id of the task returned by server                                                               // 5735
   * @param callback the result callback with with two arguments:                                                      // 5736
   *  error: null or Error('message')                                                                                  // 5737
   *  content: the server answer that contains the list of results                                                     // 5738
   */                                                                                                                  // 5739
  waitTask: function(taskID, callback) {                                                                               // 5740
    // wait minimum 100ms before retrying                                                                              // 5741
    var baseDelay = 100;                                                                                               // 5742
    // wait maximum 5s before retrying                                                                                 // 5743
    var maxDelay = 5000;                                                                                               // 5744
    var loop = 0;                                                                                                      // 5745
                                                                                                                       // 5746
    // waitTask() must be handled differently from other methods,                                                      // 5747
    // it's a recursive method using a timeout                                                                         // 5748
    var indexObj = this;                                                                                               // 5749
    var client = indexObj.as;                                                                                          // 5750
                                                                                                                       // 5751
    var promise = retryLoop();                                                                                         // 5752
                                                                                                                       // 5753
    function retryLoop() {                                                                                             // 5754
      return client._jsonRequest({                                                                                     // 5755
        method: 'GET',                                                                                                 // 5756
        hostType: 'read',                                                                                              // 5757
        url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/task/' + taskID                                // 5758
      }).then(function success(content) {                                                                              // 5759
        loop++;                                                                                                        // 5760
        var delay = baseDelay * loop * loop;                                                                           // 5761
        if (delay > maxDelay) {                                                                                        // 5762
          delay = maxDelay;                                                                                            // 5763
        }                                                                                                              // 5764
                                                                                                                       // 5765
        if (content.status !== 'published') {                                                                          // 5766
          return client._promise.delay(delay).then(retryLoop);                                                         // 5767
        }                                                                                                              // 5768
                                                                                                                       // 5769
        return content;                                                                                                // 5770
      });                                                                                                              // 5771
    }                                                                                                                  // 5772
                                                                                                                       // 5773
    if (!callback) {                                                                                                   // 5774
      return promise;                                                                                                  // 5775
    }                                                                                                                  // 5776
                                                                                                                       // 5777
    promise.then(successCb, failureCb);                                                                                // 5778
                                                                                                                       // 5779
    function successCb(content) {                                                                                      // 5780
      exitPromise(function exit() {                                                                                    // 5781
        callback(null, content);                                                                                       // 5782
      }, client._setTimeout || setTimeout);                                                                            // 5783
    }                                                                                                                  // 5784
                                                                                                                       // 5785
    function failureCb(err) {                                                                                          // 5786
      exitPromise(function exit() {                                                                                    // 5787
        callback(err);                                                                                                 // 5788
      }, client._setTimeout || setTimeout);                                                                            // 5789
    }                                                                                                                  // 5790
  },                                                                                                                   // 5791
                                                                                                                       // 5792
  /*                                                                                                                   // 5793
   * This function deletes the index content. Settings and index specific API keys are kept untouched.                 // 5794
   *                                                                                                                   // 5795
   * @param callback (optional) the result callback called with two arguments                                          // 5796
   *  error: null or Error('message')                                                                                  // 5797
   *  content: the settings object or the error message if a failure occured                                           // 5798
   */                                                                                                                  // 5799
  clearIndex: function(callback) {                                                                                     // 5800
    var indexObj = this;                                                                                               // 5801
    return this.as._jsonRequest({                                                                                      // 5802
      method: 'POST',                                                                                                  // 5803
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/clear',                                          // 5804
      hostType: 'write',                                                                                               // 5805
      callback: callback                                                                                               // 5806
    });                                                                                                                // 5807
  },                                                                                                                   // 5808
  /*                                                                                                                   // 5809
   * Get settings of this index                                                                                        // 5810
   *                                                                                                                   // 5811
   * @param callback (optional) the result callback called with two arguments                                          // 5812
   *  error: null or Error('message')                                                                                  // 5813
   *  content: the settings object or the error message if a failure occured                                           // 5814
   */                                                                                                                  // 5815
  getSettings: function(callback) {                                                                                    // 5816
    var indexObj = this;                                                                                               // 5817
    return this.as._jsonRequest({                                                                                      // 5818
      method: 'GET',                                                                                                   // 5819
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/settings',                                       // 5820
      hostType: 'read',                                                                                                // 5821
      callback: callback                                                                                               // 5822
    });                                                                                                                // 5823
  },                                                                                                                   // 5824
                                                                                                                       // 5825
  /*                                                                                                                   // 5826
   * Set settings for this index                                                                                       // 5827
   *                                                                                                                   // 5828
   * @param settigns the settings object that can contains :                                                           // 5829
   * - minWordSizefor1Typo: (integer) the minimum number of characters to accept one typo (default = 3).               // 5830
   * - minWordSizefor2Typos: (integer) the minimum number of characters to accept two typos (default = 7).             // 5831
   * - hitsPerPage: (integer) the number of hits per page (default = 10).                                              // 5832
   * - attributesToRetrieve: (array of strings) default list of attributes to retrieve in objects.                     // 5833
   *   If set to null, all attributes are retrieved.                                                                   // 5834
   * - attributesToHighlight: (array of strings) default list of attributes to highlight.                              // 5835
   *   If set to null, all indexed attributes are highlighted.                                                         // 5836
   * - attributesToSnippet**: (array of strings) default list of attributes to snippet alongside the number            // 5837
   * of words to return (syntax is attributeName:nbWords).                                                             // 5838
   *   By default no snippet is computed. If set to null, no snippet is computed.                                      // 5839
   * - attributesToIndex: (array of strings) the list of fields you want to index.                                     // 5840
   *   If set to null, all textual and numerical attributes of your objects are indexed,                               // 5841
   *   but you should update it to get optimal results.                                                                // 5842
   *   This parameter has two important uses:                                                                          // 5843
   *     - Limit the attributes to index: For example if you store a binary image in base64,                           // 5844
   *     you want to store it and be able to                                                                           // 5845
   *       retrieve it but you don't want to search in the base64 string.                                              // 5846
   *     - Control part of the ranking*: (see the ranking parameter for full explanation)                              // 5847
   *     Matches in attributes at the beginning of                                                                     // 5848
   *       the list will be considered more important than matches in attributes further down the list.                // 5849
   *       In one attribute, matching text at the beginning of the attribute will be                                   // 5850
   *       considered more important than text after, you can disable                                                  // 5851
   *       this behavior if you add your attribute inside `unordered(AttributeName)`,                                  // 5852
   *       for example attributesToIndex: ["title", "unordered(text)"].                                                // 5853
   * - attributesForFaceting: (array of strings) The list of fields you want to use for faceting.                      // 5854
   *   All strings in the attribute selected for faceting are extracted and added as a facet.                          // 5855
   *   If set to null, no attribute is used for faceting.                                                              // 5856
   * - attributeForDistinct: (string) The attribute name used for the Distinct feature.                                // 5857
   * This feature is similar to the SQL "distinct" keyword: when enabled                                               // 5858
   *   in query with the distinct=1 parameter, all hits containing a duplicate                                         // 5859
   *   value for this attribute are removed from results.                                                              // 5860
   *   For example, if the chosen attribute is show_name and several hits have                                         // 5861
   *   the same value for show_name, then only the best one is kept and others are removed.                            // 5862
   * - ranking: (array of strings) controls the way results are sorted.                                                // 5863
   *   We have six available criteria:                                                                                 // 5864
   *    - typo: sort according to number of typos,                                                                     // 5865
   *    - geo: sort according to decreassing distance when performing a geo-location based search,                     // 5866
   *    - proximity: sort according to the proximity of query words in hits,                                           // 5867
   *    - attribute: sort according to the order of attributes defined by attributesToIndex,                           // 5868
   *    - exact:                                                                                                       // 5869
   *        - if the user query contains one word: sort objects having an attribute                                    // 5870
   *        that is exactly the query word before others.                                                              // 5871
   *          For example if you search for the "V" TV show, you want to find it                                       // 5872
   *          with the "V" query and avoid to have all popular TV                                                      // 5873
   *          show starting by the v letter before it.                                                                 // 5874
   *        - if the user query contains multiple words: sort according to the                                         // 5875
   *        number of words that matched exactly (and not as a prefix).                                                // 5876
   *    - custom: sort according to a user defined formula set in **customRanking** attribute.                         // 5877
   *   The standard order is ["typo", "geo", "proximity", "attribute", "exact", "custom"]                              // 5878
   * - customRanking: (array of strings) lets you specify part of the ranking.                                         // 5879
   *   The syntax of this condition is an array of strings containing attributes                                       // 5880
   *   prefixed by asc (ascending order) or desc (descending order) operator.                                          // 5881
   *   For example `"customRanking" => ["desc(population)", "asc(name)"]`                                              // 5882
   * - queryType: Select how the query words are interpreted, it can be one of the following value:                    // 5883
   *   - prefixAll: all query words are interpreted as prefixes,                                                       // 5884
   *   - prefixLast: only the last word is interpreted as a prefix (default behavior),                                 // 5885
   *   - prefixNone: no query word is interpreted as a prefix. This option is not recommended.                         // 5886
   * - highlightPreTag: (string) Specify the string that is inserted before                                            // 5887
   * the highlighted parts in the query result (default to "<em>").                                                    // 5888
   * - highlightPostTag: (string) Specify the string that is inserted after                                            // 5889
   * the highlighted parts in the query result (default to "</em>").                                                   // 5890
   * - optionalWords: (array of strings) Specify a list of words that should                                           // 5891
   * be considered as optional when found in the query.                                                                // 5892
   * @param callback (optional) the result callback called with two arguments                                          // 5893
   *  error: null or Error('message')                                                                                  // 5894
   *  content: the server answer or the error message if a failure occured                                             // 5895
   */                                                                                                                  // 5896
  setSettings: function(settings, callback) {                                                                          // 5897
    var indexObj = this;                                                                                               // 5898
    return this.as._jsonRequest({                                                                                      // 5899
      method: 'PUT',                                                                                                   // 5900
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/settings',                                       // 5901
      hostType: 'write',                                                                                               // 5902
      body: settings,                                                                                                  // 5903
      callback: callback                                                                                               // 5904
    });                                                                                                                // 5905
  },                                                                                                                   // 5906
  /*                                                                                                                   // 5907
   * List all existing user keys associated to this index                                                              // 5908
   *                                                                                                                   // 5909
   * @param callback the result callback called with two arguments                                                     // 5910
   *  error: null or Error('message')                                                                                  // 5911
   *  content: the server answer with user keys list                                                                   // 5912
   */                                                                                                                  // 5913
  listUserKeys: function(callback) {                                                                                   // 5914
    var indexObj = this;                                                                                               // 5915
    return this.as._jsonRequest({                                                                                      // 5916
      method: 'GET',                                                                                                   // 5917
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/keys',                                           // 5918
      hostType: 'read',                                                                                                // 5919
      callback: callback                                                                                               // 5920
    });                                                                                                                // 5921
  },                                                                                                                   // 5922
  /*                                                                                                                   // 5923
   * Get ACL of a user key associated to this index                                                                    // 5924
   *                                                                                                                   // 5925
   * @param key                                                                                                        // 5926
   * @param callback the result callback called with two arguments                                                     // 5927
   *  error: null or Error('message')                                                                                  // 5928
   *  content: the server answer with user keys list                                                                   // 5929
   */                                                                                                                  // 5930
  getUserKeyACL: function(key, callback) {                                                                             // 5931
    var indexObj = this;                                                                                               // 5932
    return this.as._jsonRequest({                                                                                      // 5933
      method: 'GET',                                                                                                   // 5934
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/keys/' + key,                                    // 5935
      hostType: 'read',                                                                                                // 5936
      callback: callback                                                                                               // 5937
    });                                                                                                                // 5938
  },                                                                                                                   // 5939
  /*                                                                                                                   // 5940
   * Delete an existing user key associated to this index                                                              // 5941
   *                                                                                                                   // 5942
   * @param key                                                                                                        // 5943
   * @param callback the result callback called with two arguments                                                     // 5944
   *  error: null or Error('message')                                                                                  // 5945
   *  content: the server answer with user keys list                                                                   // 5946
   */                                                                                                                  // 5947
  deleteUserKey: function(key, callback) {                                                                             // 5948
    var indexObj = this;                                                                                               // 5949
    return this.as._jsonRequest({                                                                                      // 5950
      method: 'DELETE',                                                                                                // 5951
      url: '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/keys/' + key,                                    // 5952
      hostType: 'write',                                                                                               // 5953
      callback: callback                                                                                               // 5954
    });                                                                                                                // 5955
  },                                                                                                                   // 5956
  /*                                                                                                                   // 5957
   * Add a new API key to this index                                                                                   // 5958
   *                                                                                                                   // 5959
   * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that                        // 5960
   *   can contains the following values:                                                                              // 5961
   *     - search: allow to search (https and http)                                                                    // 5962
   *     - addObject: allows to add/update an object in the index (https only)                                         // 5963
   *     - deleteObject : allows to delete an existing object (https only)                                             // 5964
   *     - deleteIndex : allows to delete index content (https only)                                                   // 5965
   *     - settings : allows to get index settings (https only)                                                        // 5966
   *     - editSettings : allows to change index settings (https only)                                                 // 5967
   * @param {Object} [params] - Optionnal parameters to set for the key                                                // 5968
   * @param {number} params.validity - Number of seconds after which the key will                                      // 5969
   * be automatically removed (0 means no time limit for this key)                                                     // 5970
   * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour           // 5971
   * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call                     // 5972
   * @param {string} params.description - A description for your key                                                   // 5973
   * @param {string[]} params.referers - A list of authorized referers                                                 // 5974
   * @param {Object} params.queryParameters - Force the key to use specific query parameters                           // 5975
   * @param {Function} callback - The result callback called with two arguments                                        // 5976
   *   error: null or Error('message')                                                                                 // 5977
   *   content: the server answer with user keys list                                                                  // 5978
   * @return {Promise|undefined} Returns a promise if no callback given                                                // 5979
   * @example                                                                                                          // 5980
   * index.addUserKey(['search'], {                                                                                    // 5981
   *   validity: 300,                                                                                                  // 5982
   *   maxQueriesPerIPPerHour: 2000,                                                                                   // 5983
   *   maxHitsPerQuery: 3,                                                                                             // 5984
   *   description: 'Eat three fruits',                                                                                // 5985
   *   referers: ['*.algolia.com'],                                                                                    // 5986
   *   queryParameters: {                                                                                              // 5987
   *     tagFilters: ['public'],                                                                                       // 5988
   *   }                                                                                                               // 5989
   * })                                                                                                                // 5990
   * @see {@link https://www.algolia.com/doc/rest_api#AddIndexKey|Algolia REST API Documentation}                      // 5991
   */                                                                                                                  // 5992
  addUserKey: function(acls, params, callback) {                                                                       // 5993
    var isArray = require(46);                                                                                         // 5994
    var usage = 'Usage: index.addUserKey(arrayOfAcls[, params, callback])';                                            // 5995
                                                                                                                       // 5996
    if (!isArray(acls)) {                                                                                              // 5997
      throw new Error(usage);                                                                                          // 5998
    }                                                                                                                  // 5999
                                                                                                                       // 6000
    if (arguments.length === 1 || typeof params === 'function') {                                                      // 6001
      callback = params;                                                                                               // 6002
      params = null;                                                                                                   // 6003
    }                                                                                                                  // 6004
                                                                                                                       // 6005
    var postObj = {                                                                                                    // 6006
      acl: acls                                                                                                        // 6007
    };                                                                                                                 // 6008
                                                                                                                       // 6009
    if (params) {                                                                                                      // 6010
      postObj.validity = params.validity;                                                                              // 6011
      postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;                                                  // 6012
      postObj.maxHitsPerQuery = params.maxHitsPerQuery;                                                                // 6013
      postObj.description = params.description;                                                                        // 6014
                                                                                                                       // 6015
      if (params.queryParameters) {                                                                                    // 6016
        postObj.queryParameters = this.as._getSearchParams(params.queryParameters, '');                                // 6017
      }                                                                                                                // 6018
                                                                                                                       // 6019
      postObj.referers = params.referers;                                                                              // 6020
    }                                                                                                                  // 6021
                                                                                                                       // 6022
    return this.as._jsonRequest({                                                                                      // 6023
      method: 'POST',                                                                                                  // 6024
      url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/keys',                                               // 6025
      body: postObj,                                                                                                   // 6026
      hostType: 'write',                                                                                               // 6027
      callback: callback                                                                                               // 6028
    });                                                                                                                // 6029
  },                                                                                                                   // 6030
                                                                                                                       // 6031
  /**                                                                                                                  // 6032
   * Add an existing user key associated to this index                                                                 // 6033
   * @deprecated use index.addUserKey()                                                                                // 6034
   */                                                                                                                  // 6035
  addUserKeyWithValidity: deprecate(function deprecatedAddUserKeyWithValidity(acls, params, callback) {                // 6036
    return this.addUserKey(acls, params, callback);                                                                    // 6037
  }, deprecatedMessage('index.addUserKeyWithValidity()', 'index.addUserKey()')),                                       // 6038
                                                                                                                       // 6039
  /**                                                                                                                  // 6040
   * Update an existing API key of this index                                                                          // 6041
   * @param {string} key - The key to update                                                                           // 6042
   * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that                        // 6043
   *   can contains the following values:                                                                              // 6044
   *     - search: allow to search (https and http)                                                                    // 6045
   *     - addObject: allows to add/update an object in the index (https only)                                         // 6046
   *     - deleteObject : allows to delete an existing object (https only)                                             // 6047
   *     - deleteIndex : allows to delete index content (https only)                                                   // 6048
   *     - settings : allows to get index settings (https only)                                                        // 6049
   *     - editSettings : allows to change index settings (https only)                                                 // 6050
   * @param {Object} [params] - Optionnal parameters to set for the key                                                // 6051
   * @param {number} params.validity - Number of seconds after which the key will                                      // 6052
   * be automatically removed (0 means no time limit for this key)                                                     // 6053
   * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour           // 6054
   * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call                     // 6055
   * @param {string} params.description - A description for your key                                                   // 6056
   * @param {string[]} params.referers - A list of authorized referers                                                 // 6057
   * @param {Object} params.queryParameters - Force the key to use specific query parameters                           // 6058
   * @param {Function} callback - The result callback called with two arguments                                        // 6059
   *   error: null or Error('message')                                                                                 // 6060
   *   content: the server answer with user keys list                                                                  // 6061
   * @return {Promise|undefined} Returns a promise if no callback given                                                // 6062
   * @example                                                                                                          // 6063
   * index.updateUserKey('APIKEY', ['search'], {                                                                       // 6064
   *   validity: 300,                                                                                                  // 6065
   *   maxQueriesPerIPPerHour: 2000,                                                                                   // 6066
   *   maxHitsPerQuery: 3,                                                                                             // 6067
   *   description: 'Eat three fruits',                                                                                // 6068
   *   referers: ['*.algolia.com'],                                                                                    // 6069
   *   queryParameters: {                                                                                              // 6070
   *     tagFilters: ['public'],                                                                                       // 6071
   *   }                                                                                                               // 6072
   * })                                                                                                                // 6073
   * @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}                   // 6074
   */                                                                                                                  // 6075
  updateUserKey: function(key, acls, params, callback) {                                                               // 6076
    var isArray = require(46);                                                                                         // 6077
    var usage = 'Usage: index.updateUserKey(key, arrayOfAcls[, params, callback])';                                    // 6078
                                                                                                                       // 6079
    if (!isArray(acls)) {                                                                                              // 6080
      throw new Error(usage);                                                                                          // 6081
    }                                                                                                                  // 6082
                                                                                                                       // 6083
    if (arguments.length === 2 || typeof params === 'function') {                                                      // 6084
      callback = params;                                                                                               // 6085
      params = null;                                                                                                   // 6086
    }                                                                                                                  // 6087
                                                                                                                       // 6088
    var putObj = {                                                                                                     // 6089
      acl: acls                                                                                                        // 6090
    };                                                                                                                 // 6091
                                                                                                                       // 6092
    if (params) {                                                                                                      // 6093
      putObj.validity = params.validity;                                                                               // 6094
      putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;                                                   // 6095
      putObj.maxHitsPerQuery = params.maxHitsPerQuery;                                                                 // 6096
      putObj.description = params.description;                                                                         // 6097
                                                                                                                       // 6098
      if (params.queryParameters) {                                                                                    // 6099
        putObj.queryParameters = this.as._getSearchParams(params.queryParameters, '');                                 // 6100
      }                                                                                                                // 6101
                                                                                                                       // 6102
      putObj.referers = params.referers;                                                                               // 6103
    }                                                                                                                  // 6104
                                                                                                                       // 6105
    return this.as._jsonRequest({                                                                                      // 6106
      method: 'PUT',                                                                                                   // 6107
      url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/keys/' + key,                                        // 6108
      body: putObj,                                                                                                    // 6109
      hostType: 'write',                                                                                               // 6110
      callback: callback                                                                                               // 6111
    });                                                                                                                // 6112
  },                                                                                                                   // 6113
                                                                                                                       // 6114
  _search: function(params, callback) {                                                                                // 6115
    return this.as._jsonRequest({                                                                                      // 6116
      cache: this.cache,                                                                                               // 6117
      method: 'POST',                                                                                                  // 6118
      url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/query',                                              // 6119
      body: {params: params},                                                                                          // 6120
      hostType: 'read',                                                                                                // 6121
      fallback: {                                                                                                      // 6122
        method: 'GET',                                                                                                 // 6123
        url: '/1/indexes/' + encodeURIComponent(this.indexName),                                                       // 6124
        body: {params: params}                                                                                         // 6125
      },                                                                                                               // 6126
      callback: callback                                                                                               // 6127
    });                                                                                                                // 6128
  },                                                                                                                   // 6129
                                                                                                                       // 6130
  as: null,                                                                                                            // 6131
  indexName: null,                                                                                                     // 6132
  typeAheadArgs: null,                                                                                                 // 6133
  typeAheadValueOption: null                                                                                           // 6134
};                                                                                                                     // 6135
                                                                                                                       // 6136
// extracted from https://github.com/component/map/blob/master/index.js                                                // 6137
// without the crazy toFunction thing                                                                                  // 6138
function map(arr, fn) {                                                                                                // 6139
  var ret = [];                                                                                                        // 6140
  for (var i = 0; i < arr.length; ++i) {                                                                               // 6141
    ret.push(fn(arr[i], i));                                                                                           // 6142
  }                                                                                                                    // 6143
  return ret;                                                                                                          // 6144
}                                                                                                                      // 6145
                                                                                                                       // 6146
function prepareHost(protocol) {                                                                                       // 6147
  return function prepare(host) {                                                                                      // 6148
    return protocol + '//' + host.toLowerCase();                                                                       // 6149
  };                                                                                                                   // 6150
}                                                                                                                      // 6151
                                                                                                                       // 6152
function notImplemented() {                                                                                            // 6153
  var message = 'Not implemented in this environment.\n' +                                                             // 6154
    'If you feel this is a mistake, write to support@algolia.com';                                                     // 6155
                                                                                                                       // 6156
  throw new errors.AlgoliaSearchError(message);                                                                        // 6157
}                                                                                                                      // 6158
                                                                                                                       // 6159
function deprecatedMessage(previousUsage, newUsage) {                                                                  // 6160
  var githubAnchorLink = previousUsage.toLowerCase()                                                                   // 6161
    .replace('.', '')                                                                                                  // 6162
    .replace('()', '');                                                                                                // 6163
                                                                                                                       // 6164
  return 'algoliasearch: `' + previousUsage + '` was replaced by `' + newUsage +                                       // 6165
    '`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#' + githubAnchorLink;            // 6166
}                                                                                                                      // 6167
                                                                                                                       // 6168
// Parse cloud does not supports setTimeout                                                                            // 6169
// We do not store a setTimeout reference in the client everytime                                                      // 6170
// We only fallback to a fake setTimeout when not available                                                            // 6171
// setTimeout cannot be override globally sadly                                                                        // 6172
function exitPromise(fn, _setTimeout) {                                                                                // 6173
  _setTimeout(fn, 0);                                                                                                  // 6174
}                                                                                                                      // 6175
                                                                                                                       // 6176
function deprecate(fn, message) {                                                                                      // 6177
  var warned = false;                                                                                                  // 6178
                                                                                                                       // 6179
  function deprecated() {                                                                                              // 6180
    if (!warned) {                                                                                                     // 6181
      /* eslint no-console:0 */                                                                                        // 6182
      console.log(message);                                                                                            // 6183
      warned = true;                                                                                                   // 6184
    }                                                                                                                  // 6185
                                                                                                                       // 6186
    return fn.apply(this, arguments);                                                                                  // 6187
  }                                                                                                                    // 6188
                                                                                                                       // 6189
  return deprecated;                                                                                                   // 6190
}                                                                                                                      // 6191
                                                                                                                       // 6192
// Prototype.js < 1.7, a widely used library, defines a weird                                                          // 6193
// Array.prototype.toJSON function that will fail to stringify our content                                             // 6194
// appropriately                                                                                                       // 6195
// refs:                                                                                                               // 6196
//   - https://groups.google.com/forum/#!topic/prototype-core/E-SAVvV_V9Q                                              // 6197
//   - https://github.com/sstephenson/prototype/commit/038a2985a70593c1a86c230fadbdfe2e4898a48c                        // 6198
//   - http://stackoverflow.com/a/3148441/147079                                                                       // 6199
function safeJSONStringify(obj) {                                                                                      // 6200
  /* eslint no-extend-native:0 */                                                                                      // 6201
                                                                                                                       // 6202
  if (Array.prototype.toJSON === undefined) {                                                                          // 6203
    return JSON.stringify(obj);                                                                                        // 6204
  }                                                                                                                    // 6205
                                                                                                                       // 6206
  var toJSON = Array.prototype.toJSON;                                                                                 // 6207
  delete Array.prototype.toJSON;                                                                                       // 6208
  var out = JSON.stringify(obj);                                                                                       // 6209
  Array.prototype.toJSON = toJSON;                                                                                     // 6210
                                                                                                                       // 6211
  return out;                                                                                                          // 6212
}                                                                                                                      // 6213
                                                                                                                       // 6214
function buildSearchMethod(queryParam) {                                                                               // 6215
  return function search(query, args, callback) {                                                                      // 6216
    // warn V2 users on how to search                                                                                  // 6217
    if (typeof query === 'function' && typeof args === 'object' ||                                                     // 6218
      typeof callback === 'object') {                                                                                  // 6219
      // .search(query, params, cb)                                                                                    // 6220
      // .search(cb, params)                                                                                           // 6221
      throw new errors.AlgoliaSearchError('index.search usage is index.search(query, params, cb)');                    // 6222
    }                                                                                                                  // 6223
                                                                                                                       // 6224
    if (arguments.length === 0 || typeof query === 'function') {                                                       // 6225
      // .search(), .search(cb)                                                                                        // 6226
      callback = query;                                                                                                // 6227
      query = '';                                                                                                      // 6228
    } else if (arguments.length === 1 || typeof args === 'function') {                                                 // 6229
      // .search(query/args), .search(query, cb)                                                                       // 6230
      callback = args;                                                                                                 // 6231
      args = undefined;                                                                                                // 6232
    }                                                                                                                  // 6233
                                                                                                                       // 6234
    // .search(args), careful: typeof null === 'object'                                                                // 6235
    if (typeof query === 'object' && query !== null) {                                                                 // 6236
      args = query;                                                                                                    // 6237
      query = undefined;                                                                                               // 6238
    } else if (query === undefined || query === null) { // .search(undefined/null)                                     // 6239
      query = '';                                                                                                      // 6240
    }                                                                                                                  // 6241
                                                                                                                       // 6242
    var params = '';                                                                                                   // 6243
                                                                                                                       // 6244
    if (query !== undefined) {                                                                                         // 6245
      params += queryParam + '=' + encodeURIComponent(query);                                                          // 6246
    }                                                                                                                  // 6247
                                                                                                                       // 6248
    if (args !== undefined) {                                                                                          // 6249
      // `_getSearchParams` will augment params, do not be fooled by the = versus += from previous if                  // 6250
      params = this.as._getSearchParams(args, params);                                                                 // 6251
    }                                                                                                                  // 6252
                                                                                                                       // 6253
    return this._search(params, callback);                                                                             // 6254
  };                                                                                                                   // 6255
}                                                                                                                      // 6256
                                                                                                                       // 6257
}).call(this,require(2))                                                                                               // 6258
},{"11":11,"2":2,"43":43,"46":46,"55":55,"58":58,"6":6,"63":63}],58:[function(require,module,exports){                 // 6259
'use strict';                                                                                                          // 6260
                                                                                                                       // 6261
// This is the object returned by the `index.browseAll()` method                                                       // 6262
                                                                                                                       // 6263
module.exports = IndexBrowser;                                                                                         // 6264
                                                                                                                       // 6265
var inherits = require(10);                                                                                            // 6266
var EventEmitter = require(1).EventEmitter;                                                                            // 6267
                                                                                                                       // 6268
function IndexBrowser() {                                                                                              // 6269
}                                                                                                                      // 6270
                                                                                                                       // 6271
inherits(IndexBrowser, EventEmitter);                                                                                  // 6272
                                                                                                                       // 6273
IndexBrowser.prototype.stop = function() {                                                                             // 6274
  this._stopped = true;                                                                                                // 6275
  this._clean();                                                                                                       // 6276
};                                                                                                                     // 6277
                                                                                                                       // 6278
IndexBrowser.prototype._end = function() {                                                                             // 6279
  this.emit('end');                                                                                                    // 6280
  this._clean();                                                                                                       // 6281
};                                                                                                                     // 6282
                                                                                                                       // 6283
IndexBrowser.prototype._error = function(err) {                                                                        // 6284
  this.emit('error', err);                                                                                             // 6285
  this._clean();                                                                                                       // 6286
};                                                                                                                     // 6287
                                                                                                                       // 6288
IndexBrowser.prototype._result = function(content) {                                                                   // 6289
  this.emit('result', content);                                                                                        // 6290
};                                                                                                                     // 6291
                                                                                                                       // 6292
IndexBrowser.prototype._clean = function() {                                                                           // 6293
  this.removeAllListeners('stop');                                                                                     // 6294
  this.removeAllListeners('end');                                                                                      // 6295
  this.removeAllListeners('error');                                                                                    // 6296
  this.removeAllListeners('result');                                                                                   // 6297
};                                                                                                                     // 6298
                                                                                                                       // 6299
},{"1":1,"10":10}],59:[function(require,module,exports){                                                               // 6300
'use strict';                                                                                                          // 6301
                                                                                                                       // 6302
// This is the standalone browser build entry point                                                                    // 6303
// Browser implementation of the Algolia Search JavaScript client,                                                     // 6304
// using XMLHttpRequest, XDomainRequest and JSONP as fallback                                                          // 6305
module.exports = algoliasearch;                                                                                        // 6306
                                                                                                                       // 6307
var inherits = require(10);                                                                                            // 6308
var Promise = window.Promise || require(9).Promise;                                                                    // 6309
                                                                                                                       // 6310
var AlgoliaSearch = require(57);                                                                                       // 6311
var errors = require(63);                                                                                              // 6312
var inlineHeaders = require(61);                                                                                       // 6313
var jsonpRequest = require(62);                                                                                        // 6314
                                                                                                                       // 6315
function algoliasearch(applicationID, apiKey, opts) {                                                                  // 6316
  var cloneDeep = require(44);                                                                                         // 6317
                                                                                                                       // 6318
  var getDocumentProtocol = require(60);                                                                               // 6319
                                                                                                                       // 6320
  opts = cloneDeep(opts || {});                                                                                        // 6321
                                                                                                                       // 6322
  if (opts.protocol === undefined) {                                                                                   // 6323
    opts.protocol = getDocumentProtocol();                                                                             // 6324
  }                                                                                                                    // 6325
                                                                                                                       // 6326
  opts._ua = opts._ua || algoliasearch.ua;                                                                             // 6327
                                                                                                                       // 6328
  return new AlgoliaSearchBrowser(applicationID, apiKey, opts);                                                        // 6329
}                                                                                                                      // 6330
                                                                                                                       // 6331
algoliasearch.version = require(64);                                                                                   // 6332
algoliasearch.ua = 'Algolia for vanilla JavaScript ' + algoliasearch.version;                                          // 6333
                                                                                                                       // 6334
// we expose into window no matter how we are used, this will allow                                                    // 6335
// us to easily debug any website running algolia                                                                      // 6336
window.__algolia = {                                                                                                   // 6337
  debug: require(6),                                                                                                   // 6338
  algoliasearch: algoliasearch                                                                                         // 6339
};                                                                                                                     // 6340
                                                                                                                       // 6341
var support = {                                                                                                        // 6342
  hasXMLHttpRequest: 'XMLHttpRequest' in window,                                                                       // 6343
  hasXDomainRequest: 'XDomainRequest' in window,                                                                       // 6344
  cors: 'withCredentials' in new XMLHttpRequest(),                                                                     // 6345
  timeout: 'timeout' in new XMLHttpRequest()                                                                           // 6346
};                                                                                                                     // 6347
                                                                                                                       // 6348
function AlgoliaSearchBrowser() {                                                                                      // 6349
  // call AlgoliaSearch constructor                                                                                    // 6350
  AlgoliaSearch.apply(this, arguments);                                                                                // 6351
}                                                                                                                      // 6352
                                                                                                                       // 6353
inherits(AlgoliaSearchBrowser, AlgoliaSearch);                                                                         // 6354
                                                                                                                       // 6355
AlgoliaSearchBrowser.prototype._request = function request(url, opts) {                                                // 6356
  return new Promise(function wrapRequest(resolve, reject) {                                                           // 6357
    // no cors or XDomainRequest, no request                                                                           // 6358
    if (!support.cors && !support.hasXDomainRequest) {                                                                 // 6359
      // very old browser, not supported                                                                               // 6360
      reject(new errors.Network('CORS not supported'));                                                                // 6361
      return;                                                                                                          // 6362
    }                                                                                                                  // 6363
                                                                                                                       // 6364
    url = inlineHeaders(url, opts.headers);                                                                            // 6365
                                                                                                                       // 6366
    var body = opts.body;                                                                                              // 6367
    var req = support.cors ? new XMLHttpRequest() : new XDomainRequest();                                              // 6368
    var ontimeout;                                                                                                     // 6369
    var timedOut;                                                                                                      // 6370
                                                                                                                       // 6371
    // do not rely on default XHR async flag, as some analytics code like hotjar                                       // 6372
    // breaks it and set it to false by default                                                                        // 6373
    if (req instanceof XMLHttpRequest) {                                                                               // 6374
      req.open(opts.method, url, true);                                                                                // 6375
    } else {                                                                                                           // 6376
      req.open(opts.method, url);                                                                                      // 6377
    }                                                                                                                  // 6378
                                                                                                                       // 6379
    if (support.cors) {                                                                                                // 6380
      if (body) {                                                                                                      // 6381
        if (opts.method === 'POST') {                                                                                  // 6382
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Simple_requests                     // 6383
          req.setRequestHeader('content-type', 'application/x-www-form-urlencoded');                                   // 6384
        } else {                                                                                                       // 6385
          req.setRequestHeader('content-type', 'application/json');                                                    // 6386
        }                                                                                                              // 6387
      }                                                                                                                // 6388
      req.setRequestHeader('accept', 'application/json');                                                              // 6389
    }                                                                                                                  // 6390
                                                                                                                       // 6391
    // we set an empty onprogress listener                                                                             // 6392
    // so that XDomainRequest on IE9 is not aborted                                                                    // 6393
    // refs:                                                                                                           // 6394
    //  - https://github.com/algolia/algoliasearch-client-js/issues/76                                                 // 6395
    //  - https://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment
    req.onprogress = function noop() {};                                                                               // 6397
                                                                                                                       // 6398
    req.onload = load;                                                                                                 // 6399
    req.onerror = error;                                                                                               // 6400
                                                                                                                       // 6401
    if (support.timeout) {                                                                                             // 6402
      // .timeout supported by both XHR and XDR,                                                                       // 6403
      // we do receive timeout event, tested                                                                           // 6404
      req.timeout = opts.timeout;                                                                                      // 6405
                                                                                                                       // 6406
      req.ontimeout = timeout;                                                                                         // 6407
    } else {                                                                                                           // 6408
      ontimeout = setTimeout(timeout, opts.timeout);                                                                   // 6409
    }                                                                                                                  // 6410
                                                                                                                       // 6411
    req.send(body);                                                                                                    // 6412
                                                                                                                       // 6413
    // event object not received in IE8, at least                                                                      // 6414
    // but we do not use it, still important to note                                                                   // 6415
    function load(/* event */) {                                                                                       // 6416
      // When browser does not supports req.timeout, we can                                                            // 6417
      // have both a load and timeout event, since handled by a dumb setTimeout                                        // 6418
      if (timedOut) {                                                                                                  // 6419
        return;                                                                                                        // 6420
      }                                                                                                                // 6421
                                                                                                                       // 6422
      if (!support.timeout) {                                                                                          // 6423
        clearTimeout(ontimeout);                                                                                       // 6424
      }                                                                                                                // 6425
                                                                                                                       // 6426
      var out;                                                                                                         // 6427
                                                                                                                       // 6428
      try {                                                                                                            // 6429
        out = {                                                                                                        // 6430
          body: JSON.parse(req.responseText),                                                                          // 6431
          responseText: req.responseText,                                                                              // 6432
          statusCode: req.status,                                                                                      // 6433
          // XDomainRequest does not have any response headers                                                         // 6434
          headers: req.getAllResponseHeaders && req.getAllResponseHeaders() || {}                                      // 6435
        };                                                                                                             // 6436
      } catch (e) {                                                                                                    // 6437
        out = new errors.UnparsableJSON({                                                                              // 6438
          more: req.responseText                                                                                       // 6439
        });                                                                                                            // 6440
      }                                                                                                                // 6441
                                                                                                                       // 6442
      if (out instanceof errors.UnparsableJSON) {                                                                      // 6443
        reject(out);                                                                                                   // 6444
      } else {                                                                                                         // 6445
        resolve(out);                                                                                                  // 6446
      }                                                                                                                // 6447
    }                                                                                                                  // 6448
                                                                                                                       // 6449
    function error(event) {                                                                                            // 6450
      if (timedOut) {                                                                                                  // 6451
        return;                                                                                                        // 6452
      }                                                                                                                // 6453
                                                                                                                       // 6454
      if (!support.timeout) {                                                                                          // 6455
        clearTimeout(ontimeout);                                                                                       // 6456
      }                                                                                                                // 6457
                                                                                                                       // 6458
      // error event is trigerred both with XDR/XHR on:                                                                // 6459
      //   - DNS error                                                                                                 // 6460
      //   - unallowed cross domain request                                                                            // 6461
      reject(                                                                                                          // 6462
        new errors.Network({                                                                                           // 6463
          more: event                                                                                                  // 6464
        })                                                                                                             // 6465
      );                                                                                                               // 6466
    }                                                                                                                  // 6467
                                                                                                                       // 6468
    function timeout() {                                                                                               // 6469
      if (!support.timeout) {                                                                                          // 6470
        timedOut = true;                                                                                               // 6471
        req.abort();                                                                                                   // 6472
      }                                                                                                                // 6473
                                                                                                                       // 6474
      reject(new errors.RequestTimeout());                                                                             // 6475
    }                                                                                                                  // 6476
  });                                                                                                                  // 6477
};                                                                                                                     // 6478
                                                                                                                       // 6479
AlgoliaSearchBrowser.prototype._request.fallback = function requestFallback(url, opts) {                               // 6480
  url = inlineHeaders(url, opts.headers);                                                                              // 6481
                                                                                                                       // 6482
  return new Promise(function wrapJsonpRequest(resolve, reject) {                                                      // 6483
    jsonpRequest(url, opts, function jsonpRequestDone(err, content) {                                                  // 6484
      if (err) {                                                                                                       // 6485
        reject(err);                                                                                                   // 6486
        return;                                                                                                        // 6487
      }                                                                                                                // 6488
                                                                                                                       // 6489
      resolve(content);                                                                                                // 6490
    });                                                                                                                // 6491
  });                                                                                                                  // 6492
};                                                                                                                     // 6493
                                                                                                                       // 6494
AlgoliaSearchBrowser.prototype._promise = {                                                                            // 6495
  reject: function rejectPromise(val) {                                                                                // 6496
    return Promise.reject(val);                                                                                        // 6497
  },                                                                                                                   // 6498
  resolve: function resolvePromise(val) {                                                                              // 6499
    return Promise.resolve(val);                                                                                       // 6500
  },                                                                                                                   // 6501
  delay: function delayPromise(ms) {                                                                                   // 6502
    return new Promise(function resolveOnTimeout(resolve/* , reject*/) {                                               // 6503
      setTimeout(resolve, ms);                                                                                         // 6504
    });                                                                                                                // 6505
  }                                                                                                                    // 6506
};                                                                                                                     // 6507
                                                                                                                       // 6508
},{"10":10,"44":44,"57":57,"6":6,"60":60,"61":61,"62":62,"63":63,"64":64,"9":9}],60:[function(require,module,exports){
'use strict';                                                                                                          // 6510
                                                                                                                       // 6511
module.exports = getDocumentProtocol;                                                                                  // 6512
                                                                                                                       // 6513
function getDocumentProtocol() {                                                                                       // 6514
  var protocol = window.document.location.protocol;                                                                    // 6515
                                                                                                                       // 6516
  // when in `file:` mode (local html file), default to `http:`                                                        // 6517
  if (protocol !== 'http:' && protocol !== 'https:') {                                                                 // 6518
    protocol = 'http:';                                                                                                // 6519
  }                                                                                                                    // 6520
                                                                                                                       // 6521
  return protocol;                                                                                                     // 6522
}                                                                                                                      // 6523
                                                                                                                       // 6524
},{}],61:[function(require,module,exports){                                                                            // 6525
'use strict';                                                                                                          // 6526
                                                                                                                       // 6527
module.exports = inlineHeaders;                                                                                        // 6528
                                                                                                                       // 6529
var querystring = require(5);                                                                                          // 6530
                                                                                                                       // 6531
function inlineHeaders(url, headers) {                                                                                 // 6532
  if (/\?/.test(url)) {                                                                                                // 6533
    url += '&';                                                                                                        // 6534
  } else {                                                                                                             // 6535
    url += '?';                                                                                                        // 6536
  }                                                                                                                    // 6537
                                                                                                                       // 6538
  return url + querystring.encode(headers);                                                                            // 6539
}                                                                                                                      // 6540
                                                                                                                       // 6541
},{"5":5}],62:[function(require,module,exports){                                                                       // 6542
'use strict';                                                                                                          // 6543
                                                                                                                       // 6544
module.exports = jsonpRequest;                                                                                         // 6545
                                                                                                                       // 6546
var errors = require(63);                                                                                              // 6547
                                                                                                                       // 6548
var JSONPCounter = 0;                                                                                                  // 6549
                                                                                                                       // 6550
function jsonpRequest(url, opts, cb) {                                                                                 // 6551
  if (opts.method !== 'GET') {                                                                                         // 6552
    cb(new Error('Method ' + opts.method + ' ' + url + ' is not supported by JSONP.'));                                // 6553
    return;                                                                                                            // 6554
  }                                                                                                                    // 6555
                                                                                                                       // 6556
  opts.debug('JSONP: start');                                                                                          // 6557
                                                                                                                       // 6558
  var cbCalled = false;                                                                                                // 6559
  var timedOut = false;                                                                                                // 6560
                                                                                                                       // 6561
  JSONPCounter += 1;                                                                                                   // 6562
  var head = document.getElementsByTagName('head')[0];                                                                 // 6563
  var script = document.createElement('script');                                                                       // 6564
  var cbName = 'algoliaJSONP_' + JSONPCounter;                                                                         // 6565
  var done = false;                                                                                                    // 6566
                                                                                                                       // 6567
  window[cbName] = function(data) {                                                                                    // 6568
    try {                                                                                                              // 6569
      delete window[cbName];                                                                                           // 6570
    } catch (e) {                                                                                                      // 6571
      window[cbName] = undefined;                                                                                      // 6572
    }                                                                                                                  // 6573
                                                                                                                       // 6574
    if (timedOut) {                                                                                                    // 6575
      return;                                                                                                          // 6576
    }                                                                                                                  // 6577
                                                                                                                       // 6578
    cbCalled = true;                                                                                                   // 6579
                                                                                                                       // 6580
    clean();                                                                                                           // 6581
                                                                                                                       // 6582
    cb(null, {                                                                                                         // 6583
      body: data/* ,                                                                                                   // 6584
      // We do not send the statusCode, there's no statusCode in JSONP, it will be                                     // 6585
      // computed using data.status && data.message like with XDR                                                      // 6586
      statusCode*/                                                                                                     // 6587
    });                                                                                                                // 6588
  };                                                                                                                   // 6589
                                                                                                                       // 6590
  // add callback by hand                                                                                              // 6591
  url += '&callback=' + cbName;                                                                                        // 6592
                                                                                                                       // 6593
  // add body params manually                                                                                          // 6594
  if (opts.jsonBody && opts.jsonBody.params) {                                                                         // 6595
    url += '&' + opts.jsonBody.params;                                                                                 // 6596
  }                                                                                                                    // 6597
                                                                                                                       // 6598
  var ontimeout = setTimeout(timeout, opts.timeout);                                                                   // 6599
                                                                                                                       // 6600
  // script onreadystatechange needed only for                                                                         // 6601
  // <= IE8                                                                                                            // 6602
  // https://github.com/angular/angular.js/issues/4523                                                                 // 6603
  script.onreadystatechange = readystatechange;                                                                        // 6604
  script.onload = success;                                                                                             // 6605
  script.onerror = error;                                                                                              // 6606
                                                                                                                       // 6607
  script.async = true;                                                                                                 // 6608
  script.defer = true;                                                                                                 // 6609
  script.src = url;                                                                                                    // 6610
  head.appendChild(script);                                                                                            // 6611
                                                                                                                       // 6612
  function success() {                                                                                                 // 6613
    opts.debug('JSONP: success');                                                                                      // 6614
                                                                                                                       // 6615
    if (done || timedOut) {                                                                                            // 6616
      return;                                                                                                          // 6617
    }                                                                                                                  // 6618
                                                                                                                       // 6619
    done = true;                                                                                                       // 6620
                                                                                                                       // 6621
    // script loaded but did not call the fn => script loading error                                                   // 6622
    if (!cbCalled) {                                                                                                   // 6623
      opts.debug('JSONP: Fail. Script loaded but did not call the callback');                                          // 6624
      clean();                                                                                                         // 6625
      cb(new errors.JSONPScriptFail());                                                                                // 6626
    }                                                                                                                  // 6627
  }                                                                                                                    // 6628
                                                                                                                       // 6629
  function readystatechange() {                                                                                        // 6630
    if (this.readyState === 'loaded' || this.readyState === 'complete') {                                              // 6631
      success();                                                                                                       // 6632
    }                                                                                                                  // 6633
  }                                                                                                                    // 6634
                                                                                                                       // 6635
  function clean() {                                                                                                   // 6636
    clearTimeout(ontimeout);                                                                                           // 6637
    script.onload = null;                                                                                              // 6638
    script.onreadystatechange = null;                                                                                  // 6639
    script.onerror = null;                                                                                             // 6640
    head.removeChild(script);                                                                                          // 6641
                                                                                                                       // 6642
    try {                                                                                                              // 6643
      delete window[cbName];                                                                                           // 6644
      delete window[cbName + '_loaded'];                                                                               // 6645
    } catch (e) {                                                                                                      // 6646
      window[cbName] = null;                                                                                           // 6647
      window[cbName + '_loaded'] = null;                                                                               // 6648
    }                                                                                                                  // 6649
  }                                                                                                                    // 6650
                                                                                                                       // 6651
  function timeout() {                                                                                                 // 6652
    opts.debug('JSONP: Script timeout');                                                                               // 6653
                                                                                                                       // 6654
    timedOut = true;                                                                                                   // 6655
    clean();                                                                                                           // 6656
    cb(new errors.RequestTimeout());                                                                                   // 6657
  }                                                                                                                    // 6658
                                                                                                                       // 6659
  function error() {                                                                                                   // 6660
    opts.debug('JSONP: Script error');                                                                                 // 6661
                                                                                                                       // 6662
    if (done || timedOut) {                                                                                            // 6663
      return;                                                                                                          // 6664
    }                                                                                                                  // 6665
                                                                                                                       // 6666
    clean();                                                                                                           // 6667
    cb(new errors.JSONPScriptError());                                                                                 // 6668
  }                                                                                                                    // 6669
}                                                                                                                      // 6670
                                                                                                                       // 6671
},{"63":63}],63:[function(require,module,exports){                                                                     // 6672
'use strict';                                                                                                          // 6673
                                                                                                                       // 6674
// This file hosts our error definitions                                                                               // 6675
// We use custom error "types" so that we can act on them when we need it                                              // 6676
// e.g.: if error instanceof errors.UnparsableJSON then..                                                              // 6677
                                                                                                                       // 6678
var inherits = require(10);                                                                                            // 6679
                                                                                                                       // 6680
function AlgoliaSearchError(message, extraProperties) {                                                                // 6681
  var forEach = require(11);                                                                                           // 6682
                                                                                                                       // 6683
  var error = this;                                                                                                    // 6684
                                                                                                                       // 6685
  // try to get a stacktrace                                                                                           // 6686
  if (typeof Error.captureStackTrace === 'function') {                                                                 // 6687
    Error.captureStackTrace(this, this.constructor);                                                                   // 6688
  } else {                                                                                                             // 6689
    error.stack = (new Error()).stack || 'Cannot get a stacktrace, browser is too old';                                // 6690
  }                                                                                                                    // 6691
                                                                                                                       // 6692
  this.name = this.constructor.name;                                                                                   // 6693
  this.message = message || 'Unknown error';                                                                           // 6694
                                                                                                                       // 6695
  if (extraProperties) {                                                                                               // 6696
    forEach(extraProperties, function addToErrorObject(value, key) {                                                   // 6697
      error[key] = value;                                                                                              // 6698
    });                                                                                                                // 6699
  }                                                                                                                    // 6700
}                                                                                                                      // 6701
                                                                                                                       // 6702
inherits(AlgoliaSearchError, Error);                                                                                   // 6703
                                                                                                                       // 6704
function createCustomError(name, message) {                                                                            // 6705
  function AlgoliaSearchCustomError() {                                                                                // 6706
    var args = Array.prototype.slice.call(arguments, 0);                                                               // 6707
                                                                                                                       // 6708
    // custom message not set, use default                                                                             // 6709
    if (typeof args[0] !== 'string') {                                                                                 // 6710
      args.unshift(message);                                                                                           // 6711
    }                                                                                                                  // 6712
                                                                                                                       // 6713
    AlgoliaSearchError.apply(this, args);                                                                              // 6714
    this.name = 'AlgoliaSearch' + name + 'Error';                                                                      // 6715
  }                                                                                                                    // 6716
                                                                                                                       // 6717
  inherits(AlgoliaSearchCustomError, AlgoliaSearchError);                                                              // 6718
                                                                                                                       // 6719
  return AlgoliaSearchCustomError;                                                                                     // 6720
}                                                                                                                      // 6721
                                                                                                                       // 6722
// late exports to let various fn defs and inherits take place                                                         // 6723
module.exports = {                                                                                                     // 6724
  AlgoliaSearchError: AlgoliaSearchError,                                                                              // 6725
  UnparsableJSON: createCustomError(                                                                                   // 6726
    'UnparsableJSON',                                                                                                  // 6727
    'Could not parse the incoming response as JSON, see err.more for details'                                          // 6728
  ),                                                                                                                   // 6729
  RequestTimeout: createCustomError(                                                                                   // 6730
    'RequestTimeout',                                                                                                  // 6731
    'Request timedout before getting a response'                                                                       // 6732
  ),                                                                                                                   // 6733
  Network: createCustomError(                                                                                          // 6734
    'Network',                                                                                                         // 6735
    'Network issue, see err.more for details'                                                                          // 6736
  ),                                                                                                                   // 6737
  JSONPScriptFail: createCustomError(                                                                                  // 6738
    'JSONPScriptFail',                                                                                                 // 6739
    '<script> was loaded but did not call our provided callback'                                                       // 6740
  ),                                                                                                                   // 6741
  JSONPScriptError: createCustomError(                                                                                 // 6742
    'JSONPScriptError',                                                                                                // 6743
    '<script> unable to load due to an `error` event on it'                                                            // 6744
  ),                                                                                                                   // 6745
  Unknown: createCustomError(                                                                                          // 6746
    'Unknown',                                                                                                         // 6747
    'Unknown error occured'                                                                                            // 6748
  )                                                                                                                    // 6749
};                                                                                                                     // 6750
                                                                                                                       // 6751
},{"10":10,"11":11}],64:[function(require,module,exports){                                                             // 6752
'use strict';                                                                                                          // 6753
                                                                                                                       // 6754
module.exports = '3.9.1';                                                                                              // 6755
                                                                                                                       // 6756
},{}]},{},[59])(59)                                                                                                    // 6757
});                                                                                                                    // 6758
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/acemtp_algolia/client.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
AlgoliaSearch = algoliasearch;                                                                                         // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['acemtp:algolia'] = {}, {
  AlgoliaSearch: AlgoliaSearch
});

})();
