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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/natestrauser_select2/lib/select2/dist/js/select2.js                                                    //
// This file is in bare mode and is not in its own closure.                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/*!                                                                                                                // 1
 * Select2 4.0.3                                                                                                   // 2
 * https://select2.github.io                                                                                       // 3
 *                                                                                                                 // 4
 * Released under the MIT license                                                                                  // 5
 * https://github.com/select2/select2/blob/master/LICENSE.md                                                       // 6
 */                                                                                                                // 7
(function (factory) {                                                                                              // 8
  if (typeof define === 'function' && define.amd) {                                                                // 9
    // AMD. Register as an anonymous module.                                                                       // 10
    define(['jquery'], factory);                                                                                   // 11
  } else if (typeof exports === 'object') {                                                                        // 12
    // Node/CommonJS                                                                                               // 13
    factory(require('jquery'));                                                                                    // 14
  } else {                                                                                                         // 15
    // Browser globals                                                                                             // 16
    factory(jQuery);                                                                                               // 17
  }                                                                                                                // 18
}(function (jQuery) {                                                                                              // 19
  // This is needed so we can catch the AMD loader configuration and use it                                        // 20
  // The inner file should be wrapped (by `banner.start.js`) in a function that                                    // 21
  // returns the AMD loader references.                                                                            // 22
  var S2 =                                                                                                         // 23
(function () {                                                                                                     // 24
  // Restore the Select2 AMD loader so it can be used                                                              // 25
  // Needed mostly in the language files, where the loader is not inserted                                         // 26
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {                                         // 27
    var S2 = jQuery.fn.select2.amd;                                                                                // 28
  }                                                                                                                // 29
var S2;(function () { if (!S2 || !S2.requirejs) {                                                                  // 30
if (!S2) { S2 = {}; } else { require = S2; }                                                                       // 31
/**                                                                                                                // 32
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.                         // 33
 * Available via the MIT or new BSD license.                                                                       // 34
 * see: http://github.com/jrburke/almond for details                                                               // 35
 */                                                                                                                // 36
//Going sloppy to avoid 'use strict' string cost, but strict practices should                                      // 37
//be followed.                                                                                                     // 38
/*jslint sloppy: true */                                                                                           // 39
/*global setTimeout: false */                                                                                      // 40
                                                                                                                   // 41
var requirejs, require, define;                                                                                    // 42
(function (undef) {                                                                                                // 43
    var main, req, makeMap, handlers,                                                                              // 44
        defined = {},                                                                                              // 45
        waiting = {},                                                                                              // 46
        config = {},                                                                                               // 47
        defining = {},                                                                                             // 48
        hasOwn = Object.prototype.hasOwnProperty,                                                                  // 49
        aps = [].slice,                                                                                            // 50
        jsSuffixRegExp = /\.js$/;                                                                                  // 51
                                                                                                                   // 52
    function hasProp(obj, prop) {                                                                                  // 53
        return hasOwn.call(obj, prop);                                                                             // 54
    }                                                                                                              // 55
                                                                                                                   // 56
    /**                                                                                                            // 57
     * Given a relative module name, like ./something, normalize it to                                             // 58
     * a real name that can be mapped to a path.                                                                   // 59
     * @param {String} name the relative name                                                                      // 60
     * @param {String} baseName a real name that the name arg is relative                                          // 61
     * to.                                                                                                         // 62
     * @returns {String} normalized name                                                                           // 63
     */                                                                                                            // 64
    function normalize(name, baseName) {                                                                           // 65
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,                                                 // 66
            foundI, foundStarMap, starI, i, j, part,                                                               // 67
            baseParts = baseName && baseName.split("/"),                                                           // 68
            map = config.map,                                                                                      // 69
            starMap = (map && map['*']) || {};                                                                     // 70
                                                                                                                   // 71
        //Adjust any relative paths.                                                                               // 72
        if (name && name.charAt(0) === ".") {                                                                      // 73
            //If have a base name, try to normalize against it,                                                    // 74
            //otherwise, assume it is a top-level require that will                                                // 75
            //be relative to baseUrl in the end.                                                                   // 76
            if (baseName) {                                                                                        // 77
                name = name.split('/');                                                                            // 78
                lastIndex = name.length - 1;                                                                       // 79
                                                                                                                   // 80
                // Node .js allowance:                                                                             // 81
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {                                 // 82
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');                                 // 83
                }                                                                                                  // 84
                                                                                                                   // 85
                //Lop off the last part of baseParts, so that . matches the                                        // 86
                //"directory" and not name of the baseName's module. For instance,                                 // 87
                //baseName of "one/two/three", maps to "one/two/three.js", but we                                  // 88
                //want the directory, "one/two" for this normalization.                                            // 89
                name = baseParts.slice(0, baseParts.length - 1).concat(name);                                      // 90
                                                                                                                   // 91
                //start trimDots                                                                                   // 92
                for (i = 0; i < name.length; i += 1) {                                                             // 93
                    part = name[i];                                                                                // 94
                    if (part === ".") {                                                                            // 95
                        name.splice(i, 1);                                                                         // 96
                        i -= 1;                                                                                    // 97
                    } else if (part === "..") {                                                                    // 98
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {                                   // 99
                            //End of the line. Keep at least one non-dot                                           // 100
                            //path segment at the front so it can be mapped                                        // 101
                            //correctly to disk. Otherwise, there is likely                                        // 102
                            //no path mapping for a path starting with '..'.                                       // 103
                            //This can still fail, but catches the most reasonable                                 // 104
                            //uses of ..                                                                           // 105
                            break;                                                                                 // 106
                        } else if (i > 0) {                                                                        // 107
                            name.splice(i - 1, 2);                                                                 // 108
                            i -= 2;                                                                                // 109
                        }                                                                                          // 110
                    }                                                                                              // 111
                }                                                                                                  // 112
                //end trimDots                                                                                     // 113
                                                                                                                   // 114
                name = name.join("/");                                                                             // 115
            } else if (name.indexOf('./') === 0) {                                                                 // 116
                // No baseName, so this is ID is resolved relative                                                 // 117
                // to baseUrl, pull off the leading dot.                                                           // 118
                name = name.substring(2);                                                                          // 119
            }                                                                                                      // 120
        }                                                                                                          // 121
                                                                                                                   // 122
        //Apply map config if available.                                                                           // 123
        if ((baseParts || starMap) && map) {                                                                       // 124
            nameParts = name.split('/');                                                                           // 125
                                                                                                                   // 126
            for (i = nameParts.length; i > 0; i -= 1) {                                                            // 127
                nameSegment = nameParts.slice(0, i).join("/");                                                     // 128
                                                                                                                   // 129
                if (baseParts) {                                                                                   // 130
                    //Find the longest baseName segment match in the config.                                       // 131
                    //So, do joins on the biggest to smallest lengths of baseParts.                                // 132
                    for (j = baseParts.length; j > 0; j -= 1) {                                                    // 133
                        mapValue = map[baseParts.slice(0, j).join('/')];                                           // 134
                                                                                                                   // 135
                        //baseName segment has  config, find if it has one for                                     // 136
                        //this name.                                                                               // 137
                        if (mapValue) {                                                                            // 138
                            mapValue = mapValue[nameSegment];                                                      // 139
                            if (mapValue) {                                                                        // 140
                                //Match, update name to the new value.                                             // 141
                                foundMap = mapValue;                                                               // 142
                                foundI = i;                                                                        // 143
                                break;                                                                             // 144
                            }                                                                                      // 145
                        }                                                                                          // 146
                    }                                                                                              // 147
                }                                                                                                  // 148
                                                                                                                   // 149
                if (foundMap) {                                                                                    // 150
                    break;                                                                                         // 151
                }                                                                                                  // 152
                                                                                                                   // 153
                //Check for a star map match, but just hold on to it,                                              // 154
                //if there is a shorter segment match later in a matching                                          // 155
                //config, then favor over this star map.                                                           // 156
                if (!foundStarMap && starMap && starMap[nameSegment]) {                                            // 157
                    foundStarMap = starMap[nameSegment];                                                           // 158
                    starI = i;                                                                                     // 159
                }                                                                                                  // 160
            }                                                                                                      // 161
                                                                                                                   // 162
            if (!foundMap && foundStarMap) {                                                                       // 163
                foundMap = foundStarMap;                                                                           // 164
                foundI = starI;                                                                                    // 165
            }                                                                                                      // 166
                                                                                                                   // 167
            if (foundMap) {                                                                                        // 168
                nameParts.splice(0, foundI, foundMap);                                                             // 169
                name = nameParts.join('/');                                                                        // 170
            }                                                                                                      // 171
        }                                                                                                          // 172
                                                                                                                   // 173
        return name;                                                                                               // 174
    }                                                                                                              // 175
                                                                                                                   // 176
    function makeRequire(relName, forceSync) {                                                                     // 177
        return function () {                                                                                       // 178
            //A version of a require function that passes a moduleName                                             // 179
            //value for items that may need to                                                                     // 180
            //look up paths relative to the moduleName                                                             // 181
            var args = aps.call(arguments, 0);                                                                     // 182
                                                                                                                   // 183
            //If first arg is not require('string'), and there is only                                             // 184
            //one arg, it is the array form without a callback. Insert                                             // 185
            //a null so that the following concat is correct.                                                      // 186
            if (typeof args[0] !== 'string' && args.length === 1) {                                                // 187
                args.push(null);                                                                                   // 188
            }                                                                                                      // 189
            return req.apply(undef, args.concat([relName, forceSync]));                                            // 190
        };                                                                                                         // 191
    }                                                                                                              // 192
                                                                                                                   // 193
    function makeNormalize(relName) {                                                                              // 194
        return function (name) {                                                                                   // 195
            return normalize(name, relName);                                                                       // 196
        };                                                                                                         // 197
    }                                                                                                              // 198
                                                                                                                   // 199
    function makeLoad(depName) {                                                                                   // 200
        return function (value) {                                                                                  // 201
            defined[depName] = value;                                                                              // 202
        };                                                                                                         // 203
    }                                                                                                              // 204
                                                                                                                   // 205
    function callDep(name) {                                                                                       // 206
        if (hasProp(waiting, name)) {                                                                              // 207
            var args = waiting[name];                                                                              // 208
            delete waiting[name];                                                                                  // 209
            defining[name] = true;                                                                                 // 210
            main.apply(undef, args);                                                                               // 211
        }                                                                                                          // 212
                                                                                                                   // 213
        if (!hasProp(defined, name) && !hasProp(defining, name)) {                                                 // 214
            throw new Error('No ' + name);                                                                         // 215
        }                                                                                                          // 216
        return defined[name];                                                                                      // 217
    }                                                                                                              // 218
                                                                                                                   // 219
    //Turns a plugin!resource to [plugin, resource]                                                                // 220
    //with the plugin being undefined if the name                                                                  // 221
    //did not have a plugin prefix.                                                                                // 222
    function splitPrefix(name) {                                                                                   // 223
        var prefix,                                                                                                // 224
            index = name ? name.indexOf('!') : -1;                                                                 // 225
        if (index > -1) {                                                                                          // 226
            prefix = name.substring(0, index);                                                                     // 227
            name = name.substring(index + 1, name.length);                                                         // 228
        }                                                                                                          // 229
        return [prefix, name];                                                                                     // 230
    }                                                                                                              // 231
                                                                                                                   // 232
    /**                                                                                                            // 233
     * Makes a name map, normalizing the name, and using a plugin                                                  // 234
     * for normalization if necessary. Grabs a ref to plugin                                                       // 235
     * too, as an optimization.                                                                                    // 236
     */                                                                                                            // 237
    makeMap = function (name, relName) {                                                                           // 238
        var plugin,                                                                                                // 239
            parts = splitPrefix(name),                                                                             // 240
            prefix = parts[0];                                                                                     // 241
                                                                                                                   // 242
        name = parts[1];                                                                                           // 243
                                                                                                                   // 244
        if (prefix) {                                                                                              // 245
            prefix = normalize(prefix, relName);                                                                   // 246
            plugin = callDep(prefix);                                                                              // 247
        }                                                                                                          // 248
                                                                                                                   // 249
        //Normalize according                                                                                      // 250
        if (prefix) {                                                                                              // 251
            if (plugin && plugin.normalize) {                                                                      // 252
                name = plugin.normalize(name, makeNormalize(relName));                                             // 253
            } else {                                                                                               // 254
                name = normalize(name, relName);                                                                   // 255
            }                                                                                                      // 256
        } else {                                                                                                   // 257
            name = normalize(name, relName);                                                                       // 258
            parts = splitPrefix(name);                                                                             // 259
            prefix = parts[0];                                                                                     // 260
            name = parts[1];                                                                                       // 261
            if (prefix) {                                                                                          // 262
                plugin = callDep(prefix);                                                                          // 263
            }                                                                                                      // 264
        }                                                                                                          // 265
                                                                                                                   // 266
        //Using ridiculous property names for space reasons                                                        // 267
        return {                                                                                                   // 268
            f: prefix ? prefix + '!' + name : name, //fullName                                                     // 269
            n: name,                                                                                               // 270
            pr: prefix,                                                                                            // 271
            p: plugin                                                                                              // 272
        };                                                                                                         // 273
    };                                                                                                             // 274
                                                                                                                   // 275
    function makeConfig(name) {                                                                                    // 276
        return function () {                                                                                       // 277
            return (config && config.config && config.config[name]) || {};                                         // 278
        };                                                                                                         // 279
    }                                                                                                              // 280
                                                                                                                   // 281
    handlers = {                                                                                                   // 282
        require: function (name) {                                                                                 // 283
            return makeRequire(name);                                                                              // 284
        },                                                                                                         // 285
        exports: function (name) {                                                                                 // 286
            var e = defined[name];                                                                                 // 287
            if (typeof e !== 'undefined') {                                                                        // 288
                return e;                                                                                          // 289
            } else {                                                                                               // 290
                return (defined[name] = {});                                                                       // 291
            }                                                                                                      // 292
        },                                                                                                         // 293
        module: function (name) {                                                                                  // 294
            return {                                                                                               // 295
                id: name,                                                                                          // 296
                uri: '',                                                                                           // 297
                exports: defined[name],                                                                            // 298
                config: makeConfig(name)                                                                           // 299
            };                                                                                                     // 300
        }                                                                                                          // 301
    };                                                                                                             // 302
                                                                                                                   // 303
    main = function (name, deps, callback, relName) {                                                              // 304
        var cjsModule, depName, ret, map, i,                                                                       // 305
            args = [],                                                                                             // 306
            callbackType = typeof callback,                                                                        // 307
            usingExports;                                                                                          // 308
                                                                                                                   // 309
        //Use name if no relName                                                                                   // 310
        relName = relName || name;                                                                                 // 311
                                                                                                                   // 312
        //Call the callback to define the module, if necessary.                                                    // 313
        if (callbackType === 'undefined' || callbackType === 'function') {                                         // 314
            //Pull out the defined dependencies and pass the ordered                                               // 315
            //values to the callback.                                                                              // 316
            //Default to [require, exports, module] if no deps                                                     // 317
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;                      // 318
            for (i = 0; i < deps.length; i += 1) {                                                                 // 319
                map = makeMap(deps[i], relName);                                                                   // 320
                depName = map.f;                                                                                   // 321
                                                                                                                   // 322
                //Fast path CommonJS standard dependencies.                                                        // 323
                if (depName === "require") {                                                                       // 324
                    args[i] = handlers.require(name);                                                              // 325
                } else if (depName === "exports") {                                                                // 326
                    //CommonJS module spec 1.1                                                                     // 327
                    args[i] = handlers.exports(name);                                                              // 328
                    usingExports = true;                                                                           // 329
                } else if (depName === "module") {                                                                 // 330
                    //CommonJS module spec 1.1                                                                     // 331
                    cjsModule = args[i] = handlers.module(name);                                                   // 332
                } else if (hasProp(defined, depName) ||                                                            // 333
                           hasProp(waiting, depName) ||                                                            // 334
                           hasProp(defining, depName)) {                                                           // 335
                    args[i] = callDep(depName);                                                                    // 336
                } else if (map.p) {                                                                                // 337
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});                          // 338
                    args[i] = defined[depName];                                                                    // 339
                } else {                                                                                           // 340
                    throw new Error(name + ' missing ' + depName);                                                 // 341
                }                                                                                                  // 342
            }                                                                                                      // 343
                                                                                                                   // 344
            ret = callback ? callback.apply(defined[name], args) : undefined;                                      // 345
                                                                                                                   // 346
            if (name) {                                                                                            // 347
                //If setting exports via "module" is in play,                                                      // 348
                //favor that over return value and exports. After that,                                            // 349
                //favor a non-undefined return value over exports use.                                             // 350
                if (cjsModule && cjsModule.exports !== undef &&                                                    // 351
                        cjsModule.exports !== defined[name]) {                                                     // 352
                    defined[name] = cjsModule.exports;                                                             // 353
                } else if (ret !== undef || !usingExports) {                                                       // 354
                    //Use the return value from the function.                                                      // 355
                    defined[name] = ret;                                                                           // 356
                }                                                                                                  // 357
            }                                                                                                      // 358
        } else if (name) {                                                                                         // 359
            //May just be an object definition for the module. Only                                                // 360
            //worry about defining if have a module name.                                                          // 361
            defined[name] = callback;                                                                              // 362
        }                                                                                                          // 363
    };                                                                                                             // 364
                                                                                                                   // 365
    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {                               // 366
        if (typeof deps === "string") {                                                                            // 367
            if (handlers[deps]) {                                                                                  // 368
                //callback in this case is really relName                                                          // 369
                return handlers[deps](callback);                                                                   // 370
            }                                                                                                      // 371
            //Just return the module wanted. In this scenario, the                                                 // 372
            //deps arg is the module name, and second arg (if passed)                                              // 373
            //is just the relName.                                                                                 // 374
            //Normalize module name, if it contains . or ..                                                        // 375
            return callDep(makeMap(deps, callback).f);                                                             // 376
        } else if (!deps.splice) {                                                                                 // 377
            //deps is a config object, not an array.                                                               // 378
            config = deps;                                                                                         // 379
            if (config.deps) {                                                                                     // 380
                req(config.deps, config.callback);                                                                 // 381
            }                                                                                                      // 382
            if (!callback) {                                                                                       // 383
                return;                                                                                            // 384
            }                                                                                                      // 385
                                                                                                                   // 386
            if (callback.splice) {                                                                                 // 387
                //callback is an array, which means it is a dependency list.                                       // 388
                //Adjust args if there are dependencies                                                            // 389
                deps = callback;                                                                                   // 390
                callback = relName;                                                                                // 391
                relName = null;                                                                                    // 392
            } else {                                                                                               // 393
                deps = undef;                                                                                      // 394
            }                                                                                                      // 395
        }                                                                                                          // 396
                                                                                                                   // 397
        //Support require(['a'])                                                                                   // 398
        callback = callback || function () {};                                                                     // 399
                                                                                                                   // 400
        //If relName is a function, it is an errback handler,                                                      // 401
        //so remove it.                                                                                            // 402
        if (typeof relName === 'function') {                                                                       // 403
            relName = forceSync;                                                                                   // 404
            forceSync = alt;                                                                                       // 405
        }                                                                                                          // 406
                                                                                                                   // 407
        //Simulate async callback;                                                                                 // 408
        if (forceSync) {                                                                                           // 409
            main(undef, deps, callback, relName);                                                                  // 410
        } else {                                                                                                   // 411
            //Using a non-zero value because of concern for what old browsers                                      // 412
            //do, and latest browsers "upgrade" to 4 if lower value is used:                                       // 413
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something                                  // 415
            //that works in almond on the global level, but not guaranteed and                                     // 416
            //unlikely to work in other AMD implementations.                                                       // 417
            setTimeout(function () {                                                                               // 418
                main(undef, deps, callback, relName);                                                              // 419
            }, 4);                                                                                                 // 420
        }                                                                                                          // 421
                                                                                                                   // 422
        return req;                                                                                                // 423
    };                                                                                                             // 424
                                                                                                                   // 425
    /**                                                                                                            // 426
     * Just drops the config on the floor, but returns req in case                                                 // 427
     * the config return value is used.                                                                            // 428
     */                                                                                                            // 429
    req.config = function (cfg) {                                                                                  // 430
        return req(cfg);                                                                                           // 431
    };                                                                                                             // 432
                                                                                                                   // 433
    /**                                                                                                            // 434
     * Expose module registry for debugging and tooling                                                            // 435
     */                                                                                                            // 436
    requirejs._defined = defined;                                                                                  // 437
                                                                                                                   // 438
    define = function (name, deps, callback) {                                                                     // 439
        if (typeof name !== 'string') {                                                                            // 440
            throw new Error('See almond README: incorrect module build, no module name');                          // 441
        }                                                                                                          // 442
                                                                                                                   // 443
        //This module may not have dependencies                                                                    // 444
        if (!deps.splice) {                                                                                        // 445
            //deps is not an array, so probably means                                                              // 446
            //an object literal or factory function for                                                            // 447
            //the value. Adjust args.                                                                              // 448
            callback = deps;                                                                                       // 449
            deps = [];                                                                                             // 450
        }                                                                                                          // 451
                                                                                                                   // 452
        if (!hasProp(defined, name) && !hasProp(waiting, name)) {                                                  // 453
            waiting[name] = [name, deps, callback];                                                                // 454
        }                                                                                                          // 455
    };                                                                                                             // 456
                                                                                                                   // 457
    define.amd = {                                                                                                 // 458
        jQuery: true                                                                                               // 459
    };                                                                                                             // 460
}());                                                                                                              // 461
                                                                                                                   // 462
S2.requirejs = requirejs;S2.require = require;S2.define = define;                                                  // 463
}                                                                                                                  // 464
}());                                                                                                              // 465
S2.define("almond", function(){});                                                                                 // 466
                                                                                                                   // 467
/* global jQuery:false, $:false */                                                                                 // 468
S2.define('jquery',[],function () {                                                                                // 469
  var _$ = jQuery || $;                                                                                            // 470
                                                                                                                   // 471
  if (_$ == null && console && console.error) {                                                                    // 472
    console.error(                                                                                                 // 473
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +                                   // 474
      'found. Make sure that you are including jQuery before Select2 on your ' +                                   // 475
      'web page.'                                                                                                  // 476
    );                                                                                                             // 477
  }                                                                                                                // 478
                                                                                                                   // 479
  return _$;                                                                                                       // 480
});                                                                                                                // 481
                                                                                                                   // 482
S2.define('select2/utils',[                                                                                        // 483
  'jquery'                                                                                                         // 484
], function ($) {                                                                                                  // 485
  var Utils = {};                                                                                                  // 486
                                                                                                                   // 487
  Utils.Extend = function (ChildClass, SuperClass) {                                                               // 488
    var __hasProp = {}.hasOwnProperty;                                                                             // 489
                                                                                                                   // 490
    function BaseConstructor () {                                                                                  // 491
      this.constructor = ChildClass;                                                                               // 492
    }                                                                                                              // 493
                                                                                                                   // 494
    for (var key in SuperClass) {                                                                                  // 495
      if (__hasProp.call(SuperClass, key)) {                                                                       // 496
        ChildClass[key] = SuperClass[key];                                                                         // 497
      }                                                                                                            // 498
    }                                                                                                              // 499
                                                                                                                   // 500
    BaseConstructor.prototype = SuperClass.prototype;                                                              // 501
    ChildClass.prototype = new BaseConstructor();                                                                  // 502
    ChildClass.__super__ = SuperClass.prototype;                                                                   // 503
                                                                                                                   // 504
    return ChildClass;                                                                                             // 505
  };                                                                                                               // 506
                                                                                                                   // 507
  function getMethods (theClass) {                                                                                 // 508
    var proto = theClass.prototype;                                                                                // 509
                                                                                                                   // 510
    var methods = [];                                                                                              // 511
                                                                                                                   // 512
    for (var methodName in proto) {                                                                                // 513
      var m = proto[methodName];                                                                                   // 514
                                                                                                                   // 515
      if (typeof m !== 'function') {                                                                               // 516
        continue;                                                                                                  // 517
      }                                                                                                            // 518
                                                                                                                   // 519
      if (methodName === 'constructor') {                                                                          // 520
        continue;                                                                                                  // 521
      }                                                                                                            // 522
                                                                                                                   // 523
      methods.push(methodName);                                                                                    // 524
    }                                                                                                              // 525
                                                                                                                   // 526
    return methods;                                                                                                // 527
  }                                                                                                                // 528
                                                                                                                   // 529
  Utils.Decorate = function (SuperClass, DecoratorClass) {                                                         // 530
    var decoratedMethods = getMethods(DecoratorClass);                                                             // 531
    var superMethods = getMethods(SuperClass);                                                                     // 532
                                                                                                                   // 533
    function DecoratedClass () {                                                                                   // 534
      var unshift = Array.prototype.unshift;                                                                       // 535
                                                                                                                   // 536
      var argCount = DecoratorClass.prototype.constructor.length;                                                  // 537
                                                                                                                   // 538
      var calledConstructor = SuperClass.prototype.constructor;                                                    // 539
                                                                                                                   // 540
      if (argCount > 0) {                                                                                          // 541
        unshift.call(arguments, SuperClass.prototype.constructor);                                                 // 542
                                                                                                                   // 543
        calledConstructor = DecoratorClass.prototype.constructor;                                                  // 544
      }                                                                                                            // 545
                                                                                                                   // 546
      calledConstructor.apply(this, arguments);                                                                    // 547
    }                                                                                                              // 548
                                                                                                                   // 549
    DecoratorClass.displayName = SuperClass.displayName;                                                           // 550
                                                                                                                   // 551
    function ctr () {                                                                                              // 552
      this.constructor = DecoratedClass;                                                                           // 553
    }                                                                                                              // 554
                                                                                                                   // 555
    DecoratedClass.prototype = new ctr();                                                                          // 556
                                                                                                                   // 557
    for (var m = 0; m < superMethods.length; m++) {                                                                // 558
        var superMethod = superMethods[m];                                                                         // 559
                                                                                                                   // 560
        DecoratedClass.prototype[superMethod] =                                                                    // 561
          SuperClass.prototype[superMethod];                                                                       // 562
    }                                                                                                              // 563
                                                                                                                   // 564
    var calledMethod = function (methodName) {                                                                     // 565
      // Stub out the original method if it's not decorating an actual method                                      // 566
      var originalMethod = function () {};                                                                         // 567
                                                                                                                   // 568
      if (methodName in DecoratedClass.prototype) {                                                                // 569
        originalMethod = DecoratedClass.prototype[methodName];                                                     // 570
      }                                                                                                            // 571
                                                                                                                   // 572
      var decoratedMethod = DecoratorClass.prototype[methodName];                                                  // 573
                                                                                                                   // 574
      return function () {                                                                                         // 575
        var unshift = Array.prototype.unshift;                                                                     // 576
                                                                                                                   // 577
        unshift.call(arguments, originalMethod);                                                                   // 578
                                                                                                                   // 579
        return decoratedMethod.apply(this, arguments);                                                             // 580
      };                                                                                                           // 581
    };                                                                                                             // 582
                                                                                                                   // 583
    for (var d = 0; d < decoratedMethods.length; d++) {                                                            // 584
      var decoratedMethod = decoratedMethods[d];                                                                   // 585
                                                                                                                   // 586
      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);                                   // 587
    }                                                                                                              // 588
                                                                                                                   // 589
    return DecoratedClass;                                                                                         // 590
  };                                                                                                               // 591
                                                                                                                   // 592
  var Observable = function () {                                                                                   // 593
    this.listeners = {};                                                                                           // 594
  };                                                                                                               // 595
                                                                                                                   // 596
  Observable.prototype.on = function (event, callback) {                                                           // 597
    this.listeners = this.listeners || {};                                                                         // 598
                                                                                                                   // 599
    if (event in this.listeners) {                                                                                 // 600
      this.listeners[event].push(callback);                                                                        // 601
    } else {                                                                                                       // 602
      this.listeners[event] = [callback];                                                                          // 603
    }                                                                                                              // 604
  };                                                                                                               // 605
                                                                                                                   // 606
  Observable.prototype.trigger = function (event) {                                                                // 607
    var slice = Array.prototype.slice;                                                                             // 608
    var params = slice.call(arguments, 1);                                                                         // 609
                                                                                                                   // 610
    this.listeners = this.listeners || {};                                                                         // 611
                                                                                                                   // 612
    // Params should always come in as an array                                                                    // 613
    if (params == null) {                                                                                          // 614
      params = [];                                                                                                 // 615
    }                                                                                                              // 616
                                                                                                                   // 617
    // If there are no arguments to the event, use a temporary object                                              // 618
    if (params.length === 0) {                                                                                     // 619
      params.push({});                                                                                             // 620
    }                                                                                                              // 621
                                                                                                                   // 622
    // Set the `_type` of the first object to the event                                                            // 623
    params[0]._type = event;                                                                                       // 624
                                                                                                                   // 625
    if (event in this.listeners) {                                                                                 // 626
      this.invoke(this.listeners[event], slice.call(arguments, 1));                                                // 627
    }                                                                                                              // 628
                                                                                                                   // 629
    if ('*' in this.listeners) {                                                                                   // 630
      this.invoke(this.listeners['*'], arguments);                                                                 // 631
    }                                                                                                              // 632
  };                                                                                                               // 633
                                                                                                                   // 634
  Observable.prototype.invoke = function (listeners, params) {                                                     // 635
    for (var i = 0, len = listeners.length; i < len; i++) {                                                        // 636
      listeners[i].apply(this, params);                                                                            // 637
    }                                                                                                              // 638
  };                                                                                                               // 639
                                                                                                                   // 640
  Utils.Observable = Observable;                                                                                   // 641
                                                                                                                   // 642
  Utils.generateChars = function (length) {                                                                        // 643
    var chars = '';                                                                                                // 644
                                                                                                                   // 645
    for (var i = 0; i < length; i++) {                                                                             // 646
      var randomChar = Math.floor(Math.random() * 36);                                                             // 647
      chars += randomChar.toString(36);                                                                            // 648
    }                                                                                                              // 649
                                                                                                                   // 650
    return chars;                                                                                                  // 651
  };                                                                                                               // 652
                                                                                                                   // 653
  Utils.bind = function (func, context) {                                                                          // 654
    return function () {                                                                                           // 655
      func.apply(context, arguments);                                                                              // 656
    };                                                                                                             // 657
  };                                                                                                               // 658
                                                                                                                   // 659
  Utils._convertData = function (data) {                                                                           // 660
    for (var originalKey in data) {                                                                                // 661
      var keys = originalKey.split('-');                                                                           // 662
                                                                                                                   // 663
      var dataLevel = data;                                                                                        // 664
                                                                                                                   // 665
      if (keys.length === 1) {                                                                                     // 666
        continue;                                                                                                  // 667
      }                                                                                                            // 668
                                                                                                                   // 669
      for (var k = 0; k < keys.length; k++) {                                                                      // 670
        var key = keys[k];                                                                                         // 671
                                                                                                                   // 672
        // Lowercase the first letter                                                                              // 673
        // By default, dash-separated becomes camelCase                                                            // 674
        key = key.substring(0, 1).toLowerCase() + key.substring(1);                                                // 675
                                                                                                                   // 676
        if (!(key in dataLevel)) {                                                                                 // 677
          dataLevel[key] = {};                                                                                     // 678
        }                                                                                                          // 679
                                                                                                                   // 680
        if (k == keys.length - 1) {                                                                                // 681
          dataLevel[key] = data[originalKey];                                                                      // 682
        }                                                                                                          // 683
                                                                                                                   // 684
        dataLevel = dataLevel[key];                                                                                // 685
      }                                                                                                            // 686
                                                                                                                   // 687
      delete data[originalKey];                                                                                    // 688
    }                                                                                                              // 689
                                                                                                                   // 690
    return data;                                                                                                   // 691
  };                                                                                                               // 692
                                                                                                                   // 693
  Utils.hasScroll = function (index, el) {                                                                         // 694
    // Adapted from the function created by @ShadowScripter                                                        // 695
    // and adapted by @BillBarry on the Stack Exchange Code Review website.                                        // 696
    // The original code can be found at                                                                           // 697
    // http://codereview.stackexchange.com/q/13338                                                                 // 698
    // and was designed to be used with the Sizzle selector engine.                                                // 699
                                                                                                                   // 700
    var $el = $(el);                                                                                               // 701
    var overflowX = el.style.overflowX;                                                                            // 702
    var overflowY = el.style.overflowY;                                                                            // 703
                                                                                                                   // 704
    //Check both x and y declarations                                                                              // 705
    if (overflowX === overflowY &&                                                                                 // 706
        (overflowY === 'hidden' || overflowY === 'visible')) {                                                     // 707
      return false;                                                                                                // 708
    }                                                                                                              // 709
                                                                                                                   // 710
    if (overflowX === 'scroll' || overflowY === 'scroll') {                                                        // 711
      return true;                                                                                                 // 712
    }                                                                                                              // 713
                                                                                                                   // 714
    return ($el.innerHeight() < el.scrollHeight ||                                                                 // 715
      $el.innerWidth() < el.scrollWidth);                                                                          // 716
  };                                                                                                               // 717
                                                                                                                   // 718
  Utils.escapeMarkup = function (markup) {                                                                         // 719
    var replaceMap = {                                                                                             // 720
      '\\': '&#92;',                                                                                               // 721
      '&': '&amp;',                                                                                                // 722
      '<': '&lt;',                                                                                                 // 723
      '>': '&gt;',                                                                                                 // 724
      '"': '&quot;',                                                                                               // 725
      '\'': '&#39;',                                                                                               // 726
      '/': '&#47;'                                                                                                 // 727
    };                                                                                                             // 728
                                                                                                                   // 729
    // Do not try to escape the markup if it's not a string                                                        // 730
    if (typeof markup !== 'string') {                                                                              // 731
      return markup;                                                                                               // 732
    }                                                                                                              // 733
                                                                                                                   // 734
    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {                                               // 735
      return replaceMap[match];                                                                                    // 736
    });                                                                                                            // 737
  };                                                                                                               // 738
                                                                                                                   // 739
  // Append an array of jQuery nodes to a given element.                                                           // 740
  Utils.appendMany = function ($element, $nodes) {                                                                 // 741
    // jQuery 1.7.x does not support $.fn.append() with an array                                                   // 742
    // Fall back to a jQuery object collection using $.fn.add()                                                    // 743
    if ($.fn.jquery.substr(0, 3) === '1.7') {                                                                      // 744
      var $jqNodes = $();                                                                                          // 745
                                                                                                                   // 746
      $.map($nodes, function (node) {                                                                              // 747
        $jqNodes = $jqNodes.add(node);                                                                             // 748
      });                                                                                                          // 749
                                                                                                                   // 750
      $nodes = $jqNodes;                                                                                           // 751
    }                                                                                                              // 752
                                                                                                                   // 753
    $element.append($nodes);                                                                                       // 754
  };                                                                                                               // 755
                                                                                                                   // 756
  return Utils;                                                                                                    // 757
});                                                                                                                // 758
                                                                                                                   // 759
S2.define('select2/results',[                                                                                      // 760
  'jquery',                                                                                                        // 761
  './utils'                                                                                                        // 762
], function ($, Utils) {                                                                                           // 763
  function Results ($element, options, dataAdapter) {                                                              // 764
    this.$element = $element;                                                                                      // 765
    this.data = dataAdapter;                                                                                       // 766
    this.options = options;                                                                                        // 767
                                                                                                                   // 768
    Results.__super__.constructor.call(this);                                                                      // 769
  }                                                                                                                // 770
                                                                                                                   // 771
  Utils.Extend(Results, Utils.Observable);                                                                         // 772
                                                                                                                   // 773
  Results.prototype.render = function () {                                                                         // 774
    var $results = $(                                                                                              // 775
      '<ul class="select2-results__options" role="tree"></ul>'                                                     // 776
    );                                                                                                             // 777
                                                                                                                   // 778
    if (this.options.get('multiple')) {                                                                            // 779
      $results.attr('aria-multiselectable', 'true');                                                               // 780
    }                                                                                                              // 781
                                                                                                                   // 782
    this.$results = $results;                                                                                      // 783
                                                                                                                   // 784
    return $results;                                                                                               // 785
  };                                                                                                               // 786
                                                                                                                   // 787
  Results.prototype.clear = function () {                                                                          // 788
    this.$results.empty();                                                                                         // 789
  };                                                                                                               // 790
                                                                                                                   // 791
  Results.prototype.displayMessage = function (params) {                                                           // 792
    var escapeMarkup = this.options.get('escapeMarkup');                                                           // 793
                                                                                                                   // 794
    this.clear();                                                                                                  // 795
    this.hideLoading();                                                                                            // 796
                                                                                                                   // 797
    var $message = $(                                                                                              // 798
      '<li role="treeitem" aria-live="assertive"' +                                                                // 799
      ' class="select2-results__option"></li>'                                                                     // 800
    );                                                                                                             // 801
                                                                                                                   // 802
    var message = this.options.get('translations').get(params.message);                                            // 803
                                                                                                                   // 804
    $message.append(                                                                                               // 805
      escapeMarkup(                                                                                                // 806
        message(params.args)                                                                                       // 807
      )                                                                                                            // 808
    );                                                                                                             // 809
                                                                                                                   // 810
    $message[0].className += ' select2-results__message';                                                          // 811
                                                                                                                   // 812
    this.$results.append($message);                                                                                // 813
  };                                                                                                               // 814
                                                                                                                   // 815
  Results.prototype.hideMessages = function () {                                                                   // 816
    this.$results.find('.select2-results__message').remove();                                                      // 817
  };                                                                                                               // 818
                                                                                                                   // 819
  Results.prototype.append = function (data) {                                                                     // 820
    this.hideLoading();                                                                                            // 821
                                                                                                                   // 822
    var $options = [];                                                                                             // 823
                                                                                                                   // 824
    if (data.results == null || data.results.length === 0) {                                                       // 825
      if (this.$results.children().length === 0) {                                                                 // 826
        this.trigger('results:message', {                                                                          // 827
          message: 'noResults'                                                                                     // 828
        });                                                                                                        // 829
      }                                                                                                            // 830
                                                                                                                   // 831
      return;                                                                                                      // 832
    }                                                                                                              // 833
                                                                                                                   // 834
    data.results = this.sort(data.results);                                                                        // 835
                                                                                                                   // 836
    for (var d = 0; d < data.results.length; d++) {                                                                // 837
      var item = data.results[d];                                                                                  // 838
                                                                                                                   // 839
      var $option = this.option(item);                                                                             // 840
                                                                                                                   // 841
      $options.push($option);                                                                                      // 842
    }                                                                                                              // 843
                                                                                                                   // 844
    this.$results.append($options);                                                                                // 845
  };                                                                                                               // 846
                                                                                                                   // 847
  Results.prototype.position = function ($results, $dropdown) {                                                    // 848
    var $resultsContainer = $dropdown.find('.select2-results');                                                    // 849
    $resultsContainer.append($results);                                                                            // 850
  };                                                                                                               // 851
                                                                                                                   // 852
  Results.prototype.sort = function (data) {                                                                       // 853
    var sorter = this.options.get('sorter');                                                                       // 854
                                                                                                                   // 855
    return sorter(data);                                                                                           // 856
  };                                                                                                               // 857
                                                                                                                   // 858
  Results.prototype.highlightFirstItem = function () {                                                             // 859
    var $options = this.$results                                                                                   // 860
      .find('.select2-results__option[aria-selected]');                                                            // 861
                                                                                                                   // 862
    var $selected = $options.filter('[aria-selected=true]');                                                       // 863
                                                                                                                   // 864
    // Check if there are any selected options                                                                     // 865
    if ($selected.length > 0) {                                                                                    // 866
      // If there are selected options, highlight the first                                                        // 867
      $selected.first().trigger('mouseenter');                                                                     // 868
    } else {                                                                                                       // 869
      // If there are no selected options, highlight the first option                                              // 870
      // in the dropdown                                                                                           // 871
      $options.first().trigger('mouseenter');                                                                      // 872
    }                                                                                                              // 873
                                                                                                                   // 874
    this.ensureHighlightVisible();                                                                                 // 875
  };                                                                                                               // 876
                                                                                                                   // 877
  Results.prototype.setClasses = function () {                                                                     // 878
    var self = this;                                                                                               // 879
                                                                                                                   // 880
    this.data.current(function (selected) {                                                                        // 881
      var selectedIds = $.map(selected, function (s) {                                                             // 882
        return s.id.toString();                                                                                    // 883
      });                                                                                                          // 884
                                                                                                                   // 885
      var $options = self.$results                                                                                 // 886
        .find('.select2-results__option[aria-selected]');                                                          // 887
                                                                                                                   // 888
      $options.each(function () {                                                                                  // 889
        var $option = $(this);                                                                                     // 890
                                                                                                                   // 891
        var item = $.data(this, 'data');                                                                           // 892
                                                                                                                   // 893
        // id needs to be converted to a string when comparing                                                     // 894
        var id = '' + item.id;                                                                                     // 895
                                                                                                                   // 896
        if ((item.element != null && item.element.selected) ||                                                     // 897
            (item.element == null && $.inArray(id, selectedIds) > -1)) {                                           // 898
          $option.attr('aria-selected', 'true');                                                                   // 899
        } else {                                                                                                   // 900
          $option.attr('aria-selected', 'false');                                                                  // 901
        }                                                                                                          // 902
      });                                                                                                          // 903
                                                                                                                   // 904
    });                                                                                                            // 905
  };                                                                                                               // 906
                                                                                                                   // 907
  Results.prototype.showLoading = function (params) {                                                              // 908
    this.hideLoading();                                                                                            // 909
                                                                                                                   // 910
    var loadingMore = this.options.get('translations').get('searching');                                           // 911
                                                                                                                   // 912
    var loading = {                                                                                                // 913
      disabled: true,                                                                                              // 914
      loading: true,                                                                                               // 915
      text: loadingMore(params)                                                                                    // 916
    };                                                                                                             // 917
    var $loading = this.option(loading);                                                                           // 918
    $loading.className += ' loading-results';                                                                      // 919
                                                                                                                   // 920
    this.$results.prepend($loading);                                                                               // 921
  };                                                                                                               // 922
                                                                                                                   // 923
  Results.prototype.hideLoading = function () {                                                                    // 924
    this.$results.find('.loading-results').remove();                                                               // 925
  };                                                                                                               // 926
                                                                                                                   // 927
  Results.prototype.option = function (data) {                                                                     // 928
    var option = document.createElement('li');                                                                     // 929
    option.className = 'select2-results__option';                                                                  // 930
                                                                                                                   // 931
    var attrs = {                                                                                                  // 932
      'role': 'treeitem',                                                                                          // 933
      'aria-selected': 'false'                                                                                     // 934
    };                                                                                                             // 935
                                                                                                                   // 936
    if (data.disabled) {                                                                                           // 937
      delete attrs['aria-selected'];                                                                               // 938
      attrs['aria-disabled'] = 'true';                                                                             // 939
    }                                                                                                              // 940
                                                                                                                   // 941
    if (data.id == null) {                                                                                         // 942
      delete attrs['aria-selected'];                                                                               // 943
    }                                                                                                              // 944
                                                                                                                   // 945
    if (data._resultId != null) {                                                                                  // 946
      option.id = data._resultId;                                                                                  // 947
    }                                                                                                              // 948
                                                                                                                   // 949
    if (data.title) {                                                                                              // 950
      option.title = data.title;                                                                                   // 951
    }                                                                                                              // 952
                                                                                                                   // 953
    if (data.children) {                                                                                           // 954
      attrs.role = 'group';                                                                                        // 955
      attrs['aria-label'] = data.text;                                                                             // 956
      delete attrs['aria-selected'];                                                                               // 957
    }                                                                                                              // 958
                                                                                                                   // 959
    for (var attr in attrs) {                                                                                      // 960
      var val = attrs[attr];                                                                                       // 961
                                                                                                                   // 962
      option.setAttribute(attr, val);                                                                              // 963
    }                                                                                                              // 964
                                                                                                                   // 965
    if (data.children) {                                                                                           // 966
      var $option = $(option);                                                                                     // 967
                                                                                                                   // 968
      var label = document.createElement('strong');                                                                // 969
      label.className = 'select2-results__group';                                                                  // 970
                                                                                                                   // 971
      var $label = $(label);                                                                                       // 972
      this.template(data, label);                                                                                  // 973
                                                                                                                   // 974
      var $children = [];                                                                                          // 975
                                                                                                                   // 976
      for (var c = 0; c < data.children.length; c++) {                                                             // 977
        var child = data.children[c];                                                                              // 978
                                                                                                                   // 979
        var $child = this.option(child);                                                                           // 980
                                                                                                                   // 981
        $children.push($child);                                                                                    // 982
      }                                                                                                            // 983
                                                                                                                   // 984
      var $childrenContainer = $('<ul></ul>', {                                                                    // 985
        'class': 'select2-results__options select2-results__options--nested'                                       // 986
      });                                                                                                          // 987
                                                                                                                   // 988
      $childrenContainer.append($children);                                                                        // 989
                                                                                                                   // 990
      $option.append(label);                                                                                       // 991
      $option.append($childrenContainer);                                                                          // 992
    } else {                                                                                                       // 993
      this.template(data, option);                                                                                 // 994
    }                                                                                                              // 995
                                                                                                                   // 996
    $.data(option, 'data', data);                                                                                  // 997
                                                                                                                   // 998
    return option;                                                                                                 // 999
  };                                                                                                               // 1000
                                                                                                                   // 1001
  Results.prototype.bind = function (container, $container) {                                                      // 1002
    var self = this;                                                                                               // 1003
                                                                                                                   // 1004
    var id = container.id + '-results';                                                                            // 1005
                                                                                                                   // 1006
    this.$results.attr('id', id);                                                                                  // 1007
                                                                                                                   // 1008
    container.on('results:all', function (params) {                                                                // 1009
      self.clear();                                                                                                // 1010
      self.append(params.data);                                                                                    // 1011
                                                                                                                   // 1012
      if (container.isOpen()) {                                                                                    // 1013
        self.setClasses();                                                                                         // 1014
        self.highlightFirstItem();                                                                                 // 1015
      }                                                                                                            // 1016
    });                                                                                                            // 1017
                                                                                                                   // 1018
    container.on('results:append', function (params) {                                                             // 1019
      self.append(params.data);                                                                                    // 1020
                                                                                                                   // 1021
      if (container.isOpen()) {                                                                                    // 1022
        self.setClasses();                                                                                         // 1023
      }                                                                                                            // 1024
    });                                                                                                            // 1025
                                                                                                                   // 1026
    container.on('query', function (params) {                                                                      // 1027
      self.hideMessages();                                                                                         // 1028
      self.showLoading(params);                                                                                    // 1029
    });                                                                                                            // 1030
                                                                                                                   // 1031
    container.on('select', function () {                                                                           // 1032
      if (!container.isOpen()) {                                                                                   // 1033
        return;                                                                                                    // 1034
      }                                                                                                            // 1035
                                                                                                                   // 1036
      self.setClasses();                                                                                           // 1037
      self.highlightFirstItem();                                                                                   // 1038
    });                                                                                                            // 1039
                                                                                                                   // 1040
    container.on('unselect', function () {                                                                         // 1041
      if (!container.isOpen()) {                                                                                   // 1042
        return;                                                                                                    // 1043
      }                                                                                                            // 1044
                                                                                                                   // 1045
      self.setClasses();                                                                                           // 1046
      self.highlightFirstItem();                                                                                   // 1047
    });                                                                                                            // 1048
                                                                                                                   // 1049
    container.on('open', function () {                                                                             // 1050
      // When the dropdown is open, aria-expended="true"                                                           // 1051
      self.$results.attr('aria-expanded', 'true');                                                                 // 1052
      self.$results.attr('aria-hidden', 'false');                                                                  // 1053
                                                                                                                   // 1054
      self.setClasses();                                                                                           // 1055
      self.ensureHighlightVisible();                                                                               // 1056
    });                                                                                                            // 1057
                                                                                                                   // 1058
    container.on('close', function () {                                                                            // 1059
      // When the dropdown is closed, aria-expended="false"                                                        // 1060
      self.$results.attr('aria-expanded', 'false');                                                                // 1061
      self.$results.attr('aria-hidden', 'true');                                                                   // 1062
      self.$results.removeAttr('aria-activedescendant');                                                           // 1063
    });                                                                                                            // 1064
                                                                                                                   // 1065
    container.on('results:toggle', function () {                                                                   // 1066
      var $highlighted = self.getHighlightedResults();                                                             // 1067
                                                                                                                   // 1068
      if ($highlighted.length === 0) {                                                                             // 1069
        return;                                                                                                    // 1070
      }                                                                                                            // 1071
                                                                                                                   // 1072
      $highlighted.trigger('mouseup');                                                                             // 1073
    });                                                                                                            // 1074
                                                                                                                   // 1075
    container.on('results:select', function () {                                                                   // 1076
      var $highlighted = self.getHighlightedResults();                                                             // 1077
                                                                                                                   // 1078
      if ($highlighted.length === 0) {                                                                             // 1079
        return;                                                                                                    // 1080
      }                                                                                                            // 1081
                                                                                                                   // 1082
      var data = $highlighted.data('data');                                                                        // 1083
                                                                                                                   // 1084
      if ($highlighted.attr('aria-selected') == 'true') {                                                          // 1085
        self.trigger('close', {});                                                                                 // 1086
      } else {                                                                                                     // 1087
        self.trigger('select', {                                                                                   // 1088
          data: data                                                                                               // 1089
        });                                                                                                        // 1090
      }                                                                                                            // 1091
    });                                                                                                            // 1092
                                                                                                                   // 1093
    container.on('results:previous', function () {                                                                 // 1094
      var $highlighted = self.getHighlightedResults();                                                             // 1095
                                                                                                                   // 1096
      var $options = self.$results.find('[aria-selected]');                                                        // 1097
                                                                                                                   // 1098
      var currentIndex = $options.index($highlighted);                                                             // 1099
                                                                                                                   // 1100
      // If we are already at te top, don't move further                                                           // 1101
      if (currentIndex === 0) {                                                                                    // 1102
        return;                                                                                                    // 1103
      }                                                                                                            // 1104
                                                                                                                   // 1105
      var nextIndex = currentIndex - 1;                                                                            // 1106
                                                                                                                   // 1107
      // If none are highlighted, highlight the first                                                              // 1108
      if ($highlighted.length === 0) {                                                                             // 1109
        nextIndex = 0;                                                                                             // 1110
      }                                                                                                            // 1111
                                                                                                                   // 1112
      var $next = $options.eq(nextIndex);                                                                          // 1113
                                                                                                                   // 1114
      $next.trigger('mouseenter');                                                                                 // 1115
                                                                                                                   // 1116
      var currentOffset = self.$results.offset().top;                                                              // 1117
      var nextTop = $next.offset().top;                                                                            // 1118
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);                                      // 1119
                                                                                                                   // 1120
      if (nextIndex === 0) {                                                                                       // 1121
        self.$results.scrollTop(0);                                                                                // 1122
      } else if (nextTop - currentOffset < 0) {                                                                    // 1123
        self.$results.scrollTop(nextOffset);                                                                       // 1124
      }                                                                                                            // 1125
    });                                                                                                            // 1126
                                                                                                                   // 1127
    container.on('results:next', function () {                                                                     // 1128
      var $highlighted = self.getHighlightedResults();                                                             // 1129
                                                                                                                   // 1130
      var $options = self.$results.find('[aria-selected]');                                                        // 1131
                                                                                                                   // 1132
      var currentIndex = $options.index($highlighted);                                                             // 1133
                                                                                                                   // 1134
      var nextIndex = currentIndex + 1;                                                                            // 1135
                                                                                                                   // 1136
      // If we are at the last option, stay there                                                                  // 1137
      if (nextIndex >= $options.length) {                                                                          // 1138
        return;                                                                                                    // 1139
      }                                                                                                            // 1140
                                                                                                                   // 1141
      var $next = $options.eq(nextIndex);                                                                          // 1142
                                                                                                                   // 1143
      $next.trigger('mouseenter');                                                                                 // 1144
                                                                                                                   // 1145
      var currentOffset = self.$results.offset().top +                                                             // 1146
        self.$results.outerHeight(false);                                                                          // 1147
      var nextBottom = $next.offset().top + $next.outerHeight(false);                                              // 1148
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;                                     // 1149
                                                                                                                   // 1150
      if (nextIndex === 0) {                                                                                       // 1151
        self.$results.scrollTop(0);                                                                                // 1152
      } else if (nextBottom > currentOffset) {                                                                     // 1153
        self.$results.scrollTop(nextOffset);                                                                       // 1154
      }                                                                                                            // 1155
    });                                                                                                            // 1156
                                                                                                                   // 1157
    container.on('results:focus', function (params) {                                                              // 1158
      params.element.addClass('select2-results__option--highlighted');                                             // 1159
    });                                                                                                            // 1160
                                                                                                                   // 1161
    container.on('results:message', function (params) {                                                            // 1162
      self.displayMessage(params);                                                                                 // 1163
    });                                                                                                            // 1164
                                                                                                                   // 1165
    if ($.fn.mousewheel) {                                                                                         // 1166
      this.$results.on('mousewheel', function (e) {                                                                // 1167
        var top = self.$results.scrollTop();                                                                       // 1168
                                                                                                                   // 1169
        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;                                           // 1170
                                                                                                                   // 1171
        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;                                                         // 1172
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();                                         // 1173
                                                                                                                   // 1174
        if (isAtTop) {                                                                                             // 1175
          self.$results.scrollTop(0);                                                                              // 1176
                                                                                                                   // 1177
          e.preventDefault();                                                                                      // 1178
          e.stopPropagation();                                                                                     // 1179
        } else if (isAtBottom) {                                                                                   // 1180
          self.$results.scrollTop(                                                                                 // 1181
            self.$results.get(0).scrollHeight - self.$results.height()                                             // 1182
          );                                                                                                       // 1183
                                                                                                                   // 1184
          e.preventDefault();                                                                                      // 1185
          e.stopPropagation();                                                                                     // 1186
        }                                                                                                          // 1187
      });                                                                                                          // 1188
    }                                                                                                              // 1189
                                                                                                                   // 1190
    this.$results.on('mouseup', '.select2-results__option[aria-selected]',                                         // 1191
      function (evt) {                                                                                             // 1192
      var $this = $(this);                                                                                         // 1193
                                                                                                                   // 1194
      var data = $this.data('data');                                                                               // 1195
                                                                                                                   // 1196
      if ($this.attr('aria-selected') === 'true') {                                                                // 1197
        if (self.options.get('multiple')) {                                                                        // 1198
          self.trigger('unselect', {                                                                               // 1199
            originalEvent: evt,                                                                                    // 1200
            data: data                                                                                             // 1201
          });                                                                                                      // 1202
        } else {                                                                                                   // 1203
          self.trigger('close', {});                                                                               // 1204
        }                                                                                                          // 1205
                                                                                                                   // 1206
        return;                                                                                                    // 1207
      }                                                                                                            // 1208
                                                                                                                   // 1209
      self.trigger('select', {                                                                                     // 1210
        originalEvent: evt,                                                                                        // 1211
        data: data                                                                                                 // 1212
      });                                                                                                          // 1213
    });                                                                                                            // 1214
                                                                                                                   // 1215
    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',                                      // 1216
      function (evt) {                                                                                             // 1217
      var data = $(this).data('data');                                                                             // 1218
                                                                                                                   // 1219
      self.getHighlightedResults()                                                                                 // 1220
          .removeClass('select2-results__option--highlighted');                                                    // 1221
                                                                                                                   // 1222
      self.trigger('results:focus', {                                                                              // 1223
        data: data,                                                                                                // 1224
        element: $(this)                                                                                           // 1225
      });                                                                                                          // 1226
    });                                                                                                            // 1227
  };                                                                                                               // 1228
                                                                                                                   // 1229
  Results.prototype.getHighlightedResults = function () {                                                          // 1230
    var $highlighted = this.$results                                                                               // 1231
    .find('.select2-results__option--highlighted');                                                                // 1232
                                                                                                                   // 1233
    return $highlighted;                                                                                           // 1234
  };                                                                                                               // 1235
                                                                                                                   // 1236
  Results.prototype.destroy = function () {                                                                        // 1237
    this.$results.remove();                                                                                        // 1238
  };                                                                                                               // 1239
                                                                                                                   // 1240
  Results.prototype.ensureHighlightVisible = function () {                                                         // 1241
    var $highlighted = this.getHighlightedResults();                                                               // 1242
                                                                                                                   // 1243
    if ($highlighted.length === 0) {                                                                               // 1244
      return;                                                                                                      // 1245
    }                                                                                                              // 1246
                                                                                                                   // 1247
    var $options = this.$results.find('[aria-selected]');                                                          // 1248
                                                                                                                   // 1249
    var currentIndex = $options.index($highlighted);                                                               // 1250
                                                                                                                   // 1251
    var currentOffset = this.$results.offset().top;                                                                // 1252
    var nextTop = $highlighted.offset().top;                                                                       // 1253
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);                                        // 1254
                                                                                                                   // 1255
    var offsetDelta = nextTop - currentOffset;                                                                     // 1256
    nextOffset -= $highlighted.outerHeight(false) * 2;                                                             // 1257
                                                                                                                   // 1258
    if (currentIndex <= 2) {                                                                                       // 1259
      this.$results.scrollTop(0);                                                                                  // 1260
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {                                     // 1261
      this.$results.scrollTop(nextOffset);                                                                         // 1262
    }                                                                                                              // 1263
  };                                                                                                               // 1264
                                                                                                                   // 1265
  Results.prototype.template = function (result, container) {                                                      // 1266
    var template = this.options.get('templateResult');                                                             // 1267
    var escapeMarkup = this.options.get('escapeMarkup');                                                           // 1268
                                                                                                                   // 1269
    var content = template(result, container);                                                                     // 1270
                                                                                                                   // 1271
    if (content == null) {                                                                                         // 1272
      container.style.display = 'none';                                                                            // 1273
    } else if (typeof content === 'string') {                                                                      // 1274
      container.innerHTML = escapeMarkup(content);                                                                 // 1275
    } else {                                                                                                       // 1276
      $(container).append(content);                                                                                // 1277
    }                                                                                                              // 1278
  };                                                                                                               // 1279
                                                                                                                   // 1280
  return Results;                                                                                                  // 1281
});                                                                                                                // 1282
                                                                                                                   // 1283
S2.define('select2/keys',[                                                                                         // 1284
                                                                                                                   // 1285
], function () {                                                                                                   // 1286
  var KEYS = {                                                                                                     // 1287
    BACKSPACE: 8,                                                                                                  // 1288
    TAB: 9,                                                                                                        // 1289
    ENTER: 13,                                                                                                     // 1290
    SHIFT: 16,                                                                                                     // 1291
    CTRL: 17,                                                                                                      // 1292
    ALT: 18,                                                                                                       // 1293
    ESC: 27,                                                                                                       // 1294
    SPACE: 32,                                                                                                     // 1295
    PAGE_UP: 33,                                                                                                   // 1296
    PAGE_DOWN: 34,                                                                                                 // 1297
    END: 35,                                                                                                       // 1298
    HOME: 36,                                                                                                      // 1299
    LEFT: 37,                                                                                                      // 1300
    UP: 38,                                                                                                        // 1301
    RIGHT: 39,                                                                                                     // 1302
    DOWN: 40,                                                                                                      // 1303
    DELETE: 46                                                                                                     // 1304
  };                                                                                                               // 1305
                                                                                                                   // 1306
  return KEYS;                                                                                                     // 1307
});                                                                                                                // 1308
                                                                                                                   // 1309
S2.define('select2/selection/base',[                                                                               // 1310
  'jquery',                                                                                                        // 1311
  '../utils',                                                                                                      // 1312
  '../keys'                                                                                                        // 1313
], function ($, Utils, KEYS) {                                                                                     // 1314
  function BaseSelection ($element, options) {                                                                     // 1315
    this.$element = $element;                                                                                      // 1316
    this.options = options;                                                                                        // 1317
                                                                                                                   // 1318
    BaseSelection.__super__.constructor.call(this);                                                                // 1319
  }                                                                                                                // 1320
                                                                                                                   // 1321
  Utils.Extend(BaseSelection, Utils.Observable);                                                                   // 1322
                                                                                                                   // 1323
  BaseSelection.prototype.render = function () {                                                                   // 1324
    var $selection = $(                                                                                            // 1325
      '<span class="select2-selection" role="combobox" ' +                                                         // 1326
      ' aria-haspopup="true" aria-expanded="false">' +                                                             // 1327
      '</span>'                                                                                                    // 1328
    );                                                                                                             // 1329
                                                                                                                   // 1330
    this._tabindex = 0;                                                                                            // 1331
                                                                                                                   // 1332
    if (this.$element.data('old-tabindex') != null) {                                                              // 1333
      this._tabindex = this.$element.data('old-tabindex');                                                         // 1334
    } else if (this.$element.attr('tabindex') != null) {                                                           // 1335
      this._tabindex = this.$element.attr('tabindex');                                                             // 1336
    }                                                                                                              // 1337
                                                                                                                   // 1338
    $selection.attr('title', this.$element.attr('title'));                                                         // 1339
    $selection.attr('tabindex', this._tabindex);                                                                   // 1340
                                                                                                                   // 1341
    this.$selection = $selection;                                                                                  // 1342
                                                                                                                   // 1343
    return $selection;                                                                                             // 1344
  };                                                                                                               // 1345
                                                                                                                   // 1346
  BaseSelection.prototype.bind = function (container, $container) {                                                // 1347
    var self = this;                                                                                               // 1348
                                                                                                                   // 1349
    var id = container.id + '-container';                                                                          // 1350
    var resultsId = container.id + '-results';                                                                     // 1351
                                                                                                                   // 1352
    this.container = container;                                                                                    // 1353
                                                                                                                   // 1354
    this.$selection.on('focus', function (evt) {                                                                   // 1355
      self.trigger('focus', evt);                                                                                  // 1356
    });                                                                                                            // 1357
                                                                                                                   // 1358
    this.$selection.on('blur', function (evt) {                                                                    // 1359
      self._handleBlur(evt);                                                                                       // 1360
    });                                                                                                            // 1361
                                                                                                                   // 1362
    this.$selection.on('keydown', function (evt) {                                                                 // 1363
      self.trigger('keypress', evt);                                                                               // 1364
                                                                                                                   // 1365
      if (evt.which === KEYS.SPACE) {                                                                              // 1366
        evt.preventDefault();                                                                                      // 1367
      }                                                                                                            // 1368
    });                                                                                                            // 1369
                                                                                                                   // 1370
    container.on('results:focus', function (params) {                                                              // 1371
      self.$selection.attr('aria-activedescendant', params.data._resultId);                                        // 1372
    });                                                                                                            // 1373
                                                                                                                   // 1374
    container.on('selection:update', function (params) {                                                           // 1375
      self.update(params.data);                                                                                    // 1376
    });                                                                                                            // 1377
                                                                                                                   // 1378
    container.on('open', function () {                                                                             // 1379
      // When the dropdown is open, aria-expanded="true"                                                           // 1380
      self.$selection.attr('aria-expanded', 'true');                                                               // 1381
      self.$selection.attr('aria-owns', resultsId);                                                                // 1382
                                                                                                                   // 1383
      self._attachCloseHandler(container);                                                                         // 1384
    });                                                                                                            // 1385
                                                                                                                   // 1386
    container.on('close', function () {                                                                            // 1387
      // When the dropdown is closed, aria-expanded="false"                                                        // 1388
      self.$selection.attr('aria-expanded', 'false');                                                              // 1389
      self.$selection.removeAttr('aria-activedescendant');                                                         // 1390
      self.$selection.removeAttr('aria-owns');                                                                     // 1391
                                                                                                                   // 1392
      self.$selection.focus();                                                                                     // 1393
                                                                                                                   // 1394
      self._detachCloseHandler(container);                                                                         // 1395
    });                                                                                                            // 1396
                                                                                                                   // 1397
    container.on('enable', function () {                                                                           // 1398
      self.$selection.attr('tabindex', self._tabindex);                                                            // 1399
    });                                                                                                            // 1400
                                                                                                                   // 1401
    container.on('disable', function () {                                                                          // 1402
      self.$selection.attr('tabindex', '-1');                                                                      // 1403
    });                                                                                                            // 1404
  };                                                                                                               // 1405
                                                                                                                   // 1406
  BaseSelection.prototype._handleBlur = function (evt) {                                                           // 1407
    var self = this;                                                                                               // 1408
                                                                                                                   // 1409
    // This needs to be delayed as the active element is the body when the tab                                     // 1410
    // key is pressed, possibly along with others.                                                                 // 1411
    window.setTimeout(function () {                                                                                // 1412
      // Don't trigger `blur` if the focus is still in the selection                                               // 1413
      if (                                                                                                         // 1414
        (document.activeElement == self.$selection[0]) ||                                                          // 1415
        ($.contains(self.$selection[0], document.activeElement))                                                   // 1416
      ) {                                                                                                          // 1417
        return;                                                                                                    // 1418
      }                                                                                                            // 1419
                                                                                                                   // 1420
      self.trigger('blur', evt);                                                                                   // 1421
    }, 1);                                                                                                         // 1422
  };                                                                                                               // 1423
                                                                                                                   // 1424
  BaseSelection.prototype._attachCloseHandler = function (container) {                                             // 1425
    var self = this;                                                                                               // 1426
                                                                                                                   // 1427
    $(document.body).on('mousedown.select2.' + container.id, function (e) {                                        // 1428
      var $target = $(e.target);                                                                                   // 1429
                                                                                                                   // 1430
      var $select = $target.closest('.select2');                                                                   // 1431
                                                                                                                   // 1432
      var $all = $('.select2.select2-container--open');                                                            // 1433
                                                                                                                   // 1434
      $all.each(function () {                                                                                      // 1435
        var $this = $(this);                                                                                       // 1436
                                                                                                                   // 1437
        if (this == $select[0]) {                                                                                  // 1438
          return;                                                                                                  // 1439
        }                                                                                                          // 1440
                                                                                                                   // 1441
        var $element = $this.data('element');                                                                      // 1442
                                                                                                                   // 1443
        $element.select2('close');                                                                                 // 1444
      });                                                                                                          // 1445
    });                                                                                                            // 1446
  };                                                                                                               // 1447
                                                                                                                   // 1448
  BaseSelection.prototype._detachCloseHandler = function (container) {                                             // 1449
    $(document.body).off('mousedown.select2.' + container.id);                                                     // 1450
  };                                                                                                               // 1451
                                                                                                                   // 1452
  BaseSelection.prototype.position = function ($selection, $container) {                                           // 1453
    var $selectionContainer = $container.find('.selection');                                                       // 1454
    $selectionContainer.append($selection);                                                                        // 1455
  };                                                                                                               // 1456
                                                                                                                   // 1457
  BaseSelection.prototype.destroy = function () {                                                                  // 1458
    this._detachCloseHandler(this.container);                                                                      // 1459
  };                                                                                                               // 1460
                                                                                                                   // 1461
  BaseSelection.prototype.update = function (data) {                                                               // 1462
    throw new Error('The `update` method must be defined in child classes.');                                      // 1463
  };                                                                                                               // 1464
                                                                                                                   // 1465
  return BaseSelection;                                                                                            // 1466
});                                                                                                                // 1467
                                                                                                                   // 1468
S2.define('select2/selection/single',[                                                                             // 1469
  'jquery',                                                                                                        // 1470
  './base',                                                                                                        // 1471
  '../utils',                                                                                                      // 1472
  '../keys'                                                                                                        // 1473
], function ($, BaseSelection, Utils, KEYS) {                                                                      // 1474
  function SingleSelection () {                                                                                    // 1475
    SingleSelection.__super__.constructor.apply(this, arguments);                                                  // 1476
  }                                                                                                                // 1477
                                                                                                                   // 1478
  Utils.Extend(SingleSelection, BaseSelection);                                                                    // 1479
                                                                                                                   // 1480
  SingleSelection.prototype.render = function () {                                                                 // 1481
    var $selection = SingleSelection.__super__.render.call(this);                                                  // 1482
                                                                                                                   // 1483
    $selection.addClass('select2-selection--single');                                                              // 1484
                                                                                                                   // 1485
    $selection.html(                                                                                               // 1486
      '<span class="select2-selection__rendered"></span>' +                                                        // 1487
      '<span class="select2-selection__arrow" role="presentation">' +                                              // 1488
        '<b role="presentation"></b>' +                                                                            // 1489
      '</span>'                                                                                                    // 1490
    );                                                                                                             // 1491
                                                                                                                   // 1492
    return $selection;                                                                                             // 1493
  };                                                                                                               // 1494
                                                                                                                   // 1495
  SingleSelection.prototype.bind = function (container, $container) {                                              // 1496
    var self = this;                                                                                               // 1497
                                                                                                                   // 1498
    SingleSelection.__super__.bind.apply(this, arguments);                                                         // 1499
                                                                                                                   // 1500
    var id = container.id + '-container';                                                                          // 1501
                                                                                                                   // 1502
    this.$selection.find('.select2-selection__rendered').attr('id', id);                                           // 1503
    this.$selection.attr('aria-labelledby', id);                                                                   // 1504
                                                                                                                   // 1505
    this.$selection.on('mousedown', function (evt) {                                                               // 1506
      // Only respond to left clicks                                                                               // 1507
      if (evt.which !== 1) {                                                                                       // 1508
        return;                                                                                                    // 1509
      }                                                                                                            // 1510
                                                                                                                   // 1511
      self.trigger('toggle', {                                                                                     // 1512
        originalEvent: evt                                                                                         // 1513
      });                                                                                                          // 1514
    });                                                                                                            // 1515
                                                                                                                   // 1516
    this.$selection.on('focus', function (evt) {                                                                   // 1517
      // User focuses on the container                                                                             // 1518
    });                                                                                                            // 1519
                                                                                                                   // 1520
    this.$selection.on('blur', function (evt) {                                                                    // 1521
      // User exits the container                                                                                  // 1522
    });                                                                                                            // 1523
                                                                                                                   // 1524
    container.on('focus', function (evt) {                                                                         // 1525
      if (!container.isOpen()) {                                                                                   // 1526
        self.$selection.focus();                                                                                   // 1527
      }                                                                                                            // 1528
    });                                                                                                            // 1529
                                                                                                                   // 1530
    container.on('selection:update', function (params) {                                                           // 1531
      self.update(params.data);                                                                                    // 1532
    });                                                                                                            // 1533
  };                                                                                                               // 1534
                                                                                                                   // 1535
  SingleSelection.prototype.clear = function () {                                                                  // 1536
    this.$selection.find('.select2-selection__rendered').empty();                                                  // 1537
  };                                                                                                               // 1538
                                                                                                                   // 1539
  SingleSelection.prototype.display = function (data, container) {                                                 // 1540
    var template = this.options.get('templateSelection');                                                          // 1541
    var escapeMarkup = this.options.get('escapeMarkup');                                                           // 1542
                                                                                                                   // 1543
    return escapeMarkup(template(data, container));                                                                // 1544
  };                                                                                                               // 1545
                                                                                                                   // 1546
  SingleSelection.prototype.selectionContainer = function () {                                                     // 1547
    return $('<span></span>');                                                                                     // 1548
  };                                                                                                               // 1549
                                                                                                                   // 1550
  SingleSelection.prototype.update = function (data) {                                                             // 1551
    if (data.length === 0) {                                                                                       // 1552
      this.clear();                                                                                                // 1553
      return;                                                                                                      // 1554
    }                                                                                                              // 1555
                                                                                                                   // 1556
    var selection = data[0];                                                                                       // 1557
                                                                                                                   // 1558
    var $rendered = this.$selection.find('.select2-selection__rendered');                                          // 1559
    var formatted = this.display(selection, $rendered);                                                            // 1560
                                                                                                                   // 1561
    $rendered.empty().append(formatted);                                                                           // 1562
    $rendered.prop('title', selection.title || selection.text);                                                    // 1563
  };                                                                                                               // 1564
                                                                                                                   // 1565
  return SingleSelection;                                                                                          // 1566
});                                                                                                                // 1567
                                                                                                                   // 1568
S2.define('select2/selection/multiple',[                                                                           // 1569
  'jquery',                                                                                                        // 1570
  './base',                                                                                                        // 1571
  '../utils'                                                                                                       // 1572
], function ($, BaseSelection, Utils) {                                                                            // 1573
  function MultipleSelection ($element, options) {                                                                 // 1574
    MultipleSelection.__super__.constructor.apply(this, arguments);                                                // 1575
  }                                                                                                                // 1576
                                                                                                                   // 1577
  Utils.Extend(MultipleSelection, BaseSelection);                                                                  // 1578
                                                                                                                   // 1579
  MultipleSelection.prototype.render = function () {                                                               // 1580
    var $selection = MultipleSelection.__super__.render.call(this);                                                // 1581
                                                                                                                   // 1582
    $selection.addClass('select2-selection--multiple');                                                            // 1583
                                                                                                                   // 1584
    $selection.html(                                                                                               // 1585
      '<ul class="select2-selection__rendered"></ul>'                                                              // 1586
    );                                                                                                             // 1587
                                                                                                                   // 1588
    return $selection;                                                                                             // 1589
  };                                                                                                               // 1590
                                                                                                                   // 1591
  MultipleSelection.prototype.bind = function (container, $container) {                                            // 1592
    var self = this;                                                                                               // 1593
                                                                                                                   // 1594
    MultipleSelection.__super__.bind.apply(this, arguments);                                                       // 1595
                                                                                                                   // 1596
    this.$selection.on('click', function (evt) {                                                                   // 1597
      self.trigger('toggle', {                                                                                     // 1598
        originalEvent: evt                                                                                         // 1599
      });                                                                                                          // 1600
    });                                                                                                            // 1601
                                                                                                                   // 1602
    this.$selection.on(                                                                                            // 1603
      'click',                                                                                                     // 1604
      '.select2-selection__choice__remove',                                                                        // 1605
      function (evt) {                                                                                             // 1606
        // Ignore the event if it is disabled                                                                      // 1607
        if (self.options.get('disabled')) {                                                                        // 1608
          return;                                                                                                  // 1609
        }                                                                                                          // 1610
                                                                                                                   // 1611
        var $remove = $(this);                                                                                     // 1612
        var $selection = $remove.parent();                                                                         // 1613
                                                                                                                   // 1614
        var data = $selection.data('data');                                                                        // 1615
                                                                                                                   // 1616
        self.trigger('unselect', {                                                                                 // 1617
          originalEvent: evt,                                                                                      // 1618
          data: data                                                                                               // 1619
        });                                                                                                        // 1620
      }                                                                                                            // 1621
    );                                                                                                             // 1622
  };                                                                                                               // 1623
                                                                                                                   // 1624
  MultipleSelection.prototype.clear = function () {                                                                // 1625
    this.$selection.find('.select2-selection__rendered').empty();                                                  // 1626
  };                                                                                                               // 1627
                                                                                                                   // 1628
  MultipleSelection.prototype.display = function (data, container) {                                               // 1629
    var template = this.options.get('templateSelection');                                                          // 1630
    var escapeMarkup = this.options.get('escapeMarkup');                                                           // 1631
                                                                                                                   // 1632
    return escapeMarkup(template(data, container));                                                                // 1633
  };                                                                                                               // 1634
                                                                                                                   // 1635
  MultipleSelection.prototype.selectionContainer = function () {                                                   // 1636
    var $container = $(                                                                                            // 1637
      '<li class="select2-selection__choice">' +                                                                   // 1638
        '<span class="select2-selection__choice__remove" role="presentation">' +                                   // 1639
          '&times;' +                                                                                              // 1640
        '</span>' +                                                                                                // 1641
      '</li>'                                                                                                      // 1642
    );                                                                                                             // 1643
                                                                                                                   // 1644
    return $container;                                                                                             // 1645
  };                                                                                                               // 1646
                                                                                                                   // 1647
  MultipleSelection.prototype.update = function (data) {                                                           // 1648
    this.clear();                                                                                                  // 1649
                                                                                                                   // 1650
    if (data.length === 0) {                                                                                       // 1651
      return;                                                                                                      // 1652
    }                                                                                                              // 1653
                                                                                                                   // 1654
    var $selections = [];                                                                                          // 1655
                                                                                                                   // 1656
    for (var d = 0; d < data.length; d++) {                                                                        // 1657
      var selection = data[d];                                                                                     // 1658
                                                                                                                   // 1659
      var $selection = this.selectionContainer();                                                                  // 1660
      var formatted = this.display(selection, $selection);                                                         // 1661
                                                                                                                   // 1662
      $selection.append(formatted);                                                                                // 1663
      $selection.prop('title', selection.title || selection.text);                                                 // 1664
                                                                                                                   // 1665
      $selection.data('data', selection);                                                                          // 1666
                                                                                                                   // 1667
      $selections.push($selection);                                                                                // 1668
    }                                                                                                              // 1669
                                                                                                                   // 1670
    var $rendered = this.$selection.find('.select2-selection__rendered');                                          // 1671
                                                                                                                   // 1672
    Utils.appendMany($rendered, $selections);                                                                      // 1673
  };                                                                                                               // 1674
                                                                                                                   // 1675
  return MultipleSelection;                                                                                        // 1676
});                                                                                                                // 1677
                                                                                                                   // 1678
S2.define('select2/selection/placeholder',[                                                                        // 1679
  '../utils'                                                                                                       // 1680
], function (Utils) {                                                                                              // 1681
  function Placeholder (decorated, $element, options) {                                                            // 1682
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));                                      // 1683
                                                                                                                   // 1684
    decorated.call(this, $element, options);                                                                       // 1685
  }                                                                                                                // 1686
                                                                                                                   // 1687
  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {                                         // 1688
    if (typeof placeholder === 'string') {                                                                         // 1689
      placeholder = {                                                                                              // 1690
        id: '',                                                                                                    // 1691
        text: placeholder                                                                                          // 1692
      };                                                                                                           // 1693
    }                                                                                                              // 1694
                                                                                                                   // 1695
    return placeholder;                                                                                            // 1696
  };                                                                                                               // 1697
                                                                                                                   // 1698
  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {                                    // 1699
    var $placeholder = this.selectionContainer();                                                                  // 1700
                                                                                                                   // 1701
    $placeholder.html(this.display(placeholder));                                                                  // 1702
    $placeholder.addClass('select2-selection__placeholder')                                                        // 1703
                .removeClass('select2-selection__choice');                                                         // 1704
                                                                                                                   // 1705
    return $placeholder;                                                                                           // 1706
  };                                                                                                               // 1707
                                                                                                                   // 1708
  Placeholder.prototype.update = function (decorated, data) {                                                      // 1709
    var singlePlaceholder = (                                                                                      // 1710
      data.length == 1 && data[0].id != this.placeholder.id                                                        // 1711
    );                                                                                                             // 1712
    var multipleSelections = data.length > 1;                                                                      // 1713
                                                                                                                   // 1714
    if (multipleSelections || singlePlaceholder) {                                                                 // 1715
      return decorated.call(this, data);                                                                           // 1716
    }                                                                                                              // 1717
                                                                                                                   // 1718
    this.clear();                                                                                                  // 1719
                                                                                                                   // 1720
    var $placeholder = this.createPlaceholder(this.placeholder);                                                   // 1721
                                                                                                                   // 1722
    this.$selection.find('.select2-selection__rendered').append($placeholder);                                     // 1723
  };                                                                                                               // 1724
                                                                                                                   // 1725
  return Placeholder;                                                                                              // 1726
});                                                                                                                // 1727
                                                                                                                   // 1728
S2.define('select2/selection/allowClear',[                                                                         // 1729
  'jquery',                                                                                                        // 1730
  '../keys'                                                                                                        // 1731
], function ($, KEYS) {                                                                                            // 1732
  function AllowClear () { }                                                                                       // 1733
                                                                                                                   // 1734
  AllowClear.prototype.bind = function (decorated, container, $container) {                                        // 1735
    var self = this;                                                                                               // 1736
                                                                                                                   // 1737
    decorated.call(this, container, $container);                                                                   // 1738
                                                                                                                   // 1739
    if (this.placeholder == null) {                                                                                // 1740
      if (this.options.get('debug') && window.console && console.error) {                                          // 1741
        console.error(                                                                                             // 1742
          'Select2: The `allowClear` option should be used in combination ' +                                      // 1743
          'with the `placeholder` option.'                                                                         // 1744
        );                                                                                                         // 1745
      }                                                                                                            // 1746
    }                                                                                                              // 1747
                                                                                                                   // 1748
    this.$selection.on('mousedown', '.select2-selection__clear',                                                   // 1749
      function (evt) {                                                                                             // 1750
        self._handleClear(evt);                                                                                    // 1751
    });                                                                                                            // 1752
                                                                                                                   // 1753
    container.on('keypress', function (evt) {                                                                      // 1754
      self._handleKeyboardClear(evt, container);                                                                   // 1755
    });                                                                                                            // 1756
  };                                                                                                               // 1757
                                                                                                                   // 1758
  AllowClear.prototype._handleClear = function (_, evt) {                                                          // 1759
    // Ignore the event if it is disabled                                                                          // 1760
    if (this.options.get('disabled')) {                                                                            // 1761
      return;                                                                                                      // 1762
    }                                                                                                              // 1763
                                                                                                                   // 1764
    var $clear = this.$selection.find('.select2-selection__clear');                                                // 1765
                                                                                                                   // 1766
    // Ignore the event if nothing has been selected                                                               // 1767
    if ($clear.length === 0) {                                                                                     // 1768
      return;                                                                                                      // 1769
    }                                                                                                              // 1770
                                                                                                                   // 1771
    evt.stopPropagation();                                                                                         // 1772
                                                                                                                   // 1773
    var data = $clear.data('data');                                                                                // 1774
                                                                                                                   // 1775
    for (var d = 0; d < data.length; d++) {                                                                        // 1776
      var unselectData = {                                                                                         // 1777
        data: data[d]                                                                                              // 1778
      };                                                                                                           // 1779
                                                                                                                   // 1780
      // Trigger the `unselect` event, so people can prevent it from being                                         // 1781
      // cleared.                                                                                                  // 1782
      this.trigger('unselect', unselectData);                                                                      // 1783
                                                                                                                   // 1784
      // If the event was prevented, don't clear it out.                                                           // 1785
      if (unselectData.prevented) {                                                                                // 1786
        return;                                                                                                    // 1787
      }                                                                                                            // 1788
    }                                                                                                              // 1789
                                                                                                                   // 1790
    this.$element.val(this.placeholder.id).trigger('change');                                                      // 1791
                                                                                                                   // 1792
    this.trigger('toggle', {});                                                                                    // 1793
  };                                                                                                               // 1794
                                                                                                                   // 1795
  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {                                       // 1796
    if (container.isOpen()) {                                                                                      // 1797
      return;                                                                                                      // 1798
    }                                                                                                              // 1799
                                                                                                                   // 1800
    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {                                                 // 1801
      this._handleClear(evt);                                                                                      // 1802
    }                                                                                                              // 1803
  };                                                                                                               // 1804
                                                                                                                   // 1805
  AllowClear.prototype.update = function (decorated, data) {                                                       // 1806
    decorated.call(this, data);                                                                                    // 1807
                                                                                                                   // 1808
    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||                                      // 1809
        data.length === 0) {                                                                                       // 1810
      return;                                                                                                      // 1811
    }                                                                                                              // 1812
                                                                                                                   // 1813
    var $remove = $(                                                                                               // 1814
      '<span class="select2-selection__clear">' +                                                                  // 1815
        '&times;' +                                                                                                // 1816
      '</span>'                                                                                                    // 1817
    );                                                                                                             // 1818
    $remove.data('data', data);                                                                                    // 1819
                                                                                                                   // 1820
    this.$selection.find('.select2-selection__rendered').prepend($remove);                                         // 1821
  };                                                                                                               // 1822
                                                                                                                   // 1823
  return AllowClear;                                                                                               // 1824
});                                                                                                                // 1825
                                                                                                                   // 1826
S2.define('select2/selection/search',[                                                                             // 1827
  'jquery',                                                                                                        // 1828
  '../utils',                                                                                                      // 1829
  '../keys'                                                                                                        // 1830
], function ($, Utils, KEYS) {                                                                                     // 1831
  function Search (decorated, $element, options) {                                                                 // 1832
    decorated.call(this, $element, options);                                                                       // 1833
  }                                                                                                                // 1834
                                                                                                                   // 1835
  Search.prototype.render = function (decorated) {                                                                 // 1836
    var $search = $(                                                                                               // 1837
      '<li class="select2-search select2-search--inline">' +                                                       // 1838
        '<input class="select2-search__field" type="search" tabindex="-1"' +                                       // 1839
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +                                             // 1840
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +                                         // 1841
      '</li>'                                                                                                      // 1842
    );                                                                                                             // 1843
                                                                                                                   // 1844
    this.$searchContainer = $search;                                                                               // 1845
    this.$search = $search.find('input');                                                                          // 1846
                                                                                                                   // 1847
    var $rendered = decorated.call(this);                                                                          // 1848
                                                                                                                   // 1849
    this._transferTabIndex();                                                                                      // 1850
                                                                                                                   // 1851
    return $rendered;                                                                                              // 1852
  };                                                                                                               // 1853
                                                                                                                   // 1854
  Search.prototype.bind = function (decorated, container, $container) {                                            // 1855
    var self = this;                                                                                               // 1856
                                                                                                                   // 1857
    decorated.call(this, container, $container);                                                                   // 1858
                                                                                                                   // 1859
    container.on('open', function () {                                                                             // 1860
      self.$search.trigger('focus');                                                                               // 1861
    });                                                                                                            // 1862
                                                                                                                   // 1863
    container.on('close', function () {                                                                            // 1864
      self.$search.val('');                                                                                        // 1865
      self.$search.removeAttr('aria-activedescendant');                                                            // 1866
      self.$search.trigger('focus');                                                                               // 1867
    });                                                                                                            // 1868
                                                                                                                   // 1869
    container.on('enable', function () {                                                                           // 1870
      self.$search.prop('disabled', false);                                                                        // 1871
                                                                                                                   // 1872
      self._transferTabIndex();                                                                                    // 1873
    });                                                                                                            // 1874
                                                                                                                   // 1875
    container.on('disable', function () {                                                                          // 1876
      self.$search.prop('disabled', true);                                                                         // 1877
    });                                                                                                            // 1878
                                                                                                                   // 1879
    container.on('focus', function (evt) {                                                                         // 1880
      self.$search.trigger('focus');                                                                               // 1881
    });                                                                                                            // 1882
                                                                                                                   // 1883
    container.on('results:focus', function (params) {                                                              // 1884
      self.$search.attr('aria-activedescendant', params.id);                                                       // 1885
    });                                                                                                            // 1886
                                                                                                                   // 1887
    this.$selection.on('focusin', '.select2-search--inline', function (evt) {                                      // 1888
      self.trigger('focus', evt);                                                                                  // 1889
    });                                                                                                            // 1890
                                                                                                                   // 1891
    this.$selection.on('focusout', '.select2-search--inline', function (evt) {                                     // 1892
      self._handleBlur(evt);                                                                                       // 1893
    });                                                                                                            // 1894
                                                                                                                   // 1895
    this.$selection.on('keydown', '.select2-search--inline', function (evt) {                                      // 1896
      evt.stopPropagation();                                                                                       // 1897
                                                                                                                   // 1898
      self.trigger('keypress', evt);                                                                               // 1899
                                                                                                                   // 1900
      self._keyUpPrevented = evt.isDefaultPrevented();                                                             // 1901
                                                                                                                   // 1902
      var key = evt.which;                                                                                         // 1903
                                                                                                                   // 1904
      if (key === KEYS.BACKSPACE && self.$search.val() === '') {                                                   // 1905
        var $previousChoice = self.$searchContainer                                                                // 1906
          .prev('.select2-selection__choice');                                                                     // 1907
                                                                                                                   // 1908
        if ($previousChoice.length > 0) {                                                                          // 1909
          var item = $previousChoice.data('data');                                                                 // 1910
                                                                                                                   // 1911
          self.searchRemoveChoice(item);                                                                           // 1912
                                                                                                                   // 1913
          evt.preventDefault();                                                                                    // 1914
        }                                                                                                          // 1915
      }                                                                                                            // 1916
    });                                                                                                            // 1917
                                                                                                                   // 1918
    // Try to detect the IE version should the `documentMode` property that                                        // 1919
    // is stored on the document. This is only implemented in IE and is                                            // 1920
    // slightly cleaner than doing a user agent check.                                                             // 1921
    // This property is not available in Edge, but Edge also doesn't have                                          // 1922
    // this bug.                                                                                                   // 1923
    var msie = document.documentMode;                                                                              // 1924
    var disableInputEvents = msie && msie <= 11;                                                                   // 1925
                                                                                                                   // 1926
    // Workaround for browsers which do not support the `input` event                                              // 1927
    // This will prevent double-triggering of events for browsers which support                                    // 1928
    // both the `keyup` and `input` events.                                                                        // 1929
    this.$selection.on(                                                                                            // 1930
      'input.searchcheck',                                                                                         // 1931
      '.select2-search--inline',                                                                                   // 1932
      function (evt) {                                                                                             // 1933
        // IE will trigger the `input` event when a placeholder is used on a                                       // 1934
        // search box. To get around this issue, we are forced to ignore all                                       // 1935
        // `input` events in IE and keep using `keyup`.                                                            // 1936
        if (disableInputEvents) {                                                                                  // 1937
          self.$selection.off('input.search input.searchcheck');                                                   // 1938
          return;                                                                                                  // 1939
        }                                                                                                          // 1940
                                                                                                                   // 1941
        // Unbind the duplicated `keyup` event                                                                     // 1942
        self.$selection.off('keyup.search');                                                                       // 1943
      }                                                                                                            // 1944
    );                                                                                                             // 1945
                                                                                                                   // 1946
    this.$selection.on(                                                                                            // 1947
      'keyup.search input.search',                                                                                 // 1948
      '.select2-search--inline',                                                                                   // 1949
      function (evt) {                                                                                             // 1950
        // IE will trigger the `input` event when a placeholder is used on a                                       // 1951
        // search box. To get around this issue, we are forced to ignore all                                       // 1952
        // `input` events in IE and keep using `keyup`.                                                            // 1953
        if (disableInputEvents && evt.type === 'input') {                                                          // 1954
          self.$selection.off('input.search input.searchcheck');                                                   // 1955
          return;                                                                                                  // 1956
        }                                                                                                          // 1957
                                                                                                                   // 1958
        var key = evt.which;                                                                                       // 1959
                                                                                                                   // 1960
        // We can freely ignore events from modifier keys                                                          // 1961
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {                                            // 1962
          return;                                                                                                  // 1963
        }                                                                                                          // 1964
                                                                                                                   // 1965
        // Tabbing will be handled during the `keydown` phase                                                      // 1966
        if (key == KEYS.TAB) {                                                                                     // 1967
          return;                                                                                                  // 1968
        }                                                                                                          // 1969
                                                                                                                   // 1970
        self.handleSearch(evt);                                                                                    // 1971
      }                                                                                                            // 1972
    );                                                                                                             // 1973
  };                                                                                                               // 1974
                                                                                                                   // 1975
  /**                                                                                                              // 1976
   * This method will transfer the tabindex attribute from the rendered                                            // 1977
   * selection to the search box. This allows for the search box to be used as                                     // 1978
   * the primary focus instead of the selection container.                                                         // 1979
   *                                                                                                               // 1980
   * @private                                                                                                      // 1981
   */                                                                                                              // 1982
  Search.prototype._transferTabIndex = function (decorated) {                                                      // 1983
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));                                               // 1984
    this.$selection.attr('tabindex', '-1');                                                                        // 1985
  };                                                                                                               // 1986
                                                                                                                   // 1987
  Search.prototype.createPlaceholder = function (decorated, placeholder) {                                         // 1988
    this.$search.attr('placeholder', placeholder.text);                                                            // 1989
  };                                                                                                               // 1990
                                                                                                                   // 1991
  Search.prototype.update = function (decorated, data) {                                                           // 1992
    var searchHadFocus = this.$search[0] == document.activeElement;                                                // 1993
                                                                                                                   // 1994
    this.$search.attr('placeholder', '');                                                                          // 1995
                                                                                                                   // 1996
    decorated.call(this, data);                                                                                    // 1997
                                                                                                                   // 1998
    this.$selection.find('.select2-selection__rendered')                                                           // 1999
                   .append(this.$searchContainer);                                                                 // 2000
                                                                                                                   // 2001
    this.resizeSearch();                                                                                           // 2002
    if (searchHadFocus) {                                                                                          // 2003
      this.$search.focus();                                                                                        // 2004
    }                                                                                                              // 2005
  };                                                                                                               // 2006
                                                                                                                   // 2007
  Search.prototype.handleSearch = function () {                                                                    // 2008
    this.resizeSearch();                                                                                           // 2009
                                                                                                                   // 2010
    if (!this._keyUpPrevented) {                                                                                   // 2011
      var input = this.$search.val();                                                                              // 2012
                                                                                                                   // 2013
      this.trigger('query', {                                                                                      // 2014
        term: input                                                                                                // 2015
      });                                                                                                          // 2016
    }                                                                                                              // 2017
                                                                                                                   // 2018
    this._keyUpPrevented = false;                                                                                  // 2019
  };                                                                                                               // 2020
                                                                                                                   // 2021
  Search.prototype.searchRemoveChoice = function (decorated, item) {                                               // 2022
    this.trigger('unselect', {                                                                                     // 2023
      data: item                                                                                                   // 2024
    });                                                                                                            // 2025
                                                                                                                   // 2026
    this.$search.val(item.text);                                                                                   // 2027
    this.handleSearch();                                                                                           // 2028
  };                                                                                                               // 2029
                                                                                                                   // 2030
  Search.prototype.resizeSearch = function () {                                                                    // 2031
    this.$search.css('width', '25px');                                                                             // 2032
                                                                                                                   // 2033
    var width = '';                                                                                                // 2034
                                                                                                                   // 2035
    if (this.$search.attr('placeholder') !== '') {                                                                 // 2036
      width = this.$selection.find('.select2-selection__rendered').innerWidth();                                   // 2037
    } else {                                                                                                       // 2038
      var minimumWidth = this.$search.val().length + 1;                                                            // 2039
                                                                                                                   // 2040
      width = (minimumWidth * 0.75) + 'em';                                                                        // 2041
    }                                                                                                              // 2042
                                                                                                                   // 2043
    this.$search.css('width', width);                                                                              // 2044
  };                                                                                                               // 2045
                                                                                                                   // 2046
  return Search;                                                                                                   // 2047
});                                                                                                                // 2048
                                                                                                                   // 2049
S2.define('select2/selection/eventRelay',[                                                                         // 2050
  'jquery'                                                                                                         // 2051
], function ($) {                                                                                                  // 2052
  function EventRelay () { }                                                                                       // 2053
                                                                                                                   // 2054
  EventRelay.prototype.bind = function (decorated, container, $container) {                                        // 2055
    var self = this;                                                                                               // 2056
    var relayEvents = [                                                                                            // 2057
      'open', 'opening',                                                                                           // 2058
      'close', 'closing',                                                                                          // 2059
      'select', 'selecting',                                                                                       // 2060
      'unselect', 'unselecting'                                                                                    // 2061
    ];                                                                                                             // 2062
                                                                                                                   // 2063
    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];                                    // 2064
                                                                                                                   // 2065
    decorated.call(this, container, $container);                                                                   // 2066
                                                                                                                   // 2067
    container.on('*', function (name, params) {                                                                    // 2068
      // Ignore events that should not be relayed                                                                  // 2069
      if ($.inArray(name, relayEvents) === -1) {                                                                   // 2070
        return;                                                                                                    // 2071
      }                                                                                                            // 2072
                                                                                                                   // 2073
      // The parameters should always be an object                                                                 // 2074
      params = params || {};                                                                                       // 2075
                                                                                                                   // 2076
      // Generate the jQuery event for the Select2 event                                                           // 2077
      var evt = $.Event('select2:' + name, {                                                                       // 2078
        params: params                                                                                             // 2079
      });                                                                                                          // 2080
                                                                                                                   // 2081
      self.$element.trigger(evt);                                                                                  // 2082
                                                                                                                   // 2083
      // Only handle preventable events if it was one                                                              // 2084
      if ($.inArray(name, preventableEvents) === -1) {                                                             // 2085
        return;                                                                                                    // 2086
      }                                                                                                            // 2087
                                                                                                                   // 2088
      params.prevented = evt.isDefaultPrevented();                                                                 // 2089
    });                                                                                                            // 2090
  };                                                                                                               // 2091
                                                                                                                   // 2092
  return EventRelay;                                                                                               // 2093
});                                                                                                                // 2094
                                                                                                                   // 2095
S2.define('select2/translation',[                                                                                  // 2096
  'jquery',                                                                                                        // 2097
  'require'                                                                                                        // 2098
], function ($, require) {                                                                                         // 2099
  function Translation (dict) {                                                                                    // 2100
    this.dict = dict || {};                                                                                        // 2101
  }                                                                                                                // 2102
                                                                                                                   // 2103
  Translation.prototype.all = function () {                                                                        // 2104
    return this.dict;                                                                                              // 2105
  };                                                                                                               // 2106
                                                                                                                   // 2107
  Translation.prototype.get = function (key) {                                                                     // 2108
    return this.dict[key];                                                                                         // 2109
  };                                                                                                               // 2110
                                                                                                                   // 2111
  Translation.prototype.extend = function (translation) {                                                          // 2112
    this.dict = $.extend({}, translation.all(), this.dict);                                                        // 2113
  };                                                                                                               // 2114
                                                                                                                   // 2115
  // Static functions                                                                                              // 2116
                                                                                                                   // 2117
  Translation._cache = {};                                                                                         // 2118
                                                                                                                   // 2119
  Translation.loadPath = function (path) {                                                                         // 2120
    if (!(path in Translation._cache)) {                                                                           // 2121
      var translations = require(path);                                                                            // 2122
                                                                                                                   // 2123
      Translation._cache[path] = translations;                                                                     // 2124
    }                                                                                                              // 2125
                                                                                                                   // 2126
    return new Translation(Translation._cache[path]);                                                              // 2127
  };                                                                                                               // 2128
                                                                                                                   // 2129
  return Translation;                                                                                              // 2130
});                                                                                                                // 2131
                                                                                                                   // 2132
S2.define('select2/diacritics',[                                                                                   // 2133
                                                                                                                   // 2134
], function () {                                                                                                   // 2135
  var diacritics = {                                                                                               // 2136
    '\u24B6': 'A',                                                                                                 // 2137
    '\uFF21': 'A',                                                                                                 // 2138
    '\u00C0': 'A',                                                                                                 // 2139
    '\u00C1': 'A',                                                                                                 // 2140
    '\u00C2': 'A',                                                                                                 // 2141
    '\u1EA6': 'A',                                                                                                 // 2142
    '\u1EA4': 'A',                                                                                                 // 2143
    '\u1EAA': 'A',                                                                                                 // 2144
    '\u1EA8': 'A',                                                                                                 // 2145
    '\u00C3': 'A',                                                                                                 // 2146
    '\u0100': 'A',                                                                                                 // 2147
    '\u0102': 'A',                                                                                                 // 2148
    '\u1EB0': 'A',                                                                                                 // 2149
    '\u1EAE': 'A',                                                                                                 // 2150
    '\u1EB4': 'A',                                                                                                 // 2151
    '\u1EB2': 'A',                                                                                                 // 2152
    '\u0226': 'A',                                                                                                 // 2153
    '\u01E0': 'A',                                                                                                 // 2154
    '\u00C4': 'A',                                                                                                 // 2155
    '\u01DE': 'A',                                                                                                 // 2156
    '\u1EA2': 'A',                                                                                                 // 2157
    '\u00C5': 'A',                                                                                                 // 2158
    '\u01FA': 'A',                                                                                                 // 2159
    '\u01CD': 'A',                                                                                                 // 2160
    '\u0200': 'A',                                                                                                 // 2161
    '\u0202': 'A',                                                                                                 // 2162
    '\u1EA0': 'A',                                                                                                 // 2163
    '\u1EAC': 'A',                                                                                                 // 2164
    '\u1EB6': 'A',                                                                                                 // 2165
    '\u1E00': 'A',                                                                                                 // 2166
    '\u0104': 'A',                                                                                                 // 2167
    '\u023A': 'A',                                                                                                 // 2168
    '\u2C6F': 'A',                                                                                                 // 2169
    '\uA732': 'AA',                                                                                                // 2170
    '\u00C6': 'AE',                                                                                                // 2171
    '\u01FC': 'AE',                                                                                                // 2172
    '\u01E2': 'AE',                                                                                                // 2173
    '\uA734': 'AO',                                                                                                // 2174
    '\uA736': 'AU',                                                                                                // 2175
    '\uA738': 'AV',                                                                                                // 2176
    '\uA73A': 'AV',                                                                                                // 2177
    '\uA73C': 'AY',                                                                                                // 2178
    '\u24B7': 'B',                                                                                                 // 2179
    '\uFF22': 'B',                                                                                                 // 2180
    '\u1E02': 'B',                                                                                                 // 2181
    '\u1E04': 'B',                                                                                                 // 2182
    '\u1E06': 'B',                                                                                                 // 2183
    '\u0243': 'B',                                                                                                 // 2184
    '\u0182': 'B',                                                                                                 // 2185
    '\u0181': 'B',                                                                                                 // 2186
    '\u24B8': 'C',                                                                                                 // 2187
    '\uFF23': 'C',                                                                                                 // 2188
    '\u0106': 'C',                                                                                                 // 2189
    '\u0108': 'C',                                                                                                 // 2190
    '\u010A': 'C',                                                                                                 // 2191
    '\u010C': 'C',                                                                                                 // 2192
    '\u00C7': 'C',                                                                                                 // 2193
    '\u1E08': 'C',                                                                                                 // 2194
    '\u0187': 'C',                                                                                                 // 2195
    '\u023B': 'C',                                                                                                 // 2196
    '\uA73E': 'C',                                                                                                 // 2197
    '\u24B9': 'D',                                                                                                 // 2198
    '\uFF24': 'D',                                                                                                 // 2199
    '\u1E0A': 'D',                                                                                                 // 2200
    '\u010E': 'D',                                                                                                 // 2201
    '\u1E0C': 'D',                                                                                                 // 2202
    '\u1E10': 'D',                                                                                                 // 2203
    '\u1E12': 'D',                                                                                                 // 2204
    '\u1E0E': 'D',                                                                                                 // 2205
    '\u0110': 'D',                                                                                                 // 2206
    '\u018B': 'D',                                                                                                 // 2207
    '\u018A': 'D',                                                                                                 // 2208
    '\u0189': 'D',                                                                                                 // 2209
    '\uA779': 'D',                                                                                                 // 2210
    '\u01F1': 'DZ',                                                                                                // 2211
    '\u01C4': 'DZ',                                                                                                // 2212
    '\u01F2': 'Dz',                                                                                                // 2213
    '\u01C5': 'Dz',                                                                                                // 2214
    '\u24BA': 'E',                                                                                                 // 2215
    '\uFF25': 'E',                                                                                                 // 2216
    '\u00C8': 'E',                                                                                                 // 2217
    '\u00C9': 'E',                                                                                                 // 2218
    '\u00CA': 'E',                                                                                                 // 2219
    '\u1EC0': 'E',                                                                                                 // 2220
    '\u1EBE': 'E',                                                                                                 // 2221
    '\u1EC4': 'E',                                                                                                 // 2222
    '\u1EC2': 'E',                                                                                                 // 2223
    '\u1EBC': 'E',                                                                                                 // 2224
    '\u0112': 'E',                                                                                                 // 2225
    '\u1E14': 'E',                                                                                                 // 2226
    '\u1E16': 'E',                                                                                                 // 2227
    '\u0114': 'E',                                                                                                 // 2228
    '\u0116': 'E',                                                                                                 // 2229
    '\u00CB': 'E',                                                                                                 // 2230
    '\u1EBA': 'E',                                                                                                 // 2231
    '\u011A': 'E',                                                                                                 // 2232
    '\u0204': 'E',                                                                                                 // 2233
    '\u0206': 'E',                                                                                                 // 2234
    '\u1EB8': 'E',                                                                                                 // 2235
    '\u1EC6': 'E',                                                                                                 // 2236
    '\u0228': 'E',                                                                                                 // 2237
    '\u1E1C': 'E',                                                                                                 // 2238
    '\u0118': 'E',                                                                                                 // 2239
    '\u1E18': 'E',                                                                                                 // 2240
    '\u1E1A': 'E',                                                                                                 // 2241
    '\u0190': 'E',                                                                                                 // 2242
    '\u018E': 'E',                                                                                                 // 2243
    '\u24BB': 'F',                                                                                                 // 2244
    '\uFF26': 'F',                                                                                                 // 2245
    '\u1E1E': 'F',                                                                                                 // 2246
    '\u0191': 'F',                                                                                                 // 2247
    '\uA77B': 'F',                                                                                                 // 2248
    '\u24BC': 'G',                                                                                                 // 2249
    '\uFF27': 'G',                                                                                                 // 2250
    '\u01F4': 'G',                                                                                                 // 2251
    '\u011C': 'G',                                                                                                 // 2252
    '\u1E20': 'G',                                                                                                 // 2253
    '\u011E': 'G',                                                                                                 // 2254
    '\u0120': 'G',                                                                                                 // 2255
    '\u01E6': 'G',                                                                                                 // 2256
    '\u0122': 'G',                                                                                                 // 2257
    '\u01E4': 'G',                                                                                                 // 2258
    '\u0193': 'G',                                                                                                 // 2259
    '\uA7A0': 'G',                                                                                                 // 2260
    '\uA77D': 'G',                                                                                                 // 2261
    '\uA77E': 'G',                                                                                                 // 2262
    '\u24BD': 'H',                                                                                                 // 2263
    '\uFF28': 'H',                                                                                                 // 2264
    '\u0124': 'H',                                                                                                 // 2265
    '\u1E22': 'H',                                                                                                 // 2266
    '\u1E26': 'H',                                                                                                 // 2267
    '\u021E': 'H',                                                                                                 // 2268
    '\u1E24': 'H',                                                                                                 // 2269
    '\u1E28': 'H',                                                                                                 // 2270
    '\u1E2A': 'H',                                                                                                 // 2271
    '\u0126': 'H',                                                                                                 // 2272
    '\u2C67': 'H',                                                                                                 // 2273
    '\u2C75': 'H',                                                                                                 // 2274
    '\uA78D': 'H',                                                                                                 // 2275
    '\u24BE': 'I',                                                                                                 // 2276
    '\uFF29': 'I',                                                                                                 // 2277
    '\u00CC': 'I',                                                                                                 // 2278
    '\u00CD': 'I',                                                                                                 // 2279
    '\u00CE': 'I',                                                                                                 // 2280
    '\u0128': 'I',                                                                                                 // 2281
    '\u012A': 'I',                                                                                                 // 2282
    '\u012C': 'I',                                                                                                 // 2283
    '\u0130': 'I',                                                                                                 // 2284
    '\u00CF': 'I',                                                                                                 // 2285
    '\u1E2E': 'I',                                                                                                 // 2286
    '\u1EC8': 'I',                                                                                                 // 2287
    '\u01CF': 'I',                                                                                                 // 2288
    '\u0208': 'I',                                                                                                 // 2289
    '\u020A': 'I',                                                                                                 // 2290
    '\u1ECA': 'I',                                                                                                 // 2291
    '\u012E': 'I',                                                                                                 // 2292
    '\u1E2C': 'I',                                                                                                 // 2293
    '\u0197': 'I',                                                                                                 // 2294
    '\u24BF': 'J',                                                                                                 // 2295
    '\uFF2A': 'J',                                                                                                 // 2296
    '\u0134': 'J',                                                                                                 // 2297
    '\u0248': 'J',                                                                                                 // 2298
    '\u24C0': 'K',                                                                                                 // 2299
    '\uFF2B': 'K',                                                                                                 // 2300
    '\u1E30': 'K',                                                                                                 // 2301
    '\u01E8': 'K',                                                                                                 // 2302
    '\u1E32': 'K',                                                                                                 // 2303
    '\u0136': 'K',                                                                                                 // 2304
    '\u1E34': 'K',                                                                                                 // 2305
    '\u0198': 'K',                                                                                                 // 2306
    '\u2C69': 'K',                                                                                                 // 2307
    '\uA740': 'K',                                                                                                 // 2308
    '\uA742': 'K',                                                                                                 // 2309
    '\uA744': 'K',                                                                                                 // 2310
    '\uA7A2': 'K',                                                                                                 // 2311
    '\u24C1': 'L',                                                                                                 // 2312
    '\uFF2C': 'L',                                                                                                 // 2313
    '\u013F': 'L',                                                                                                 // 2314
    '\u0139': 'L',                                                                                                 // 2315
    '\u013D': 'L',                                                                                                 // 2316
    '\u1E36': 'L',                                                                                                 // 2317
    '\u1E38': 'L',                                                                                                 // 2318
    '\u013B': 'L',                                                                                                 // 2319
    '\u1E3C': 'L',                                                                                                 // 2320
    '\u1E3A': 'L',                                                                                                 // 2321
    '\u0141': 'L',                                                                                                 // 2322
    '\u023D': 'L',                                                                                                 // 2323
    '\u2C62': 'L',                                                                                                 // 2324
    '\u2C60': 'L',                                                                                                 // 2325
    '\uA748': 'L',                                                                                                 // 2326
    '\uA746': 'L',                                                                                                 // 2327
    '\uA780': 'L',                                                                                                 // 2328
    '\u01C7': 'LJ',                                                                                                // 2329
    '\u01C8': 'Lj',                                                                                                // 2330
    '\u24C2': 'M',                                                                                                 // 2331
    '\uFF2D': 'M',                                                                                                 // 2332
    '\u1E3E': 'M',                                                                                                 // 2333
    '\u1E40': 'M',                                                                                                 // 2334
    '\u1E42': 'M',                                                                                                 // 2335
    '\u2C6E': 'M',                                                                                                 // 2336
    '\u019C': 'M',                                                                                                 // 2337
    '\u24C3': 'N',                                                                                                 // 2338
    '\uFF2E': 'N',                                                                                                 // 2339
    '\u01F8': 'N',                                                                                                 // 2340
    '\u0143': 'N',                                                                                                 // 2341
    '\u00D1': 'N',                                                                                                 // 2342
    '\u1E44': 'N',                                                                                                 // 2343
    '\u0147': 'N',                                                                                                 // 2344
    '\u1E46': 'N',                                                                                                 // 2345
    '\u0145': 'N',                                                                                                 // 2346
    '\u1E4A': 'N',                                                                                                 // 2347
    '\u1E48': 'N',                                                                                                 // 2348
    '\u0220': 'N',                                                                                                 // 2349
    '\u019D': 'N',                                                                                                 // 2350
    '\uA790': 'N',                                                                                                 // 2351
    '\uA7A4': 'N',                                                                                                 // 2352
    '\u01CA': 'NJ',                                                                                                // 2353
    '\u01CB': 'Nj',                                                                                                // 2354
    '\u24C4': 'O',                                                                                                 // 2355
    '\uFF2F': 'O',                                                                                                 // 2356
    '\u00D2': 'O',                                                                                                 // 2357
    '\u00D3': 'O',                                                                                                 // 2358
    '\u00D4': 'O',                                                                                                 // 2359
    '\u1ED2': 'O',                                                                                                 // 2360
    '\u1ED0': 'O',                                                                                                 // 2361
    '\u1ED6': 'O',                                                                                                 // 2362
    '\u1ED4': 'O',                                                                                                 // 2363
    '\u00D5': 'O',                                                                                                 // 2364
    '\u1E4C': 'O',                                                                                                 // 2365
    '\u022C': 'O',                                                                                                 // 2366
    '\u1E4E': 'O',                                                                                                 // 2367
    '\u014C': 'O',                                                                                                 // 2368
    '\u1E50': 'O',                                                                                                 // 2369
    '\u1E52': 'O',                                                                                                 // 2370
    '\u014E': 'O',                                                                                                 // 2371
    '\u022E': 'O',                                                                                                 // 2372
    '\u0230': 'O',                                                                                                 // 2373
    '\u00D6': 'O',                                                                                                 // 2374
    '\u022A': 'O',                                                                                                 // 2375
    '\u1ECE': 'O',                                                                                                 // 2376
    '\u0150': 'O',                                                                                                 // 2377
    '\u01D1': 'O',                                                                                                 // 2378
    '\u020C': 'O',                                                                                                 // 2379
    '\u020E': 'O',                                                                                                 // 2380
    '\u01A0': 'O',                                                                                                 // 2381
    '\u1EDC': 'O',                                                                                                 // 2382
    '\u1EDA': 'O',                                                                                                 // 2383
    '\u1EE0': 'O',                                                                                                 // 2384
    '\u1EDE': 'O',                                                                                                 // 2385
    '\u1EE2': 'O',                                                                                                 // 2386
    '\u1ECC': 'O',                                                                                                 // 2387
    '\u1ED8': 'O',                                                                                                 // 2388
    '\u01EA': 'O',                                                                                                 // 2389
    '\u01EC': 'O',                                                                                                 // 2390
    '\u00D8': 'O',                                                                                                 // 2391
    '\u01FE': 'O',                                                                                                 // 2392
    '\u0186': 'O',                                                                                                 // 2393
    '\u019F': 'O',                                                                                                 // 2394
    '\uA74A': 'O',                                                                                                 // 2395
    '\uA74C': 'O',                                                                                                 // 2396
    '\u01A2': 'OI',                                                                                                // 2397
    '\uA74E': 'OO',                                                                                                // 2398
    '\u0222': 'OU',                                                                                                // 2399
    '\u24C5': 'P',                                                                                                 // 2400
    '\uFF30': 'P',                                                                                                 // 2401
    '\u1E54': 'P',                                                                                                 // 2402
    '\u1E56': 'P',                                                                                                 // 2403
    '\u01A4': 'P',                                                                                                 // 2404
    '\u2C63': 'P',                                                                                                 // 2405
    '\uA750': 'P',                                                                                                 // 2406
    '\uA752': 'P',                                                                                                 // 2407
    '\uA754': 'P',                                                                                                 // 2408
    '\u24C6': 'Q',                                                                                                 // 2409
    '\uFF31': 'Q',                                                                                                 // 2410
    '\uA756': 'Q',                                                                                                 // 2411
    '\uA758': 'Q',                                                                                                 // 2412
    '\u024A': 'Q',                                                                                                 // 2413
    '\u24C7': 'R',                                                                                                 // 2414
    '\uFF32': 'R',                                                                                                 // 2415
    '\u0154': 'R',                                                                                                 // 2416
    '\u1E58': 'R',                                                                                                 // 2417
    '\u0158': 'R',                                                                                                 // 2418
    '\u0210': 'R',                                                                                                 // 2419
    '\u0212': 'R',                                                                                                 // 2420
    '\u1E5A': 'R',                                                                                                 // 2421
    '\u1E5C': 'R',                                                                                                 // 2422
    '\u0156': 'R',                                                                                                 // 2423
    '\u1E5E': 'R',                                                                                                 // 2424
    '\u024C': 'R',                                                                                                 // 2425
    '\u2C64': 'R',                                                                                                 // 2426
    '\uA75A': 'R',                                                                                                 // 2427
    '\uA7A6': 'R',                                                                                                 // 2428
    '\uA782': 'R',                                                                                                 // 2429
    '\u24C8': 'S',                                                                                                 // 2430
    '\uFF33': 'S',                                                                                                 // 2431
    '\u1E9E': 'S',                                                                                                 // 2432
    '\u015A': 'S',                                                                                                 // 2433
    '\u1E64': 'S',                                                                                                 // 2434
    '\u015C': 'S',                                                                                                 // 2435
    '\u1E60': 'S',                                                                                                 // 2436
    '\u0160': 'S',                                                                                                 // 2437
    '\u1E66': 'S',                                                                                                 // 2438
    '\u1E62': 'S',                                                                                                 // 2439
    '\u1E68': 'S',                                                                                                 // 2440
    '\u0218': 'S',                                                                                                 // 2441
    '\u015E': 'S',                                                                                                 // 2442
    '\u2C7E': 'S',                                                                                                 // 2443
    '\uA7A8': 'S',                                                                                                 // 2444
    '\uA784': 'S',                                                                                                 // 2445
    '\u24C9': 'T',                                                                                                 // 2446
    '\uFF34': 'T',                                                                                                 // 2447
    '\u1E6A': 'T',                                                                                                 // 2448
    '\u0164': 'T',                                                                                                 // 2449
    '\u1E6C': 'T',                                                                                                 // 2450
    '\u021A': 'T',                                                                                                 // 2451
    '\u0162': 'T',                                                                                                 // 2452
    '\u1E70': 'T',                                                                                                 // 2453
    '\u1E6E': 'T',                                                                                                 // 2454
    '\u0166': 'T',                                                                                                 // 2455
    '\u01AC': 'T',                                                                                                 // 2456
    '\u01AE': 'T',                                                                                                 // 2457
    '\u023E': 'T',                                                                                                 // 2458
    '\uA786': 'T',                                                                                                 // 2459
    '\uA728': 'TZ',                                                                                                // 2460
    '\u24CA': 'U',                                                                                                 // 2461
    '\uFF35': 'U',                                                                                                 // 2462
    '\u00D9': 'U',                                                                                                 // 2463
    '\u00DA': 'U',                                                                                                 // 2464
    '\u00DB': 'U',                                                                                                 // 2465
    '\u0168': 'U',                                                                                                 // 2466
    '\u1E78': 'U',                                                                                                 // 2467
    '\u016A': 'U',                                                                                                 // 2468
    '\u1E7A': 'U',                                                                                                 // 2469
    '\u016C': 'U',                                                                                                 // 2470
    '\u00DC': 'U',                                                                                                 // 2471
    '\u01DB': 'U',                                                                                                 // 2472
    '\u01D7': 'U',                                                                                                 // 2473
    '\u01D5': 'U',                                                                                                 // 2474
    '\u01D9': 'U',                                                                                                 // 2475
    '\u1EE6': 'U',                                                                                                 // 2476
    '\u016E': 'U',                                                                                                 // 2477
    '\u0170': 'U',                                                                                                 // 2478
    '\u01D3': 'U',                                                                                                 // 2479
    '\u0214': 'U',                                                                                                 // 2480
    '\u0216': 'U',                                                                                                 // 2481
    '\u01AF': 'U',                                                                                                 // 2482
    '\u1EEA': 'U',                                                                                                 // 2483
    '\u1EE8': 'U',                                                                                                 // 2484
    '\u1EEE': 'U',                                                                                                 // 2485
    '\u1EEC': 'U',                                                                                                 // 2486
    '\u1EF0': 'U',                                                                                                 // 2487
    '\u1EE4': 'U',                                                                                                 // 2488
    '\u1E72': 'U',                                                                                                 // 2489
    '\u0172': 'U',                                                                                                 // 2490
    '\u1E76': 'U',                                                                                                 // 2491
    '\u1E74': 'U',                                                                                                 // 2492
    '\u0244': 'U',                                                                                                 // 2493
    '\u24CB': 'V',                                                                                                 // 2494
    '\uFF36': 'V',                                                                                                 // 2495
    '\u1E7C': 'V',                                                                                                 // 2496
    '\u1E7E': 'V',                                                                                                 // 2497
    '\u01B2': 'V',                                                                                                 // 2498
    '\uA75E': 'V',                                                                                                 // 2499
    '\u0245': 'V',                                                                                                 // 2500
    '\uA760': 'VY',                                                                                                // 2501
    '\u24CC': 'W',                                                                                                 // 2502
    '\uFF37': 'W',                                                                                                 // 2503
    '\u1E80': 'W',                                                                                                 // 2504
    '\u1E82': 'W',                                                                                                 // 2505
    '\u0174': 'W',                                                                                                 // 2506
    '\u1E86': 'W',                                                                                                 // 2507
    '\u1E84': 'W',                                                                                                 // 2508
    '\u1E88': 'W',                                                                                                 // 2509
    '\u2C72': 'W',                                                                                                 // 2510
    '\u24CD': 'X',                                                                                                 // 2511
    '\uFF38': 'X',                                                                                                 // 2512
    '\u1E8A': 'X',                                                                                                 // 2513
    '\u1E8C': 'X',                                                                                                 // 2514
    '\u24CE': 'Y',                                                                                                 // 2515
    '\uFF39': 'Y',                                                                                                 // 2516
    '\u1EF2': 'Y',                                                                                                 // 2517
    '\u00DD': 'Y',                                                                                                 // 2518
    '\u0176': 'Y',                                                                                                 // 2519
    '\u1EF8': 'Y',                                                                                                 // 2520
    '\u0232': 'Y',                                                                                                 // 2521
    '\u1E8E': 'Y',                                                                                                 // 2522
    '\u0178': 'Y',                                                                                                 // 2523
    '\u1EF6': 'Y',                                                                                                 // 2524
    '\u1EF4': 'Y',                                                                                                 // 2525
    '\u01B3': 'Y',                                                                                                 // 2526
    '\u024E': 'Y',                                                                                                 // 2527
    '\u1EFE': 'Y',                                                                                                 // 2528
    '\u24CF': 'Z',                                                                                                 // 2529
    '\uFF3A': 'Z',                                                                                                 // 2530
    '\u0179': 'Z',                                                                                                 // 2531
    '\u1E90': 'Z',                                                                                                 // 2532
    '\u017B': 'Z',                                                                                                 // 2533
    '\u017D': 'Z',                                                                                                 // 2534
    '\u1E92': 'Z',                                                                                                 // 2535
    '\u1E94': 'Z',                                                                                                 // 2536
    '\u01B5': 'Z',                                                                                                 // 2537
    '\u0224': 'Z',                                                                                                 // 2538
    '\u2C7F': 'Z',                                                                                                 // 2539
    '\u2C6B': 'Z',                                                                                                 // 2540
    '\uA762': 'Z',                                                                                                 // 2541
    '\u24D0': 'a',                                                                                                 // 2542
    '\uFF41': 'a',                                                                                                 // 2543
    '\u1E9A': 'a',                                                                                                 // 2544
    '\u00E0': 'a',                                                                                                 // 2545
    '\u00E1': 'a',                                                                                                 // 2546
    '\u00E2': 'a',                                                                                                 // 2547
    '\u1EA7': 'a',                                                                                                 // 2548
    '\u1EA5': 'a',                                                                                                 // 2549
    '\u1EAB': 'a',                                                                                                 // 2550
    '\u1EA9': 'a',                                                                                                 // 2551
    '\u00E3': 'a',                                                                                                 // 2552
    '\u0101': 'a',                                                                                                 // 2553
    '\u0103': 'a',                                                                                                 // 2554
    '\u1EB1': 'a',                                                                                                 // 2555
    '\u1EAF': 'a',                                                                                                 // 2556
    '\u1EB5': 'a',                                                                                                 // 2557
    '\u1EB3': 'a',                                                                                                 // 2558
    '\u0227': 'a',                                                                                                 // 2559
    '\u01E1': 'a',                                                                                                 // 2560
    '\u00E4': 'a',                                                                                                 // 2561
    '\u01DF': 'a',                                                                                                 // 2562
    '\u1EA3': 'a',                                                                                                 // 2563
    '\u00E5': 'a',                                                                                                 // 2564
    '\u01FB': 'a',                                                                                                 // 2565
    '\u01CE': 'a',                                                                                                 // 2566
    '\u0201': 'a',                                                                                                 // 2567
    '\u0203': 'a',                                                                                                 // 2568
    '\u1EA1': 'a',                                                                                                 // 2569
    '\u1EAD': 'a',                                                                                                 // 2570
    '\u1EB7': 'a',                                                                                                 // 2571
    '\u1E01': 'a',                                                                                                 // 2572
    '\u0105': 'a',                                                                                                 // 2573
    '\u2C65': 'a',                                                                                                 // 2574
    '\u0250': 'a',                                                                                                 // 2575
    '\uA733': 'aa',                                                                                                // 2576
    '\u00E6': 'ae',                                                                                                // 2577
    '\u01FD': 'ae',                                                                                                // 2578
    '\u01E3': 'ae',                                                                                                // 2579
    '\uA735': 'ao',                                                                                                // 2580
    '\uA737': 'au',                                                                                                // 2581
    '\uA739': 'av',                                                                                                // 2582
    '\uA73B': 'av',                                                                                                // 2583
    '\uA73D': 'ay',                                                                                                // 2584
    '\u24D1': 'b',                                                                                                 // 2585
    '\uFF42': 'b',                                                                                                 // 2586
    '\u1E03': 'b',                                                                                                 // 2587
    '\u1E05': 'b',                                                                                                 // 2588
    '\u1E07': 'b',                                                                                                 // 2589
    '\u0180': 'b',                                                                                                 // 2590
    '\u0183': 'b',                                                                                                 // 2591
    '\u0253': 'b',                                                                                                 // 2592
    '\u24D2': 'c',                                                                                                 // 2593
    '\uFF43': 'c',                                                                                                 // 2594
    '\u0107': 'c',                                                                                                 // 2595
    '\u0109': 'c',                                                                                                 // 2596
    '\u010B': 'c',                                                                                                 // 2597
    '\u010D': 'c',                                                                                                 // 2598
    '\u00E7': 'c',                                                                                                 // 2599
    '\u1E09': 'c',                                                                                                 // 2600
    '\u0188': 'c',                                                                                                 // 2601
    '\u023C': 'c',                                                                                                 // 2602
    '\uA73F': 'c',                                                                                                 // 2603
    '\u2184': 'c',                                                                                                 // 2604
    '\u24D3': 'd',                                                                                                 // 2605
    '\uFF44': 'd',                                                                                                 // 2606
    '\u1E0B': 'd',                                                                                                 // 2607
    '\u010F': 'd',                                                                                                 // 2608
    '\u1E0D': 'd',                                                                                                 // 2609
    '\u1E11': 'd',                                                                                                 // 2610
    '\u1E13': 'd',                                                                                                 // 2611
    '\u1E0F': 'd',                                                                                                 // 2612
    '\u0111': 'd',                                                                                                 // 2613
    '\u018C': 'd',                                                                                                 // 2614
    '\u0256': 'd',                                                                                                 // 2615
    '\u0257': 'd',                                                                                                 // 2616
    '\uA77A': 'd',                                                                                                 // 2617
    '\u01F3': 'dz',                                                                                                // 2618
    '\u01C6': 'dz',                                                                                                // 2619
    '\u24D4': 'e',                                                                                                 // 2620
    '\uFF45': 'e',                                                                                                 // 2621
    '\u00E8': 'e',                                                                                                 // 2622
    '\u00E9': 'e',                                                                                                 // 2623
    '\u00EA': 'e',                                                                                                 // 2624
    '\u1EC1': 'e',                                                                                                 // 2625
    '\u1EBF': 'e',                                                                                                 // 2626
    '\u1EC5': 'e',                                                                                                 // 2627
    '\u1EC3': 'e',                                                                                                 // 2628
    '\u1EBD': 'e',                                                                                                 // 2629
    '\u0113': 'e',                                                                                                 // 2630
    '\u1E15': 'e',                                                                                                 // 2631
    '\u1E17': 'e',                                                                                                 // 2632
    '\u0115': 'e',                                                                                                 // 2633
    '\u0117': 'e',                                                                                                 // 2634
    '\u00EB': 'e',                                                                                                 // 2635
    '\u1EBB': 'e',                                                                                                 // 2636
    '\u011B': 'e',                                                                                                 // 2637
    '\u0205': 'e',                                                                                                 // 2638
    '\u0207': 'e',                                                                                                 // 2639
    '\u1EB9': 'e',                                                                                                 // 2640
    '\u1EC7': 'e',                                                                                                 // 2641
    '\u0229': 'e',                                                                                                 // 2642
    '\u1E1D': 'e',                                                                                                 // 2643
    '\u0119': 'e',                                                                                                 // 2644
    '\u1E19': 'e',                                                                                                 // 2645
    '\u1E1B': 'e',                                                                                                 // 2646
    '\u0247': 'e',                                                                                                 // 2647
    '\u025B': 'e',                                                                                                 // 2648
    '\u01DD': 'e',                                                                                                 // 2649
    '\u24D5': 'f',                                                                                                 // 2650
    '\uFF46': 'f',                                                                                                 // 2651
    '\u1E1F': 'f',                                                                                                 // 2652
    '\u0192': 'f',                                                                                                 // 2653
    '\uA77C': 'f',                                                                                                 // 2654
    '\u24D6': 'g',                                                                                                 // 2655
    '\uFF47': 'g',                                                                                                 // 2656
    '\u01F5': 'g',                                                                                                 // 2657
    '\u011D': 'g',                                                                                                 // 2658
    '\u1E21': 'g',                                                                                                 // 2659
    '\u011F': 'g',                                                                                                 // 2660
    '\u0121': 'g',                                                                                                 // 2661
    '\u01E7': 'g',                                                                                                 // 2662
    '\u0123': 'g',                                                                                                 // 2663
    '\u01E5': 'g',                                                                                                 // 2664
    '\u0260': 'g',                                                                                                 // 2665
    '\uA7A1': 'g',                                                                                                 // 2666
    '\u1D79': 'g',                                                                                                 // 2667
    '\uA77F': 'g',                                                                                                 // 2668
    '\u24D7': 'h',                                                                                                 // 2669
    '\uFF48': 'h',                                                                                                 // 2670
    '\u0125': 'h',                                                                                                 // 2671
    '\u1E23': 'h',                                                                                                 // 2672
    '\u1E27': 'h',                                                                                                 // 2673
    '\u021F': 'h',                                                                                                 // 2674
    '\u1E25': 'h',                                                                                                 // 2675
    '\u1E29': 'h',                                                                                                 // 2676
    '\u1E2B': 'h',                                                                                                 // 2677
    '\u1E96': 'h',                                                                                                 // 2678
    '\u0127': 'h',                                                                                                 // 2679
    '\u2C68': 'h',                                                                                                 // 2680
    '\u2C76': 'h',                                                                                                 // 2681
    '\u0265': 'h',                                                                                                 // 2682
    '\u0195': 'hv',                                                                                                // 2683
    '\u24D8': 'i',                                                                                                 // 2684
    '\uFF49': 'i',                                                                                                 // 2685
    '\u00EC': 'i',                                                                                                 // 2686
    '\u00ED': 'i',                                                                                                 // 2687
    '\u00EE': 'i',                                                                                                 // 2688
    '\u0129': 'i',                                                                                                 // 2689
    '\u012B': 'i',                                                                                                 // 2690
    '\u012D': 'i',                                                                                                 // 2691
    '\u00EF': 'i',                                                                                                 // 2692
    '\u1E2F': 'i',                                                                                                 // 2693
    '\u1EC9': 'i',                                                                                                 // 2694
    '\u01D0': 'i',                                                                                                 // 2695
    '\u0209': 'i',                                                                                                 // 2696
    '\u020B': 'i',                                                                                                 // 2697
    '\u1ECB': 'i',                                                                                                 // 2698
    '\u012F': 'i',                                                                                                 // 2699
    '\u1E2D': 'i',                                                                                                 // 2700
    '\u0268': 'i',                                                                                                 // 2701
    '\u0131': 'i',                                                                                                 // 2702
    '\u24D9': 'j',                                                                                                 // 2703
    '\uFF4A': 'j',                                                                                                 // 2704
    '\u0135': 'j',                                                                                                 // 2705
    '\u01F0': 'j',                                                                                                 // 2706
    '\u0249': 'j',                                                                                                 // 2707
    '\u24DA': 'k',                                                                                                 // 2708
    '\uFF4B': 'k',                                                                                                 // 2709
    '\u1E31': 'k',                                                                                                 // 2710
    '\u01E9': 'k',                                                                                                 // 2711
    '\u1E33': 'k',                                                                                                 // 2712
    '\u0137': 'k',                                                                                                 // 2713
    '\u1E35': 'k',                                                                                                 // 2714
    '\u0199': 'k',                                                                                                 // 2715
    '\u2C6A': 'k',                                                                                                 // 2716
    '\uA741': 'k',                                                                                                 // 2717
    '\uA743': 'k',                                                                                                 // 2718
    '\uA745': 'k',                                                                                                 // 2719
    '\uA7A3': 'k',                                                                                                 // 2720
    '\u24DB': 'l',                                                                                                 // 2721
    '\uFF4C': 'l',                                                                                                 // 2722
    '\u0140': 'l',                                                                                                 // 2723
    '\u013A': 'l',                                                                                                 // 2724
    '\u013E': 'l',                                                                                                 // 2725
    '\u1E37': 'l',                                                                                                 // 2726
    '\u1E39': 'l',                                                                                                 // 2727
    '\u013C': 'l',                                                                                                 // 2728
    '\u1E3D': 'l',                                                                                                 // 2729
    '\u1E3B': 'l',                                                                                                 // 2730
    '\u017F': 'l',                                                                                                 // 2731
    '\u0142': 'l',                                                                                                 // 2732
    '\u019A': 'l',                                                                                                 // 2733
    '\u026B': 'l',                                                                                                 // 2734
    '\u2C61': 'l',                                                                                                 // 2735
    '\uA749': 'l',                                                                                                 // 2736
    '\uA781': 'l',                                                                                                 // 2737
    '\uA747': 'l',                                                                                                 // 2738
    '\u01C9': 'lj',                                                                                                // 2739
    '\u24DC': 'm',                                                                                                 // 2740
    '\uFF4D': 'm',                                                                                                 // 2741
    '\u1E3F': 'm',                                                                                                 // 2742
    '\u1E41': 'm',                                                                                                 // 2743
    '\u1E43': 'm',                                                                                                 // 2744
    '\u0271': 'm',                                                                                                 // 2745
    '\u026F': 'm',                                                                                                 // 2746
    '\u24DD': 'n',                                                                                                 // 2747
    '\uFF4E': 'n',                                                                                                 // 2748
    '\u01F9': 'n',                                                                                                 // 2749
    '\u0144': 'n',                                                                                                 // 2750
    '\u00F1': 'n',                                                                                                 // 2751
    '\u1E45': 'n',                                                                                                 // 2752
    '\u0148': 'n',                                                                                                 // 2753
    '\u1E47': 'n',                                                                                                 // 2754
    '\u0146': 'n',                                                                                                 // 2755
    '\u1E4B': 'n',                                                                                                 // 2756
    '\u1E49': 'n',                                                                                                 // 2757
    '\u019E': 'n',                                                                                                 // 2758
    '\u0272': 'n',                                                                                                 // 2759
    '\u0149': 'n',                                                                                                 // 2760
    '\uA791': 'n',                                                                                                 // 2761
    '\uA7A5': 'n',                                                                                                 // 2762
    '\u01CC': 'nj',                                                                                                // 2763
    '\u24DE': 'o',                                                                                                 // 2764
    '\uFF4F': 'o',                                                                                                 // 2765
    '\u00F2': 'o',                                                                                                 // 2766
    '\u00F3': 'o',                                                                                                 // 2767
    '\u00F4': 'o',                                                                                                 // 2768
    '\u1ED3': 'o',                                                                                                 // 2769
    '\u1ED1': 'o',                                                                                                 // 2770
    '\u1ED7': 'o',                                                                                                 // 2771
    '\u1ED5': 'o',                                                                                                 // 2772
    '\u00F5': 'o',                                                                                                 // 2773
    '\u1E4D': 'o',                                                                                                 // 2774
    '\u022D': 'o',                                                                                                 // 2775
    '\u1E4F': 'o',                                                                                                 // 2776
    '\u014D': 'o',                                                                                                 // 2777
    '\u1E51': 'o',                                                                                                 // 2778
    '\u1E53': 'o',                                                                                                 // 2779
    '\u014F': 'o',                                                                                                 // 2780
    '\u022F': 'o',                                                                                                 // 2781
    '\u0231': 'o',                                                                                                 // 2782
    '\u00F6': 'o',                                                                                                 // 2783
    '\u022B': 'o',                                                                                                 // 2784
    '\u1ECF': 'o',                                                                                                 // 2785
    '\u0151': 'o',                                                                                                 // 2786
    '\u01D2': 'o',                                                                                                 // 2787
    '\u020D': 'o',                                                                                                 // 2788
    '\u020F': 'o',                                                                                                 // 2789
    '\u01A1': 'o',                                                                                                 // 2790
    '\u1EDD': 'o',                                                                                                 // 2791
    '\u1EDB': 'o',                                                                                                 // 2792
    '\u1EE1': 'o',                                                                                                 // 2793
    '\u1EDF': 'o',                                                                                                 // 2794
    '\u1EE3': 'o',                                                                                                 // 2795
    '\u1ECD': 'o',                                                                                                 // 2796
    '\u1ED9': 'o',                                                                                                 // 2797
    '\u01EB': 'o',                                                                                                 // 2798
    '\u01ED': 'o',                                                                                                 // 2799
    '\u00F8': 'o',                                                                                                 // 2800
    '\u01FF': 'o',                                                                                                 // 2801
    '\u0254': 'o',                                                                                                 // 2802
    '\uA74B': 'o',                                                                                                 // 2803
    '\uA74D': 'o',                                                                                                 // 2804
    '\u0275': 'o',                                                                                                 // 2805
    '\u01A3': 'oi',                                                                                                // 2806
    '\u0223': 'ou',                                                                                                // 2807
    '\uA74F': 'oo',                                                                                                // 2808
    '\u24DF': 'p',                                                                                                 // 2809
    '\uFF50': 'p',                                                                                                 // 2810
    '\u1E55': 'p',                                                                                                 // 2811
    '\u1E57': 'p',                                                                                                 // 2812
    '\u01A5': 'p',                                                                                                 // 2813
    '\u1D7D': 'p',                                                                                                 // 2814
    '\uA751': 'p',                                                                                                 // 2815
    '\uA753': 'p',                                                                                                 // 2816
    '\uA755': 'p',                                                                                                 // 2817
    '\u24E0': 'q',                                                                                                 // 2818
    '\uFF51': 'q',                                                                                                 // 2819
    '\u024B': 'q',                                                                                                 // 2820
    '\uA757': 'q',                                                                                                 // 2821
    '\uA759': 'q',                                                                                                 // 2822
    '\u24E1': 'r',                                                                                                 // 2823
    '\uFF52': 'r',                                                                                                 // 2824
    '\u0155': 'r',                                                                                                 // 2825
    '\u1E59': 'r',                                                                                                 // 2826
    '\u0159': 'r',                                                                                                 // 2827
    '\u0211': 'r',                                                                                                 // 2828
    '\u0213': 'r',                                                                                                 // 2829
    '\u1E5B': 'r',                                                                                                 // 2830
    '\u1E5D': 'r',                                                                                                 // 2831
    '\u0157': 'r',                                                                                                 // 2832
    '\u1E5F': 'r',                                                                                                 // 2833
    '\u024D': 'r',                                                                                                 // 2834
    '\u027D': 'r',                                                                                                 // 2835
    '\uA75B': 'r',                                                                                                 // 2836
    '\uA7A7': 'r',                                                                                                 // 2837
    '\uA783': 'r',                                                                                                 // 2838
    '\u24E2': 's',                                                                                                 // 2839
    '\uFF53': 's',                                                                                                 // 2840
    '\u00DF': 's',                                                                                                 // 2841
    '\u015B': 's',                                                                                                 // 2842
    '\u1E65': 's',                                                                                                 // 2843
    '\u015D': 's',                                                                                                 // 2844
    '\u1E61': 's',                                                                                                 // 2845
    '\u0161': 's',                                                                                                 // 2846
    '\u1E67': 's',                                                                                                 // 2847
    '\u1E63': 's',                                                                                                 // 2848
    '\u1E69': 's',                                                                                                 // 2849
    '\u0219': 's',                                                                                                 // 2850
    '\u015F': 's',                                                                                                 // 2851
    '\u023F': 's',                                                                                                 // 2852
    '\uA7A9': 's',                                                                                                 // 2853
    '\uA785': 's',                                                                                                 // 2854
    '\u1E9B': 's',                                                                                                 // 2855
    '\u24E3': 't',                                                                                                 // 2856
    '\uFF54': 't',                                                                                                 // 2857
    '\u1E6B': 't',                                                                                                 // 2858
    '\u1E97': 't',                                                                                                 // 2859
    '\u0165': 't',                                                                                                 // 2860
    '\u1E6D': 't',                                                                                                 // 2861
    '\u021B': 't',                                                                                                 // 2862
    '\u0163': 't',                                                                                                 // 2863
    '\u1E71': 't',                                                                                                 // 2864
    '\u1E6F': 't',                                                                                                 // 2865
    '\u0167': 't',                                                                                                 // 2866
    '\u01AD': 't',                                                                                                 // 2867
    '\u0288': 't',                                                                                                 // 2868
    '\u2C66': 't',                                                                                                 // 2869
    '\uA787': 't',                                                                                                 // 2870
    '\uA729': 'tz',                                                                                                // 2871
    '\u24E4': 'u',                                                                                                 // 2872
    '\uFF55': 'u',                                                                                                 // 2873
    '\u00F9': 'u',                                                                                                 // 2874
    '\u00FA': 'u',                                                                                                 // 2875
    '\u00FB': 'u',                                                                                                 // 2876
    '\u0169': 'u',                                                                                                 // 2877
    '\u1E79': 'u',                                                                                                 // 2878
    '\u016B': 'u',                                                                                                 // 2879
    '\u1E7B': 'u',                                                                                                 // 2880
    '\u016D': 'u',                                                                                                 // 2881
    '\u00FC': 'u',                                                                                                 // 2882
    '\u01DC': 'u',                                                                                                 // 2883
    '\u01D8': 'u',                                                                                                 // 2884
    '\u01D6': 'u',                                                                                                 // 2885
    '\u01DA': 'u',                                                                                                 // 2886
    '\u1EE7': 'u',                                                                                                 // 2887
    '\u016F': 'u',                                                                                                 // 2888
    '\u0171': 'u',                                                                                                 // 2889
    '\u01D4': 'u',                                                                                                 // 2890
    '\u0215': 'u',                                                                                                 // 2891
    '\u0217': 'u',                                                                                                 // 2892
    '\u01B0': 'u',                                                                                                 // 2893
    '\u1EEB': 'u',                                                                                                 // 2894
    '\u1EE9': 'u',                                                                                                 // 2895
    '\u1EEF': 'u',                                                                                                 // 2896
    '\u1EED': 'u',                                                                                                 // 2897
    '\u1EF1': 'u',                                                                                                 // 2898
    '\u1EE5': 'u',                                                                                                 // 2899
    '\u1E73': 'u',                                                                                                 // 2900
    '\u0173': 'u',                                                                                                 // 2901
    '\u1E77': 'u',                                                                                                 // 2902
    '\u1E75': 'u',                                                                                                 // 2903
    '\u0289': 'u',                                                                                                 // 2904
    '\u24E5': 'v',                                                                                                 // 2905
    '\uFF56': 'v',                                                                                                 // 2906
    '\u1E7D': 'v',                                                                                                 // 2907
    '\u1E7F': 'v',                                                                                                 // 2908
    '\u028B': 'v',                                                                                                 // 2909
    '\uA75F': 'v',                                                                                                 // 2910
    '\u028C': 'v',                                                                                                 // 2911
    '\uA761': 'vy',                                                                                                // 2912
    '\u24E6': 'w',                                                                                                 // 2913
    '\uFF57': 'w',                                                                                                 // 2914
    '\u1E81': 'w',                                                                                                 // 2915
    '\u1E83': 'w',                                                                                                 // 2916
    '\u0175': 'w',                                                                                                 // 2917
    '\u1E87': 'w',                                                                                                 // 2918
    '\u1E85': 'w',                                                                                                 // 2919
    '\u1E98': 'w',                                                                                                 // 2920
    '\u1E89': 'w',                                                                                                 // 2921
    '\u2C73': 'w',                                                                                                 // 2922
    '\u24E7': 'x',                                                                                                 // 2923
    '\uFF58': 'x',                                                                                                 // 2924
    '\u1E8B': 'x',                                                                                                 // 2925
    '\u1E8D': 'x',                                                                                                 // 2926
    '\u24E8': 'y',                                                                                                 // 2927
    '\uFF59': 'y',                                                                                                 // 2928
    '\u1EF3': 'y',                                                                                                 // 2929
    '\u00FD': 'y',                                                                                                 // 2930
    '\u0177': 'y',                                                                                                 // 2931
    '\u1EF9': 'y',                                                                                                 // 2932
    '\u0233': 'y',                                                                                                 // 2933
    '\u1E8F': 'y',                                                                                                 // 2934
    '\u00FF': 'y',                                                                                                 // 2935
    '\u1EF7': 'y',                                                                                                 // 2936
    '\u1E99': 'y',                                                                                                 // 2937
    '\u1EF5': 'y',                                                                                                 // 2938
    '\u01B4': 'y',                                                                                                 // 2939
    '\u024F': 'y',                                                                                                 // 2940
    '\u1EFF': 'y',                                                                                                 // 2941
    '\u24E9': 'z',                                                                                                 // 2942
    '\uFF5A': 'z',                                                                                                 // 2943
    '\u017A': 'z',                                                                                                 // 2944
    '\u1E91': 'z',                                                                                                 // 2945
    '\u017C': 'z',                                                                                                 // 2946
    '\u017E': 'z',                                                                                                 // 2947
    '\u1E93': 'z',                                                                                                 // 2948
    '\u1E95': 'z',                                                                                                 // 2949
    '\u01B6': 'z',                                                                                                 // 2950
    '\u0225': 'z',                                                                                                 // 2951
    '\u0240': 'z',                                                                                                 // 2952
    '\u2C6C': 'z',                                                                                                 // 2953
    '\uA763': 'z',                                                                                                 // 2954
    '\u0386': '\u0391',                                                                                            // 2955
    '\u0388': '\u0395',                                                                                            // 2956
    '\u0389': '\u0397',                                                                                            // 2957
    '\u038A': '\u0399',                                                                                            // 2958
    '\u03AA': '\u0399',                                                                                            // 2959
    '\u038C': '\u039F',                                                                                            // 2960
    '\u038E': '\u03A5',                                                                                            // 2961
    '\u03AB': '\u03A5',                                                                                            // 2962
    '\u038F': '\u03A9',                                                                                            // 2963
    '\u03AC': '\u03B1',                                                                                            // 2964
    '\u03AD': '\u03B5',                                                                                            // 2965
    '\u03AE': '\u03B7',                                                                                            // 2966
    '\u03AF': '\u03B9',                                                                                            // 2967
    '\u03CA': '\u03B9',                                                                                            // 2968
    '\u0390': '\u03B9',                                                                                            // 2969
    '\u03CC': '\u03BF',                                                                                            // 2970
    '\u03CD': '\u03C5',                                                                                            // 2971
    '\u03CB': '\u03C5',                                                                                            // 2972
    '\u03B0': '\u03C5',                                                                                            // 2973
    '\u03C9': '\u03C9',                                                                                            // 2974
    '\u03C2': '\u03C3'                                                                                             // 2975
  };                                                                                                               // 2976
                                                                                                                   // 2977
  return diacritics;                                                                                               // 2978
});                                                                                                                // 2979
                                                                                                                   // 2980
S2.define('select2/data/base',[                                                                                    // 2981
  '../utils'                                                                                                       // 2982
], function (Utils) {                                                                                              // 2983
  function BaseAdapter ($element, options) {                                                                       // 2984
    BaseAdapter.__super__.constructor.call(this);                                                                  // 2985
  }                                                                                                                // 2986
                                                                                                                   // 2987
  Utils.Extend(BaseAdapter, Utils.Observable);                                                                     // 2988
                                                                                                                   // 2989
  BaseAdapter.prototype.current = function (callback) {                                                            // 2990
    throw new Error('The `current` method must be defined in child classes.');                                     // 2991
  };                                                                                                               // 2992
                                                                                                                   // 2993
  BaseAdapter.prototype.query = function (params, callback) {                                                      // 2994
    throw new Error('The `query` method must be defined in child classes.');                                       // 2995
  };                                                                                                               // 2996
                                                                                                                   // 2997
  BaseAdapter.prototype.bind = function (container, $container) {                                                  // 2998
    // Can be implemented in subclasses                                                                            // 2999
  };                                                                                                               // 3000
                                                                                                                   // 3001
  BaseAdapter.prototype.destroy = function () {                                                                    // 3002
    // Can be implemented in subclasses                                                                            // 3003
  };                                                                                                               // 3004
                                                                                                                   // 3005
  BaseAdapter.prototype.generateResultId = function (container, data) {                                            // 3006
    var id = container.id + '-result-';                                                                            // 3007
                                                                                                                   // 3008
    id += Utils.generateChars(4);                                                                                  // 3009
                                                                                                                   // 3010
    if (data.id != null) {                                                                                         // 3011
      id += '-' + data.id.toString();                                                                              // 3012
    } else {                                                                                                       // 3013
      id += '-' + Utils.generateChars(4);                                                                          // 3014
    }                                                                                                              // 3015
    return id;                                                                                                     // 3016
  };                                                                                                               // 3017
                                                                                                                   // 3018
  return BaseAdapter;                                                                                              // 3019
});                                                                                                                // 3020
                                                                                                                   // 3021
S2.define('select2/data/select',[                                                                                  // 3022
  './base',                                                                                                        // 3023
  '../utils',                                                                                                      // 3024
  'jquery'                                                                                                         // 3025
], function (BaseAdapter, Utils, $) {                                                                              // 3026
  function SelectAdapter ($element, options) {                                                                     // 3027
    this.$element = $element;                                                                                      // 3028
    this.options = options;                                                                                        // 3029
                                                                                                                   // 3030
    SelectAdapter.__super__.constructor.call(this);                                                                // 3031
  }                                                                                                                // 3032
                                                                                                                   // 3033
  Utils.Extend(SelectAdapter, BaseAdapter);                                                                        // 3034
                                                                                                                   // 3035
  SelectAdapter.prototype.current = function (callback) {                                                          // 3036
    var data = [];                                                                                                 // 3037
    var self = this;                                                                                               // 3038
                                                                                                                   // 3039
    this.$element.find(':selected').each(function () {                                                             // 3040
      var $option = $(this);                                                                                       // 3041
                                                                                                                   // 3042
      var option = self.item($option);                                                                             // 3043
                                                                                                                   // 3044
      data.push(option);                                                                                           // 3045
    });                                                                                                            // 3046
                                                                                                                   // 3047
    callback(data);                                                                                                // 3048
  };                                                                                                               // 3049
                                                                                                                   // 3050
  SelectAdapter.prototype.select = function (data) {                                                               // 3051
    var self = this;                                                                                               // 3052
                                                                                                                   // 3053
    data.selected = true;                                                                                          // 3054
                                                                                                                   // 3055
    // If data.element is a DOM node, use it instead                                                               // 3056
    if ($(data.element).is('option')) {                                                                            // 3057
      data.element.selected = true;                                                                                // 3058
                                                                                                                   // 3059
      this.$element.trigger('change');                                                                             // 3060
                                                                                                                   // 3061
      return;                                                                                                      // 3062
    }                                                                                                              // 3063
                                                                                                                   // 3064
    if (this.$element.prop('multiple')) {                                                                          // 3065
      this.current(function (currentData) {                                                                        // 3066
        var val = [];                                                                                              // 3067
                                                                                                                   // 3068
        data = [data];                                                                                             // 3069
        data.push.apply(data, currentData);                                                                        // 3070
                                                                                                                   // 3071
        for (var d = 0; d < data.length; d++) {                                                                    // 3072
          var id = data[d].id;                                                                                     // 3073
                                                                                                                   // 3074
          if ($.inArray(id, val) === -1) {                                                                         // 3075
            val.push(id);                                                                                          // 3076
          }                                                                                                        // 3077
        }                                                                                                          // 3078
                                                                                                                   // 3079
        self.$element.val(val);                                                                                    // 3080
        self.$element.trigger('change');                                                                           // 3081
      });                                                                                                          // 3082
    } else {                                                                                                       // 3083
      var val = data.id;                                                                                           // 3084
                                                                                                                   // 3085
      this.$element.val(val);                                                                                      // 3086
      this.$element.trigger('change');                                                                             // 3087
    }                                                                                                              // 3088
  };                                                                                                               // 3089
                                                                                                                   // 3090
  SelectAdapter.prototype.unselect = function (data) {                                                             // 3091
    var self = this;                                                                                               // 3092
                                                                                                                   // 3093
    if (!this.$element.prop('multiple')) {                                                                         // 3094
      return;                                                                                                      // 3095
    }                                                                                                              // 3096
                                                                                                                   // 3097
    data.selected = false;                                                                                         // 3098
                                                                                                                   // 3099
    if ($(data.element).is('option')) {                                                                            // 3100
      data.element.selected = false;                                                                               // 3101
                                                                                                                   // 3102
      this.$element.trigger('change');                                                                             // 3103
                                                                                                                   // 3104
      return;                                                                                                      // 3105
    }                                                                                                              // 3106
                                                                                                                   // 3107
    this.current(function (currentData) {                                                                          // 3108
      var val = [];                                                                                                // 3109
                                                                                                                   // 3110
      for (var d = 0; d < currentData.length; d++) {                                                               // 3111
        var id = currentData[d].id;                                                                                // 3112
                                                                                                                   // 3113
        if (id !== data.id && $.inArray(id, val) === -1) {                                                         // 3114
          val.push(id);                                                                                            // 3115
        }                                                                                                          // 3116
      }                                                                                                            // 3117
                                                                                                                   // 3118
      self.$element.val(val);                                                                                      // 3119
                                                                                                                   // 3120
      self.$element.trigger('change');                                                                             // 3121
    });                                                                                                            // 3122
  };                                                                                                               // 3123
                                                                                                                   // 3124
  SelectAdapter.prototype.bind = function (container, $container) {                                                // 3125
    var self = this;                                                                                               // 3126
                                                                                                                   // 3127
    this.container = container;                                                                                    // 3128
                                                                                                                   // 3129
    container.on('select', function (params) {                                                                     // 3130
      self.select(params.data);                                                                                    // 3131
    });                                                                                                            // 3132
                                                                                                                   // 3133
    container.on('unselect', function (params) {                                                                   // 3134
      self.unselect(params.data);                                                                                  // 3135
    });                                                                                                            // 3136
  };                                                                                                               // 3137
                                                                                                                   // 3138
  SelectAdapter.prototype.destroy = function () {                                                                  // 3139
    // Remove anything added to child elements                                                                     // 3140
    this.$element.find('*').each(function () {                                                                     // 3141
      // Remove any custom data set by Select2                                                                     // 3142
      $.removeData(this, 'data');                                                                                  // 3143
    });                                                                                                            // 3144
  };                                                                                                               // 3145
                                                                                                                   // 3146
  SelectAdapter.prototype.query = function (params, callback) {                                                    // 3147
    var data = [];                                                                                                 // 3148
    var self = this;                                                                                               // 3149
                                                                                                                   // 3150
    var $options = this.$element.children();                                                                       // 3151
                                                                                                                   // 3152
    $options.each(function () {                                                                                    // 3153
      var $option = $(this);                                                                                       // 3154
                                                                                                                   // 3155
      if (!$option.is('option') && !$option.is('optgroup')) {                                                      // 3156
        return;                                                                                                    // 3157
      }                                                                                                            // 3158
                                                                                                                   // 3159
      var option = self.item($option);                                                                             // 3160
                                                                                                                   // 3161
      var matches = self.matches(params, option);                                                                  // 3162
                                                                                                                   // 3163
      if (matches !== null) {                                                                                      // 3164
        data.push(matches);                                                                                        // 3165
      }                                                                                                            // 3166
    });                                                                                                            // 3167
                                                                                                                   // 3168
    callback({                                                                                                     // 3169
      results: data                                                                                                // 3170
    });                                                                                                            // 3171
  };                                                                                                               // 3172
                                                                                                                   // 3173
  SelectAdapter.prototype.addOptions = function ($options) {                                                       // 3174
    Utils.appendMany(this.$element, $options);                                                                     // 3175
  };                                                                                                               // 3176
                                                                                                                   // 3177
  SelectAdapter.prototype.option = function (data) {                                                               // 3178
    var option;                                                                                                    // 3179
                                                                                                                   // 3180
    if (data.children) {                                                                                           // 3181
      option = document.createElement('optgroup');                                                                 // 3182
      option.label = data.text;                                                                                    // 3183
    } else {                                                                                                       // 3184
      option = document.createElement('option');                                                                   // 3185
                                                                                                                   // 3186
      if (option.textContent !== undefined) {                                                                      // 3187
        option.textContent = data.text;                                                                            // 3188
      } else {                                                                                                     // 3189
        option.innerText = data.text;                                                                              // 3190
      }                                                                                                            // 3191
    }                                                                                                              // 3192
                                                                                                                   // 3193
    if (data.id) {                                                                                                 // 3194
      option.value = data.id;                                                                                      // 3195
    }                                                                                                              // 3196
                                                                                                                   // 3197
    if (data.disabled) {                                                                                           // 3198
      option.disabled = true;                                                                                      // 3199
    }                                                                                                              // 3200
                                                                                                                   // 3201
    if (data.selected) {                                                                                           // 3202
      option.selected = true;                                                                                      // 3203
    }                                                                                                              // 3204
                                                                                                                   // 3205
    if (data.title) {                                                                                              // 3206
      option.title = data.title;                                                                                   // 3207
    }                                                                                                              // 3208
                                                                                                                   // 3209
    var $option = $(option);                                                                                       // 3210
                                                                                                                   // 3211
    var normalizedData = this._normalizeItem(data);                                                                // 3212
    normalizedData.element = option;                                                                               // 3213
                                                                                                                   // 3214
    // Override the option's data with the combined data                                                           // 3215
    $.data(option, 'data', normalizedData);                                                                        // 3216
                                                                                                                   // 3217
    return $option;                                                                                                // 3218
  };                                                                                                               // 3219
                                                                                                                   // 3220
  SelectAdapter.prototype.item = function ($option) {                                                              // 3221
    var data = {};                                                                                                 // 3222
                                                                                                                   // 3223
    data = $.data($option[0], 'data');                                                                             // 3224
                                                                                                                   // 3225
    if (data != null) {                                                                                            // 3226
      return data;                                                                                                 // 3227
    }                                                                                                              // 3228
                                                                                                                   // 3229
    if ($option.is('option')) {                                                                                    // 3230
      data = {                                                                                                     // 3231
        id: $option.val(),                                                                                         // 3232
        text: $option.text(),                                                                                      // 3233
        disabled: $option.prop('disabled'),                                                                        // 3234
        selected: $option.prop('selected'),                                                                        // 3235
        title: $option.prop('title')                                                                               // 3236
      };                                                                                                           // 3237
    } else if ($option.is('optgroup')) {                                                                           // 3238
      data = {                                                                                                     // 3239
        text: $option.prop('label'),                                                                               // 3240
        children: [],                                                                                              // 3241
        title: $option.prop('title')                                                                               // 3242
      };                                                                                                           // 3243
                                                                                                                   // 3244
      var $children = $option.children('option');                                                                  // 3245
      var children = [];                                                                                           // 3246
                                                                                                                   // 3247
      for (var c = 0; c < $children.length; c++) {                                                                 // 3248
        var $child = $($children[c]);                                                                              // 3249
                                                                                                                   // 3250
        var child = this.item($child);                                                                             // 3251
                                                                                                                   // 3252
        children.push(child);                                                                                      // 3253
      }                                                                                                            // 3254
                                                                                                                   // 3255
      data.children = children;                                                                                    // 3256
    }                                                                                                              // 3257
                                                                                                                   // 3258
    data = this._normalizeItem(data);                                                                              // 3259
    data.element = $option[0];                                                                                     // 3260
                                                                                                                   // 3261
    $.data($option[0], 'data', data);                                                                              // 3262
                                                                                                                   // 3263
    return data;                                                                                                   // 3264
  };                                                                                                               // 3265
                                                                                                                   // 3266
  SelectAdapter.prototype._normalizeItem = function (item) {                                                       // 3267
    if (!$.isPlainObject(item)) {                                                                                  // 3268
      item = {                                                                                                     // 3269
        id: item,                                                                                                  // 3270
        text: item                                                                                                 // 3271
      };                                                                                                           // 3272
    }                                                                                                              // 3273
                                                                                                                   // 3274
    item = $.extend({}, {                                                                                          // 3275
      text: ''                                                                                                     // 3276
    }, item);                                                                                                      // 3277
                                                                                                                   // 3278
    var defaults = {                                                                                               // 3279
      selected: false,                                                                                             // 3280
      disabled: false                                                                                              // 3281
    };                                                                                                             // 3282
                                                                                                                   // 3283
    if (item.id != null) {                                                                                         // 3284
      item.id = item.id.toString();                                                                                // 3285
    }                                                                                                              // 3286
                                                                                                                   // 3287
    if (item.text != null) {                                                                                       // 3288
      item.text = item.text.toString();                                                                            // 3289
    }                                                                                                              // 3290
                                                                                                                   // 3291
    if (item._resultId == null && item.id && this.container != null) {                                             // 3292
      item._resultId = this.generateResultId(this.container, item);                                                // 3293
    }                                                                                                              // 3294
                                                                                                                   // 3295
    return $.extend({}, defaults, item);                                                                           // 3296
  };                                                                                                               // 3297
                                                                                                                   // 3298
  SelectAdapter.prototype.matches = function (params, data) {                                                      // 3299
    var matcher = this.options.get('matcher');                                                                     // 3300
                                                                                                                   // 3301
    return matcher(params, data);                                                                                  // 3302
  };                                                                                                               // 3303
                                                                                                                   // 3304
  return SelectAdapter;                                                                                            // 3305
});                                                                                                                // 3306
                                                                                                                   // 3307
S2.define('select2/data/array',[                                                                                   // 3308
  './select',                                                                                                      // 3309
  '../utils',                                                                                                      // 3310
  'jquery'                                                                                                         // 3311
], function (SelectAdapter, Utils, $) {                                                                            // 3312
  function ArrayAdapter ($element, options) {                                                                      // 3313
    var data = options.get('data') || [];                                                                          // 3314
                                                                                                                   // 3315
    ArrayAdapter.__super__.constructor.call(this, $element, options);                                              // 3316
                                                                                                                   // 3317
    this.addOptions(this.convertToOptions(data));                                                                  // 3318
  }                                                                                                                // 3319
                                                                                                                   // 3320
  Utils.Extend(ArrayAdapter, SelectAdapter);                                                                       // 3321
                                                                                                                   // 3322
  ArrayAdapter.prototype.select = function (data) {                                                                // 3323
    var $option = this.$element.find('option').filter(function (i, elm) {                                          // 3324
      return elm.value == data.id.toString();                                                                      // 3325
    });                                                                                                            // 3326
                                                                                                                   // 3327
    if ($option.length === 0) {                                                                                    // 3328
      $option = this.option(data);                                                                                 // 3329
                                                                                                                   // 3330
      this.addOptions($option);                                                                                    // 3331
    }                                                                                                              // 3332
                                                                                                                   // 3333
    ArrayAdapter.__super__.select.call(this, data);                                                                // 3334
  };                                                                                                               // 3335
                                                                                                                   // 3336
  ArrayAdapter.prototype.convertToOptions = function (data) {                                                      // 3337
    var self = this;                                                                                               // 3338
                                                                                                                   // 3339
    var $existing = this.$element.find('option');                                                                  // 3340
    var existingIds = $existing.map(function () {                                                                  // 3341
      return self.item($(this)).id;                                                                                // 3342
    }).get();                                                                                                      // 3343
                                                                                                                   // 3344
    var $options = [];                                                                                             // 3345
                                                                                                                   // 3346
    // Filter out all items except for the one passed in the argument                                              // 3347
    function onlyItem (item) {                                                                                     // 3348
      return function () {                                                                                         // 3349
        return $(this).val() == item.id;                                                                           // 3350
      };                                                                                                           // 3351
    }                                                                                                              // 3352
                                                                                                                   // 3353
    for (var d = 0; d < data.length; d++) {                                                                        // 3354
      var item = this._normalizeItem(data[d]);                                                                     // 3355
                                                                                                                   // 3356
      // Skip items which were pre-loaded, only merge the data                                                     // 3357
      if ($.inArray(item.id, existingIds) >= 0) {                                                                  // 3358
        var $existingOption = $existing.filter(onlyItem(item));                                                    // 3359
                                                                                                                   // 3360
        var existingData = this.item($existingOption);                                                             // 3361
        var newData = $.extend(true, {}, item, existingData);                                                      // 3362
                                                                                                                   // 3363
        var $newOption = this.option(newData);                                                                     // 3364
                                                                                                                   // 3365
        $existingOption.replaceWith($newOption);                                                                   // 3366
                                                                                                                   // 3367
        continue;                                                                                                  // 3368
      }                                                                                                            // 3369
                                                                                                                   // 3370
      var $option = this.option(item);                                                                             // 3371
                                                                                                                   // 3372
      if (item.children) {                                                                                         // 3373
        var $children = this.convertToOptions(item.children);                                                      // 3374
                                                                                                                   // 3375
        Utils.appendMany($option, $children);                                                                      // 3376
      }                                                                                                            // 3377
                                                                                                                   // 3378
      $options.push($option);                                                                                      // 3379
    }                                                                                                              // 3380
                                                                                                                   // 3381
    return $options;                                                                                               // 3382
  };                                                                                                               // 3383
                                                                                                                   // 3384
  return ArrayAdapter;                                                                                             // 3385
});                                                                                                                // 3386
                                                                                                                   // 3387
S2.define('select2/data/ajax',[                                                                                    // 3388
  './array',                                                                                                       // 3389
  '../utils',                                                                                                      // 3390
  'jquery'                                                                                                         // 3391
], function (ArrayAdapter, Utils, $) {                                                                             // 3392
  function AjaxAdapter ($element, options) {                                                                       // 3393
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));                                                   // 3394
                                                                                                                   // 3395
    if (this.ajaxOptions.processResults != null) {                                                                 // 3396
      this.processResults = this.ajaxOptions.processResults;                                                       // 3397
    }                                                                                                              // 3398
                                                                                                                   // 3399
    AjaxAdapter.__super__.constructor.call(this, $element, options);                                               // 3400
  }                                                                                                                // 3401
                                                                                                                   // 3402
  Utils.Extend(AjaxAdapter, ArrayAdapter);                                                                         // 3403
                                                                                                                   // 3404
  AjaxAdapter.prototype._applyDefaults = function (options) {                                                      // 3405
    var defaults = {                                                                                               // 3406
      data: function (params) {                                                                                    // 3407
        return $.extend({}, params, {                                                                              // 3408
          q: params.term                                                                                           // 3409
        });                                                                                                        // 3410
      },                                                                                                           // 3411
      transport: function (params, success, failure) {                                                             // 3412
        var $request = $.ajax(params);                                                                             // 3413
                                                                                                                   // 3414
        $request.then(success);                                                                                    // 3415
        $request.fail(failure);                                                                                    // 3416
                                                                                                                   // 3417
        return $request;                                                                                           // 3418
      }                                                                                                            // 3419
    };                                                                                                             // 3420
                                                                                                                   // 3421
    return $.extend({}, defaults, options, true);                                                                  // 3422
  };                                                                                                               // 3423
                                                                                                                   // 3424
  AjaxAdapter.prototype.processResults = function (results) {                                                      // 3425
    return results;                                                                                                // 3426
  };                                                                                                               // 3427
                                                                                                                   // 3428
  AjaxAdapter.prototype.query = function (params, callback) {                                                      // 3429
    var matches = [];                                                                                              // 3430
    var self = this;                                                                                               // 3431
                                                                                                                   // 3432
    if (this._request != null) {                                                                                   // 3433
      // JSONP requests cannot always be aborted                                                                   // 3434
      if ($.isFunction(this._request.abort)) {                                                                     // 3435
        this._request.abort();                                                                                     // 3436
      }                                                                                                            // 3437
                                                                                                                   // 3438
      this._request = null;                                                                                        // 3439
    }                                                                                                              // 3440
                                                                                                                   // 3441
    var options = $.extend({                                                                                       // 3442
      type: 'GET'                                                                                                  // 3443
    }, this.ajaxOptions);                                                                                          // 3444
                                                                                                                   // 3445
    if (typeof options.url === 'function') {                                                                       // 3446
      options.url = options.url.call(this.$element, params);                                                       // 3447
    }                                                                                                              // 3448
                                                                                                                   // 3449
    if (typeof options.data === 'function') {                                                                      // 3450
      options.data = options.data.call(this.$element, params);                                                     // 3451
    }                                                                                                              // 3452
                                                                                                                   // 3453
    function request () {                                                                                          // 3454
      var $request = options.transport(options, function (data) {                                                  // 3455
        var results = self.processResults(data, params);                                                           // 3456
                                                                                                                   // 3457
        if (self.options.get('debug') && window.console && console.error) {                                        // 3458
          // Check to make sure that the response included a `results` key.                                        // 3459
          if (!results || !results.results || !$.isArray(results.results)) {                                       // 3460
            console.error(                                                                                         // 3461
              'Select2: The AJAX results did not return an array in the ' +                                        // 3462
              '`results` key of the response.'                                                                     // 3463
            );                                                                                                     // 3464
          }                                                                                                        // 3465
        }                                                                                                          // 3466
                                                                                                                   // 3467
        callback(results);                                                                                         // 3468
      }, function () {                                                                                             // 3469
        // Attempt to detect if a request was aborted                                                              // 3470
        // Only works if the transport exposes a status property                                                   // 3471
        if ($request.status && $request.status === '0') {                                                          // 3472
          return;                                                                                                  // 3473
        }                                                                                                          // 3474
                                                                                                                   // 3475
        self.trigger('results:message', {                                                                          // 3476
          message: 'errorLoading'                                                                                  // 3477
        });                                                                                                        // 3478
      });                                                                                                          // 3479
                                                                                                                   // 3480
      self._request = $request;                                                                                    // 3481
    }                                                                                                              // 3482
                                                                                                                   // 3483
    if (this.ajaxOptions.delay && params.term != null) {                                                           // 3484
      if (this._queryTimeout) {                                                                                    // 3485
        window.clearTimeout(this._queryTimeout);                                                                   // 3486
      }                                                                                                            // 3487
                                                                                                                   // 3488
      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);                                     // 3489
    } else {                                                                                                       // 3490
      request();                                                                                                   // 3491
    }                                                                                                              // 3492
  };                                                                                                               // 3493
                                                                                                                   // 3494
  return AjaxAdapter;                                                                                              // 3495
});                                                                                                                // 3496
                                                                                                                   // 3497
S2.define('select2/data/tags',[                                                                                    // 3498
  'jquery'                                                                                                         // 3499
], function ($) {                                                                                                  // 3500
  function Tags (decorated, $element, options) {                                                                   // 3501
    var tags = options.get('tags');                                                                                // 3502
                                                                                                                   // 3503
    var createTag = options.get('createTag');                                                                      // 3504
                                                                                                                   // 3505
    if (createTag !== undefined) {                                                                                 // 3506
      this.createTag = createTag;                                                                                  // 3507
    }                                                                                                              // 3508
                                                                                                                   // 3509
    var insertTag = options.get('insertTag');                                                                      // 3510
                                                                                                                   // 3511
    if (insertTag !== undefined) {                                                                                 // 3512
        this.insertTag = insertTag;                                                                                // 3513
    }                                                                                                              // 3514
                                                                                                                   // 3515
    decorated.call(this, $element, options);                                                                       // 3516
                                                                                                                   // 3517
    if ($.isArray(tags)) {                                                                                         // 3518
      for (var t = 0; t < tags.length; t++) {                                                                      // 3519
        var tag = tags[t];                                                                                         // 3520
        var item = this._normalizeItem(tag);                                                                       // 3521
                                                                                                                   // 3522
        var $option = this.option(item);                                                                           // 3523
                                                                                                                   // 3524
        this.$element.append($option);                                                                             // 3525
      }                                                                                                            // 3526
    }                                                                                                              // 3527
  }                                                                                                                // 3528
                                                                                                                   // 3529
  Tags.prototype.query = function (decorated, params, callback) {                                                  // 3530
    var self = this;                                                                                               // 3531
                                                                                                                   // 3532
    this._removeOldTags();                                                                                         // 3533
                                                                                                                   // 3534
    if (params.term == null || params.page != null) {                                                              // 3535
      decorated.call(this, params, callback);                                                                      // 3536
      return;                                                                                                      // 3537
    }                                                                                                              // 3538
                                                                                                                   // 3539
    function wrapper (obj, child) {                                                                                // 3540
      var data = obj.results;                                                                                      // 3541
                                                                                                                   // 3542
      for (var i = 0; i < data.length; i++) {                                                                      // 3543
        var option = data[i];                                                                                      // 3544
                                                                                                                   // 3545
        var checkChildren = (                                                                                      // 3546
          option.children != null &&                                                                               // 3547
          !wrapper({                                                                                               // 3548
            results: option.children                                                                               // 3549
          }, true)                                                                                                 // 3550
        );                                                                                                         // 3551
                                                                                                                   // 3552
        var checkText = option.text === params.term;                                                               // 3553
                                                                                                                   // 3554
        if (checkText || checkChildren) {                                                                          // 3555
          if (child) {                                                                                             // 3556
            return false;                                                                                          // 3557
          }                                                                                                        // 3558
                                                                                                                   // 3559
          obj.data = data;                                                                                         // 3560
          callback(obj);                                                                                           // 3561
                                                                                                                   // 3562
          return;                                                                                                  // 3563
        }                                                                                                          // 3564
      }                                                                                                            // 3565
                                                                                                                   // 3566
      if (child) {                                                                                                 // 3567
        return true;                                                                                               // 3568
      }                                                                                                            // 3569
                                                                                                                   // 3570
      var tag = self.createTag(params);                                                                            // 3571
                                                                                                                   // 3572
      if (tag != null) {                                                                                           // 3573
        var $option = self.option(tag);                                                                            // 3574
        $option.attr('data-select2-tag', true);                                                                    // 3575
                                                                                                                   // 3576
        self.addOptions([$option]);                                                                                // 3577
                                                                                                                   // 3578
        self.insertTag(data, tag);                                                                                 // 3579
      }                                                                                                            // 3580
                                                                                                                   // 3581
      obj.results = data;                                                                                          // 3582
                                                                                                                   // 3583
      callback(obj);                                                                                               // 3584
    }                                                                                                              // 3585
                                                                                                                   // 3586
    decorated.call(this, params, wrapper);                                                                         // 3587
  };                                                                                                               // 3588
                                                                                                                   // 3589
  Tags.prototype.createTag = function (decorated, params) {                                                        // 3590
    var term = $.trim(params.term);                                                                                // 3591
                                                                                                                   // 3592
    if (term === '') {                                                                                             // 3593
      return null;                                                                                                 // 3594
    }                                                                                                              // 3595
                                                                                                                   // 3596
    return {                                                                                                       // 3597
      id: term,                                                                                                    // 3598
      text: term                                                                                                   // 3599
    };                                                                                                             // 3600
  };                                                                                                               // 3601
                                                                                                                   // 3602
  Tags.prototype.insertTag = function (_, data, tag) {                                                             // 3603
    data.unshift(tag);                                                                                             // 3604
  };                                                                                                               // 3605
                                                                                                                   // 3606
  Tags.prototype._removeOldTags = function (_) {                                                                   // 3607
    var tag = this._lastTag;                                                                                       // 3608
                                                                                                                   // 3609
    var $options = this.$element.find('option[data-select2-tag]');                                                 // 3610
                                                                                                                   // 3611
    $options.each(function () {                                                                                    // 3612
      if (this.selected) {                                                                                         // 3613
        return;                                                                                                    // 3614
      }                                                                                                            // 3615
                                                                                                                   // 3616
      $(this).remove();                                                                                            // 3617
    });                                                                                                            // 3618
  };                                                                                                               // 3619
                                                                                                                   // 3620
  return Tags;                                                                                                     // 3621
});                                                                                                                // 3622
                                                                                                                   // 3623
S2.define('select2/data/tokenizer',[                                                                               // 3624
  'jquery'                                                                                                         // 3625
], function ($) {                                                                                                  // 3626
  function Tokenizer (decorated, $element, options) {                                                              // 3627
    var tokenizer = options.get('tokenizer');                                                                      // 3628
                                                                                                                   // 3629
    if (tokenizer !== undefined) {                                                                                 // 3630
      this.tokenizer = tokenizer;                                                                                  // 3631
    }                                                                                                              // 3632
                                                                                                                   // 3633
    decorated.call(this, $element, options);                                                                       // 3634
  }                                                                                                                // 3635
                                                                                                                   // 3636
  Tokenizer.prototype.bind = function (decorated, container, $container) {                                         // 3637
    decorated.call(this, container, $container);                                                                   // 3638
                                                                                                                   // 3639
    this.$search =  container.dropdown.$search || container.selection.$search ||                                   // 3640
      $container.find('.select2-search__field');                                                                   // 3641
  };                                                                                                               // 3642
                                                                                                                   // 3643
  Tokenizer.prototype.query = function (decorated, params, callback) {                                             // 3644
    var self = this;                                                                                               // 3645
                                                                                                                   // 3646
    function createAndSelect (data) {                                                                              // 3647
      // Normalize the data object so we can use it for checks                                                     // 3648
      var item = self._normalizeItem(data);                                                                        // 3649
                                                                                                                   // 3650
      // Check if the data object already exists as a tag                                                          // 3651
      // Select it if it doesn't                                                                                   // 3652
      var $existingOptions = self.$element.find('option').filter(function () {                                     // 3653
        return $(this).val() === item.id;                                                                          // 3654
      });                                                                                                          // 3655
                                                                                                                   // 3656
      // If an existing option wasn't found for it, create the option                                              // 3657
      if (!$existingOptions.length) {                                                                              // 3658
        var $option = self.option(item);                                                                           // 3659
        $option.attr('data-select2-tag', true);                                                                    // 3660
                                                                                                                   // 3661
        self._removeOldTags();                                                                                     // 3662
        self.addOptions([$option]);                                                                                // 3663
      }                                                                                                            // 3664
                                                                                                                   // 3665
      // Select the item, now that we know there is an option for it                                               // 3666
      select(item);                                                                                                // 3667
    }                                                                                                              // 3668
                                                                                                                   // 3669
    function select (data) {                                                                                       // 3670
      self.trigger('select', {                                                                                     // 3671
        data: data                                                                                                 // 3672
      });                                                                                                          // 3673
    }                                                                                                              // 3674
                                                                                                                   // 3675
    params.term = params.term || '';                                                                               // 3676
                                                                                                                   // 3677
    var tokenData = this.tokenizer(params, this.options, createAndSelect);                                         // 3678
                                                                                                                   // 3679
    if (tokenData.term !== params.term) {                                                                          // 3680
      // Replace the search term if we have the search box                                                         // 3681
      if (this.$search.length) {                                                                                   // 3682
        this.$search.val(tokenData.term);                                                                          // 3683
        this.$search.focus();                                                                                      // 3684
      }                                                                                                            // 3685
                                                                                                                   // 3686
      params.term = tokenData.term;                                                                                // 3687
    }                                                                                                              // 3688
                                                                                                                   // 3689
    decorated.call(this, params, callback);                                                                        // 3690
  };                                                                                                               // 3691
                                                                                                                   // 3692
  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {                                        // 3693
    var separators = options.get('tokenSeparators') || [];                                                         // 3694
    var term = params.term;                                                                                        // 3695
    var i = 0;                                                                                                     // 3696
                                                                                                                   // 3697
    var createTag = this.createTag || function (params) {                                                          // 3698
      return {                                                                                                     // 3699
        id: params.term,                                                                                           // 3700
        text: params.term                                                                                          // 3701
      };                                                                                                           // 3702
    };                                                                                                             // 3703
                                                                                                                   // 3704
    while (i < term.length) {                                                                                      // 3705
      var termChar = term[i];                                                                                      // 3706
                                                                                                                   // 3707
      if ($.inArray(termChar, separators) === -1) {                                                                // 3708
        i++;                                                                                                       // 3709
                                                                                                                   // 3710
        continue;                                                                                                  // 3711
      }                                                                                                            // 3712
                                                                                                                   // 3713
      var part = term.substr(0, i);                                                                                // 3714
      var partParams = $.extend({}, params, {                                                                      // 3715
        term: part                                                                                                 // 3716
      });                                                                                                          // 3717
                                                                                                                   // 3718
      var data = createTag(partParams);                                                                            // 3719
                                                                                                                   // 3720
      if (data == null) {                                                                                          // 3721
        i++;                                                                                                       // 3722
        continue;                                                                                                  // 3723
      }                                                                                                            // 3724
                                                                                                                   // 3725
      callback(data);                                                                                              // 3726
                                                                                                                   // 3727
      // Reset the term to not include the tokenized portion                                                       // 3728
      term = term.substr(i + 1) || '';                                                                             // 3729
      i = 0;                                                                                                       // 3730
    }                                                                                                              // 3731
                                                                                                                   // 3732
    return {                                                                                                       // 3733
      term: term                                                                                                   // 3734
    };                                                                                                             // 3735
  };                                                                                                               // 3736
                                                                                                                   // 3737
  return Tokenizer;                                                                                                // 3738
});                                                                                                                // 3739
                                                                                                                   // 3740
S2.define('select2/data/minimumInputLength',[                                                                      // 3741
                                                                                                                   // 3742
], function () {                                                                                                   // 3743
  function MinimumInputLength (decorated, $e, options) {                                                           // 3744
    this.minimumInputLength = options.get('minimumInputLength');                                                   // 3745
                                                                                                                   // 3746
    decorated.call(this, $e, options);                                                                             // 3747
  }                                                                                                                // 3748
                                                                                                                   // 3749
  MinimumInputLength.prototype.query = function (decorated, params, callback) {                                    // 3750
    params.term = params.term || '';                                                                               // 3751
                                                                                                                   // 3752
    if (params.term.length < this.minimumInputLength) {                                                            // 3753
      this.trigger('results:message', {                                                                            // 3754
        message: 'inputTooShort',                                                                                  // 3755
        args: {                                                                                                    // 3756
          minimum: this.minimumInputLength,                                                                        // 3757
          input: params.term,                                                                                      // 3758
          params: params                                                                                           // 3759
        }                                                                                                          // 3760
      });                                                                                                          // 3761
                                                                                                                   // 3762
      return;                                                                                                      // 3763
    }                                                                                                              // 3764
                                                                                                                   // 3765
    decorated.call(this, params, callback);                                                                        // 3766
  };                                                                                                               // 3767
                                                                                                                   // 3768
  return MinimumInputLength;                                                                                       // 3769
});                                                                                                                // 3770
                                                                                                                   // 3771
S2.define('select2/data/maximumInputLength',[                                                                      // 3772
                                                                                                                   // 3773
], function () {                                                                                                   // 3774
  function MaximumInputLength (decorated, $e, options) {                                                           // 3775
    this.maximumInputLength = options.get('maximumInputLength');                                                   // 3776
                                                                                                                   // 3777
    decorated.call(this, $e, options);                                                                             // 3778
  }                                                                                                                // 3779
                                                                                                                   // 3780
  MaximumInputLength.prototype.query = function (decorated, params, callback) {                                    // 3781
    params.term = params.term || '';                                                                               // 3782
                                                                                                                   // 3783
    if (this.maximumInputLength > 0 &&                                                                             // 3784
        params.term.length > this.maximumInputLength) {                                                            // 3785
      this.trigger('results:message', {                                                                            // 3786
        message: 'inputTooLong',                                                                                   // 3787
        args: {                                                                                                    // 3788
          maximum: this.maximumInputLength,                                                                        // 3789
          input: params.term,                                                                                      // 3790
          params: params                                                                                           // 3791
        }                                                                                                          // 3792
      });                                                                                                          // 3793
                                                                                                                   // 3794
      return;                                                                                                      // 3795
    }                                                                                                              // 3796
                                                                                                                   // 3797
    decorated.call(this, params, callback);                                                                        // 3798
  };                                                                                                               // 3799
                                                                                                                   // 3800
  return MaximumInputLength;                                                                                       // 3801
});                                                                                                                // 3802
                                                                                                                   // 3803
S2.define('select2/data/maximumSelectionLength',[                                                                  // 3804
                                                                                                                   // 3805
], function (){                                                                                                    // 3806
  function MaximumSelectionLength (decorated, $e, options) {                                                       // 3807
    this.maximumSelectionLength = options.get('maximumSelectionLength');                                           // 3808
                                                                                                                   // 3809
    decorated.call(this, $e, options);                                                                             // 3810
  }                                                                                                                // 3811
                                                                                                                   // 3812
  MaximumSelectionLength.prototype.query =                                                                         // 3813
    function (decorated, params, callback) {                                                                       // 3814
      var self = this;                                                                                             // 3815
                                                                                                                   // 3816
      this.current(function (currentData) {                                                                        // 3817
        var count = currentData != null ? currentData.length : 0;                                                  // 3818
        if (self.maximumSelectionLength > 0 &&                                                                     // 3819
          count >= self.maximumSelectionLength) {                                                                  // 3820
          self.trigger('results:message', {                                                                        // 3821
            message: 'maximumSelected',                                                                            // 3822
            args: {                                                                                                // 3823
              maximum: self.maximumSelectionLength                                                                 // 3824
            }                                                                                                      // 3825
          });                                                                                                      // 3826
          return;                                                                                                  // 3827
        }                                                                                                          // 3828
        decorated.call(self, params, callback);                                                                    // 3829
      });                                                                                                          // 3830
  };                                                                                                               // 3831
                                                                                                                   // 3832
  return MaximumSelectionLength;                                                                                   // 3833
});                                                                                                                // 3834
                                                                                                                   // 3835
S2.define('select2/dropdown',[                                                                                     // 3836
  'jquery',                                                                                                        // 3837
  './utils'                                                                                                        // 3838
], function ($, Utils) {                                                                                           // 3839
  function Dropdown ($element, options) {                                                                          // 3840
    this.$element = $element;                                                                                      // 3841
    this.options = options;                                                                                        // 3842
                                                                                                                   // 3843
    Dropdown.__super__.constructor.call(this);                                                                     // 3844
  }                                                                                                                // 3845
                                                                                                                   // 3846
  Utils.Extend(Dropdown, Utils.Observable);                                                                        // 3847
                                                                                                                   // 3848
  Dropdown.prototype.render = function () {                                                                        // 3849
    var $dropdown = $(                                                                                             // 3850
      '<span class="select2-dropdown">' +                                                                          // 3851
        '<span class="select2-results"></span>' +                                                                  // 3852
      '</span>'                                                                                                    // 3853
    );                                                                                                             // 3854
                                                                                                                   // 3855
    $dropdown.attr('dir', this.options.get('dir'));                                                                // 3856
                                                                                                                   // 3857
    this.$dropdown = $dropdown;                                                                                    // 3858
                                                                                                                   // 3859
    return $dropdown;                                                                                              // 3860
  };                                                                                                               // 3861
                                                                                                                   // 3862
  Dropdown.prototype.bind = function () {                                                                          // 3863
    // Should be implemented in subclasses                                                                         // 3864
  };                                                                                                               // 3865
                                                                                                                   // 3866
  Dropdown.prototype.position = function ($dropdown, $container) {                                                 // 3867
    // Should be implmented in subclasses                                                                          // 3868
  };                                                                                                               // 3869
                                                                                                                   // 3870
  Dropdown.prototype.destroy = function () {                                                                       // 3871
    // Remove the dropdown from the DOM                                                                            // 3872
    this.$dropdown.remove();                                                                                       // 3873
  };                                                                                                               // 3874
                                                                                                                   // 3875
  return Dropdown;                                                                                                 // 3876
});                                                                                                                // 3877
                                                                                                                   // 3878
S2.define('select2/dropdown/search',[                                                                              // 3879
  'jquery',                                                                                                        // 3880
  '../utils'                                                                                                       // 3881
], function ($, Utils) {                                                                                           // 3882
  function Search () { }                                                                                           // 3883
                                                                                                                   // 3884
  Search.prototype.render = function (decorated) {                                                                 // 3885
    var $rendered = decorated.call(this);                                                                          // 3886
                                                                                                                   // 3887
    var $search = $(                                                                                               // 3888
      '<span class="select2-search select2-search--dropdown">' +                                                   // 3889
        '<input class="select2-search__field" type="search" tabindex="-1"' +                                       // 3890
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +                                             // 3891
        ' spellcheck="false" role="textbox" />' +                                                                  // 3892
      '</span>'                                                                                                    // 3893
    );                                                                                                             // 3894
                                                                                                                   // 3895
    this.$searchContainer = $search;                                                                               // 3896
    this.$search = $search.find('input');                                                                          // 3897
                                                                                                                   // 3898
    $rendered.prepend($search);                                                                                    // 3899
                                                                                                                   // 3900
    return $rendered;                                                                                              // 3901
  };                                                                                                               // 3902
                                                                                                                   // 3903
  Search.prototype.bind = function (decorated, container, $container) {                                            // 3904
    var self = this;                                                                                               // 3905
                                                                                                                   // 3906
    decorated.call(this, container, $container);                                                                   // 3907
                                                                                                                   // 3908
    this.$search.on('keydown', function (evt) {                                                                    // 3909
      self.trigger('keypress', evt);                                                                               // 3910
                                                                                                                   // 3911
      self._keyUpPrevented = evt.isDefaultPrevented();                                                             // 3912
    });                                                                                                            // 3913
                                                                                                                   // 3914
    // Workaround for browsers which do not support the `input` event                                              // 3915
    // This will prevent double-triggering of events for browsers which support                                    // 3916
    // both the `keyup` and `input` events.                                                                        // 3917
    this.$search.on('input', function (evt) {                                                                      // 3918
      // Unbind the duplicated `keyup` event                                                                       // 3919
      $(this).off('keyup');                                                                                        // 3920
    });                                                                                                            // 3921
                                                                                                                   // 3922
    this.$search.on('keyup input', function (evt) {                                                                // 3923
      self.handleSearch(evt);                                                                                      // 3924
    });                                                                                                            // 3925
                                                                                                                   // 3926
    container.on('open', function () {                                                                             // 3927
      self.$search.attr('tabindex', 0);                                                                            // 3928
                                                                                                                   // 3929
      self.$search.focus();                                                                                        // 3930
                                                                                                                   // 3931
      window.setTimeout(function () {                                                                              // 3932
        self.$search.focus();                                                                                      // 3933
      }, 0);                                                                                                       // 3934
    });                                                                                                            // 3935
                                                                                                                   // 3936
    container.on('close', function () {                                                                            // 3937
      self.$search.attr('tabindex', -1);                                                                           // 3938
                                                                                                                   // 3939
      self.$search.val('');                                                                                        // 3940
    });                                                                                                            // 3941
                                                                                                                   // 3942
    container.on('focus', function () {                                                                            // 3943
      if (container.isOpen()) {                                                                                    // 3944
        self.$search.focus();                                                                                      // 3945
      }                                                                                                            // 3946
    });                                                                                                            // 3947
                                                                                                                   // 3948
    container.on('results:all', function (params) {                                                                // 3949
      if (params.query.term == null || params.query.term === '') {                                                 // 3950
        var showSearch = self.showSearch(params);                                                                  // 3951
                                                                                                                   // 3952
        if (showSearch) {                                                                                          // 3953
          self.$searchContainer.removeClass('select2-search--hide');                                               // 3954
        } else {                                                                                                   // 3955
          self.$searchContainer.addClass('select2-search--hide');                                                  // 3956
        }                                                                                                          // 3957
      }                                                                                                            // 3958
    });                                                                                                            // 3959
  };                                                                                                               // 3960
                                                                                                                   // 3961
  Search.prototype.handleSearch = function (evt) {                                                                 // 3962
    if (!this._keyUpPrevented) {                                                                                   // 3963
      var input = this.$search.val();                                                                              // 3964
                                                                                                                   // 3965
      this.trigger('query', {                                                                                      // 3966
        term: input                                                                                                // 3967
      });                                                                                                          // 3968
    }                                                                                                              // 3969
                                                                                                                   // 3970
    this._keyUpPrevented = false;                                                                                  // 3971
  };                                                                                                               // 3972
                                                                                                                   // 3973
  Search.prototype.showSearch = function (_, params) {                                                             // 3974
    return true;                                                                                                   // 3975
  };                                                                                                               // 3976
                                                                                                                   // 3977
  return Search;                                                                                                   // 3978
});                                                                                                                // 3979
                                                                                                                   // 3980
S2.define('select2/dropdown/hidePlaceholder',[                                                                     // 3981
                                                                                                                   // 3982
], function () {                                                                                                   // 3983
  function HidePlaceholder (decorated, $element, options, dataAdapter) {                                           // 3984
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));                                      // 3985
                                                                                                                   // 3986
    decorated.call(this, $element, options, dataAdapter);                                                          // 3987
  }                                                                                                                // 3988
                                                                                                                   // 3989
  HidePlaceholder.prototype.append = function (decorated, data) {                                                  // 3990
    data.results = this.removePlaceholder(data.results);                                                           // 3991
                                                                                                                   // 3992
    decorated.call(this, data);                                                                                    // 3993
  };                                                                                                               // 3994
                                                                                                                   // 3995
  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {                                     // 3996
    if (typeof placeholder === 'string') {                                                                         // 3997
      placeholder = {                                                                                              // 3998
        id: '',                                                                                                    // 3999
        text: placeholder                                                                                          // 4000
      };                                                                                                           // 4001
    }                                                                                                              // 4002
                                                                                                                   // 4003
    return placeholder;                                                                                            // 4004
  };                                                                                                               // 4005
                                                                                                                   // 4006
  HidePlaceholder.prototype.removePlaceholder = function (_, data) {                                               // 4007
    var modifiedData = data.slice(0);                                                                              // 4008
                                                                                                                   // 4009
    for (var d = data.length - 1; d >= 0; d--) {                                                                   // 4010
      var item = data[d];                                                                                          // 4011
                                                                                                                   // 4012
      if (this.placeholder.id === item.id) {                                                                       // 4013
        modifiedData.splice(d, 1);                                                                                 // 4014
      }                                                                                                            // 4015
    }                                                                                                              // 4016
                                                                                                                   // 4017
    return modifiedData;                                                                                           // 4018
  };                                                                                                               // 4019
                                                                                                                   // 4020
  return HidePlaceholder;                                                                                          // 4021
});                                                                                                                // 4022
                                                                                                                   // 4023
S2.define('select2/dropdown/infiniteScroll',[                                                                      // 4024
  'jquery'                                                                                                         // 4025
], function ($) {                                                                                                  // 4026
  function InfiniteScroll (decorated, $element, options, dataAdapter) {                                            // 4027
    this.lastParams = {};                                                                                          // 4028
                                                                                                                   // 4029
    decorated.call(this, $element, options, dataAdapter);                                                          // 4030
                                                                                                                   // 4031
    this.$loadingMore = this.createLoadingMore();                                                                  // 4032
    this.loading = false;                                                                                          // 4033
  }                                                                                                                // 4034
                                                                                                                   // 4035
  InfiniteScroll.prototype.append = function (decorated, data) {                                                   // 4036
    this.$loadingMore.remove();                                                                                    // 4037
    this.loading = false;                                                                                          // 4038
                                                                                                                   // 4039
    decorated.call(this, data);                                                                                    // 4040
                                                                                                                   // 4041
    if (this.showLoadingMore(data)) {                                                                              // 4042
      this.$results.append(this.$loadingMore);                                                                     // 4043
    }                                                                                                              // 4044
  };                                                                                                               // 4045
                                                                                                                   // 4046
  InfiniteScroll.prototype.bind = function (decorated, container, $container) {                                    // 4047
    var self = this;                                                                                               // 4048
                                                                                                                   // 4049
    decorated.call(this, container, $container);                                                                   // 4050
                                                                                                                   // 4051
    container.on('query', function (params) {                                                                      // 4052
      self.lastParams = params;                                                                                    // 4053
      self.loading = true;                                                                                         // 4054
    });                                                                                                            // 4055
                                                                                                                   // 4056
    container.on('query:append', function (params) {                                                               // 4057
      self.lastParams = params;                                                                                    // 4058
      self.loading = true;                                                                                         // 4059
    });                                                                                                            // 4060
                                                                                                                   // 4061
    this.$results.on('scroll', function () {                                                                       // 4062
      var isLoadMoreVisible = $.contains(                                                                          // 4063
        document.documentElement,                                                                                  // 4064
        self.$loadingMore[0]                                                                                       // 4065
      );                                                                                                           // 4066
                                                                                                                   // 4067
      if (self.loading || !isLoadMoreVisible) {                                                                    // 4068
        return;                                                                                                    // 4069
      }                                                                                                            // 4070
                                                                                                                   // 4071
      var currentOffset = self.$results.offset().top +                                                             // 4072
        self.$results.outerHeight(false);                                                                          // 4073
      var loadingMoreOffset = self.$loadingMore.offset().top +                                                     // 4074
        self.$loadingMore.outerHeight(false);                                                                      // 4075
                                                                                                                   // 4076
      if (currentOffset + 50 >= loadingMoreOffset) {                                                               // 4077
        self.loadMore();                                                                                           // 4078
      }                                                                                                            // 4079
    });                                                                                                            // 4080
  };                                                                                                               // 4081
                                                                                                                   // 4082
  InfiniteScroll.prototype.loadMore = function () {                                                                // 4083
    this.loading = true;                                                                                           // 4084
                                                                                                                   // 4085
    var params = $.extend({}, {page: 1}, this.lastParams);                                                         // 4086
                                                                                                                   // 4087
    params.page++;                                                                                                 // 4088
                                                                                                                   // 4089
    this.trigger('query:append', params);                                                                          // 4090
  };                                                                                                               // 4091
                                                                                                                   // 4092
  InfiniteScroll.prototype.showLoadingMore = function (_, data) {                                                  // 4093
    return data.pagination && data.pagination.more;                                                                // 4094
  };                                                                                                               // 4095
                                                                                                                   // 4096
  InfiniteScroll.prototype.createLoadingMore = function () {                                                       // 4097
    var $option = $(                                                                                               // 4098
      '<li ' +                                                                                                     // 4099
      'class="select2-results__option select2-results__option--load-more"' +                                       // 4100
      'role="treeitem" aria-disabled="true"></li>'                                                                 // 4101
    );                                                                                                             // 4102
                                                                                                                   // 4103
    var message = this.options.get('translations').get('loadingMore');                                             // 4104
                                                                                                                   // 4105
    $option.html(message(this.lastParams));                                                                        // 4106
                                                                                                                   // 4107
    return $option;                                                                                                // 4108
  };                                                                                                               // 4109
                                                                                                                   // 4110
  return InfiniteScroll;                                                                                           // 4111
});                                                                                                                // 4112
                                                                                                                   // 4113
S2.define('select2/dropdown/attachBody',[                                                                          // 4114
  'jquery',                                                                                                        // 4115
  '../utils'                                                                                                       // 4116
], function ($, Utils) {                                                                                           // 4117
  function AttachBody (decorated, $element, options) {                                                             // 4118
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);                                      // 4119
                                                                                                                   // 4120
    decorated.call(this, $element, options);                                                                       // 4121
  }                                                                                                                // 4122
                                                                                                                   // 4123
  AttachBody.prototype.bind = function (decorated, container, $container) {                                        // 4124
    var self = this;                                                                                               // 4125
                                                                                                                   // 4126
    var setupResultsEvents = false;                                                                                // 4127
                                                                                                                   // 4128
    decorated.call(this, container, $container);                                                                   // 4129
                                                                                                                   // 4130
    container.on('open', function () {                                                                             // 4131
      self._showDropdown();                                                                                        // 4132
      self._attachPositioningHandler(container);                                                                   // 4133
                                                                                                                   // 4134
      if (!setupResultsEvents) {                                                                                   // 4135
        setupResultsEvents = true;                                                                                 // 4136
                                                                                                                   // 4137
        container.on('results:all', function () {                                                                  // 4138
          self._positionDropdown();                                                                                // 4139
          self._resizeDropdown();                                                                                  // 4140
        });                                                                                                        // 4141
                                                                                                                   // 4142
        container.on('results:append', function () {                                                               // 4143
          self._positionDropdown();                                                                                // 4144
          self._resizeDropdown();                                                                                  // 4145
        });                                                                                                        // 4146
      }                                                                                                            // 4147
    });                                                                                                            // 4148
                                                                                                                   // 4149
    container.on('close', function () {                                                                            // 4150
      self._hideDropdown();                                                                                        // 4151
      self._detachPositioningHandler(container);                                                                   // 4152
    });                                                                                                            // 4153
                                                                                                                   // 4154
    this.$dropdownContainer.on('mousedown', function (evt) {                                                       // 4155
      evt.stopPropagation();                                                                                       // 4156
    });                                                                                                            // 4157
  };                                                                                                               // 4158
                                                                                                                   // 4159
  AttachBody.prototype.destroy = function (decorated) {                                                            // 4160
    decorated.call(this);                                                                                          // 4161
                                                                                                                   // 4162
    this.$dropdownContainer.remove();                                                                              // 4163
  };                                                                                                               // 4164
                                                                                                                   // 4165
  AttachBody.prototype.position = function (decorated, $dropdown, $container) {                                    // 4166
    // Clone all of the container classes                                                                          // 4167
    $dropdown.attr('class', $container.attr('class'));                                                             // 4168
                                                                                                                   // 4169
    $dropdown.removeClass('select2');                                                                              // 4170
    $dropdown.addClass('select2-container--open');                                                                 // 4171
                                                                                                                   // 4172
    $dropdown.css({                                                                                                // 4173
      position: 'absolute',                                                                                        // 4174
      top: -999999                                                                                                 // 4175
    });                                                                                                            // 4176
                                                                                                                   // 4177
    this.$container = $container;                                                                                  // 4178
  };                                                                                                               // 4179
                                                                                                                   // 4180
  AttachBody.prototype.render = function (decorated) {                                                             // 4181
    var $container = $('<span></span>');                                                                           // 4182
                                                                                                                   // 4183
    var $dropdown = decorated.call(this);                                                                          // 4184
    $container.append($dropdown);                                                                                  // 4185
                                                                                                                   // 4186
    this.$dropdownContainer = $container;                                                                          // 4187
                                                                                                                   // 4188
    return $container;                                                                                             // 4189
  };                                                                                                               // 4190
                                                                                                                   // 4191
  AttachBody.prototype._hideDropdown = function (decorated) {                                                      // 4192
    this.$dropdownContainer.detach();                                                                              // 4193
  };                                                                                                               // 4194
                                                                                                                   // 4195
  AttachBody.prototype._attachPositioningHandler =                                                                 // 4196
      function (decorated, container) {                                                                            // 4197
    var self = this;                                                                                               // 4198
                                                                                                                   // 4199
    var scrollEvent = 'scroll.select2.' + container.id;                                                            // 4200
    var resizeEvent = 'resize.select2.' + container.id;                                                            // 4201
    var orientationEvent = 'orientationchange.select2.' + container.id;                                            // 4202
                                                                                                                   // 4203
    var $watchers = this.$container.parents().filter(Utils.hasScroll);                                             // 4204
    $watchers.each(function () {                                                                                   // 4205
      $(this).data('select2-scroll-position', {                                                                    // 4206
        x: $(this).scrollLeft(),                                                                                   // 4207
        y: $(this).scrollTop()                                                                                     // 4208
      });                                                                                                          // 4209
    });                                                                                                            // 4210
                                                                                                                   // 4211
    $watchers.on(scrollEvent, function (ev) {                                                                      // 4212
      var position = $(this).data('select2-scroll-position');                                                      // 4213
      $(this).scrollTop(position.y);                                                                               // 4214
    });                                                                                                            // 4215
                                                                                                                   // 4216
    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,                                         // 4217
      function (e) {                                                                                               // 4218
      self._positionDropdown();                                                                                    // 4219
      self._resizeDropdown();                                                                                      // 4220
    });                                                                                                            // 4221
  };                                                                                                               // 4222
                                                                                                                   // 4223
  AttachBody.prototype._detachPositioningHandler =                                                                 // 4224
      function (decorated, container) {                                                                            // 4225
    var scrollEvent = 'scroll.select2.' + container.id;                                                            // 4226
    var resizeEvent = 'resize.select2.' + container.id;                                                            // 4227
    var orientationEvent = 'orientationchange.select2.' + container.id;                                            // 4228
                                                                                                                   // 4229
    var $watchers = this.$container.parents().filter(Utils.hasScroll);                                             // 4230
    $watchers.off(scrollEvent);                                                                                    // 4231
                                                                                                                   // 4232
    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);                                       // 4233
  };                                                                                                               // 4234
                                                                                                                   // 4235
  AttachBody.prototype._positionDropdown = function () {                                                           // 4236
    var $window = $(window);                                                                                       // 4237
                                                                                                                   // 4238
    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');                                     // 4239
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');                                     // 4240
                                                                                                                   // 4241
    var newDirection = null;                                                                                       // 4242
                                                                                                                   // 4243
    var offset = this.$container.offset();                                                                         // 4244
                                                                                                                   // 4245
    offset.bottom = offset.top + this.$container.outerHeight(false);                                               // 4246
                                                                                                                   // 4247
    var container = {                                                                                              // 4248
      height: this.$container.outerHeight(false)                                                                   // 4249
    };                                                                                                             // 4250
                                                                                                                   // 4251
    container.top = offset.top;                                                                                    // 4252
    container.bottom = offset.top + container.height;                                                              // 4253
                                                                                                                   // 4254
    var dropdown = {                                                                                               // 4255
      height: this.$dropdown.outerHeight(false)                                                                    // 4256
    };                                                                                                             // 4257
                                                                                                                   // 4258
    var viewport = {                                                                                               // 4259
      top: $window.scrollTop(),                                                                                    // 4260
      bottom: $window.scrollTop() + $window.height()                                                               // 4261
    };                                                                                                             // 4262
                                                                                                                   // 4263
    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);                                           // 4264
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);                                     // 4265
                                                                                                                   // 4266
    var css = {                                                                                                    // 4267
      left: offset.left,                                                                                           // 4268
      top: container.bottom                                                                                        // 4269
    };                                                                                                             // 4270
                                                                                                                   // 4271
    // Determine what the parent element is to use for calciulating the offset                                     // 4272
    var $offsetParent = this.$dropdownParent;                                                                      // 4273
                                                                                                                   // 4274
    // For statically positoned elements, we need to get the element                                               // 4275
    // that is determining the offset                                                                              // 4276
    if ($offsetParent.css('position') === 'static') {                                                              // 4277
      $offsetParent = $offsetParent.offsetParent();                                                                // 4278
    }                                                                                                              // 4279
                                                                                                                   // 4280
    var parentOffset = $offsetParent.offset();                                                                     // 4281
                                                                                                                   // 4282
    css.top -= parentOffset.top;                                                                                   // 4283
    css.left -= parentOffset.left;                                                                                 // 4284
                                                                                                                   // 4285
    if (!isCurrentlyAbove && !isCurrentlyBelow) {                                                                  // 4286
      newDirection = 'below';                                                                                      // 4287
    }                                                                                                              // 4288
                                                                                                                   // 4289
    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {                                                // 4290
      newDirection = 'above';                                                                                      // 4291
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {                                          // 4292
      newDirection = 'below';                                                                                      // 4293
    }                                                                                                              // 4294
                                                                                                                   // 4295
    if (newDirection == 'above' ||                                                                                 // 4296
      (isCurrentlyAbove && newDirection !== 'below')) {                                                            // 4297
      css.top = container.top - parentOffset.top - dropdown.height;                                                // 4298
    }                                                                                                              // 4299
                                                                                                                   // 4300
    if (newDirection != null) {                                                                                    // 4301
      this.$dropdown                                                                                               // 4302
        .removeClass('select2-dropdown--below select2-dropdown--above')                                            // 4303
        .addClass('select2-dropdown--' + newDirection);                                                            // 4304
      this.$container                                                                                              // 4305
        .removeClass('select2-container--below select2-container--above')                                          // 4306
        .addClass('select2-container--' + newDirection);                                                           // 4307
    }                                                                                                              // 4308
                                                                                                                   // 4309
    this.$dropdownContainer.css(css);                                                                              // 4310
  };                                                                                                               // 4311
                                                                                                                   // 4312
  AttachBody.prototype._resizeDropdown = function () {                                                             // 4313
    var css = {                                                                                                    // 4314
      width: this.$container.outerWidth(false) + 'px'                                                              // 4315
    };                                                                                                             // 4316
                                                                                                                   // 4317
    if (this.options.get('dropdownAutoWidth')) {                                                                   // 4318
      css.minWidth = css.width;                                                                                    // 4319
      css.position = 'relative';                                                                                   // 4320
      css.width = 'auto';                                                                                          // 4321
    }                                                                                                              // 4322
                                                                                                                   // 4323
    this.$dropdown.css(css);                                                                                       // 4324
  };                                                                                                               // 4325
                                                                                                                   // 4326
  AttachBody.prototype._showDropdown = function (decorated) {                                                      // 4327
    this.$dropdownContainer.appendTo(this.$dropdownParent);                                                        // 4328
                                                                                                                   // 4329
    this._positionDropdown();                                                                                      // 4330
    this._resizeDropdown();                                                                                        // 4331
  };                                                                                                               // 4332
                                                                                                                   // 4333
  return AttachBody;                                                                                               // 4334
});                                                                                                                // 4335
                                                                                                                   // 4336
S2.define('select2/dropdown/minimumResultsForSearch',[                                                             // 4337
                                                                                                                   // 4338
], function () {                                                                                                   // 4339
  function countResults (data) {                                                                                   // 4340
    var count = 0;                                                                                                 // 4341
                                                                                                                   // 4342
    for (var d = 0; d < data.length; d++) {                                                                        // 4343
      var item = data[d];                                                                                          // 4344
                                                                                                                   // 4345
      if (item.children) {                                                                                         // 4346
        count += countResults(item.children);                                                                      // 4347
      } else {                                                                                                     // 4348
        count++;                                                                                                   // 4349
      }                                                                                                            // 4350
    }                                                                                                              // 4351
                                                                                                                   // 4352
    return count;                                                                                                  // 4353
  }                                                                                                                // 4354
                                                                                                                   // 4355
  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {                                   // 4356
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');                                         // 4357
                                                                                                                   // 4358
    if (this.minimumResultsForSearch < 0) {                                                                        // 4359
      this.minimumResultsForSearch = Infinity;                                                                     // 4360
    }                                                                                                              // 4361
                                                                                                                   // 4362
    decorated.call(this, $element, options, dataAdapter);                                                          // 4363
  }                                                                                                                // 4364
                                                                                                                   // 4365
  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {                                    // 4366
    if (countResults(params.data.results) < this.minimumResultsForSearch) {                                        // 4367
      return false;                                                                                                // 4368
    }                                                                                                              // 4369
                                                                                                                   // 4370
    return decorated.call(this, params);                                                                           // 4371
  };                                                                                                               // 4372
                                                                                                                   // 4373
  return MinimumResultsForSearch;                                                                                  // 4374
});                                                                                                                // 4375
                                                                                                                   // 4376
S2.define('select2/dropdown/selectOnClose',[                                                                       // 4377
                                                                                                                   // 4378
], function () {                                                                                                   // 4379
  function SelectOnClose () { }                                                                                    // 4380
                                                                                                                   // 4381
  SelectOnClose.prototype.bind = function (decorated, container, $container) {                                     // 4382
    var self = this;                                                                                               // 4383
                                                                                                                   // 4384
    decorated.call(this, container, $container);                                                                   // 4385
                                                                                                                   // 4386
    container.on('close', function (params) {                                                                      // 4387
      self._handleSelectOnClose(params);                                                                           // 4388
    });                                                                                                            // 4389
  };                                                                                                               // 4390
                                                                                                                   // 4391
  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {                                            // 4392
    if (params && params.originalSelect2Event != null) {                                                           // 4393
      var event = params.originalSelect2Event;                                                                     // 4394
                                                                                                                   // 4395
      // Don't select an item if the close event was triggered from a select or                                    // 4396
      // unselect event                                                                                            // 4397
      if (event._type === 'select' || event._type === 'unselect') {                                                // 4398
        return;                                                                                                    // 4399
      }                                                                                                            // 4400
    }                                                                                                              // 4401
                                                                                                                   // 4402
    var $highlightedResults = this.getHighlightedResults();                                                        // 4403
                                                                                                                   // 4404
    // Only select highlighted results                                                                             // 4405
    if ($highlightedResults.length < 1) {                                                                          // 4406
      return;                                                                                                      // 4407
    }                                                                                                              // 4408
                                                                                                                   // 4409
    var data = $highlightedResults.data('data');                                                                   // 4410
                                                                                                                   // 4411
    // Don't re-select already selected resulte                                                                    // 4412
    if (                                                                                                           // 4413
      (data.element != null && data.element.selected) ||                                                           // 4414
      (data.element == null && data.selected)                                                                      // 4415
    ) {                                                                                                            // 4416
      return;                                                                                                      // 4417
    }                                                                                                              // 4418
                                                                                                                   // 4419
    this.trigger('select', {                                                                                       // 4420
        data: data                                                                                                 // 4421
    });                                                                                                            // 4422
  };                                                                                                               // 4423
                                                                                                                   // 4424
  return SelectOnClose;                                                                                            // 4425
});                                                                                                                // 4426
                                                                                                                   // 4427
S2.define('select2/dropdown/closeOnSelect',[                                                                       // 4428
                                                                                                                   // 4429
], function () {                                                                                                   // 4430
  function CloseOnSelect () { }                                                                                    // 4431
                                                                                                                   // 4432
  CloseOnSelect.prototype.bind = function (decorated, container, $container) {                                     // 4433
    var self = this;                                                                                               // 4434
                                                                                                                   // 4435
    decorated.call(this, container, $container);                                                                   // 4436
                                                                                                                   // 4437
    container.on('select', function (evt) {                                                                        // 4438
      self._selectTriggered(evt);                                                                                  // 4439
    });                                                                                                            // 4440
                                                                                                                   // 4441
    container.on('unselect', function (evt) {                                                                      // 4442
      self._selectTriggered(evt);                                                                                  // 4443
    });                                                                                                            // 4444
  };                                                                                                               // 4445
                                                                                                                   // 4446
  CloseOnSelect.prototype._selectTriggered = function (_, evt) {                                                   // 4447
    var originalEvent = evt.originalEvent;                                                                         // 4448
                                                                                                                   // 4449
    // Don't close if the control key is being held                                                                // 4450
    if (originalEvent && originalEvent.ctrlKey) {                                                                  // 4451
      return;                                                                                                      // 4452
    }                                                                                                              // 4453
                                                                                                                   // 4454
    this.trigger('close', {                                                                                        // 4455
      originalEvent: originalEvent,                                                                                // 4456
      originalSelect2Event: evt                                                                                    // 4457
    });                                                                                                            // 4458
  };                                                                                                               // 4459
                                                                                                                   // 4460
  return CloseOnSelect;                                                                                            // 4461
});                                                                                                                // 4462
                                                                                                                   // 4463
S2.define('select2/i18n/en',[],function () {                                                                       // 4464
  // English                                                                                                       // 4465
  return {                                                                                                         // 4466
    errorLoading: function () {                                                                                    // 4467
      return 'The results could not be loaded.';                                                                   // 4468
    },                                                                                                             // 4469
    inputTooLong: function (args) {                                                                                // 4470
      var overChars = args.input.length - args.maximum;                                                            // 4471
                                                                                                                   // 4472
      var message = 'Please delete ' + overChars + ' character';                                                   // 4473
                                                                                                                   // 4474
      if (overChars != 1) {                                                                                        // 4475
        message += 's';                                                                                            // 4476
      }                                                                                                            // 4477
                                                                                                                   // 4478
      return message;                                                                                              // 4479
    },                                                                                                             // 4480
    inputTooShort: function (args) {                                                                               // 4481
      var remainingChars = args.minimum - args.input.length;                                                       // 4482
                                                                                                                   // 4483
      var message = 'Please enter ' + remainingChars + ' or more characters';                                      // 4484
                                                                                                                   // 4485
      return message;                                                                                              // 4486
    },                                                                                                             // 4487
    loadingMore: function () {                                                                                     // 4488
      return 'Loading more results…';                                                                              // 4489
    },                                                                                                             // 4490
    maximumSelected: function (args) {                                                                             // 4491
      var message = 'You can only select ' + args.maximum + ' item';                                               // 4492
                                                                                                                   // 4493
      if (args.maximum != 1) {                                                                                     // 4494
        message += 's';                                                                                            // 4495
      }                                                                                                            // 4496
                                                                                                                   // 4497
      return message;                                                                                              // 4498
    },                                                                                                             // 4499
    noResults: function () {                                                                                       // 4500
      return 'No results found';                                                                                   // 4501
    },                                                                                                             // 4502
    searching: function () {                                                                                       // 4503
      return 'Searching…';                                                                                         // 4504
    }                                                                                                              // 4505
  };                                                                                                               // 4506
});                                                                                                                // 4507
                                                                                                                   // 4508
S2.define('select2/defaults',[                                                                                     // 4509
  'jquery',                                                                                                        // 4510
  'require',                                                                                                       // 4511
                                                                                                                   // 4512
  './results',                                                                                                     // 4513
                                                                                                                   // 4514
  './selection/single',                                                                                            // 4515
  './selection/multiple',                                                                                          // 4516
  './selection/placeholder',                                                                                       // 4517
  './selection/allowClear',                                                                                        // 4518
  './selection/search',                                                                                            // 4519
  './selection/eventRelay',                                                                                        // 4520
                                                                                                                   // 4521
  './utils',                                                                                                       // 4522
  './translation',                                                                                                 // 4523
  './diacritics',                                                                                                  // 4524
                                                                                                                   // 4525
  './data/select',                                                                                                 // 4526
  './data/array',                                                                                                  // 4527
  './data/ajax',                                                                                                   // 4528
  './data/tags',                                                                                                   // 4529
  './data/tokenizer',                                                                                              // 4530
  './data/minimumInputLength',                                                                                     // 4531
  './data/maximumInputLength',                                                                                     // 4532
  './data/maximumSelectionLength',                                                                                 // 4533
                                                                                                                   // 4534
  './dropdown',                                                                                                    // 4535
  './dropdown/search',                                                                                             // 4536
  './dropdown/hidePlaceholder',                                                                                    // 4537
  './dropdown/infiniteScroll',                                                                                     // 4538
  './dropdown/attachBody',                                                                                         // 4539
  './dropdown/minimumResultsForSearch',                                                                            // 4540
  './dropdown/selectOnClose',                                                                                      // 4541
  './dropdown/closeOnSelect',                                                                                      // 4542
                                                                                                                   // 4543
  './i18n/en'                                                                                                      // 4544
], function ($, require,                                                                                           // 4545
                                                                                                                   // 4546
             ResultsList,                                                                                          // 4547
                                                                                                                   // 4548
             SingleSelection, MultipleSelection, Placeholder, AllowClear,                                          // 4549
             SelectionSearch, EventRelay,                                                                          // 4550
                                                                                                                   // 4551
             Utils, Translation, DIACRITICS,                                                                       // 4552
                                                                                                                   // 4553
             SelectData, ArrayData, AjaxData, Tags, Tokenizer,                                                     // 4554
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,                                       // 4555
                                                                                                                   // 4556
             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,                                            // 4557
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,                                    // 4558
                                                                                                                   // 4559
             EnglishTranslation) {                                                                                 // 4560
  function Defaults () {                                                                                           // 4561
    this.reset();                                                                                                  // 4562
  }                                                                                                                // 4563
                                                                                                                   // 4564
  Defaults.prototype.apply = function (options) {                                                                  // 4565
    options = $.extend(true, {}, this.defaults, options);                                                          // 4566
                                                                                                                   // 4567
    if (options.dataAdapter == null) {                                                                             // 4568
      if (options.ajax != null) {                                                                                  // 4569
        options.dataAdapter = AjaxData;                                                                            // 4570
      } else if (options.data != null) {                                                                           // 4571
        options.dataAdapter = ArrayData;                                                                           // 4572
      } else {                                                                                                     // 4573
        options.dataAdapter = SelectData;                                                                          // 4574
      }                                                                                                            // 4575
                                                                                                                   // 4576
      if (options.minimumInputLength > 0) {                                                                        // 4577
        options.dataAdapter = Utils.Decorate(                                                                      // 4578
          options.dataAdapter,                                                                                     // 4579
          MinimumInputLength                                                                                       // 4580
        );                                                                                                         // 4581
      }                                                                                                            // 4582
                                                                                                                   // 4583
      if (options.maximumInputLength > 0) {                                                                        // 4584
        options.dataAdapter = Utils.Decorate(                                                                      // 4585
          options.dataAdapter,                                                                                     // 4586
          MaximumInputLength                                                                                       // 4587
        );                                                                                                         // 4588
      }                                                                                                            // 4589
                                                                                                                   // 4590
      if (options.maximumSelectionLength > 0) {                                                                    // 4591
        options.dataAdapter = Utils.Decorate(                                                                      // 4592
          options.dataAdapter,                                                                                     // 4593
          MaximumSelectionLength                                                                                   // 4594
        );                                                                                                         // 4595
      }                                                                                                            // 4596
                                                                                                                   // 4597
      if (options.tags) {                                                                                          // 4598
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);                                           // 4599
      }                                                                                                            // 4600
                                                                                                                   // 4601
      if (options.tokenSeparators != null || options.tokenizer != null) {                                          // 4602
        options.dataAdapter = Utils.Decorate(                                                                      // 4603
          options.dataAdapter,                                                                                     // 4604
          Tokenizer                                                                                                // 4605
        );                                                                                                         // 4606
      }                                                                                                            // 4607
                                                                                                                   // 4608
      if (options.query != null) {                                                                                 // 4609
        var Query = require(options.amdBase + 'compat/query');                                                     // 4610
                                                                                                                   // 4611
        options.dataAdapter = Utils.Decorate(                                                                      // 4612
          options.dataAdapter,                                                                                     // 4613
          Query                                                                                                    // 4614
        );                                                                                                         // 4615
      }                                                                                                            // 4616
                                                                                                                   // 4617
      if (options.initSelection != null) {                                                                         // 4618
        var InitSelection = require(options.amdBase + 'compat/initSelection');                                     // 4619
                                                                                                                   // 4620
        options.dataAdapter = Utils.Decorate(                                                                      // 4621
          options.dataAdapter,                                                                                     // 4622
          InitSelection                                                                                            // 4623
        );                                                                                                         // 4624
      }                                                                                                            // 4625
    }                                                                                                              // 4626
                                                                                                                   // 4627
    if (options.resultsAdapter == null) {                                                                          // 4628
      options.resultsAdapter = ResultsList;                                                                        // 4629
                                                                                                                   // 4630
      if (options.ajax != null) {                                                                                  // 4631
        options.resultsAdapter = Utils.Decorate(                                                                   // 4632
          options.resultsAdapter,                                                                                  // 4633
          InfiniteScroll                                                                                           // 4634
        );                                                                                                         // 4635
      }                                                                                                            // 4636
                                                                                                                   // 4637
      if (options.placeholder != null) {                                                                           // 4638
        options.resultsAdapter = Utils.Decorate(                                                                   // 4639
          options.resultsAdapter,                                                                                  // 4640
          HidePlaceholder                                                                                          // 4641
        );                                                                                                         // 4642
      }                                                                                                            // 4643
                                                                                                                   // 4644
      if (options.selectOnClose) {                                                                                 // 4645
        options.resultsAdapter = Utils.Decorate(                                                                   // 4646
          options.resultsAdapter,                                                                                  // 4647
          SelectOnClose                                                                                            // 4648
        );                                                                                                         // 4649
      }                                                                                                            // 4650
    }                                                                                                              // 4651
                                                                                                                   // 4652
    if (options.dropdownAdapter == null) {                                                                         // 4653
      if (options.multiple) {                                                                                      // 4654
        options.dropdownAdapter = Dropdown;                                                                        // 4655
      } else {                                                                                                     // 4656
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);                                         // 4657
                                                                                                                   // 4658
        options.dropdownAdapter = SearchableDropdown;                                                              // 4659
      }                                                                                                            // 4660
                                                                                                                   // 4661
      if (options.minimumResultsForSearch !== 0) {                                                                 // 4662
        options.dropdownAdapter = Utils.Decorate(                                                                  // 4663
          options.dropdownAdapter,                                                                                 // 4664
          MinimumResultsForSearch                                                                                  // 4665
        );                                                                                                         // 4666
      }                                                                                                            // 4667
                                                                                                                   // 4668
      if (options.closeOnSelect) {                                                                                 // 4669
        options.dropdownAdapter = Utils.Decorate(                                                                  // 4670
          options.dropdownAdapter,                                                                                 // 4671
          CloseOnSelect                                                                                            // 4672
        );                                                                                                         // 4673
      }                                                                                                            // 4674
                                                                                                                   // 4675
      if (                                                                                                         // 4676
        options.dropdownCssClass != null ||                                                                        // 4677
        options.dropdownCss != null ||                                                                             // 4678
        options.adaptDropdownCssClass != null                                                                      // 4679
      ) {                                                                                                          // 4680
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');                                         // 4681
                                                                                                                   // 4682
        options.dropdownAdapter = Utils.Decorate(                                                                  // 4683
          options.dropdownAdapter,                                                                                 // 4684
          DropdownCSS                                                                                              // 4685
        );                                                                                                         // 4686
      }                                                                                                            // 4687
                                                                                                                   // 4688
      options.dropdownAdapter = Utils.Decorate(                                                                    // 4689
        options.dropdownAdapter,                                                                                   // 4690
        AttachBody                                                                                                 // 4691
      );                                                                                                           // 4692
    }                                                                                                              // 4693
                                                                                                                   // 4694
    if (options.selectionAdapter == null) {                                                                        // 4695
      if (options.multiple) {                                                                                      // 4696
        options.selectionAdapter = MultipleSelection;                                                              // 4697
      } else {                                                                                                     // 4698
        options.selectionAdapter = SingleSelection;                                                                // 4699
      }                                                                                                            // 4700
                                                                                                                   // 4701
      // Add the placeholder mixin if a placeholder was specified                                                  // 4702
      if (options.placeholder != null) {                                                                           // 4703
        options.selectionAdapter = Utils.Decorate(                                                                 // 4704
          options.selectionAdapter,                                                                                // 4705
          Placeholder                                                                                              // 4706
        );                                                                                                         // 4707
      }                                                                                                            // 4708
                                                                                                                   // 4709
      if (options.allowClear) {                                                                                    // 4710
        options.selectionAdapter = Utils.Decorate(                                                                 // 4711
          options.selectionAdapter,                                                                                // 4712
          AllowClear                                                                                               // 4713
        );                                                                                                         // 4714
      }                                                                                                            // 4715
                                                                                                                   // 4716
      if (options.multiple) {                                                                                      // 4717
        options.selectionAdapter = Utils.Decorate(                                                                 // 4718
          options.selectionAdapter,                                                                                // 4719
          SelectionSearch                                                                                          // 4720
        );                                                                                                         // 4721
      }                                                                                                            // 4722
                                                                                                                   // 4723
      if (                                                                                                         // 4724
        options.containerCssClass != null ||                                                                       // 4725
        options.containerCss != null ||                                                                            // 4726
        options.adaptContainerCssClass != null                                                                     // 4727
      ) {                                                                                                          // 4728
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');                                       // 4729
                                                                                                                   // 4730
        options.selectionAdapter = Utils.Decorate(                                                                 // 4731
          options.selectionAdapter,                                                                                // 4732
          ContainerCSS                                                                                             // 4733
        );                                                                                                         // 4734
      }                                                                                                            // 4735
                                                                                                                   // 4736
      options.selectionAdapter = Utils.Decorate(                                                                   // 4737
        options.selectionAdapter,                                                                                  // 4738
        EventRelay                                                                                                 // 4739
      );                                                                                                           // 4740
    }                                                                                                              // 4741
                                                                                                                   // 4742
    if (typeof options.language === 'string') {                                                                    // 4743
      // Check if the language is specified with a region                                                          // 4744
      if (options.language.indexOf('-') > 0) {                                                                     // 4745
        // Extract the region information if it is included                                                        // 4746
        var languageParts = options.language.split('-');                                                           // 4747
        var baseLanguage = languageParts[0];                                                                       // 4748
                                                                                                                   // 4749
        options.language = [options.language, baseLanguage];                                                       // 4750
      } else {                                                                                                     // 4751
        options.language = [options.language];                                                                     // 4752
      }                                                                                                            // 4753
    }                                                                                                              // 4754
                                                                                                                   // 4755
    if ($.isArray(options.language)) {                                                                             // 4756
      var languages = new Translation();                                                                           // 4757
      options.language.push('en');                                                                                 // 4758
                                                                                                                   // 4759
      var languageNames = options.language;                                                                        // 4760
                                                                                                                   // 4761
      for (var l = 0; l < languageNames.length; l++) {                                                             // 4762
        var name = languageNames[l];                                                                               // 4763
        var language = {};                                                                                         // 4764
                                                                                                                   // 4765
        try {                                                                                                      // 4766
          // Try to load it with the original name                                                                 // 4767
          language = Translation.loadPath(name);                                                                   // 4768
        } catch (e) {                                                                                              // 4769
          try {                                                                                                    // 4770
            // If we couldn't load it, check if it wasn't the full path                                            // 4771
            name = this.defaults.amdLanguageBase + name;                                                           // 4772
            language = Translation.loadPath(name);                                                                 // 4773
          } catch (ex) {                                                                                           // 4774
            // The translation could not be loaded at all. Sometimes this is                                       // 4775
            // because of a configuration problem, other times this can be                                         // 4776
            // because of how Select2 helps load all possible translation files.                                   // 4777
            if (options.debug && window.console && console.warn) {                                                 // 4778
              console.warn(                                                                                        // 4779
                'Select2: The language file for "' + name + '" could not be ' +                                    // 4780
                'automatically loaded. A fallback will be used instead.'                                           // 4781
              );                                                                                                   // 4782
            }                                                                                                      // 4783
                                                                                                                   // 4784
            continue;                                                                                              // 4785
          }                                                                                                        // 4786
        }                                                                                                          // 4787
                                                                                                                   // 4788
        languages.extend(language);                                                                                // 4789
      }                                                                                                            // 4790
                                                                                                                   // 4791
      options.translations = languages;                                                                            // 4792
    } else {                                                                                                       // 4793
      var baseTranslation = Translation.loadPath(                                                                  // 4794
        this.defaults.amdLanguageBase + 'en'                                                                       // 4795
      );                                                                                                           // 4796
      var customTranslation = new Translation(options.language);                                                   // 4797
                                                                                                                   // 4798
      customTranslation.extend(baseTranslation);                                                                   // 4799
                                                                                                                   // 4800
      options.translations = customTranslation;                                                                    // 4801
    }                                                                                                              // 4802
                                                                                                                   // 4803
    return options;                                                                                                // 4804
  };                                                                                                               // 4805
                                                                                                                   // 4806
  Defaults.prototype.reset = function () {                                                                         // 4807
    function stripDiacritics (text) {                                                                              // 4808
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18                                    // 4809
      function match(a) {                                                                                          // 4810
        return DIACRITICS[a] || a;                                                                                 // 4811
      }                                                                                                            // 4812
                                                                                                                   // 4813
      return text.replace(/[^\u0000-\u007E]/g, match);                                                             // 4814
    }                                                                                                              // 4815
                                                                                                                   // 4816
    function matcher (params, data) {                                                                              // 4817
      // Always return the object if there is nothing to compare                                                   // 4818
      if ($.trim(params.term) === '') {                                                                            // 4819
        return data;                                                                                               // 4820
      }                                                                                                            // 4821
                                                                                                                   // 4822
      // Do a recursive check for options with children                                                            // 4823
      if (data.children && data.children.length > 0) {                                                             // 4824
        // Clone the data object if there are children                                                             // 4825
        // This is required as we modify the object to remove any non-matches                                      // 4826
        var match = $.extend(true, {}, data);                                                                      // 4827
                                                                                                                   // 4828
        // Check each child of the option                                                                          // 4829
        for (var c = data.children.length - 1; c >= 0; c--) {                                                      // 4830
          var child = data.children[c];                                                                            // 4831
                                                                                                                   // 4832
          var matches = matcher(params, child);                                                                    // 4833
                                                                                                                   // 4834
          // If there wasn't a match, remove the object in the array                                               // 4835
          if (matches == null) {                                                                                   // 4836
            match.children.splice(c, 1);                                                                           // 4837
          }                                                                                                        // 4838
        }                                                                                                          // 4839
                                                                                                                   // 4840
        // If any children matched, return the new object                                                          // 4841
        if (match.children.length > 0) {                                                                           // 4842
          return match;                                                                                            // 4843
        }                                                                                                          // 4844
                                                                                                                   // 4845
        // If there were no matching children, check just the plain object                                         // 4846
        return matcher(params, match);                                                                             // 4847
      }                                                                                                            // 4848
                                                                                                                   // 4849
      var original = stripDiacritics(data.text).toUpperCase();                                                     // 4850
      var term = stripDiacritics(params.term).toUpperCase();                                                       // 4851
                                                                                                                   // 4852
      // Check if the text contains the term                                                                       // 4853
      if (original.indexOf(term) > -1) {                                                                           // 4854
        return data;                                                                                               // 4855
      }                                                                                                            // 4856
                                                                                                                   // 4857
      // If it doesn't contain the term, don't return anything                                                     // 4858
      return null;                                                                                                 // 4859
    }                                                                                                              // 4860
                                                                                                                   // 4861
    this.defaults = {                                                                                              // 4862
      amdBase: './',                                                                                               // 4863
      amdLanguageBase: './i18n/',                                                                                  // 4864
      closeOnSelect: true,                                                                                         // 4865
      debug: false,                                                                                                // 4866
      dropdownAutoWidth: false,                                                                                    // 4867
      escapeMarkup: Utils.escapeMarkup,                                                                            // 4868
      language: EnglishTranslation,                                                                                // 4869
      matcher: matcher,                                                                                            // 4870
      minimumInputLength: 0,                                                                                       // 4871
      maximumInputLength: 0,                                                                                       // 4872
      maximumSelectionLength: 0,                                                                                   // 4873
      minimumResultsForSearch: 0,                                                                                  // 4874
      selectOnClose: false,                                                                                        // 4875
      sorter: function (data) {                                                                                    // 4876
        return data;                                                                                               // 4877
      },                                                                                                           // 4878
      templateResult: function (result) {                                                                          // 4879
        return result.text;                                                                                        // 4880
      },                                                                                                           // 4881
      templateSelection: function (selection) {                                                                    // 4882
        return selection.text;                                                                                     // 4883
      },                                                                                                           // 4884
      theme: 'default',                                                                                            // 4885
      width: 'resolve'                                                                                             // 4886
    };                                                                                                             // 4887
  };                                                                                                               // 4888
                                                                                                                   // 4889
  Defaults.prototype.set = function (key, value) {                                                                 // 4890
    var camelKey = $.camelCase(key);                                                                               // 4891
                                                                                                                   // 4892
    var data = {};                                                                                                 // 4893
    data[camelKey] = value;                                                                                        // 4894
                                                                                                                   // 4895
    var convertedData = Utils._convertData(data);                                                                  // 4896
                                                                                                                   // 4897
    $.extend(this.defaults, convertedData);                                                                        // 4898
  };                                                                                                               // 4899
                                                                                                                   // 4900
  var defaults = new Defaults();                                                                                   // 4901
                                                                                                                   // 4902
  return defaults;                                                                                                 // 4903
});                                                                                                                // 4904
                                                                                                                   // 4905
S2.define('select2/options',[                                                                                      // 4906
  'require',                                                                                                       // 4907
  'jquery',                                                                                                        // 4908
  './defaults',                                                                                                    // 4909
  './utils'                                                                                                        // 4910
], function (require, $, Defaults, Utils) {                                                                        // 4911
  function Options (options, $element) {                                                                           // 4912
    this.options = options;                                                                                        // 4913
                                                                                                                   // 4914
    if ($element != null) {                                                                                        // 4915
      this.fromElement($element);                                                                                  // 4916
    }                                                                                                              // 4917
                                                                                                                   // 4918
    this.options = Defaults.apply(this.options);                                                                   // 4919
                                                                                                                   // 4920
    if ($element && $element.is('input')) {                                                                        // 4921
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');                                         // 4922
                                                                                                                   // 4923
      this.options.dataAdapter = Utils.Decorate(                                                                   // 4924
        this.options.dataAdapter,                                                                                  // 4925
        InputCompat                                                                                                // 4926
      );                                                                                                           // 4927
    }                                                                                                              // 4928
  }                                                                                                                // 4929
                                                                                                                   // 4930
  Options.prototype.fromElement = function ($e) {                                                                  // 4931
    var excludedData = ['select2'];                                                                                // 4932
                                                                                                                   // 4933
    if (this.options.multiple == null) {                                                                           // 4934
      this.options.multiple = $e.prop('multiple');                                                                 // 4935
    }                                                                                                              // 4936
                                                                                                                   // 4937
    if (this.options.disabled == null) {                                                                           // 4938
      this.options.disabled = $e.prop('disabled');                                                                 // 4939
    }                                                                                                              // 4940
                                                                                                                   // 4941
    if (this.options.language == null) {                                                                           // 4942
      if ($e.prop('lang')) {                                                                                       // 4943
        this.options.language = $e.prop('lang').toLowerCase();                                                     // 4944
      } else if ($e.closest('[lang]').prop('lang')) {                                                              // 4945
        this.options.language = $e.closest('[lang]').prop('lang');                                                 // 4946
      }                                                                                                            // 4947
    }                                                                                                              // 4948
                                                                                                                   // 4949
    if (this.options.dir == null) {                                                                                // 4950
      if ($e.prop('dir')) {                                                                                        // 4951
        this.options.dir = $e.prop('dir');                                                                         // 4952
      } else if ($e.closest('[dir]').prop('dir')) {                                                                // 4953
        this.options.dir = $e.closest('[dir]').prop('dir');                                                        // 4954
      } else {                                                                                                     // 4955
        this.options.dir = 'ltr';                                                                                  // 4956
      }                                                                                                            // 4957
    }                                                                                                              // 4958
                                                                                                                   // 4959
    $e.prop('disabled', this.options.disabled);                                                                    // 4960
    $e.prop('multiple', this.options.multiple);                                                                    // 4961
                                                                                                                   // 4962
    if ($e.data('select2Tags')) {                                                                                  // 4963
      if (this.options.debug && window.console && console.warn) {                                                  // 4964
        console.warn(                                                                                              // 4965
          'Select2: The `data-select2-tags` attribute has been changed to ' +                                      // 4966
          'use the `data-data` and `data-tags="true"` attributes and will be ' +                                   // 4967
          'removed in future versions of Select2.'                                                                 // 4968
        );                                                                                                         // 4969
      }                                                                                                            // 4970
                                                                                                                   // 4971
      $e.data('data', $e.data('select2Tags'));                                                                     // 4972
      $e.data('tags', true);                                                                                       // 4973
    }                                                                                                              // 4974
                                                                                                                   // 4975
    if ($e.data('ajaxUrl')) {                                                                                      // 4976
      if (this.options.debug && window.console && console.warn) {                                                  // 4977
        console.warn(                                                                                              // 4978
          'Select2: The `data-ajax-url` attribute has been changed to ' +                                          // 4979
          '`data-ajax--url` and support for the old attribute will be removed' +                                   // 4980
          ' in future versions of Select2.'                                                                        // 4981
        );                                                                                                         // 4982
      }                                                                                                            // 4983
                                                                                                                   // 4984
      $e.attr('ajax--url', $e.data('ajaxUrl'));                                                                    // 4985
      $e.data('ajax--url', $e.data('ajaxUrl'));                                                                    // 4986
    }                                                                                                              // 4987
                                                                                                                   // 4988
    var dataset = {};                                                                                              // 4989
                                                                                                                   // 4990
    // Prefer the element's `dataset` attribute if it exists                                                       // 4991
    // jQuery 1.x does not correctly handle data attributes with multiple dashes                                   // 4992
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {                                        // 4993
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());                                                      // 4994
    } else {                                                                                                       // 4995
      dataset = $e.data();                                                                                         // 4996
    }                                                                                                              // 4997
                                                                                                                   // 4998
    var data = $.extend(true, {}, dataset);                                                                        // 4999
                                                                                                                   // 5000
    data = Utils._convertData(data);                                                                               // 5001
                                                                                                                   // 5002
    for (var key in data) {                                                                                        // 5003
      if ($.inArray(key, excludedData) > -1) {                                                                     // 5004
        continue;                                                                                                  // 5005
      }                                                                                                            // 5006
                                                                                                                   // 5007
      if ($.isPlainObject(this.options[key])) {                                                                    // 5008
        $.extend(this.options[key], data[key]);                                                                    // 5009
      } else {                                                                                                     // 5010
        this.options[key] = data[key];                                                                             // 5011
      }                                                                                                            // 5012
    }                                                                                                              // 5013
                                                                                                                   // 5014
    return this;                                                                                                   // 5015
  };                                                                                                               // 5016
                                                                                                                   // 5017
  Options.prototype.get = function (key) {                                                                         // 5018
    return this.options[key];                                                                                      // 5019
  };                                                                                                               // 5020
                                                                                                                   // 5021
  Options.prototype.set = function (key, val) {                                                                    // 5022
    this.options[key] = val;                                                                                       // 5023
  };                                                                                                               // 5024
                                                                                                                   // 5025
  return Options;                                                                                                  // 5026
});                                                                                                                // 5027
                                                                                                                   // 5028
S2.define('select2/core',[                                                                                         // 5029
  'jquery',                                                                                                        // 5030
  './options',                                                                                                     // 5031
  './utils',                                                                                                       // 5032
  './keys'                                                                                                         // 5033
], function ($, Options, Utils, KEYS) {                                                                            // 5034
  var Select2 = function ($element, options) {                                                                     // 5035
    if ($element.data('select2') != null) {                                                                        // 5036
      $element.data('select2').destroy();                                                                          // 5037
    }                                                                                                              // 5038
                                                                                                                   // 5039
    this.$element = $element;                                                                                      // 5040
                                                                                                                   // 5041
    this.id = this._generateId($element);                                                                          // 5042
                                                                                                                   // 5043
    options = options || {};                                                                                       // 5044
                                                                                                                   // 5045
    this.options = new Options(options, $element);                                                                 // 5046
                                                                                                                   // 5047
    Select2.__super__.constructor.call(this);                                                                      // 5048
                                                                                                                   // 5049
    // Set up the tabindex                                                                                         // 5050
                                                                                                                   // 5051
    var tabindex = $element.attr('tabindex') || 0;                                                                 // 5052
    $element.data('old-tabindex', tabindex);                                                                       // 5053
    $element.attr('tabindex', '-1');                                                                               // 5054
                                                                                                                   // 5055
    // Set up containers and adapters                                                                              // 5056
                                                                                                                   // 5057
    var DataAdapter = this.options.get('dataAdapter');                                                             // 5058
    this.dataAdapter = new DataAdapter($element, this.options);                                                    // 5059
                                                                                                                   // 5060
    var $container = this.render();                                                                                // 5061
                                                                                                                   // 5062
    this._placeContainer($container);                                                                              // 5063
                                                                                                                   // 5064
    var SelectionAdapter = this.options.get('selectionAdapter');                                                   // 5065
    this.selection = new SelectionAdapter($element, this.options);                                                 // 5066
    this.$selection = this.selection.render();                                                                     // 5067
                                                                                                                   // 5068
    this.selection.position(this.$selection, $container);                                                          // 5069
                                                                                                                   // 5070
    var DropdownAdapter = this.options.get('dropdownAdapter');                                                     // 5071
    this.dropdown = new DropdownAdapter($element, this.options);                                                   // 5072
    this.$dropdown = this.dropdown.render();                                                                       // 5073
                                                                                                                   // 5074
    this.dropdown.position(this.$dropdown, $container);                                                            // 5075
                                                                                                                   // 5076
    var ResultsAdapter = this.options.get('resultsAdapter');                                                       // 5077
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);                                   // 5078
    this.$results = this.results.render();                                                                         // 5079
                                                                                                                   // 5080
    this.results.position(this.$results, this.$dropdown);                                                          // 5081
                                                                                                                   // 5082
    // Bind events                                                                                                 // 5083
                                                                                                                   // 5084
    var self = this;                                                                                               // 5085
                                                                                                                   // 5086
    // Bind the container to all of the adapters                                                                   // 5087
    this._bindAdapters();                                                                                          // 5088
                                                                                                                   // 5089
    // Register any DOM event handlers                                                                             // 5090
    this._registerDomEvents();                                                                                     // 5091
                                                                                                                   // 5092
    // Register any internal event handlers                                                                        // 5093
    this._registerDataEvents();                                                                                    // 5094
    this._registerSelectionEvents();                                                                               // 5095
    this._registerDropdownEvents();                                                                                // 5096
    this._registerResultsEvents();                                                                                 // 5097
    this._registerEvents();                                                                                        // 5098
                                                                                                                   // 5099
    // Set the initial state                                                                                       // 5100
    this.dataAdapter.current(function (initialData) {                                                              // 5101
      self.trigger('selection:update', {                                                                           // 5102
        data: initialData                                                                                          // 5103
      });                                                                                                          // 5104
    });                                                                                                            // 5105
                                                                                                                   // 5106
    // Hide the original select                                                                                    // 5107
    $element.addClass('select2-hidden-accessible');                                                                // 5108
    $element.attr('aria-hidden', 'true');                                                                          // 5109
                                                                                                                   // 5110
    // Synchronize any monitored attributes                                                                        // 5111
    this._syncAttributes();                                                                                        // 5112
                                                                                                                   // 5113
    $element.data('select2', this);                                                                                // 5114
  };                                                                                                               // 5115
                                                                                                                   // 5116
  Utils.Extend(Select2, Utils.Observable);                                                                         // 5117
                                                                                                                   // 5118
  Select2.prototype._generateId = function ($element) {                                                            // 5119
    var id = '';                                                                                                   // 5120
                                                                                                                   // 5121
    if ($element.attr('id') != null) {                                                                             // 5122
      id = $element.attr('id');                                                                                    // 5123
    } else if ($element.attr('name') != null) {                                                                    // 5124
      id = $element.attr('name') + '-' + Utils.generateChars(2);                                                   // 5125
    } else {                                                                                                       // 5126
      id = Utils.generateChars(4);                                                                                 // 5127
    }                                                                                                              // 5128
                                                                                                                   // 5129
    id = id.replace(/(:|\.|\[|\]|,)/g, '');                                                                        // 5130
    id = 'select2-' + id;                                                                                          // 5131
                                                                                                                   // 5132
    return id;                                                                                                     // 5133
  };                                                                                                               // 5134
                                                                                                                   // 5135
  Select2.prototype._placeContainer = function ($container) {                                                      // 5136
    $container.insertAfter(this.$element);                                                                         // 5137
                                                                                                                   // 5138
    var width = this._resolveWidth(this.$element, this.options.get('width'));                                      // 5139
                                                                                                                   // 5140
    if (width != null) {                                                                                           // 5141
      $container.css('width', width);                                                                              // 5142
    }                                                                                                              // 5143
  };                                                                                                               // 5144
                                                                                                                   // 5145
  Select2.prototype._resolveWidth = function ($element, method) {                                                  // 5146
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;                                   // 5147
                                                                                                                   // 5148
    if (method == 'resolve') {                                                                                     // 5149
      var styleWidth = this._resolveWidth($element, 'style');                                                      // 5150
                                                                                                                   // 5151
      if (styleWidth != null) {                                                                                    // 5152
        return styleWidth;                                                                                         // 5153
      }                                                                                                            // 5154
                                                                                                                   // 5155
      return this._resolveWidth($element, 'element');                                                              // 5156
    }                                                                                                              // 5157
                                                                                                                   // 5158
    if (method == 'element') {                                                                                     // 5159
      var elementWidth = $element.outerWidth(false);                                                               // 5160
                                                                                                                   // 5161
      if (elementWidth <= 0) {                                                                                     // 5162
        return 'auto';                                                                                             // 5163
      }                                                                                                            // 5164
                                                                                                                   // 5165
      return elementWidth + 'px';                                                                                  // 5166
    }                                                                                                              // 5167
                                                                                                                   // 5168
    if (method == 'style') {                                                                                       // 5169
      var style = $element.attr('style');                                                                          // 5170
                                                                                                                   // 5171
      if (typeof(style) !== 'string') {                                                                            // 5172
        return null;                                                                                               // 5173
      }                                                                                                            // 5174
                                                                                                                   // 5175
      var attrs = style.split(';');                                                                                // 5176
                                                                                                                   // 5177
      for (var i = 0, l = attrs.length; i < l; i = i + 1) {                                                        // 5178
        var attr = attrs[i].replace(/\s/g, '');                                                                    // 5179
        var matches = attr.match(WIDTH);                                                                           // 5180
                                                                                                                   // 5181
        if (matches !== null && matches.length >= 1) {                                                             // 5182
          return matches[1];                                                                                       // 5183
        }                                                                                                          // 5184
      }                                                                                                            // 5185
                                                                                                                   // 5186
      return null;                                                                                                 // 5187
    }                                                                                                              // 5188
                                                                                                                   // 5189
    return method;                                                                                                 // 5190
  };                                                                                                               // 5191
                                                                                                                   // 5192
  Select2.prototype._bindAdapters = function () {                                                                  // 5193
    this.dataAdapter.bind(this, this.$container);                                                                  // 5194
    this.selection.bind(this, this.$container);                                                                    // 5195
                                                                                                                   // 5196
    this.dropdown.bind(this, this.$container);                                                                     // 5197
    this.results.bind(this, this.$container);                                                                      // 5198
  };                                                                                                               // 5199
                                                                                                                   // 5200
  Select2.prototype._registerDomEvents = function () {                                                             // 5201
    var self = this;                                                                                               // 5202
                                                                                                                   // 5203
    this.$element.on('change.select2', function () {                                                               // 5204
      self.dataAdapter.current(function (data) {                                                                   // 5205
        self.trigger('selection:update', {                                                                         // 5206
          data: data                                                                                               // 5207
        });                                                                                                        // 5208
      });                                                                                                          // 5209
    });                                                                                                            // 5210
                                                                                                                   // 5211
    this.$element.on('focus.select2', function (evt) {                                                             // 5212
      self.trigger('focus', evt);                                                                                  // 5213
    });                                                                                                            // 5214
                                                                                                                   // 5215
    this._syncA = Utils.bind(this._syncAttributes, this);                                                          // 5216
    this._syncS = Utils.bind(this._syncSubtree, this);                                                             // 5217
                                                                                                                   // 5218
    if (this.$element[0].attachEvent) {                                                                            // 5219
      this.$element[0].attachEvent('onpropertychange', this._syncA);                                               // 5220
    }                                                                                                              // 5221
                                                                                                                   // 5222
    var observer = window.MutationObserver ||                                                                      // 5223
      window.WebKitMutationObserver ||                                                                             // 5224
      window.MozMutationObserver                                                                                   // 5225
    ;                                                                                                              // 5226
                                                                                                                   // 5227
    if (observer != null) {                                                                                        // 5228
      this._observer = new observer(function (mutations) {                                                         // 5229
        $.each(mutations, self._syncA);                                                                            // 5230
        $.each(mutations, self._syncS);                                                                            // 5231
      });                                                                                                          // 5232
      this._observer.observe(this.$element[0], {                                                                   // 5233
        attributes: true,                                                                                          // 5234
        childList: true,                                                                                           // 5235
        subtree: false                                                                                             // 5236
      });                                                                                                          // 5237
    } else if (this.$element[0].addEventListener) {                                                                // 5238
      this.$element[0].addEventListener(                                                                           // 5239
        'DOMAttrModified',                                                                                         // 5240
        self._syncA,                                                                                               // 5241
        false                                                                                                      // 5242
      );                                                                                                           // 5243
      this.$element[0].addEventListener(                                                                           // 5244
        'DOMNodeInserted',                                                                                         // 5245
        self._syncS,                                                                                               // 5246
        false                                                                                                      // 5247
      );                                                                                                           // 5248
      this.$element[0].addEventListener(                                                                           // 5249
        'DOMNodeRemoved',                                                                                          // 5250
        self._syncS,                                                                                               // 5251
        false                                                                                                      // 5252
      );                                                                                                           // 5253
    }                                                                                                              // 5254
  };                                                                                                               // 5255
                                                                                                                   // 5256
  Select2.prototype._registerDataEvents = function () {                                                            // 5257
    var self = this;                                                                                               // 5258
                                                                                                                   // 5259
    this.dataAdapter.on('*', function (name, params) {                                                             // 5260
      self.trigger(name, params);                                                                                  // 5261
    });                                                                                                            // 5262
  };                                                                                                               // 5263
                                                                                                                   // 5264
  Select2.prototype._registerSelectionEvents = function () {                                                       // 5265
    var self = this;                                                                                               // 5266
    var nonRelayEvents = ['toggle', 'focus'];                                                                      // 5267
                                                                                                                   // 5268
    this.selection.on('toggle', function () {                                                                      // 5269
      self.toggleDropdown();                                                                                       // 5270
    });                                                                                                            // 5271
                                                                                                                   // 5272
    this.selection.on('focus', function (params) {                                                                 // 5273
      self.focus(params);                                                                                          // 5274
    });                                                                                                            // 5275
                                                                                                                   // 5276
    this.selection.on('*', function (name, params) {                                                               // 5277
      if ($.inArray(name, nonRelayEvents) !== -1) {                                                                // 5278
        return;                                                                                                    // 5279
      }                                                                                                            // 5280
                                                                                                                   // 5281
      self.trigger(name, params);                                                                                  // 5282
    });                                                                                                            // 5283
  };                                                                                                               // 5284
                                                                                                                   // 5285
  Select2.prototype._registerDropdownEvents = function () {                                                        // 5286
    var self = this;                                                                                               // 5287
                                                                                                                   // 5288
    this.dropdown.on('*', function (name, params) {                                                                // 5289
      self.trigger(name, params);                                                                                  // 5290
    });                                                                                                            // 5291
  };                                                                                                               // 5292
                                                                                                                   // 5293
  Select2.prototype._registerResultsEvents = function () {                                                         // 5294
    var self = this;                                                                                               // 5295
                                                                                                                   // 5296
    this.results.on('*', function (name, params) {                                                                 // 5297
      self.trigger(name, params);                                                                                  // 5298
    });                                                                                                            // 5299
  };                                                                                                               // 5300
                                                                                                                   // 5301
  Select2.prototype._registerEvents = function () {                                                                // 5302
    var self = this;                                                                                               // 5303
                                                                                                                   // 5304
    this.on('open', function () {                                                                                  // 5305
      self.$container.addClass('select2-container--open');                                                         // 5306
    });                                                                                                            // 5307
                                                                                                                   // 5308
    this.on('close', function () {                                                                                 // 5309
      self.$container.removeClass('select2-container--open');                                                      // 5310
    });                                                                                                            // 5311
                                                                                                                   // 5312
    this.on('enable', function () {                                                                                // 5313
      self.$container.removeClass('select2-container--disabled');                                                  // 5314
    });                                                                                                            // 5315
                                                                                                                   // 5316
    this.on('disable', function () {                                                                               // 5317
      self.$container.addClass('select2-container--disabled');                                                     // 5318
    });                                                                                                            // 5319
                                                                                                                   // 5320
    this.on('blur', function () {                                                                                  // 5321
      self.$container.removeClass('select2-container--focus');                                                     // 5322
    });                                                                                                            // 5323
                                                                                                                   // 5324
    this.on('query', function (params) {                                                                           // 5325
      if (!self.isOpen()) {                                                                                        // 5326
        self.trigger('open', {});                                                                                  // 5327
      }                                                                                                            // 5328
                                                                                                                   // 5329
      this.dataAdapter.query(params, function (data) {                                                             // 5330
        self.trigger('results:all', {                                                                              // 5331
          data: data,                                                                                              // 5332
          query: params                                                                                            // 5333
        });                                                                                                        // 5334
      });                                                                                                          // 5335
    });                                                                                                            // 5336
                                                                                                                   // 5337
    this.on('query:append', function (params) {                                                                    // 5338
      this.dataAdapter.query(params, function (data) {                                                             // 5339
        self.trigger('results:append', {                                                                           // 5340
          data: data,                                                                                              // 5341
          query: params                                                                                            // 5342
        });                                                                                                        // 5343
      });                                                                                                          // 5344
    });                                                                                                            // 5345
                                                                                                                   // 5346
    this.on('keypress', function (evt) {                                                                           // 5347
      var key = evt.which;                                                                                         // 5348
                                                                                                                   // 5349
      if (self.isOpen()) {                                                                                         // 5350
        if (key === KEYS.ESC || key === KEYS.TAB ||                                                                // 5351
            (key === KEYS.UP && evt.altKey)) {                                                                     // 5352
          self.close();                                                                                            // 5353
                                                                                                                   // 5354
          evt.preventDefault();                                                                                    // 5355
        } else if (key === KEYS.ENTER) {                                                                           // 5356
          self.trigger('results:select', {});                                                                      // 5357
                                                                                                                   // 5358
          evt.preventDefault();                                                                                    // 5359
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {                                                          // 5360
          self.trigger('results:toggle', {});                                                                      // 5361
                                                                                                                   // 5362
          evt.preventDefault();                                                                                    // 5363
        } else if (key === KEYS.UP) {                                                                              // 5364
          self.trigger('results:previous', {});                                                                    // 5365
                                                                                                                   // 5366
          evt.preventDefault();                                                                                    // 5367
        } else if (key === KEYS.DOWN) {                                                                            // 5368
          self.trigger('results:next', {});                                                                        // 5369
                                                                                                                   // 5370
          evt.preventDefault();                                                                                    // 5371
        }                                                                                                          // 5372
      } else {                                                                                                     // 5373
        if (key === KEYS.ENTER || key === KEYS.SPACE ||                                                            // 5374
            (key === KEYS.DOWN && evt.altKey)) {                                                                   // 5375
          self.open();                                                                                             // 5376
                                                                                                                   // 5377
          evt.preventDefault();                                                                                    // 5378
        }                                                                                                          // 5379
      }                                                                                                            // 5380
    });                                                                                                            // 5381
  };                                                                                                               // 5382
                                                                                                                   // 5383
  Select2.prototype._syncAttributes = function () {                                                                // 5384
    this.options.set('disabled', this.$element.prop('disabled'));                                                  // 5385
                                                                                                                   // 5386
    if (this.options.get('disabled')) {                                                                            // 5387
      if (this.isOpen()) {                                                                                         // 5388
        this.close();                                                                                              // 5389
      }                                                                                                            // 5390
                                                                                                                   // 5391
      this.trigger('disable', {});                                                                                 // 5392
    } else {                                                                                                       // 5393
      this.trigger('enable', {});                                                                                  // 5394
    }                                                                                                              // 5395
  };                                                                                                               // 5396
                                                                                                                   // 5397
  Select2.prototype._syncSubtree = function (evt, mutations) {                                                     // 5398
    var changed = false;                                                                                           // 5399
    var self = this;                                                                                               // 5400
                                                                                                                   // 5401
    // Ignore any mutation events raised for elements that aren't options or                                       // 5402
    // optgroups. This handles the case when the select element is destroyed                                       // 5403
    if (                                                                                                           // 5404
      evt && evt.target && (                                                                                       // 5405
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'                                     // 5406
      )                                                                                                            // 5407
    ) {                                                                                                            // 5408
      return;                                                                                                      // 5409
    }                                                                                                              // 5410
                                                                                                                   // 5411
    if (!mutations) {                                                                                              // 5412
      // If mutation events aren't supported, then we can only assume that the                                     // 5413
      // change affected the selections                                                                            // 5414
      changed = true;                                                                                              // 5415
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {                                          // 5416
      for (var n = 0; n < mutations.addedNodes.length; n++) {                                                      // 5417
        var node = mutations.addedNodes[n];                                                                        // 5418
                                                                                                                   // 5419
        if (node.selected) {                                                                                       // 5420
          changed = true;                                                                                          // 5421
        }                                                                                                          // 5422
      }                                                                                                            // 5423
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {                                      // 5424
      changed = true;                                                                                              // 5425
    }                                                                                                              // 5426
                                                                                                                   // 5427
    // Only re-pull the data if we think there is a change                                                         // 5428
    if (changed) {                                                                                                 // 5429
      this.dataAdapter.current(function (currentData) {                                                            // 5430
        self.trigger('selection:update', {                                                                         // 5431
          data: currentData                                                                                        // 5432
        });                                                                                                        // 5433
      });                                                                                                          // 5434
    }                                                                                                              // 5435
  };                                                                                                               // 5436
                                                                                                                   // 5437
  /**                                                                                                              // 5438
   * Override the trigger method to automatically trigger pre-events when                                          // 5439
   * there are events that can be prevented.                                                                       // 5440
   */                                                                                                              // 5441
  Select2.prototype.trigger = function (name, args) {                                                              // 5442
    var actualTrigger = Select2.__super__.trigger;                                                                 // 5443
    var preTriggerMap = {                                                                                          // 5444
      'open': 'opening',                                                                                           // 5445
      'close': 'closing',                                                                                          // 5446
      'select': 'selecting',                                                                                       // 5447
      'unselect': 'unselecting'                                                                                    // 5448
    };                                                                                                             // 5449
                                                                                                                   // 5450
    if (args === undefined) {                                                                                      // 5451
      args = {};                                                                                                   // 5452
    }                                                                                                              // 5453
                                                                                                                   // 5454
    if (name in preTriggerMap) {                                                                                   // 5455
      var preTriggerName = preTriggerMap[name];                                                                    // 5456
      var preTriggerArgs = {                                                                                       // 5457
        prevented: false,                                                                                          // 5458
        name: name,                                                                                                // 5459
        args: args                                                                                                 // 5460
      };                                                                                                           // 5461
                                                                                                                   // 5462
      actualTrigger.call(this, preTriggerName, preTriggerArgs);                                                    // 5463
                                                                                                                   // 5464
      if (preTriggerArgs.prevented) {                                                                              // 5465
        args.prevented = true;                                                                                     // 5466
                                                                                                                   // 5467
        return;                                                                                                    // 5468
      }                                                                                                            // 5469
    }                                                                                                              // 5470
                                                                                                                   // 5471
    actualTrigger.call(this, name, args);                                                                          // 5472
  };                                                                                                               // 5473
                                                                                                                   // 5474
  Select2.prototype.toggleDropdown = function () {                                                                 // 5475
    if (this.options.get('disabled')) {                                                                            // 5476
      return;                                                                                                      // 5477
    }                                                                                                              // 5478
                                                                                                                   // 5479
    if (this.isOpen()) {                                                                                           // 5480
      this.close();                                                                                                // 5481
    } else {                                                                                                       // 5482
      this.open();                                                                                                 // 5483
    }                                                                                                              // 5484
  };                                                                                                               // 5485
                                                                                                                   // 5486
  Select2.prototype.open = function () {                                                                           // 5487
    if (this.isOpen()) {                                                                                           // 5488
      return;                                                                                                      // 5489
    }                                                                                                              // 5490
                                                                                                                   // 5491
    this.trigger('query', {});                                                                                     // 5492
  };                                                                                                               // 5493
                                                                                                                   // 5494
  Select2.prototype.close = function () {                                                                          // 5495
    if (!this.isOpen()) {                                                                                          // 5496
      return;                                                                                                      // 5497
    }                                                                                                              // 5498
                                                                                                                   // 5499
    this.trigger('close', {});                                                                                     // 5500
  };                                                                                                               // 5501
                                                                                                                   // 5502
  Select2.prototype.isOpen = function () {                                                                         // 5503
    return this.$container.hasClass('select2-container--open');                                                    // 5504
  };                                                                                                               // 5505
                                                                                                                   // 5506
  Select2.prototype.hasFocus = function () {                                                                       // 5507
    return this.$container.hasClass('select2-container--focus');                                                   // 5508
  };                                                                                                               // 5509
                                                                                                                   // 5510
  Select2.prototype.focus = function (data) {                                                                      // 5511
    // No need to re-trigger focus events if we are already focused                                                // 5512
    if (this.hasFocus()) {                                                                                         // 5513
      return;                                                                                                      // 5514
    }                                                                                                              // 5515
                                                                                                                   // 5516
    this.$container.addClass('select2-container--focus');                                                          // 5517
    this.trigger('focus', {});                                                                                     // 5518
  };                                                                                                               // 5519
                                                                                                                   // 5520
  Select2.prototype.enable = function (args) {                                                                     // 5521
    if (this.options.get('debug') && window.console && console.warn) {                                             // 5522
      console.warn(                                                                                                // 5523
        'Select2: The `select2("enable")` method has been deprecated and will' +                                   // 5524
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +                                   // 5525
        ' instead.'                                                                                                // 5526
      );                                                                                                           // 5527
    }                                                                                                              // 5528
                                                                                                                   // 5529
    if (args == null || args.length === 0) {                                                                       // 5530
      args = [true];                                                                                               // 5531
    }                                                                                                              // 5532
                                                                                                                   // 5533
    var disabled = !args[0];                                                                                       // 5534
                                                                                                                   // 5535
    this.$element.prop('disabled', disabled);                                                                      // 5536
  };                                                                                                               // 5537
                                                                                                                   // 5538
  Select2.prototype.data = function () {                                                                           // 5539
    if (this.options.get('debug') &&                                                                               // 5540
        arguments.length > 0 && window.console && console.warn) {                                                  // 5541
      console.warn(                                                                                                // 5542
        'Select2: Data can no longer be set using `select2("data")`. You ' +                                       // 5543
        'should consider setting the value instead using `$element.val()`.'                                        // 5544
      );                                                                                                           // 5545
    }                                                                                                              // 5546
                                                                                                                   // 5547
    var data = [];                                                                                                 // 5548
                                                                                                                   // 5549
    this.dataAdapter.current(function (currentData) {                                                              // 5550
      data = currentData;                                                                                          // 5551
    });                                                                                                            // 5552
                                                                                                                   // 5553
    return data;                                                                                                   // 5554
  };                                                                                                               // 5555
                                                                                                                   // 5556
  Select2.prototype.val = function (args) {                                                                        // 5557
    if (this.options.get('debug') && window.console && console.warn) {                                             // 5558
      console.warn(                                                                                                // 5559
        'Select2: The `select2("val")` method has been deprecated and will be' +                                   // 5560
        ' removed in later Select2 versions. Use $element.val() instead.'                                          // 5561
      );                                                                                                           // 5562
    }                                                                                                              // 5563
                                                                                                                   // 5564
    if (args == null || args.length === 0) {                                                                       // 5565
      return this.$element.val();                                                                                  // 5566
    }                                                                                                              // 5567
                                                                                                                   // 5568
    var newVal = args[0];                                                                                          // 5569
                                                                                                                   // 5570
    if ($.isArray(newVal)) {                                                                                       // 5571
      newVal = $.map(newVal, function (obj) {                                                                      // 5572
        return obj.toString();                                                                                     // 5573
      });                                                                                                          // 5574
    }                                                                                                              // 5575
                                                                                                                   // 5576
    this.$element.val(newVal).trigger('change');                                                                   // 5577
  };                                                                                                               // 5578
                                                                                                                   // 5579
  Select2.prototype.destroy = function () {                                                                        // 5580
    this.$container.remove();                                                                                      // 5581
                                                                                                                   // 5582
    if (this.$element[0].detachEvent) {                                                                            // 5583
      this.$element[0].detachEvent('onpropertychange', this._syncA);                                               // 5584
    }                                                                                                              // 5585
                                                                                                                   // 5586
    if (this._observer != null) {                                                                                  // 5587
      this._observer.disconnect();                                                                                 // 5588
      this._observer = null;                                                                                       // 5589
    } else if (this.$element[0].removeEventListener) {                                                             // 5590
      this.$element[0]                                                                                             // 5591
        .removeEventListener('DOMAttrModified', this._syncA, false);                                               // 5592
      this.$element[0]                                                                                             // 5593
        .removeEventListener('DOMNodeInserted', this._syncS, false);                                               // 5594
      this.$element[0]                                                                                             // 5595
        .removeEventListener('DOMNodeRemoved', this._syncS, false);                                                // 5596
    }                                                                                                              // 5597
                                                                                                                   // 5598
    this._syncA = null;                                                                                            // 5599
    this._syncS = null;                                                                                            // 5600
                                                                                                                   // 5601
    this.$element.off('.select2');                                                                                 // 5602
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));                                            // 5603
                                                                                                                   // 5604
    this.$element.removeClass('select2-hidden-accessible');                                                        // 5605
    this.$element.attr('aria-hidden', 'false');                                                                    // 5606
    this.$element.removeData('select2');                                                                           // 5607
                                                                                                                   // 5608
    this.dataAdapter.destroy();                                                                                    // 5609
    this.selection.destroy();                                                                                      // 5610
    this.dropdown.destroy();                                                                                       // 5611
    this.results.destroy();                                                                                        // 5612
                                                                                                                   // 5613
    this.dataAdapter = null;                                                                                       // 5614
    this.selection = null;                                                                                         // 5615
    this.dropdown = null;                                                                                          // 5616
    this.results = null;                                                                                           // 5617
  };                                                                                                               // 5618
                                                                                                                   // 5619
  Select2.prototype.render = function () {                                                                         // 5620
    var $container = $(                                                                                            // 5621
      '<span class="select2 select2-container">' +                                                                 // 5622
        '<span class="selection"></span>' +                                                                        // 5623
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +                                              // 5624
      '</span>'                                                                                                    // 5625
    );                                                                                                             // 5626
                                                                                                                   // 5627
    $container.attr('dir', this.options.get('dir'));                                                               // 5628
                                                                                                                   // 5629
    this.$container = $container;                                                                                  // 5630
                                                                                                                   // 5631
    this.$container.addClass('select2-container--' + this.options.get('theme'));                                   // 5632
                                                                                                                   // 5633
    $container.data('element', this.$element);                                                                     // 5634
                                                                                                                   // 5635
    return $container;                                                                                             // 5636
  };                                                                                                               // 5637
                                                                                                                   // 5638
  return Select2;                                                                                                  // 5639
});                                                                                                                // 5640
                                                                                                                   // 5641
S2.define('jquery-mousewheel',[                                                                                    // 5642
  'jquery'                                                                                                         // 5643
], function ($) {                                                                                                  // 5644
  // Used to shim jQuery.mousewheel for non-full builds.                                                           // 5645
  return $;                                                                                                        // 5646
});                                                                                                                // 5647
                                                                                                                   // 5648
S2.define('jquery.select2',[                                                                                       // 5649
  'jquery',                                                                                                        // 5650
  'jquery-mousewheel',                                                                                             // 5651
                                                                                                                   // 5652
  './select2/core',                                                                                                // 5653
  './select2/defaults'                                                                                             // 5654
], function ($, _, Select2, Defaults) {                                                                            // 5655
  if ($.fn.select2 == null) {                                                                                      // 5656
    // All methods that should return the element                                                                  // 5657
    var thisMethods = ['open', 'close', 'destroy'];                                                                // 5658
                                                                                                                   // 5659
    $.fn.select2 = function (options) {                                                                            // 5660
      options = options || {};                                                                                     // 5661
                                                                                                                   // 5662
      if (typeof options === 'object') {                                                                           // 5663
        this.each(function () {                                                                                    // 5664
          var instanceOptions = $.extend(true, {}, options);                                                       // 5665
                                                                                                                   // 5666
          var instance = new Select2($(this), instanceOptions);                                                    // 5667
        });                                                                                                        // 5668
                                                                                                                   // 5669
        return this;                                                                                               // 5670
      } else if (typeof options === 'string') {                                                                    // 5671
        var ret;                                                                                                   // 5672
        var args = Array.prototype.slice.call(arguments, 1);                                                       // 5673
                                                                                                                   // 5674
        this.each(function () {                                                                                    // 5675
          var instance = $(this).data('select2');                                                                  // 5676
                                                                                                                   // 5677
          if (instance == null && window.console && console.error) {                                               // 5678
            console.error(                                                                                         // 5679
              'The select2(\'' + options + '\') method was called on an ' +                                        // 5680
              'element that is not using Select2.'                                                                 // 5681
            );                                                                                                     // 5682
          }                                                                                                        // 5683
                                                                                                                   // 5684
          ret = instance[options].apply(instance, args);                                                           // 5685
        });                                                                                                        // 5686
                                                                                                                   // 5687
        // Check if we should be returning `this`                                                                  // 5688
        if ($.inArray(options, thisMethods) > -1) {                                                                // 5689
          return this;                                                                                             // 5690
        }                                                                                                          // 5691
                                                                                                                   // 5692
        return ret;                                                                                                // 5693
      } else {                                                                                                     // 5694
        throw new Error('Invalid arguments for Select2: ' + options);                                              // 5695
      }                                                                                                            // 5696
    };                                                                                                             // 5697
  }                                                                                                                // 5698
                                                                                                                   // 5699
  if ($.fn.select2.defaults == null) {                                                                             // 5700
    $.fn.select2.defaults = Defaults;                                                                              // 5701
  }                                                                                                                // 5702
                                                                                                                   // 5703
  return Select2;                                                                                                  // 5704
});                                                                                                                // 5705
                                                                                                                   // 5706
  // Return the AMD loader configuration so it can be used outside of this file                                    // 5707
  return {                                                                                                         // 5708
    define: S2.define,                                                                                             // 5709
    require: S2.require                                                                                            // 5710
  };                                                                                                               // 5711
}());                                                                                                              // 5712
                                                                                                                   // 5713
  // Autoload the jQuery bindings                                                                                  // 5714
  // We know that all of the modules exist above this, so we're safe                                               // 5715
  var select2 = S2.require('jquery.select2');                                                                      // 5716
                                                                                                                   // 5717
  // Hold the AMD module references on the jQuery function that was just loaded                                    // 5718
  // This allows Select2 to use the internal loader outside of this file, such                                     // 5719
  // as in the language files.                                                                                     // 5720
  jQuery.fn.select2.amd = S2;                                                                                      // 5721
                                                                                                                   // 5722
  // Return the Select2 instance for anyone who is importing it.                                                   // 5723
  return select2;                                                                                                  // 5724
}));                                                                                                               // 5725
                                                                                                                   // 5726
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['natestrauser:select2'] = {};

})();
