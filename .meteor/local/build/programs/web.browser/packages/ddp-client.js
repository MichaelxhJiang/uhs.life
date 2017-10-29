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
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Retry = Package.retry.Retry;
var IdMap = Package['id-map'].IdMap;
var Hook = Package['callback-hook'].Hook;
var DDPCommon = Package['ddp-common'].DDPCommon;
var DiffSequence = Package['diff-sequence'].DiffSequence;
var MongoID = Package['mongo-id'].MongoID;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var SockJS, toSockjsUrl, toWebsocketUrl, allConnections, DDP;

var require = meteorInstall({"node_modules":{"meteor":{"ddp-client":{"sockjs-0.3.4.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/sockjs-0.3.4.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                                //
                                                                                                                       //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
// XXX METEOR changes in <METEOR>                                                                                      // 1
/* SockJS client, version 0.3.4, http://sockjs.org, MIT License                                                        // 3
                                                                                                                       //
Copyright (c) 2011-2012 VMware, Inc.                                                                                   //
                                                                                                                       //
Permission is hereby granted, free of charge, to any person obtaining a copy                                           //
of this software and associated documentation files (the "Software"), to deal                                          //
in the Software without restriction, including without limitation the rights                                           //
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell                                              //
copies of the Software, and to permit persons to whom the Software is                                                  //
furnished to do so, subject to the following conditions:                                                               //
                                                                                                                       //
The above copyright notice and this permission notice shall be included in                                             //
all copies or substantial portions of the Software.                                                                    //
                                                                                                                       //
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR                                             //
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,                                               //
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE                                            //
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                                                 //
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,                                          //
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN                                              //
THE SOFTWARE.                                                                                                          //
*/ // <METEOR> Commented out JSO implementation (use json package instead).                                            //
// JSON2 by Douglas Crockford (minified).                                                                              // 27
// var JSON;JSON||(JSON={}),function(){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g;return e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(a){return a<10?"0"+a:a}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}()
// </METEOR>                                                                                                           // 29
//     [*] Including lib/index.js                                                                                      // 31
// Public object                                                                                                       // 32
SockJS = function () {                                                                                                 // 33
    var _document = document;                                                                                          // 34
    var _window = window;                                                                                              // 35
    var utils = {}; //         [*] Including lib/reventtarget.js                                                       // 36
    /*                                                                                                                 // 40
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */ /* Simplified implementation of DOM2 EventTarget.                                                              //
         *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget                                    //
         */                                                                                                            //
                                                                                                                       //
    var REventTarget = function () {};                                                                                 // 51
                                                                                                                       //
    REventTarget.prototype.addEventListener = function (eventType, listener) {                                         // 52
        if (!this._listeners) {                                                                                        // 53
            this._listeners = {};                                                                                      // 54
        }                                                                                                              // 55
                                                                                                                       //
        if (!(eventType in this._listeners)) {                                                                         // 56
            this._listeners[eventType] = [];                                                                           // 57
        }                                                                                                              // 58
                                                                                                                       //
        var arr = this._listeners[eventType];                                                                          // 59
                                                                                                                       //
        if (utils.arrIndexOf(arr, listener) === -1) {                                                                  // 60
            arr.push(listener);                                                                                        // 61
        }                                                                                                              // 62
                                                                                                                       //
        return;                                                                                                        // 63
    };                                                                                                                 // 64
                                                                                                                       //
    REventTarget.prototype.removeEventListener = function (eventType, listener) {                                      // 66
        if (!(this._listeners && eventType in this._listeners)) {                                                      // 67
            return;                                                                                                    // 68
        }                                                                                                              // 69
                                                                                                                       //
        var arr = this._listeners[eventType];                                                                          // 70
        var idx = utils.arrIndexOf(arr, listener);                                                                     // 71
                                                                                                                       //
        if (idx !== -1) {                                                                                              // 72
            if (arr.length > 1) {                                                                                      // 73
                this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));                             // 74
            } else {                                                                                                   // 75
                delete this._listeners[eventType];                                                                     // 76
            }                                                                                                          // 77
                                                                                                                       //
            return;                                                                                                    // 78
        }                                                                                                              // 79
                                                                                                                       //
        return;                                                                                                        // 80
    };                                                                                                                 // 81
                                                                                                                       //
    REventTarget.prototype.dispatchEvent = function (event) {                                                          // 83
        var t = event.type;                                                                                            // 84
        var args = Array.prototype.slice.call(arguments, 0);                                                           // 85
                                                                                                                       //
        if (this['on' + t]) {                                                                                          // 86
            this['on' + t].apply(this, args);                                                                          // 87
        }                                                                                                              // 88
                                                                                                                       //
        if (this._listeners && t in this._listeners) {                                                                 // 89
            for (var i = 0; i < this._listeners[t].length; i++) {                                                      // 90
                this._listeners[t][i].apply(this, args);                                                               // 91
            }                                                                                                          // 92
        }                                                                                                              // 93
    }; //         [*] End of lib/reventtarget.js                                                                       // 94
    //         [*] Including lib/simpleevent.js                                                                        // 98
    /*                                                                                                                 // 99
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var SimpleEvent = function (type, obj) {                                                                           // 107
        this.type = type;                                                                                              // 108
                                                                                                                       //
        if (typeof obj !== 'undefined') {                                                                              // 109
            for (var k in meteorBabelHelpers.sanitizeForInObject(obj)) {                                               // 110
                if (!obj.hasOwnProperty(k)) continue;                                                                  // 111
                this[k] = obj[k];                                                                                      // 112
            }                                                                                                          // 113
        }                                                                                                              // 114
    };                                                                                                                 // 115
                                                                                                                       //
    SimpleEvent.prototype.toString = function () {                                                                     // 117
        var r = [];                                                                                                    // 118
                                                                                                                       //
        for (var k in meteorBabelHelpers.sanitizeForInObject(this)) {                                                  // 119
            if (!this.hasOwnProperty(k)) continue;                                                                     // 120
            var v = this[k];                                                                                           // 121
            if (typeof v === 'function') v = '[function]';                                                             // 122
            r.push(k + '=' + v);                                                                                       // 123
        }                                                                                                              // 124
                                                                                                                       //
        return 'SimpleEvent(' + r.join(', ') + ')';                                                                    // 125
    }; //         [*] End of lib/simpleevent.js                                                                        // 126
    //         [*] Including lib/eventemitter.js                                                                       // 130
    /*                                                                                                                 // 131
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var EventEmitter = function (events) {                                                                             // 139
        var that = this;                                                                                               // 140
        that._events = events || [];                                                                                   // 141
        that._listeners = {};                                                                                          // 142
    };                                                                                                                 // 143
                                                                                                                       //
    EventEmitter.prototype.emit = function (type) {                                                                    // 144
        var that = this;                                                                                               // 145
                                                                                                                       //
        that._verifyType(type);                                                                                        // 146
                                                                                                                       //
        if (that._nuked) return;                                                                                       // 147
        var args = Array.prototype.slice.call(arguments, 1);                                                           // 149
                                                                                                                       //
        if (that['on' + type]) {                                                                                       // 150
            that['on' + type].apply(that, args);                                                                       // 151
        }                                                                                                              // 152
                                                                                                                       //
        if (type in that._listeners) {                                                                                 // 153
            for (var i = 0; i < that._listeners[type].length; i++) {                                                   // 154
                that._listeners[type][i].apply(that, args);                                                            // 155
            }                                                                                                          // 156
        }                                                                                                              // 157
    };                                                                                                                 // 158
                                                                                                                       //
    EventEmitter.prototype.on = function (type, callback) {                                                            // 160
        var that = this;                                                                                               // 161
                                                                                                                       //
        that._verifyType(type);                                                                                        // 162
                                                                                                                       //
        if (that._nuked) return;                                                                                       // 163
                                                                                                                       //
        if (!(type in that._listeners)) {                                                                              // 165
            that._listeners[type] = [];                                                                                // 166
        }                                                                                                              // 167
                                                                                                                       //
        that._listeners[type].push(callback);                                                                          // 168
    };                                                                                                                 // 169
                                                                                                                       //
    EventEmitter.prototype._verifyType = function (type) {                                                             // 171
        var that = this;                                                                                               // 172
                                                                                                                       //
        if (utils.arrIndexOf(that._events, type) === -1) {                                                             // 173
            utils.log('Event ' + JSON.stringify(type) + ' not listed ' + JSON.stringify(that._events) + ' in ' + that);
        }                                                                                                              // 177
    };                                                                                                                 // 178
                                                                                                                       //
    EventEmitter.prototype.nuke = function () {                                                                        // 180
        var that = this;                                                                                               // 181
        that._nuked = true;                                                                                            // 182
                                                                                                                       //
        for (var i = 0; i < that._events.length; i++) {                                                                // 183
            delete that[that._events[i]];                                                                              // 184
        }                                                                                                              // 185
                                                                                                                       //
        that._listeners = {};                                                                                          // 186
    }; //         [*] End of lib/eventemitter.js                                                                       // 187
    //         [*] Including lib/utils.js                                                                              // 191
    /*                                                                                                                 // 192
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var random_string_chars = 'abcdefghijklmnopqrstuvwxyz0123456789_';                                                 // 200
                                                                                                                       //
    utils.random_string = function (length, max) {                                                                     // 201
        max = max || random_string_chars.length;                                                                       // 202
        var i,                                                                                                         // 203
            ret = [];                                                                                                  // 203
                                                                                                                       //
        for (i = 0; i < length; i++) {                                                                                 // 204
            ret.push(random_string_chars.substr(Math.floor(Math.random() * max), 1));                                  // 205
        }                                                                                                              // 206
                                                                                                                       //
        return ret.join('');                                                                                           // 207
    };                                                                                                                 // 208
                                                                                                                       //
    utils.random_number = function (max) {                                                                             // 209
        return Math.floor(Math.random() * max);                                                                        // 210
    };                                                                                                                 // 211
                                                                                                                       //
    utils.random_number_string = function (max) {                                                                      // 212
        var t = ('' + (max - 1)).length;                                                                               // 213
        var p = Array(t + 1).join('0');                                                                                // 214
        return (p + utils.random_number(max)).slice(-t);                                                               // 215
    }; // Assuming that url looks like: http://asdasd:111/asd                                                          // 216
                                                                                                                       //
                                                                                                                       //
    utils.getOrigin = function (url) {                                                                                 // 219
        url += '/';                                                                                                    // 220
        var parts = url.split('/').slice(0, 3);                                                                        // 221
        return parts.join('/');                                                                                        // 222
    };                                                                                                                 // 223
                                                                                                                       //
    utils.isSameOriginUrl = function (url_a, url_b) {                                                                  // 225
        // location.origin would do, but it's not always available.                                                    // 226
        if (!url_b) url_b = _window.location.href;                                                                     // 227
        return url_a.split('/').slice(0, 3).join('/') === url_b.split('/').slice(0, 3).join('/');                      // 229
    }; // <METEOR>                                                                                                     // 232
    // https://github.com/sockjs/sockjs-client/issues/79                                                               // 235
                                                                                                                       //
                                                                                                                       //
    utils.isSameOriginScheme = function (url_a, url_b) {                                                               // 236
        if (!url_b) url_b = _window.location.href;                                                                     // 237
        return url_a.split(':')[0] === url_b.split(':')[0];                                                            // 239
    }; // </METEOR>                                                                                                    // 242
                                                                                                                       //
                                                                                                                       //
    utils.getParentDomain = function (url) {                                                                           // 246
        // ipv4 ip address                                                                                             // 247
        if (/^[0-9.]*$/.test(url)) return url; // ipv6 ip address                                                      // 248
                                                                                                                       //
        if (/^\[/.test(url)) return url; // no dots                                                                    // 250
                                                                                                                       //
        if (!/[.]/.test(url)) return url;                                                                              // 252
        var parts = url.split('.').slice(1);                                                                           // 254
        return parts.join('.');                                                                                        // 255
    };                                                                                                                 // 256
                                                                                                                       //
    utils.objectExtend = function (dst, src) {                                                                         // 258
        for (var k in meteorBabelHelpers.sanitizeForInObject(src)) {                                                   // 259
            if (src.hasOwnProperty(k)) {                                                                               // 260
                dst[k] = src[k];                                                                                       // 261
            }                                                                                                          // 262
        }                                                                                                              // 263
                                                                                                                       //
        return dst;                                                                                                    // 264
    };                                                                                                                 // 265
                                                                                                                       //
    var WPrefix = '_jp';                                                                                               // 267
                                                                                                                       //
    utils.polluteGlobalNamespace = function () {                                                                       // 269
        if (!(WPrefix in _window)) {                                                                                   // 270
            _window[WPrefix] = {};                                                                                     // 271
        }                                                                                                              // 272
    };                                                                                                                 // 273
                                                                                                                       //
    utils.closeFrame = function (code, reason) {                                                                       // 275
        return 'c' + JSON.stringify([code, reason]);                                                                   // 276
    };                                                                                                                 // 277
                                                                                                                       //
    utils.userSetCode = function (code) {                                                                              // 279
        return code === 1000 || code >= 3000 && code <= 4999;                                                          // 280
    }; // See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/                                       // 281
    // and RFC 2988.                                                                                                   // 284
                                                                                                                       //
                                                                                                                       //
    utils.countRTO = function (rtt) {                                                                                  // 285
        var rto;                                                                                                       // 286
                                                                                                                       //
        if (rtt > 100) {                                                                                               // 287
            rto = 3 * rtt; // rto > 300msec                                                                            // 288
        } else {                                                                                                       // 289
            rto = rtt + 200; // 200msec < rto <= 300msec                                                               // 290
        }                                                                                                              // 291
                                                                                                                       //
        return rto;                                                                                                    // 292
    };                                                                                                                 // 293
                                                                                                                       //
    utils.log = function () {                                                                                          // 295
        if (_window.console && console.log && console.log.apply) {                                                     // 296
            console.log.apply(console, arguments);                                                                     // 297
        }                                                                                                              // 298
    };                                                                                                                 // 299
                                                                                                                       //
    utils.bind = function (fun, that) {                                                                                // 301
        if (fun.bind) {                                                                                                // 302
            return fun.bind(that);                                                                                     // 303
        } else {                                                                                                       // 304
            return function () {                                                                                       // 305
                return fun.apply(that, arguments);                                                                     // 306
            };                                                                                                         // 307
        }                                                                                                              // 308
    };                                                                                                                 // 309
                                                                                                                       //
    utils.flatUrl = function (url) {                                                                                   // 311
        return url.indexOf('?') === -1 && url.indexOf('#') === -1;                                                     // 312
    }; // `relativeTo` is an optional absolute URL. If provided, `url` will be                                         // 313
    // interpreted relative to `relativeTo`. Defaults to `document.location`.                                          // 316
    // <METEOR>                                                                                                        // 317
                                                                                                                       //
                                                                                                                       //
    utils.amendUrl = function (url, relativeTo) {                                                                      // 318
        var baseUrl;                                                                                                   // 319
                                                                                                                       //
        if (relativeTo === undefined) {                                                                                // 320
            baseUrl = _document.location;                                                                              // 321
        } else {                                                                                                       // 322
            var protocolMatch = /^([a-z0-9.+-]+:)/i.exec(relativeTo);                                                  // 323
                                                                                                                       //
            if (protocolMatch) {                                                                                       // 324
                var protocol = protocolMatch[0].toLowerCase();                                                         // 325
                var rest = relativeTo.substring(protocol.length);                                                      // 326
                var hostMatch = /[a-z0-9\.-]+(:[0-9]+)?/.exec(rest);                                                   // 327
                if (hostMatch) var host = hostMatch[0];                                                                // 328
            }                                                                                                          // 330
                                                                                                                       //
            if (!protocol || !host) throw new Error("relativeTo must be an absolute url");                             // 331
            baseUrl = {                                                                                                // 333
                protocol: protocol,                                                                                    // 334
                host: host                                                                                             // 335
            };                                                                                                         // 333
        }                                                                                                              // 337
                                                                                                                       //
        if (!url) {                                                                                                    // 338
            throw new Error('Wrong url for SockJS');                                                                   // 339
        }                                                                                                              // 340
                                                                                                                       //
        if (!utils.flatUrl(url)) {                                                                                     // 341
            throw new Error('Only basic urls are supported in SockJS');                                                // 342
        } //  '//abc' --> 'http://abc'                                                                                 // 343
                                                                                                                       //
                                                                                                                       //
        if (url.indexOf('//') === 0) {                                                                                 // 346
            url = baseUrl.protocol + url;                                                                              // 347
        } // '/abc' --> 'http://localhost:1234/abc'                                                                    // 348
                                                                                                                       //
                                                                                                                       //
        if (url.indexOf('/') === 0) {                                                                                  // 350
            url = baseUrl.protocol + '//' + baseUrl.host + url;                                                        // 351
        } // </METEOR>                                                                                                 // 352
        // strip trailing slashes                                                                                      // 354
                                                                                                                       //
                                                                                                                       //
        url = url.replace(/[/]+$/, ''); // We have a full url here, with proto and host. For some browsers             // 355
        // http://localhost:80/ is not in the same origin as http://localhost/                                         // 358
        // Remove explicit :80 or :443 in such cases. See #74                                                          // 359
                                                                                                                       //
        var parts = url.split("/");                                                                                    // 360
                                                                                                                       //
        if (parts[0] === "http:" && /:80$/.test(parts[2]) || parts[0] === "https:" && /:443$/.test(parts[2])) {        // 361
            parts[2] = parts[2].replace(/:(80|443)$/, "");                                                             // 363
        }                                                                                                              // 364
                                                                                                                       //
        url = parts.join("/");                                                                                         // 365
        return url;                                                                                                    // 366
    }; // IE doesn't support [].indexOf.                                                                               // 367
                                                                                                                       //
                                                                                                                       //
    utils.arrIndexOf = function (arr, obj) {                                                                           // 370
        for (var i = 0; i < arr.length; i++) {                                                                         // 371
            if (arr[i] === obj) {                                                                                      // 372
                return i;                                                                                              // 373
            }                                                                                                          // 374
        }                                                                                                              // 375
                                                                                                                       //
        return -1;                                                                                                     // 376
    };                                                                                                                 // 377
                                                                                                                       //
    utils.arrSkip = function (arr, obj) {                                                                              // 379
        var idx = utils.arrIndexOf(arr, obj);                                                                          // 380
                                                                                                                       //
        if (idx === -1) {                                                                                              // 381
            return arr.slice();                                                                                        // 382
        } else {                                                                                                       // 383
            var dst = arr.slice(0, idx);                                                                               // 384
            return dst.concat(arr.slice(idx + 1));                                                                     // 385
        }                                                                                                              // 386
    }; // Via: https://gist.github.com/1133122/2121c601c5549155483f50be3da5305e83b8c5df                                // 387
                                                                                                                       //
                                                                                                                       //
    utils.isArray = Array.isArray || function (value) {                                                                // 390
        return {}.toString.call(value).indexOf('Array') >= 0;                                                          // 391
    };                                                                                                                 // 392
                                                                                                                       //
    utils.delay = function (t, fun) {                                                                                  // 394
        if (typeof t === 'function') {                                                                                 // 395
            fun = t;                                                                                                   // 396
            t = 0;                                                                                                     // 397
        }                                                                                                              // 398
                                                                                                                       //
        return setTimeout(fun, t);                                                                                     // 399
    }; // Chars worth escaping, as defined by Douglas Crockford:                                                       // 400
    //   https://github.com/douglascrockford/JSON-js/blob/47a9882cddeb1e8529e07af9736218075372b8ac/json2.js#L196       // 404
                                                                                                                       //
                                                                                                                       //
    var json_escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        json_lookup = {                                                                                                // 405
        "\0": "\\u0000",                                                                                               // 407
        "\x01": "\\u0001",                                                                                             // 407
        "\x02": "\\u0002",                                                                                             // 407
        "\x03": "\\u0003",                                                                                             // 407
        "\x04": "\\u0004",                                                                                             // 408
        "\x05": "\\u0005",                                                                                             // 408
        "\x06": "\\u0006",                                                                                             // 408
        "\x07": "\\u0007",                                                                                             // 408
        "\b": "\\b",                                                                                                   // 409
        "\t": "\\t",                                                                                                   // 409
        "\n": "\\n",                                                                                                   // 409
        "\x0B": "\\u000b",                                                                                             // 409
        "\f": "\\f",                                                                                                   // 409
        "\r": "\\r",                                                                                                   // 409
        "\x0E": "\\u000e",                                                                                             // 410
        "\x0F": "\\u000f",                                                                                             // 410
        "\x10": "\\u0010",                                                                                             // 410
        "\x11": "\\u0011",                                                                                             // 410
        "\x12": "\\u0012",                                                                                             // 411
        "\x13": "\\u0013",                                                                                             // 411
        "\x14": "\\u0014",                                                                                             // 411
        "\x15": "\\u0015",                                                                                             // 411
        "\x16": "\\u0016",                                                                                             // 412
        "\x17": "\\u0017",                                                                                             // 412
        "\x18": "\\u0018",                                                                                             // 412
        "\x19": "\\u0019",                                                                                             // 412
        "\x1A": "\\u001a",                                                                                             // 413
        "\x1B": "\\u001b",                                                                                             // 413
        "\x1C": "\\u001c",                                                                                             // 413
        "\x1D": "\\u001d",                                                                                             // 413
        "\x1E": "\\u001e",                                                                                             // 414
        "\x1F": "\\u001f",                                                                                             // 414
        "\"": "\\\"",                                                                                                  // 414
        "\\": "\\\\",                                                                                                  // 414
        "\x7F": "\\u007f",                                                                                             // 415
        "\x80": "\\u0080",                                                                                             // 415
        "\x81": "\\u0081",                                                                                             // 415
        "\x82": "\\u0082",                                                                                             // 415
        "\x83": "\\u0083",                                                                                             // 416
        "\x84": "\\u0084",                                                                                             // 416
        "\x85": "\\u0085",                                                                                             // 416
        "\x86": "\\u0086",                                                                                             // 416
        "\x87": "\\u0087",                                                                                             // 417
        "\x88": "\\u0088",                                                                                             // 417
        "\x89": "\\u0089",                                                                                             // 417
        "\x8A": "\\u008a",                                                                                             // 417
        "\x8B": "\\u008b",                                                                                             // 418
        "\x8C": "\\u008c",                                                                                             // 418
        "\x8D": "\\u008d",                                                                                             // 418
        "\x8E": "\\u008e",                                                                                             // 418
        "\x8F": "\\u008f",                                                                                             // 419
        "\x90": "\\u0090",                                                                                             // 419
        "\x91": "\\u0091",                                                                                             // 419
        "\x92": "\\u0092",                                                                                             // 419
        "\x93": "\\u0093",                                                                                             // 420
        "\x94": "\\u0094",                                                                                             // 420
        "\x95": "\\u0095",                                                                                             // 420
        "\x96": "\\u0096",                                                                                             // 420
        "\x97": "\\u0097",                                                                                             // 421
        "\x98": "\\u0098",                                                                                             // 421
        "\x99": "\\u0099",                                                                                             // 421
        "\x9A": "\\u009a",                                                                                             // 421
        "\x9B": "\\u009b",                                                                                             // 422
        "\x9C": "\\u009c",                                                                                             // 422
        "\x9D": "\\u009d",                                                                                             // 422
        "\x9E": "\\u009e",                                                                                             // 422
        "\x9F": "\\u009f",                                                                                             // 423
        "\xAD": "\\u00ad",                                                                                             // 423
        "\u0600": "\\u0600",                                                                                           // 423
        "\u0601": "\\u0601",                                                                                           // 423
        "\u0602": "\\u0602",                                                                                           // 424
        "\u0603": "\\u0603",                                                                                           // 424
        "\u0604": "\\u0604",                                                                                           // 424
        "\u070F": "\\u070f",                                                                                           // 424
        "\u17B4": "\\u17b4",                                                                                           // 425
        "\u17B5": "\\u17b5",                                                                                           // 425
        "\u200C": "\\u200c",                                                                                           // 425
        "\u200D": "\\u200d",                                                                                           // 425
        "\u200E": "\\u200e",                                                                                           // 426
        "\u200F": "\\u200f",                                                                                           // 426
        "\u2028": "\\u2028",                                                                                           // 426
        "\u2029": "\\u2029",                                                                                           // 426
        "\u202A": "\\u202a",                                                                                           // 427
        "\u202B": "\\u202b",                                                                                           // 427
        "\u202C": "\\u202c",                                                                                           // 427
        "\u202D": "\\u202d",                                                                                           // 427
        "\u202E": "\\u202e",                                                                                           // 428
        "\u202F": "\\u202f",                                                                                           // 428
        "\u2060": "\\u2060",                                                                                           // 428
        "\u2061": "\\u2061",                                                                                           // 428
        "\u2062": "\\u2062",                                                                                           // 429
        "\u2063": "\\u2063",                                                                                           // 429
        "\u2064": "\\u2064",                                                                                           // 429
        "\u2065": "\\u2065",                                                                                           // 429
        "\u2066": "\\u2066",                                                                                           // 430
        "\u2067": "\\u2067",                                                                                           // 430
        "\u2068": "\\u2068",                                                                                           // 430
        "\u2069": "\\u2069",                                                                                           // 430
        "\u206A": "\\u206a",                                                                                           // 431
        "\u206B": "\\u206b",                                                                                           // 431
        "\u206C": "\\u206c",                                                                                           // 431
        "\u206D": "\\u206d",                                                                                           // 431
        "\u206E": "\\u206e",                                                                                           // 432
        "\u206F": "\\u206f",                                                                                           // 432
        "\uFEFF": "\\ufeff",                                                                                           // 432
        "\uFFF0": "\\ufff0",                                                                                           // 432
        "\uFFF1": "\\ufff1",                                                                                           // 433
        "\uFFF2": "\\ufff2",                                                                                           // 433
        "\uFFF3": "\\ufff3",                                                                                           // 433
        "\uFFF4": "\\ufff4",                                                                                           // 433
        "\uFFF5": "\\ufff5",                                                                                           // 434
        "\uFFF6": "\\ufff6",                                                                                           // 434
        "\uFFF7": "\\ufff7",                                                                                           // 434
        "\uFFF8": "\\ufff8",                                                                                           // 434
        "\uFFF9": "\\ufff9",                                                                                           // 435
        "\uFFFA": "\\ufffa",                                                                                           // 435
        "\uFFFB": "\\ufffb",                                                                                           // 435
        "\uFFFC": "\\ufffc",                                                                                           // 435
        "\uFFFD": "\\ufffd",                                                                                           // 436
        "\uFFFE": "\\ufffe",                                                                                           // 436
        "\uFFFF": "\\uffff"                                                                                            // 436
    }; // Some extra characters that Chrome gets wrong, and substitutes with                                           // 406
    // something else on the wire.                                                                                     // 439
                                                                                                                       //
    var extra_escapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        extra_lookup; // JSON Quote string. Use native implementation when possible.                                   // 440
                                                                                                                       //
    var JSONQuote = JSON && JSON.stringify || function (string) {                                                      // 444
        json_escapable.lastIndex = 0;                                                                                  // 445
                                                                                                                       //
        if (json_escapable.test(string)) {                                                                             // 446
            string = string.replace(json_escapable, function (a) {                                                     // 447
                return json_lookup[a];                                                                                 // 448
            });                                                                                                        // 449
        }                                                                                                              // 450
                                                                                                                       //
        return '"' + string + '"';                                                                                     // 451
    }; // This may be quite slow, so let's delay until user actually uses bad                                          // 452
    // characters.                                                                                                     // 455
                                                                                                                       //
                                                                                                                       //
    var unroll_lookup = function (escapable) {                                                                         // 456
        var i;                                                                                                         // 457
        var unrolled = {};                                                                                             // 458
        var c = [];                                                                                                    // 459
                                                                                                                       //
        for (i = 0; i < 65536; i++) {                                                                                  // 460
            c.push(String.fromCharCode(i));                                                                            // 461
        }                                                                                                              // 462
                                                                                                                       //
        escapable.lastIndex = 0;                                                                                       // 463
        c.join('').replace(escapable, function (a) {                                                                   // 464
            unrolled[a] = "\\u" + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);                                   // 465
            return '';                                                                                                 // 466
        });                                                                                                            // 467
        escapable.lastIndex = 0;                                                                                       // 468
        return unrolled;                                                                                               // 469
    }; // Quote string, also taking care of unicode characters that browsers                                           // 470
    // often break. Especially, take care of unicode surrogates:                                                       // 473
    //    http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates                                        // 474
                                                                                                                       //
                                                                                                                       //
    utils.quote = function (string) {                                                                                  // 475
        var quoted = JSONQuote(string); // In most cases this should be very fast and good enough.                     // 476
                                                                                                                       //
        extra_escapable.lastIndex = 0;                                                                                 // 479
                                                                                                                       //
        if (!extra_escapable.test(quoted)) {                                                                           // 480
            return quoted;                                                                                             // 481
        }                                                                                                              // 482
                                                                                                                       //
        if (!extra_lookup) extra_lookup = unroll_lookup(extra_escapable);                                              // 484
        return quoted.replace(extra_escapable, function (a) {                                                          // 486
            return extra_lookup[a];                                                                                    // 487
        });                                                                                                            // 488
    };                                                                                                                 // 489
                                                                                                                       //
    var _all_protocols = ['websocket', 'xdr-streaming', 'xhr-streaming', 'iframe-eventsource', 'iframe-htmlfile', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'];
                                                                                                                       //
    utils.probeProtocols = function () {                                                                               // 501
        var probed = {};                                                                                               // 502
                                                                                                                       //
        for (var i = 0; i < _all_protocols.length; i++) {                                                              // 503
            var protocol = _all_protocols[i]; // User can have a typo in protocol name.                                // 504
                                                                                                                       //
            probed[protocol] = SockJS[protocol] && SockJS[protocol].enabled();                                         // 506
        }                                                                                                              // 508
                                                                                                                       //
        return probed;                                                                                                 // 509
    };                                                                                                                 // 510
                                                                                                                       //
    utils.detectProtocols = function (probed, protocols_whitelist, info) {                                             // 512
        var pe = {},                                                                                                   // 513
            protocols = [];                                                                                            // 513
        if (!protocols_whitelist) protocols_whitelist = _all_protocols;                                                // 515
                                                                                                                       //
        for (var i = 0; i < protocols_whitelist.length; i++) {                                                         // 516
            var protocol = protocols_whitelist[i];                                                                     // 517
            pe[protocol] = probed[protocol];                                                                           // 518
        }                                                                                                              // 519
                                                                                                                       //
        var maybe_push = function (protos) {                                                                           // 520
            var proto = protos.shift();                                                                                // 521
                                                                                                                       //
            if (pe[proto]) {                                                                                           // 522
                protocols.push(proto);                                                                                 // 523
            } else {                                                                                                   // 524
                if (protos.length > 0) {                                                                               // 525
                    maybe_push(protos);                                                                                // 526
                }                                                                                                      // 527
            }                                                                                                          // 528
        }; // 1. Websocket                                                                                             // 529
                                                                                                                       //
                                                                                                                       //
        if (info.websocket !== false) {                                                                                // 532
            maybe_push(['websocket']);                                                                                 // 533
        } // 2. Streaming                                                                                              // 534
                                                                                                                       //
                                                                                                                       //
        if (pe['xhr-streaming'] && !info.null_origin) {                                                                // 537
            protocols.push('xhr-streaming');                                                                           // 538
        } else {                                                                                                       // 539
            if (pe['xdr-streaming'] && !info.cookie_needed && !info.null_origin) {                                     // 540
                protocols.push('xdr-streaming');                                                                       // 541
            } else {                                                                                                   // 542
                maybe_push(['iframe-eventsource', 'iframe-htmlfile']);                                                 // 543
            }                                                                                                          // 545
        } // 3. Polling                                                                                                // 546
                                                                                                                       //
                                                                                                                       //
        if (pe['xhr-polling'] && !info.null_origin) {                                                                  // 549
            protocols.push('xhr-polling');                                                                             // 550
        } else {                                                                                                       // 551
            if (pe['xdr-polling'] && !info.cookie_needed && !info.null_origin) {                                       // 552
                protocols.push('xdr-polling');                                                                         // 553
            } else {                                                                                                   // 554
                maybe_push(['iframe-xhr-polling', 'jsonp-polling']);                                                   // 555
            }                                                                                                          // 557
        }                                                                                                              // 558
                                                                                                                       //
        return protocols;                                                                                              // 559
    }; //         [*] End of lib/utils.js                                                                              // 560
    //         [*] Including lib/dom.js                                                                                // 564
    /*                                                                                                                 // 565
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */ // May be used by htmlfile jsonp and transports.                                                               //
                                                                                                                       //
                                                                                                                       //
    var MPrefix = '_sockjs_global';                                                                                    // 574
                                                                                                                       //
    utils.createHook = function () {                                                                                   // 575
        var window_id = 'a' + utils.random_string(8);                                                                  // 576
                                                                                                                       //
        if (!(MPrefix in _window)) {                                                                                   // 577
            var map = {};                                                                                              // 578
                                                                                                                       //
            _window[MPrefix] = function (window_id) {                                                                  // 579
                if (!(window_id in map)) {                                                                             // 580
                    map[window_id] = {                                                                                 // 581
                        id: window_id,                                                                                 // 582
                        del: function () {                                                                             // 583
                            delete map[window_id];                                                                     // 583
                        }                                                                                              // 583
                    };                                                                                                 // 581
                }                                                                                                      // 585
                                                                                                                       //
                return map[window_id];                                                                                 // 586
            };                                                                                                         // 587
        }                                                                                                              // 588
                                                                                                                       //
        return _window[MPrefix](window_id);                                                                            // 589
    };                                                                                                                 // 590
                                                                                                                       //
    utils.attachMessage = function (listener) {                                                                        // 594
        utils.attachEvent('message', listener);                                                                        // 595
    };                                                                                                                 // 596
                                                                                                                       //
    utils.attachEvent = function (event, listener) {                                                                   // 597
        if (typeof _window.addEventListener !== 'undefined') {                                                         // 598
            _window.addEventListener(event, listener, false);                                                          // 599
        } else {                                                                                                       // 600
            // IE quirks.                                                                                              // 601
            // According to: http://stevesouders.com/misc/test-postmessage.php                                         // 602
            // the message gets delivered only to 'document', not 'window'.                                            // 603
            _document.attachEvent("on" + event, listener); // I get 'window' for ie8.                                  // 604
                                                                                                                       //
                                                                                                                       //
            _window.attachEvent("on" + event, listener);                                                               // 606
        }                                                                                                              // 607
    };                                                                                                                 // 608
                                                                                                                       //
    utils.detachMessage = function (listener) {                                                                        // 610
        utils.detachEvent('message', listener);                                                                        // 611
    };                                                                                                                 // 612
                                                                                                                       //
    utils.detachEvent = function (event, listener) {                                                                   // 613
        if (typeof _window.addEventListener !== 'undefined') {                                                         // 614
            _window.removeEventListener(event, listener, false);                                                       // 615
        } else {                                                                                                       // 616
            _document.detachEvent("on" + event, listener);                                                             // 617
                                                                                                                       //
            _window.detachEvent("on" + event, listener);                                                               // 618
        }                                                                                                              // 619
    };                                                                                                                 // 620
                                                                                                                       //
    var on_unload = {}; // Things registered after beforeunload are to be called immediately.                          // 623
                                                                                                                       //
    var after_unload = false;                                                                                          // 625
                                                                                                                       //
    var trigger_unload_callbacks = function () {                                                                       // 627
        for (var ref in meteorBabelHelpers.sanitizeForInObject(on_unload)) {                                           // 628
            on_unload[ref]();                                                                                          // 629
            delete on_unload[ref];                                                                                     // 630
        }                                                                                                              // 631
                                                                                                                       //
        ;                                                                                                              // 631
    };                                                                                                                 // 632
                                                                                                                       //
    var unload_triggered = function () {                                                                               // 634
        if (after_unload) return;                                                                                      // 635
        after_unload = true;                                                                                           // 636
        trigger_unload_callbacks();                                                                                    // 637
    }; // 'unload' alone is not reliable in opera within an iframe, but we                                             // 638
    // can't use `beforeunload` as IE fires it on javascript: links.                                                   // 641
                                                                                                                       //
                                                                                                                       //
    utils.attachEvent('unload', unload_triggered);                                                                     // 642
                                                                                                                       //
    utils.unload_add = function (listener) {                                                                           // 644
        var ref = utils.random_string(8);                                                                              // 645
        on_unload[ref] = listener;                                                                                     // 646
                                                                                                                       //
        if (after_unload) {                                                                                            // 647
            utils.delay(trigger_unload_callbacks);                                                                     // 648
        }                                                                                                              // 649
                                                                                                                       //
        return ref;                                                                                                    // 650
    };                                                                                                                 // 651
                                                                                                                       //
    utils.unload_del = function (ref) {                                                                                // 652
        if (ref in on_unload) delete on_unload[ref];                                                                   // 653
    };                                                                                                                 // 655
                                                                                                                       //
    utils.createIframe = function (iframe_url, error_callback) {                                                       // 658
        var iframe = _document.createElement('iframe');                                                                // 659
                                                                                                                       //
        var tref, unload_ref;                                                                                          // 660
                                                                                                                       //
        var unattach = function () {                                                                                   // 661
            clearTimeout(tref); // Explorer had problems with that.                                                    // 662
                                                                                                                       //
            try {                                                                                                      // 664
                iframe.onload = null;                                                                                  // 664
            } catch (x) {}                                                                                             // 664
                                                                                                                       //
            iframe.onerror = null;                                                                                     // 665
        };                                                                                                             // 666
                                                                                                                       //
        var cleanup = function () {                                                                                    // 667
            if (iframe) {                                                                                              // 668
                unattach(); // This timeout makes chrome fire onbeforeunload event                                     // 669
                // within iframe. Without the timeout it goes straight to                                              // 671
                // onunload.                                                                                           // 672
                                                                                                                       //
                setTimeout(function () {                                                                               // 673
                    if (iframe) {                                                                                      // 674
                        iframe.parentNode.removeChild(iframe);                                                         // 675
                    }                                                                                                  // 676
                                                                                                                       //
                    iframe = null;                                                                                     // 677
                }, 0);                                                                                                 // 678
                utils.unload_del(unload_ref);                                                                          // 679
            }                                                                                                          // 680
        };                                                                                                             // 681
                                                                                                                       //
        var onerror = function (r) {                                                                                   // 682
            if (iframe) {                                                                                              // 683
                cleanup();                                                                                             // 684
                error_callback(r);                                                                                     // 685
            }                                                                                                          // 686
        };                                                                                                             // 687
                                                                                                                       //
        var post = function (msg, origin) {                                                                            // 688
            try {                                                                                                      // 689
                // When the iframe is not loaded, IE raises an exception                                               // 690
                // on 'contentWindow'.                                                                                 // 691
                if (iframe && iframe.contentWindow) {                                                                  // 692
                    iframe.contentWindow.postMessage(msg, origin);                                                     // 693
                }                                                                                                      // 694
            } catch (x) {}                                                                                             // 695
                                                                                                                       //
            ;                                                                                                          // 695
        };                                                                                                             // 696
                                                                                                                       //
        iframe.src = iframe_url;                                                                                       // 698
        iframe.style.display = 'none';                                                                                 // 699
        iframe.style.position = 'absolute';                                                                            // 700
                                                                                                                       //
        iframe.onerror = function () {                                                                                 // 701
            onerror('onerror');                                                                                        // 701
        };                                                                                                             // 701
                                                                                                                       //
        iframe.onload = function () {                                                                                  // 702
            // `onload` is triggered before scripts on the iframe are                                                  // 703
            // executed. Give it few seconds to actually load stuff.                                                   // 704
            clearTimeout(tref);                                                                                        // 705
            tref = setTimeout(function () {                                                                            // 706
                onerror('onload timeout');                                                                             // 706
            }, 2000);                                                                                                  // 706
        };                                                                                                             // 707
                                                                                                                       //
        _document.body.appendChild(iframe);                                                                            // 708
                                                                                                                       //
        tref = setTimeout(function () {                                                                                // 709
            onerror('timeout');                                                                                        // 709
        }, 15000);                                                                                                     // 709
        unload_ref = utils.unload_add(cleanup);                                                                        // 710
        return {                                                                                                       // 711
            post: post,                                                                                                // 712
            cleanup: cleanup,                                                                                          // 713
            loaded: unattach                                                                                           // 714
        };                                                                                                             // 711
    };                                                                                                                 // 716
                                                                                                                       //
    utils.createHtmlfile = function (iframe_url, error_callback) {                                                     // 718
        var doc = new ActiveXObject('htmlfile');                                                                       // 719
        var tref, unload_ref;                                                                                          // 720
        var iframe;                                                                                                    // 721
                                                                                                                       //
        var unattach = function () {                                                                                   // 722
            clearTimeout(tref);                                                                                        // 723
        };                                                                                                             // 724
                                                                                                                       //
        var cleanup = function () {                                                                                    // 725
            if (doc) {                                                                                                 // 726
                unattach();                                                                                            // 727
                utils.unload_del(unload_ref);                                                                          // 728
                iframe.parentNode.removeChild(iframe);                                                                 // 729
                iframe = doc = null;                                                                                   // 730
                CollectGarbage();                                                                                      // 731
            }                                                                                                          // 732
        };                                                                                                             // 733
                                                                                                                       //
        var onerror = function (r) {                                                                                   // 734
            if (doc) {                                                                                                 // 735
                cleanup();                                                                                             // 736
                error_callback(r);                                                                                     // 737
            }                                                                                                          // 738
        };                                                                                                             // 739
                                                                                                                       //
        var post = function (msg, origin) {                                                                            // 740
            try {                                                                                                      // 741
                // When the iframe is not loaded, IE raises an exception                                               // 742
                // on 'contentWindow'.                                                                                 // 743
                if (iframe && iframe.contentWindow) {                                                                  // 744
                    iframe.contentWindow.postMessage(msg, origin);                                                     // 745
                }                                                                                                      // 746
            } catch (x) {}                                                                                             // 747
                                                                                                                       //
            ;                                                                                                          // 747
        };                                                                                                             // 748
                                                                                                                       //
        doc.open();                                                                                                    // 750
        doc.write('<html><s' + 'cript>' + 'document.domain="' + document.domain + '";' + '</s' + 'cript></html>');     // 751
        doc.close();                                                                                                   // 754
        doc.parentWindow[WPrefix] = _window[WPrefix];                                                                  // 755
        var c = doc.createElement('div');                                                                              // 756
        doc.body.appendChild(c);                                                                                       // 757
        iframe = doc.createElement('iframe');                                                                          // 758
        c.appendChild(iframe);                                                                                         // 759
        iframe.src = iframe_url;                                                                                       // 760
        tref = setTimeout(function () {                                                                                // 761
            onerror('timeout');                                                                                        // 761
        }, 15000);                                                                                                     // 761
        unload_ref = utils.unload_add(cleanup);                                                                        // 762
        return {                                                                                                       // 763
            post: post,                                                                                                // 764
            cleanup: cleanup,                                                                                          // 765
            loaded: unattach                                                                                           // 766
        };                                                                                                             // 763
    }; //         [*] End of lib/dom.js                                                                                // 768
    //         [*] Including lib/dom2.js                                                                               // 772
    /*                                                                                                                 // 773
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var AbstractXHRObject = function () {};                                                                            // 781
                                                                                                                       //
    AbstractXHRObject.prototype = new EventEmitter(['chunk', 'finish']);                                               // 782
                                                                                                                       //
    AbstractXHRObject.prototype._start = function (method, url, payload, opts) {                                       // 784
        var that = this;                                                                                               // 785
                                                                                                                       //
        try {                                                                                                          // 787
            that.xhr = new XMLHttpRequest();                                                                           // 788
        } catch (x) {}                                                                                                 // 789
                                                                                                                       //
        ;                                                                                                              // 789
                                                                                                                       //
        if (!that.xhr) {                                                                                               // 791
            try {                                                                                                      // 792
                that.xhr = new _window.ActiveXObject('Microsoft.XMLHTTP');                                             // 793
            } catch (x) {}                                                                                             // 794
                                                                                                                       //
            ;                                                                                                          // 794
        }                                                                                                              // 795
                                                                                                                       //
        if (_window.ActiveXObject || _window.XDomainRequest) {                                                         // 796
            // IE8 caches even POSTs                                                                                   // 797
            url += (url.indexOf('?') === -1 ? '?' : '&') + 't=' + +new Date();                                         // 798
        } // Explorer tends to keep connection open, even after the                                                    // 799
        // tab gets closed: http://bugs.jquery.com/ticket/5280                                                         // 802
                                                                                                                       //
                                                                                                                       //
        that.unload_ref = utils.unload_add(function () {                                                               // 803
            that._cleanup(true);                                                                                       // 803
        });                                                                                                            // 803
                                                                                                                       //
        try {                                                                                                          // 804
            that.xhr.open(method, url, true);                                                                          // 805
        } catch (e) {                                                                                                  // 806
            // IE raises an exception on wrong port.                                                                   // 807
            that.emit('finish', 0, '');                                                                                // 808
                                                                                                                       //
            that._cleanup();                                                                                           // 809
                                                                                                                       //
            return;                                                                                                    // 810
        }                                                                                                              // 811
                                                                                                                       //
        ;                                                                                                              // 811
                                                                                                                       //
        if (!opts || !opts.no_credentials) {                                                                           // 813
            // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :                                     // 814
            // "This never affects same-site requests."                                                                // 815
            that.xhr.withCredentials = 'true';                                                                         // 816
        }                                                                                                              // 817
                                                                                                                       //
        if (opts && opts.headers) {                                                                                    // 818
            for (var key in meteorBabelHelpers.sanitizeForInObject(opts.headers)) {                                    // 819
                that.xhr.setRequestHeader(key, opts.headers[key]);                                                     // 820
            }                                                                                                          // 821
        }                                                                                                              // 822
                                                                                                                       //
        that.xhr.onreadystatechange = function () {                                                                    // 824
            if (that.xhr) {                                                                                            // 825
                var x = that.xhr;                                                                                      // 826
                                                                                                                       //
                switch (x.readyState) {                                                                                // 827
                    case 3:                                                                                            // 828
                        // IE doesn't like peeking into responseText or status                                         // 829
                        // on Microsoft.XMLHTTP and readystate=3                                                       // 830
                        try {                                                                                          // 831
                            var status = x.status;                                                                     // 832
                            var text = x.responseText;                                                                 // 833
                        } catch (x) {}                                                                                 // 834
                                                                                                                       //
                        ; // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450                               // 834
                                                                                                                       //
                        if (status === 1223) status = 204; // IE does return readystate == 3 for 404 answers.          // 836
                                                                                                                       //
                        if (text && text.length > 0) {                                                                 // 839
                            that.emit('chunk', status, text);                                                          // 840
                        }                                                                                              // 841
                                                                                                                       //
                        break;                                                                                         // 842
                                                                                                                       //
                    case 4:                                                                                            // 843
                        var status = x.status; // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450          // 844
                                                                                                                       //
                        if (status === 1223) status = 204;                                                             // 846
                        that.emit('finish', status, x.responseText);                                                   // 848
                                                                                                                       //
                        that._cleanup(false);                                                                          // 849
                                                                                                                       //
                        break;                                                                                         // 850
                }                                                                                                      // 827
            }                                                                                                          // 852
        };                                                                                                             // 853
                                                                                                                       //
        that.xhr.send(payload);                                                                                        // 854
    };                                                                                                                 // 855
                                                                                                                       //
    AbstractXHRObject.prototype._cleanup = function (abort) {                                                          // 857
        var that = this;                                                                                               // 858
        if (!that.xhr) return;                                                                                         // 859
        utils.unload_del(that.unload_ref); // IE needs this field to be a function                                     // 860
                                                                                                                       //
        that.xhr.onreadystatechange = function () {};                                                                  // 863
                                                                                                                       //
        if (abort) {                                                                                                   // 865
            try {                                                                                                      // 866
                that.xhr.abort();                                                                                      // 867
            } catch (x) {}                                                                                             // 868
                                                                                                                       //
            ;                                                                                                          // 868
        }                                                                                                              // 869
                                                                                                                       //
        that.unload_ref = that.xhr = null;                                                                             // 870
    };                                                                                                                 // 871
                                                                                                                       //
    AbstractXHRObject.prototype.close = function () {                                                                  // 873
        var that = this;                                                                                               // 874
        that.nuke();                                                                                                   // 875
                                                                                                                       //
        that._cleanup(true);                                                                                           // 876
    };                                                                                                                 // 877
                                                                                                                       //
    var XHRCorsObject = utils.XHRCorsObject = function () {                                                            // 879
        var that = this,                                                                                               // 880
            args = arguments;                                                                                          // 880
        utils.delay(function () {                                                                                      // 881
            that._start.apply(that, args);                                                                             // 881
        });                                                                                                            // 881
    };                                                                                                                 // 882
                                                                                                                       //
    XHRCorsObject.prototype = new AbstractXHRObject();                                                                 // 883
                                                                                                                       //
    var XHRLocalObject = utils.XHRLocalObject = function (method, url, payload) {                                      // 885
        var that = this;                                                                                               // 886
        utils.delay(function () {                                                                                      // 887
            that._start(method, url, payload, {                                                                        // 888
                no_credentials: true                                                                                   // 889
            });                                                                                                        // 888
        });                                                                                                            // 891
    };                                                                                                                 // 892
                                                                                                                       //
    XHRLocalObject.prototype = new AbstractXHRObject(); // References:                                                 // 893
    //   http://ajaxian.com/archives/100-line-ajax-wrapper                                                             // 898
    //   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx                                                // 899
                                                                                                                       //
    var XDRObject = utils.XDRObject = function (method, url, payload) {                                                // 900
        var that = this;                                                                                               // 901
        utils.delay(function () {                                                                                      // 902
            that._start(method, url, payload);                                                                         // 902
        });                                                                                                            // 902
    };                                                                                                                 // 903
                                                                                                                       //
    XDRObject.prototype = new EventEmitter(['chunk', 'finish']);                                                       // 904
                                                                                                                       //
    XDRObject.prototype._start = function (method, url, payload) {                                                     // 905
        var that = this;                                                                                               // 906
        var xdr = new XDomainRequest(); // IE caches even POSTs                                                        // 907
                                                                                                                       //
        url += (url.indexOf('?') === -1 ? '?' : '&') + 't=' + +new Date();                                             // 909
                                                                                                                       //
        var onerror = xdr.ontimeout = xdr.onerror = function () {                                                      // 911
            that.emit('finish', 0, '');                                                                                // 912
                                                                                                                       //
            that._cleanup(false);                                                                                      // 913
        };                                                                                                             // 914
                                                                                                                       //
        xdr.onprogress = function () {                                                                                 // 915
            that.emit('chunk', 200, xdr.responseText);                                                                 // 916
        };                                                                                                             // 917
                                                                                                                       //
        xdr.onload = function () {                                                                                     // 918
            that.emit('finish', 200, xdr.responseText);                                                                // 919
                                                                                                                       //
            that._cleanup(false);                                                                                      // 920
        };                                                                                                             // 921
                                                                                                                       //
        that.xdr = xdr;                                                                                                // 922
        that.unload_ref = utils.unload_add(function () {                                                               // 923
            that._cleanup(true);                                                                                       // 923
        });                                                                                                            // 923
                                                                                                                       //
        try {                                                                                                          // 924
            // Fails with AccessDenied if port number is bogus                                                         // 925
            that.xdr.open(method, url);                                                                                // 926
            that.xdr.send(payload);                                                                                    // 927
        } catch (x) {                                                                                                  // 928
            onerror();                                                                                                 // 929
        }                                                                                                              // 930
    };                                                                                                                 // 931
                                                                                                                       //
    XDRObject.prototype._cleanup = function (abort) {                                                                  // 933
        var that = this;                                                                                               // 934
        if (!that.xdr) return;                                                                                         // 935
        utils.unload_del(that.unload_ref);                                                                             // 936
        that.xdr.ontimeout = that.xdr.onerror = that.xdr.onprogress = that.xdr.onload = null;                          // 938
                                                                                                                       //
        if (abort) {                                                                                                   // 940
            try {                                                                                                      // 941
                that.xdr.abort();                                                                                      // 942
            } catch (x) {}                                                                                             // 943
                                                                                                                       //
            ;                                                                                                          // 943
        }                                                                                                              // 944
                                                                                                                       //
        that.unload_ref = that.xdr = null;                                                                             // 945
    };                                                                                                                 // 946
                                                                                                                       //
    XDRObject.prototype.close = function () {                                                                          // 948
        var that = this;                                                                                               // 949
        that.nuke();                                                                                                   // 950
                                                                                                                       //
        that._cleanup(true);                                                                                           // 951
    }; // 1. Is natively via XHR                                                                                       // 952
    // 2. Is natively via XDR                                                                                          // 955
    // 3. Nope, but postMessage is there so it should work via the Iframe.                                             // 956
    // 4. Nope, sorry.                                                                                                 // 957
                                                                                                                       //
                                                                                                                       //
    utils.isXHRCorsCapable = function () {                                                                             // 958
        if (_window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()) {                                     // 959
            return 1;                                                                                                  // 960
        } // XDomainRequest doesn't work if page is served from file://                                                // 961
                                                                                                                       //
                                                                                                                       //
        if (_window.XDomainRequest && _document.domain) {                                                              // 963
            return 2;                                                                                                  // 964
        }                                                                                                              // 965
                                                                                                                       //
        if (IframeTransport.enabled()) {                                                                               // 966
            return 3;                                                                                                  // 967
        }                                                                                                              // 968
                                                                                                                       //
        return 4;                                                                                                      // 969
    }; //         [*] End of lib/dom2.js                                                                               // 970
    //         [*] Including lib/sockjs.js                                                                             // 974
    /*                                                                                                                 // 975
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var SockJS = function (url, dep_protocols_whitelist, options) {                                                    // 983
        if (!(this instanceof SockJS)) {                                                                               // 984
            // makes `new` optional                                                                                    // 985
            return new SockJS(url, dep_protocols_whitelist, options);                                                  // 986
        }                                                                                                              // 987
                                                                                                                       //
        var that = this,                                                                                               // 989
            protocols_whitelist;                                                                                       // 989
        that._options = {                                                                                              // 990
            devel: false,                                                                                              // 990
            debug: false,                                                                                              // 990
            protocols_whitelist: [],                                                                                   // 990
            info: undefined,                                                                                           // 991
            rtt: undefined                                                                                             // 991
        };                                                                                                             // 990
                                                                                                                       //
        if (options) {                                                                                                 // 992
            utils.objectExtend(that._options, options);                                                                // 993
        }                                                                                                              // 994
                                                                                                                       //
        that._base_url = utils.amendUrl(url);                                                                          // 995
        that._server = that._options.server || utils.random_number_string(1000);                                       // 996
                                                                                                                       //
        if (that._options.protocols_whitelist && that._options.protocols_whitelist.length) {                           // 997
            protocols_whitelist = that._options.protocols_whitelist;                                                   // 999
        } else {                                                                                                       // 1000
            // Deprecated API                                                                                          // 1001
            if (typeof dep_protocols_whitelist === 'string' && dep_protocols_whitelist.length > 0) {                   // 1002
                protocols_whitelist = [dep_protocols_whitelist];                                                       // 1004
            } else if (utils.isArray(dep_protocols_whitelist)) {                                                       // 1005
                protocols_whitelist = dep_protocols_whitelist;                                                         // 1006
            } else {                                                                                                   // 1007
                protocols_whitelist = null;                                                                            // 1008
            }                                                                                                          // 1009
                                                                                                                       //
            if (protocols_whitelist) {                                                                                 // 1010
                that._debug('Deprecated API: Use "protocols_whitelist" option ' + 'instead of supplying protocol list as a second ' + 'parameter to SockJS constructor.');
            }                                                                                                          // 1014
        }                                                                                                              // 1015
                                                                                                                       //
        that._protocols = [];                                                                                          // 1016
        that.protocol = null;                                                                                          // 1017
        that.readyState = SockJS.CONNECTING;                                                                           // 1018
        that._ir = createInfoReceiver(that._base_url);                                                                 // 1019
                                                                                                                       //
        that._ir.onfinish = function (info, rtt) {                                                                     // 1020
            that._ir = null;                                                                                           // 1021
                                                                                                                       //
            if (info) {                                                                                                // 1022
                if (that._options.info) {                                                                              // 1023
                    // Override if user supplies the option                                                            // 1024
                    info = utils.objectExtend(info, that._options.info);                                               // 1025
                }                                                                                                      // 1026
                                                                                                                       //
                if (that._options.rtt) {                                                                               // 1027
                    rtt = that._options.rtt;                                                                           // 1028
                }                                                                                                      // 1029
                                                                                                                       //
                that._applyInfo(info, rtt, protocols_whitelist);                                                       // 1030
                                                                                                                       //
                that._didClose();                                                                                      // 1031
            } else {                                                                                                   // 1032
                that._didClose(1002, 'Can\'t connect to server', true);                                                // 1033
            }                                                                                                          // 1034
        };                                                                                                             // 1035
    }; // Inheritance                                                                                                  // 1036
                                                                                                                       //
                                                                                                                       //
    SockJS.prototype = new REventTarget();                                                                             // 1038
    SockJS.version = "0.3.4";                                                                                          // 1040
    SockJS.CONNECTING = 0;                                                                                             // 1042
    SockJS.OPEN = 1;                                                                                                   // 1043
    SockJS.CLOSING = 2;                                                                                                // 1044
    SockJS.CLOSED = 3;                                                                                                 // 1045
                                                                                                                       //
    SockJS.prototype._debug = function () {                                                                            // 1047
        if (this._options.debug) utils.log.apply(utils, arguments);                                                    // 1048
    };                                                                                                                 // 1050
                                                                                                                       //
    SockJS.prototype._dispatchOpen = function () {                                                                     // 1052
        var that = this;                                                                                               // 1053
                                                                                                                       //
        if (that.readyState === SockJS.CONNECTING) {                                                                   // 1054
            if (that._transport_tref) {                                                                                // 1055
                clearTimeout(that._transport_tref);                                                                    // 1056
                that._transport_tref = null;                                                                           // 1057
            }                                                                                                          // 1058
                                                                                                                       //
            that.readyState = SockJS.OPEN;                                                                             // 1059
            that.dispatchEvent(new SimpleEvent("open"));                                                               // 1060
        } else {                                                                                                       // 1061
            // The server might have been restarted, and lost track of our                                             // 1062
            // connection.                                                                                             // 1063
            that._didClose(1006, "Server lost session");                                                               // 1064
        }                                                                                                              // 1065
    };                                                                                                                 // 1066
                                                                                                                       //
    SockJS.prototype._dispatchMessage = function (data) {                                                              // 1068
        var that = this;                                                                                               // 1069
        if (that.readyState !== SockJS.OPEN) return;                                                                   // 1070
        that.dispatchEvent(new SimpleEvent("message", {                                                                // 1072
            data: data                                                                                                 // 1072
        }));                                                                                                           // 1072
    };                                                                                                                 // 1073
                                                                                                                       //
    SockJS.prototype._dispatchHeartbeat = function (data) {                                                            // 1075
        var that = this;                                                                                               // 1076
        if (that.readyState !== SockJS.OPEN) return;                                                                   // 1077
        that.dispatchEvent(new SimpleEvent('heartbeat', {}));                                                          // 1079
    };                                                                                                                 // 1080
                                                                                                                       //
    SockJS.prototype._didClose = function (code, reason, force) {                                                      // 1082
        var that = this;                                                                                               // 1083
        if (that.readyState !== SockJS.CONNECTING && that.readyState !== SockJS.OPEN && that.readyState !== SockJS.CLOSING) throw new Error('INVALID_STATE_ERR');
                                                                                                                       //
        if (that._ir) {                                                                                                // 1088
            that._ir.nuke();                                                                                           // 1089
                                                                                                                       //
            that._ir = null;                                                                                           // 1090
        }                                                                                                              // 1091
                                                                                                                       //
        if (that._transport) {                                                                                         // 1093
            that._transport.doCleanup();                                                                               // 1094
                                                                                                                       //
            that._transport = null;                                                                                    // 1095
        }                                                                                                              // 1096
                                                                                                                       //
        var close_event = new SimpleEvent("close", {                                                                   // 1098
            code: code,                                                                                                // 1099
            reason: reason,                                                                                            // 1100
            wasClean: utils.userSetCode(code)                                                                          // 1101
        });                                                                                                            // 1098
                                                                                                                       //
        if (!utils.userSetCode(code) && that.readyState === SockJS.CONNECTING && !force) {                             // 1103
            if (that._try_next_protocol(close_event)) {                                                                // 1105
                return;                                                                                                // 1106
            }                                                                                                          // 1107
                                                                                                                       //
            close_event = new SimpleEvent("close", {                                                                   // 1108
                code: 2000,                                                                                            // 1108
                reason: "All transports failed",                                                                       // 1109
                wasClean: false,                                                                                       // 1110
                last_event: close_event                                                                                // 1111
            });                                                                                                        // 1108
        }                                                                                                              // 1112
                                                                                                                       //
        that.readyState = SockJS.CLOSED;                                                                               // 1113
        utils.delay(function () {                                                                                      // 1115
            that.dispatchEvent(close_event);                                                                           // 1116
        });                                                                                                            // 1117
    };                                                                                                                 // 1118
                                                                                                                       //
    SockJS.prototype._didMessage = function (data) {                                                                   // 1120
        var that = this;                                                                                               // 1121
        var type = data.slice(0, 1);                                                                                   // 1122
                                                                                                                       //
        switch (type) {                                                                                                // 1123
            case 'o':                                                                                                  // 1124
                that._dispatchOpen();                                                                                  // 1125
                                                                                                                       //
                break;                                                                                                 // 1126
                                                                                                                       //
            case 'a':                                                                                                  // 1127
                var payload = JSON.parse(data.slice(1) || '[]');                                                       // 1128
                                                                                                                       //
                for (var i = 0; i < payload.length; i++) {                                                             // 1129
                    that._dispatchMessage(payload[i]);                                                                 // 1130
                }                                                                                                      // 1131
                                                                                                                       //
                break;                                                                                                 // 1132
                                                                                                                       //
            case 'm':                                                                                                  // 1133
                var payload = JSON.parse(data.slice(1) || 'null');                                                     // 1134
                                                                                                                       //
                that._dispatchMessage(payload);                                                                        // 1135
                                                                                                                       //
                break;                                                                                                 // 1136
                                                                                                                       //
            case 'c':                                                                                                  // 1137
                var payload = JSON.parse(data.slice(1) || '[]');                                                       // 1138
                                                                                                                       //
                that._didClose(payload[0], payload[1]);                                                                // 1139
                                                                                                                       //
                break;                                                                                                 // 1140
                                                                                                                       //
            case 'h':                                                                                                  // 1141
                that._dispatchHeartbeat();                                                                             // 1142
                                                                                                                       //
                break;                                                                                                 // 1143
        }                                                                                                              // 1123
    };                                                                                                                 // 1145
                                                                                                                       //
    SockJS.prototype._try_next_protocol = function (close_event) {                                                     // 1147
        var that = this;                                                                                               // 1148
                                                                                                                       //
        if (that.protocol) {                                                                                           // 1149
            that._debug('Closed transport:', that.protocol, '' + close_event);                                         // 1150
                                                                                                                       //
            that.protocol = null;                                                                                      // 1151
        }                                                                                                              // 1152
                                                                                                                       //
        if (that._transport_tref) {                                                                                    // 1153
            clearTimeout(that._transport_tref);                                                                        // 1154
            that._transport_tref = null;                                                                               // 1155
        }                                                                                                              // 1156
                                                                                                                       //
        while (1) {                                                                                                    // 1158
            var protocol = that.protocol = that._protocols.shift();                                                    // 1159
                                                                                                                       //
            if (!protocol) {                                                                                           // 1160
                return false;                                                                                          // 1161
            } // Some protocols require access to `body`, what if were in                                              // 1162
            // the `head`?                                                                                             // 1164
                                                                                                                       //
                                                                                                                       //
            if (SockJS[protocol] && SockJS[protocol].need_body === true && (!_document.body || typeof _document.readyState !== 'undefined' && _document.readyState !== 'complete')) {
                that._protocols.unshift(protocol);                                                                     // 1170
                                                                                                                       //
                that.protocol = 'waiting-for-load';                                                                    // 1171
                utils.attachEvent('load', function () {                                                                // 1172
                    that._try_next_protocol();                                                                         // 1173
                });                                                                                                    // 1174
                return true;                                                                                           // 1175
            }                                                                                                          // 1176
                                                                                                                       //
            if (!SockJS[protocol] || !SockJS[protocol].enabled(that._options)) {                                       // 1178
                that._debug('Skipping transport:', protocol);                                                          // 1180
            } else {                                                                                                   // 1181
                var roundTrips = SockJS[protocol].roundTrips || 1;                                                     // 1182
                var to = (that._options.rto || 0) * roundTrips || 5000;                                                // 1183
                that._transport_tref = utils.delay(to, function () {                                                   // 1184
                    if (that.readyState === SockJS.CONNECTING) {                                                       // 1185
                        // I can't understand how it is possible to run                                                // 1186
                        // this timer, when the state is CLOSED, but                                                   // 1187
                        // apparently in IE everythin is possible.                                                     // 1188
                        that._didClose(2007, "Transport timeouted");                                                   // 1189
                    }                                                                                                  // 1190
                });                                                                                                    // 1191
                var connid = utils.random_string(8);                                                                   // 1193
                var trans_url = that._base_url + '/' + that._server + '/' + connid;                                    // 1194
                                                                                                                       //
                that._debug('Opening transport:', protocol, ' url:' + trans_url, ' RTO:' + that._options.rto);         // 1195
                                                                                                                       //
                that._transport = new SockJS[protocol](that, trans_url, that._base_url);                               // 1197
                return true;                                                                                           // 1199
            }                                                                                                          // 1200
        }                                                                                                              // 1201
    };                                                                                                                 // 1202
                                                                                                                       //
    SockJS.prototype.close = function (code, reason) {                                                                 // 1204
        var that = this;                                                                                               // 1205
        if (code && !utils.userSetCode(code)) throw new Error("INVALID_ACCESS_ERR");                                   // 1206
                                                                                                                       //
        if (that.readyState !== SockJS.CONNECTING && that.readyState !== SockJS.OPEN) {                                // 1208
            return false;                                                                                              // 1210
        }                                                                                                              // 1211
                                                                                                                       //
        that.readyState = SockJS.CLOSING;                                                                              // 1212
                                                                                                                       //
        that._didClose(code || 1000, reason || "Normal closure");                                                      // 1213
                                                                                                                       //
        return true;                                                                                                   // 1214
    };                                                                                                                 // 1215
                                                                                                                       //
    SockJS.prototype.send = function (data) {                                                                          // 1217
        var that = this;                                                                                               // 1218
        if (that.readyState === SockJS.CONNECTING) throw new Error('INVALID_STATE_ERR');                               // 1219
                                                                                                                       //
        if (that.readyState === SockJS.OPEN) {                                                                         // 1221
            that._transport.doSend(utils.quote('' + data));                                                            // 1222
        }                                                                                                              // 1223
                                                                                                                       //
        return true;                                                                                                   // 1224
    };                                                                                                                 // 1225
                                                                                                                       //
    SockJS.prototype._applyInfo = function (info, rtt, protocols_whitelist) {                                          // 1227
        var that = this;                                                                                               // 1228
        that._options.info = info;                                                                                     // 1229
        that._options.rtt = rtt;                                                                                       // 1230
        that._options.rto = utils.countRTO(rtt);                                                                       // 1231
        that._options.info.null_origin = !_document.domain; // Servers can override base_url, eg to provide a randomized domain name and
        // avoid browser per-domain connection limits.                                                                 // 1234
                                                                                                                       //
        if (info.base_url) // <METEOR>                                                                                 // 1235
            that._base_url = utils.amendUrl(info.base_url, that._base_url); // </METEOR>                               // 1237
                                                                                                                       //
        var probed = utils.probeProtocols();                                                                           // 1239
        that._protocols = utils.detectProtocols(probed, protocols_whitelist, info); // <METEOR>                        // 1240
        // https://github.com/sockjs/sockjs-client/issues/79                                                           // 1242
        // Hack to avoid XDR when using different protocols                                                            // 1243
        // We're on IE trying to do cross-protocol. jsonp only.                                                        // 1244
                                                                                                                       //
        if (!utils.isSameOriginScheme(that._base_url) && 2 === utils.isXHRCorsCapable()) {                             // 1245
            that._protocols = ['jsonp-polling'];                                                                       // 1247
        } // </METEOR>                                                                                                 // 1248
                                                                                                                       //
    }; //         [*] End of lib/sockjs.js                                                                             // 1250
    //         [*] Including lib/trans-websocket.js                                                                    // 1254
    /*                                                                                                                 // 1255
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var WebSocketTransport = SockJS.websocket = function (ri, trans_url) {                                             // 1263
        var that = this;                                                                                               // 1264
        var url = trans_url + '/websocket';                                                                            // 1265
                                                                                                                       //
        if (url.slice(0, 5) === 'https') {                                                                             // 1266
            url = 'wss' + url.slice(5);                                                                                // 1267
        } else {                                                                                                       // 1268
            url = 'ws' + url.slice(4);                                                                                 // 1269
        }                                                                                                              // 1270
                                                                                                                       //
        that.ri = ri;                                                                                                  // 1271
        that.url = url;                                                                                                // 1272
        var Constructor = _window.WebSocket || _window.MozWebSocket;                                                   // 1273
        that.ws = new Constructor(that.url);                                                                           // 1275
                                                                                                                       //
        that.ws.onmessage = function (e) {                                                                             // 1276
            that.ri._didMessage(e.data);                                                                               // 1277
        }; // Firefox has an interesting bug. If a websocket connection is                                             // 1278
        // created after onunload, it stays alive even when user                                                       // 1280
        // navigates away from the page. In such situation let's lie -                                                 // 1281
        // let's not open the ws connection at all. See:                                                               // 1282
        // https://github.com/sockjs/sockjs-client/issues/28                                                           // 1283
        // https://bugzilla.mozilla.org/show_bug.cgi?id=696085                                                         // 1284
                                                                                                                       //
                                                                                                                       //
        that.unload_ref = utils.unload_add(function () {                                                               // 1285
            that.ws.close();                                                                                           // 1285
        });                                                                                                            // 1285
                                                                                                                       //
        that.ws.onclose = function () {                                                                                // 1286
            that.ri._didMessage(utils.closeFrame(1006, "WebSocket connection broken"));                                // 1287
        };                                                                                                             // 1288
    };                                                                                                                 // 1289
                                                                                                                       //
    WebSocketTransport.prototype.doSend = function (data) {                                                            // 1291
        this.ws.send('[' + data + ']');                                                                                // 1292
    };                                                                                                                 // 1293
                                                                                                                       //
    WebSocketTransport.prototype.doCleanup = function () {                                                             // 1295
        var that = this;                                                                                               // 1296
        var ws = that.ws;                                                                                              // 1297
                                                                                                                       //
        if (ws) {                                                                                                      // 1298
            ws.onmessage = ws.onclose = null;                                                                          // 1299
            ws.close();                                                                                                // 1300
            utils.unload_del(that.unload_ref);                                                                         // 1301
            that.unload_ref = that.ri = that.ws = null;                                                                // 1302
        }                                                                                                              // 1303
    };                                                                                                                 // 1304
                                                                                                                       //
    WebSocketTransport.enabled = function () {                                                                         // 1306
        return !!(_window.WebSocket || _window.MozWebSocket);                                                          // 1307
    }; // In theory, ws should require 1 round trip. But in chrome, this is                                            // 1308
    // not very stable over SSL. Most likely a ws connection requires a                                                // 1311
    // separate SSL connection, in which case 2 round trips are an                                                     // 1312
    // absolute minumum.                                                                                               // 1313
                                                                                                                       //
                                                                                                                       //
    WebSocketTransport.roundTrips = 2; //         [*] End of lib/trans-websocket.js                                    // 1314
    //         [*] Including lib/trans-sender.js                                                                       // 1318
    /*                                                                                                                 // 1319
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var BufferedSender = function () {};                                                                               // 1327
                                                                                                                       //
    BufferedSender.prototype.send_constructor = function (sender) {                                                    // 1328
        var that = this;                                                                                               // 1329
        that.send_buffer = [];                                                                                         // 1330
        that.sender = sender;                                                                                          // 1331
    };                                                                                                                 // 1332
                                                                                                                       //
    BufferedSender.prototype.doSend = function (message) {                                                             // 1333
        var that = this;                                                                                               // 1334
        that.send_buffer.push(message);                                                                                // 1335
                                                                                                                       //
        if (!that.send_stop) {                                                                                         // 1336
            that.send_schedule();                                                                                      // 1337
        }                                                                                                              // 1338
    }; // For polling transports in a situation when in the message callback,                                          // 1339
    // new message is being send. If the sending connection was started                                                // 1342
    // before receiving one, it is possible to saturate the network and                                                // 1343
    // timeout due to the lack of receiving socket. To avoid that we delay                                             // 1344
    // sending messages by some small time, in order to let receiving                                                  // 1345
    // connection be started beforehand. This is only a halfmeasure and                                                // 1346
    // does not fix the big problem, but it does make the tests go more                                                // 1347
    // stable on slow networks.                                                                                        // 1348
                                                                                                                       //
                                                                                                                       //
    BufferedSender.prototype.send_schedule_wait = function () {                                                        // 1349
        var that = this;                                                                                               // 1350
        var tref;                                                                                                      // 1351
                                                                                                                       //
        that.send_stop = function () {                                                                                 // 1352
            that.send_stop = null;                                                                                     // 1353
            clearTimeout(tref);                                                                                        // 1354
        };                                                                                                             // 1355
                                                                                                                       //
        tref = utils.delay(25, function () {                                                                           // 1356
            that.send_stop = null;                                                                                     // 1357
            that.send_schedule();                                                                                      // 1358
        });                                                                                                            // 1359
    };                                                                                                                 // 1360
                                                                                                                       //
    BufferedSender.prototype.send_schedule = function () {                                                             // 1362
        var that = this;                                                                                               // 1363
                                                                                                                       //
        if (that.send_buffer.length > 0) {                                                                             // 1364
            var payload = '[' + that.send_buffer.join(',') + ']';                                                      // 1365
            that.send_stop = that.sender(that.trans_url, payload, function (success, abort_reason) {                   // 1366
                that.send_stop = null;                                                                                 // 1367
                                                                                                                       //
                if (success === false) {                                                                               // 1368
                    that.ri._didClose(1006, 'Sending error ' + abort_reason);                                          // 1369
                } else {                                                                                               // 1370
                    that.send_schedule_wait();                                                                         // 1371
                }                                                                                                      // 1372
            });                                                                                                        // 1373
            that.send_buffer = [];                                                                                     // 1374
        }                                                                                                              // 1375
    };                                                                                                                 // 1376
                                                                                                                       //
    BufferedSender.prototype.send_destructor = function () {                                                           // 1378
        var that = this;                                                                                               // 1379
                                                                                                                       //
        if (that._send_stop) {                                                                                         // 1380
            that._send_stop();                                                                                         // 1381
        }                                                                                                              // 1382
                                                                                                                       //
        that._send_stop = null;                                                                                        // 1383
    };                                                                                                                 // 1384
                                                                                                                       //
    var jsonPGenericSender = function (url, payload, callback) {                                                       // 1386
        var that = this;                                                                                               // 1387
                                                                                                                       //
        if (!('_send_form' in that)) {                                                                                 // 1389
            var form = that._send_form = _document.createElement('form');                                              // 1390
                                                                                                                       //
            var area = that._send_area = _document.createElement('textarea');                                          // 1391
                                                                                                                       //
            area.name = 'd';                                                                                           // 1392
            form.style.display = 'none';                                                                               // 1393
            form.style.position = 'absolute';                                                                          // 1394
            form.method = 'POST';                                                                                      // 1395
            form.enctype = 'application/x-www-form-urlencoded';                                                        // 1396
            form.acceptCharset = "UTF-8";                                                                              // 1397
            form.appendChild(area);                                                                                    // 1398
                                                                                                                       //
            _document.body.appendChild(form);                                                                          // 1399
        }                                                                                                              // 1400
                                                                                                                       //
        var form = that._send_form;                                                                                    // 1401
        var area = that._send_area;                                                                                    // 1402
        var id = 'a' + utils.random_string(8);                                                                         // 1403
        form.target = id;                                                                                              // 1404
        form.action = url + '/jsonp_send?i=' + id;                                                                     // 1405
        var iframe;                                                                                                    // 1407
                                                                                                                       //
        try {                                                                                                          // 1408
            // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)                                     // 1409
            iframe = _document.createElement('<iframe name="' + id + '">');                                            // 1410
        } catch (x) {                                                                                                  // 1411
            iframe = _document.createElement('iframe');                                                                // 1412
            iframe.name = id;                                                                                          // 1413
        }                                                                                                              // 1414
                                                                                                                       //
        iframe.id = id;                                                                                                // 1415
        form.appendChild(iframe);                                                                                      // 1416
        iframe.style.display = 'none';                                                                                 // 1417
                                                                                                                       //
        try {                                                                                                          // 1419
            area.value = payload;                                                                                      // 1420
        } catch (e) {                                                                                                  // 1421
            utils.log('Your browser is seriously broken. Go home! ' + e.message);                                      // 1422
        }                                                                                                              // 1423
                                                                                                                       //
        form.submit();                                                                                                 // 1424
                                                                                                                       //
        var completed = function (e) {                                                                                 // 1426
            if (!iframe.onerror) return;                                                                               // 1427
            iframe.onreadystatechange = iframe.onerror = iframe.onload = null; // Opera mini doesn't like if we GC iframe
            // immediately, thus this timeout.                                                                         // 1430
                                                                                                                       //
            utils.delay(500, function () {                                                                             // 1431
                iframe.parentNode.removeChild(iframe);                                                                 // 1432
                iframe = null;                                                                                         // 1433
            });                                                                                                        // 1434
            area.value = ''; // It is not possible to detect if the iframe succeeded or                                // 1435
            // failed to submit our form.                                                                              // 1437
                                                                                                                       //
            callback(true);                                                                                            // 1438
        };                                                                                                             // 1439
                                                                                                                       //
        iframe.onerror = iframe.onload = completed;                                                                    // 1440
                                                                                                                       //
        iframe.onreadystatechange = function (e) {                                                                     // 1441
            if (iframe.readyState == 'complete') completed();                                                          // 1442
        };                                                                                                             // 1443
                                                                                                                       //
        return completed;                                                                                              // 1444
    };                                                                                                                 // 1445
                                                                                                                       //
    var createAjaxSender = function (AjaxObject) {                                                                     // 1447
        return function (url, payload, callback) {                                                                     // 1448
            var xo = new AjaxObject('POST', url + '/xhr_send', payload);                                               // 1449
                                                                                                                       //
            xo.onfinish = function (status, text) {                                                                    // 1450
                callback(status === 200 || status === 204, 'http status ' + status);                                   // 1451
            };                                                                                                         // 1453
                                                                                                                       //
            return function (abort_reason) {                                                                           // 1454
                callback(false, abort_reason);                                                                         // 1455
            };                                                                                                         // 1456
        };                                                                                                             // 1457
    }; //         [*] End of lib/trans-sender.js                                                                       // 1458
    //         [*] Including lib/trans-jsonp-receiver.js                                                               // 1462
    /*                                                                                                                 // 1463
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */ // Parts derived from Socket.io:                                                                               //
    //    https://github.com/LearnBoost/socket.io/blob/0.6.17/lib/socket.io/transports/jsonp-polling.js                // 1472
    // and jQuery-JSONP:                                                                                               // 1473
    //    https://code.google.com/p/jquery-jsonp/source/browse/trunk/core/jquery.jsonp.js                              // 1474
                                                                                                                       //
                                                                                                                       //
    var jsonPGenericReceiver = function (url, callback) {                                                              // 1475
        var tref;                                                                                                      // 1476
                                                                                                                       //
        var script = _document.createElement('script');                                                                // 1477
                                                                                                                       //
        var script2; // Opera synchronous load trick.                                                                  // 1478
                                                                                                                       //
        var close_script = function (frame) {                                                                          // 1479
            if (script2) {                                                                                             // 1480
                script2.parentNode.removeChild(script2);                                                               // 1481
                script2 = null;                                                                                        // 1482
            }                                                                                                          // 1483
                                                                                                                       //
            if (script) {                                                                                              // 1484
                clearTimeout(tref); // Unfortunately, you can't really abort script loading of                         // 1485
                // the script.                                                                                         // 1487
                                                                                                                       //
                script.parentNode.removeChild(script);                                                                 // 1488
                script.onreadystatechange = script.onerror = script.onload = script.onclick = null;                    // 1489
                script = null;                                                                                         // 1491
                callback(frame);                                                                                       // 1492
                callback = null;                                                                                       // 1493
            }                                                                                                          // 1494
        }; // IE9 fires 'error' event after orsc or before, in random order.                                           // 1495
                                                                                                                       //
                                                                                                                       //
        var loaded_okay = false;                                                                                       // 1498
        var error_timer = null;                                                                                        // 1499
        script.id = 'a' + utils.random_string(8);                                                                      // 1501
        script.src = url;                                                                                              // 1502
        script.type = 'text/javascript';                                                                               // 1503
        script.charset = 'UTF-8';                                                                                      // 1504
                                                                                                                       //
        script.onerror = function (e) {                                                                                // 1505
            if (!error_timer) {                                                                                        // 1506
                // Delay firing close_script.                                                                          // 1507
                error_timer = setTimeout(function () {                                                                 // 1508
                    if (!loaded_okay) {                                                                                // 1509
                        close_script(utils.closeFrame(1006, "JSONP script loaded abnormally (onerror)"));              // 1510
                    }                                                                                                  // 1513
                }, 1000);                                                                                              // 1514
            }                                                                                                          // 1515
        };                                                                                                             // 1516
                                                                                                                       //
        script.onload = function (e) {                                                                                 // 1517
            close_script(utils.closeFrame(1006, "JSONP script loaded abnormally (onload)"));                           // 1518
        };                                                                                                             // 1519
                                                                                                                       //
        script.onreadystatechange = function (e) {                                                                     // 1521
            if (/loaded|closed/.test(script.readyState)) {                                                             // 1522
                if (script && script.htmlFor && script.onclick) {                                                      // 1523
                    loaded_okay = true;                                                                                // 1524
                                                                                                                       //
                    try {                                                                                              // 1525
                        // In IE, actually execute the script.                                                         // 1526
                        script.onclick();                                                                              // 1527
                    } catch (x) {}                                                                                     // 1528
                }                                                                                                      // 1529
                                                                                                                       //
                if (script) {                                                                                          // 1530
                    close_script(utils.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"));       // 1531
                }                                                                                                      // 1532
            }                                                                                                          // 1533
        }; // IE: event/htmlFor/onclick trick.                                                                         // 1534
        // One can't rely on proper order for onreadystatechange. In order to                                          // 1536
        // make sure, set a 'htmlFor' and 'event' properties, so that                                                  // 1537
        // script code will be installed as 'onclick' handler for the                                                  // 1538
        // script object. Later, onreadystatechange, manually execute this                                             // 1539
        // code. FF and Chrome doesn't work with 'event' and 'htmlFor'                                                 // 1540
        // set. For reference see:                                                                                     // 1541
        //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html                                     // 1542
        // Also, read on that about script ordering:                                                                   // 1543
        //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order                                                // 1544
                                                                                                                       //
                                                                                                                       //
        if (typeof script.async === 'undefined' && _document.attachEvent) {                                            // 1545
            // According to mozilla docs, in recent browsers script.async defaults                                     // 1546
            // to 'true', so we may use it to detect a good browser:                                                   // 1547
            // https://developer.mozilla.org/en/HTML/Element/script                                                    // 1548
            if (!/opera/i.test(navigator.userAgent)) {                                                                 // 1549
                // Naively assume we're in IE                                                                          // 1550
                try {                                                                                                  // 1551
                    script.htmlFor = script.id;                                                                        // 1552
                    script.event = "onclick";                                                                          // 1553
                } catch (x) {}                                                                                         // 1554
                                                                                                                       //
                script.async = true;                                                                                   // 1555
            } else {                                                                                                   // 1556
                // Opera, second sync script hack                                                                      // 1557
                script2 = _document.createElement('script');                                                           // 1558
                script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
                script.async = script2.async = false;                                                                  // 1560
            }                                                                                                          // 1561
        }                                                                                                              // 1562
                                                                                                                       //
        if (typeof script.async !== 'undefined') {                                                                     // 1563
            script.async = true;                                                                                       // 1564
        } // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.                                 // 1565
                                                                                                                       //
                                                                                                                       //
        tref = setTimeout(function () {                                                                                // 1568
            close_script(utils.closeFrame(1006, "JSONP script loaded abnormally (timeout)"));                          // 1569
        }, 35000);                                                                                                     // 1570
                                                                                                                       //
        var head = _document.getElementsByTagName('head')[0];                                                          // 1572
                                                                                                                       //
        head.insertBefore(script, head.firstChild);                                                                    // 1573
                                                                                                                       //
        if (script2) {                                                                                                 // 1574
            head.insertBefore(script2, head.firstChild);                                                               // 1575
        }                                                                                                              // 1576
                                                                                                                       //
        return close_script;                                                                                           // 1577
    }; //         [*] End of lib/trans-jsonp-receiver.js                                                               // 1578
    //         [*] Including lib/trans-jsonp-polling.js                                                                // 1582
    /*                                                                                                                 // 1583
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */ // The simplest and most robust transport, using the well-know cross                                           //
    // domain hack - JSONP. This transport is quite inefficient - one                                                  // 1592
    // mssage could use up to one http request. But at least it works almost                                           // 1593
    // everywhere.                                                                                                     // 1594
    // Known limitations:                                                                                              // 1595
    //   o you will get a spinning cursor                                                                              // 1596
    //   o for Konqueror a dumb timer is needed to detect errors                                                       // 1597
                                                                                                                       //
                                                                                                                       //
    var JsonPTransport = SockJS['jsonp-polling'] = function (ri, trans_url) {                                          // 1600
        utils.polluteGlobalNamespace();                                                                                // 1601
        var that = this;                                                                                               // 1602
        that.ri = ri;                                                                                                  // 1603
        that.trans_url = trans_url;                                                                                    // 1604
        that.send_constructor(jsonPGenericSender);                                                                     // 1605
                                                                                                                       //
        that._schedule_recv();                                                                                         // 1606
    }; // Inheritnace                                                                                                  // 1607
                                                                                                                       //
                                                                                                                       //
    JsonPTransport.prototype = new BufferedSender();                                                                   // 1610
                                                                                                                       //
    JsonPTransport.prototype._schedule_recv = function () {                                                            // 1612
        var that = this;                                                                                               // 1613
                                                                                                                       //
        var callback = function (data) {                                                                               // 1614
            that._recv_stop = null;                                                                                    // 1615
                                                                                                                       //
            if (data) {                                                                                                // 1616
                // no data - heartbeat;                                                                                // 1617
                if (!that._is_closing) {                                                                               // 1618
                    that.ri._didMessage(data);                                                                         // 1619
                }                                                                                                      // 1620
            } // The message can be a close message, and change is_closing state.                                      // 1621
                                                                                                                       //
                                                                                                                       //
            if (!that._is_closing) {                                                                                   // 1623
                that._schedule_recv();                                                                                 // 1624
            }                                                                                                          // 1625
        };                                                                                                             // 1626
                                                                                                                       //
        that._recv_stop = jsonPReceiverWrapper(that.trans_url + '/jsonp', jsonPGenericReceiver, callback);             // 1627
    };                                                                                                                 // 1629
                                                                                                                       //
    JsonPTransport.enabled = function () {                                                                             // 1631
        return true;                                                                                                   // 1632
    };                                                                                                                 // 1633
                                                                                                                       //
    JsonPTransport.need_body = true;                                                                                   // 1635
                                                                                                                       //
    JsonPTransport.prototype.doCleanup = function () {                                                                 // 1638
        var that = this;                                                                                               // 1639
        that._is_closing = true;                                                                                       // 1640
                                                                                                                       //
        if (that._recv_stop) {                                                                                         // 1641
            that._recv_stop();                                                                                         // 1642
        }                                                                                                              // 1643
                                                                                                                       //
        that.ri = that._recv_stop = null;                                                                              // 1644
        that.send_destructor();                                                                                        // 1645
    }; // Abstract away code that handles global namespace pollution.                                                  // 1646
                                                                                                                       //
                                                                                                                       //
    var jsonPReceiverWrapper = function (url, constructReceiver, user_callback) {                                      // 1650
        var id = 'a' + utils.random_string(6);                                                                         // 1651
        var url_id = url + '?c=' + escape(WPrefix + '.' + id); // Unfortunately it is not possible to abort loading of the
        // script. We need to keep track of frake close frames.                                                        // 1655
                                                                                                                       //
        var aborting = 0; // Callback will be called exactly once.                                                     // 1656
                                                                                                                       //
        var callback = function (frame) {                                                                              // 1659
            switch (aborting) {                                                                                        // 1660
                case 0:                                                                                                // 1661
                    // Normal behaviour - delete hook _and_ emit message.                                              // 1662
                    delete _window[WPrefix][id];                                                                       // 1663
                    user_callback(frame);                                                                              // 1664
                    break;                                                                                             // 1665
                                                                                                                       //
                case 1:                                                                                                // 1666
                    // Fake close frame - emit but don't delete hook.                                                  // 1667
                    user_callback(frame);                                                                              // 1668
                    aborting = 2;                                                                                      // 1669
                    break;                                                                                             // 1670
                                                                                                                       //
                case 2:                                                                                                // 1671
                    // Got frame after connection was closed, delete hook, don't emit.                                 // 1672
                    delete _window[WPrefix][id];                                                                       // 1673
                    break;                                                                                             // 1674
            }                                                                                                          // 1660
        };                                                                                                             // 1676
                                                                                                                       //
        var close_script = constructReceiver(url_id, callback);                                                        // 1678
        _window[WPrefix][id] = close_script;                                                                           // 1679
                                                                                                                       //
        var stop = function () {                                                                                       // 1680
            if (_window[WPrefix][id]) {                                                                                // 1681
                aborting = 1;                                                                                          // 1682
                                                                                                                       //
                _window[WPrefix][id](utils.closeFrame(1000, "JSONP user aborted read"));                               // 1683
            }                                                                                                          // 1684
        };                                                                                                             // 1685
                                                                                                                       //
        return stop;                                                                                                   // 1686
    }; //         [*] End of lib/trans-jsonp-polling.js                                                                // 1687
    //         [*] Including lib/trans-xhr.js                                                                          // 1691
    /*                                                                                                                 // 1692
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var AjaxBasedTransport = function () {};                                                                           // 1700
                                                                                                                       //
    AjaxBasedTransport.prototype = new BufferedSender();                                                               // 1701
                                                                                                                       //
    AjaxBasedTransport.prototype.run = function (ri, trans_url, url_suffix, Receiver, AjaxObject) {                    // 1703
        var that = this;                                                                                               // 1705
        that.ri = ri;                                                                                                  // 1706
        that.trans_url = trans_url;                                                                                    // 1707
        that.send_constructor(createAjaxSender(AjaxObject));                                                           // 1708
        that.poll = new Polling(ri, Receiver, trans_url + url_suffix, AjaxObject);                                     // 1709
    };                                                                                                                 // 1711
                                                                                                                       //
    AjaxBasedTransport.prototype.doCleanup = function () {                                                             // 1713
        var that = this;                                                                                               // 1714
                                                                                                                       //
        if (that.poll) {                                                                                               // 1715
            that.poll.abort();                                                                                         // 1716
            that.poll = null;                                                                                          // 1717
        }                                                                                                              // 1718
    }; // xhr-streaming                                                                                                // 1719
                                                                                                                       //
                                                                                                                       //
    var XhrStreamingTransport = SockJS['xhr-streaming'] = function (ri, trans_url) {                                   // 1722
        this.run(ri, trans_url, '/xhr_streaming', XhrReceiver, utils.XHRCorsObject);                                   // 1723
    };                                                                                                                 // 1724
                                                                                                                       //
    XhrStreamingTransport.prototype = new AjaxBasedTransport();                                                        // 1726
                                                                                                                       //
    XhrStreamingTransport.enabled = function () {                                                                      // 1728
        // Support for CORS Ajax aka Ajax2? Opera 12 claims CORS but                                                   // 1729
        // doesn't do streaming.                                                                                       // 1730
        return _window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest() && !/opera/i.test(navigator.userAgent);
    };                                                                                                                 // 1734
                                                                                                                       //
    XhrStreamingTransport.roundTrips = 2; // preflight, ajax                                                           // 1735
    // Safari gets confused when a streaming ajax request is started                                                   // 1737
    // before onload. This causes the load indicator to spin indefinetely.                                             // 1738
                                                                                                                       //
    XhrStreamingTransport.need_body = true; // According to:                                                           // 1739
    //   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests            // 1743
    //   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/                                         // 1744
    // xdr-streaming                                                                                                   // 1747
                                                                                                                       //
    var XdrStreamingTransport = SockJS['xdr-streaming'] = function (ri, trans_url) {                                   // 1748
        this.run(ri, trans_url, '/xhr_streaming', XhrReceiver, utils.XDRObject);                                       // 1749
    };                                                                                                                 // 1750
                                                                                                                       //
    XdrStreamingTransport.prototype = new AjaxBasedTransport();                                                        // 1752
                                                                                                                       //
    XdrStreamingTransport.enabled = function () {                                                                      // 1754
        return !!_window.XDomainRequest;                                                                               // 1755
    };                                                                                                                 // 1756
                                                                                                                       //
    XdrStreamingTransport.roundTrips = 2; // preflight, ajax                                                           // 1757
    // xhr-polling                                                                                                     // 1761
                                                                                                                       //
    var XhrPollingTransport = SockJS['xhr-polling'] = function (ri, trans_url) {                                       // 1762
        this.run(ri, trans_url, '/xhr', XhrReceiver, utils.XHRCorsObject);                                             // 1763
    };                                                                                                                 // 1764
                                                                                                                       //
    XhrPollingTransport.prototype = new AjaxBasedTransport();                                                          // 1766
    XhrPollingTransport.enabled = XhrStreamingTransport.enabled;                                                       // 1768
    XhrPollingTransport.roundTrips = 2; // preflight, ajax                                                             // 1769
    // xdr-polling                                                                                                     // 1772
                                                                                                                       //
    var XdrPollingTransport = SockJS['xdr-polling'] = function (ri, trans_url) {                                       // 1773
        this.run(ri, trans_url, '/xhr', XhrReceiver, utils.XDRObject);                                                 // 1774
    };                                                                                                                 // 1775
                                                                                                                       //
    XdrPollingTransport.prototype = new AjaxBasedTransport();                                                          // 1777
    XdrPollingTransport.enabled = XdrStreamingTransport.enabled;                                                       // 1779
    XdrPollingTransport.roundTrips = 2; // preflight, ajax                                                             // 1780
    //         [*] End of lib/trans-xhr.js                                                                             // 1781
    //         [*] Including lib/trans-iframe.js                                                                       // 1784
    /*                                                                                                                 // 1785
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */ // Few cool transports do work only for same-origin. In order to make                                          //
    // them working cross-domain we shall use iframe, served form the                                                  // 1794
    // remote domain. New browsers, have capabilities to communicate with                                              // 1795
    // cross domain iframe, using postMessage(). In IE it was implemented                                              // 1796
    // from IE 8+, but of course, IE got some details wrong:                                                           // 1797
    //    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx                                               // 1798
    //    http://stevesouders.com/misc/test-postmessage.php                                                            // 1799
                                                                                                                       //
    var IframeTransport = function () {};                                                                              // 1801
                                                                                                                       //
    IframeTransport.prototype.i_constructor = function (ri, trans_url, base_url) {                                     // 1803
        var that = this;                                                                                               // 1804
        that.ri = ri;                                                                                                  // 1805
        that.origin = utils.getOrigin(base_url);                                                                       // 1806
        that.base_url = base_url;                                                                                      // 1807
        that.trans_url = trans_url;                                                                                    // 1808
        var iframe_url = base_url + '/iframe.html';                                                                    // 1810
                                                                                                                       //
        if (that.ri._options.devel) {                                                                                  // 1811
            iframe_url += '?t=' + +new Date();                                                                         // 1812
        }                                                                                                              // 1813
                                                                                                                       //
        that.window_id = utils.random_string(8);                                                                       // 1814
        iframe_url += '#' + that.window_id;                                                                            // 1815
        that.iframeObj = utils.createIframe(iframe_url, function (r) {                                                 // 1817
            that.ri._didClose(1006, "Unable to load an iframe (" + r + ")");                                           // 1818
        });                                                                                                            // 1819
        that.onmessage_cb = utils.bind(that.onmessage, that);                                                          // 1821
        utils.attachMessage(that.onmessage_cb);                                                                        // 1822
    };                                                                                                                 // 1823
                                                                                                                       //
    IframeTransport.prototype.doCleanup = function () {                                                                // 1825
        var that = this;                                                                                               // 1826
                                                                                                                       //
        if (that.iframeObj) {                                                                                          // 1827
            utils.detachMessage(that.onmessage_cb);                                                                    // 1828
                                                                                                                       //
            try {                                                                                                      // 1829
                // When the iframe is not loaded, IE raises an exception                                               // 1830
                // on 'contentWindow'.                                                                                 // 1831
                if (that.iframeObj.iframe.contentWindow) {                                                             // 1832
                    that.postMessage('c');                                                                             // 1833
                }                                                                                                      // 1834
            } catch (x) {}                                                                                             // 1835
                                                                                                                       //
            that.iframeObj.cleanup();                                                                                  // 1836
            that.iframeObj = null;                                                                                     // 1837
            that.onmessage_cb = that.iframeObj = null;                                                                 // 1838
        }                                                                                                              // 1839
    };                                                                                                                 // 1840
                                                                                                                       //
    IframeTransport.prototype.onmessage = function (e) {                                                               // 1842
        var that = this;                                                                                               // 1843
        if (e.origin !== that.origin) return;                                                                          // 1844
        var window_id = e.data.slice(0, 8);                                                                            // 1845
        var type = e.data.slice(8, 9);                                                                                 // 1846
        var data = e.data.slice(9);                                                                                    // 1847
        if (window_id !== that.window_id) return;                                                                      // 1849
                                                                                                                       //
        switch (type) {                                                                                                // 1851
            case 's':                                                                                                  // 1852
                that.iframeObj.loaded();                                                                               // 1853
                that.postMessage('s', JSON.stringify([SockJS.version, that.protocol, that.trans_url, that.base_url]));
                break;                                                                                                 // 1855
                                                                                                                       //
            case 't':                                                                                                  // 1856
                that.ri._didMessage(data);                                                                             // 1857
                                                                                                                       //
                break;                                                                                                 // 1858
        }                                                                                                              // 1851
    };                                                                                                                 // 1860
                                                                                                                       //
    IframeTransport.prototype.postMessage = function (type, data) {                                                    // 1862
        var that = this;                                                                                               // 1863
        that.iframeObj.post(that.window_id + type + (data || ''), that.origin);                                        // 1864
    };                                                                                                                 // 1865
                                                                                                                       //
    IframeTransport.prototype.doSend = function (message) {                                                            // 1867
        this.postMessage('m', message);                                                                                // 1868
    };                                                                                                                 // 1869
                                                                                                                       //
    IframeTransport.enabled = function () {                                                                            // 1871
        // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with                                 // 1872
        // huge delay, or not at all.                                                                                  // 1873
        var konqueror = navigator && navigator.userAgent && navigator.userAgent.indexOf('Konqueror') !== -1;           // 1874
        return (typeof _window.postMessage === 'function' || (0, _typeof3.default)(_window.postMessage) === 'object') && !konqueror;
    }; //         [*] End of lib/trans-iframe.js                                                                       // 1877
    //         [*] Including lib/trans-iframe-within.js                                                                // 1881
    /*                                                                                                                 // 1882
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var curr_window_id;                                                                                                // 1890
                                                                                                                       //
    var postMessage = function (type, data) {                                                                          // 1892
        if (parent !== _window) {                                                                                      // 1893
            parent.postMessage(curr_window_id + type + (data || ''), '*');                                             // 1894
        } else {                                                                                                       // 1895
            utils.log("Can't postMessage, no parent window.", type, data);                                             // 1896
        }                                                                                                              // 1897
    };                                                                                                                 // 1898
                                                                                                                       //
    var FacadeJS = function () {};                                                                                     // 1900
                                                                                                                       //
    FacadeJS.prototype._didClose = function (code, reason) {                                                           // 1901
        postMessage('t', utils.closeFrame(code, reason));                                                              // 1902
    };                                                                                                                 // 1903
                                                                                                                       //
    FacadeJS.prototype._didMessage = function (frame) {                                                                // 1904
        postMessage('t', frame);                                                                                       // 1905
    };                                                                                                                 // 1906
                                                                                                                       //
    FacadeJS.prototype._doSend = function (data) {                                                                     // 1907
        this._transport.doSend(data);                                                                                  // 1908
    };                                                                                                                 // 1909
                                                                                                                       //
    FacadeJS.prototype._doCleanup = function () {                                                                      // 1910
        this._transport.doCleanup();                                                                                   // 1911
    };                                                                                                                 // 1912
                                                                                                                       //
    utils.parent_origin = undefined;                                                                                   // 1914
                                                                                                                       //
    SockJS.bootstrap_iframe = function () {                                                                            // 1916
        var facade;                                                                                                    // 1917
        curr_window_id = _document.location.hash.slice(1);                                                             // 1918
                                                                                                                       //
        var onMessage = function (e) {                                                                                 // 1919
            if (e.source !== parent) return;                                                                           // 1920
            if (typeof utils.parent_origin === 'undefined') utils.parent_origin = e.origin;                            // 1921
            if (e.origin !== utils.parent_origin) return;                                                              // 1923
            var window_id = e.data.slice(0, 8);                                                                        // 1925
            var type = e.data.slice(8, 9);                                                                             // 1926
            var data = e.data.slice(9);                                                                                // 1927
            if (window_id !== curr_window_id) return;                                                                  // 1928
                                                                                                                       //
            switch (type) {                                                                                            // 1929
                case 's':                                                                                              // 1930
                    var p = JSON.parse(data);                                                                          // 1931
                    var version = p[0];                                                                                // 1932
                    var protocol = p[1];                                                                               // 1933
                    var trans_url = p[2];                                                                              // 1934
                    var base_url = p[3];                                                                               // 1935
                                                                                                                       //
                    if (version !== SockJS.version) {                                                                  // 1936
                        utils.log("Incompatibile SockJS! Main site uses:" + " \"" + version + "\", the iframe:" + " \"" + SockJS.version + "\".");
                    }                                                                                                  // 1940
                                                                                                                       //
                    if (!utils.flatUrl(trans_url) || !utils.flatUrl(base_url)) {                                       // 1941
                        utils.log("Only basic urls are supported in SockJS");                                          // 1942
                        return;                                                                                        // 1943
                    }                                                                                                  // 1944
                                                                                                                       //
                    if (!utils.isSameOriginUrl(trans_url) || !utils.isSameOriginUrl(base_url)) {                       // 1946
                        utils.log("Can't connect to different domain from within an " + "iframe. (" + JSON.stringify([_window.location.href, trans_url, base_url]) + ")");
                        return;                                                                                        // 1951
                    }                                                                                                  // 1952
                                                                                                                       //
                    facade = new FacadeJS();                                                                           // 1953
                    facade._transport = new FacadeJS[protocol](facade, trans_url, base_url);                           // 1954
                    break;                                                                                             // 1955
                                                                                                                       //
                case 'm':                                                                                              // 1956
                    facade._doSend(data);                                                                              // 1957
                                                                                                                       //
                    break;                                                                                             // 1958
                                                                                                                       //
                case 'c':                                                                                              // 1959
                    if (facade) facade._doCleanup();                                                                   // 1960
                    facade = null;                                                                                     // 1962
                    break;                                                                                             // 1963
            }                                                                                                          // 1929
        }; // alert('test ticker');                                                                                    // 1965
        // facade = new FacadeJS();                                                                                    // 1968
        // facade._transport = new FacadeJS['w-iframe-xhr-polling'](facade, 'http://host.com:9999/ticker/12/basd');    // 1969
                                                                                                                       //
                                                                                                                       //
        utils.attachMessage(onMessage); // Start                                                                       // 1971
                                                                                                                       //
        postMessage('s');                                                                                              // 1974
    }; //         [*] End of lib/trans-iframe-within.js                                                                // 1975
    //         [*] Including lib/info.js                                                                               // 1979
    /*                                                                                                                 // 1980
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var InfoReceiver = function (base_url, AjaxObject) {                                                               // 1988
        var that = this;                                                                                               // 1989
        utils.delay(function () {                                                                                      // 1990
            that.doXhr(base_url, AjaxObject);                                                                          // 1990
        });                                                                                                            // 1990
    };                                                                                                                 // 1991
                                                                                                                       //
    InfoReceiver.prototype = new EventEmitter(['finish']);                                                             // 1993
                                                                                                                       //
    InfoReceiver.prototype.doXhr = function (base_url, AjaxObject) {                                                   // 1995
        var that = this;                                                                                               // 1996
        var t0 = new Date().getTime(); // <METEOR>                                                                     // 1997
        // https://github.com/sockjs/sockjs-client/pull/129                                                            // 2000
        // var xo = new AjaxObject('GET', base_url + '/info');                                                         // 2001
                                                                                                                       //
        var xo = new AjaxObject( // add cachebusting parameter to url to work around a chrome bug:                     // 2003
        // https://code.google.com/p/chromium/issues/detail?id=263981                                                  // 2005
        // or misbehaving proxies.                                                                                     // 2006
        'GET', base_url + '/info?cb=' + utils.random_string(10)); // </METEOR>                                         // 2007
                                                                                                                       //
        var tref = utils.delay(8000, function () {                                                                     // 2010
            xo.ontimeout();                                                                                            // 2011
        });                                                                                                            // 2011
                                                                                                                       //
        xo.onfinish = function (status, text) {                                                                        // 2013
            clearTimeout(tref);                                                                                        // 2014
            tref = null;                                                                                               // 2015
                                                                                                                       //
            if (status === 200) {                                                                                      // 2016
                var rtt = new Date().getTime() - t0;                                                                   // 2017
                var info = JSON.parse(text);                                                                           // 2018
                if ((typeof info === "undefined" ? "undefined" : (0, _typeof3.default)(info)) !== 'object') info = {};
                that.emit('finish', info, rtt);                                                                        // 2020
            } else {                                                                                                   // 2021
                that.emit('finish');                                                                                   // 2022
            }                                                                                                          // 2023
        };                                                                                                             // 2024
                                                                                                                       //
        xo.ontimeout = function () {                                                                                   // 2025
            xo.close();                                                                                                // 2026
            that.emit('finish');                                                                                       // 2027
        };                                                                                                             // 2028
    };                                                                                                                 // 2029
                                                                                                                       //
    var InfoReceiverIframe = function (base_url) {                                                                     // 2031
        var that = this;                                                                                               // 2032
                                                                                                                       //
        var go = function () {                                                                                         // 2033
            var ifr = new IframeTransport();                                                                           // 2034
            ifr.protocol = 'w-iframe-info-receiver';                                                                   // 2035
                                                                                                                       //
            var fun = function (r) {                                                                                   // 2036
                if (typeof r === 'string' && r.substr(0, 1) === 'm') {                                                 // 2037
                    var d = JSON.parse(r.substr(1));                                                                   // 2038
                    var info = d[0],                                                                                   // 2039
                        rtt = d[1];                                                                                    // 2039
                    that.emit('finish', info, rtt);                                                                    // 2040
                } else {                                                                                               // 2041
                    that.emit('finish');                                                                               // 2042
                }                                                                                                      // 2043
                                                                                                                       //
                ifr.doCleanup();                                                                                       // 2044
                ifr = null;                                                                                            // 2045
            };                                                                                                         // 2046
                                                                                                                       //
            var mock_ri = {                                                                                            // 2047
                _options: {},                                                                                          // 2048
                _didClose: fun,                                                                                        // 2049
                _didMessage: fun                                                                                       // 2050
            };                                                                                                         // 2047
            ifr.i_constructor(mock_ri, base_url, base_url);                                                            // 2052
        };                                                                                                             // 2053
                                                                                                                       //
        if (!_document.body) {                                                                                         // 2054
            utils.attachEvent('load', go);                                                                             // 2055
        } else {                                                                                                       // 2056
            go();                                                                                                      // 2057
        }                                                                                                              // 2058
    };                                                                                                                 // 2059
                                                                                                                       //
    InfoReceiverIframe.prototype = new EventEmitter(['finish']);                                                       // 2060
                                                                                                                       //
    var InfoReceiverFake = function () {                                                                               // 2063
        // It may not be possible to do cross domain AJAX to get the info                                              // 2064
        // data, for example for IE7. But we want to run JSONP, so let's                                               // 2065
        // fake the response, with rtt=2s (rto=6s).                                                                    // 2066
        var that = this;                                                                                               // 2067
        utils.delay(function () {                                                                                      // 2068
            that.emit('finish', {}, 2000);                                                                             // 2069
        });                                                                                                            // 2070
    };                                                                                                                 // 2071
                                                                                                                       //
    InfoReceiverFake.prototype = new EventEmitter(['finish']);                                                         // 2072
                                                                                                                       //
    var createInfoReceiver = function (base_url) {                                                                     // 2074
        if (utils.isSameOriginUrl(base_url)) {                                                                         // 2075
            // If, for some reason, we have SockJS locally - there's no                                                // 2076
            // need to start up the complex machinery. Just use ajax.                                                  // 2077
            return new InfoReceiver(base_url, utils.XHRLocalObject);                                                   // 2078
        }                                                                                                              // 2079
                                                                                                                       //
        switch (utils.isXHRCorsCapable()) {                                                                            // 2080
            case 1:                                                                                                    // 2081
                // XHRLocalObject -> no_credentials=true                                                               // 2082
                return new InfoReceiver(base_url, utils.XHRLocalObject);                                               // 2083
                                                                                                                       //
            case 2:                                                                                                    // 2084
                // <METEOR>                                                                                            // 2085
                // https://github.com/sockjs/sockjs-client/issues/79                                                   // 2086
                // XDR doesn't work across different schemes                                                           // 2087
                // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
                if (utils.isSameOriginScheme(base_url)) return new InfoReceiver(base_url, utils.XDRObject);else return new InfoReceiverFake();
            // </METEOR>                                                                                               // 2093
                                                                                                                       //
            case 3:                                                                                                    // 2094
                // Opera                                                                                               // 2095
                return new InfoReceiverIframe(base_url);                                                               // 2096
                                                                                                                       //
            default:                                                                                                   // 2097
                // IE 7                                                                                                // 2098
                return new InfoReceiverFake();                                                                         // 2099
        }                                                                                                              // 2080
                                                                                                                       //
        ;                                                                                                              // 2100
    };                                                                                                                 // 2101
                                                                                                                       //
    var WInfoReceiverIframe = FacadeJS['w-iframe-info-receiver'] = function (ri, _trans_url, base_url) {               // 2104
        var ir = new InfoReceiver(base_url, utils.XHRLocalObject);                                                     // 2105
                                                                                                                       //
        ir.onfinish = function (info, rtt) {                                                                           // 2106
            ri._didMessage('m' + JSON.stringify([info, rtt]));                                                         // 2107
                                                                                                                       //
            ri._didClose();                                                                                            // 2108
        };                                                                                                             // 2109
    };                                                                                                                 // 2110
                                                                                                                       //
    WInfoReceiverIframe.prototype.doCleanup = function () {}; //         [*] End of lib/info.js                        // 2111
    //         [*] Including lib/trans-iframe-eventsource.js                                                           // 2115
    /*                                                                                                                 // 2116
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var EventSourceIframeTransport = SockJS['iframe-eventsource'] = function () {                                      // 2124
        var that = this;                                                                                               // 2125
        that.protocol = 'w-iframe-eventsource';                                                                        // 2126
        that.i_constructor.apply(that, arguments);                                                                     // 2127
    };                                                                                                                 // 2128
                                                                                                                       //
    EventSourceIframeTransport.prototype = new IframeTransport();                                                      // 2130
                                                                                                                       //
    EventSourceIframeTransport.enabled = function () {                                                                 // 2132
        return 'EventSource' in _window && IframeTransport.enabled();                                                  // 2133
    };                                                                                                                 // 2134
                                                                                                                       //
    EventSourceIframeTransport.need_body = true;                                                                       // 2136
    EventSourceIframeTransport.roundTrips = 3; // html, javascript, eventsource                                        // 2137
    // w-iframe-eventsource                                                                                            // 2140
                                                                                                                       //
    var EventSourceTransport = FacadeJS['w-iframe-eventsource'] = function (ri, trans_url) {                           // 2141
        this.run(ri, trans_url, '/eventsource', EventSourceReceiver, utils.XHRLocalObject);                            // 2142
    };                                                                                                                 // 2143
                                                                                                                       //
    EventSourceTransport.prototype = new AjaxBasedTransport(); //         [*] End of lib/trans-iframe-eventsource.js   // 2144
    //         [*] Including lib/trans-iframe-xhr-polling.js                                                           // 2148
    /*                                                                                                                 // 2149
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var XhrPollingIframeTransport = SockJS['iframe-xhr-polling'] = function () {                                       // 2157
        var that = this;                                                                                               // 2158
        that.protocol = 'w-iframe-xhr-polling';                                                                        // 2159
        that.i_constructor.apply(that, arguments);                                                                     // 2160
    };                                                                                                                 // 2161
                                                                                                                       //
    XhrPollingIframeTransport.prototype = new IframeTransport();                                                       // 2163
                                                                                                                       //
    XhrPollingIframeTransport.enabled = function () {                                                                  // 2165
        return _window.XMLHttpRequest && IframeTransport.enabled();                                                    // 2166
    };                                                                                                                 // 2167
                                                                                                                       //
    XhrPollingIframeTransport.need_body = true;                                                                        // 2169
    XhrPollingIframeTransport.roundTrips = 3; // html, javascript, xhr                                                 // 2170
    // w-iframe-xhr-polling                                                                                            // 2173
                                                                                                                       //
    var XhrPollingITransport = FacadeJS['w-iframe-xhr-polling'] = function (ri, trans_url) {                           // 2174
        this.run(ri, trans_url, '/xhr', XhrReceiver, utils.XHRLocalObject);                                            // 2175
    };                                                                                                                 // 2176
                                                                                                                       //
    XhrPollingITransport.prototype = new AjaxBasedTransport(); //         [*] End of lib/trans-iframe-xhr-polling.js   // 2178
    //         [*] Including lib/trans-iframe-htmlfile.js                                                              // 2182
    /*                                                                                                                 // 2183
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */ // This transport generally works in any browser, but will cause a                                             //
    // spinning cursor to appear in any browser other than IE.                                                         // 2192
    // We may test this transport in all browsers - why not, but in                                                    // 2193
    // production it should be only run in IE.                                                                         // 2194
                                                                                                                       //
    var HtmlFileIframeTransport = SockJS['iframe-htmlfile'] = function () {                                            // 2196
        var that = this;                                                                                               // 2197
        that.protocol = 'w-iframe-htmlfile';                                                                           // 2198
        that.i_constructor.apply(that, arguments);                                                                     // 2199
    }; // Inheritance.                                                                                                 // 2200
                                                                                                                       //
                                                                                                                       //
    HtmlFileIframeTransport.prototype = new IframeTransport();                                                         // 2203
                                                                                                                       //
    HtmlFileIframeTransport.enabled = function () {                                                                    // 2205
        return IframeTransport.enabled();                                                                              // 2206
    };                                                                                                                 // 2207
                                                                                                                       //
    HtmlFileIframeTransport.need_body = true;                                                                          // 2209
    HtmlFileIframeTransport.roundTrips = 3; // html, javascript, htmlfile                                              // 2210
    // w-iframe-htmlfile                                                                                               // 2213
                                                                                                                       //
    var HtmlFileTransport = FacadeJS['w-iframe-htmlfile'] = function (ri, trans_url) {                                 // 2214
        this.run(ri, trans_url, '/htmlfile', HtmlfileReceiver, utils.XHRLocalObject);                                  // 2215
    };                                                                                                                 // 2216
                                                                                                                       //
    HtmlFileTransport.prototype = new AjaxBasedTransport(); //         [*] End of lib/trans-iframe-htmlfile.js         // 2217
    //         [*] Including lib/trans-polling.js                                                                      // 2221
    /*                                                                                                                 // 2222
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var Polling = function (ri, Receiver, recv_url, AjaxObject) {                                                      // 2230
        var that = this;                                                                                               // 2231
        that.ri = ri;                                                                                                  // 2232
        that.Receiver = Receiver;                                                                                      // 2233
        that.recv_url = recv_url;                                                                                      // 2234
        that.AjaxObject = AjaxObject;                                                                                  // 2235
                                                                                                                       //
        that._scheduleRecv();                                                                                          // 2236
    };                                                                                                                 // 2237
                                                                                                                       //
    Polling.prototype._scheduleRecv = function () {                                                                    // 2239
        var that = this;                                                                                               // 2240
        var poll = that.poll = new that.Receiver(that.recv_url, that.AjaxObject);                                      // 2241
        var msg_counter = 0;                                                                                           // 2242
                                                                                                                       //
        poll.onmessage = function (e) {                                                                                // 2243
            msg_counter += 1;                                                                                          // 2244
                                                                                                                       //
            that.ri._didMessage(e.data);                                                                               // 2245
        };                                                                                                             // 2246
                                                                                                                       //
        poll.onclose = function (e) {                                                                                  // 2247
            that.poll = poll = poll.onmessage = poll.onclose = null;                                                   // 2248
                                                                                                                       //
            if (!that.poll_is_closing) {                                                                               // 2249
                if (e.reason === 'permanent') {                                                                        // 2250
                    that.ri._didClose(1006, 'Polling error (' + e.reason + ')');                                       // 2251
                } else {                                                                                               // 2252
                    that._scheduleRecv();                                                                              // 2253
                }                                                                                                      // 2254
            }                                                                                                          // 2255
        };                                                                                                             // 2256
    };                                                                                                                 // 2257
                                                                                                                       //
    Polling.prototype.abort = function () {                                                                            // 2259
        var that = this;                                                                                               // 2260
        that.poll_is_closing = true;                                                                                   // 2261
                                                                                                                       //
        if (that.poll) {                                                                                               // 2262
            that.poll.abort();                                                                                         // 2263
        }                                                                                                              // 2264
    }; //         [*] End of lib/trans-polling.js                                                                      // 2265
    //         [*] Including lib/trans-receiver-eventsource.js                                                         // 2269
    /*                                                                                                                 // 2270
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var EventSourceReceiver = function (url) {                                                                         // 2278
        var that = this;                                                                                               // 2279
        var es = new EventSource(url);                                                                                 // 2280
                                                                                                                       //
        es.onmessage = function (e) {                                                                                  // 2281
            that.dispatchEvent(new SimpleEvent('message', {                                                            // 2282
                'data': unescape(e.data)                                                                               // 2283
            }));                                                                                                       // 2283
        };                                                                                                             // 2284
                                                                                                                       //
        that.es_close = es.onerror = function (e, abort_reason) {                                                      // 2285
            // ES on reconnection has readyState = 0 or 1.                                                             // 2286
            // on network error it's CLOSED = 2                                                                        // 2287
            var reason = abort_reason ? 'user' : es.readyState !== 2 ? 'network' : 'permanent';                        // 2288
            that.es_close = es.onmessage = es.onerror = null; // EventSource reconnects automatically.                 // 2290
                                                                                                                       //
            es.close();                                                                                                // 2292
            es = null; // Safari and chrome < 15 crash if we close window before                                       // 2293
            // waiting for ES cleanup. See:                                                                            // 2295
            //   https://code.google.com/p/chromium/issues/detail?id=89155                                             // 2296
                                                                                                                       //
            utils.delay(200, function () {                                                                             // 2297
                that.dispatchEvent(new SimpleEvent('close', {                                                          // 2298
                    reason: reason                                                                                     // 2298
                }));                                                                                                   // 2298
            });                                                                                                        // 2299
        };                                                                                                             // 2300
    };                                                                                                                 // 2301
                                                                                                                       //
    EventSourceReceiver.prototype = new REventTarget();                                                                // 2303
                                                                                                                       //
    EventSourceReceiver.prototype.abort = function () {                                                                // 2305
        var that = this;                                                                                               // 2306
                                                                                                                       //
        if (that.es_close) {                                                                                           // 2307
            that.es_close({}, true);                                                                                   // 2308
        }                                                                                                              // 2309
    }; //         [*] End of lib/trans-receiver-eventsource.js                                                         // 2310
    //         [*] Including lib/trans-receiver-htmlfile.js                                                            // 2314
    /*                                                                                                                 // 2315
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var _is_ie_htmlfile_capable;                                                                                       // 2323
                                                                                                                       //
    var isIeHtmlfileCapable = function () {                                                                            // 2324
        if (_is_ie_htmlfile_capable === undefined) {                                                                   // 2325
            if ('ActiveXObject' in _window) {                                                                          // 2326
                try {                                                                                                  // 2327
                    _is_ie_htmlfile_capable = !!new ActiveXObject('htmlfile');                                         // 2328
                } catch (x) {}                                                                                         // 2329
            } else {                                                                                                   // 2330
                _is_ie_htmlfile_capable = false;                                                                       // 2331
            }                                                                                                          // 2332
        }                                                                                                              // 2333
                                                                                                                       //
        return _is_ie_htmlfile_capable;                                                                                // 2334
    };                                                                                                                 // 2335
                                                                                                                       //
    var HtmlfileReceiver = function (url) {                                                                            // 2338
        var that = this;                                                                                               // 2339
        utils.polluteGlobalNamespace();                                                                                // 2340
        that.id = 'a' + utils.random_string(6, 26);                                                                    // 2342
        url += (url.indexOf('?') === -1 ? '?' : '&') + 'c=' + escape(WPrefix + '.' + that.id);                         // 2343
        var constructor = isIeHtmlfileCapable() ? utils.createHtmlfile : utils.createIframe;                           // 2346
        var iframeObj;                                                                                                 // 2349
        _window[WPrefix][that.id] = {                                                                                  // 2350
            start: function () {                                                                                       // 2351
                iframeObj.loaded();                                                                                    // 2352
            },                                                                                                         // 2353
            message: function (data) {                                                                                 // 2354
                that.dispatchEvent(new SimpleEvent('message', {                                                        // 2355
                    'data': data                                                                                       // 2355
                }));                                                                                                   // 2355
            },                                                                                                         // 2356
            stop: function () {                                                                                        // 2357
                that.iframe_close({}, 'network');                                                                      // 2358
            }                                                                                                          // 2359
        };                                                                                                             // 2350
                                                                                                                       //
        that.iframe_close = function (e, abort_reason) {                                                               // 2361
            iframeObj.cleanup();                                                                                       // 2362
            that.iframe_close = iframeObj = null;                                                                      // 2363
            delete _window[WPrefix][that.id];                                                                          // 2364
            that.dispatchEvent(new SimpleEvent('close', {                                                              // 2365
                reason: abort_reason                                                                                   // 2365
            }));                                                                                                       // 2365
        };                                                                                                             // 2366
                                                                                                                       //
        iframeObj = constructor(url, function (e) {                                                                    // 2367
            that.iframe_close({}, 'permanent');                                                                        // 2368
        });                                                                                                            // 2369
    };                                                                                                                 // 2370
                                                                                                                       //
    HtmlfileReceiver.prototype = new REventTarget();                                                                   // 2372
                                                                                                                       //
    HtmlfileReceiver.prototype.abort = function () {                                                                   // 2374
        var that = this;                                                                                               // 2375
                                                                                                                       //
        if (that.iframe_close) {                                                                                       // 2376
            that.iframe_close({}, 'user');                                                                             // 2377
        }                                                                                                              // 2378
    }; //         [*] End of lib/trans-receiver-htmlfile.js                                                            // 2379
    //         [*] Including lib/trans-receiver-xhr.js                                                                 // 2383
    /*                                                                                                                 // 2384
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    var XhrReceiver = function (url, AjaxObject) {                                                                     // 2392
        var that = this;                                                                                               // 2393
        var buf_pos = 0;                                                                                               // 2394
        that.xo = new AjaxObject('POST', url, null);                                                                   // 2396
                                                                                                                       //
        that.xo.onchunk = function (status, text) {                                                                    // 2397
            if (status !== 200) return;                                                                                // 2398
                                                                                                                       //
            while (1) {                                                                                                // 2399
                var buf = text.slice(buf_pos);                                                                         // 2400
                var p = buf.indexOf('\n');                                                                             // 2401
                if (p === -1) break;                                                                                   // 2402
                buf_pos += p + 1;                                                                                      // 2403
                var msg = buf.slice(0, p);                                                                             // 2404
                that.dispatchEvent(new SimpleEvent('message', {                                                        // 2405
                    data: msg                                                                                          // 2405
                }));                                                                                                   // 2405
            }                                                                                                          // 2406
        };                                                                                                             // 2407
                                                                                                                       //
        that.xo.onfinish = function (status, text) {                                                                   // 2408
            that.xo.onchunk(status, text);                                                                             // 2409
            that.xo = null;                                                                                            // 2410
            var reason = status === 200 ? 'network' : 'permanent';                                                     // 2411
            that.dispatchEvent(new SimpleEvent('close', {                                                              // 2412
                reason: reason                                                                                         // 2412
            }));                                                                                                       // 2412
        };                                                                                                             // 2413
    };                                                                                                                 // 2414
                                                                                                                       //
    XhrReceiver.prototype = new REventTarget();                                                                        // 2416
                                                                                                                       //
    XhrReceiver.prototype.abort = function () {                                                                        // 2418
        var that = this;                                                                                               // 2419
                                                                                                                       //
        if (that.xo) {                                                                                                 // 2420
            that.xo.close();                                                                                           // 2421
            that.dispatchEvent(new SimpleEvent('close', {                                                              // 2422
                reason: 'user'                                                                                         // 2422
            }));                                                                                                       // 2422
            that.xo = null;                                                                                            // 2423
        }                                                                                                              // 2424
    }; //         [*] End of lib/trans-receiver-xhr.js                                                                 // 2425
    //         [*] Including lib/test-hooks.js                                                                         // 2429
    /*                                                                                                                 // 2430
     * ***** BEGIN LICENSE BLOCK *****                                                                                 //
     * Copyright (c) 2011-2012 VMware, Inc.                                                                            //
     *                                                                                                                 //
     * For the license see COPYING.                                                                                    //
     * ***** END LICENSE BLOCK *****                                                                                   //
     */ // For testing                                                                                                 //
                                                                                                                       //
                                                                                                                       //
    SockJS.getUtils = function () {                                                                                    // 2439
        return utils;                                                                                                  // 2440
    };                                                                                                                 // 2441
                                                                                                                       //
    SockJS.getIframeTransport = function () {                                                                          // 2443
        return IframeTransport;                                                                                        // 2444
    }; //         [*] End of lib/test-hooks.js                                                                         // 2445
                                                                                                                       //
                                                                                                                       //
    return SockJS;                                                                                                     // 2448
}();                                                                                                                   // 2449
                                                                                                                       //
if ('_sockjs_onload' in window) setTimeout(_sockjs_onload, 1); // AMD compliance                                       // 2450
                                                                                                                       //
if (typeof define === 'function' && define.amd) {                                                                      // 2453
    define('sockjs', [], function () {                                                                                 // 2454
        return SockJS;                                                                                                 // 2454
    });                                                                                                                // 2454
} //     [*] End of lib/index.js                                                                                       // 2455
// [*] End of lib/all.js                                                                                               // 2458
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stream_client_sockjs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/stream_client_sockjs.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var DDP = void 0,                                                                                                      // 1
    LivedataTest = void 0;                                                                                             // 1
module.watch(require("./namespace.js"), {                                                                              // 1
  DDP: function (v) {                                                                                                  // 1
    DDP = v;                                                                                                           // 1
  },                                                                                                                   // 1
  LivedataTest: function (v) {                                                                                         // 1
    LivedataTest = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
// @param url {String} URL to Meteor app                                                                               // 3
//   "http://subdomain.meteor.com/" or "/" or                                                                          // 4
//   "ddp+sockjs://foo-**.meteor.com/sockjs"                                                                           // 5
LivedataTest.ClientStream = function (url, options) {                                                                  // 6
  var self = this;                                                                                                     // 7
  self.options = _.extend({                                                                                            // 8
    retry: true                                                                                                        // 9
  }, options);                                                                                                         // 8
                                                                                                                       //
  self._initCommon(self.options); //// Constants                                                                       // 11
  // how long between hearing heartbeat from the server until we declare                                               // 16
  // the connection dead. heartbeats come every 45s (stream_server.js)                                                 // 17
  //                                                                                                                   // 18
  // NOTE: this is a older timeout mechanism. We now send heartbeats at                                                // 19
  // the DDP level (https://github.com/meteor/meteor/pull/1865), and                                                   // 20
  // expect those timeouts to kill a non-responsive connection before                                                  // 21
  // this timeout fires. This is kept around for compatibility (when                                                   // 22
  // talking to a server that doesn't support DDP heartbeats) and can be                                               // 23
  // removed later.                                                                                                    // 24
                                                                                                                       //
                                                                                                                       //
  self.HEARTBEAT_TIMEOUT = 100 * 1000;                                                                                 // 25
  self.rawUrl = url;                                                                                                   // 27
  self.socket = null;                                                                                                  // 28
  self.heartbeatTimer = null; // Listen to global 'online' event if we are running in a browser.                       // 30
  // (IE8 does not support addEventListener)                                                                           // 33
                                                                                                                       //
  if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener("online", _.bind(self._online, self), false /* useCapture. make FF3.6 happy. */); //// Kickoff!
                                                                                                                       //
  self._launchConnection();                                                                                            // 39
};                                                                                                                     // 40
                                                                                                                       //
_.extend(LivedataTest.ClientStream.prototype, {                                                                        // 42
  // data is a utf8 string. Data sent while not connected is dropped on                                                // 44
  // the floor, and it is up the user of this API to retransmit lost                                                   // 45
  // messages on 'reset'                                                                                               // 46
  send: function (data) {                                                                                              // 47
    var self = this;                                                                                                   // 48
                                                                                                                       //
    if (self.currentStatus.connected) {                                                                                // 49
      self.socket.send(data);                                                                                          // 50
    }                                                                                                                  // 51
  },                                                                                                                   // 52
  // Changes where this connection points                                                                              // 54
  _changeUrl: function (url) {                                                                                         // 55
    var self = this;                                                                                                   // 56
    self.rawUrl = url;                                                                                                 // 57
  },                                                                                                                   // 58
  _connected: function () {                                                                                            // 60
    var self = this;                                                                                                   // 61
                                                                                                                       //
    if (self.connectionTimer) {                                                                                        // 63
      clearTimeout(self.connectionTimer);                                                                              // 64
      self.connectionTimer = null;                                                                                     // 65
    }                                                                                                                  // 66
                                                                                                                       //
    if (self.currentStatus.connected) {                                                                                // 68
      // already connected. do nothing. this probably shouldn't happen.                                                // 69
      return;                                                                                                          // 70
    } // update status                                                                                                 // 71
                                                                                                                       //
                                                                                                                       //
    self.currentStatus.status = "connected";                                                                           // 74
    self.currentStatus.connected = true;                                                                               // 75
    self.currentStatus.retryCount = 0;                                                                                 // 76
    self.statusChanged(); // fire resets. This must come after status change so that clients                           // 77
    // can call send from within a reset callback.                                                                     // 80
                                                                                                                       //
    _.each(self.eventCallbacks.reset, function (callback) {                                                            // 81
      callback();                                                                                                      // 81
    });                                                                                                                // 81
  },                                                                                                                   // 83
  _cleanup: function (maybeError) {                                                                                    // 85
    var self = this;                                                                                                   // 86
                                                                                                                       //
    self._clearConnectionAndHeartbeatTimers();                                                                         // 88
                                                                                                                       //
    if (self.socket) {                                                                                                 // 89
      self.socket.onmessage = self.socket.onclose = self.socket.onerror = self.socket.onheartbeat = function () {};    // 90
                                                                                                                       //
      self.socket.close();                                                                                             // 92
      self.socket = null;                                                                                              // 93
    }                                                                                                                  // 94
                                                                                                                       //
    _.each(self.eventCallbacks.disconnect, function (callback) {                                                       // 96
      callback(maybeError);                                                                                            // 97
    });                                                                                                                // 98
  },                                                                                                                   // 99
  _clearConnectionAndHeartbeatTimers: function () {                                                                    // 101
    var self = this;                                                                                                   // 102
                                                                                                                       //
    if (self.connectionTimer) {                                                                                        // 103
      clearTimeout(self.connectionTimer);                                                                              // 104
      self.connectionTimer = null;                                                                                     // 105
    }                                                                                                                  // 106
                                                                                                                       //
    if (self.heartbeatTimer) {                                                                                         // 107
      clearTimeout(self.heartbeatTimer);                                                                               // 108
      self.heartbeatTimer = null;                                                                                      // 109
    }                                                                                                                  // 110
  },                                                                                                                   // 111
  _heartbeat_timeout: function () {                                                                                    // 113
    var self = this;                                                                                                   // 114
                                                                                                                       //
    Meteor._debug("Connection timeout. No sockjs heartbeat received.");                                                // 115
                                                                                                                       //
    self._lostConnection(new DDP.ConnectionError("Heartbeat timed out"));                                              // 116
  },                                                                                                                   // 117
  _heartbeat_received: function () {                                                                                   // 119
    var self = this; // If we've already permanently shut down this stream, the timeout is                             // 120
    // already cleared, and we don't need to set it again.                                                             // 122
                                                                                                                       //
    if (self._forcedToDisconnect) return;                                                                              // 123
    if (self.heartbeatTimer) clearTimeout(self.heartbeatTimer);                                                        // 125
    self.heartbeatTimer = setTimeout(_.bind(self._heartbeat_timeout, self), self.HEARTBEAT_TIMEOUT);                   // 127
  },                                                                                                                   // 130
  _sockjsProtocolsWhitelist: function () {                                                                             // 132
    // only allow polling protocols. no streaming.  streaming                                                          // 133
    // makes safari spin.                                                                                              // 134
    var protocolsWhitelist = ['xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling']; // iOS 4 and 5 and below crash when using websockets over certain
    // proxies. this seems to be resolved with iOS 6. eg                                                               // 139
    // https://github.com/LearnBoost/socket.io/issues/193#issuecomment-7308865.                                        // 140
    //                                                                                                                 // 141
    // iOS <4 doesn't support websockets at all so sockjs will just                                                    // 142
    // immediately fall back to http                                                                                   // 143
                                                                                                                       //
    var noWebsockets = navigator && /iPhone|iPad|iPod/.test(navigator.userAgent) && /OS 4_|OS 5_/.test(navigator.userAgent);
    if (!noWebsockets) protocolsWhitelist = ['websocket'].concat(protocolsWhitelist);                                  // 148
    return protocolsWhitelist;                                                                                         // 151
  },                                                                                                                   // 152
  _launchConnection: function () {                                                                                     // 154
    var self = this;                                                                                                   // 155
                                                                                                                       //
    self._cleanup(); // cleanup the old socket, if there was one.                                                      // 156
                                                                                                                       //
                                                                                                                       //
    var options = _.extend({                                                                                           // 158
      protocols_whitelist: self._sockjsProtocolsWhitelist()                                                            // 159
    }, self.options._sockjsOptions); // Convert raw URL to SockJS URL each time we open a connection, so that we       // 158
    // can connect to random hostnames and get around browser per-host                                                 // 163
    // connection limits.                                                                                              // 164
                                                                                                                       //
                                                                                                                       //
    self.socket = new SockJS(toSockjsUrl(self.rawUrl), undefined, options);                                            // 165
                                                                                                                       //
    self.socket.onopen = function (data) {                                                                             // 166
      self._connected();                                                                                               // 167
    };                                                                                                                 // 168
                                                                                                                       //
    self.socket.onmessage = function (data) {                                                                          // 169
      self._heartbeat_received();                                                                                      // 170
                                                                                                                       //
      if (self.currentStatus.connected) _.each(self.eventCallbacks.message, function (callback) {                      // 172
        callback(data.data);                                                                                           // 174
      });                                                                                                              // 175
    };                                                                                                                 // 176
                                                                                                                       //
    self.socket.onclose = function () {                                                                                // 177
      self._lostConnection();                                                                                          // 178
    };                                                                                                                 // 179
                                                                                                                       //
    self.socket.onerror = function () {                                                                                // 180
      // XXX is this ever called?                                                                                      // 181
      Meteor._debug("stream error", _.toArray(arguments), new Date().toDateString());                                  // 182
    };                                                                                                                 // 183
                                                                                                                       //
    self.socket.onheartbeat = function () {                                                                            // 185
      self._heartbeat_received();                                                                                      // 186
    };                                                                                                                 // 187
                                                                                                                       //
    if (self.connectionTimer) clearTimeout(self.connectionTimer);                                                      // 189
    self.connectionTimer = setTimeout(function () {                                                                    // 191
      self._lostConnection(new DDP.ConnectionError("DDP connection timed out"));                                       // 192
    }, self.CONNECT_TIMEOUT);                                                                                          // 194
  }                                                                                                                    // 195
});                                                                                                                    // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stream_client_common.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/stream_client_common.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var DDP = void 0,                                                                                                      // 1
    LivedataTest = void 0;                                                                                             // 1
module.watch(require("./namespace.js"), {                                                                              // 1
  DDP: function (v) {                                                                                                  // 1
    DDP = v;                                                                                                           // 1
  },                                                                                                                   // 1
  LivedataTest: function (v) {                                                                                         // 1
    LivedataTest = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
// XXX from Underscore.String (http://epeli.github.com/underscore.string/)                                             // 3
var startsWith = function (str, starts) {                                                                              // 4
  return str.length >= starts.length && str.substring(0, starts.length) === starts;                                    // 5
};                                                                                                                     // 7
                                                                                                                       //
var endsWith = function (str, ends) {                                                                                  // 8
  return str.length >= ends.length && str.substring(str.length - ends.length) === ends;                                // 9
}; // @param url {String} URL to Meteor app, eg:                                                                       // 11
//   "/" or "madewith.meteor.com" or "https://foo.meteor.com"                                                          // 14
//   or "ddp+sockjs://ddp--****-foo.meteor.com/sockjs"                                                                 // 15
// @returns {String} URL to the endpoint with the specific scheme and subPath, e.g.                                    // 16
// for scheme "http" and subPath "sockjs"                                                                              // 17
//   "http://subdomain.meteor.com/sockjs" or "/sockjs"                                                                 // 18
//   or "https://ddp--1234-foo.meteor.com/sockjs"                                                                      // 19
                                                                                                                       //
                                                                                                                       //
var translateUrl = function (url, newSchemeBase, subPath) {                                                            // 20
  if (!newSchemeBase) {                                                                                                // 21
    newSchemeBase = "http";                                                                                            // 22
  }                                                                                                                    // 23
                                                                                                                       //
  var ddpUrlMatch = url.match(/^ddp(i?)\+sockjs:\/\//);                                                                // 25
  var httpUrlMatch = url.match(/^http(s?):\/\//);                                                                      // 26
  var newScheme;                                                                                                       // 27
                                                                                                                       //
  if (ddpUrlMatch) {                                                                                                   // 28
    // Remove scheme and split off the host.                                                                           // 29
    var urlAfterDDP = url.substr(ddpUrlMatch[0].length);                                                               // 30
    newScheme = ddpUrlMatch[1] === "i" ? newSchemeBase : newSchemeBase + "s";                                          // 31
    var slashPos = urlAfterDDP.indexOf('/');                                                                           // 32
    var host = slashPos === -1 ? urlAfterDDP : urlAfterDDP.substr(0, slashPos);                                        // 33
    var rest = slashPos === -1 ? '' : urlAfterDDP.substr(slashPos); // In the host (ONLY!), change '*' characters into random digits. This
    // allows different stream connections to connect to different hostnames                                           // 38
    // and avoid browser per-hostname connection limits.                                                               // 39
                                                                                                                       //
    host = host.replace(/\*/g, function () {                                                                           // 40
      return Math.floor(Random.fraction() * 10);                                                                       // 41
    });                                                                                                                // 42
    return newScheme + '://' + host + rest;                                                                            // 44
  } else if (httpUrlMatch) {                                                                                           // 45
    newScheme = !httpUrlMatch[1] ? newSchemeBase : newSchemeBase + "s";                                                // 46
    var urlAfterHttp = url.substr(httpUrlMatch[0].length);                                                             // 47
    url = newScheme + "://" + urlAfterHttp;                                                                            // 48
  } // Prefix FQDNs but not relative URLs                                                                              // 49
                                                                                                                       //
                                                                                                                       //
  if (url.indexOf("://") === -1 && !startsWith(url, "/")) {                                                            // 52
    url = newSchemeBase + "://" + url;                                                                                 // 53
  } // XXX This is not what we should be doing: if I have a site                                                       // 54
  // deployed at "/foo", then DDP.connect("/") should actually connect                                                 // 57
  // to "/", not to "/foo". "/" is an absolute path. (Contrast: if                                                     // 58
  // deployed at "/foo", it would be reasonable for DDP.connect("bar")                                                 // 59
  // to connect to "/foo/bar").                                                                                        // 60
  //                                                                                                                   // 61
  // We should make this properly honor absolute paths rather than                                                     // 62
  // forcing the path to be relative to the site root. Simultaneously,                                                 // 63
  // we should set DDP_DEFAULT_CONNECTION_URL to include the site                                                      // 64
  // root. See also client_convenience.js #RationalizingRelativeDDPURLs                                                // 65
                                                                                                                       //
                                                                                                                       //
  url = Meteor._relativeToSiteRootUrl(url);                                                                            // 66
  if (endsWith(url, "/")) return url + subPath;else return url + "/" + subPath;                                        // 68
};                                                                                                                     // 72
                                                                                                                       //
toSockjsUrl = function (url) {                                                                                         // 74
  return translateUrl(url, "http", "sockjs");                                                                          // 75
};                                                                                                                     // 76
                                                                                                                       //
toWebsocketUrl = function (url) {                                                                                      // 78
  var ret = translateUrl(url, "ws", "websocket");                                                                      // 79
  return ret;                                                                                                          // 80
};                                                                                                                     // 81
                                                                                                                       //
LivedataTest.toSockjsUrl = toSockjsUrl;                                                                                // 83
                                                                                                                       //
_.extend(LivedataTest.ClientStream.prototype, {                                                                        // 86
  // Register for callbacks.                                                                                           // 88
  on: function (name, callback) {                                                                                      // 89
    var self = this;                                                                                                   // 90
    if (name !== 'message' && name !== 'reset' && name !== 'disconnect') throw new Error("unknown event type: " + name);
    if (!self.eventCallbacks[name]) self.eventCallbacks[name] = [];                                                    // 95
    self.eventCallbacks[name].push(callback);                                                                          // 97
  },                                                                                                                   // 98
  _initCommon: function (options) {                                                                                    // 101
    var self = this;                                                                                                   // 102
    options = options || {}; //// Constants                                                                            // 103
    // how long to wait until we declare the connection attempt                                                        // 107
    // failed.                                                                                                         // 108
                                                                                                                       //
    self.CONNECT_TIMEOUT = options.connectTimeoutMs || 10000;                                                          // 109
    self.eventCallbacks = {}; // name -> [callback]                                                                    // 111
                                                                                                                       //
    self._forcedToDisconnect = false; //// Reactive status                                                             // 113
                                                                                                                       //
    self.currentStatus = {                                                                                             // 116
      status: "connecting",                                                                                            // 117
      connected: false,                                                                                                // 118
      retryCount: 0                                                                                                    // 119
    };                                                                                                                 // 116
    self.statusListeners = typeof Tracker !== 'undefined' && new Tracker.Dependency();                                 // 123
                                                                                                                       //
    self.statusChanged = function () {                                                                                 // 124
      if (self.statusListeners) self.statusListeners.changed();                                                        // 125
    }; //// Retry logic                                                                                                // 127
                                                                                                                       //
                                                                                                                       //
    self._retry = new Retry();                                                                                         // 130
    self.connectionTimer = null;                                                                                       // 131
  },                                                                                                                   // 133
  // Trigger a reconnect.                                                                                              // 135
  reconnect: function (options) {                                                                                      // 136
    var self = this;                                                                                                   // 137
    options = options || {};                                                                                           // 138
                                                                                                                       //
    if (options.url) {                                                                                                 // 140
      self._changeUrl(options.url);                                                                                    // 141
    }                                                                                                                  // 142
                                                                                                                       //
    if (options._sockjsOptions) {                                                                                      // 144
      self.options._sockjsOptions = options._sockjsOptions;                                                            // 145
    }                                                                                                                  // 146
                                                                                                                       //
    if (self.currentStatus.connected) {                                                                                // 148
      if (options._force || options.url) {                                                                             // 149
        // force reconnect.                                                                                            // 150
        self._lostConnection(new DDP.ForcedReconnectError());                                                          // 151
      } // else, noop.                                                                                                 // 152
                                                                                                                       //
                                                                                                                       //
      return;                                                                                                          // 153
    } // if we're mid-connection, stop it.                                                                             // 154
                                                                                                                       //
                                                                                                                       //
    if (self.currentStatus.status === "connecting") {                                                                  // 157
      // Pretend it's a clean close.                                                                                   // 158
      self._lostConnection();                                                                                          // 159
    }                                                                                                                  // 160
                                                                                                                       //
    self._retry.clear();                                                                                               // 162
                                                                                                                       //
    self.currentStatus.retryCount -= 1; // don't count manual retries                                                  // 163
                                                                                                                       //
    self._retryNow();                                                                                                  // 164
  },                                                                                                                   // 165
  disconnect: function (options) {                                                                                     // 167
    var self = this;                                                                                                   // 168
    options = options || {}; // Failed is permanent. If we're failed, don't let people go back                         // 169
    // online by calling 'disconnect' then 'reconnect'.                                                                // 172
                                                                                                                       //
    if (self._forcedToDisconnect) return; // If _permanent is set, permanently disconnect a stream. Once a stream      // 173
    // is forced to disconnect, it can never reconnect. This is for                                                    // 177
    // error cases such as ddp version mismatch, where trying again                                                    // 178
    // won't fix the problem.                                                                                          // 179
                                                                                                                       //
    if (options._permanent) {                                                                                          // 180
      self._forcedToDisconnect = true;                                                                                 // 181
    }                                                                                                                  // 182
                                                                                                                       //
    self._cleanup();                                                                                                   // 184
                                                                                                                       //
    self._retry.clear();                                                                                               // 185
                                                                                                                       //
    self.currentStatus = {                                                                                             // 187
      status: options._permanent ? "failed" : "offline",                                                               // 188
      connected: false,                                                                                                // 189
      retryCount: 0                                                                                                    // 190
    };                                                                                                                 // 187
    if (options._permanent && options._error) self.currentStatus.reason = options._error;                              // 193
    self.statusChanged();                                                                                              // 196
  },                                                                                                                   // 197
  // maybeError is set unless it's a clean protocol-level close.                                                       // 199
  _lostConnection: function (maybeError) {                                                                             // 200
    var self = this;                                                                                                   // 201
                                                                                                                       //
    self._cleanup(maybeError);                                                                                         // 203
                                                                                                                       //
    self._retryLater(maybeError); // sets status. no need to do it here.                                               // 204
                                                                                                                       //
  },                                                                                                                   // 205
  // fired when we detect that we've gone online. try to reconnect                                                     // 207
  // immediately.                                                                                                      // 208
  _online: function () {                                                                                               // 209
    // if we've requested to be offline by disconnecting, don't reconnect.                                             // 210
    if (this.currentStatus.status != "offline") this.reconnect();                                                      // 211
  },                                                                                                                   // 213
  _retryLater: function (maybeError) {                                                                                 // 215
    var self = this;                                                                                                   // 216
    var timeout = 0;                                                                                                   // 218
                                                                                                                       //
    if (self.options.retry || maybeError && maybeError.errorType === "DDP.ForcedReconnectError") {                     // 219
      timeout = self._retry.retryLater(self.currentStatus.retryCount, _.bind(self._retryNow, self));                   // 221
      self.currentStatus.status = "waiting";                                                                           // 225
      self.currentStatus.retryTime = new Date().getTime() + timeout;                                                   // 226
    } else {                                                                                                           // 227
      self.currentStatus.status = "failed";                                                                            // 228
      delete self.currentStatus.retryTime;                                                                             // 229
    }                                                                                                                  // 230
                                                                                                                       //
    self.currentStatus.connected = false;                                                                              // 232
    self.statusChanged();                                                                                              // 233
  },                                                                                                                   // 234
  _retryNow: function () {                                                                                             // 236
    var self = this;                                                                                                   // 237
    if (self._forcedToDisconnect) return;                                                                              // 239
    self.currentStatus.retryCount += 1;                                                                                // 242
    self.currentStatus.status = "connecting";                                                                          // 243
    self.currentStatus.connected = false;                                                                              // 244
    delete self.currentStatus.retryTime;                                                                               // 245
    self.statusChanged();                                                                                              // 246
                                                                                                                       //
    self._launchConnection();                                                                                          // 248
  },                                                                                                                   // 249
  // Get current status. Reactive.                                                                                     // 252
  status: function () {                                                                                                // 253
    var self = this;                                                                                                   // 254
    if (self.statusListeners) self.statusListeners.depend();                                                           // 255
    return self.currentStatus;                                                                                         // 257
  }                                                                                                                    // 258
});                                                                                                                    // 86
                                                                                                                       //
DDP.ConnectionError = Meteor.makeErrorType("DDP.ConnectionError", function (message) {                                 // 261
  var self = this;                                                                                                     // 263
  self.message = message;                                                                                              // 264
});                                                                                                                    // 265
DDP.ForcedReconnectError = Meteor.makeErrorType("DDP.ForcedReconnectError", function () {});                           // 267
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livedata_common.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/livedata_common.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var DDP = void 0,                                                                                                      // 1
    LivedataTest = void 0;                                                                                             // 1
module.watch(require("./namespace.js"), {                                                                              // 1
  DDP: function (v) {                                                                                                  // 1
    DDP = v;                                                                                                           // 1
  },                                                                                                                   // 1
  LivedataTest: function (v) {                                                                                         // 1
    LivedataTest = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
LivedataTest.SUPPORTED_DDP_VERSIONS = DDPCommon.SUPPORTED_DDP_VERSIONS; // This is private but it's used in a few places. accounts-base uses
// it to get the current user. Meteor.setTimeout and friends clear                                                     // 6
// it. We can probably find a better way to factor this.                                                               // 7
                                                                                                                       //
DDP._CurrentMethodInvocation = new Meteor.EnvironmentVariable();                                                       // 8
DDP._CurrentPublicationInvocation = new Meteor.EnvironmentVariable(); // XXX: Keep DDP._CurrentInvocation for backwards-compatibility.
                                                                                                                       //
DDP._CurrentInvocation = DDP._CurrentMethodInvocation;                                                                 // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"random_stream.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/random_stream.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var DDP = void 0;                                                                                                      // 1
module.watch(require("./namespace.js"), {                                                                              // 1
  DDP: function (v) {                                                                                                  // 1
    DDP = v;                                                                                                           // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
// Returns the named sequence of pseudo-random values.                                                                 // 3
// The scope will be DDP._CurrentMethodInvocation.get(), so the stream will produce                                    // 4
// consistent values for method calls on the client and server.                                                        // 5
DDP.randomStream = function (name) {                                                                                   // 6
  var scope = DDP._CurrentMethodInvocation.get();                                                                      // 7
                                                                                                                       //
  return DDPCommon.RandomStream.get(scope, name);                                                                      // 8
};                                                                                                                     // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livedata_connection.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/livedata_connection.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                                //
                                                                                                                       //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var DDP = void 0,                                                                                                      // 1
    LivedataTest = void 0;                                                                                             // 1
module.watch(require("./namespace.js"), {                                                                              // 1
  DDP: function (v) {                                                                                                  // 1
    DDP = v;                                                                                                           // 1
  },                                                                                                                   // 1
  LivedataTest: function (v) {                                                                                         // 1
    LivedataTest = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var MongoIDMap = void 0;                                                                                               // 1
module.watch(require("./id_map.js"), {                                                                                 // 1
  MongoIDMap: function (v) {                                                                                           // 1
    MongoIDMap = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 4
  var Fiber = Npm.require('fibers');                                                                                   // 5
                                                                                                                       //
  var Future = Npm.require('fibers/future');                                                                           // 6
} // @param url {String|Object} URL to Meteor app,                                                                     // 7
//   or an object as a test hook (see code)                                                                            // 10
// Options:                                                                                                            // 11
//   reloadWithOutstanding: is it OK to reload if there are outstanding methods?                                       // 12
//   headers: extra headers to send on the websockets connection, for                                                  // 13
//     server-to-server DDP only                                                                                       // 14
//   _sockjsOptions: Specifies options to pass through to the sockjs client                                            // 15
//   onDDPNegotiationVersionFailure: callback when version negotiation fails.                                          // 16
//                                                                                                                     // 17
// XXX There should be a way to destroy a DDP connection, causing all                                                  // 18
// outstanding method calls to fail.                                                                                   // 19
//                                                                                                                     // 20
// XXX Our current way of handling failure and reconnection is great                                                   // 21
// for an app (where we want to tolerate being disconnected as an                                                      // 22
// expect state, and keep trying forever to reconnect) but cumbersome                                                  // 23
// for something like a command line tool that wants to make a                                                         // 24
// connection, call a method, and print an error if connection                                                         // 25
// fails. We should have better usability in the latter case (while                                                    // 26
// still transparently reconnecting if it's just a transient failure                                                   // 27
// or the server migrating us).                                                                                        // 28
                                                                                                                       //
                                                                                                                       //
var Connection = function (url, options) {                                                                             // 29
  var self = this;                                                                                                     // 30
  options = _.extend({                                                                                                 // 31
    onConnected: function () {},                                                                                       // 32
    onDDPVersionNegotiationFailure: function (description) {                                                           // 33
      Meteor._debug(description);                                                                                      // 34
    },                                                                                                                 // 35
    heartbeatInterval: 17500,                                                                                          // 36
    heartbeatTimeout: 15000,                                                                                           // 37
    npmFayeOptions: {},                                                                                                // 38
    // These options are only for testing.                                                                             // 39
    reloadWithOutstanding: false,                                                                                      // 40
    supportedDDPVersions: DDPCommon.SUPPORTED_DDP_VERSIONS,                                                            // 41
    retry: true,                                                                                                       // 42
    respondToPings: true,                                                                                              // 43
    // When updates are coming within this ms interval, batch them together.                                           // 44
    bufferedWritesInterval: 5,                                                                                         // 45
    // Flush buffers immediately if writes are happening continuously for more than this many ms.                      // 46
    bufferedWritesMaxAge: 500                                                                                          // 47
  }, options); // If set, called when we reconnect, queuing method calls _before_ the                                  // 31
  // existing outstanding ones.                                                                                        // 51
  // NOTE: This feature has been preserved for backwards compatibility. The                                            // 52
  // preferred method of setting a callback on reconnect is to use                                                     // 53
  // DDP.onReconnect.                                                                                                  // 54
                                                                                                                       //
  self.onReconnect = null; // as a test hook, allow passing a stream instead of a url.                                 // 55
                                                                                                                       //
  if ((typeof url === "undefined" ? "undefined" : (0, _typeof3.default)(url)) === "object") {                          // 58
    self._stream = url;                                                                                                // 59
  } else {                                                                                                             // 60
    self._stream = new LivedataTest.ClientStream(url, {                                                                // 61
      retry: options.retry,                                                                                            // 62
      headers: options.headers,                                                                                        // 63
      _sockjsOptions: options._sockjsOptions,                                                                          // 64
      // Used to keep some tests quiet, or for other cases in which                                                    // 65
      // the right thing to do with connection errors is to silently                                                   // 66
      // fail (e.g. sending package usage stats). At some point we                                                     // 67
      // should have a real API for handling client-stream-level                                                       // 68
      // errors.                                                                                                       // 69
      _dontPrintErrors: options._dontPrintErrors,                                                                      // 70
      connectTimeoutMs: options.connectTimeoutMs,                                                                      // 71
      npmFayeOptions: options.npmFayeOptions                                                                           // 72
    });                                                                                                                // 61
  }                                                                                                                    // 74
                                                                                                                       //
  self._lastSessionId = null;                                                                                          // 76
  self._versionSuggestion = null; // The last proposed DDP version.                                                    // 77
                                                                                                                       //
  self._version = null; // The DDP version agreed on by client and server.                                             // 78
                                                                                                                       //
  self._stores = {}; // name -> object with methods                                                                    // 79
                                                                                                                       //
  self._methodHandlers = {}; // name -> func                                                                           // 80
                                                                                                                       //
  self._nextMethodId = 1;                                                                                              // 81
  self._supportedDDPVersions = options.supportedDDPVersions;                                                           // 82
  self._heartbeatInterval = options.heartbeatInterval;                                                                 // 84
  self._heartbeatTimeout = options.heartbeatTimeout; // Tracks methods which the user has tried to call but which have not yet
  // called their user callback (ie, they are waiting on their result or for all                                       // 88
  // of their writes to be written to the local cache). Map from method ID to                                          // 89
  // MethodInvoker object.                                                                                             // 90
                                                                                                                       //
  self._methodInvokers = {}; // Tracks methods which the user has called but whose result messages have not            // 91
  // arrived yet.                                                                                                      // 94
  //                                                                                                                   // 95
  // _outstandingMethodBlocks is an array of blocks of methods. Each block                                             // 96
  // represents a set of methods that can run at the same time. The first block                                        // 97
  // represents the methods which are currently in flight; subsequent blocks                                           // 98
  // must wait for previous blocks to be fully finished before they can be sent                                        // 99
  // to the server.                                                                                                    // 100
  //                                                                                                                   // 101
  // Each block is an object with the following fields:                                                                // 102
  // - methods: a list of MethodInvoker objects                                                                        // 103
  // - wait: a boolean; if true, this block had a single method invoked with                                           // 104
  //         the "wait" option                                                                                         // 105
  //                                                                                                                   // 106
  // There will never be adjacent blocks with wait=false, because the only thing                                       // 107
  // that makes methods need to be serialized is a wait method.                                                        // 108
  //                                                                                                                   // 109
  // Methods are removed from the first block when their "result" is                                                   // 110
  // received. The entire first block is only removed when all of the in-flight                                        // 111
  // methods have received their results (so the "methods" list is empty) *AND*                                        // 112
  // all of the data written by those methods are visible in the local cache. So                                       // 113
  // it is possible for the first block's methods list to be empty, if we are                                          // 114
  // still waiting for some objects to quiesce.                                                                        // 115
  //                                                                                                                   // 116
  // Example:                                                                                                          // 117
  //  _outstandingMethodBlocks = [                                                                                     // 118
  //    {wait: false, methods: []},                                                                                    // 119
  //    {wait: true, methods: [<MethodInvoker for 'login'>]},                                                          // 120
  //    {wait: false, methods: [<MethodInvoker for 'foo'>,                                                             // 121
  //                            <MethodInvoker for 'bar'>]}]                                                           // 122
  // This means that there were some methods which were sent to the server and                                         // 123
  // which have returned their results, but some of the data written by                                                // 124
  // the methods may not be visible in the local cache. Once all that data is                                          // 125
  // visible, we will send a 'login' method. Once the login method has returned                                        // 126
  // and all the data is visible (including re-running subs if userId changes),                                        // 127
  // we will send the 'foo' and 'bar' methods in parallel.                                                             // 128
                                                                                                                       //
  self._outstandingMethodBlocks = []; // method ID -> array of objects with keys 'collection' and 'id', listing        // 129
  // documents written by a given method's stub. keys are associated with                                              // 132
  // methods whose stub wrote at least one document, and whose data-done message                                       // 133
  // has not yet been received.                                                                                        // 134
                                                                                                                       //
  self._documentsWrittenByStub = {}; // collection -> IdMap of "server document" object. A "server document" has:      // 135
  // - "document": the version of the document according the                                                           // 137
  //   server (ie, the snapshot before a stub wrote it, amended by any changes                                         // 138
  //   received from the server)                                                                                       // 139
  //   It is undefined if we think the document does not exist                                                         // 140
  // - "writtenByStubs": a set of method IDs whose stubs wrote to the document                                         // 141
  //   whose "data done" messages have not yet been processed                                                          // 142
                                                                                                                       //
  self._serverDocuments = {}; // Array of callbacks to be called after the next update of the local                    // 143
  // cache. Used for:                                                                                                  // 146
  //  - Calling methodInvoker.dataVisible and sub ready callbacks after                                                // 147
  //    the relevant data is flushed.                                                                                  // 148
  //  - Invoking the callbacks of "half-finished" methods after reconnect                                              // 149
  //    quiescence. Specifically, methods whose result was received over the old                                       // 150
  //    connection (so we don't re-send it) but whose data had not been made                                           // 151
  //    visible.                                                                                                       // 152
                                                                                                                       //
  self._afterUpdateCallbacks = []; // In two contexts, we buffer all incoming data messages and then process them      // 153
  // all at once in a single update:                                                                                   // 156
  //   - During reconnect, we buffer all data messages until all subs that had                                         // 157
  //     been ready before reconnect are ready again, and all methods that are                                         // 158
  //     active have returned their "data done message"; then                                                          // 159
  //   - During the execution of a "wait" method, we buffer all data messages                                          // 160
  //     until the wait method gets its "data done" message. (If the wait method                                       // 161
  //     occurs during reconnect, it doesn't get any special handling.)                                                // 162
  // all data messages are processed in one update.                                                                    // 163
  //                                                                                                                   // 164
  // The following fields are used for this "quiescence" process.                                                      // 165
  // This buffers the messages that aren't being processed yet.                                                        // 167
                                                                                                                       //
  self._messagesBufferedUntilQuiescence = []; // Map from method ID -> true. Methods are removed from this when their  // 168
  // "data done" message is received, and we will not quiesce until it is                                              // 170
  // empty.                                                                                                            // 171
                                                                                                                       //
  self._methodsBlockingQuiescence = {}; // map from sub ID -> true for subs that were ready (ie, called the sub        // 172
  // ready callback) before reconnect but haven't become ready again yet                                               // 174
                                                                                                                       //
  self._subsBeingRevived = {}; // map from sub._id -> true                                                             // 175
  // if true, the next data update should reset all stores. (set during                                                // 176
  // reconnect.)                                                                                                       // 177
                                                                                                                       //
  self._resetStores = false; // name -> array of updates for (yet to be created) collections                           // 178
                                                                                                                       //
  self._updatesForUnknownStores = {}; // if we're blocking a migration, the retry func                                 // 181
                                                                                                                       //
  self._retryMigrate = null;                                                                                           // 183
  self.__flushBufferedWrites = Meteor.bindEnvironment(self._flushBufferedWrites, "flushing DDP buffered writes", self); // Collection name -> array of messages.
                                                                                                                       //
  self._bufferedWrites = {}; // When current buffer of updates must be flushed at, in ms timestamp.                    // 188
                                                                                                                       //
  self._bufferedWritesFlushAt = null; // Timeout handle for the next processing of all pending writes                  // 190
                                                                                                                       //
  self._bufferedWritesFlushHandle = null;                                                                              // 192
  self._bufferedWritesInterval = options.bufferedWritesInterval;                                                       // 194
  self._bufferedWritesMaxAge = options.bufferedWritesMaxAge; // metadata for subscriptions.  Map from sub ID to object with keys:
  //   - id                                                                                                            // 198
  //   - name                                                                                                          // 199
  //   - params                                                                                                        // 200
  //   - inactive (if true, will be cleaned up if not reused in re-run)                                                // 201
  //   - ready (has the 'ready' message been received?)                                                                // 202
  //   - readyCallback (an optional callback to call when ready)                                                       // 203
  //   - errorCallback (an optional callback to call if the sub terminates with                                        // 204
  //                    an error, XXX COMPAT WITH 1.0.3.1)                                                             // 205
  //   - stopCallback (an optional callback to call when the sub terminates                                            // 206
  //     for any reason, with an error argument if an error triggered the stop)                                        // 207
                                                                                                                       //
  self._subscriptions = {}; // Reactive userId.                                                                        // 208
                                                                                                                       //
  self._userId = null;                                                                                                 // 211
  self._userIdDeps = new Tracker.Dependency(); // Block auto-reload while we're waiting for method responses.          // 212
                                                                                                                       //
  if (Meteor.isClient && Package.reload && !options.reloadWithOutstanding) {                                           // 215
    Package.reload.Reload._onMigrate(function (retry) {                                                                // 216
      if (!self._readyToMigrate()) {                                                                                   // 217
        if (self._retryMigrate) throw new Error("Two migrations in progress?");                                        // 218
        self._retryMigrate = retry;                                                                                    // 220
        return false;                                                                                                  // 221
      } else {                                                                                                         // 222
        return [true];                                                                                                 // 223
      }                                                                                                                // 224
    });                                                                                                                // 225
  }                                                                                                                    // 226
                                                                                                                       //
  var onMessage = function (raw_msg) {                                                                                 // 228
    try {                                                                                                              // 229
      var msg = DDPCommon.parseDDP(raw_msg);                                                                           // 230
    } catch (e) {                                                                                                      // 231
      Meteor._debug("Exception while parsing DDP", e);                                                                 // 232
                                                                                                                       //
      return;                                                                                                          // 233
    } // Any message counts as receiving a pong, as it demonstrates that                                               // 234
    // the server is still alive.                                                                                      // 237
                                                                                                                       //
                                                                                                                       //
    if (self._heartbeat) {                                                                                             // 238
      self._heartbeat.messageReceived();                                                                               // 239
    }                                                                                                                  // 240
                                                                                                                       //
    if (msg === null || !msg.msg) {                                                                                    // 242
      // XXX COMPAT WITH 0.6.6. ignore the old welcome message for back                                                // 243
      // compat.  Remove this 'if' once the server stops sending welcome                                               // 244
      // messages (stream_server.js).                                                                                  // 245
      if (!(msg && msg.server_id)) Meteor._debug("discarding invalid livedata message", msg);                          // 246
      return;                                                                                                          // 248
    }                                                                                                                  // 249
                                                                                                                       //
    if (msg.msg === 'connected') {                                                                                     // 251
      self._version = self._versionSuggestion;                                                                         // 252
                                                                                                                       //
      self._livedata_connected(msg);                                                                                   // 253
                                                                                                                       //
      options.onConnected();                                                                                           // 254
    } else if (msg.msg === 'failed') {                                                                                 // 255
      if (_.contains(self._supportedDDPVersions, msg.version)) {                                                       // 257
        self._versionSuggestion = msg.version;                                                                         // 258
                                                                                                                       //
        self._stream.reconnect({                                                                                       // 259
          _force: true                                                                                                 // 259
        });                                                                                                            // 259
      } else {                                                                                                         // 260
        var description = "DDP version negotiation failed; server requested version " + msg.version;                   // 261
                                                                                                                       //
        self._stream.disconnect({                                                                                      // 263
          _permanent: true,                                                                                            // 263
          _error: description                                                                                          // 263
        });                                                                                                            // 263
                                                                                                                       //
        options.onDDPVersionNegotiationFailure(description);                                                           // 264
      }                                                                                                                // 265
    } else if (msg.msg === 'ping' && options.respondToPings) {                                                         // 266
      self._send({                                                                                                     // 268
        msg: "pong",                                                                                                   // 268
        id: msg.id                                                                                                     // 268
      });                                                                                                              // 268
    } else if (msg.msg === 'pong') {// noop, as we assume everything's a pong                                          // 269
    } else if (_.include(['added', 'changed', 'removed', 'ready', 'updated'], msg.msg)) self._livedata_data(msg);else if (msg.msg === 'nosub') self._livedata_nosub(msg);else if (msg.msg === 'result') self._livedata_result(msg);else if (msg.msg === 'error') self._livedata_error(msg);else Meteor._debug("discarding unknown livedata message type", msg);
  };                                                                                                                   // 283
                                                                                                                       //
  var onReset = function () {                                                                                          // 285
    // Send a connect message at the beginning of the stream.                                                          // 286
    // NOTE: reset is called even on the first connection, so this is                                                  // 287
    // the only place we send this message.                                                                            // 288
    var msg = {                                                                                                        // 289
      msg: 'connect'                                                                                                   // 289
    };                                                                                                                 // 289
    if (self._lastSessionId) msg.session = self._lastSessionId;                                                        // 290
    msg.version = self._versionSuggestion || self._supportedDDPVersions[0];                                            // 292
    self._versionSuggestion = msg.version;                                                                             // 293
    msg.support = self._supportedDDPVersions;                                                                          // 294
                                                                                                                       //
    self._send(msg); // Mark non-retry calls as failed. This has to be done early as getting these methods out of the  // 295
    // current block is pretty important to making sure that quiescence is properly calculated, as                     // 298
    // well as possibly moving on to another useful block.                                                             // 299
    // Only bother testing if there is an outstandingMethodBlock (there might not be, especially if                    // 301
    // we are connecting for the first time.                                                                           // 302
                                                                                                                       //
                                                                                                                       //
    if (self._outstandingMethodBlocks.length > 0) {                                                                    // 303
      // If there is an outstanding method block, we only care about the first one as that is the                      // 304
      // one that could have already sent messages with no response, that are not allowed to retry.                    // 305
      var currentMethodBlock = self._outstandingMethodBlocks[0].methods;                                               // 306
      self._outstandingMethodBlocks[0].methods = currentMethodBlock.filter(function (methodInvoker) {                  // 307
        // Methods with 'noRetry' option set are not allowed to re-send after                                          // 309
        // recovering dropped connection.                                                                              // 310
        if (methodInvoker.sentMessage && methodInvoker.noRetry) {                                                      // 311
          // Make sure that the method is told that it failed.                                                         // 312
          methodInvoker.receiveResult(new Meteor.Error('invocation-failed', 'Method invocation might have failed due to dropped connection. ' + 'Failing because `noRetry` option was passed to Meteor.apply.'));
        } // Only keep a method if it wasn't sent or it's allowed to retry.                                            // 316
        // This may leave the block empty, but we don't move on to the next                                            // 319
        // block until the callback has been delivered, in _outstandingMethodFinished.                                 // 320
                                                                                                                       //
                                                                                                                       //
        return !(methodInvoker.sentMessage && methodInvoker.noRetry);                                                  // 321
      });                                                                                                              // 322
    } // Now, to minimize setup latency, go ahead and blast out all of                                                 // 323
    // our pending methods ands subscriptions before we've even taken                                                  // 326
    // the necessary RTT to know if we successfully reconnected. (1)                                                   // 327
    // They're supposed to be idempotent, and where they are not,                                                      // 328
    // they can block retry in apply; (2) even if we did reconnect,                                                    // 329
    // we're not sure what messages might have gotten lost                                                             // 330
    // (in either direction) since we were disconnected (TCP being                                                     // 331
    // sloppy about that.)                                                                                             // 332
    // If the current block of methods all got their results (but didn't all get                                       // 334
    // their data visible), discard the empty block now.                                                               // 335
                                                                                                                       //
                                                                                                                       //
    if (!_.isEmpty(self._outstandingMethodBlocks) && _.isEmpty(self._outstandingMethodBlocks[0].methods)) {            // 336
      self._outstandingMethodBlocks.shift();                                                                           // 338
    } // Mark all messages as unsent, they have not yet been sent on this                                              // 339
    // connection.                                                                                                     // 342
                                                                                                                       //
                                                                                                                       //
    _.each(self._methodInvokers, function (m) {                                                                        // 343
      m.sentMessage = false;                                                                                           // 344
    }); // If an `onReconnect` handler is set, call it first. Go through                                               // 345
    // some hoops to ensure that methods that are called from within                                                   // 348
    // `onReconnect` get executed _before_ ones that were originally                                                   // 349
    // outstanding (since `onReconnect` is used to re-establish auth                                                   // 350
    // certificates)                                                                                                   // 351
                                                                                                                       //
                                                                                                                       //
    self._callOnReconnectAndSendAppropriateOutstandingMethods(); // add new subscriptions at the end. this way they take effect after
    // the handlers and we don't see flicker.                                                                          // 355
                                                                                                                       //
                                                                                                                       //
    _.each(self._subscriptions, function (sub, id) {                                                                   // 356
      self._send({                                                                                                     // 357
        msg: 'sub',                                                                                                    // 358
        id: id,                                                                                                        // 359
        name: sub.name,                                                                                                // 360
        params: sub.params                                                                                             // 361
      });                                                                                                              // 357
    });                                                                                                                // 363
  };                                                                                                                   // 364
                                                                                                                       //
  var onDisconnect = function () {                                                                                     // 366
    if (self._heartbeat) {                                                                                             // 367
      self._heartbeat.stop();                                                                                          // 368
                                                                                                                       //
      self._heartbeat = null;                                                                                          // 369
    }                                                                                                                  // 370
  };                                                                                                                   // 371
                                                                                                                       //
  if (Meteor.isServer) {                                                                                               // 373
    self._stream.on('message', Meteor.bindEnvironment(onMessage, "handling DDP message"));                             // 374
                                                                                                                       //
    self._stream.on('reset', Meteor.bindEnvironment(onReset, "handling DDP reset"));                                   // 375
                                                                                                                       //
    self._stream.on('disconnect', Meteor.bindEnvironment(onDisconnect, "handling DDP disconnect"));                    // 376
  } else {                                                                                                             // 377
    self._stream.on('message', onMessage);                                                                             // 378
                                                                                                                       //
    self._stream.on('reset', onReset);                                                                                 // 379
                                                                                                                       //
    self._stream.on('disconnect', onDisconnect);                                                                       // 380
  }                                                                                                                    // 381
}; // A MethodInvoker manages sending a method to the server and calling the user's                                    // 382
// callbacks. On construction, it registers itself in the connection's                                                 // 385
// _methodInvokers map; it removes itself once the method is fully finished and                                        // 386
// the callback is invoked. This occurs when it has both received a result,                                            // 387
// and the data written by it is fully visible.                                                                        // 388
                                                                                                                       //
                                                                                                                       //
var MethodInvoker = function (options) {                                                                               // 389
  var self = this; // Public (within this file) fields.                                                                // 390
                                                                                                                       //
  self.methodId = options.methodId;                                                                                    // 393
  self.sentMessage = false;                                                                                            // 394
  self._callback = options.callback;                                                                                   // 396
  self._connection = options.connection;                                                                               // 397
  self._message = options.message;                                                                                     // 398
                                                                                                                       //
  self._onResultReceived = options.onResultReceived || function () {};                                                 // 399
                                                                                                                       //
  self._wait = options.wait;                                                                                           // 400
  self.noRetry = options.noRetry;                                                                                      // 401
  self._methodResult = null;                                                                                           // 402
  self._dataVisible = false; // Register with the connection.                                                          // 403
                                                                                                                       //
  self._connection._methodInvokers[self.methodId] = self;                                                              // 406
};                                                                                                                     // 407
                                                                                                                       //
_.extend(MethodInvoker.prototype, {                                                                                    // 408
  // Sends the method message to the server. May be called additional times if                                         // 409
  // we lose the connection and reconnect before receiving a result.                                                   // 410
  sendMessage: function () {                                                                                           // 411
    var self = this; // This function is called before sending a method (including resending on                        // 412
    // reconnect). We should only (re)send methods where we don't already have a                                       // 414
    // result!                                                                                                         // 415
                                                                                                                       //
    if (self.gotResult()) throw new Error("sendingMethod is called on method with result"); // If we're re-sending it, it doesn't matter if data was written the first
    // time.                                                                                                           // 421
                                                                                                                       //
    self._dataVisible = false;                                                                                         // 422
    self.sentMessage = true; // If this is a wait method, make all data messages be buffered until it is               // 423
    // done.                                                                                                           // 426
                                                                                                                       //
    if (self._wait) self._connection._methodsBlockingQuiescence[self.methodId] = true; // Actually send the message.   // 427
                                                                                                                       //
    self._connection._send(self._message);                                                                             // 431
  },                                                                                                                   // 432
  // Invoke the callback, if we have both a result and know that all data has                                          // 433
  // been written to the local cache.                                                                                  // 434
  _maybeInvokeCallback: function () {                                                                                  // 435
    var self = this;                                                                                                   // 436
                                                                                                                       //
    if (self._methodResult && self._dataVisible) {                                                                     // 437
      // Call the callback. (This won't throw: the callback was wrapped with                                           // 438
      // bindEnvironment.)                                                                                             // 439
      self._callback(self._methodResult[0], self._methodResult[1]); // Forget about this method.                       // 440
                                                                                                                       //
                                                                                                                       //
      delete self._connection._methodInvokers[self.methodId]; // Let the connection know that this method is finished, so it can try to
      // move on to the next block of methods.                                                                         // 446
                                                                                                                       //
      self._connection._outstandingMethodFinished();                                                                   // 447
    }                                                                                                                  // 448
  },                                                                                                                   // 449
  // Call with the result of the method from the server. Only may be called                                            // 450
  // once; once it is called, you should not call sendMessage again.                                                   // 451
  // If the user provided an onResultReceived callback, call it immediately.                                           // 452
  // Then invoke the main callback if data is also visible.                                                            // 453
  receiveResult: function (err, result) {                                                                              // 454
    var self = this;                                                                                                   // 455
    if (self.gotResult()) throw new Error("Methods should only receive results once");                                 // 456
    self._methodResult = [err, result];                                                                                // 458
                                                                                                                       //
    self._onResultReceived(err, result);                                                                               // 459
                                                                                                                       //
    self._maybeInvokeCallback();                                                                                       // 460
  },                                                                                                                   // 461
  // Call this when all data written by the method is visible. This means that                                         // 462
  // the method has returns its "data is done" message *AND* all server                                                // 463
  // documents that are buffered at that time have been written to the local                                           // 464
  // cache. Invokes the main callback if the result has been received.                                                 // 465
  dataVisible: function () {                                                                                           // 466
    var self = this;                                                                                                   // 467
    self._dataVisible = true;                                                                                          // 468
                                                                                                                       //
    self._maybeInvokeCallback();                                                                                       // 469
  },                                                                                                                   // 470
  // True if receiveResult has been called.                                                                            // 471
  gotResult: function () {                                                                                             // 472
    var self = this;                                                                                                   // 473
    return !!self._methodResult;                                                                                       // 474
  }                                                                                                                    // 475
});                                                                                                                    // 408
                                                                                                                       //
_.extend(Connection.prototype, {                                                                                       // 478
  // 'name' is the name of the data on the wire that should go in the                                                  // 479
  // store. 'wrappedStore' should be an object with methods beginUpdate, update,                                       // 480
  // endUpdate, saveOriginals, retrieveOriginals. see Collection for an example.                                       // 481
  registerStore: function (name, wrappedStore) {                                                                       // 482
    var self = this;                                                                                                   // 483
    if (name in self._stores) return false; // Wrap the input object in an object which makes any store method not     // 485
    // implemented by 'store' into a no-op.                                                                            // 489
                                                                                                                       //
    var store = {};                                                                                                    // 490
                                                                                                                       //
    _.each(['update', 'beginUpdate', 'endUpdate', 'saveOriginals', 'retrieveOriginals', 'getDoc', '_getCollection'], function (method) {
      store[method] = function () {                                                                                    // 494
        return wrappedStore[method] ? wrappedStore[method].apply(wrappedStore, arguments) : undefined;                 // 495
      };                                                                                                               // 498
    });                                                                                                                // 499
                                                                                                                       //
    self._stores[name] = store;                                                                                        // 501
    var queued = self._updatesForUnknownStores[name];                                                                  // 503
                                                                                                                       //
    if (queued) {                                                                                                      // 504
      store.beginUpdate(queued.length, false);                                                                         // 505
                                                                                                                       //
      _.each(queued, function (msg) {                                                                                  // 506
        store.update(msg);                                                                                             // 507
      });                                                                                                              // 508
                                                                                                                       //
      store.endUpdate();                                                                                               // 509
      delete self._updatesForUnknownStores[name];                                                                      // 510
    }                                                                                                                  // 511
                                                                                                                       //
    return true;                                                                                                       // 513
  },                                                                                                                   // 514
  /**                                                                                                                  // 516
   * @memberOf Meteor                                                                                                  //
   * @importFromPackage meteor                                                                                         //
   * @summary Subscribe to a record set.  Returns a handle that provides                                               //
   * `stop()` and `ready()` methods.                                                                                   //
   * @locus Client                                                                                                     //
   * @param {String} name Name of the subscription.  Matches the name of the                                           //
   * server's `publish()` call.                                                                                        //
   * @param {EJSONable} [arg1,arg2...] Optional arguments passed to publisher                                          //
   * function on server.                                                                                               //
   * @param {Function|Object} [callbacks] Optional. May include `onStop`                                               //
   * and `onReady` callbacks. If there is an error, it is passed as an                                                 //
   * argument to `onStop`. If a function is passed instead of an object, it                                            //
   * is interpreted as an `onReady` callback.                                                                          //
   */subscribe: function (name /* .. [arguments] .. (callback|callbacks) */) {                                         //
    var self = this;                                                                                                   // 532
    var params = Array.prototype.slice.call(arguments, 1);                                                             // 534
    var callbacks = {};                                                                                                // 535
                                                                                                                       //
    if (params.length) {                                                                                               // 536
      var lastParam = params[params.length - 1];                                                                       // 537
                                                                                                                       //
      if (_.isFunction(lastParam)) {                                                                                   // 538
        callbacks.onReady = params.pop();                                                                              // 539
      } else if (lastParam && // XXX COMPAT WITH 1.0.3.1 onError used to exist, but now we use                         // 540
      // onStop with an error callback instead.                                                                        // 542
      _.any([lastParam.onReady, lastParam.onError, lastParam.onStop], _.isFunction)) {                                 // 543
        callbacks = params.pop();                                                                                      // 545
      }                                                                                                                // 546
    } // Is there an existing sub with the same name and param, run in an                                              // 547
    // invalidated Computation? This will happen if we are rerunning an                                                // 550
    // existing computation.                                                                                           // 551
    //                                                                                                                 // 552
    // For example, consider a rerun of:                                                                               // 553
    //                                                                                                                 // 554
    //     Tracker.autorun(function () {                                                                               // 555
    //       Meteor.subscribe("foo", Session.get("foo"));                                                              // 556
    //       Meteor.subscribe("bar", Session.get("bar"));                                                              // 557
    //     });                                                                                                         // 558
    //                                                                                                                 // 559
    // If "foo" has changed but "bar" has not, we will match the "bar"                                                 // 560
    // subcribe to an existing inactive subscription in order to not                                                   // 561
    // unsub and resub the subscription unnecessarily.                                                                 // 562
    //                                                                                                                 // 563
    // We only look for one such sub; if there are N apparently-identical subs                                         // 564
    // being invalidated, we will require N matching subscribe calls to keep                                           // 565
    // them all active.                                                                                                // 566
                                                                                                                       //
                                                                                                                       //
    var existing = _.find(self._subscriptions, function (sub) {                                                        // 567
      return sub.inactive && sub.name === name && EJSON.equals(sub.params, params);                                    // 568
    });                                                                                                                // 570
                                                                                                                       //
    var id;                                                                                                            // 572
                                                                                                                       //
    if (existing) {                                                                                                    // 573
      id = existing.id;                                                                                                // 574
      existing.inactive = false; // reactivate                                                                         // 575
                                                                                                                       //
      if (callbacks.onReady) {                                                                                         // 577
        // If the sub is not already ready, replace any ready callback with the                                        // 578
        // one provided now. (It's not really clear what users would expect for                                        // 579
        // an onReady callback inside an autorun; the semantics we provide is                                          // 580
        // that at the time the sub first becomes ready, we call the last                                              // 581
        // onReady callback provided, if any.)                                                                         // 582
        // If the sub is already ready, run the ready callback right away.                                             // 583
        // It seems that users would expect an onReady callback inside an                                              // 584
        // autorun to trigger once the the sub first becomes ready and also                                            // 585
        // when re-subs happens.                                                                                       // 586
        if (existing.ready) {                                                                                          // 587
          callbacks.onReady();                                                                                         // 588
        } else {                                                                                                       // 589
          existing.readyCallback = callbacks.onReady;                                                                  // 590
        }                                                                                                              // 591
      } // XXX COMPAT WITH 1.0.3.1 we used to have onError but now we call                                             // 592
      // onStop with an optional error argument                                                                        // 595
                                                                                                                       //
                                                                                                                       //
      if (callbacks.onError) {                                                                                         // 596
        // Replace existing callback if any, so that errors aren't                                                     // 597
        // double-reported.                                                                                            // 598
        existing.errorCallback = callbacks.onError;                                                                    // 599
      }                                                                                                                // 600
                                                                                                                       //
      if (callbacks.onStop) {                                                                                          // 602
        existing.stopCallback = callbacks.onStop;                                                                      // 603
      }                                                                                                                // 604
    } else {                                                                                                           // 605
      // New sub! Generate an id, save it locally, and send message.                                                   // 606
      id = Random.id();                                                                                                // 607
      self._subscriptions[id] = {                                                                                      // 608
        id: id,                                                                                                        // 609
        name: name,                                                                                                    // 610
        params: EJSON.clone(params),                                                                                   // 611
        inactive: false,                                                                                               // 612
        ready: false,                                                                                                  // 613
        readyDeps: new Tracker.Dependency(),                                                                           // 614
        readyCallback: callbacks.onReady,                                                                              // 615
        // XXX COMPAT WITH 1.0.3.1 #errorCallback                                                                      // 616
        errorCallback: callbacks.onError,                                                                              // 617
        stopCallback: callbacks.onStop,                                                                                // 618
        connection: self,                                                                                              // 619
        remove: function () {                                                                                          // 620
          delete this.connection._subscriptions[this.id];                                                              // 621
          this.ready && this.readyDeps.changed();                                                                      // 622
        },                                                                                                             // 623
        stop: function () {                                                                                            // 624
          this.connection._send({                                                                                      // 625
            msg: 'unsub',                                                                                              // 625
            id: id                                                                                                     // 625
          });                                                                                                          // 625
                                                                                                                       //
          this.remove();                                                                                               // 626
                                                                                                                       //
          if (callbacks.onStop) {                                                                                      // 628
            callbacks.onStop();                                                                                        // 629
          }                                                                                                            // 630
        }                                                                                                              // 631
      };                                                                                                               // 608
                                                                                                                       //
      self._send({                                                                                                     // 633
        msg: 'sub',                                                                                                    // 633
        id: id,                                                                                                        // 633
        name: name,                                                                                                    // 633
        params: params                                                                                                 // 633
      });                                                                                                              // 633
    } // return a handle to the application.                                                                           // 634
                                                                                                                       //
                                                                                                                       //
    var handle = {                                                                                                     // 637
      stop: function () {                                                                                              // 638
        if (!_.has(self._subscriptions, id)) return;                                                                   // 639
                                                                                                                       //
        self._subscriptions[id].stop();                                                                                // 642
      },                                                                                                               // 643
      ready: function () {                                                                                             // 644
        // return false if we've unsubscribed.                                                                         // 645
        if (!_.has(self._subscriptions, id)) return false;                                                             // 646
        var record = self._subscriptions[id];                                                                          // 648
        record.readyDeps.depend();                                                                                     // 649
        return record.ready;                                                                                           // 650
      },                                                                                                               // 651
      subscriptionId: id                                                                                               // 652
    };                                                                                                                 // 637
                                                                                                                       //
    if (Tracker.active) {                                                                                              // 655
      // We're in a reactive computation, so we'd like to unsubscribe when the                                         // 656
      // computation is invalidated... but not if the rerun just re-subscribes                                         // 657
      // to the same subscription!  When a rerun happens, we use onInvalidate                                          // 658
      // as a change to mark the subscription "inactive" so that it can                                                // 659
      // be reused from the rerun.  If it isn't reused, it's killed from                                               // 660
      // an afterFlush.                                                                                                // 661
      Tracker.onInvalidate(function (c) {                                                                              // 662
        if (_.has(self._subscriptions, id)) self._subscriptions[id].inactive = true;                                   // 663
        Tracker.afterFlush(function () {                                                                               // 666
          if (_.has(self._subscriptions, id) && self._subscriptions[id].inactive) handle.stop();                       // 667
        });                                                                                                            // 670
      });                                                                                                              // 671
    }                                                                                                                  // 672
                                                                                                                       //
    return handle;                                                                                                     // 674
  },                                                                                                                   // 675
  // options:                                                                                                          // 677
  // - onLateError {Function(error)} called if an error was received after the ready event.                            // 678
  //     (errors received before ready cause an error to be thrown)                                                    // 679
  _subscribeAndWait: function (name, args, options) {                                                                  // 680
    var self = this;                                                                                                   // 681
    var f = new Future();                                                                                              // 682
    var ready = false;                                                                                                 // 683
    var handle;                                                                                                        // 684
    args = args || [];                                                                                                 // 685
    args.push({                                                                                                        // 686
      onReady: function () {                                                                                           // 687
        ready = true;                                                                                                  // 688
        f['return']();                                                                                                 // 689
      },                                                                                                               // 690
      onError: function (e) {                                                                                          // 691
        if (!ready) f['throw'](e);else options && options.onLateError && options.onLateError(e);                       // 692
      }                                                                                                                // 696
    });                                                                                                                // 686
    handle = self.subscribe.apply(self, [name].concat(args));                                                          // 699
    f.wait();                                                                                                          // 700
    return handle;                                                                                                     // 701
  },                                                                                                                   // 702
  methods: function (methods) {                                                                                        // 704
    var self = this;                                                                                                   // 705
                                                                                                                       //
    _.each(methods, function (func, name) {                                                                            // 706
      if (typeof func !== 'function') throw new Error("Method '" + name + "' must be a function");                     // 707
      if (self._methodHandlers[name]) throw new Error("A method named '" + name + "' is already defined");             // 709
      self._methodHandlers[name] = func;                                                                               // 711
    });                                                                                                                // 712
  },                                                                                                                   // 713
  /**                                                                                                                  // 715
   * @memberOf Meteor                                                                                                  //
   * @importFromPackage meteor                                                                                         //
   * @summary Invokes a method passing any number of arguments.                                                        //
   * @locus Anywhere                                                                                                   //
   * @param {String} name Name of method to invoke                                                                     //
   * @param {EJSONable} [arg1,arg2...] Optional method arguments                                                       //
   * @param {Function} [asyncCallback] Optional callback, which is called asynchronously with the error or result after the method is complete. If not provided, the method runs synchronously if possible (see below).
   */call: function (name /* .. [arguments] .. callback */) {                                                          //
    // if it's a function, the last argument is the result callback,                                                   // 725
    // not a parameter to the remote method.                                                                           // 726
    var args = Array.prototype.slice.call(arguments, 1);                                                               // 727
    if (args.length && typeof args[args.length - 1] === "function") var callback = args.pop();                         // 728
    return this.apply(name, args, callback);                                                                           // 730
  },                                                                                                                   // 731
  // @param options {Optional Object}                                                                                  // 733
  //   wait: Boolean - Should we wait to call this until all current methods                                           // 734
  //                   are fully finished, and block subsequent method calls                                           // 735
  //                   until this method is fully finished?                                                            // 736
  //                   (does not affect methods called from within this method)                                        // 737
  //   onResultReceived: Function - a callback to call as soon as the method                                           // 738
  //                                result is received. the data written by                                            // 739
  //                                the method may not yet be in the cache!                                            // 740
  //   returnStubValue: Boolean - If true then in cases where we would have                                            // 741
  //                              otherwise discarded the stub's return value                                          // 742
  //                              and returned undefined, instead we go ahead                                          // 743
  //                              and return it.  Specifically, this is any                                            // 744
  //                              time other than when (a) we are already                                              // 745
  //                              inside a stub or (b) we are in Node and no                                           // 746
  //                              callback was provided.  Currently we require                                         // 747
  //                              this flag to be explicitly passed to reduce                                          // 748
  //                              the likelihood that stub return values will                                          // 749
  //                              be confused with server return values; we                                            // 750
  //                              may improve this in future.                                                          // 751
  // @param callback {Optional Function}                                                                               // 752
  /**                                                                                                                  // 754
   * @memberOf Meteor                                                                                                  //
   * @importFromPackage meteor                                                                                         //
   * @summary Invoke a method passing an array of arguments.                                                           //
   * @locus Anywhere                                                                                                   //
   * @param {String} name Name of method to invoke                                                                     //
   * @param {EJSONable[]} args Method arguments                                                                        //
   * @param {Object} [options]                                                                                         //
   * @param {Boolean} options.wait (Client only) If true, don't send this method until all previous method calls have completed, and don't send any subsequent method calls until this one is completed.
   * @param {Function} options.onResultReceived (Client only) This callback is invoked with the error or result of the method (just like `asyncCallback`) as soon as the error or result is available. The local cache may not yet reflect the writes performed by the method.
   * @param {Boolean} options.noRetry (Client only) if true, don't send this method again on reload, simply call the callback an error with the error code 'invocation-failed'.
   * @param {Boolean} options.throwStubExceptions (Client only) If true, exceptions thrown by method stubs will be thrown instead of logged, and the method will not be invoked on the server.
   * @param {Function} [asyncCallback] Optional callback; same semantics as in [`Meteor.call`](#meteor_call).          //
   */apply: function (name, args, options, callback) {                                                                 //
    var self = this; // We were passed 3 arguments. They may be either (name, args, options)                           // 769
    // or (name, args, callback)                                                                                       // 772
                                                                                                                       //
    if (!callback && typeof options === 'function') {                                                                  // 773
      callback = options;                                                                                              // 774
      options = {};                                                                                                    // 775
    }                                                                                                                  // 776
                                                                                                                       //
    options = options || {};                                                                                           // 777
                                                                                                                       //
    if (callback) {                                                                                                    // 779
      // XXX would it be better form to do the binding in stream.on,                                                   // 780
      // or caller, instead of here?                                                                                   // 781
      // XXX improve error message (and how we report it)                                                              // 782
      callback = Meteor.bindEnvironment(callback, "delivering result of invoking '" + name + "'");                     // 783
    } // Keep our args safe from mutation (eg if we don't send the message for a                                       // 787
    // while because of a wait method).                                                                                // 790
                                                                                                                       //
                                                                                                                       //
    args = EJSON.clone(args); // Lazily allocate method ID once we know that it'll be needed.                          // 791
                                                                                                                       //
    var methodId = function () {                                                                                       // 794
      var id;                                                                                                          // 795
      return function () {                                                                                             // 796
        if (id === undefined) id = '' + self._nextMethodId++;                                                          // 797
        return id;                                                                                                     // 799
      };                                                                                                               // 800
    }();                                                                                                               // 801
                                                                                                                       //
    var enclosing = DDP._CurrentMethodInvocation.get();                                                                // 803
                                                                                                                       //
    var alreadyInSimulation = enclosing && enclosing.isSimulation; // Lazily generate a randomSeed, only if it is requested by the stub.
    // The random streams only have utility if they're used on both the client                                         // 807
    // and the server; if the client doesn't generate any 'random' values                                              // 808
    // then we don't expect the server to generate any either.                                                         // 809
    // Less commonly, the server may perform different actions from the client,                                        // 810
    // and may in fact generate values where the client did not, but we don't                                          // 811
    // have any client-side values to match, so even here we may as well just                                          // 812
    // use a random seed on the server.  In that case, we don't pass the                                               // 813
    // randomSeed to save bandwidth, and we don't even generate it to save a                                           // 814
    // bit of CPU and to avoid consuming entropy.                                                                      // 815
                                                                                                                       //
    var randomSeed = null;                                                                                             // 816
                                                                                                                       //
    var randomSeedGenerator = function () {                                                                            // 817
      if (randomSeed === null) {                                                                                       // 818
        randomSeed = DDPCommon.makeRpcSeed(enclosing, name);                                                           // 819
      }                                                                                                                // 820
                                                                                                                       //
      return randomSeed;                                                                                               // 821
    }; // Run the stub, if we have one. The stub is supposed to make some                                              // 822
    // temporary writes to the database to give the user a smooth experience                                           // 825
    // until the actual result of executing the method comes back from the                                             // 826
    // server (whereupon the temporary writes to the database will be reversed                                         // 827
    // during the beginUpdate/endUpdate process.)                                                                      // 828
    //                                                                                                                 // 829
    // Normally, we ignore the return value of the stub (even if it is an                                              // 830
    // exception), in favor of the real return value from the server. The                                              // 831
    // exception is if the *caller* is a stub. In that case, we're not going                                           // 832
    // to do a RPC, so we use the return value of the stub as our return                                               // 833
    // value.                                                                                                          // 834
                                                                                                                       //
                                                                                                                       //
    var stub = self._methodHandlers[name];                                                                             // 836
                                                                                                                       //
    if (stub) {                                                                                                        // 837
      var setUserId = function (userId) {                                                                              // 838
        self.setUserId(userId);                                                                                        // 839
      };                                                                                                               // 840
                                                                                                                       //
      var invocation = new DDPCommon.MethodInvocation({                                                                // 842
        isSimulation: true,                                                                                            // 843
        userId: self.userId(),                                                                                         // 844
        setUserId: setUserId,                                                                                          // 845
        randomSeed: function () {                                                                                      // 846
          return randomSeedGenerator();                                                                                // 846
        }                                                                                                              // 846
      });                                                                                                              // 842
      if (!alreadyInSimulation) self._saveOriginals();                                                                 // 849
                                                                                                                       //
      try {                                                                                                            // 852
        // Note that unlike in the corresponding server code, we never audit                                           // 853
        // that stubs check() their arguments.                                                                         // 854
        var stubReturnValue = DDP._CurrentMethodInvocation.withValue(invocation, function () {                         // 855
          if (Meteor.isServer) {                                                                                       // 856
            // Because saveOriginals and retrieveOriginals aren't reentrant,                                           // 857
            // don't allow stubs to yield.                                                                             // 858
            return Meteor._noYieldsAllowed(function () {                                                               // 859
              // re-clone, so that the stub can't affect our caller's values                                           // 860
              return stub.apply(invocation, EJSON.clone(args));                                                        // 861
            });                                                                                                        // 862
          } else {                                                                                                     // 863
            return stub.apply(invocation, EJSON.clone(args));                                                          // 864
          }                                                                                                            // 865
        });                                                                                                            // 866
      } catch (e) {                                                                                                    // 867
        var exception = e;                                                                                             // 869
      }                                                                                                                // 870
                                                                                                                       //
      if (!alreadyInSimulation) self._retrieveAndStoreOriginals(methodId());                                           // 872
    } // If we're in a simulation, stop and return the result we have,                                                 // 874
    // rather than going on to do an RPC. If there was no stub,                                                        // 877
    // we'll end up returning undefined.                                                                               // 878
                                                                                                                       //
                                                                                                                       //
    if (alreadyInSimulation) {                                                                                         // 879
      if (callback) {                                                                                                  // 880
        callback(exception, stubReturnValue);                                                                          // 881
        return undefined;                                                                                              // 882
      }                                                                                                                // 883
                                                                                                                       //
      if (exception) throw exception;                                                                                  // 884
      return stubReturnValue;                                                                                          // 886
    } // If an exception occurred in a stub, and we're ignoring it                                                     // 887
    // because we're doing an RPC and want to use what the server                                                      // 890
    // returns instead, log it so the developer knows                                                                  // 891
    // (unless they explicitly ask to see the error).                                                                  // 892
    //                                                                                                                 // 893
    // Tests can set the 'expected' flag on an exception so it won't                                                   // 894
    // go to log.                                                                                                      // 895
                                                                                                                       //
                                                                                                                       //
    if (exception) {                                                                                                   // 896
      if (options.throwStubExceptions) {                                                                               // 897
        throw exception;                                                                                               // 898
      } else if (!exception.expected) {                                                                                // 899
        Meteor._debug("Exception while simulating the effect of invoking '" + name + "'", exception, exception.stack);
      }                                                                                                                // 902
    } // At this point we're definitely doing an RPC, and we're going to                                               // 903
    // return the value of the RPC to the caller.                                                                      // 907
    // If the caller didn't give a callback, decide what to do.                                                        // 909
                                                                                                                       //
                                                                                                                       //
    if (!callback) {                                                                                                   // 910
      if (Meteor.isClient) {                                                                                           // 911
        // On the client, we don't have fibers, so we can't block. The                                                 // 912
        // only thing we can do is to return undefined and discard the                                                 // 913
        // result of the RPC. If an error occurred then print the error                                                // 914
        // to the console.                                                                                             // 915
        callback = function (err) {                                                                                    // 916
          err && Meteor._debug("Error invoking Method '" + name + "':", err.message);                                  // 917
        };                                                                                                             // 919
      } else {                                                                                                         // 920
        // On the server, make the function synchronous. Throw on                                                      // 921
        // errors, return on success.                                                                                  // 922
        var future = new Future();                                                                                     // 923
        callback = future.resolver();                                                                                  // 924
      }                                                                                                                // 925
    } // Send the RPC. Note that on the client, it is important that the                                               // 926
    // stub have finished before we send the RPC, so that we know we have                                              // 928
    // a complete list of which local documents the stub wrote.                                                        // 929
                                                                                                                       //
                                                                                                                       //
    var message = {                                                                                                    // 930
      msg: 'method',                                                                                                   // 931
      method: name,                                                                                                    // 932
      params: args,                                                                                                    // 933
      id: methodId()                                                                                                   // 934
    }; // Send the randomSeed only if we used it                                                                       // 930
                                                                                                                       //
    if (randomSeed !== null) {                                                                                         // 938
      message.randomSeed = randomSeed;                                                                                 // 939
    }                                                                                                                  // 940
                                                                                                                       //
    var methodInvoker = new MethodInvoker({                                                                            // 942
      methodId: methodId(),                                                                                            // 943
      callback: callback,                                                                                              // 944
      connection: self,                                                                                                // 945
      onResultReceived: options.onResultReceived,                                                                      // 946
      wait: !!options.wait,                                                                                            // 947
      message: message,                                                                                                // 948
      noRetry: !!options.noRetry                                                                                       // 949
    });                                                                                                                // 942
                                                                                                                       //
    if (options.wait) {                                                                                                // 952
      // It's a wait method! Wait methods go in their own block.                                                       // 953
      self._outstandingMethodBlocks.push({                                                                             // 954
        wait: true,                                                                                                    // 955
        methods: [methodInvoker]                                                                                       // 955
      });                                                                                                              // 955
    } else {                                                                                                           // 956
      // Not a wait method. Start a new block if the previous block was a wait                                         // 957
      // block, and add it to the last block of methods.                                                               // 958
      if (_.isEmpty(self._outstandingMethodBlocks) || _.last(self._outstandingMethodBlocks).wait) self._outstandingMethodBlocks.push({
        wait: false,                                                                                                   // 961
        methods: []                                                                                                    // 961
      });                                                                                                              // 961
                                                                                                                       //
      _.last(self._outstandingMethodBlocks).methods.push(methodInvoker);                                               // 962
    } // If we added it to the first block, send it out now.                                                           // 963
                                                                                                                       //
                                                                                                                       //
    if (self._outstandingMethodBlocks.length === 1) methodInvoker.sendMessage(); // If we're using the default callback on the server,
    // block waiting for the result.                                                                                   // 970
                                                                                                                       //
    if (future) {                                                                                                      // 971
      return future.wait();                                                                                            // 972
    }                                                                                                                  // 973
                                                                                                                       //
    return options.returnStubValue ? stubReturnValue : undefined;                                                      // 974
  },                                                                                                                   // 975
  // Before calling a method stub, prepare all stores to track changes and allow                                       // 977
  // _retrieveAndStoreOriginals to get the original versions of changed                                                // 978
  // documents.                                                                                                        // 979
  _saveOriginals: function () {                                                                                        // 980
    var self = this;                                                                                                   // 981
    if (!self._waitingForQuiescence()) self._flushBufferedWrites();                                                    // 982
                                                                                                                       //
    _.each(self._stores, function (s) {                                                                                // 984
      s.saveOriginals();                                                                                               // 985
    });                                                                                                                // 986
  },                                                                                                                   // 987
  // Retrieves the original versions of all documents modified by the stub for                                         // 988
  // method 'methodId' from all stores and saves them to _serverDocuments (keyed                                       // 989
  // by document) and _documentsWrittenByStub (keyed by method ID).                                                    // 990
  _retrieveAndStoreOriginals: function (methodId) {                                                                    // 991
    var self = this;                                                                                                   // 992
    if (self._documentsWrittenByStub[methodId]) throw new Error("Duplicate methodId in _retrieveAndStoreOriginals");   // 993
    var docsWritten = [];                                                                                              // 996
                                                                                                                       //
    _.each(self._stores, function (s, collection) {                                                                    // 997
      var originals = s.retrieveOriginals(); // not all stores define retrieveOriginals                                // 998
                                                                                                                       //
      if (!originals) return;                                                                                          // 1000
      originals.forEach(function (doc, id) {                                                                           // 1002
        docsWritten.push({                                                                                             // 1003
          collection: collection,                                                                                      // 1003
          id: id                                                                                                       // 1003
        });                                                                                                            // 1003
        if (!_.has(self._serverDocuments, collection)) self._serverDocuments[collection] = new MongoIDMap();           // 1004
                                                                                                                       //
        var serverDoc = self._serverDocuments[collection].setDefault(id, {});                                          // 1006
                                                                                                                       //
        if (serverDoc.writtenByStubs) {                                                                                // 1007
          // We're not the first stub to write this doc. Just add our method ID                                        // 1008
          // to the record.                                                                                            // 1009
          serverDoc.writtenByStubs[methodId] = true;                                                                   // 1010
        } else {                                                                                                       // 1011
          // First stub! Save the original value and our method ID.                                                    // 1012
          serverDoc.document = doc;                                                                                    // 1013
          serverDoc.flushCallbacks = [];                                                                               // 1014
          serverDoc.writtenByStubs = {};                                                                               // 1015
          serverDoc.writtenByStubs[methodId] = true;                                                                   // 1016
        }                                                                                                              // 1017
      });                                                                                                              // 1018
    });                                                                                                                // 1019
                                                                                                                       //
    if (!_.isEmpty(docsWritten)) {                                                                                     // 1020
      self._documentsWrittenByStub[methodId] = docsWritten;                                                            // 1021
    }                                                                                                                  // 1022
  },                                                                                                                   // 1023
  // This is very much a private function we use to make the tests                                                     // 1025
  // take up fewer server resources after they complete.                                                               // 1026
  _unsubscribeAll: function () {                                                                                       // 1027
    var self = this;                                                                                                   // 1028
                                                                                                                       //
    _.each(_.clone(self._subscriptions), function (sub, id) {                                                          // 1029
      // Avoid killing the autoupdate subscription so that developers                                                  // 1030
      // still get hot code pushes when writing tests.                                                                 // 1031
      //                                                                                                               // 1032
      // XXX it's a hack to encode knowledge about autoupdate here,                                                    // 1033
      // but it doesn't seem worth it yet to have a special API for                                                    // 1034
      // subscriptions to preserve after unit tests.                                                                   // 1035
      if (sub.name !== 'meteor_autoupdate_clientVersions') {                                                           // 1036
        self._subscriptions[id].stop();                                                                                // 1037
      }                                                                                                                // 1038
    });                                                                                                                // 1039
  },                                                                                                                   // 1040
  // Sends the DDP stringification of the given message object                                                         // 1042
  _send: function (obj) {                                                                                              // 1043
    var self = this;                                                                                                   // 1044
                                                                                                                       //
    self._stream.send(DDPCommon.stringifyDDP(obj));                                                                    // 1045
  },                                                                                                                   // 1046
  // We detected via DDP-level heartbeats that we've lost the                                                          // 1048
  // connection.  Unlike `disconnect` or `close`, a lost connection                                                    // 1049
  // will be automatically retried.                                                                                    // 1050
  _lostConnection: function (error) {                                                                                  // 1051
    var self = this;                                                                                                   // 1052
                                                                                                                       //
    self._stream._lostConnection(error);                                                                               // 1053
  },                                                                                                                   // 1054
  /**                                                                                                                  // 1056
   * @summary Get the current connection status. A reactive data source.                                               //
   * @locus Client                                                                                                     //
   * @memberOf Meteor                                                                                                  //
   * @importFromPackage meteor                                                                                         //
   */status: function () /*passthrough args*/{                                                                         //
    var self = this;                                                                                                   // 1063
    return self._stream.status.apply(self._stream, arguments);                                                         // 1064
  },                                                                                                                   // 1065
  /**                                                                                                                  // 1067
   * @summary Force an immediate reconnection attempt if the client is not connected to the server.                    //
   This method does nothing if the client is already connected.                                                        //
   * @locus Client                                                                                                     //
   * @memberOf Meteor                                                                                                  //
   * @importFromPackage meteor                                                                                         //
   */reconnect: function () /*passthrough args*/{                                                                      //
    var self = this;                                                                                                   // 1076
    return self._stream.reconnect.apply(self._stream, arguments);                                                      // 1077
  },                                                                                                                   // 1078
  /**                                                                                                                  // 1080
   * @summary Disconnect the client from the server.                                                                   //
   * @locus Client                                                                                                     //
   * @memberOf Meteor                                                                                                  //
   * @importFromPackage meteor                                                                                         //
   */disconnect: function () /*passthrough args*/{                                                                     //
    var self = this;                                                                                                   // 1087
    return self._stream.disconnect.apply(self._stream, arguments);                                                     // 1088
  },                                                                                                                   // 1089
  close: function () {                                                                                                 // 1091
    var self = this;                                                                                                   // 1092
    return self._stream.disconnect({                                                                                   // 1093
      _permanent: true                                                                                                 // 1093
    });                                                                                                                // 1093
  },                                                                                                                   // 1094
  ///                                                                                                                  // 1096
  /// Reactive user system                                                                                             // 1097
  ///                                                                                                                  // 1098
  userId: function () {                                                                                                // 1099
    var self = this;                                                                                                   // 1100
    if (self._userIdDeps) self._userIdDeps.depend();                                                                   // 1101
    return self._userId;                                                                                               // 1103
  },                                                                                                                   // 1104
  setUserId: function (userId) {                                                                                       // 1106
    var self = this; // Avoid invalidating dependents if setUserId is called with current value.                       // 1107
                                                                                                                       //
    if (self._userId === userId) return;                                                                               // 1109
    self._userId = userId;                                                                                             // 1111
    if (self._userIdDeps) self._userIdDeps.changed();                                                                  // 1112
  },                                                                                                                   // 1114
  // Returns true if we are in a state after reconnect of waiting for subs to be                                       // 1116
  // revived or early methods to finish their data, or we are waiting for a                                            // 1117
  // "wait" method to finish.                                                                                          // 1118
  _waitingForQuiescence: function () {                                                                                 // 1119
    var self = this;                                                                                                   // 1120
    return !_.isEmpty(self._subsBeingRevived) || !_.isEmpty(self._methodsBlockingQuiescence);                          // 1121
  },                                                                                                                   // 1123
  // Returns true if any method whose message has been sent to the server has                                          // 1125
  // not yet invoked its user callback.                                                                                // 1126
  _anyMethodsAreOutstanding: function () {                                                                             // 1127
    var self = this;                                                                                                   // 1128
    return _.any(_.pluck(self._methodInvokers, 'sentMessage'));                                                        // 1129
  },                                                                                                                   // 1130
  _livedata_connected: function (msg) {                                                                                // 1132
    var self = this;                                                                                                   // 1133
                                                                                                                       //
    if (self._version !== 'pre1' && self._heartbeatInterval !== 0) {                                                   // 1135
      self._heartbeat = new DDPCommon.Heartbeat({                                                                      // 1136
        heartbeatInterval: self._heartbeatInterval,                                                                    // 1137
        heartbeatTimeout: self._heartbeatTimeout,                                                                      // 1138
        onTimeout: function () {                                                                                       // 1139
          self._lostConnection(new DDP.ConnectionError("DDP heartbeat timed out"));                                    // 1140
        },                                                                                                             // 1142
        sendPing: function () {                                                                                        // 1143
          self._send({                                                                                                 // 1144
            msg: 'ping'                                                                                                // 1144
          });                                                                                                          // 1144
        }                                                                                                              // 1145
      });                                                                                                              // 1136
                                                                                                                       //
      self._heartbeat.start();                                                                                         // 1147
    } // If this is a reconnect, we'll have to reset all stores.                                                       // 1148
                                                                                                                       //
                                                                                                                       //
    if (self._lastSessionId) self._resetStores = true;                                                                 // 1151
                                                                                                                       //
    if (typeof msg.session === "string") {                                                                             // 1154
      var reconnectedToPreviousSession = self._lastSessionId === msg.session;                                          // 1155
      self._lastSessionId = msg.session;                                                                               // 1156
    }                                                                                                                  // 1157
                                                                                                                       //
    if (reconnectedToPreviousSession) {                                                                                // 1159
      // Successful reconnection -- pick up where we left off.  Note that right                                        // 1160
      // now, this never happens: the server never connects us to a previous                                           // 1161
      // session, because DDP doesn't provide enough data for the server to know                                       // 1162
      // what messages the client has processed. We need to improve DDP to make                                        // 1163
      // this possible, at which point we'll probably need more code here.                                             // 1164
      return;                                                                                                          // 1165
    } // Server doesn't have our data any more. Re-sync a new session.                                                 // 1166
    // Forget about messages we were buffering for unknown collections. They'll                                        // 1170
    // be resent if still relevant.                                                                                    // 1171
                                                                                                                       //
                                                                                                                       //
    self._updatesForUnknownStores = {};                                                                                // 1172
                                                                                                                       //
    if (self._resetStores) {                                                                                           // 1174
      // Forget about the effects of stubs. We'll be resetting all collections                                         // 1175
      // anyway.                                                                                                       // 1176
      self._documentsWrittenByStub = {};                                                                               // 1177
      self._serverDocuments = {};                                                                                      // 1178
    } // Clear _afterUpdateCallbacks.                                                                                  // 1179
                                                                                                                       //
                                                                                                                       //
    self._afterUpdateCallbacks = []; // Mark all named subscriptions which are ready (ie, we already called the        // 1182
    // ready callback) as needing to be revived.                                                                       // 1185
    // XXX We should also block reconnect quiescence until unnamed subscriptions                                       // 1186
    //     (eg, autopublish) are done re-publishing to avoid flicker!                                                  // 1187
                                                                                                                       //
    self._subsBeingRevived = {};                                                                                       // 1188
                                                                                                                       //
    _.each(self._subscriptions, function (sub, id) {                                                                   // 1189
      if (sub.ready) self._subsBeingRevived[id] = true;                                                                // 1190
    }); // Arrange for "half-finished" methods to have their callbacks run, and                                        // 1192
    // track methods that were sent on this connection so that we don't                                                // 1195
    // quiesce until they are all done.                                                                                // 1196
    //                                                                                                                 // 1197
    // Start by clearing _methodsBlockingQuiescence: methods sent before                                               // 1198
    // reconnect don't matter, and any "wait" methods sent on the new connection                                       // 1199
    // that we drop here will be restored by the loop below.                                                           // 1200
                                                                                                                       //
                                                                                                                       //
    self._methodsBlockingQuiescence = {};                                                                              // 1201
                                                                                                                       //
    if (self._resetStores) {                                                                                           // 1202
      _.each(self._methodInvokers, function (invoker) {                                                                // 1203
        if (invoker.gotResult()) {                                                                                     // 1204
          // This method already got its result, but it didn't call its callback                                       // 1205
          // because its data didn't become visible. We did not resend the                                             // 1206
          // method RPC. We'll call its callback when we get a full quiesce,                                           // 1207
          // since that's as close as we'll get to "data must be visible".                                             // 1208
          self._afterUpdateCallbacks.push(_.bind(invoker.dataVisible, invoker));                                       // 1209
        } else if (invoker.sentMessage) {                                                                              // 1210
          // This method has been sent on this connection (maybe as a resend                                           // 1211
          // from the last connection, maybe from onReconnect, maybe just very                                         // 1212
          // quickly before processing the connected message).                                                         // 1213
          //                                                                                                           // 1214
          // We don't need to do anything special to ensure its callbacks get                                          // 1215
          // called, but we'll count it as a method which is preventing                                                // 1216
          // reconnect quiescence. (eg, it might be a login method that was run                                        // 1217
          // from onReconnect, and we don't want to see flicker by seeing a                                            // 1218
          // logged-out state.)                                                                                        // 1219
          self._methodsBlockingQuiescence[invoker.methodId] = true;                                                    // 1220
        }                                                                                                              // 1221
      });                                                                                                              // 1222
    }                                                                                                                  // 1223
                                                                                                                       //
    self._messagesBufferedUntilQuiescence = []; // If we're not waiting on any methods or subs, we can reset the stores and
    // call the callbacks immediately.                                                                                 // 1228
                                                                                                                       //
    if (!self._waitingForQuiescence()) {                                                                               // 1229
      if (self._resetStores) {                                                                                         // 1230
        _.each(self._stores, function (s) {                                                                            // 1231
          s.beginUpdate(0, true);                                                                                      // 1232
          s.endUpdate();                                                                                               // 1233
        });                                                                                                            // 1234
                                                                                                                       //
        self._resetStores = false;                                                                                     // 1235
      }                                                                                                                // 1236
                                                                                                                       //
      self._runAfterUpdateCallbacks();                                                                                 // 1237
    }                                                                                                                  // 1238
  },                                                                                                                   // 1239
  _processOneDataMessage: function (msg, updates) {                                                                    // 1242
    var self = this; // Using underscore here so as not to need to capitalize.                                         // 1243
                                                                                                                       //
    self['_process_' + msg.msg](msg, updates);                                                                         // 1245
  },                                                                                                                   // 1246
  _livedata_data: function (msg) {                                                                                     // 1249
    var self = this;                                                                                                   // 1250
                                                                                                                       //
    if (self._waitingForQuiescence()) {                                                                                // 1252
      self._messagesBufferedUntilQuiescence.push(msg);                                                                 // 1253
                                                                                                                       //
      if (msg.msg === "nosub") delete self._subsBeingRevived[msg.id];                                                  // 1255
                                                                                                                       //
      _.each(msg.subs || [], function (subId) {                                                                        // 1258
        delete self._subsBeingRevived[subId];                                                                          // 1259
      });                                                                                                              // 1260
                                                                                                                       //
      _.each(msg.methods || [], function (methodId) {                                                                  // 1261
        delete self._methodsBlockingQuiescence[methodId];                                                              // 1262
      });                                                                                                              // 1263
                                                                                                                       //
      if (self._waitingForQuiescence()) return; // No methods or subs are blocking quiescence!                         // 1265
      // We'll now process and all of our buffered messages, reset all stores,                                         // 1269
      // and apply them all at once.                                                                                   // 1270
                                                                                                                       //
      _.each(self._messagesBufferedUntilQuiescence, function (bufferedMsg) {                                           // 1271
        self._processOneDataMessage(bufferedMsg, self._bufferedWrites);                                                // 1272
      });                                                                                                              // 1273
                                                                                                                       //
      self._messagesBufferedUntilQuiescence = [];                                                                      // 1274
    } else {                                                                                                           // 1275
      self._processOneDataMessage(msg, self._bufferedWrites);                                                          // 1276
    } // Immediately flush writes when:                                                                                // 1277
    //  1. Buffering is disabled. Or;                                                                                  // 1280
    //  2. any non-(added/changed/removed) message arrives.                                                            // 1281
                                                                                                                       //
                                                                                                                       //
    var standardWrite = _.include(['added', 'changed', 'removed'], msg.msg);                                           // 1282
                                                                                                                       //
    if (self._bufferedWritesInterval === 0 || !standardWrite) {                                                        // 1283
      self._flushBufferedWrites();                                                                                     // 1284
                                                                                                                       //
      return;                                                                                                          // 1285
    }                                                                                                                  // 1286
                                                                                                                       //
    if (self._bufferedWritesFlushAt === null) {                                                                        // 1288
      self._bufferedWritesFlushAt = new Date().valueOf() + self._bufferedWritesMaxAge;                                 // 1289
    } else if (self._bufferedWritesFlushAt < new Date().valueOf()) {                                                   // 1290
      self._flushBufferedWrites();                                                                                     // 1292
                                                                                                                       //
      return;                                                                                                          // 1293
    }                                                                                                                  // 1294
                                                                                                                       //
    if (self._bufferedWritesFlushHandle) {                                                                             // 1296
      clearTimeout(self._bufferedWritesFlushHandle);                                                                   // 1297
    }                                                                                                                  // 1298
                                                                                                                       //
    self._bufferedWritesFlushHandle = setTimeout(self.__flushBufferedWrites, self._bufferedWritesInterval);            // 1299
  },                                                                                                                   // 1301
  _flushBufferedWrites: function () {                                                                                  // 1303
    var self = this;                                                                                                   // 1304
                                                                                                                       //
    if (self._bufferedWritesFlushHandle) {                                                                             // 1305
      clearTimeout(self._bufferedWritesFlushHandle);                                                                   // 1306
      self._bufferedWritesFlushHandle = null;                                                                          // 1307
    }                                                                                                                  // 1308
                                                                                                                       //
    self._bufferedWritesFlushAt = null; // We need to clear the buffer before passing it to                            // 1310
    //  performWrites. As there's no guarantee that it                                                                 // 1312
    //  will exit cleanly.                                                                                             // 1313
                                                                                                                       //
    var writes = self._bufferedWrites;                                                                                 // 1314
    self._bufferedWrites = {};                                                                                         // 1315
                                                                                                                       //
    self._performWrites(writes);                                                                                       // 1316
  },                                                                                                                   // 1317
  _performWrites: function (updates) {                                                                                 // 1319
    var self = this;                                                                                                   // 1320
                                                                                                                       //
    if (self._resetStores || !_.isEmpty(updates)) {                                                                    // 1322
      // Begin a transactional update of each store.                                                                   // 1323
      _.each(self._stores, function (s, storeName) {                                                                   // 1324
        s.beginUpdate(_.has(updates, storeName) ? updates[storeName].length : 0, self._resetStores);                   // 1325
      });                                                                                                              // 1327
                                                                                                                       //
      self._resetStores = false;                                                                                       // 1328
                                                                                                                       //
      _.each(updates, function (updateMessages, storeName) {                                                           // 1330
        var store = self._stores[storeName];                                                                           // 1331
                                                                                                                       //
        if (store) {                                                                                                   // 1332
          _.each(updateMessages, function (updateMessage) {                                                            // 1333
            store.update(updateMessage);                                                                               // 1334
          });                                                                                                          // 1335
        } else {                                                                                                       // 1336
          // Nobody's listening for this data. Queue it up until                                                       // 1337
          // someone wants it.                                                                                         // 1338
          // XXX memory use will grow without bound if you forget to                                                   // 1339
          // create a collection or just don't care about it... going                                                  // 1340
          // to have to do something about that.                                                                       // 1341
          if (!_.has(self._updatesForUnknownStores, storeName)) self._updatesForUnknownStores[storeName] = [];         // 1342
          Array.prototype.push.apply(self._updatesForUnknownStores[storeName], updateMessages);                        // 1344
        }                                                                                                              // 1346
      }); // End update transaction.                                                                                   // 1347
                                                                                                                       //
                                                                                                                       //
      _.each(self._stores, function (s) {                                                                              // 1350
        s.endUpdate();                                                                                                 // 1350
      });                                                                                                              // 1350
    }                                                                                                                  // 1351
                                                                                                                       //
    self._runAfterUpdateCallbacks();                                                                                   // 1353
  },                                                                                                                   // 1354
  // Call any callbacks deferred with _runWhenAllServerDocsAreFlushed whose                                            // 1356
  // relevant docs have been flushed, as well as dataVisible callbacks at                                              // 1357
  // reconnect-quiescence time.                                                                                        // 1358
  _runAfterUpdateCallbacks: function () {                                                                              // 1359
    var self = this;                                                                                                   // 1360
    var callbacks = self._afterUpdateCallbacks;                                                                        // 1361
    self._afterUpdateCallbacks = [];                                                                                   // 1362
                                                                                                                       //
    _.each(callbacks, function (c) {                                                                                   // 1363
      c();                                                                                                             // 1364
    });                                                                                                                // 1365
  },                                                                                                                   // 1366
  _pushUpdate: function (updates, collection, msg) {                                                                   // 1368
    var self = this;                                                                                                   // 1369
                                                                                                                       //
    if (!_.has(updates, collection)) {                                                                                 // 1370
      updates[collection] = [];                                                                                        // 1371
    }                                                                                                                  // 1372
                                                                                                                       //
    updates[collection].push(msg);                                                                                     // 1373
  },                                                                                                                   // 1374
  _getServerDoc: function (collection, id) {                                                                           // 1376
    var self = this;                                                                                                   // 1377
    if (!_.has(self._serverDocuments, collection)) return null;                                                        // 1378
    var serverDocsForCollection = self._serverDocuments[collection];                                                   // 1380
    return serverDocsForCollection.get(id) || null;                                                                    // 1381
  },                                                                                                                   // 1382
  _process_added: function (msg, updates) {                                                                            // 1384
    var self = this;                                                                                                   // 1385
    var id = MongoID.idParse(msg.id);                                                                                  // 1386
                                                                                                                       //
    var serverDoc = self._getServerDoc(msg.collection, id);                                                            // 1387
                                                                                                                       //
    if (serverDoc) {                                                                                                   // 1388
      // Some outstanding stub wrote here.                                                                             // 1389
      var isExisting = serverDoc.document !== undefined;                                                               // 1390
      serverDoc.document = msg.fields || {};                                                                           // 1392
      serverDoc.document._id = id;                                                                                     // 1393
                                                                                                                       //
      if (self._resetStores) {                                                                                         // 1395
        // During reconnect the server is sending adds for existing ids.                                               // 1396
        // Always push an update so that document stays in the store after                                             // 1397
        // reset. Use current version of the document for this update, so                                              // 1398
        // that stub-written values are preserved.                                                                     // 1399
        var currentDoc = self._stores[msg.collection].getDoc(msg.id);                                                  // 1400
                                                                                                                       //
        if (currentDoc !== undefined) msg.fields = currentDoc;                                                         // 1401
                                                                                                                       //
        self._pushUpdate(updates, msg.collection, msg);                                                                // 1404
      } else if (isExisting) {                                                                                         // 1405
        throw new Error("Server sent add for existing id: " + msg.id);                                                 // 1406
      }                                                                                                                // 1407
    } else {                                                                                                           // 1408
      self._pushUpdate(updates, msg.collection, msg);                                                                  // 1409
    }                                                                                                                  // 1410
  },                                                                                                                   // 1411
  _process_changed: function (msg, updates) {                                                                          // 1413
    var self = this;                                                                                                   // 1414
                                                                                                                       //
    var serverDoc = self._getServerDoc(msg.collection, MongoID.idParse(msg.id));                                       // 1415
                                                                                                                       //
    if (serverDoc) {                                                                                                   // 1417
      if (serverDoc.document === undefined) throw new Error("Server sent changed for nonexisting id: " + msg.id);      // 1418
      DiffSequence.applyChanges(serverDoc.document, msg.fields);                                                       // 1420
    } else {                                                                                                           // 1421
      self._pushUpdate(updates, msg.collection, msg);                                                                  // 1422
    }                                                                                                                  // 1423
  },                                                                                                                   // 1424
  _process_removed: function (msg, updates) {                                                                          // 1426
    var self = this;                                                                                                   // 1427
                                                                                                                       //
    var serverDoc = self._getServerDoc(msg.collection, MongoID.idParse(msg.id));                                       // 1428
                                                                                                                       //
    if (serverDoc) {                                                                                                   // 1430
      // Some outstanding stub wrote here.                                                                             // 1431
      if (serverDoc.document === undefined) throw new Error("Server sent removed for nonexisting id:" + msg.id);       // 1432
      serverDoc.document = undefined;                                                                                  // 1434
    } else {                                                                                                           // 1435
      self._pushUpdate(updates, msg.collection, {                                                                      // 1436
        msg: 'removed',                                                                                                // 1437
        collection: msg.collection,                                                                                    // 1438
        id: msg.id                                                                                                     // 1439
      });                                                                                                              // 1436
    }                                                                                                                  // 1441
  },                                                                                                                   // 1442
  _process_updated: function (msg, updates) {                                                                          // 1444
    var self = this; // Process "method done" messages.                                                                // 1445
                                                                                                                       //
    _.each(msg.methods, function (methodId) {                                                                          // 1447
      _.each(self._documentsWrittenByStub[methodId], function (written) {                                              // 1448
        var serverDoc = self._getServerDoc(written.collection, written.id);                                            // 1449
                                                                                                                       //
        if (!serverDoc) throw new Error("Lost serverDoc for " + JSON.stringify(written));                              // 1450
        if (!serverDoc.writtenByStubs[methodId]) throw new Error("Doc " + JSON.stringify(written) + " not written by  method " + methodId);
        delete serverDoc.writtenByStubs[methodId];                                                                     // 1455
                                                                                                                       //
        if (_.isEmpty(serverDoc.writtenByStubs)) {                                                                     // 1456
          // All methods whose stubs wrote this method have completed! We can                                          // 1457
          // now copy the saved document to the database (reverting the stub's                                         // 1458
          // change if the server did not write to this object, or applying the                                        // 1459
          // server's writes if it did).                                                                               // 1460
          // This is a fake ddp 'replace' message.  It's just for talking                                              // 1462
          // between livedata connections and minimongo.  (We have to stringify                                        // 1463
          // the ID because it's supposed to look like a wire message.)                                                // 1464
          self._pushUpdate(updates, written.collection, {                                                              // 1465
            msg: 'replace',                                                                                            // 1466
            id: MongoID.idStringify(written.id),                                                                       // 1467
            replace: serverDoc.document                                                                                // 1468
          }); // Call all flush callbacks.                                                                             // 1465
                                                                                                                       //
                                                                                                                       //
          _.each(serverDoc.flushCallbacks, function (c) {                                                              // 1471
            c();                                                                                                       // 1472
          }); // Delete this completed serverDocument. Don't bother to GC empty                                        // 1473
          // IdMaps inside self._serverDocuments, since there probably aren't                                          // 1476
          // many collections and they'll be written repeatedly.                                                       // 1477
                                                                                                                       //
                                                                                                                       //
          self._serverDocuments[written.collection].remove(written.id);                                                // 1478
        }                                                                                                              // 1479
      });                                                                                                              // 1480
                                                                                                                       //
      delete self._documentsWrittenByStub[methodId]; // We want to call the data-written callback, but we can't do so until all
      // currently buffered messages are flushed.                                                                      // 1484
                                                                                                                       //
      var callbackInvoker = self._methodInvokers[methodId];                                                            // 1485
      if (!callbackInvoker) throw new Error("No callback invoker for method " + methodId);                             // 1486
                                                                                                                       //
      self._runWhenAllServerDocsAreFlushed(_.bind(callbackInvoker.dataVisible, callbackInvoker));                      // 1488
    });                                                                                                                // 1490
  },                                                                                                                   // 1491
  _process_ready: function (msg, updates) {                                                                            // 1493
    var self = this; // Process "sub ready" messages. "sub ready" messages don't take effect                           // 1494
    // until all current server documents have been flushed to the local                                               // 1496
    // database. We can use a write fence to implement this.                                                           // 1497
                                                                                                                       //
    _.each(msg.subs, function (subId) {                                                                                // 1498
      self._runWhenAllServerDocsAreFlushed(function () {                                                               // 1499
        var subRecord = self._subscriptions[subId]; // Did we already unsubscribe?                                     // 1500
                                                                                                                       //
        if (!subRecord) return; // Did we already receive a ready message? (Oops!)                                     // 1502
                                                                                                                       //
        if (subRecord.ready) return;                                                                                   // 1505
        subRecord.ready = true;                                                                                        // 1507
        subRecord.readyCallback && subRecord.readyCallback();                                                          // 1508
        subRecord.readyDeps.changed();                                                                                 // 1509
      });                                                                                                              // 1510
    });                                                                                                                // 1511
  },                                                                                                                   // 1512
  // Ensures that "f" will be called after all documents currently in                                                  // 1514
  // _serverDocuments have been written to the local cache. f will not be called                                       // 1515
  // if the connection is lost before then!                                                                            // 1516
  _runWhenAllServerDocsAreFlushed: function (f) {                                                                      // 1517
    var self = this;                                                                                                   // 1518
                                                                                                                       //
    var runFAfterUpdates = function () {                                                                               // 1519
      self._afterUpdateCallbacks.push(f);                                                                              // 1520
    };                                                                                                                 // 1521
                                                                                                                       //
    var unflushedServerDocCount = 0;                                                                                   // 1522
                                                                                                                       //
    var onServerDocFlush = function () {                                                                               // 1523
      --unflushedServerDocCount;                                                                                       // 1524
                                                                                                                       //
      if (unflushedServerDocCount === 0) {                                                                             // 1525
        // This was the last doc to flush! Arrange to run f after the updates                                          // 1526
        // have been applied.                                                                                          // 1527
        runFAfterUpdates();                                                                                            // 1528
      }                                                                                                                // 1529
    };                                                                                                                 // 1530
                                                                                                                       //
    _.each(self._serverDocuments, function (collectionDocs) {                                                          // 1531
      collectionDocs.forEach(function (serverDoc) {                                                                    // 1532
        var writtenByStubForAMethodWithSentMessage = _.any(serverDoc.writtenByStubs, function (dummy, methodId) {      // 1533
          var invoker = self._methodInvokers[methodId];                                                                // 1535
          return invoker && invoker.sentMessage;                                                                       // 1536
        });                                                                                                            // 1537
                                                                                                                       //
        if (writtenByStubForAMethodWithSentMessage) {                                                                  // 1538
          ++unflushedServerDocCount;                                                                                   // 1539
          serverDoc.flushCallbacks.push(onServerDocFlush);                                                             // 1540
        }                                                                                                              // 1541
      });                                                                                                              // 1542
    });                                                                                                                // 1543
                                                                                                                       //
    if (unflushedServerDocCount === 0) {                                                                               // 1544
      // There aren't any buffered docs --- we can call f as soon as the current                                       // 1545
      // round of updates is applied!                                                                                  // 1546
      runFAfterUpdates();                                                                                              // 1547
    }                                                                                                                  // 1548
  },                                                                                                                   // 1549
  _livedata_nosub: function (msg) {                                                                                    // 1551
    var self = this; // First pass it through _livedata_data, which only uses it to help get                           // 1552
    // towards quiescence.                                                                                             // 1555
                                                                                                                       //
    self._livedata_data(msg); // Do the rest of our processing immediately, with no                                    // 1556
    // buffering-until-quiescence.                                                                                     // 1559
    // we weren't subbed anyway, or we initiated the unsub.                                                            // 1561
                                                                                                                       //
                                                                                                                       //
    if (!_.has(self._subscriptions, msg.id)) return; // XXX COMPAT WITH 1.0.3.1 #errorCallback                         // 1562
                                                                                                                       //
    var errorCallback = self._subscriptions[msg.id].errorCallback;                                                     // 1566
    var stopCallback = self._subscriptions[msg.id].stopCallback;                                                       // 1567
                                                                                                                       //
    self._subscriptions[msg.id].remove();                                                                              // 1569
                                                                                                                       //
    var meteorErrorFromMsg = function (msgArg) {                                                                       // 1571
      return msgArg && msgArg.error && new Meteor.Error(msgArg.error.error, msgArg.error.reason, msgArg.error.details);
    }; // XXX COMPAT WITH 1.0.3.1 #errorCallback                                                                       // 1574
                                                                                                                       //
                                                                                                                       //
    if (errorCallback && msg.error) {                                                                                  // 1577
      errorCallback(meteorErrorFromMsg(msg));                                                                          // 1578
    }                                                                                                                  // 1579
                                                                                                                       //
    if (stopCallback) {                                                                                                // 1581
      stopCallback(meteorErrorFromMsg(msg));                                                                           // 1582
    }                                                                                                                  // 1583
  },                                                                                                                   // 1584
  _process_nosub: function () {// This is called as part of the "buffer until quiescence" process, but                 // 1586
    // nosub's effect is always immediate. It only goes in the buffer at all                                           // 1588
    // because it's possible for a nosub to be the thing that triggers                                                 // 1589
    // quiescence, if we were waiting for a sub to be revived and it dies                                              // 1590
    // instead.                                                                                                        // 1591
  },                                                                                                                   // 1592
  _livedata_result: function (msg) {                                                                                   // 1594
    // id, result or error. error has error (code), reason, details                                                    // 1595
    var self = this; // Lets make sure there are no buffered writes before returning result.                           // 1597
                                                                                                                       //
    if (!_.isEmpty(self._bufferedWrites)) {                                                                            // 1600
      self._flushBufferedWrites();                                                                                     // 1601
    } // find the outstanding request                                                                                  // 1602
    // should be O(1) in nearly all realistic use cases                                                                // 1605
                                                                                                                       //
                                                                                                                       //
    if (_.isEmpty(self._outstandingMethodBlocks)) {                                                                    // 1606
      Meteor._debug("Received method result but no methods outstanding");                                              // 1607
                                                                                                                       //
      return;                                                                                                          // 1608
    }                                                                                                                  // 1609
                                                                                                                       //
    var currentMethodBlock = self._outstandingMethodBlocks[0].methods;                                                 // 1610
    var m;                                                                                                             // 1611
                                                                                                                       //
    for (var i = 0; i < currentMethodBlock.length; i++) {                                                              // 1612
      m = currentMethodBlock[i];                                                                                       // 1613
      if (m.methodId === msg.id) break;                                                                                // 1614
    }                                                                                                                  // 1616
                                                                                                                       //
    if (!m) {                                                                                                          // 1618
      Meteor._debug("Can't match method response to original method call", msg);                                       // 1619
                                                                                                                       //
      return;                                                                                                          // 1620
    } // Remove from current method block. This may leave the block empty, but we                                      // 1621
    // don't move on to the next block until the callback has been delivered, in                                       // 1624
    // _outstandingMethodFinished.                                                                                     // 1625
                                                                                                                       //
                                                                                                                       //
    currentMethodBlock.splice(i, 1);                                                                                   // 1626
                                                                                                                       //
    if (_.has(msg, 'error')) {                                                                                         // 1628
      m.receiveResult(new Meteor.Error(msg.error.error, msg.error.reason, msg.error.details));                         // 1629
    } else {                                                                                                           // 1632
      // msg.result may be undefined if the method didn't return a                                                     // 1633
      // value                                                                                                         // 1634
      m.receiveResult(undefined, msg.result);                                                                          // 1635
    }                                                                                                                  // 1636
  },                                                                                                                   // 1637
  // Called by MethodInvoker after a method's callback is invoked.  If this was                                        // 1639
  // the last outstanding method in the current block, runs the next block. If                                         // 1640
  // there are no more methods, consider accepting a hot code push.                                                    // 1641
  _outstandingMethodFinished: function () {                                                                            // 1642
    var self = this;                                                                                                   // 1643
    if (self._anyMethodsAreOutstanding()) return; // No methods are outstanding. This should mean that the first block of
    // methods is empty. (Or it might not exist, if this was a method that                                             // 1648
    // half-finished before disconnect/reconnect.)                                                                     // 1649
                                                                                                                       //
    if (!_.isEmpty(self._outstandingMethodBlocks)) {                                                                   // 1650
      var firstBlock = self._outstandingMethodBlocks.shift();                                                          // 1651
                                                                                                                       //
      if (!_.isEmpty(firstBlock.methods)) throw new Error("No methods outstanding but nonempty block: " + JSON.stringify(firstBlock)); // Send the outstanding methods now in the first block.
                                                                                                                       //
      if (!_.isEmpty(self._outstandingMethodBlocks)) self._sendOutstandingMethods();                                   // 1657
    } // Maybe accept a hot code push.                                                                                 // 1659
                                                                                                                       //
                                                                                                                       //
    self._maybeMigrate();                                                                                              // 1662
  },                                                                                                                   // 1663
  // Sends messages for all the methods in the first block in                                                          // 1665
  // _outstandingMethodBlocks.                                                                                         // 1666
  _sendOutstandingMethods: function () {                                                                               // 1667
    var self = this;                                                                                                   // 1668
    if (_.isEmpty(self._outstandingMethodBlocks)) return;                                                              // 1669
                                                                                                                       //
    _.each(self._outstandingMethodBlocks[0].methods, function (m) {                                                    // 1671
      m.sendMessage();                                                                                                 // 1672
    });                                                                                                                // 1673
  },                                                                                                                   // 1674
  _livedata_error: function (msg) {                                                                                    // 1676
    Meteor._debug("Received error from server: ", msg.reason);                                                         // 1677
                                                                                                                       //
    if (msg.offendingMessage) Meteor._debug("For: ", msg.offendingMessage);                                            // 1678
  },                                                                                                                   // 1680
  _callOnReconnectAndSendAppropriateOutstandingMethods: function () {                                                  // 1682
    var self = this;                                                                                                   // 1683
    var oldOutstandingMethodBlocks = self._outstandingMethodBlocks;                                                    // 1684
    self._outstandingMethodBlocks = [];                                                                                // 1685
    self.onReconnect && self.onReconnect();                                                                            // 1687
                                                                                                                       //
    DDP._reconnectHook.each(function (callback) {                                                                      // 1688
      callback(self);                                                                                                  // 1689
      return true;                                                                                                     // 1690
    });                                                                                                                // 1691
                                                                                                                       //
    if (_.isEmpty(oldOutstandingMethodBlocks)) return; // We have at least one block worth of old outstanding methods to try
    // again. First: did onReconnect actually send anything? If not, we just                                           // 1697
    // restore all outstanding methods and run the first block.                                                        // 1698
                                                                                                                       //
    if (_.isEmpty(self._outstandingMethodBlocks)) {                                                                    // 1699
      self._outstandingMethodBlocks = oldOutstandingMethodBlocks;                                                      // 1700
                                                                                                                       //
      self._sendOutstandingMethods();                                                                                  // 1701
                                                                                                                       //
      return;                                                                                                          // 1702
    } // OK, there are blocks on both sides. Special case: merge the last block of                                     // 1703
    // the reconnect methods with the first block of the original methods, if                                          // 1706
    // neither of them are "wait" blocks.                                                                              // 1707
                                                                                                                       //
                                                                                                                       //
    if (!_.last(self._outstandingMethodBlocks).wait && !oldOutstandingMethodBlocks[0].wait) {                          // 1708
      _.each(oldOutstandingMethodBlocks[0].methods, function (m) {                                                     // 1710
        _.last(self._outstandingMethodBlocks).methods.push(m); // If this "last block" is also the first block, send the message.
                                                                                                                       //
                                                                                                                       //
        if (self._outstandingMethodBlocks.length === 1) m.sendMessage();                                               // 1714
      });                                                                                                              // 1716
                                                                                                                       //
      oldOutstandingMethodBlocks.shift();                                                                              // 1718
    } // Now add the rest of the original blocks on.                                                                   // 1719
                                                                                                                       //
                                                                                                                       //
    _.each(oldOutstandingMethodBlocks, function (block) {                                                              // 1722
      self._outstandingMethodBlocks.push(block);                                                                       // 1723
    });                                                                                                                // 1724
  },                                                                                                                   // 1725
  // We can accept a hot code push if there are no methods in flight.                                                  // 1727
  _readyToMigrate: function () {                                                                                       // 1728
    var self = this;                                                                                                   // 1729
    return _.isEmpty(self._methodInvokers);                                                                            // 1730
  },                                                                                                                   // 1731
  // If we were blocking a migration, see if it's now possible to continue.                                            // 1733
  // Call whenever the set of outstanding/blocked methods shrinks.                                                     // 1734
  _maybeMigrate: function () {                                                                                         // 1735
    var self = this;                                                                                                   // 1736
                                                                                                                       //
    if (self._retryMigrate && self._readyToMigrate()) {                                                                // 1737
      self._retryMigrate();                                                                                            // 1738
                                                                                                                       //
      self._retryMigrate = null;                                                                                       // 1739
    }                                                                                                                  // 1740
  }                                                                                                                    // 1741
});                                                                                                                    // 478
                                                                                                                       //
LivedataTest.Connection = Connection; // @param url {String} URL to Meteor app,                                        // 1744
//     e.g.:                                                                                                           // 1747
//     "subdomain.meteor.com",                                                                                         // 1748
//     "http://subdomain.meteor.com",                                                                                  // 1749
//     "/",                                                                                                            // 1750
//     "ddp+sockjs://ddp--****-foo.meteor.com/sockjs"                                                                  // 1751
/**                                                                                                                    // 1753
 * @summary Connect to the server of a different Meteor application to subscribe to its document sets and invoke its remote methods.
 * @locus Anywhere                                                                                                     //
 * @param {String} url The URL of another Meteor application.                                                          //
 */                                                                                                                    //
                                                                                                                       //
DDP.connect = function (url, options) {                                                                                // 1758
  var ret = new Connection(url, options);                                                                              // 1759
  allConnections.push(ret); // hack. see below.                                                                        // 1760
                                                                                                                       //
  return ret;                                                                                                          // 1761
};                                                                                                                     // 1762
                                                                                                                       //
DDP._reconnectHook = new Hook({                                                                                        // 1764
  bindEnvironment: false                                                                                               // 1764
}); /**                                                                                                                // 1764
     * @summary Register a function to call as the first step of                                                       //
     * reconnecting. This function can call methods which will be executed before                                      //
     * any other outstanding methods. For example, this can be used to re-establish                                    //
     * the appropriate authentication context on the connection.                                                       //
     * @locus Anywhere                                                                                                 //
     * @param {Function} callback The function to call. It will be called with a                                       //
     * single argument, the [connection object](#ddp_connect) that is reconnecting.                                    //
     */                                                                                                                //
                                                                                                                       //
DDP.onReconnect = function (callback) {                                                                                // 1775
  return DDP._reconnectHook.register(callback);                                                                        // 1776
}; // Hack for `spiderable` package: a way to see if the page is done                                                  // 1777
// loading all the data it needs.                                                                                      // 1780
//                                                                                                                     // 1781
                                                                                                                       //
                                                                                                                       //
allConnections = [];                                                                                                   // 1782
                                                                                                                       //
DDP._allSubscriptionsReady = function () {                                                                             // 1783
  return _.all(allConnections, function (conn) {                                                                       // 1784
    return _.all(conn._subscriptions, function (sub) {                                                                 // 1785
      return sub.ready;                                                                                                // 1786
    });                                                                                                                // 1787
  });                                                                                                                  // 1788
};                                                                                                                     // 1789
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client_convenience.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/client_convenience.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var DDP = void 0;                                                                                                      // 1
module.watch(require("./namespace.js"), {                                                                              // 1
  DDP: function (v) {                                                                                                  // 1
    DDP = v;                                                                                                           // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
// Meteor.refresh can be called on the client (if you're in common code) but it                                        // 3
// only has an effect on the server.                                                                                   // 4
Meteor.refresh = function (notification) {};                                                                           // 5
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 8
  // By default, try to connect back to the same endpoint as the page                                                  // 9
  // was served from.                                                                                                  // 10
  //                                                                                                                   // 11
  // XXX We should be doing this a different way. Right now we don't                                                   // 12
  // include ROOT_URL_PATH_PREFIX when computing ddpUrl. (We don't                                                     // 13
  // include it on the server when computing                                                                           // 14
  // DDP_DEFAULT_CONNECTION_URL, and we don't include it in our                                                        // 15
  // default, '/'.) We get by with this because DDP.connect then                                                       // 16
  // forces the URL passed to it to be interpreted relative to the                                                     // 17
  // app's deploy path, even if it is absolute. Instead, we should                                                     // 18
  // make DDP_DEFAULT_CONNECTION_URL, if set, include the path prefix;                                                 // 19
  // make the default ddpUrl be '' rather that '/'; and make                                                           // 20
  // _translateUrl in stream_client_common.js not force absolute paths                                                 // 21
  // to be treated like relative paths. See also                                                                       // 22
  // stream_client_common.js #RationalizingRelativeDDPURLs                                                             // 23
  var ddpUrl = '/';                                                                                                    // 24
                                                                                                                       //
  if (typeof __meteor_runtime_config__ !== "undefined") {                                                              // 25
    if (__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL) ddpUrl = __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL;
  }                                                                                                                    // 28
                                                                                                                       //
  var retry = new Retry();                                                                                             // 30
                                                                                                                       //
  var onDDPVersionNegotiationFailure = function (description) {                                                        // 32
    Meteor._debug(description);                                                                                        // 33
                                                                                                                       //
    if (Package.reload) {                                                                                              // 34
      var migrationData = Package.reload.Reload._migrationData('livedata') || {};                                      // 35
      var failures = migrationData.DDPVersionNegotiationFailures || 0;                                                 // 36
      ++failures;                                                                                                      // 37
                                                                                                                       //
      Package.reload.Reload._onMigrate('livedata', function () {                                                       // 38
        return [true, {                                                                                                // 39
          DDPVersionNegotiationFailures: failures                                                                      // 39
        }];                                                                                                            // 39
      });                                                                                                              // 40
                                                                                                                       //
      retry.retryLater(failures, function () {                                                                         // 41
        Package.reload.Reload._reload();                                                                               // 42
      });                                                                                                              // 43
    }                                                                                                                  // 44
  };                                                                                                                   // 45
                                                                                                                       //
  Meteor.connection = DDP.connect(ddpUrl, {                                                                            // 47
    onDDPVersionNegotiationFailure: onDDPVersionNegotiationFailure                                                     // 49
  }); // Proxy the public methods of Meteor.connection so they can                                                     // 48
  // be called directly on Meteor.                                                                                     // 53
                                                                                                                       //
  _.each(['subscribe', 'methods', 'call', 'apply', 'status', 'reconnect', 'disconnect'], function (name) {             // 54
    Meteor[name] = _.bind(Meteor.connection[name], Meteor.connection);                                                 // 57
  });                                                                                                                  // 58
} else {                                                                                                               // 59
  // Never set up a default connection on the server. Don't even map                                                   // 60
  // subscribe/call/etc onto Meteor.                                                                                   // 61
  Meteor.connection = null;                                                                                            // 62
} // Meteor.connection used to be called                                                                               // 63
// Meteor.default_connection. Provide backcompat as a courtesy even                                                    // 66
// though it was never documented.                                                                                     // 67
// XXX COMPAT WITH 0.6.4                                                                                               // 68
                                                                                                                       //
                                                                                                                       //
Meteor.default_connection = Meteor.connection; // We should transition from Meteor.connect to DDP.connect.             // 69
// XXX COMPAT WITH 0.6.4                                                                                               // 72
                                                                                                                       //
Meteor.connect = DDP.connect;                                                                                          // 73
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"namespace.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/namespace.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  DDP: function () {                                                                                                   // 1
    return DDP;                                                                                                        // 1
  },                                                                                                                   // 1
  LivedataTest: function () {                                                                                          // 1
    return LivedataTest;                                                                                               // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var DDP = {};                                                                                                          // 5
var LivedataTest = {};                                                                                                 // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"id_map.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/id_map.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
module.export({                                                                                                        // 1
  MongoIDMap: function () {                                                                                            // 1
    return MongoIDMap;                                                                                                 // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
                                                                                                                       //
var MongoIDMap = function (_IdMap) {                                                                                   //
  (0, _inherits3.default)(MongoIDMap, _IdMap);                                                                         //
                                                                                                                       //
  function MongoIDMap() {                                                                                              // 2
    (0, _classCallCheck3.default)(this, MongoIDMap);                                                                   // 2
    return (0, _possibleConstructorReturn3.default)(this, _IdMap.call(this, MongoID.idStringify, MongoID.idParse));    // 2
  }                                                                                                                    // 7
                                                                                                                       //
  return MongoIDMap;                                                                                                   //
}(IdMap);                                                                                                              //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/ddp-client/sockjs-0.3.4.js");
require("./node_modules/meteor/ddp-client/stream_client_sockjs.js");
require("./node_modules/meteor/ddp-client/stream_client_common.js");
require("./node_modules/meteor/ddp-client/livedata_common.js");
require("./node_modules/meteor/ddp-client/random_stream.js");
require("./node_modules/meteor/ddp-client/livedata_connection.js");
require("./node_modules/meteor/ddp-client/client_convenience.js");
var exports = require("./node_modules/meteor/ddp-client/namespace.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ddp-client'] = exports, {
  DDP: DDP
});

})();
