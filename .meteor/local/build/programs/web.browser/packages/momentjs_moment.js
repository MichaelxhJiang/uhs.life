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
var moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/momentjs_moment/moment.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
//! moment.js                                                                                                        // 1
//! version : 2.19.1                                                                                                 // 2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors                                                       // 3
//! license : MIT                                                                                                    // 4
//! momentjs.com                                                                                                     // 5
                                                                                                                     // 6
;(function (global, factory) {                                                                                       // 7
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :                      // 8
    typeof define === 'function' && define.amd ? define(factory) :                                                   // 9
    global.moment = factory()                                                                                        // 10
}(this, (function () { 'use strict';                                                                                 // 11
                                                                                                                     // 12
var hookCallback;                                                                                                    // 13
                                                                                                                     // 14
function hooks () {                                                                                                  // 15
    return hookCallback.apply(null, arguments);                                                                      // 16
}                                                                                                                    // 17
                                                                                                                     // 18
// This is done to register the method called with moment()                                                          // 19
// without creating circular dependencies.                                                                           // 20
function setHookCallback (callback) {                                                                                // 21
    hookCallback = callback;                                                                                         // 22
}                                                                                                                    // 23
                                                                                                                     // 24
function isArray(input) {                                                                                            // 25
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';                     // 26
}                                                                                                                    // 27
                                                                                                                     // 28
function isObject(input) {                                                                                           // 29
    // IE8 will treat undefined and null as object if it wasn't for                                                  // 30
    // input != null                                                                                                 // 31
    return input != null && Object.prototype.toString.call(input) === '[object Object]';                             // 32
}                                                                                                                    // 33
                                                                                                                     // 34
function isObjectEmpty(obj) {                                                                                        // 35
    if (Object.getOwnPropertyNames) {                                                                                // 36
        return (Object.getOwnPropertyNames(obj).length === 0);                                                       // 37
    } else {                                                                                                         // 38
        var k;                                                                                                       // 39
        for (k in obj) {                                                                                             // 40
            if (obj.hasOwnProperty(k)) {                                                                             // 41
                return false;                                                                                        // 42
            }                                                                                                        // 43
        }                                                                                                            // 44
        return true;                                                                                                 // 45
    }                                                                                                                // 46
}                                                                                                                    // 47
                                                                                                                     // 48
function isUndefined(input) {                                                                                        // 49
    return input === void 0;                                                                                         // 50
}                                                                                                                    // 51
                                                                                                                     // 52
function isNumber(input) {                                                                                           // 53
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';                 // 54
}                                                                                                                    // 55
                                                                                                                     // 56
function isDate(input) {                                                                                             // 57
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';                       // 58
}                                                                                                                    // 59
                                                                                                                     // 60
function map(arr, fn) {                                                                                              // 61
    var res = [], i;                                                                                                 // 62
    for (i = 0; i < arr.length; ++i) {                                                                               // 63
        res.push(fn(arr[i], i));                                                                                     // 64
    }                                                                                                                // 65
    return res;                                                                                                      // 66
}                                                                                                                    // 67
                                                                                                                     // 68
function hasOwnProp(a, b) {                                                                                          // 69
    return Object.prototype.hasOwnProperty.call(a, b);                                                               // 70
}                                                                                                                    // 71
                                                                                                                     // 72
function extend(a, b) {                                                                                              // 73
    for (var i in b) {                                                                                               // 74
        if (hasOwnProp(b, i)) {                                                                                      // 75
            a[i] = b[i];                                                                                             // 76
        }                                                                                                            // 77
    }                                                                                                                // 78
                                                                                                                     // 79
    if (hasOwnProp(b, 'toString')) {                                                                                 // 80
        a.toString = b.toString;                                                                                     // 81
    }                                                                                                                // 82
                                                                                                                     // 83
    if (hasOwnProp(b, 'valueOf')) {                                                                                  // 84
        a.valueOf = b.valueOf;                                                                                       // 85
    }                                                                                                                // 86
                                                                                                                     // 87
    return a;                                                                                                        // 88
}                                                                                                                    // 89
                                                                                                                     // 90
function createUTC (input, format, locale, strict) {                                                                 // 91
    return createLocalOrUTC(input, format, locale, strict, true).utc();                                              // 92
}                                                                                                                    // 93
                                                                                                                     // 94
function defaultParsingFlags() {                                                                                     // 95
    // We need to deep clone this object.                                                                            // 96
    return {                                                                                                         // 97
        empty           : false,                                                                                     // 98
        unusedTokens    : [],                                                                                        // 99
        unusedInput     : [],                                                                                        // 100
        overflow        : -2,                                                                                        // 101
        charsLeftOver   : 0,                                                                                         // 102
        nullInput       : false,                                                                                     // 103
        invalidMonth    : null,                                                                                      // 104
        invalidFormat   : false,                                                                                     // 105
        userInvalidated : false,                                                                                     // 106
        iso             : false,                                                                                     // 107
        parsedDateParts : [],                                                                                        // 108
        meridiem        : null,                                                                                      // 109
        rfc2822         : false,                                                                                     // 110
        weekdayMismatch : false                                                                                      // 111
    };                                                                                                               // 112
}                                                                                                                    // 113
                                                                                                                     // 114
function getParsingFlags(m) {                                                                                        // 115
    if (m._pf == null) {                                                                                             // 116
        m._pf = defaultParsingFlags();                                                                               // 117
    }                                                                                                                // 118
    return m._pf;                                                                                                    // 119
}                                                                                                                    // 120
                                                                                                                     // 121
var some;                                                                                                            // 122
if (Array.prototype.some) {                                                                                          // 123
    some = Array.prototype.some;                                                                                     // 124
} else {                                                                                                             // 125
    some = function (fun) {                                                                                          // 126
        var t = Object(this);                                                                                        // 127
        var len = t.length >>> 0;                                                                                    // 128
                                                                                                                     // 129
        for (var i = 0; i < len; i++) {                                                                              // 130
            if (i in t && fun.call(this, t[i], i, t)) {                                                              // 131
                return true;                                                                                         // 132
            }                                                                                                        // 133
        }                                                                                                            // 134
                                                                                                                     // 135
        return false;                                                                                                // 136
    };                                                                                                               // 137
}                                                                                                                    // 138
                                                                                                                     // 139
function isValid(m) {                                                                                                // 140
    if (m._isValid == null) {                                                                                        // 141
        var flags = getParsingFlags(m);                                                                              // 142
        var parsedParts = some.call(flags.parsedDateParts, function (i) {                                            // 143
            return i != null;                                                                                        // 144
        });                                                                                                          // 145
        var isNowValid = !isNaN(m._d.getTime()) &&                                                                   // 146
            flags.overflow < 0 &&                                                                                    // 147
            !flags.empty &&                                                                                          // 148
            !flags.invalidMonth &&                                                                                   // 149
            !flags.invalidWeekday &&                                                                                 // 150
            !flags.weekdayMismatch &&                                                                                // 151
            !flags.nullInput &&                                                                                      // 152
            !flags.invalidFormat &&                                                                                  // 153
            !flags.userInvalidated &&                                                                                // 154
            (!flags.meridiem || (flags.meridiem && parsedParts));                                                    // 155
                                                                                                                     // 156
        if (m._strict) {                                                                                             // 157
            isNowValid = isNowValid &&                                                                               // 158
                flags.charsLeftOver === 0 &&                                                                         // 159
                flags.unusedTokens.length === 0 &&                                                                   // 160
                flags.bigHour === undefined;                                                                         // 161
        }                                                                                                            // 162
                                                                                                                     // 163
        if (Object.isFrozen == null || !Object.isFrozen(m)) {                                                        // 164
            m._isValid = isNowValid;                                                                                 // 165
        }                                                                                                            // 166
        else {                                                                                                       // 167
            return isNowValid;                                                                                       // 168
        }                                                                                                            // 169
    }                                                                                                                // 170
    return m._isValid;                                                                                               // 171
}                                                                                                                    // 172
                                                                                                                     // 173
function createInvalid (flags) {                                                                                     // 174
    var m = createUTC(NaN);                                                                                          // 175
    if (flags != null) {                                                                                             // 176
        extend(getParsingFlags(m), flags);                                                                           // 177
    }                                                                                                                // 178
    else {                                                                                                           // 179
        getParsingFlags(m).userInvalidated = true;                                                                   // 180
    }                                                                                                                // 181
                                                                                                                     // 182
    return m;                                                                                                        // 183
}                                                                                                                    // 184
                                                                                                                     // 185
// Plugins that add properties should also add the key here (null value),                                            // 186
// so we can properly clone ourselves.                                                                               // 187
var momentProperties = hooks.momentProperties = [];                                                                  // 188
                                                                                                                     // 189
function copyConfig(to, from) {                                                                                      // 190
    var i, prop, val;                                                                                                // 191
                                                                                                                     // 192
    if (!isUndefined(from._isAMomentObject)) {                                                                       // 193
        to._isAMomentObject = from._isAMomentObject;                                                                 // 194
    }                                                                                                                // 195
    if (!isUndefined(from._i)) {                                                                                     // 196
        to._i = from._i;                                                                                             // 197
    }                                                                                                                // 198
    if (!isUndefined(from._f)) {                                                                                     // 199
        to._f = from._f;                                                                                             // 200
    }                                                                                                                // 201
    if (!isUndefined(from._l)) {                                                                                     // 202
        to._l = from._l;                                                                                             // 203
    }                                                                                                                // 204
    if (!isUndefined(from._strict)) {                                                                                // 205
        to._strict = from._strict;                                                                                   // 206
    }                                                                                                                // 207
    if (!isUndefined(from._tzm)) {                                                                                   // 208
        to._tzm = from._tzm;                                                                                         // 209
    }                                                                                                                // 210
    if (!isUndefined(from._isUTC)) {                                                                                 // 211
        to._isUTC = from._isUTC;                                                                                     // 212
    }                                                                                                                // 213
    if (!isUndefined(from._offset)) {                                                                                // 214
        to._offset = from._offset;                                                                                   // 215
    }                                                                                                                // 216
    if (!isUndefined(from._pf)) {                                                                                    // 217
        to._pf = getParsingFlags(from);                                                                              // 218
    }                                                                                                                // 219
    if (!isUndefined(from._locale)) {                                                                                // 220
        to._locale = from._locale;                                                                                   // 221
    }                                                                                                                // 222
                                                                                                                     // 223
    if (momentProperties.length > 0) {                                                                               // 224
        for (i = 0; i < momentProperties.length; i++) {                                                              // 225
            prop = momentProperties[i];                                                                              // 226
            val = from[prop];                                                                                        // 227
            if (!isUndefined(val)) {                                                                                 // 228
                to[prop] = val;                                                                                      // 229
            }                                                                                                        // 230
        }                                                                                                            // 231
    }                                                                                                                // 232
                                                                                                                     // 233
    return to;                                                                                                       // 234
}                                                                                                                    // 235
                                                                                                                     // 236
var updateInProgress = false;                                                                                        // 237
                                                                                                                     // 238
// Moment prototype object                                                                                           // 239
function Moment(config) {                                                                                            // 240
    copyConfig(this, config);                                                                                        // 241
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);                                               // 242
    if (!this.isValid()) {                                                                                           // 243
        this._d = new Date(NaN);                                                                                     // 244
    }                                                                                                                // 245
    // Prevent infinite loop in case updateOffset creates new moment                                                 // 246
    // objects.                                                                                                      // 247
    if (updateInProgress === false) {                                                                                // 248
        updateInProgress = true;                                                                                     // 249
        hooks.updateOffset(this);                                                                                    // 250
        updateInProgress = false;                                                                                    // 251
    }                                                                                                                // 252
}                                                                                                                    // 253
                                                                                                                     // 254
function isMoment (obj) {                                                                                            // 255
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);                                   // 256
}                                                                                                                    // 257
                                                                                                                     // 258
function absFloor (number) {                                                                                         // 259
    if (number < 0) {                                                                                                // 260
        // -0 -> 0                                                                                                   // 261
        return Math.ceil(number) || 0;                                                                               // 262
    } else {                                                                                                         // 263
        return Math.floor(number);                                                                                   // 264
    }                                                                                                                // 265
}                                                                                                                    // 266
                                                                                                                     // 267
function toInt(argumentForCoercion) {                                                                                // 268
    var coercedNumber = +argumentForCoercion,                                                                        // 269
        value = 0;                                                                                                   // 270
                                                                                                                     // 271
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {                                                            // 272
        value = absFloor(coercedNumber);                                                                             // 273
    }                                                                                                                // 274
                                                                                                                     // 275
    return value;                                                                                                    // 276
}                                                                                                                    // 277
                                                                                                                     // 278
// compare two arrays, return the number of differences                                                              // 279
function compareArrays(array1, array2, dontConvert) {                                                                // 280
    var len = Math.min(array1.length, array2.length),                                                                // 281
        lengthDiff = Math.abs(array1.length - array2.length),                                                        // 282
        diffs = 0,                                                                                                   // 283
        i;                                                                                                           // 284
    for (i = 0; i < len; i++) {                                                                                      // 285
        if ((dontConvert && array1[i] !== array2[i]) ||                                                              // 286
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {                                               // 287
            diffs++;                                                                                                 // 288
        }                                                                                                            // 289
    }                                                                                                                // 290
    return diffs + lengthDiff;                                                                                       // 291
}                                                                                                                    // 292
                                                                                                                     // 293
function warn(msg) {                                                                                                 // 294
    if (hooks.suppressDeprecationWarnings === false &&                                                               // 295
            (typeof console !==  'undefined') && console.warn) {                                                     // 296
        console.warn('Deprecation warning: ' + msg);                                                                 // 297
    }                                                                                                                // 298
}                                                                                                                    // 299
                                                                                                                     // 300
function deprecate(msg, fn) {                                                                                        // 301
    var firstTime = true;                                                                                            // 302
                                                                                                                     // 303
    return extend(function () {                                                                                      // 304
        if (hooks.deprecationHandler != null) {                                                                      // 305
            hooks.deprecationHandler(null, msg);                                                                     // 306
        }                                                                                                            // 307
        if (firstTime) {                                                                                             // 308
            var args = [];                                                                                           // 309
            var arg;                                                                                                 // 310
            for (var i = 0; i < arguments.length; i++) {                                                             // 311
                arg = '';                                                                                            // 312
                if (typeof arguments[i] === 'object') {                                                              // 313
                    arg += '\n[' + i + '] ';                                                                         // 314
                    for (var key in arguments[0]) {                                                                  // 315
                        arg += key + ': ' + arguments[0][key] + ', ';                                                // 316
                    }                                                                                                // 317
                    arg = arg.slice(0, -2); // Remove trailing comma and space                                       // 318
                } else {                                                                                             // 319
                    arg = arguments[i];                                                                              // 320
                }                                                                                                    // 321
                args.push(arg);                                                                                      // 322
            }                                                                                                        // 323
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);    // 324
            firstTime = false;                                                                                       // 325
        }                                                                                                            // 326
        return fn.apply(this, arguments);                                                                            // 327
    }, fn);                                                                                                          // 328
}                                                                                                                    // 329
                                                                                                                     // 330
var deprecations = {};                                                                                               // 331
                                                                                                                     // 332
function deprecateSimple(name, msg) {                                                                                // 333
    if (hooks.deprecationHandler != null) {                                                                          // 334
        hooks.deprecationHandler(name, msg);                                                                         // 335
    }                                                                                                                // 336
    if (!deprecations[name]) {                                                                                       // 337
        warn(msg);                                                                                                   // 338
        deprecations[name] = true;                                                                                   // 339
    }                                                                                                                // 340
}                                                                                                                    // 341
                                                                                                                     // 342
hooks.suppressDeprecationWarnings = false;                                                                           // 343
hooks.deprecationHandler = null;                                                                                     // 344
                                                                                                                     // 345
function isFunction(input) {                                                                                         // 346
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';               // 347
}                                                                                                                    // 348
                                                                                                                     // 349
function set (config) {                                                                                              // 350
    var prop, i;                                                                                                     // 351
    for (i in config) {                                                                                              // 352
        prop = config[i];                                                                                            // 353
        if (isFunction(prop)) {                                                                                      // 354
            this[i] = prop;                                                                                          // 355
        } else {                                                                                                     // 356
            this['_' + i] = prop;                                                                                    // 357
        }                                                                                                            // 358
    }                                                                                                                // 359
    this._config = config;                                                                                           // 360
    // Lenient ordinal parsing accepts just a number in addition to                                                  // 361
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.                                                // 362
    // TODO: Remove "ordinalParse" fallback in next major release.                                                   // 363
    this._dayOfMonthOrdinalParseLenient = new RegExp(                                                                // 364
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +                                         // 365
            '|' + (/\d{1,2}/).source);                                                                               // 366
}                                                                                                                    // 367
                                                                                                                     // 368
function mergeConfigs(parentConfig, childConfig) {                                                                   // 369
    var res = extend({}, parentConfig), prop;                                                                        // 370
    for (prop in childConfig) {                                                                                      // 371
        if (hasOwnProp(childConfig, prop)) {                                                                         // 372
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {                                       // 373
                res[prop] = {};                                                                                      // 374
                extend(res[prop], parentConfig[prop]);                                                               // 375
                extend(res[prop], childConfig[prop]);                                                                // 376
            } else if (childConfig[prop] != null) {                                                                  // 377
                res[prop] = childConfig[prop];                                                                       // 378
            } else {                                                                                                 // 379
                delete res[prop];                                                                                    // 380
            }                                                                                                        // 381
        }                                                                                                            // 382
    }                                                                                                                // 383
    for (prop in parentConfig) {                                                                                     // 384
        if (hasOwnProp(parentConfig, prop) &&                                                                        // 385
                !hasOwnProp(childConfig, prop) &&                                                                    // 386
                isObject(parentConfig[prop])) {                                                                      // 387
            // make sure changes to properties don't modify parent config                                            // 388
            res[prop] = extend({}, res[prop]);                                                                       // 389
        }                                                                                                            // 390
    }                                                                                                                // 391
    return res;                                                                                                      // 392
}                                                                                                                    // 393
                                                                                                                     // 394
function Locale(config) {                                                                                            // 395
    if (config != null) {                                                                                            // 396
        this.set(config);                                                                                            // 397
    }                                                                                                                // 398
}                                                                                                                    // 399
                                                                                                                     // 400
var keys;                                                                                                            // 401
                                                                                                                     // 402
if (Object.keys) {                                                                                                   // 403
    keys = Object.keys;                                                                                              // 404
} else {                                                                                                             // 405
    keys = function (obj) {                                                                                          // 406
        var i, res = [];                                                                                             // 407
        for (i in obj) {                                                                                             // 408
            if (hasOwnProp(obj, i)) {                                                                                // 409
                res.push(i);                                                                                         // 410
            }                                                                                                        // 411
        }                                                                                                            // 412
        return res;                                                                                                  // 413
    };                                                                                                               // 414
}                                                                                                                    // 415
                                                                                                                     // 416
var defaultCalendar = {                                                                                              // 417
    sameDay : '[Today at] LT',                                                                                       // 418
    nextDay : '[Tomorrow at] LT',                                                                                    // 419
    nextWeek : 'dddd [at] LT',                                                                                       // 420
    lastDay : '[Yesterday at] LT',                                                                                   // 421
    lastWeek : '[Last] dddd [at] LT',                                                                                // 422
    sameElse : 'L'                                                                                                   // 423
};                                                                                                                   // 424
                                                                                                                     // 425
function calendar (key, mom, now) {                                                                                  // 426
    var output = this._calendar[key] || this._calendar['sameElse'];                                                  // 427
    return isFunction(output) ? output.call(mom, now) : output;                                                      // 428
}                                                                                                                    // 429
                                                                                                                     // 430
var defaultLongDateFormat = {                                                                                        // 431
    LTS  : 'h:mm:ss A',                                                                                              // 432
    LT   : 'h:mm A',                                                                                                 // 433
    L    : 'MM/DD/YYYY',                                                                                             // 434
    LL   : 'MMMM D, YYYY',                                                                                           // 435
    LLL  : 'MMMM D, YYYY h:mm A',                                                                                    // 436
    LLLL : 'dddd, MMMM D, YYYY h:mm A'                                                                               // 437
};                                                                                                                   // 438
                                                                                                                     // 439
function longDateFormat (key) {                                                                                      // 440
    var format = this._longDateFormat[key],                                                                          // 441
        formatUpper = this._longDateFormat[key.toUpperCase()];                                                       // 442
                                                                                                                     // 443
    if (format || !formatUpper) {                                                                                    // 444
        return format;                                                                                               // 445
    }                                                                                                                // 446
                                                                                                                     // 447
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {                             // 448
        return val.slice(1);                                                                                         // 449
    });                                                                                                              // 450
                                                                                                                     // 451
    return this._longDateFormat[key];                                                                                // 452
}                                                                                                                    // 453
                                                                                                                     // 454
var defaultInvalidDate = 'Invalid date';                                                                             // 455
                                                                                                                     // 456
function invalidDate () {                                                                                            // 457
    return this._invalidDate;                                                                                        // 458
}                                                                                                                    // 459
                                                                                                                     // 460
var defaultOrdinal = '%d';                                                                                           // 461
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;                                                                       // 462
                                                                                                                     // 463
function ordinal (number) {                                                                                          // 464
    return this._ordinal.replace('%d', number);                                                                      // 465
}                                                                                                                    // 466
                                                                                                                     // 467
var defaultRelativeTime = {                                                                                          // 468
    future : 'in %s',                                                                                                // 469
    past   : '%s ago',                                                                                               // 470
    s  : 'a few seconds',                                                                                            // 471
    ss : '%d seconds',                                                                                               // 472
    m  : 'a minute',                                                                                                 // 473
    mm : '%d minutes',                                                                                               // 474
    h  : 'an hour',                                                                                                  // 475
    hh : '%d hours',                                                                                                 // 476
    d  : 'a day',                                                                                                    // 477
    dd : '%d days',                                                                                                  // 478
    M  : 'a month',                                                                                                  // 479
    MM : '%d months',                                                                                                // 480
    y  : 'a year',                                                                                                   // 481
    yy : '%d years'                                                                                                  // 482
};                                                                                                                   // 483
                                                                                                                     // 484
function relativeTime (number, withoutSuffix, string, isFuture) {                                                    // 485
    var output = this._relativeTime[string];                                                                         // 486
    return (isFunction(output)) ?                                                                                    // 487
        output(number, withoutSuffix, string, isFuture) :                                                            // 488
        output.replace(/%d/i, number);                                                                               // 489
}                                                                                                                    // 490
                                                                                                                     // 491
function pastFuture (diff, output) {                                                                                 // 492
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];                                                   // 493
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);                                      // 494
}                                                                                                                    // 495
                                                                                                                     // 496
var aliases = {};                                                                                                    // 497
                                                                                                                     // 498
function addUnitAlias (unit, shorthand) {                                                                            // 499
    var lowerCase = unit.toLowerCase();                                                                              // 500
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;                                       // 501
}                                                                                                                    // 502
                                                                                                                     // 503
function normalizeUnits(units) {                                                                                     // 504
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;                   // 505
}                                                                                                                    // 506
                                                                                                                     // 507
function normalizeObjectUnits(inputObject) {                                                                         // 508
    var normalizedInput = {},                                                                                        // 509
        normalizedProp,                                                                                              // 510
        prop;                                                                                                        // 511
                                                                                                                     // 512
    for (prop in inputObject) {                                                                                      // 513
        if (hasOwnProp(inputObject, prop)) {                                                                         // 514
            normalizedProp = normalizeUnits(prop);                                                                   // 515
            if (normalizedProp) {                                                                                    // 516
                normalizedInput[normalizedProp] = inputObject[prop];                                                 // 517
            }                                                                                                        // 518
        }                                                                                                            // 519
    }                                                                                                                // 520
                                                                                                                     // 521
    return normalizedInput;                                                                                          // 522
}                                                                                                                    // 523
                                                                                                                     // 524
var priorities = {};                                                                                                 // 525
                                                                                                                     // 526
function addUnitPriority(unit, priority) {                                                                           // 527
    priorities[unit] = priority;                                                                                     // 528
}                                                                                                                    // 529
                                                                                                                     // 530
function getPrioritizedUnits(unitsObj) {                                                                             // 531
    var units = [];                                                                                                  // 532
    for (var u in unitsObj) {                                                                                        // 533
        units.push({unit: u, priority: priorities[u]});                                                              // 534
    }                                                                                                                // 535
    units.sort(function (a, b) {                                                                                     // 536
        return a.priority - b.priority;                                                                              // 537
    });                                                                                                              // 538
    return units;                                                                                                    // 539
}                                                                                                                    // 540
                                                                                                                     // 541
function zeroFill(number, targetLength, forceSign) {                                                                 // 542
    var absNumber = '' + Math.abs(number),                                                                           // 543
        zerosToFill = targetLength - absNumber.length,                                                               // 544
        sign = number >= 0;                                                                                          // 545
    return (sign ? (forceSign ? '+' : '') : '-') +                                                                   // 546
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;                                     // 547
}                                                                                                                    // 548
                                                                                                                     // 549
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
                                                                                                                     // 551
var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;                                            // 552
                                                                                                                     // 553
var formatFunctions = {};                                                                                            // 554
                                                                                                                     // 555
var formatTokenFunctions = {};                                                                                       // 556
                                                                                                                     // 557
// token:    'M'                                                                                                     // 558
// padded:   ['MM', 2]                                                                                               // 559
// ordinal:  'Mo'                                                                                                    // 560
// callback: function () { this.month() + 1 }                                                                        // 561
function addFormatToken (token, padded, ordinal, callback) {                                                         // 562
    var func = callback;                                                                                             // 563
    if (typeof callback === 'string') {                                                                              // 564
        func = function () {                                                                                         // 565
            return this[callback]();                                                                                 // 566
        };                                                                                                           // 567
    }                                                                                                                // 568
    if (token) {                                                                                                     // 569
        formatTokenFunctions[token] = func;                                                                          // 570
    }                                                                                                                // 571
    if (padded) {                                                                                                    // 572
        formatTokenFunctions[padded[0]] = function () {                                                              // 573
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);                                      // 574
        };                                                                                                           // 575
    }                                                                                                                // 576
    if (ordinal) {                                                                                                   // 577
        formatTokenFunctions[ordinal] = function () {                                                                // 578
            return this.localeData().ordinal(func.apply(this, arguments), token);                                    // 579
        };                                                                                                           // 580
    }                                                                                                                // 581
}                                                                                                                    // 582
                                                                                                                     // 583
function removeFormattingTokens(input) {                                                                             // 584
    if (input.match(/\[[\s\S]/)) {                                                                                   // 585
        return input.replace(/^\[|\]$/g, '');                                                                        // 586
    }                                                                                                                // 587
    return input.replace(/\\/g, '');                                                                                 // 588
}                                                                                                                    // 589
                                                                                                                     // 590
function makeFormatFunction(format) {                                                                                // 591
    var array = format.match(formattingTokens), i, length;                                                           // 592
                                                                                                                     // 593
    for (i = 0, length = array.length; i < length; i++) {                                                            // 594
        if (formatTokenFunctions[array[i]]) {                                                                        // 595
            array[i] = formatTokenFunctions[array[i]];                                                               // 596
        } else {                                                                                                     // 597
            array[i] = removeFormattingTokens(array[i]);                                                             // 598
        }                                                                                                            // 599
    }                                                                                                                // 600
                                                                                                                     // 601
    return function (mom) {                                                                                          // 602
        var output = '', i;                                                                                          // 603
        for (i = 0; i < length; i++) {                                                                               // 604
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];                                  // 605
        }                                                                                                            // 606
        return output;                                                                                               // 607
    };                                                                                                               // 608
}                                                                                                                    // 609
                                                                                                                     // 610
// format date using native date object                                                                              // 611
function formatMoment(m, format) {                                                                                   // 612
    if (!m.isValid()) {                                                                                              // 613
        return m.localeData().invalidDate();                                                                         // 614
    }                                                                                                                // 615
                                                                                                                     // 616
    format = expandFormat(format, m.localeData());                                                                   // 617
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);                                 // 618
                                                                                                                     // 619
    return formatFunctions[format](m);                                                                               // 620
}                                                                                                                    // 621
                                                                                                                     // 622
function expandFormat(format, locale) {                                                                              // 623
    var i = 5;                                                                                                       // 624
                                                                                                                     // 625
    function replaceLongDateFormatTokens(input) {                                                                    // 626
        return locale.longDateFormat(input) || input;                                                                // 627
    }                                                                                                                // 628
                                                                                                                     // 629
    localFormattingTokens.lastIndex = 0;                                                                             // 630
    while (i >= 0 && localFormattingTokens.test(format)) {                                                           // 631
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);                                 // 632
        localFormattingTokens.lastIndex = 0;                                                                         // 633
        i -= 1;                                                                                                      // 634
    }                                                                                                                // 635
                                                                                                                     // 636
    return format;                                                                                                   // 637
}                                                                                                                    // 638
                                                                                                                     // 639
var match1         = /\d/;            //       0 - 9                                                                 // 640
var match2         = /\d\d/;          //      00 - 99                                                                // 641
var match3         = /\d{3}/;         //     000 - 999                                                               // 642
var match4         = /\d{4}/;         //    0000 - 9999                                                              // 643
var match6         = /[+-]?\d{6}/;    // -999999 - 999999                                                            // 644
var match1to2      = /\d\d?/;         //       0 - 99                                                                // 645
var match3to4      = /\d\d\d\d?/;     //     999 - 9999                                                              // 646
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999                                                            // 647
var match1to3      = /\d{1,3}/;       //       0 - 999                                                               // 648
var match1to4      = /\d{1,4}/;       //       0 - 9999                                                              // 649
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999                                                            // 650
                                                                                                                     // 651
var matchUnsigned  = /\d+/;           //       0 - inf                                                               // 652
var matchSigned    = /[+-]?\d+/;      //    -inf - inf                                                               // 653
                                                                                                                     // 654
var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z                                         // 655
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z                          // 656
                                                                                                                     // 657
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123                                              // 658
                                                                                                                     // 659
// any word (or two) characters or numbers including two/three word month in arabic.                                 // 660
// includes scottish gaelic two word and hyphenated months                                                           // 661
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
                                                                                                                     // 663
                                                                                                                     // 664
var regexes = {};                                                                                                    // 665
                                                                                                                     // 666
function addRegexToken (token, regex, strictRegex) {                                                                 // 667
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {                                   // 668
        return (isStrict && strictRegex) ? strictRegex : regex;                                                      // 669
    };                                                                                                               // 670
}                                                                                                                    // 671
                                                                                                                     // 672
function getParseRegexForToken (token, config) {                                                                     // 673
    if (!hasOwnProp(regexes, token)) {                                                                               // 674
        return new RegExp(unescapeFormat(token));                                                                    // 675
    }                                                                                                                // 676
                                                                                                                     // 677
    return regexes[token](config._strict, config._locale);                                                           // 678
}                                                                                                                    // 679
                                                                                                                     // 680
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript              // 681
function unescapeFormat(s) {                                                                                         // 682
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;                                                                                 // 684
    }));                                                                                                             // 685
}                                                                                                                    // 686
                                                                                                                     // 687
function regexEscape(s) {                                                                                            // 688
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                              // 689
}                                                                                                                    // 690
                                                                                                                     // 691
var tokens = {};                                                                                                     // 692
                                                                                                                     // 693
function addParseToken (token, callback) {                                                                           // 694
    var i, func = callback;                                                                                          // 695
    if (typeof token === 'string') {                                                                                 // 696
        token = [token];                                                                                             // 697
    }                                                                                                                // 698
    if (isNumber(callback)) {                                                                                        // 699
        func = function (input, array) {                                                                             // 700
            array[callback] = toInt(input);                                                                          // 701
        };                                                                                                           // 702
    }                                                                                                                // 703
    for (i = 0; i < token.length; i++) {                                                                             // 704
        tokens[token[i]] = func;                                                                                     // 705
    }                                                                                                                // 706
}                                                                                                                    // 707
                                                                                                                     // 708
function addWeekParseToken (token, callback) {                                                                       // 709
    addParseToken(token, function (input, array, config, token) {                                                    // 710
        config._w = config._w || {};                                                                                 // 711
        callback(input, config._w, config, token);                                                                   // 712
    });                                                                                                              // 713
}                                                                                                                    // 714
                                                                                                                     // 715
function addTimeToArrayFromToken(token, input, config) {                                                             // 716
    if (input != null && hasOwnProp(tokens, token)) {                                                                // 717
        tokens[token](input, config._a, config, token);                                                              // 718
    }                                                                                                                // 719
}                                                                                                                    // 720
                                                                                                                     // 721
var YEAR = 0;                                                                                                        // 722
var MONTH = 1;                                                                                                       // 723
var DATE = 2;                                                                                                        // 724
var HOUR = 3;                                                                                                        // 725
var MINUTE = 4;                                                                                                      // 726
var SECOND = 5;                                                                                                      // 727
var MILLISECOND = 6;                                                                                                 // 728
var WEEK = 7;                                                                                                        // 729
var WEEKDAY = 8;                                                                                                     // 730
                                                                                                                     // 731
// FORMATTING                                                                                                        // 732
                                                                                                                     // 733
addFormatToken('Y', 0, 0, function () {                                                                              // 734
    var y = this.year();                                                                                             // 735
    return y <= 9999 ? '' + y : '+' + y;                                                                             // 736
});                                                                                                                  // 737
                                                                                                                     // 738
addFormatToken(0, ['YY', 2], 0, function () {                                                                        // 739
    return this.year() % 100;                                                                                        // 740
});                                                                                                                  // 741
                                                                                                                     // 742
addFormatToken(0, ['YYYY',   4],       0, 'year');                                                                   // 743
addFormatToken(0, ['YYYYY',  5],       0, 'year');                                                                   // 744
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');                                                                   // 745
                                                                                                                     // 746
// ALIASES                                                                                                           // 747
                                                                                                                     // 748
addUnitAlias('year', 'y');                                                                                           // 749
                                                                                                                     // 750
// PRIORITIES                                                                                                        // 751
                                                                                                                     // 752
addUnitPriority('year', 1);                                                                                          // 753
                                                                                                                     // 754
// PARSING                                                                                                           // 755
                                                                                                                     // 756
addRegexToken('Y',      matchSigned);                                                                                // 757
addRegexToken('YY',     match1to2, match2);                                                                          // 758
addRegexToken('YYYY',   match1to4, match4);                                                                          // 759
addRegexToken('YYYYY',  match1to6, match6);                                                                          // 760
addRegexToken('YYYYYY', match1to6, match6);                                                                          // 761
                                                                                                                     // 762
addParseToken(['YYYYY', 'YYYYYY'], YEAR);                                                                            // 763
addParseToken('YYYY', function (input, array) {                                                                      // 764
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);                                // 765
});                                                                                                                  // 766
addParseToken('YY', function (input, array) {                                                                        // 767
    array[YEAR] = hooks.parseTwoDigitYear(input);                                                                    // 768
});                                                                                                                  // 769
addParseToken('Y', function (input, array) {                                                                         // 770
    array[YEAR] = parseInt(input, 10);                                                                               // 771
});                                                                                                                  // 772
                                                                                                                     // 773
// HELPERS                                                                                                           // 774
                                                                                                                     // 775
function daysInYear(year) {                                                                                          // 776
    return isLeapYear(year) ? 366 : 365;                                                                             // 777
}                                                                                                                    // 778
                                                                                                                     // 779
function isLeapYear(year) {                                                                                          // 780
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;                                                 // 781
}                                                                                                                    // 782
                                                                                                                     // 783
// HOOKS                                                                                                             // 784
                                                                                                                     // 785
hooks.parseTwoDigitYear = function (input) {                                                                         // 786
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);                                                         // 787
};                                                                                                                   // 788
                                                                                                                     // 789
// MOMENTS                                                                                                           // 790
                                                                                                                     // 791
var getSetYear = makeGetSet('FullYear', true);                                                                       // 792
                                                                                                                     // 793
function getIsLeapYear () {                                                                                          // 794
    return isLeapYear(this.year());                                                                                  // 795
}                                                                                                                    // 796
                                                                                                                     // 797
function makeGetSet (unit, keepTime) {                                                                               // 798
    return function (value) {                                                                                        // 799
        if (value != null) {                                                                                         // 800
            set$1(this, unit, value);                                                                                // 801
            hooks.updateOffset(this, keepTime);                                                                      // 802
            return this;                                                                                             // 803
        } else {                                                                                                     // 804
            return get(this, unit);                                                                                  // 805
        }                                                                                                            // 806
    };                                                                                                               // 807
}                                                                                                                    // 808
                                                                                                                     // 809
function get (mom, unit) {                                                                                           // 810
    return mom.isValid() ?                                                                                           // 811
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;                                                    // 812
}                                                                                                                    // 813
                                                                                                                     // 814
function set$1 (mom, unit, value) {                                                                                  // 815
    if (mom.isValid() && !isNaN(value)) {                                                                            // 816
        if (unit === 'FullYear' && isLeapYear(mom.year())) {                                                         // 817
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));   // 818
        }                                                                                                            // 819
        else {                                                                                                       // 820
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);                                                 // 821
        }                                                                                                            // 822
    }                                                                                                                // 823
}                                                                                                                    // 824
                                                                                                                     // 825
// MOMENTS                                                                                                           // 826
                                                                                                                     // 827
function stringGet (units) {                                                                                         // 828
    units = normalizeUnits(units);                                                                                   // 829
    if (isFunction(this[units])) {                                                                                   // 830
        return this[units]();                                                                                        // 831
    }                                                                                                                // 832
    return this;                                                                                                     // 833
}                                                                                                                    // 834
                                                                                                                     // 835
                                                                                                                     // 836
function stringSet (units, value) {                                                                                  // 837
    if (typeof units === 'object') {                                                                                 // 838
        units = normalizeObjectUnits(units);                                                                         // 839
        var prioritized = getPrioritizedUnits(units);                                                                // 840
        for (var i = 0; i < prioritized.length; i++) {                                                               // 841
            this[prioritized[i].unit](units[prioritized[i].unit]);                                                   // 842
        }                                                                                                            // 843
    } else {                                                                                                         // 844
        units = normalizeUnits(units);                                                                               // 845
        if (isFunction(this[units])) {                                                                               // 846
            return this[units](value);                                                                               // 847
        }                                                                                                            // 848
    }                                                                                                                // 849
    return this;                                                                                                     // 850
}                                                                                                                    // 851
                                                                                                                     // 852
function mod(n, x) {                                                                                                 // 853
    return ((n % x) + x) % x;                                                                                        // 854
}                                                                                                                    // 855
                                                                                                                     // 856
var indexOf;                                                                                                         // 857
                                                                                                                     // 858
if (Array.prototype.indexOf) {                                                                                       // 859
    indexOf = Array.prototype.indexOf;                                                                               // 860
} else {                                                                                                             // 861
    indexOf = function (o) {                                                                                         // 862
        // I know                                                                                                    // 863
        var i;                                                                                                       // 864
        for (i = 0; i < this.length; ++i) {                                                                          // 865
            if (this[i] === o) {                                                                                     // 866
                return i;                                                                                            // 867
            }                                                                                                        // 868
        }                                                                                                            // 869
        return -1;                                                                                                   // 870
    };                                                                                                               // 871
}                                                                                                                    // 872
                                                                                                                     // 873
function daysInMonth(year, month) {                                                                                  // 874
    if (isNaN(year) || isNaN(month)) {                                                                               // 875
        return NaN;                                                                                                  // 876
    }                                                                                                                // 877
    var modMonth = mod(month, 12);                                                                                   // 878
    year += (month - modMonth) / 12;                                                                                 // 879
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);                                  // 880
}                                                                                                                    // 881
                                                                                                                     // 882
// FORMATTING                                                                                                        // 883
                                                                                                                     // 884
addFormatToken('M', ['MM', 2], 'Mo', function () {                                                                   // 885
    return this.month() + 1;                                                                                         // 886
});                                                                                                                  // 887
                                                                                                                     // 888
addFormatToken('MMM', 0, 0, function (format) {                                                                      // 889
    return this.localeData().monthsShort(this, format);                                                              // 890
});                                                                                                                  // 891
                                                                                                                     // 892
addFormatToken('MMMM', 0, 0, function (format) {                                                                     // 893
    return this.localeData().months(this, format);                                                                   // 894
});                                                                                                                  // 895
                                                                                                                     // 896
// ALIASES                                                                                                           // 897
                                                                                                                     // 898
addUnitAlias('month', 'M');                                                                                          // 899
                                                                                                                     // 900
// PRIORITY                                                                                                          // 901
                                                                                                                     // 902
addUnitPriority('month', 8);                                                                                         // 903
                                                                                                                     // 904
// PARSING                                                                                                           // 905
                                                                                                                     // 906
addRegexToken('M',    match1to2);                                                                                    // 907
addRegexToken('MM',   match1to2, match2);                                                                            // 908
addRegexToken('MMM',  function (isStrict, locale) {                                                                  // 909
    return locale.monthsShortRegex(isStrict);                                                                        // 910
});                                                                                                                  // 911
addRegexToken('MMMM', function (isStrict, locale) {                                                                  // 912
    return locale.monthsRegex(isStrict);                                                                             // 913
});                                                                                                                  // 914
                                                                                                                     // 915
addParseToken(['M', 'MM'], function (input, array) {                                                                 // 916
    array[MONTH] = toInt(input) - 1;                                                                                 // 917
});                                                                                                                  // 918
                                                                                                                     // 919
addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {                                              // 920
    var month = config._locale.monthsParse(input, token, config._strict);                                            // 921
    // if we didn't find a month name, mark the date as invalid.                                                     // 922
    if (month != null) {                                                                                             // 923
        array[MONTH] = month;                                                                                        // 924
    } else {                                                                                                         // 925
        getParsingFlags(config).invalidMonth = input;                                                                // 926
    }                                                                                                                // 927
});                                                                                                                  // 928
                                                                                                                     // 929
// LOCALES                                                                                                           // 930
                                                                                                                     // 931
var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;                                                              // 932
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {                                                                                  // 934
    if (!m) {                                                                                                        // 935
        return isArray(this._months) ? this._months :                                                                // 936
            this._months['standalone'];                                                                              // 937
    }                                                                                                                // 938
    return isArray(this._months) ? this._months[m.month()] :                                                         // 939
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}                                                                                                                    // 941
                                                                                                                     // 942
var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');                         // 943
function localeMonthsShort (m, format) {                                                                             // 944
    if (!m) {                                                                                                        // 945
        return isArray(this._monthsShort) ? this._monthsShort :                                                      // 946
            this._monthsShort['standalone'];                                                                         // 947
    }                                                                                                                // 948
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :                                               // 949
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];                       // 950
}                                                                                                                    // 951
                                                                                                                     // 952
function handleStrictParse(monthName, format, strict) {                                                              // 953
    var i, ii, mom, llc = monthName.toLocaleLowerCase();                                                             // 954
    if (!this._monthsParse) {                                                                                        // 955
        // this is not used                                                                                          // 956
        this._monthsParse = [];                                                                                      // 957
        this._longMonthsParse = [];                                                                                  // 958
        this._shortMonthsParse = [];                                                                                 // 959
        for (i = 0; i < 12; ++i) {                                                                                   // 960
            mom = createUTC([2000, i]);                                                                              // 961
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();                               // 962
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();                                     // 963
        }                                                                                                            // 964
    }                                                                                                                // 965
                                                                                                                     // 966
    if (strict) {                                                                                                    // 967
        if (format === 'MMM') {                                                                                      // 968
            ii = indexOf.call(this._shortMonthsParse, llc);                                                          // 969
            return ii !== -1 ? ii : null;                                                                            // 970
        } else {                                                                                                     // 971
            ii = indexOf.call(this._longMonthsParse, llc);                                                           // 972
            return ii !== -1 ? ii : null;                                                                            // 973
        }                                                                                                            // 974
    } else {                                                                                                         // 975
        if (format === 'MMM') {                                                                                      // 976
            ii = indexOf.call(this._shortMonthsParse, llc);                                                          // 977
            if (ii !== -1) {                                                                                         // 978
                return ii;                                                                                           // 979
            }                                                                                                        // 980
            ii = indexOf.call(this._longMonthsParse, llc);                                                           // 981
            return ii !== -1 ? ii : null;                                                                            // 982
        } else {                                                                                                     // 983
            ii = indexOf.call(this._longMonthsParse, llc);                                                           // 984
            if (ii !== -1) {                                                                                         // 985
                return ii;                                                                                           // 986
            }                                                                                                        // 987
            ii = indexOf.call(this._shortMonthsParse, llc);                                                          // 988
            return ii !== -1 ? ii : null;                                                                            // 989
        }                                                                                                            // 990
    }                                                                                                                // 991
}                                                                                                                    // 992
                                                                                                                     // 993
function localeMonthsParse (monthName, format, strict) {                                                             // 994
    var i, mom, regex;                                                                                               // 995
                                                                                                                     // 996
    if (this._monthsParseExact) {                                                                                    // 997
        return handleStrictParse.call(this, monthName, format, strict);                                              // 998
    }                                                                                                                // 999
                                                                                                                     // 1000
    if (!this._monthsParse) {                                                                                        // 1001
        this._monthsParse = [];                                                                                      // 1002
        this._longMonthsParse = [];                                                                                  // 1003
        this._shortMonthsParse = [];                                                                                 // 1004
    }                                                                                                                // 1005
                                                                                                                     // 1006
    // TODO: add sorting                                                                                             // 1007
    // Sorting makes sure if one month (or abbr) is a prefix of another                                              // 1008
    // see sorting in computeMonthsParse                                                                             // 1009
    for (i = 0; i < 12; i++) {                                                                                       // 1010
        // make the regex if we don't have it already                                                                // 1011
        mom = createUTC([2000, i]);                                                                                  // 1012
        if (strict && !this._longMonthsParse[i]) {                                                                   // 1013
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');           // 1014
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');     // 1015
        }                                                                                                            // 1016
        if (!strict && !this._monthsParse[i]) {                                                                      // 1017
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');                                   // 1018
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');                                          // 1019
        }                                                                                                            // 1020
        // test the regex                                                                                            // 1021
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {                               // 1022
            return i;                                                                                                // 1023
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {                        // 1024
            return i;                                                                                                // 1025
        } else if (!strict && this._monthsParse[i].test(monthName)) {                                                // 1026
            return i;                                                                                                // 1027
        }                                                                                                            // 1028
    }                                                                                                                // 1029
}                                                                                                                    // 1030
                                                                                                                     // 1031
// MOMENTS                                                                                                           // 1032
                                                                                                                     // 1033
function setMonth (mom, value) {                                                                                     // 1034
    var dayOfMonth;                                                                                                  // 1035
                                                                                                                     // 1036
    if (!mom.isValid()) {                                                                                            // 1037
        // No op                                                                                                     // 1038
        return mom;                                                                                                  // 1039
    }                                                                                                                // 1040
                                                                                                                     // 1041
    if (typeof value === 'string') {                                                                                 // 1042
        if (/^\d+$/.test(value)) {                                                                                   // 1043
            value = toInt(value);                                                                                    // 1044
        } else {                                                                                                     // 1045
            value = mom.localeData().monthsParse(value);                                                             // 1046
            // TODO: Another silent failure?                                                                         // 1047
            if (!isNumber(value)) {                                                                                  // 1048
                return mom;                                                                                          // 1049
            }                                                                                                        // 1050
        }                                                                                                            // 1051
    }                                                                                                                // 1052
                                                                                                                     // 1053
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));                                               // 1054
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);                                          // 1055
    return mom;                                                                                                      // 1056
}                                                                                                                    // 1057
                                                                                                                     // 1058
function getSetMonth (value) {                                                                                       // 1059
    if (value != null) {                                                                                             // 1060
        setMonth(this, value);                                                                                       // 1061
        hooks.updateOffset(this, true);                                                                              // 1062
        return this;                                                                                                 // 1063
    } else {                                                                                                         // 1064
        return get(this, 'Month');                                                                                   // 1065
    }                                                                                                                // 1066
}                                                                                                                    // 1067
                                                                                                                     // 1068
function getDaysInMonth () {                                                                                         // 1069
    return daysInMonth(this.year(), this.month());                                                                   // 1070
}                                                                                                                    // 1071
                                                                                                                     // 1072
var defaultMonthsShortRegex = matchWord;                                                                             // 1073
function monthsShortRegex (isStrict) {                                                                               // 1074
    if (this._monthsParseExact) {                                                                                    // 1075
        if (!hasOwnProp(this, '_monthsRegex')) {                                                                     // 1076
            computeMonthsParse.call(this);                                                                           // 1077
        }                                                                                                            // 1078
        if (isStrict) {                                                                                              // 1079
            return this._monthsShortStrictRegex;                                                                     // 1080
        } else {                                                                                                     // 1081
            return this._monthsShortRegex;                                                                           // 1082
        }                                                                                                            // 1083
    } else {                                                                                                         // 1084
        if (!hasOwnProp(this, '_monthsShortRegex')) {                                                                // 1085
            this._monthsShortRegex = defaultMonthsShortRegex;                                                        // 1086
        }                                                                                                            // 1087
        return this._monthsShortStrictRegex && isStrict ?                                                            // 1088
            this._monthsShortStrictRegex : this._monthsShortRegex;                                                   // 1089
    }                                                                                                                // 1090
}                                                                                                                    // 1091
                                                                                                                     // 1092
var defaultMonthsRegex = matchWord;                                                                                  // 1093
function monthsRegex (isStrict) {                                                                                    // 1094
    if (this._monthsParseExact) {                                                                                    // 1095
        if (!hasOwnProp(this, '_monthsRegex')) {                                                                     // 1096
            computeMonthsParse.call(this);                                                                           // 1097
        }                                                                                                            // 1098
        if (isStrict) {                                                                                              // 1099
            return this._monthsStrictRegex;                                                                          // 1100
        } else {                                                                                                     // 1101
            return this._monthsRegex;                                                                                // 1102
        }                                                                                                            // 1103
    } else {                                                                                                         // 1104
        if (!hasOwnProp(this, '_monthsRegex')) {                                                                     // 1105
            this._monthsRegex = defaultMonthsRegex;                                                                  // 1106
        }                                                                                                            // 1107
        return this._monthsStrictRegex && isStrict ?                                                                 // 1108
            this._monthsStrictRegex : this._monthsRegex;                                                             // 1109
    }                                                                                                                // 1110
}                                                                                                                    // 1111
                                                                                                                     // 1112
function computeMonthsParse () {                                                                                     // 1113
    function cmpLenRev(a, b) {                                                                                       // 1114
        return b.length - a.length;                                                                                  // 1115
    }                                                                                                                // 1116
                                                                                                                     // 1117
    var shortPieces = [], longPieces = [], mixedPieces = [],                                                         // 1118
        i, mom;                                                                                                      // 1119
    for (i = 0; i < 12; i++) {                                                                                       // 1120
        // make the regex if we don't have it already                                                                // 1121
        mom = createUTC([2000, i]);                                                                                  // 1122
        shortPieces.push(this.monthsShort(mom, ''));                                                                 // 1123
        longPieces.push(this.months(mom, ''));                                                                       // 1124
        mixedPieces.push(this.months(mom, ''));                                                                      // 1125
        mixedPieces.push(this.monthsShort(mom, ''));                                                                 // 1126
    }                                                                                                                // 1127
    // Sorting makes sure if one month (or abbr) is a prefix of another it                                           // 1128
    // will match the longer piece.                                                                                  // 1129
    shortPieces.sort(cmpLenRev);                                                                                     // 1130
    longPieces.sort(cmpLenRev);                                                                                      // 1131
    mixedPieces.sort(cmpLenRev);                                                                                     // 1132
    for (i = 0; i < 12; i++) {                                                                                       // 1133
        shortPieces[i] = regexEscape(shortPieces[i]);                                                                // 1134
        longPieces[i] = regexEscape(longPieces[i]);                                                                  // 1135
    }                                                                                                                // 1136
    for (i = 0; i < 24; i++) {                                                                                       // 1137
        mixedPieces[i] = regexEscape(mixedPieces[i]);                                                                // 1138
    }                                                                                                                // 1139
                                                                                                                     // 1140
    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                         // 1141
    this._monthsShortRegex = this._monthsRegex;                                                                      // 1142
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                    // 1143
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                              // 1144
}                                                                                                                    // 1145
                                                                                                                     // 1146
function createDate (y, m, d, h, M, s, ms) {                                                                         // 1147
    // can't just apply() to create a date:                                                                          // 1148
    // https://stackoverflow.com/q/181348                                                                            // 1149
    var date = new Date(y, m, d, h, M, s, ms);                                                                       // 1150
                                                                                                                     // 1151
    // the date constructor remaps years 0-99 to 1900-1999                                                           // 1152
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {                                                         // 1153
        date.setFullYear(y);                                                                                         // 1154
    }                                                                                                                // 1155
    return date;                                                                                                     // 1156
}                                                                                                                    // 1157
                                                                                                                     // 1158
function createUTCDate (y) {                                                                                         // 1159
    var date = new Date(Date.UTC.apply(null, arguments));                                                            // 1160
                                                                                                                     // 1161
    // the Date.UTC function remaps years 0-99 to 1900-1999                                                          // 1162
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {                                                      // 1163
        date.setUTCFullYear(y);                                                                                      // 1164
    }                                                                                                                // 1165
    return date;                                                                                                     // 1166
}                                                                                                                    // 1167
                                                                                                                     // 1168
// start-of-first-week - start-of-year                                                                               // 1169
function firstWeekOffset(year, dow, doy) {                                                                           // 1170
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)                      // 1171
        fwd = 7 + dow - doy,                                                                                         // 1172
        // first-week day local weekday -- which local weekday is fwd                                                // 1173
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;                                             // 1174
                                                                                                                     // 1175
    return -fwdlw + fwd - 1;                                                                                         // 1176
}                                                                                                                    // 1177
                                                                                                                     // 1178
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday          // 1179
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {                                                         // 1180
    var localWeekday = (7 + weekday - dow) % 7,                                                                      // 1181
        weekOffset = firstWeekOffset(year, dow, doy),                                                                // 1182
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,                                                  // 1183
        resYear, resDayOfYear;                                                                                       // 1184
                                                                                                                     // 1185
    if (dayOfYear <= 0) {                                                                                            // 1186
        resYear = year - 1;                                                                                          // 1187
        resDayOfYear = daysInYear(resYear) + dayOfYear;                                                              // 1188
    } else if (dayOfYear > daysInYear(year)) {                                                                       // 1189
        resYear = year + 1;                                                                                          // 1190
        resDayOfYear = dayOfYear - daysInYear(year);                                                                 // 1191
    } else {                                                                                                         // 1192
        resYear = year;                                                                                              // 1193
        resDayOfYear = dayOfYear;                                                                                    // 1194
    }                                                                                                                // 1195
                                                                                                                     // 1196
    return {                                                                                                         // 1197
        year: resYear,                                                                                               // 1198
        dayOfYear: resDayOfYear                                                                                      // 1199
    };                                                                                                               // 1200
}                                                                                                                    // 1201
                                                                                                                     // 1202
function weekOfYear(mom, dow, doy) {                                                                                 // 1203
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),                                                          // 1204
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,                                               // 1205
        resWeek, resYear;                                                                                            // 1206
                                                                                                                     // 1207
    if (week < 1) {                                                                                                  // 1208
        resYear = mom.year() - 1;                                                                                    // 1209
        resWeek = week + weeksInYear(resYear, dow, doy);                                                             // 1210
    } else if (week > weeksInYear(mom.year(), dow, doy)) {                                                           // 1211
        resWeek = week - weeksInYear(mom.year(), dow, doy);                                                          // 1212
        resYear = mom.year() + 1;                                                                                    // 1213
    } else {                                                                                                         // 1214
        resYear = mom.year();                                                                                        // 1215
        resWeek = week;                                                                                              // 1216
    }                                                                                                                // 1217
                                                                                                                     // 1218
    return {                                                                                                         // 1219
        week: resWeek,                                                                                               // 1220
        year: resYear                                                                                                // 1221
    };                                                                                                               // 1222
}                                                                                                                    // 1223
                                                                                                                     // 1224
function weeksInYear(year, dow, doy) {                                                                               // 1225
    var weekOffset = firstWeekOffset(year, dow, doy),                                                                // 1226
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);                                                        // 1227
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;                                                     // 1228
}                                                                                                                    // 1229
                                                                                                                     // 1230
// FORMATTING                                                                                                        // 1231
                                                                                                                     // 1232
addFormatToken('w', ['ww', 2], 'wo', 'week');                                                                        // 1233
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');                                                                     // 1234
                                                                                                                     // 1235
// ALIASES                                                                                                           // 1236
                                                                                                                     // 1237
addUnitAlias('week', 'w');                                                                                           // 1238
addUnitAlias('isoWeek', 'W');                                                                                        // 1239
                                                                                                                     // 1240
// PRIORITIES                                                                                                        // 1241
                                                                                                                     // 1242
addUnitPriority('week', 5);                                                                                          // 1243
addUnitPriority('isoWeek', 5);                                                                                       // 1244
                                                                                                                     // 1245
// PARSING                                                                                                           // 1246
                                                                                                                     // 1247
addRegexToken('w',  match1to2);                                                                                      // 1248
addRegexToken('ww', match1to2, match2);                                                                              // 1249
addRegexToken('W',  match1to2);                                                                                      // 1250
addRegexToken('WW', match1to2, match2);                                                                              // 1251
                                                                                                                     // 1252
addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {                                    // 1253
    week[token.substr(0, 1)] = toInt(input);                                                                         // 1254
});                                                                                                                  // 1255
                                                                                                                     // 1256
// HELPERS                                                                                                           // 1257
                                                                                                                     // 1258
// LOCALES                                                                                                           // 1259
                                                                                                                     // 1260
function localeWeek (mom) {                                                                                          // 1261
    return weekOfYear(mom, this._week.dow, this._week.doy).week;                                                     // 1262
}                                                                                                                    // 1263
                                                                                                                     // 1264
var defaultLocaleWeek = {                                                                                            // 1265
    dow : 0, // Sunday is the first day of the week.                                                                 // 1266
    doy : 6  // The week that contains Jan 1st is the first week of the year.                                        // 1267
};                                                                                                                   // 1268
                                                                                                                     // 1269
function localeFirstDayOfWeek () {                                                                                   // 1270
    return this._week.dow;                                                                                           // 1271
}                                                                                                                    // 1272
                                                                                                                     // 1273
function localeFirstDayOfYear () {                                                                                   // 1274
    return this._week.doy;                                                                                           // 1275
}                                                                                                                    // 1276
                                                                                                                     // 1277
// MOMENTS                                                                                                           // 1278
                                                                                                                     // 1279
function getSetWeek (input) {                                                                                        // 1280
    var week = this.localeData().week(this);                                                                         // 1281
    return input == null ? week : this.add((input - week) * 7, 'd');                                                 // 1282
}                                                                                                                    // 1283
                                                                                                                     // 1284
function getSetISOWeek (input) {                                                                                     // 1285
    var week = weekOfYear(this, 1, 4).week;                                                                          // 1286
    return input == null ? week : this.add((input - week) * 7, 'd');                                                 // 1287
}                                                                                                                    // 1288
                                                                                                                     // 1289
// FORMATTING                                                                                                        // 1290
                                                                                                                     // 1291
addFormatToken('d', 0, 'do', 'day');                                                                                 // 1292
                                                                                                                     // 1293
addFormatToken('dd', 0, 0, function (format) {                                                                       // 1294
    return this.localeData().weekdaysMin(this, format);                                                              // 1295
});                                                                                                                  // 1296
                                                                                                                     // 1297
addFormatToken('ddd', 0, 0, function (format) {                                                                      // 1298
    return this.localeData().weekdaysShort(this, format);                                                            // 1299
});                                                                                                                  // 1300
                                                                                                                     // 1301
addFormatToken('dddd', 0, 0, function (format) {                                                                     // 1302
    return this.localeData().weekdays(this, format);                                                                 // 1303
});                                                                                                                  // 1304
                                                                                                                     // 1305
addFormatToken('e', 0, 0, 'weekday');                                                                                // 1306
addFormatToken('E', 0, 0, 'isoWeekday');                                                                             // 1307
                                                                                                                     // 1308
// ALIASES                                                                                                           // 1309
                                                                                                                     // 1310
addUnitAlias('day', 'd');                                                                                            // 1311
addUnitAlias('weekday', 'e');                                                                                        // 1312
addUnitAlias('isoWeekday', 'E');                                                                                     // 1313
                                                                                                                     // 1314
// PRIORITY                                                                                                          // 1315
addUnitPriority('day', 11);                                                                                          // 1316
addUnitPriority('weekday', 11);                                                                                      // 1317
addUnitPriority('isoWeekday', 11);                                                                                   // 1318
                                                                                                                     // 1319
// PARSING                                                                                                           // 1320
                                                                                                                     // 1321
addRegexToken('d',    match1to2);                                                                                    // 1322
addRegexToken('e',    match1to2);                                                                                    // 1323
addRegexToken('E',    match1to2);                                                                                    // 1324
addRegexToken('dd',   function (isStrict, locale) {                                                                  // 1325
    return locale.weekdaysMinRegex(isStrict);                                                                        // 1326
});                                                                                                                  // 1327
addRegexToken('ddd',   function (isStrict, locale) {                                                                 // 1328
    return locale.weekdaysShortRegex(isStrict);                                                                      // 1329
});                                                                                                                  // 1330
addRegexToken('dddd',   function (isStrict, locale) {                                                                // 1331
    return locale.weekdaysRegex(isStrict);                                                                           // 1332
});                                                                                                                  // 1333
                                                                                                                     // 1334
addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {                                     // 1335
    var weekday = config._locale.weekdaysParse(input, token, config._strict);                                        // 1336
    // if we didn't get a weekday name, mark the date as invalid                                                     // 1337
    if (weekday != null) {                                                                                           // 1338
        week.d = weekday;                                                                                            // 1339
    } else {                                                                                                         // 1340
        getParsingFlags(config).invalidWeekday = input;                                                              // 1341
    }                                                                                                                // 1342
});                                                                                                                  // 1343
                                                                                                                     // 1344
addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {                                           // 1345
    week[token] = toInt(input);                                                                                      // 1346
});                                                                                                                  // 1347
                                                                                                                     // 1348
// HELPERS                                                                                                           // 1349
                                                                                                                     // 1350
function parseWeekday(input, locale) {                                                                               // 1351
    if (typeof input !== 'string') {                                                                                 // 1352
        return input;                                                                                                // 1353
    }                                                                                                                // 1354
                                                                                                                     // 1355
    if (!isNaN(input)) {                                                                                             // 1356
        return parseInt(input, 10);                                                                                  // 1357
    }                                                                                                                // 1358
                                                                                                                     // 1359
    input = locale.weekdaysParse(input);                                                                             // 1360
    if (typeof input === 'number') {                                                                                 // 1361
        return input;                                                                                                // 1362
    }                                                                                                                // 1363
                                                                                                                     // 1364
    return null;                                                                                                     // 1365
}                                                                                                                    // 1366
                                                                                                                     // 1367
function parseIsoWeekday(input, locale) {                                                                            // 1368
    if (typeof input === 'string') {                                                                                 // 1369
        return locale.weekdaysParse(input) % 7 || 7;                                                                 // 1370
    }                                                                                                                // 1371
    return isNaN(input) ? null : input;                                                                              // 1372
}                                                                                                                    // 1373
                                                                                                                     // 1374
// LOCALES                                                                                                           // 1375
                                                                                                                     // 1376
var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');                   // 1377
function localeWeekdays (m, format) {                                                                                // 1378
    if (!m) {                                                                                                        // 1379
        return isArray(this._weekdays) ? this._weekdays :                                                            // 1380
            this._weekdays['standalone'];                                                                            // 1381
    }                                                                                                                // 1382
    return isArray(this._weekdays) ? this._weekdays[m.day()] :                                                       // 1383
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];                     // 1384
}                                                                                                                    // 1385
                                                                                                                     // 1386
var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');                                           // 1387
function localeWeekdaysShort (m) {                                                                                   // 1388
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;                                                 // 1389
}                                                                                                                    // 1390
                                                                                                                     // 1391
var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');                                                    // 1392
function localeWeekdaysMin (m) {                                                                                     // 1393
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;                                                     // 1394
}                                                                                                                    // 1395
                                                                                                                     // 1396
function handleStrictParse$1(weekdayName, format, strict) {                                                          // 1397
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();                                                           // 1398
    if (!this._weekdaysParse) {                                                                                      // 1399
        this._weekdaysParse = [];                                                                                    // 1400
        this._shortWeekdaysParse = [];                                                                               // 1401
        this._minWeekdaysParse = [];                                                                                 // 1402
                                                                                                                     // 1403
        for (i = 0; i < 7; ++i) {                                                                                    // 1404
            mom = createUTC([2000, 1]).day(i);                                                                       // 1405
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();                               // 1406
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();                           // 1407
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();                                     // 1408
        }                                                                                                            // 1409
    }                                                                                                                // 1410
                                                                                                                     // 1411
    if (strict) {                                                                                                    // 1412
        if (format === 'dddd') {                                                                                     // 1413
            ii = indexOf.call(this._weekdaysParse, llc);                                                             // 1414
            return ii !== -1 ? ii : null;                                                                            // 1415
        } else if (format === 'ddd') {                                                                               // 1416
            ii = indexOf.call(this._shortWeekdaysParse, llc);                                                        // 1417
            return ii !== -1 ? ii : null;                                                                            // 1418
        } else {                                                                                                     // 1419
            ii = indexOf.call(this._minWeekdaysParse, llc);                                                          // 1420
            return ii !== -1 ? ii : null;                                                                            // 1421
        }                                                                                                            // 1422
    } else {                                                                                                         // 1423
        if (format === 'dddd') {                                                                                     // 1424
            ii = indexOf.call(this._weekdaysParse, llc);                                                             // 1425
            if (ii !== -1) {                                                                                         // 1426
                return ii;                                                                                           // 1427
            }                                                                                                        // 1428
            ii = indexOf.call(this._shortWeekdaysParse, llc);                                                        // 1429
            if (ii !== -1) {                                                                                         // 1430
                return ii;                                                                                           // 1431
            }                                                                                                        // 1432
            ii = indexOf.call(this._minWeekdaysParse, llc);                                                          // 1433
            return ii !== -1 ? ii : null;                                                                            // 1434
        } else if (format === 'ddd') {                                                                               // 1435
            ii = indexOf.call(this._shortWeekdaysParse, llc);                                                        // 1436
            if (ii !== -1) {                                                                                         // 1437
                return ii;                                                                                           // 1438
            }                                                                                                        // 1439
            ii = indexOf.call(this._weekdaysParse, llc);                                                             // 1440
            if (ii !== -1) {                                                                                         // 1441
                return ii;                                                                                           // 1442
            }                                                                                                        // 1443
            ii = indexOf.call(this._minWeekdaysParse, llc);                                                          // 1444
            return ii !== -1 ? ii : null;                                                                            // 1445
        } else {                                                                                                     // 1446
            ii = indexOf.call(this._minWeekdaysParse, llc);                                                          // 1447
            if (ii !== -1) {                                                                                         // 1448
                return ii;                                                                                           // 1449
            }                                                                                                        // 1450
            ii = indexOf.call(this._weekdaysParse, llc);                                                             // 1451
            if (ii !== -1) {                                                                                         // 1452
                return ii;                                                                                           // 1453
            }                                                                                                        // 1454
            ii = indexOf.call(this._shortWeekdaysParse, llc);                                                        // 1455
            return ii !== -1 ? ii : null;                                                                            // 1456
        }                                                                                                            // 1457
    }                                                                                                                // 1458
}                                                                                                                    // 1459
                                                                                                                     // 1460
function localeWeekdaysParse (weekdayName, format, strict) {                                                         // 1461
    var i, mom, regex;                                                                                               // 1462
                                                                                                                     // 1463
    if (this._weekdaysParseExact) {                                                                                  // 1464
        return handleStrictParse$1.call(this, weekdayName, format, strict);                                          // 1465
    }                                                                                                                // 1466
                                                                                                                     // 1467
    if (!this._weekdaysParse) {                                                                                      // 1468
        this._weekdaysParse = [];                                                                                    // 1469
        this._minWeekdaysParse = [];                                                                                 // 1470
        this._shortWeekdaysParse = [];                                                                               // 1471
        this._fullWeekdaysParse = [];                                                                                // 1472
    }                                                                                                                // 1473
                                                                                                                     // 1474
    for (i = 0; i < 7; i++) {                                                                                        // 1475
        // make the regex if we don't have it already                                                                // 1476
                                                                                                                     // 1477
        mom = createUTC([2000, 1]).day(i);                                                                           // 1478
        if (strict && !this._fullWeekdaysParse[i]) {                                                                 // 1479
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');    // 1480
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');  // 1482
        }                                                                                                            // 1483
        if (!this._weekdaysParse[i]) {                                                                               // 1484
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');                                        // 1486
        }                                                                                                            // 1487
        // test the regex                                                                                            // 1488
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {                           // 1489
            return i;                                                                                                // 1490
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {                    // 1491
            return i;                                                                                                // 1492
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {                       // 1493
            return i;                                                                                                // 1494
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {                                            // 1495
            return i;                                                                                                // 1496
        }                                                                                                            // 1497
    }                                                                                                                // 1498
}                                                                                                                    // 1499
                                                                                                                     // 1500
// MOMENTS                                                                                                           // 1501
                                                                                                                     // 1502
function getSetDayOfWeek (input) {                                                                                   // 1503
    if (!this.isValid()) {                                                                                           // 1504
        return input != null ? this : NaN;                                                                           // 1505
    }                                                                                                                // 1506
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();                                                  // 1507
    if (input != null) {                                                                                             // 1508
        input = parseWeekday(input, this.localeData());                                                              // 1509
        return this.add(input - day, 'd');                                                                           // 1510
    } else {                                                                                                         // 1511
        return day;                                                                                                  // 1512
    }                                                                                                                // 1513
}                                                                                                                    // 1514
                                                                                                                     // 1515
function getSetLocaleDayOfWeek (input) {                                                                             // 1516
    if (!this.isValid()) {                                                                                           // 1517
        return input != null ? this : NaN;                                                                           // 1518
    }                                                                                                                // 1519
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;                                                // 1520
    return input == null ? weekday : this.add(input - weekday, 'd');                                                 // 1521
}                                                                                                                    // 1522
                                                                                                                     // 1523
function getSetISODayOfWeek (input) {                                                                                // 1524
    if (!this.isValid()) {                                                                                           // 1525
        return input != null ? this : NaN;                                                                           // 1526
    }                                                                                                                // 1527
                                                                                                                     // 1528
    // behaves the same as moment#day except                                                                         // 1529
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)                                                // 1530
    // as a setter, sunday should belong to the previous week.                                                       // 1531
                                                                                                                     // 1532
    if (input != null) {                                                                                             // 1533
        var weekday = parseIsoWeekday(input, this.localeData());                                                     // 1534
        return this.day(this.day() % 7 ? weekday : weekday - 7);                                                     // 1535
    } else {                                                                                                         // 1536
        return this.day() || 7;                                                                                      // 1537
    }                                                                                                                // 1538
}                                                                                                                    // 1539
                                                                                                                     // 1540
var defaultWeekdaysRegex = matchWord;                                                                                // 1541
function weekdaysRegex (isStrict) {                                                                                  // 1542
    if (this._weekdaysParseExact) {                                                                                  // 1543
        if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                   // 1544
            computeWeekdaysParse.call(this);                                                                         // 1545
        }                                                                                                            // 1546
        if (isStrict) {                                                                                              // 1547
            return this._weekdaysStrictRegex;                                                                        // 1548
        } else {                                                                                                     // 1549
            return this._weekdaysRegex;                                                                              // 1550
        }                                                                                                            // 1551
    } else {                                                                                                         // 1552
        if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                   // 1553
            this._weekdaysRegex = defaultWeekdaysRegex;                                                              // 1554
        }                                                                                                            // 1555
        return this._weekdaysStrictRegex && isStrict ?                                                               // 1556
            this._weekdaysStrictRegex : this._weekdaysRegex;                                                         // 1557
    }                                                                                                                // 1558
}                                                                                                                    // 1559
                                                                                                                     // 1560
var defaultWeekdaysShortRegex = matchWord;                                                                           // 1561
function weekdaysShortRegex (isStrict) {                                                                             // 1562
    if (this._weekdaysParseExact) {                                                                                  // 1563
        if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                   // 1564
            computeWeekdaysParse.call(this);                                                                         // 1565
        }                                                                                                            // 1566
        if (isStrict) {                                                                                              // 1567
            return this._weekdaysShortStrictRegex;                                                                   // 1568
        } else {                                                                                                     // 1569
            return this._weekdaysShortRegex;                                                                         // 1570
        }                                                                                                            // 1571
    } else {                                                                                                         // 1572
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {                                                              // 1573
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;                                                    // 1574
        }                                                                                                            // 1575
        return this._weekdaysShortStrictRegex && isStrict ?                                                          // 1576
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;                                               // 1577
    }                                                                                                                // 1578
}                                                                                                                    // 1579
                                                                                                                     // 1580
var defaultWeekdaysMinRegex = matchWord;                                                                             // 1581
function weekdaysMinRegex (isStrict) {                                                                               // 1582
    if (this._weekdaysParseExact) {                                                                                  // 1583
        if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                   // 1584
            computeWeekdaysParse.call(this);                                                                         // 1585
        }                                                                                                            // 1586
        if (isStrict) {                                                                                              // 1587
            return this._weekdaysMinStrictRegex;                                                                     // 1588
        } else {                                                                                                     // 1589
            return this._weekdaysMinRegex;                                                                           // 1590
        }                                                                                                            // 1591
    } else {                                                                                                         // 1592
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {                                                                // 1593
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;                                                        // 1594
        }                                                                                                            // 1595
        return this._weekdaysMinStrictRegex && isStrict ?                                                            // 1596
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;                                                   // 1597
    }                                                                                                                // 1598
}                                                                                                                    // 1599
                                                                                                                     // 1600
                                                                                                                     // 1601
function computeWeekdaysParse () {                                                                                   // 1602
    function cmpLenRev(a, b) {                                                                                       // 1603
        return b.length - a.length;                                                                                  // 1604
    }                                                                                                                // 1605
                                                                                                                     // 1606
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],                                         // 1607
        i, mom, minp, shortp, longp;                                                                                 // 1608
    for (i = 0; i < 7; i++) {                                                                                        // 1609
        // make the regex if we don't have it already                                                                // 1610
        mom = createUTC([2000, 1]).day(i);                                                                           // 1611
        minp = this.weekdaysMin(mom, '');                                                                            // 1612
        shortp = this.weekdaysShort(mom, '');                                                                        // 1613
        longp = this.weekdays(mom, '');                                                                              // 1614
        minPieces.push(minp);                                                                                        // 1615
        shortPieces.push(shortp);                                                                                    // 1616
        longPieces.push(longp);                                                                                      // 1617
        mixedPieces.push(minp);                                                                                      // 1618
        mixedPieces.push(shortp);                                                                                    // 1619
        mixedPieces.push(longp);                                                                                     // 1620
    }                                                                                                                // 1621
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it                                         // 1622
    // will match the longer piece.                                                                                  // 1623
    minPieces.sort(cmpLenRev);                                                                                       // 1624
    shortPieces.sort(cmpLenRev);                                                                                     // 1625
    longPieces.sort(cmpLenRev);                                                                                      // 1626
    mixedPieces.sort(cmpLenRev);                                                                                     // 1627
    for (i = 0; i < 7; i++) {                                                                                        // 1628
        shortPieces[i] = regexEscape(shortPieces[i]);                                                                // 1629
        longPieces[i] = regexEscape(longPieces[i]);                                                                  // 1630
        mixedPieces[i] = regexEscape(mixedPieces[i]);                                                                // 1631
    }                                                                                                                // 1632
                                                                                                                     // 1633
    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                       // 1634
    this._weekdaysShortRegex = this._weekdaysRegex;                                                                  // 1635
    this._weekdaysMinRegex = this._weekdaysRegex;                                                                    // 1636
                                                                                                                     // 1637
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                  // 1638
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                            // 1639
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');                                // 1640
}                                                                                                                    // 1641
                                                                                                                     // 1642
// FORMATTING                                                                                                        // 1643
                                                                                                                     // 1644
function hFormat() {                                                                                                 // 1645
    return this.hours() % 12 || 12;                                                                                  // 1646
}                                                                                                                    // 1647
                                                                                                                     // 1648
function kFormat() {                                                                                                 // 1649
    return this.hours() || 24;                                                                                       // 1650
}                                                                                                                    // 1651
                                                                                                                     // 1652
addFormatToken('H', ['HH', 2], 0, 'hour');                                                                           // 1653
addFormatToken('h', ['hh', 2], 0, hFormat);                                                                          // 1654
addFormatToken('k', ['kk', 2], 0, kFormat);                                                                          // 1655
                                                                                                                     // 1656
addFormatToken('hmm', 0, 0, function () {                                                                            // 1657
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);                                                   // 1658
});                                                                                                                  // 1659
                                                                                                                     // 1660
addFormatToken('hmmss', 0, 0, function () {                                                                          // 1661
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +                                                  // 1662
        zeroFill(this.seconds(), 2);                                                                                 // 1663
});                                                                                                                  // 1664
                                                                                                                     // 1665
addFormatToken('Hmm', 0, 0, function () {                                                                            // 1666
    return '' + this.hours() + zeroFill(this.minutes(), 2);                                                          // 1667
});                                                                                                                  // 1668
                                                                                                                     // 1669
addFormatToken('Hmmss', 0, 0, function () {                                                                          // 1670
    return '' + this.hours() + zeroFill(this.minutes(), 2) +                                                         // 1671
        zeroFill(this.seconds(), 2);                                                                                 // 1672
});                                                                                                                  // 1673
                                                                                                                     // 1674
function meridiem (token, lowercase) {                                                                               // 1675
    addFormatToken(token, 0, 0, function () {                                                                        // 1676
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);                                  // 1677
    });                                                                                                              // 1678
}                                                                                                                    // 1679
                                                                                                                     // 1680
meridiem('a', true);                                                                                                 // 1681
meridiem('A', false);                                                                                                // 1682
                                                                                                                     // 1683
// ALIASES                                                                                                           // 1684
                                                                                                                     // 1685
addUnitAlias('hour', 'h');                                                                                           // 1686
                                                                                                                     // 1687
// PRIORITY                                                                                                          // 1688
addUnitPriority('hour', 13);                                                                                         // 1689
                                                                                                                     // 1690
// PARSING                                                                                                           // 1691
                                                                                                                     // 1692
function matchMeridiem (isStrict, locale) {                                                                          // 1693
    return locale._meridiemParse;                                                                                    // 1694
}                                                                                                                    // 1695
                                                                                                                     // 1696
addRegexToken('a',  matchMeridiem);                                                                                  // 1697
addRegexToken('A',  matchMeridiem);                                                                                  // 1698
addRegexToken('H',  match1to2);                                                                                      // 1699
addRegexToken('h',  match1to2);                                                                                      // 1700
addRegexToken('k',  match1to2);                                                                                      // 1701
addRegexToken('HH', match1to2, match2);                                                                              // 1702
addRegexToken('hh', match1to2, match2);                                                                              // 1703
addRegexToken('kk', match1to2, match2);                                                                              // 1704
                                                                                                                     // 1705
addRegexToken('hmm', match3to4);                                                                                     // 1706
addRegexToken('hmmss', match5to6);                                                                                   // 1707
addRegexToken('Hmm', match3to4);                                                                                     // 1708
addRegexToken('Hmmss', match5to6);                                                                                   // 1709
                                                                                                                     // 1710
addParseToken(['H', 'HH'], HOUR);                                                                                    // 1711
addParseToken(['k', 'kk'], function (input, array, config) {                                                         // 1712
    var kInput = toInt(input);                                                                                       // 1713
    array[HOUR] = kInput === 24 ? 0 : kInput;                                                                        // 1714
});                                                                                                                  // 1715
addParseToken(['a', 'A'], function (input, array, config) {                                                          // 1716
    config._isPm = config._locale.isPM(input);                                                                       // 1717
    config._meridiem = input;                                                                                        // 1718
});                                                                                                                  // 1719
addParseToken(['h', 'hh'], function (input, array, config) {                                                         // 1720
    array[HOUR] = toInt(input);                                                                                      // 1721
    getParsingFlags(config).bigHour = true;                                                                          // 1722
});                                                                                                                  // 1723
addParseToken('hmm', function (input, array, config) {                                                               // 1724
    var pos = input.length - 2;                                                                                      // 1725
    array[HOUR] = toInt(input.substr(0, pos));                                                                       // 1726
    array[MINUTE] = toInt(input.substr(pos));                                                                        // 1727
    getParsingFlags(config).bigHour = true;                                                                          // 1728
});                                                                                                                  // 1729
addParseToken('hmmss', function (input, array, config) {                                                             // 1730
    var pos1 = input.length - 4;                                                                                     // 1731
    var pos2 = input.length - 2;                                                                                     // 1732
    array[HOUR] = toInt(input.substr(0, pos1));                                                                      // 1733
    array[MINUTE] = toInt(input.substr(pos1, 2));                                                                    // 1734
    array[SECOND] = toInt(input.substr(pos2));                                                                       // 1735
    getParsingFlags(config).bigHour = true;                                                                          // 1736
});                                                                                                                  // 1737
addParseToken('Hmm', function (input, array, config) {                                                               // 1738
    var pos = input.length - 2;                                                                                      // 1739
    array[HOUR] = toInt(input.substr(0, pos));                                                                       // 1740
    array[MINUTE] = toInt(input.substr(pos));                                                                        // 1741
});                                                                                                                  // 1742
addParseToken('Hmmss', function (input, array, config) {                                                             // 1743
    var pos1 = input.length - 4;                                                                                     // 1744
    var pos2 = input.length - 2;                                                                                     // 1745
    array[HOUR] = toInt(input.substr(0, pos1));                                                                      // 1746
    array[MINUTE] = toInt(input.substr(pos1, 2));                                                                    // 1747
    array[SECOND] = toInt(input.substr(pos2));                                                                       // 1748
});                                                                                                                  // 1749
                                                                                                                     // 1750
// LOCALES                                                                                                           // 1751
                                                                                                                     // 1752
function localeIsPM (input) {                                                                                        // 1753
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays                               // 1754
    // Using charAt should be more compatible.                                                                       // 1755
    return ((input + '').toLowerCase().charAt(0) === 'p');                                                           // 1756
}                                                                                                                    // 1757
                                                                                                                     // 1758
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;                                                                    // 1759
function localeMeridiem (hours, minutes, isLower) {                                                                  // 1760
    if (hours > 11) {                                                                                                // 1761
        return isLower ? 'pm' : 'PM';                                                                                // 1762
    } else {                                                                                                         // 1763
        return isLower ? 'am' : 'AM';                                                                                // 1764
    }                                                                                                                // 1765
}                                                                                                                    // 1766
                                                                                                                     // 1767
                                                                                                                     // 1768
// MOMENTS                                                                                                           // 1769
                                                                                                                     // 1770
// Setting the hour should keep the time, because the user explicitly                                                // 1771
// specified which hour he wants. So trying to maintain the same hour (in                                            // 1772
// a new timezone) makes sense. Adding/subtracting hours does not follow                                             // 1773
// this rule.                                                                                                        // 1774
var getSetHour = makeGetSet('Hours', true);                                                                          // 1775
                                                                                                                     // 1776
// months                                                                                                            // 1777
// week                                                                                                              // 1778
// weekdays                                                                                                          // 1779
// meridiem                                                                                                          // 1780
var baseConfig = {                                                                                                   // 1781
    calendar: defaultCalendar,                                                                                       // 1782
    longDateFormat: defaultLongDateFormat,                                                                           // 1783
    invalidDate: defaultInvalidDate,                                                                                 // 1784
    ordinal: defaultOrdinal,                                                                                         // 1785
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,                                                           // 1786
    relativeTime: defaultRelativeTime,                                                                               // 1787
                                                                                                                     // 1788
    months: defaultLocaleMonths,                                                                                     // 1789
    monthsShort: defaultLocaleMonthsShort,                                                                           // 1790
                                                                                                                     // 1791
    week: defaultLocaleWeek,                                                                                         // 1792
                                                                                                                     // 1793
    weekdays: defaultLocaleWeekdays,                                                                                 // 1794
    weekdaysMin: defaultLocaleWeekdaysMin,                                                                           // 1795
    weekdaysShort: defaultLocaleWeekdaysShort,                                                                       // 1796
                                                                                                                     // 1797
    meridiemParse: defaultLocaleMeridiemParse                                                                        // 1798
};                                                                                                                   // 1799
                                                                                                                     // 1800
// internal storage for locale config files                                                                          // 1801
var locales = {};                                                                                                    // 1802
var localeFamilies = {};                                                                                             // 1803
var globalLocale;                                                                                                    // 1804
                                                                                                                     // 1805
function normalizeLocale(key) {                                                                                      // 1806
    return key ? key.toLowerCase().replace('_', '-') : key;                                                          // 1807
}                                                                                                                    // 1808
                                                                                                                     // 1809
// pick the locale from the array                                                                                    // 1810
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each                         // 1811
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {                                                                                       // 1813
    var i = 0, j, next, locale, split;                                                                               // 1814
                                                                                                                     // 1815
    while (i < names.length) {                                                                                       // 1816
        split = normalizeLocale(names[i]).split('-');                                                                // 1817
        j = split.length;                                                                                            // 1818
        next = normalizeLocale(names[i + 1]);                                                                        // 1819
        next = next ? next.split('-') : null;                                                                        // 1820
        while (j > 0) {                                                                                              // 1821
            locale = loadLocale(split.slice(0, j).join('-'));                                                        // 1822
            if (locale) {                                                                                            // 1823
                return locale;                                                                                       // 1824
            }                                                                                                        // 1825
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {                             // 1826
                //the next array item is better than a shallower substring of this one                               // 1827
                break;                                                                                               // 1828
            }                                                                                                        // 1829
            j--;                                                                                                     // 1830
        }                                                                                                            // 1831
        i++;                                                                                                         // 1832
    }                                                                                                                // 1833
    return null;                                                                                                     // 1834
}                                                                                                                    // 1835
                                                                                                                     // 1836
function loadLocale(name) {                                                                                          // 1837
    var oldLocale = null;                                                                                            // 1838
    // TODO: Find a better way to register and load all the locales in Node                                          // 1839
    if (!locales[name] && (typeof module !== 'undefined') &&                                                         // 1840
            module && module.exports) {                                                                              // 1841
        try {                                                                                                        // 1842
            oldLocale = globalLocale._abbr;                                                                          // 1843
            var aliasedRequire = require;                                                                            // 1844
            aliasedRequire('./locale/' + name);                                                                      // 1845
            getSetGlobalLocale(oldLocale);                                                                           // 1846
        } catch (e) {}                                                                                               // 1847
    }                                                                                                                // 1848
    return locales[name];                                                                                            // 1849
}                                                                                                                    // 1850
                                                                                                                     // 1851
// This function will load locale and then set the global locale.  If                                                // 1852
// no arguments are passed in, it will simply return the current global                                              // 1853
// locale key.                                                                                                       // 1854
function getSetGlobalLocale (key, values) {                                                                          // 1855
    var data;                                                                                                        // 1856
    if (key) {                                                                                                       // 1857
        if (isUndefined(values)) {                                                                                   // 1858
            data = getLocale(key);                                                                                   // 1859
        }                                                                                                            // 1860
        else {                                                                                                       // 1861
            data = defineLocale(key, values);                                                                        // 1862
        }                                                                                                            // 1863
                                                                                                                     // 1864
        if (data) {                                                                                                  // 1865
            // moment.duration._locale = moment._locale = data;                                                      // 1866
            globalLocale = data;                                                                                     // 1867
        }                                                                                                            // 1868
    }                                                                                                                // 1869
                                                                                                                     // 1870
    return globalLocale._abbr;                                                                                       // 1871
}                                                                                                                    // 1872
                                                                                                                     // 1873
function defineLocale (name, config) {                                                                               // 1874
    if (config !== null) {                                                                                           // 1875
        var parentConfig = baseConfig;                                                                               // 1876
        config.abbr = name;                                                                                          // 1877
        if (locales[name] != null) {                                                                                 // 1878
            deprecateSimple('defineLocaleOverride',                                                                  // 1879
                    'use moment.updateLocale(localeName, config) to change ' +                                       // 1880
                    'an existing locale. moment.defineLocale(localeName, ' +                                         // 1881
                    'config) should only be used for creating a new locale ' +                                       // 1882
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');                      // 1883
            parentConfig = locales[name]._config;                                                                    // 1884
        } else if (config.parentLocale != null) {                                                                    // 1885
            if (locales[config.parentLocale] != null) {                                                              // 1886
                parentConfig = locales[config.parentLocale]._config;                                                 // 1887
            } else {                                                                                                 // 1888
                if (!localeFamilies[config.parentLocale]) {                                                          // 1889
                    localeFamilies[config.parentLocale] = [];                                                        // 1890
                }                                                                                                    // 1891
                localeFamilies[config.parentLocale].push({                                                           // 1892
                    name: name,                                                                                      // 1893
                    config: config                                                                                   // 1894
                });                                                                                                  // 1895
                return null;                                                                                         // 1896
            }                                                                                                        // 1897
        }                                                                                                            // 1898
        locales[name] = new Locale(mergeConfigs(parentConfig, config));                                              // 1899
                                                                                                                     // 1900
        if (localeFamilies[name]) {                                                                                  // 1901
            localeFamilies[name].forEach(function (x) {                                                              // 1902
                defineLocale(x.name, x.config);                                                                      // 1903
            });                                                                                                      // 1904
        }                                                                                                            // 1905
                                                                                                                     // 1906
        // backwards compat for now: also set the locale                                                             // 1907
        // make sure we set the locale AFTER all child locales have been                                             // 1908
        // created, so we won't end up with the child locale set.                                                    // 1909
        getSetGlobalLocale(name);                                                                                    // 1910
                                                                                                                     // 1911
                                                                                                                     // 1912
        return locales[name];                                                                                        // 1913
    } else {                                                                                                         // 1914
        // useful for testing                                                                                        // 1915
        delete locales[name];                                                                                        // 1916
        return null;                                                                                                 // 1917
    }                                                                                                                // 1918
}                                                                                                                    // 1919
                                                                                                                     // 1920
function updateLocale(name, config) {                                                                                // 1921
    if (config != null) {                                                                                            // 1922
        var locale, parentConfig = baseConfig;                                                                       // 1923
        // MERGE                                                                                                     // 1924
        if (locales[name] != null) {                                                                                 // 1925
            parentConfig = locales[name]._config;                                                                    // 1926
        }                                                                                                            // 1927
        config = mergeConfigs(parentConfig, config);                                                                 // 1928
        locale = new Locale(config);                                                                                 // 1929
        locale.parentLocale = locales[name];                                                                         // 1930
        locales[name] = locale;                                                                                      // 1931
                                                                                                                     // 1932
        // backwards compat for now: also set the locale                                                             // 1933
        getSetGlobalLocale(name);                                                                                    // 1934
    } else {                                                                                                         // 1935
        // pass null for config to unupdate, useful for tests                                                        // 1936
        if (locales[name] != null) {                                                                                 // 1937
            if (locales[name].parentLocale != null) {                                                                // 1938
                locales[name] = locales[name].parentLocale;                                                          // 1939
            } else if (locales[name] != null) {                                                                      // 1940
                delete locales[name];                                                                                // 1941
            }                                                                                                        // 1942
        }                                                                                                            // 1943
    }                                                                                                                // 1944
    return locales[name];                                                                                            // 1945
}                                                                                                                    // 1946
                                                                                                                     // 1947
// returns locale data                                                                                               // 1948
function getLocale (key) {                                                                                           // 1949
    var locale;                                                                                                      // 1950
                                                                                                                     // 1951
    if (key && key._locale && key._locale._abbr) {                                                                   // 1952
        key = key._locale._abbr;                                                                                     // 1953
    }                                                                                                                // 1954
                                                                                                                     // 1955
    if (!key) {                                                                                                      // 1956
        return globalLocale;                                                                                         // 1957
    }                                                                                                                // 1958
                                                                                                                     // 1959
    if (!isArray(key)) {                                                                                             // 1960
        //short-circuit everything else                                                                              // 1961
        locale = loadLocale(key);                                                                                    // 1962
        if (locale) {                                                                                                // 1963
            return locale;                                                                                           // 1964
        }                                                                                                            // 1965
        key = [key];                                                                                                 // 1966
    }                                                                                                                // 1967
                                                                                                                     // 1968
    return chooseLocale(key);                                                                                        // 1969
}                                                                                                                    // 1970
                                                                                                                     // 1971
function listLocales() {                                                                                             // 1972
    return keys(locales);                                                                                            // 1973
}                                                                                                                    // 1974
                                                                                                                     // 1975
function checkOverflow (m) {                                                                                         // 1976
    var overflow;                                                                                                    // 1977
    var a = m._a;                                                                                                    // 1978
                                                                                                                     // 1979
    if (a && getParsingFlags(m).overflow === -2) {                                                                   // 1980
        overflow =                                                                                                   // 1981
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :                                                     // 1982
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :                           // 1983
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :                                                    // 1985
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :                                                    // 1986
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :                                               // 1987
            -1;                                                                                                      // 1988
                                                                                                                     // 1989
        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {                         // 1990
            overflow = DATE;                                                                                         // 1991
        }                                                                                                            // 1992
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {                                                  // 1993
            overflow = WEEK;                                                                                         // 1994
        }                                                                                                            // 1995
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {                                                // 1996
            overflow = WEEKDAY;                                                                                      // 1997
        }                                                                                                            // 1998
                                                                                                                     // 1999
        getParsingFlags(m).overflow = overflow;                                                                      // 2000
    }                                                                                                                // 2001
                                                                                                                     // 2002
    return m;                                                                                                        // 2003
}                                                                                                                    // 2004
                                                                                                                     // 2005
// Pick the first defined of two or three arguments.                                                                 // 2006
function defaults(a, b, c) {                                                                                         // 2007
    if (a != null) {                                                                                                 // 2008
        return a;                                                                                                    // 2009
    }                                                                                                                // 2010
    if (b != null) {                                                                                                 // 2011
        return b;                                                                                                    // 2012
    }                                                                                                                // 2013
    return c;                                                                                                        // 2014
}                                                                                                                    // 2015
                                                                                                                     // 2016
function currentDateArray(config) {                                                                                  // 2017
    // hooks is actually the exported moment object                                                                  // 2018
    var nowValue = new Date(hooks.now());                                                                            // 2019
    if (config._useUTC) {                                                                                            // 2020
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];                           // 2021
    }                                                                                                                // 2022
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];                                        // 2023
}                                                                                                                    // 2024
                                                                                                                     // 2025
// convert an array to a date.                                                                                       // 2026
// the array should mirror the parameters below                                                                      // 2027
// note: all values past the year are optional and will default to the lowest possible value.                        // 2028
// [year, month, day , hour, minute, second, millisecond]                                                            // 2029
function configFromArray (config) {                                                                                  // 2030
    var i, date, input = [], currentDate, yearToUse;                                                                 // 2031
                                                                                                                     // 2032
    if (config._d) {                                                                                                 // 2033
        return;                                                                                                      // 2034
    }                                                                                                                // 2035
                                                                                                                     // 2036
    currentDate = currentDateArray(config);                                                                          // 2037
                                                                                                                     // 2038
    //compute day of the year from weeks and weekdays                                                                // 2039
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {                                          // 2040
        dayOfYearFromWeekInfo(config);                                                                               // 2041
    }                                                                                                                // 2042
                                                                                                                     // 2043
    //if the day of the year is set, figure out what it is                                                           // 2044
    if (config._dayOfYear != null) {                                                                                 // 2045
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);                                                    // 2046
                                                                                                                     // 2047
        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {                                  // 2048
            getParsingFlags(config)._overflowDayOfYear = true;                                                       // 2049
        }                                                                                                            // 2050
                                                                                                                     // 2051
        date = createUTCDate(yearToUse, 0, config._dayOfYear);                                                       // 2052
        config._a[MONTH] = date.getUTCMonth();                                                                       // 2053
        config._a[DATE] = date.getUTCDate();                                                                         // 2054
    }                                                                                                                // 2055
                                                                                                                     // 2056
    // Default to current date.                                                                                      // 2057
    // * if no year, month, day of month are given, default to today                                                 // 2058
    // * if day of month is given, default month and year                                                            // 2059
    // * if month is given, default only year                                                                        // 2060
    // * if year is given, don't default anything                                                                    // 2061
    for (i = 0; i < 3 && config._a[i] == null; ++i) {                                                                // 2062
        config._a[i] = input[i] = currentDate[i];                                                                    // 2063
    }                                                                                                                // 2064
                                                                                                                     // 2065
    // Zero out whatever was not defaulted, including time                                                           // 2066
    for (; i < 7; i++) {                                                                                             // 2067
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];                         // 2068
    }                                                                                                                // 2069
                                                                                                                     // 2070
    // Check for 24:00:00.000                                                                                        // 2071
    if (config._a[HOUR] === 24 &&                                                                                    // 2072
            config._a[MINUTE] === 0 &&                                                                               // 2073
            config._a[SECOND] === 0 &&                                                                               // 2074
            config._a[MILLISECOND] === 0) {                                                                          // 2075
        config._nextDay = true;                                                                                      // 2076
        config._a[HOUR] = 0;                                                                                         // 2077
    }                                                                                                                // 2078
                                                                                                                     // 2079
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);                                    // 2080
    // Apply timezone offset from input. The actual utcOffset can be changed                                         // 2081
    // with parseZone.                                                                                               // 2082
    if (config._tzm != null) {                                                                                       // 2083
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                            // 2084
    }                                                                                                                // 2085
                                                                                                                     // 2086
    if (config._nextDay) {                                                                                           // 2087
        config._a[HOUR] = 24;                                                                                        // 2088
    }                                                                                                                // 2089
                                                                                                                     // 2090
    // check for mismatching day of week                                                                             // 2091
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== config._d.getDay()) {                     // 2092
        getParsingFlags(config).weekdayMismatch = true;                                                              // 2093
    }                                                                                                                // 2094
}                                                                                                                    // 2095
                                                                                                                     // 2096
function dayOfYearFromWeekInfo(config) {                                                                             // 2097
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;                                                 // 2098
                                                                                                                     // 2099
    w = config._w;                                                                                                   // 2100
    if (w.GG != null || w.W != null || w.E != null) {                                                                // 2101
        dow = 1;                                                                                                     // 2102
        doy = 4;                                                                                                     // 2103
                                                                                                                     // 2104
        // TODO: We need to take the current isoWeekYear, but that depends on                                        // 2105
        // how we interpret now (local, utc, fixed offset). So create                                                // 2106
        // a now version of current config (take local/utc/offset flags, and                                         // 2107
        // create now).                                                                                              // 2108
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);                            // 2109
        week = defaults(w.W, 1);                                                                                     // 2110
        weekday = defaults(w.E, 1);                                                                                  // 2111
        if (weekday < 1 || weekday > 7) {                                                                            // 2112
            weekdayOverflow = true;                                                                                  // 2113
        }                                                                                                            // 2114
    } else {                                                                                                         // 2115
        dow = config._locale._week.dow;                                                                              // 2116
        doy = config._locale._week.doy;                                                                              // 2117
                                                                                                                     // 2118
        var curWeek = weekOfYear(createLocal(), dow, doy);                                                           // 2119
                                                                                                                     // 2120
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);                                                    // 2121
                                                                                                                     // 2122
        // Default to current week.                                                                                  // 2123
        week = defaults(w.w, curWeek.week);                                                                          // 2124
                                                                                                                     // 2125
        if (w.d != null) {                                                                                           // 2126
            // weekday -- low day numbers are considered next week                                                   // 2127
            weekday = w.d;                                                                                           // 2128
            if (weekday < 0 || weekday > 6) {                                                                        // 2129
                weekdayOverflow = true;                                                                              // 2130
            }                                                                                                        // 2131
        } else if (w.e != null) {                                                                                    // 2132
            // local weekday -- counting starts from begining of week                                                // 2133
            weekday = w.e + dow;                                                                                     // 2134
            if (w.e < 0 || w.e > 6) {                                                                                // 2135
                weekdayOverflow = true;                                                                              // 2136
            }                                                                                                        // 2137
        } else {                                                                                                     // 2138
            // default to begining of week                                                                           // 2139
            weekday = dow;                                                                                           // 2140
        }                                                                                                            // 2141
    }                                                                                                                // 2142
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {                                                        // 2143
        getParsingFlags(config)._overflowWeeks = true;                                                               // 2144
    } else if (weekdayOverflow != null) {                                                                            // 2145
        getParsingFlags(config)._overflowWeekday = true;                                                             // 2146
    } else {                                                                                                         // 2147
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);                                                // 2148
        config._a[YEAR] = temp.year;                                                                                 // 2149
        config._dayOfYear = temp.dayOfYear;                                                                          // 2150
    }                                                                                                                // 2151
}                                                                                                                    // 2152
                                                                                                                     // 2153
// iso 8601 regex                                                                                                    // 2154
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)         // 2155
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
                                                                                                                     // 2158
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;                                                                               // 2159
                                                                                                                     // 2160
var isoDates = [                                                                                                     // 2161
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],                                                                         // 2162
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],                                                                               // 2163
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],                                                                              // 2164
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],                                                                            // 2165
    ['YYYY-DDD', /\d{4}-\d{3}/],                                                                                     // 2166
    ['YYYY-MM', /\d{4}-\d\d/, false],                                                                                // 2167
    ['YYYYYYMMDD', /[+-]\d{10}/],                                                                                    // 2168
    ['YYYYMMDD', /\d{8}/],                                                                                           // 2169
    // YYYYMM is NOT allowed by the standard                                                                         // 2170
    ['GGGG[W]WWE', /\d{4}W\d{3}/],                                                                                   // 2171
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],                                                                             // 2172
    ['YYYYDDD', /\d{7}/]                                                                                             // 2173
];                                                                                                                   // 2174
                                                                                                                     // 2175
// iso time formats and regexes                                                                                      // 2176
var isoTimes = [                                                                                                     // 2177
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],                                                                        // 2178
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],                                                                         // 2179
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],                                                                                  // 2180
    ['HH:mm', /\d\d:\d\d/],                                                                                          // 2181
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],                                                                            // 2182
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],                                                                             // 2183
    ['HHmmss', /\d\d\d\d\d\d/],                                                                                      // 2184
    ['HHmm', /\d\d\d\d/],                                                                                            // 2185
    ['HH', /\d\d/]                                                                                                   // 2186
];                                                                                                                   // 2187
                                                                                                                     // 2188
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;                                                                         // 2189
                                                                                                                     // 2190
// date from iso format                                                                                              // 2191
function configFromISO(config) {                                                                                     // 2192
    var i, l,                                                                                                        // 2193
        string = config._i,                                                                                          // 2194
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),                                         // 2195
        allowTime, dateFormat, timeFormat, tzFormat;                                                                 // 2196
                                                                                                                     // 2197
    if (match) {                                                                                                     // 2198
        getParsingFlags(config).iso = true;                                                                          // 2199
                                                                                                                     // 2200
        for (i = 0, l = isoDates.length; i < l; i++) {                                                               // 2201
            if (isoDates[i][1].exec(match[1])) {                                                                     // 2202
                dateFormat = isoDates[i][0];                                                                         // 2203
                allowTime = isoDates[i][2] !== false;                                                                // 2204
                break;                                                                                               // 2205
            }                                                                                                        // 2206
        }                                                                                                            // 2207
        if (dateFormat == null) {                                                                                    // 2208
            config._isValid = false;                                                                                 // 2209
            return;                                                                                                  // 2210
        }                                                                                                            // 2211
        if (match[3]) {                                                                                              // 2212
            for (i = 0, l = isoTimes.length; i < l; i++) {                                                           // 2213
                if (isoTimes[i][1].exec(match[3])) {                                                                 // 2214
                    // match[2] should be 'T' or space                                                               // 2215
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];                                                 // 2216
                    break;                                                                                           // 2217
                }                                                                                                    // 2218
            }                                                                                                        // 2219
            if (timeFormat == null) {                                                                                // 2220
                config._isValid = false;                                                                             // 2221
                return;                                                                                              // 2222
            }                                                                                                        // 2223
        }                                                                                                            // 2224
        if (!allowTime && timeFormat != null) {                                                                      // 2225
            config._isValid = false;                                                                                 // 2226
            return;                                                                                                  // 2227
        }                                                                                                            // 2228
        if (match[4]) {                                                                                              // 2229
            if (tzRegex.exec(match[4])) {                                                                            // 2230
                tzFormat = 'Z';                                                                                      // 2231
            } else {                                                                                                 // 2232
                config._isValid = false;                                                                             // 2233
                return;                                                                                              // 2234
            }                                                                                                        // 2235
        }                                                                                                            // 2236
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');                                              // 2237
        configFromStringAndFormat(config);                                                                           // 2238
    } else {                                                                                                         // 2239
        config._isValid = false;                                                                                     // 2240
    }                                                                                                                // 2241
}                                                                                                                    // 2242
                                                                                                                     // 2243
// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3                                   // 2244
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
                                                                                                                     // 2246
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {                       // 2247
    var result = [                                                                                                   // 2248
        untruncateYear(yearStr),                                                                                     // 2249
        defaultLocaleMonthsShort.indexOf(monthStr),                                                                  // 2250
        parseInt(dayStr, 10),                                                                                        // 2251
        parseInt(hourStr, 10),                                                                                       // 2252
        parseInt(minuteStr, 10)                                                                                      // 2253
    ];                                                                                                               // 2254
                                                                                                                     // 2255
    if (secondStr) {                                                                                                 // 2256
        result.push(parseInt(secondStr, 10));                                                                        // 2257
    }                                                                                                                // 2258
                                                                                                                     // 2259
    return result;                                                                                                   // 2260
}                                                                                                                    // 2261
                                                                                                                     // 2262
function untruncateYear(yearStr) {                                                                                   // 2263
    var year = parseInt(yearStr, 10);                                                                                // 2264
    if (year <= 49) {                                                                                                // 2265
        return 2000 + year;                                                                                          // 2266
    } else if (year <= 999) {                                                                                        // 2267
        return 1900 + year;                                                                                          // 2268
    }                                                                                                                // 2269
    return year;                                                                                                     // 2270
}                                                                                                                    // 2271
                                                                                                                     // 2272
function preprocessRFC2822(s) {                                                                                      // 2273
    // Remove comments and folding whitespace and replace multiple-spaces with a single space                        // 2274
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();                                      // 2275
}                                                                                                                    // 2276
                                                                                                                     // 2277
function checkWeekday(weekdayStr, parsedInput, config) {                                                             // 2278
    if (weekdayStr) {                                                                                                // 2279
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.                           // 2280
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),                                        // 2281
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();                       // 2282
        if (weekdayProvided !== weekdayActual) {                                                                     // 2283
            getParsingFlags(config).weekdayMismatch = true;                                                          // 2284
            config._isValid = false;                                                                                 // 2285
            return false;                                                                                            // 2286
        }                                                                                                            // 2287
    }                                                                                                                // 2288
    return true;                                                                                                     // 2289
}                                                                                                                    // 2290
                                                                                                                     // 2291
var obsOffsets = {                                                                                                   // 2292
    UT: 0,                                                                                                           // 2293
    GMT: 0,                                                                                                          // 2294
    EDT: -4 * 60,                                                                                                    // 2295
    EST: -5 * 60,                                                                                                    // 2296
    CDT: -5 * 60,                                                                                                    // 2297
    CST: -6 * 60,                                                                                                    // 2298
    MDT: -6 * 60,                                                                                                    // 2299
    MST: -7 * 60,                                                                                                    // 2300
    PDT: -7 * 60,                                                                                                    // 2301
    PST: -8 * 60                                                                                                     // 2302
};                                                                                                                   // 2303
                                                                                                                     // 2304
function calculateOffset(obsOffset, militaryOffset, numOffset) {                                                     // 2305
    if (obsOffset) {                                                                                                 // 2306
        return obsOffsets[obsOffset];                                                                                // 2307
    } else if (militaryOffset) {                                                                                     // 2308
        // the only allowed military tz is Z                                                                         // 2309
        return 0;                                                                                                    // 2310
    } else {                                                                                                         // 2311
        var hm = parseInt(numOffset, 10);                                                                            // 2312
        var m = hm % 100, h = (hm - m) / 100;                                                                        // 2313
        return h * 60 + m;                                                                                           // 2314
    }                                                                                                                // 2315
}                                                                                                                    // 2316
                                                                                                                     // 2317
// date and time from ref 2822 format                                                                                // 2318
function configFromRFC2822(config) {                                                                                 // 2319
    var match = rfc2822.exec(preprocessRFC2822(config._i));                                                          // 2320
    if (match) {                                                                                                     // 2321
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);     // 2322
        if (!checkWeekday(match[1], parsedArray, config)) {                                                          // 2323
            return;                                                                                                  // 2324
        }                                                                                                            // 2325
                                                                                                                     // 2326
        config._a = parsedArray;                                                                                     // 2327
        config._tzm = calculateOffset(match[8], match[9], match[10]);                                                // 2328
                                                                                                                     // 2329
        config._d = createUTCDate.apply(null, config._a);                                                            // 2330
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                            // 2331
                                                                                                                     // 2332
        getParsingFlags(config).rfc2822 = true;                                                                      // 2333
    } else {                                                                                                         // 2334
        config._isValid = false;                                                                                     // 2335
    }                                                                                                                // 2336
}                                                                                                                    // 2337
                                                                                                                     // 2338
// date from iso format or fallback                                                                                  // 2339
function configFromString(config) {                                                                                  // 2340
    var matched = aspNetJsonRegex.exec(config._i);                                                                   // 2341
                                                                                                                     // 2342
    if (matched !== null) {                                                                                          // 2343
        config._d = new Date(+matched[1]);                                                                           // 2344
        return;                                                                                                      // 2345
    }                                                                                                                // 2346
                                                                                                                     // 2347
    configFromISO(config);                                                                                           // 2348
    if (config._isValid === false) {                                                                                 // 2349
        delete config._isValid;                                                                                      // 2350
    } else {                                                                                                         // 2351
        return;                                                                                                      // 2352
    }                                                                                                                // 2353
                                                                                                                     // 2354
    configFromRFC2822(config);                                                                                       // 2355
    if (config._isValid === false) {                                                                                 // 2356
        delete config._isValid;                                                                                      // 2357
    } else {                                                                                                         // 2358
        return;                                                                                                      // 2359
    }                                                                                                                // 2360
                                                                                                                     // 2361
    // Final attempt, use Input Fallback                                                                             // 2362
    hooks.createFromInputFallback(config);                                                                           // 2363
}                                                                                                                    // 2364
                                                                                                                     // 2365
hooks.createFromInputFallback = deprecate(                                                                           // 2366
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +   // 2367
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +                    // 2368
    'discouraged and will be removed in an upcoming major release. Please refer to ' +                               // 2369
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',                                                 // 2370
    function (config) {                                                                                              // 2371
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));                                            // 2372
    }                                                                                                                // 2373
);                                                                                                                   // 2374
                                                                                                                     // 2375
// constant that refers to the ISO standard                                                                          // 2376
hooks.ISO_8601 = function () {};                                                                                     // 2377
                                                                                                                     // 2378
// constant that refers to the RFC 2822 form                                                                         // 2379
hooks.RFC_2822 = function () {};                                                                                     // 2380
                                                                                                                     // 2381
// date from string and format string                                                                                // 2382
function configFromStringAndFormat(config) {                                                                         // 2383
    // TODO: Move this to another part of the creation flow to prevent circular deps                                 // 2384
    if (config._f === hooks.ISO_8601) {                                                                              // 2385
        configFromISO(config);                                                                                       // 2386
        return;                                                                                                      // 2387
    }                                                                                                                // 2388
    if (config._f === hooks.RFC_2822) {                                                                              // 2389
        configFromRFC2822(config);                                                                                   // 2390
        return;                                                                                                      // 2391
    }                                                                                                                // 2392
    config._a = [];                                                                                                  // 2393
    getParsingFlags(config).empty = true;                                                                            // 2394
                                                                                                                     // 2395
    // This array is used to make a Date, either with `new Date` or `Date.UTC`                                       // 2396
    var string = '' + config._i,                                                                                     // 2397
        i, parsedInput, tokens, token, skipped,                                                                      // 2398
        stringLength = string.length,                                                                                // 2399
        totalParsedInputLength = 0;                                                                                  // 2400
                                                                                                                     // 2401
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];                                  // 2402
                                                                                                                     // 2403
    for (i = 0; i < tokens.length; i++) {                                                                            // 2404
        token = tokens[i];                                                                                           // 2405
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];                                 // 2406
        // console.log('token', token, 'parsedInput', parsedInput,                                                   // 2407
        //         'regex', getParseRegexForToken(token, config));                                                   // 2408
        if (parsedInput) {                                                                                           // 2409
            skipped = string.substr(0, string.indexOf(parsedInput));                                                 // 2410
            if (skipped.length > 0) {                                                                                // 2411
                getParsingFlags(config).unusedInput.push(skipped);                                                   // 2412
            }                                                                                                        // 2413
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);                                 // 2414
            totalParsedInputLength += parsedInput.length;                                                            // 2415
        }                                                                                                            // 2416
        // don't parse if it's not a known token                                                                     // 2417
        if (formatTokenFunctions[token]) {                                                                           // 2418
            if (parsedInput) {                                                                                       // 2419
                getParsingFlags(config).empty = false;                                                               // 2420
            }                                                                                                        // 2421
            else {                                                                                                   // 2422
                getParsingFlags(config).unusedTokens.push(token);                                                    // 2423
            }                                                                                                        // 2424
            addTimeToArrayFromToken(token, parsedInput, config);                                                     // 2425
        }                                                                                                            // 2426
        else if (config._strict && !parsedInput) {                                                                   // 2427
            getParsingFlags(config).unusedTokens.push(token);                                                        // 2428
        }                                                                                                            // 2429
    }                                                                                                                // 2430
                                                                                                                     // 2431
    // add remaining unparsed input length to the string                                                             // 2432
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;                                   // 2433
    if (string.length > 0) {                                                                                         // 2434
        getParsingFlags(config).unusedInput.push(string);                                                            // 2435
    }                                                                                                                // 2436
                                                                                                                     // 2437
    // clear _12h flag if hour is <= 12                                                                              // 2438
    if (config._a[HOUR] <= 12 &&                                                                                     // 2439
        getParsingFlags(config).bigHour === true &&                                                                  // 2440
        config._a[HOUR] > 0) {                                                                                       // 2441
        getParsingFlags(config).bigHour = undefined;                                                                 // 2442
    }                                                                                                                // 2443
                                                                                                                     // 2444
    getParsingFlags(config).parsedDateParts = config._a.slice(0);                                                    // 2445
    getParsingFlags(config).meridiem = config._meridiem;                                                             // 2446
    // handle meridiem                                                                                               // 2447
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);                            // 2448
                                                                                                                     // 2449
    configFromArray(config);                                                                                         // 2450
    checkOverflow(config);                                                                                           // 2451
}                                                                                                                    // 2452
                                                                                                                     // 2453
                                                                                                                     // 2454
function meridiemFixWrap (locale, hour, meridiem) {                                                                  // 2455
    var isPm;                                                                                                        // 2456
                                                                                                                     // 2457
    if (meridiem == null) {                                                                                          // 2458
        // nothing to do                                                                                             // 2459
        return hour;                                                                                                 // 2460
    }                                                                                                                // 2461
    if (locale.meridiemHour != null) {                                                                               // 2462
        return locale.meridiemHour(hour, meridiem);                                                                  // 2463
    } else if (locale.isPM != null) {                                                                                // 2464
        // Fallback                                                                                                  // 2465
        isPm = locale.isPM(meridiem);                                                                                // 2466
        if (isPm && hour < 12) {                                                                                     // 2467
            hour += 12;                                                                                              // 2468
        }                                                                                                            // 2469
        if (!isPm && hour === 12) {                                                                                  // 2470
            hour = 0;                                                                                                // 2471
        }                                                                                                            // 2472
        return hour;                                                                                                 // 2473
    } else {                                                                                                         // 2474
        // this is not supposed to happen                                                                            // 2475
        return hour;                                                                                                 // 2476
    }                                                                                                                // 2477
}                                                                                                                    // 2478
                                                                                                                     // 2479
// date from string and array of format strings                                                                      // 2480
function configFromStringAndArray(config) {                                                                          // 2481
    var tempConfig,                                                                                                  // 2482
        bestMoment,                                                                                                  // 2483
                                                                                                                     // 2484
        scoreToBeat,                                                                                                 // 2485
        i,                                                                                                           // 2486
        currentScore;                                                                                                // 2487
                                                                                                                     // 2488
    if (config._f.length === 0) {                                                                                    // 2489
        getParsingFlags(config).invalidFormat = true;                                                                // 2490
        config._d = new Date(NaN);                                                                                   // 2491
        return;                                                                                                      // 2492
    }                                                                                                                // 2493
                                                                                                                     // 2494
    for (i = 0; i < config._f.length; i++) {                                                                         // 2495
        currentScore = 0;                                                                                            // 2496
        tempConfig = copyConfig({}, config);                                                                         // 2497
        if (config._useUTC != null) {                                                                                // 2498
            tempConfig._useUTC = config._useUTC;                                                                     // 2499
        }                                                                                                            // 2500
        tempConfig._f = config._f[i];                                                                                // 2501
        configFromStringAndFormat(tempConfig);                                                                       // 2502
                                                                                                                     // 2503
        if (!isValid(tempConfig)) {                                                                                  // 2504
            continue;                                                                                                // 2505
        }                                                                                                            // 2506
                                                                                                                     // 2507
        // if there is any input that was not parsed add a penalty for that format                                   // 2508
        currentScore += getParsingFlags(tempConfig).charsLeftOver;                                                   // 2509
                                                                                                                     // 2510
        //or tokens                                                                                                  // 2511
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;                                        // 2512
                                                                                                                     // 2513
        getParsingFlags(tempConfig).score = currentScore;                                                            // 2514
                                                                                                                     // 2515
        if (scoreToBeat == null || currentScore < scoreToBeat) {                                                     // 2516
            scoreToBeat = currentScore;                                                                              // 2517
            bestMoment = tempConfig;                                                                                 // 2518
        }                                                                                                            // 2519
    }                                                                                                                // 2520
                                                                                                                     // 2521
    extend(config, bestMoment || tempConfig);                                                                        // 2522
}                                                                                                                    // 2523
                                                                                                                     // 2524
function configFromObject(config) {                                                                                  // 2525
    if (config._d) {                                                                                                 // 2526
        return;                                                                                                      // 2527
    }                                                                                                                // 2528
                                                                                                                     // 2529
    var i = normalizeObjectUnits(config._i);                                                                         // 2530
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {  // 2531
        return obj && parseInt(obj, 10);                                                                             // 2532
    });                                                                                                              // 2533
                                                                                                                     // 2534
    configFromArray(config);                                                                                         // 2535
}                                                                                                                    // 2536
                                                                                                                     // 2537
function createFromConfig (config) {                                                                                 // 2538
    var res = new Moment(checkOverflow(prepareConfig(config)));                                                      // 2539
    if (res._nextDay) {                                                                                              // 2540
        // Adding is smart enough around DST                                                                         // 2541
        res.add(1, 'd');                                                                                             // 2542
        res._nextDay = undefined;                                                                                    // 2543
    }                                                                                                                // 2544
                                                                                                                     // 2545
    return res;                                                                                                      // 2546
}                                                                                                                    // 2547
                                                                                                                     // 2548
function prepareConfig (config) {                                                                                    // 2549
    var input = config._i,                                                                                           // 2550
        format = config._f;                                                                                          // 2551
                                                                                                                     // 2552
    config._locale = config._locale || getLocale(config._l);                                                         // 2553
                                                                                                                     // 2554
    if (input === null || (format === undefined && input === '')) {                                                  // 2555
        return createInvalid({nullInput: true});                                                                     // 2556
    }                                                                                                                // 2557
                                                                                                                     // 2558
    if (typeof input === 'string') {                                                                                 // 2559
        config._i = input = config._locale.preparse(input);                                                          // 2560
    }                                                                                                                // 2561
                                                                                                                     // 2562
    if (isMoment(input)) {                                                                                           // 2563
        return new Moment(checkOverflow(input));                                                                     // 2564
    } else if (isDate(input)) {                                                                                      // 2565
        config._d = input;                                                                                           // 2566
    } else if (isArray(format)) {                                                                                    // 2567
        configFromStringAndArray(config);                                                                            // 2568
    } else if (format) {                                                                                             // 2569
        configFromStringAndFormat(config);                                                                           // 2570
    }  else {                                                                                                        // 2571
        configFromInput(config);                                                                                     // 2572
    }                                                                                                                // 2573
                                                                                                                     // 2574
    if (!isValid(config)) {                                                                                          // 2575
        config._d = null;                                                                                            // 2576
    }                                                                                                                // 2577
                                                                                                                     // 2578
    return config;                                                                                                   // 2579
}                                                                                                                    // 2580
                                                                                                                     // 2581
function configFromInput(config) {                                                                                   // 2582
    var input = config._i;                                                                                           // 2583
    if (isUndefined(input)) {                                                                                        // 2584
        config._d = new Date(hooks.now());                                                                           // 2585
    } else if (isDate(input)) {                                                                                      // 2586
        config._d = new Date(input.valueOf());                                                                       // 2587
    } else if (typeof input === 'string') {                                                                          // 2588
        configFromString(config);                                                                                    // 2589
    } else if (isArray(input)) {                                                                                     // 2590
        config._a = map(input.slice(0), function (obj) {                                                             // 2591
            return parseInt(obj, 10);                                                                                // 2592
        });                                                                                                          // 2593
        configFromArray(config);                                                                                     // 2594
    } else if (isObject(input)) {                                                                                    // 2595
        configFromObject(config);                                                                                    // 2596
    } else if (isNumber(input)) {                                                                                    // 2597
        // from milliseconds                                                                                         // 2598
        config._d = new Date(input);                                                                                 // 2599
    } else {                                                                                                         // 2600
        hooks.createFromInputFallback(config);                                                                       // 2601
    }                                                                                                                // 2602
}                                                                                                                    // 2603
                                                                                                                     // 2604
function createLocalOrUTC (input, format, locale, strict, isUTC) {                                                   // 2605
    var c = {};                                                                                                      // 2606
                                                                                                                     // 2607
    if (locale === true || locale === false) {                                                                       // 2608
        strict = locale;                                                                                             // 2609
        locale = undefined;                                                                                          // 2610
    }                                                                                                                // 2611
                                                                                                                     // 2612
    if ((isObject(input) && isObjectEmpty(input)) ||                                                                 // 2613
            (isArray(input) && input.length === 0)) {                                                                // 2614
        input = undefined;                                                                                           // 2615
    }                                                                                                                // 2616
    // object construction must be done this way.                                                                    // 2617
    // https://github.com/moment/moment/issues/1423                                                                  // 2618
    c._isAMomentObject = true;                                                                                       // 2619
    c._useUTC = c._isUTC = isUTC;                                                                                    // 2620
    c._l = locale;                                                                                                   // 2621
    c._i = input;                                                                                                    // 2622
    c._f = format;                                                                                                   // 2623
    c._strict = strict;                                                                                              // 2624
                                                                                                                     // 2625
    return createFromConfig(c);                                                                                      // 2626
}                                                                                                                    // 2627
                                                                                                                     // 2628
function createLocal (input, format, locale, strict) {                                                               // 2629
    return createLocalOrUTC(input, format, locale, strict, false);                                                   // 2630
}                                                                                                                    // 2631
                                                                                                                     // 2632
var prototypeMin = deprecate(                                                                                        // 2633
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',            // 2634
    function () {                                                                                                    // 2635
        var other = createLocal.apply(null, arguments);                                                              // 2636
        if (this.isValid() && other.isValid()) {                                                                     // 2637
            return other < this ? this : other;                                                                      // 2638
        } else {                                                                                                     // 2639
            return createInvalid();                                                                                  // 2640
        }                                                                                                            // 2641
    }                                                                                                                // 2642
);                                                                                                                   // 2643
                                                                                                                     // 2644
var prototypeMax = deprecate(                                                                                        // 2645
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',            // 2646
    function () {                                                                                                    // 2647
        var other = createLocal.apply(null, arguments);                                                              // 2648
        if (this.isValid() && other.isValid()) {                                                                     // 2649
            return other > this ? this : other;                                                                      // 2650
        } else {                                                                                                     // 2651
            return createInvalid();                                                                                  // 2652
        }                                                                                                            // 2653
    }                                                                                                                // 2654
);                                                                                                                   // 2655
                                                                                                                     // 2656
// Pick a moment m from moments so that m[fn](other) is true for all                                                 // 2657
// other. This relies on the function fn to be transitive.                                                           // 2658
//                                                                                                                   // 2659
// moments should either be an array of moment objects or an array, whose                                            // 2660
// first element is an array of moment objects.                                                                      // 2661
function pickBy(fn, moments) {                                                                                       // 2662
    var res, i;                                                                                                      // 2663
    if (moments.length === 1 && isArray(moments[0])) {                                                               // 2664
        moments = moments[0];                                                                                        // 2665
    }                                                                                                                // 2666
    if (!moments.length) {                                                                                           // 2667
        return createLocal();                                                                                        // 2668
    }                                                                                                                // 2669
    res = moments[0];                                                                                                // 2670
    for (i = 1; i < moments.length; ++i) {                                                                           // 2671
        if (!moments[i].isValid() || moments[i][fn](res)) {                                                          // 2672
            res = moments[i];                                                                                        // 2673
        }                                                                                                            // 2674
    }                                                                                                                // 2675
    return res;                                                                                                      // 2676
}                                                                                                                    // 2677
                                                                                                                     // 2678
// TODO: Use [].sort instead?                                                                                        // 2679
function min () {                                                                                                    // 2680
    var args = [].slice.call(arguments, 0);                                                                          // 2681
                                                                                                                     // 2682
    return pickBy('isBefore', args);                                                                                 // 2683
}                                                                                                                    // 2684
                                                                                                                     // 2685
function max () {                                                                                                    // 2686
    var args = [].slice.call(arguments, 0);                                                                          // 2687
                                                                                                                     // 2688
    return pickBy('isAfter', args);                                                                                  // 2689
}                                                                                                                    // 2690
                                                                                                                     // 2691
var now = function () {                                                                                              // 2692
    return Date.now ? Date.now() : +(new Date());                                                                    // 2693
};                                                                                                                   // 2694
                                                                                                                     // 2695
var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];               // 2696
                                                                                                                     // 2697
function isDurationValid(m) {                                                                                        // 2698
    for (var key in m) {                                                                                             // 2699
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {                           // 2700
            return false;                                                                                            // 2701
        }                                                                                                            // 2702
    }                                                                                                                // 2703
                                                                                                                     // 2704
    var unitHasDecimal = false;                                                                                      // 2705
    for (var i = 0; i < ordering.length; ++i) {                                                                      // 2706
        if (m[ordering[i]]) {                                                                                        // 2707
            if (unitHasDecimal) {                                                                                    // 2708
                return false; // only allow non-integers for smallest unit                                           // 2709
            }                                                                                                        // 2710
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {                                              // 2711
                unitHasDecimal = true;                                                                               // 2712
            }                                                                                                        // 2713
        }                                                                                                            // 2714
    }                                                                                                                // 2715
                                                                                                                     // 2716
    return true;                                                                                                     // 2717
}                                                                                                                    // 2718
                                                                                                                     // 2719
function isValid$1() {                                                                                               // 2720
    return this._isValid;                                                                                            // 2721
}                                                                                                                    // 2722
                                                                                                                     // 2723
function createInvalid$1() {                                                                                         // 2724
    return createDuration(NaN);                                                                                      // 2725
}                                                                                                                    // 2726
                                                                                                                     // 2727
function Duration (duration) {                                                                                       // 2728
    var normalizedInput = normalizeObjectUnits(duration),                                                            // 2729
        years = normalizedInput.year || 0,                                                                           // 2730
        quarters = normalizedInput.quarter || 0,                                                                     // 2731
        months = normalizedInput.month || 0,                                                                         // 2732
        weeks = normalizedInput.week || 0,                                                                           // 2733
        days = normalizedInput.day || 0,                                                                             // 2734
        hours = normalizedInput.hour || 0,                                                                           // 2735
        minutes = normalizedInput.minute || 0,                                                                       // 2736
        seconds = normalizedInput.second || 0,                                                                       // 2737
        milliseconds = normalizedInput.millisecond || 0;                                                             // 2738
                                                                                                                     // 2739
    this._isValid = isDurationValid(normalizedInput);                                                                // 2740
                                                                                                                     // 2741
    // representation for dateAddRemove                                                                              // 2742
    this._milliseconds = +milliseconds +                                                                             // 2743
        seconds * 1e3 + // 1000                                                                                      // 2744
        minutes * 6e4 + // 1000 * 60                                                                                 // 2745
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a                                                  // 2747
    // day when working around DST, we need to store them separately                                                 // 2748
    this._days = +days +                                                                                             // 2749
        weeks * 7;                                                                                                   // 2750
    // It is impossible to translate months into days without knowing                                                // 2751
    // which months you are are talking about, so we have to store                                                   // 2752
    // it separately.                                                                                                // 2753
    this._months = +months +                                                                                         // 2754
        quarters * 3 +                                                                                               // 2755
        years * 12;                                                                                                  // 2756
                                                                                                                     // 2757
    this._data = {};                                                                                                 // 2758
                                                                                                                     // 2759
    this._locale = getLocale();                                                                                      // 2760
                                                                                                                     // 2761
    this._bubble();                                                                                                  // 2762
}                                                                                                                    // 2763
                                                                                                                     // 2764
function isDuration (obj) {                                                                                          // 2765
    return obj instanceof Duration;                                                                                  // 2766
}                                                                                                                    // 2767
                                                                                                                     // 2768
function absRound (number) {                                                                                         // 2769
    if (number < 0) {                                                                                                // 2770
        return Math.round(-1 * number) * -1;                                                                         // 2771
    } else {                                                                                                         // 2772
        return Math.round(number);                                                                                   // 2773
    }                                                                                                                // 2774
}                                                                                                                    // 2775
                                                                                                                     // 2776
// FORMATTING                                                                                                        // 2777
                                                                                                                     // 2778
function offset (token, separator) {                                                                                 // 2779
    addFormatToken(token, 0, 0, function () {                                                                        // 2780
        var offset = this.utcOffset();                                                                               // 2781
        var sign = '+';                                                                                              // 2782
        if (offset < 0) {                                                                                            // 2783
            offset = -offset;                                                                                        // 2784
            sign = '-';                                                                                              // 2785
        }                                                                                                            // 2786
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);                       // 2787
    });                                                                                                              // 2788
}                                                                                                                    // 2789
                                                                                                                     // 2790
offset('Z', ':');                                                                                                    // 2791
offset('ZZ', '');                                                                                                    // 2792
                                                                                                                     // 2793
// PARSING                                                                                                           // 2794
                                                                                                                     // 2795
addRegexToken('Z',  matchShortOffset);                                                                               // 2796
addRegexToken('ZZ', matchShortOffset);                                                                               // 2797
addParseToken(['Z', 'ZZ'], function (input, array, config) {                                                         // 2798
    config._useUTC = true;                                                                                           // 2799
    config._tzm = offsetFromString(matchShortOffset, input);                                                         // 2800
});                                                                                                                  // 2801
                                                                                                                     // 2802
// HELPERS                                                                                                           // 2803
                                                                                                                     // 2804
// timezone chunker                                                                                                  // 2805
// '+10:00' > ['10',  '00']                                                                                          // 2806
// '-1530'  > ['-15', '30']                                                                                          // 2807
var chunkOffset = /([\+\-]|\d\d)/gi;                                                                                 // 2808
                                                                                                                     // 2809
function offsetFromString(matcher, string) {                                                                         // 2810
    var matches = (string || '').match(matcher);                                                                     // 2811
                                                                                                                     // 2812
    if (matches === null) {                                                                                          // 2813
        return null;                                                                                                 // 2814
    }                                                                                                                // 2815
                                                                                                                     // 2816
    var chunk   = matches[matches.length - 1] || [];                                                                 // 2817
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];                                                    // 2818
    var minutes = +(parts[1] * 60) + toInt(parts[2]);                                                                // 2819
                                                                                                                     // 2820
    return minutes === 0 ?                                                                                           // 2821
      0 :                                                                                                            // 2822
      parts[0] === '+' ? minutes : -minutes;                                                                         // 2823
}                                                                                                                    // 2824
                                                                                                                     // 2825
// Return a moment from input, that is local/utc/zone equivalent to model.                                           // 2826
function cloneWithOffset(input, model) {                                                                             // 2827
    var res, diff;                                                                                                   // 2828
    if (model._isUTC) {                                                                                              // 2829
        res = model.clone();                                                                                         // 2830
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();  // 2831
        // Use low-level api, because this fn is low-level api.                                                      // 2832
        res._d.setTime(res._d.valueOf() + diff);                                                                     // 2833
        hooks.updateOffset(res, false);                                                                              // 2834
        return res;                                                                                                  // 2835
    } else {                                                                                                         // 2836
        return createLocal(input).local();                                                                           // 2837
    }                                                                                                                // 2838
}                                                                                                                    // 2839
                                                                                                                     // 2840
function getDateOffset (m) {                                                                                         // 2841
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.                                                // 2842
    // https://github.com/moment/moment/pull/1871                                                                    // 2843
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;                                                          // 2844
}                                                                                                                    // 2845
                                                                                                                     // 2846
// HOOKS                                                                                                             // 2847
                                                                                                                     // 2848
// This function will be called whenever a moment is mutated.                                                        // 2849
// It is intended to keep the offset in sync with the timezone.                                                      // 2850
hooks.updateOffset = function () {};                                                                                 // 2851
                                                                                                                     // 2852
// MOMENTS                                                                                                           // 2853
                                                                                                                     // 2854
// keepLocalTime = true means only change the timezone, without                                                      // 2855
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->                                              // 2856
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset                                               // 2857
// +0200, so we adjust the time as needed, to be valid.                                                              // 2858
//                                                                                                                   // 2859
// Keeping the time actually adds/subtracts (one hour)                                                               // 2860
// from the actual represented time. That is why we call updateOffset                                                // 2861
// a second time. In case it wants us to change the offset again                                                     // 2862
// _changeInProgress == true case, then we have to adjust, because                                                   // 2863
// there is no such time in the given timezone.                                                                      // 2864
function getSetOffset (input, keepLocalTime, keepMinutes) {                                                          // 2865
    var offset = this._offset || 0,                                                                                  // 2866
        localAdjust;                                                                                                 // 2867
    if (!this.isValid()) {                                                                                           // 2868
        return input != null ? this : NaN;                                                                           // 2869
    }                                                                                                                // 2870
    if (input != null) {                                                                                             // 2871
        if (typeof input === 'string') {                                                                             // 2872
            input = offsetFromString(matchShortOffset, input);                                                       // 2873
            if (input === null) {                                                                                    // 2874
                return this;                                                                                         // 2875
            }                                                                                                        // 2876
        } else if (Math.abs(input) < 16 && !keepMinutes) {                                                           // 2877
            input = input * 60;                                                                                      // 2878
        }                                                                                                            // 2879
        if (!this._isUTC && keepLocalTime) {                                                                         // 2880
            localAdjust = getDateOffset(this);                                                                       // 2881
        }                                                                                                            // 2882
        this._offset = input;                                                                                        // 2883
        this._isUTC = true;                                                                                          // 2884
        if (localAdjust != null) {                                                                                   // 2885
            this.add(localAdjust, 'm');                                                                              // 2886
        }                                                                                                            // 2887
        if (offset !== input) {                                                                                      // 2888
            if (!keepLocalTime || this._changeInProgress) {                                                          // 2889
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);                                    // 2890
            } else if (!this._changeInProgress) {                                                                    // 2891
                this._changeInProgress = true;                                                                       // 2892
                hooks.updateOffset(this, true);                                                                      // 2893
                this._changeInProgress = null;                                                                       // 2894
            }                                                                                                        // 2895
        }                                                                                                            // 2896
        return this;                                                                                                 // 2897
    } else {                                                                                                         // 2898
        return this._isUTC ? offset : getDateOffset(this);                                                           // 2899
    }                                                                                                                // 2900
}                                                                                                                    // 2901
                                                                                                                     // 2902
function getSetZone (input, keepLocalTime) {                                                                         // 2903
    if (input != null) {                                                                                             // 2904
        if (typeof input !== 'string') {                                                                             // 2905
            input = -input;                                                                                          // 2906
        }                                                                                                            // 2907
                                                                                                                     // 2908
        this.utcOffset(input, keepLocalTime);                                                                        // 2909
                                                                                                                     // 2910
        return this;                                                                                                 // 2911
    } else {                                                                                                         // 2912
        return -this.utcOffset();                                                                                    // 2913
    }                                                                                                                // 2914
}                                                                                                                    // 2915
                                                                                                                     // 2916
function setOffsetToUTC (keepLocalTime) {                                                                            // 2917
    return this.utcOffset(0, keepLocalTime);                                                                         // 2918
}                                                                                                                    // 2919
                                                                                                                     // 2920
function setOffsetToLocal (keepLocalTime) {                                                                          // 2921
    if (this._isUTC) {                                                                                               // 2922
        this.utcOffset(0, keepLocalTime);                                                                            // 2923
        this._isUTC = false;                                                                                         // 2924
                                                                                                                     // 2925
        if (keepLocalTime) {                                                                                         // 2926
            this.subtract(getDateOffset(this), 'm');                                                                 // 2927
        }                                                                                                            // 2928
    }                                                                                                                // 2929
    return this;                                                                                                     // 2930
}                                                                                                                    // 2931
                                                                                                                     // 2932
function setOffsetToParsedOffset () {                                                                                // 2933
    if (this._tzm != null) {                                                                                         // 2934
        this.utcOffset(this._tzm, false, true);                                                                      // 2935
    } else if (typeof this._i === 'string') {                                                                        // 2936
        var tZone = offsetFromString(matchOffset, this._i);                                                          // 2937
        if (tZone != null) {                                                                                         // 2938
            this.utcOffset(tZone);                                                                                   // 2939
        }                                                                                                            // 2940
        else {                                                                                                       // 2941
            this.utcOffset(0, true);                                                                                 // 2942
        }                                                                                                            // 2943
    }                                                                                                                // 2944
    return this;                                                                                                     // 2945
}                                                                                                                    // 2946
                                                                                                                     // 2947
function hasAlignedHourOffset (input) {                                                                              // 2948
    if (!this.isValid()) {                                                                                           // 2949
        return false;                                                                                                // 2950
    }                                                                                                                // 2951
    input = input ? createLocal(input).utcOffset() : 0;                                                              // 2952
                                                                                                                     // 2953
    return (this.utcOffset() - input) % 60 === 0;                                                                    // 2954
}                                                                                                                    // 2955
                                                                                                                     // 2956
function isDaylightSavingTime () {                                                                                   // 2957
    return (                                                                                                         // 2958
        this.utcOffset() > this.clone().month(0).utcOffset() ||                                                      // 2959
        this.utcOffset() > this.clone().month(5).utcOffset()                                                         // 2960
    );                                                                                                               // 2961
}                                                                                                                    // 2962
                                                                                                                     // 2963
function isDaylightSavingTimeShifted () {                                                                            // 2964
    if (!isUndefined(this._isDSTShifted)) {                                                                          // 2965
        return this._isDSTShifted;                                                                                   // 2966
    }                                                                                                                // 2967
                                                                                                                     // 2968
    var c = {};                                                                                                      // 2969
                                                                                                                     // 2970
    copyConfig(c, this);                                                                                             // 2971
    c = prepareConfig(c);                                                                                            // 2972
                                                                                                                     // 2973
    if (c._a) {                                                                                                      // 2974
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);                                                  // 2975
        this._isDSTShifted = this.isValid() &&                                                                       // 2976
            compareArrays(c._a, other.toArray()) > 0;                                                                // 2977
    } else {                                                                                                         // 2978
        this._isDSTShifted = false;                                                                                  // 2979
    }                                                                                                                // 2980
                                                                                                                     // 2981
    return this._isDSTShifted;                                                                                       // 2982
}                                                                                                                    // 2983
                                                                                                                     // 2984
function isLocal () {                                                                                                // 2985
    return this.isValid() ? !this._isUTC : false;                                                                    // 2986
}                                                                                                                    // 2987
                                                                                                                     // 2988
function isUtcOffset () {                                                                                            // 2989
    return this.isValid() ? this._isUTC : false;                                                                     // 2990
}                                                                                                                    // 2991
                                                                                                                     // 2992
function isUtc () {                                                                                                  // 2993
    return this.isValid() ? this._isUTC && this._offset === 0 : false;                                               // 2994
}                                                                                                                    // 2995
                                                                                                                     // 2996
// ASP.NET json date format regex                                                                                    // 2997
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;                                        // 2998
                                                                                                                     // 2999
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html                         // 3000
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere                                         // 3001
// and further modified to allow for strings containing both week and day                                            // 3002
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
                                                                                                                     // 3004
function createDuration (input, key) {                                                                               // 3005
    var duration = input,                                                                                            // 3006
        // matching against regexp is expensive, do it on demand                                                     // 3007
        match = null,                                                                                                // 3008
        sign,                                                                                                        // 3009
        ret,                                                                                                         // 3010
        diffRes;                                                                                                     // 3011
                                                                                                                     // 3012
    if (isDuration(input)) {                                                                                         // 3013
        duration = {                                                                                                 // 3014
            ms : input._milliseconds,                                                                                // 3015
            d  : input._days,                                                                                        // 3016
            M  : input._months                                                                                       // 3017
        };                                                                                                           // 3018
    } else if (isNumber(input)) {                                                                                    // 3019
        duration = {};                                                                                               // 3020
        if (key) {                                                                                                   // 3021
            duration[key] = input;                                                                                   // 3022
        } else {                                                                                                     // 3023
            duration.milliseconds = input;                                                                           // 3024
        }                                                                                                            // 3025
    } else if (!!(match = aspNetRegex.exec(input))) {                                                                // 3026
        sign = (match[1] === '-') ? -1 : 1;                                                                          // 3027
        duration = {                                                                                                 // 3028
            y  : 0,                                                                                                  // 3029
            d  : toInt(match[DATE])                         * sign,                                                  // 3030
            h  : toInt(match[HOUR])                         * sign,                                                  // 3031
            m  : toInt(match[MINUTE])                       * sign,                                                  // 3032
            s  : toInt(match[SECOND])                       * sign,                                                  // 3033
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };                                                                                                           // 3035
    } else if (!!(match = isoRegex.exec(input))) {                                                                   // 3036
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;                                                 // 3037
        duration = {                                                                                                 // 3038
            y : parseIso(match[2], sign),                                                                            // 3039
            M : parseIso(match[3], sign),                                                                            // 3040
            w : parseIso(match[4], sign),                                                                            // 3041
            d : parseIso(match[5], sign),                                                                            // 3042
            h : parseIso(match[6], sign),                                                                            // 3043
            m : parseIso(match[7], sign),                                                                            // 3044
            s : parseIso(match[8], sign)                                                                             // 3045
        };                                                                                                           // 3046
    } else if (duration == null) {// checks for null or undefined                                                    // 3047
        duration = {};                                                                                               // 3048
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {                           // 3049
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));                           // 3050
                                                                                                                     // 3051
        duration = {};                                                                                               // 3052
        duration.ms = diffRes.milliseconds;                                                                          // 3053
        duration.M = diffRes.months;                                                                                 // 3054
    }                                                                                                                // 3055
                                                                                                                     // 3056
    ret = new Duration(duration);                                                                                    // 3057
                                                                                                                     // 3058
    if (isDuration(input) && hasOwnProp(input, '_locale')) {                                                         // 3059
        ret._locale = input._locale;                                                                                 // 3060
    }                                                                                                                // 3061
                                                                                                                     // 3062
    return ret;                                                                                                      // 3063
}                                                                                                                    // 3064
                                                                                                                     // 3065
createDuration.fn = Duration.prototype;                                                                              // 3066
createDuration.invalid = createInvalid$1;                                                                            // 3067
                                                                                                                     // 3068
function parseIso (inp, sign) {                                                                                      // 3069
    // We'd normally use ~~inp for this, but unfortunately it also                                                   // 3070
    // converts floats to ints.                                                                                      // 3071
    // inp may be undefined, so careful calling replace on it.                                                       // 3072
    var res = inp && parseFloat(inp.replace(',', '.'));                                                              // 3073
    // apply sign while we're at it                                                                                  // 3074
    return (isNaN(res) ? 0 : res) * sign;                                                                            // 3075
}                                                                                                                    // 3076
                                                                                                                     // 3077
function positiveMomentsDifference(base, other) {                                                                    // 3078
    var res = {milliseconds: 0, months: 0};                                                                          // 3079
                                                                                                                     // 3080
    res.months = other.month() - base.month() +                                                                      // 3081
        (other.year() - base.year()) * 12;                                                                           // 3082
    if (base.clone().add(res.months, 'M').isAfter(other)) {                                                          // 3083
        --res.months;                                                                                                // 3084
    }                                                                                                                // 3085
                                                                                                                     // 3086
    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));                                                // 3087
                                                                                                                     // 3088
    return res;                                                                                                      // 3089
}                                                                                                                    // 3090
                                                                                                                     // 3091
function momentsDifference(base, other) {                                                                            // 3092
    var res;                                                                                                         // 3093
    if (!(base.isValid() && other.isValid())) {                                                                      // 3094
        return {milliseconds: 0, months: 0};                                                                         // 3095
    }                                                                                                                // 3096
                                                                                                                     // 3097
    other = cloneWithOffset(other, base);                                                                            // 3098
    if (base.isBefore(other)) {                                                                                      // 3099
        res = positiveMomentsDifference(base, other);                                                                // 3100
    } else {                                                                                                         // 3101
        res = positiveMomentsDifference(other, base);                                                                // 3102
        res.milliseconds = -res.milliseconds;                                                                        // 3103
        res.months = -res.months;                                                                                    // 3104
    }                                                                                                                // 3105
                                                                                                                     // 3106
    return res;                                                                                                      // 3107
}                                                                                                                    // 3108
                                                                                                                     // 3109
// TODO: remove 'name' arg after deprecation is removed                                                              // 3110
function createAdder(direction, name) {                                                                              // 3111
    return function (val, period) {                                                                                  // 3112
        var dur, tmp;                                                                                                // 3113
        //invert the arguments, but complain about it                                                                // 3114
        if (period !== null && !isNaN(+period)) {                                                                    // 3115
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');                         // 3117
            tmp = val; val = period; period = tmp;                                                                   // 3118
        }                                                                                                            // 3119
                                                                                                                     // 3120
        val = typeof val === 'string' ? +val : val;                                                                  // 3121
        dur = createDuration(val, period);                                                                           // 3122
        addSubtract(this, dur, direction);                                                                           // 3123
        return this;                                                                                                 // 3124
    };                                                                                                               // 3125
}                                                                                                                    // 3126
                                                                                                                     // 3127
function addSubtract (mom, duration, isAdding, updateOffset) {                                                       // 3128
    var milliseconds = duration._milliseconds,                                                                       // 3129
        days = absRound(duration._days),                                                                             // 3130
        months = absRound(duration._months);                                                                         // 3131
                                                                                                                     // 3132
    if (!mom.isValid()) {                                                                                            // 3133
        // No op                                                                                                     // 3134
        return;                                                                                                      // 3135
    }                                                                                                                // 3136
                                                                                                                     // 3137
    updateOffset = updateOffset == null ? true : updateOffset;                                                       // 3138
                                                                                                                     // 3139
    if (months) {                                                                                                    // 3140
        setMonth(mom, get(mom, 'Month') + months * isAdding);                                                        // 3141
    }                                                                                                                // 3142
    if (days) {                                                                                                      // 3143
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);                                                      // 3144
    }                                                                                                                // 3145
    if (milliseconds) {                                                                                              // 3146
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);                                                  // 3147
    }                                                                                                                // 3148
    if (updateOffset) {                                                                                              // 3149
        hooks.updateOffset(mom, days || months);                                                                     // 3150
    }                                                                                                                // 3151
}                                                                                                                    // 3152
                                                                                                                     // 3153
var add      = createAdder(1, 'add');                                                                                // 3154
var subtract = createAdder(-1, 'subtract');                                                                          // 3155
                                                                                                                     // 3156
function getCalendarFormat(myMoment, now) {                                                                          // 3157
    var diff = myMoment.diff(now, 'days', true);                                                                     // 3158
    return diff < -6 ? 'sameElse' :                                                                                  // 3159
            diff < -1 ? 'lastWeek' :                                                                                 // 3160
            diff < 0 ? 'lastDay' :                                                                                   // 3161
            diff < 1 ? 'sameDay' :                                                                                   // 3162
            diff < 2 ? 'nextDay' :                                                                                   // 3163
            diff < 7 ? 'nextWeek' : 'sameElse';                                                                      // 3164
}                                                                                                                    // 3165
                                                                                                                     // 3166
function calendar$1 (time, formats) {                                                                                // 3167
    // We want to compare the start of today, vs this.                                                               // 3168
    // Getting start-of-today depends on whether we're local/utc/offset or not.                                      // 3169
    var now = time || createLocal(),                                                                                 // 3170
        sod = cloneWithOffset(now, this).startOf('day'),                                                             // 3171
        format = hooks.calendarFormat(this, sod) || 'sameElse';                                                      // 3172
                                                                                                                     // 3173
    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);       // 3174
                                                                                                                     // 3175
    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));                        // 3176
}                                                                                                                    // 3177
                                                                                                                     // 3178
function clone () {                                                                                                  // 3179
    return new Moment(this);                                                                                         // 3180
}                                                                                                                    // 3181
                                                                                                                     // 3182
function isAfter (input, units) {                                                                                    // 3183
    var localInput = isMoment(input) ? input : createLocal(input);                                                   // 3184
    if (!(this.isValid() && localInput.isValid())) {                                                                 // 3185
        return false;                                                                                                // 3186
    }                                                                                                                // 3187
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                             // 3188
    if (units === 'millisecond') {                                                                                   // 3189
        return this.valueOf() > localInput.valueOf();                                                                // 3190
    } else {                                                                                                         // 3191
        return localInput.valueOf() < this.clone().startOf(units).valueOf();                                         // 3192
    }                                                                                                                // 3193
}                                                                                                                    // 3194
                                                                                                                     // 3195
function isBefore (input, units) {                                                                                   // 3196
    var localInput = isMoment(input) ? input : createLocal(input);                                                   // 3197
    if (!(this.isValid() && localInput.isValid())) {                                                                 // 3198
        return false;                                                                                                // 3199
    }                                                                                                                // 3200
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                             // 3201
    if (units === 'millisecond') {                                                                                   // 3202
        return this.valueOf() < localInput.valueOf();                                                                // 3203
    } else {                                                                                                         // 3204
        return this.clone().endOf(units).valueOf() < localInput.valueOf();                                           // 3205
    }                                                                                                                // 3206
}                                                                                                                    // 3207
                                                                                                                     // 3208
function isBetween (from, to, units, inclusivity) {                                                                  // 3209
    inclusivity = inclusivity || '()';                                                                               // 3210
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&                     // 3211
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));                              // 3212
}                                                                                                                    // 3213
                                                                                                                     // 3214
function isSame (input, units) {                                                                                     // 3215
    var localInput = isMoment(input) ? input : createLocal(input),                                                   // 3216
        inputMs;                                                                                                     // 3217
    if (!(this.isValid() && localInput.isValid())) {                                                                 // 3218
        return false;                                                                                                // 3219
    }                                                                                                                // 3220
    units = normalizeUnits(units || 'millisecond');                                                                  // 3221
    if (units === 'millisecond') {                                                                                   // 3222
        return this.valueOf() === localInput.valueOf();                                                              // 3223
    } else {                                                                                                         // 3224
        inputMs = localInput.valueOf();                                                                              // 3225
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();   // 3226
    }                                                                                                                // 3227
}                                                                                                                    // 3228
                                                                                                                     // 3229
function isSameOrAfter (input, units) {                                                                              // 3230
    return this.isSame(input, units) || this.isAfter(input,units);                                                   // 3231
}                                                                                                                    // 3232
                                                                                                                     // 3233
function isSameOrBefore (input, units) {                                                                             // 3234
    return this.isSame(input, units) || this.isBefore(input,units);                                                  // 3235
}                                                                                                                    // 3236
                                                                                                                     // 3237
function diff (input, units, asFloat) {                                                                              // 3238
    var that,                                                                                                        // 3239
        zoneDelta,                                                                                                   // 3240
        delta, output;                                                                                               // 3241
                                                                                                                     // 3242
    if (!this.isValid()) {                                                                                           // 3243
        return NaN;                                                                                                  // 3244
    }                                                                                                                // 3245
                                                                                                                     // 3246
    that = cloneWithOffset(input, this);                                                                             // 3247
                                                                                                                     // 3248
    if (!that.isValid()) {                                                                                           // 3249
        return NaN;                                                                                                  // 3250
    }                                                                                                                // 3251
                                                                                                                     // 3252
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;                                                         // 3253
                                                                                                                     // 3254
    units = normalizeUnits(units);                                                                                   // 3255
                                                                                                                     // 3256
    switch (units) {                                                                                                 // 3257
        case 'year': output = monthDiff(this, that) / 12; break;                                                     // 3258
        case 'month': output = monthDiff(this, that); break;                                                         // 3259
        case 'quarter': output = monthDiff(this, that) / 3; break;                                                   // 3260
        case 'second': output = (this - that) / 1e3; break; // 1000                                                  // 3261
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60                                             // 3262
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60                                         // 3263
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst            // 3264
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst      // 3265
        default: output = this - that;                                                                               // 3266
    }                                                                                                                // 3267
                                                                                                                     // 3268
    return asFloat ? output : absFloor(output);                                                                      // 3269
}                                                                                                                    // 3270
                                                                                                                     // 3271
function monthDiff (a, b) {                                                                                          // 3272
    // difference in months                                                                                          // 3273
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),                                     // 3274
        // b is in (anchor - 1 month, anchor + 1 month)                                                              // 3275
        anchor = a.clone().add(wholeMonthDiff, 'months'),                                                            // 3276
        anchor2, adjust;                                                                                             // 3277
                                                                                                                     // 3278
    if (b - anchor < 0) {                                                                                            // 3279
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');                                                       // 3280
        // linear across the month                                                                                   // 3281
        adjust = (b - anchor) / (anchor - anchor2);                                                                  // 3282
    } else {                                                                                                         // 3283
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');                                                       // 3284
        // linear across the month                                                                                   // 3285
        adjust = (b - anchor) / (anchor2 - anchor);                                                                  // 3286
    }                                                                                                                // 3287
                                                                                                                     // 3288
    //check for negative zero, return zero if negative zero                                                          // 3289
    return -(wholeMonthDiff + adjust) || 0;                                                                          // 3290
}                                                                                                                    // 3291
                                                                                                                     // 3292
hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';                                                                        // 3293
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';                                                                   // 3294
                                                                                                                     // 3295
function toString () {                                                                                               // 3296
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');                                     // 3297
}                                                                                                                    // 3298
                                                                                                                     // 3299
function toISOString() {                                                                                             // 3300
    if (!this.isValid()) {                                                                                           // 3301
        return null;                                                                                                 // 3302
    }                                                                                                                // 3303
    var m = this.clone().utc();                                                                                      // 3304
    if (m.year() < 0 || m.year() > 9999) {                                                                           // 3305
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                    // 3306
    }                                                                                                                // 3307
    if (isFunction(Date.prototype.toISOString)) {                                                                    // 3308
        // native implementation is ~50x faster, use it when we can                                                  // 3309
        return this.toDate().toISOString();                                                                          // 3310
    }                                                                                                                // 3311
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                          // 3312
}                                                                                                                    // 3313
                                                                                                                     // 3314
/**                                                                                                                  // 3315
 * Return a human readable representation of a moment that can                                                       // 3316
 * also be evaluated to get a new moment which is the same                                                           // 3317
 *                                                                                                                   // 3318
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects                   // 3319
 */                                                                                                                  // 3320
function inspect () {                                                                                                // 3321
    if (!this.isValid()) {                                                                                           // 3322
        return 'moment.invalid(/* ' + this._i + ' */)';                                                              // 3323
    }                                                                                                                // 3324
    var func = 'moment';                                                                                             // 3325
    var zone = '';                                                                                                   // 3326
    if (!this.isLocal()) {                                                                                           // 3327
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';                                           // 3328
        zone = 'Z';                                                                                                  // 3329
    }                                                                                                                // 3330
    var prefix = '[' + func + '("]';                                                                                 // 3331
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';                                        // 3332
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';                                                                          // 3333
    var suffix = zone + '[")]';                                                                                      // 3334
                                                                                                                     // 3335
    return this.format(prefix + year + datetime + suffix);                                                           // 3336
}                                                                                                                    // 3337
                                                                                                                     // 3338
function format (inputString) {                                                                                      // 3339
    if (!inputString) {                                                                                              // 3340
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;                                   // 3341
    }                                                                                                                // 3342
    var output = formatMoment(this, inputString);                                                                    // 3343
    return this.localeData().postformat(output);                                                                     // 3344
}                                                                                                                    // 3345
                                                                                                                     // 3346
function from (time, withoutSuffix) {                                                                                // 3347
    if (this.isValid() &&                                                                                            // 3348
            ((isMoment(time) && time.isValid()) ||                                                                   // 3349
             createLocal(time).isValid())) {                                                                         // 3350
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);                // 3351
    } else {                                                                                                         // 3352
        return this.localeData().invalidDate();                                                                      // 3353
    }                                                                                                                // 3354
}                                                                                                                    // 3355
                                                                                                                     // 3356
function fromNow (withoutSuffix) {                                                                                   // 3357
    return this.from(createLocal(), withoutSuffix);                                                                  // 3358
}                                                                                                                    // 3359
                                                                                                                     // 3360
function to (time, withoutSuffix) {                                                                                  // 3361
    if (this.isValid() &&                                                                                            // 3362
            ((isMoment(time) && time.isValid()) ||                                                                   // 3363
             createLocal(time).isValid())) {                                                                         // 3364
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);                // 3365
    } else {                                                                                                         // 3366
        return this.localeData().invalidDate();                                                                      // 3367
    }                                                                                                                // 3368
}                                                                                                                    // 3369
                                                                                                                     // 3370
function toNow (withoutSuffix) {                                                                                     // 3371
    return this.to(createLocal(), withoutSuffix);                                                                    // 3372
}                                                                                                                    // 3373
                                                                                                                     // 3374
// If passed a locale key, it will set the locale for this                                                           // 3375
// instance.  Otherwise, it will return the locale configuration                                                     // 3376
// variables for this instance.                                                                                      // 3377
function locale (key) {                                                                                              // 3378
    var newLocaleData;                                                                                               // 3379
                                                                                                                     // 3380
    if (key === undefined) {                                                                                         // 3381
        return this._locale._abbr;                                                                                   // 3382
    } else {                                                                                                         // 3383
        newLocaleData = getLocale(key);                                                                              // 3384
        if (newLocaleData != null) {                                                                                 // 3385
            this._locale = newLocaleData;                                                                            // 3386
        }                                                                                                            // 3387
        return this;                                                                                                 // 3388
    }                                                                                                                // 3389
}                                                                                                                    // 3390
                                                                                                                     // 3391
var lang = deprecate(                                                                                                // 3392
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {                                                                                                 // 3394
        if (key === undefined) {                                                                                     // 3395
            return this.localeData();                                                                                // 3396
        } else {                                                                                                     // 3397
            return this.locale(key);                                                                                 // 3398
        }                                                                                                            // 3399
    }                                                                                                                // 3400
);                                                                                                                   // 3401
                                                                                                                     // 3402
function localeData () {                                                                                             // 3403
    return this._locale;                                                                                             // 3404
}                                                                                                                    // 3405
                                                                                                                     // 3406
function startOf (units) {                                                                                           // 3407
    units = normalizeUnits(units);                                                                                   // 3408
    // the following switch intentionally omits break keywords                                                       // 3409
    // to utilize falling through the cases.                                                                         // 3410
    switch (units) {                                                                                                 // 3411
        case 'year':                                                                                                 // 3412
            this.month(0);                                                                                           // 3413
            /* falls through */                                                                                      // 3414
        case 'quarter':                                                                                              // 3415
        case 'month':                                                                                                // 3416
            this.date(1);                                                                                            // 3417
            /* falls through */                                                                                      // 3418
        case 'week':                                                                                                 // 3419
        case 'isoWeek':                                                                                              // 3420
        case 'day':                                                                                                  // 3421
        case 'date':                                                                                                 // 3422
            this.hours(0);                                                                                           // 3423
            /* falls through */                                                                                      // 3424
        case 'hour':                                                                                                 // 3425
            this.minutes(0);                                                                                         // 3426
            /* falls through */                                                                                      // 3427
        case 'minute':                                                                                               // 3428
            this.seconds(0);                                                                                         // 3429
            /* falls through */                                                                                      // 3430
        case 'second':                                                                                               // 3431
            this.milliseconds(0);                                                                                    // 3432
    }                                                                                                                // 3433
                                                                                                                     // 3434
    // weeks are a special case                                                                                      // 3435
    if (units === 'week') {                                                                                          // 3436
        this.weekday(0);                                                                                             // 3437
    }                                                                                                                // 3438
    if (units === 'isoWeek') {                                                                                       // 3439
        this.isoWeekday(1);                                                                                          // 3440
    }                                                                                                                // 3441
                                                                                                                     // 3442
    // quarters are also special                                                                                     // 3443
    if (units === 'quarter') {                                                                                       // 3444
        this.month(Math.floor(this.month() / 3) * 3);                                                                // 3445
    }                                                                                                                // 3446
                                                                                                                     // 3447
    return this;                                                                                                     // 3448
}                                                                                                                    // 3449
                                                                                                                     // 3450
function endOf (units) {                                                                                             // 3451
    units = normalizeUnits(units);                                                                                   // 3452
    if (units === undefined || units === 'millisecond') {                                                            // 3453
        return this;                                                                                                 // 3454
    }                                                                                                                // 3455
                                                                                                                     // 3456
    // 'date' is an alias for 'day', so it should be considered as such.                                             // 3457
    if (units === 'date') {                                                                                          // 3458
        units = 'day';                                                                                               // 3459
    }                                                                                                                // 3460
                                                                                                                     // 3461
    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');                     // 3462
}                                                                                                                    // 3463
                                                                                                                     // 3464
function valueOf () {                                                                                                // 3465
    return this._d.valueOf() - ((this._offset || 0) * 60000);                                                        // 3466
}                                                                                                                    // 3467
                                                                                                                     // 3468
function unix () {                                                                                                   // 3469
    return Math.floor(this.valueOf() / 1000);                                                                        // 3470
}                                                                                                                    // 3471
                                                                                                                     // 3472
function toDate () {                                                                                                 // 3473
    return new Date(this.valueOf());                                                                                 // 3474
}                                                                                                                    // 3475
                                                                                                                     // 3476
function toArray () {                                                                                                // 3477
    var m = this;                                                                                                    // 3478
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];                       // 3479
}                                                                                                                    // 3480
                                                                                                                     // 3481
function toObject () {                                                                                               // 3482
    var m = this;                                                                                                    // 3483
    return {                                                                                                         // 3484
        years: m.year(),                                                                                             // 3485
        months: m.month(),                                                                                           // 3486
        date: m.date(),                                                                                              // 3487
        hours: m.hours(),                                                                                            // 3488
        minutes: m.minutes(),                                                                                        // 3489
        seconds: m.seconds(),                                                                                        // 3490
        milliseconds: m.milliseconds()                                                                               // 3491
    };                                                                                                               // 3492
}                                                                                                                    // 3493
                                                                                                                     // 3494
function toJSON () {                                                                                                 // 3495
    // new Date(NaN).toJSON() === null                                                                               // 3496
    return this.isValid() ? this.toISOString() : null;                                                               // 3497
}                                                                                                                    // 3498
                                                                                                                     // 3499
function isValid$2 () {                                                                                              // 3500
    return isValid(this);                                                                                            // 3501
}                                                                                                                    // 3502
                                                                                                                     // 3503
function parsingFlags () {                                                                                           // 3504
    return extend({}, getParsingFlags(this));                                                                        // 3505
}                                                                                                                    // 3506
                                                                                                                     // 3507
function invalidAt () {                                                                                              // 3508
    return getParsingFlags(this).overflow;                                                                           // 3509
}                                                                                                                    // 3510
                                                                                                                     // 3511
function creationData() {                                                                                            // 3512
    return {                                                                                                         // 3513
        input: this._i,                                                                                              // 3514
        format: this._f,                                                                                             // 3515
        locale: this._locale,                                                                                        // 3516
        isUTC: this._isUTC,                                                                                          // 3517
        strict: this._strict                                                                                         // 3518
    };                                                                                                               // 3519
}                                                                                                                    // 3520
                                                                                                                     // 3521
// FORMATTING                                                                                                        // 3522
                                                                                                                     // 3523
addFormatToken(0, ['gg', 2], 0, function () {                                                                        // 3524
    return this.weekYear() % 100;                                                                                    // 3525
});                                                                                                                  // 3526
                                                                                                                     // 3527
addFormatToken(0, ['GG', 2], 0, function () {                                                                        // 3528
    return this.isoWeekYear() % 100;                                                                                 // 3529
});                                                                                                                  // 3530
                                                                                                                     // 3531
function addWeekYearFormatToken (token, getter) {                                                                    // 3532
    addFormatToken(0, [token, token.length], 0, getter);                                                             // 3533
}                                                                                                                    // 3534
                                                                                                                     // 3535
addWeekYearFormatToken('gggg',     'weekYear');                                                                      // 3536
addWeekYearFormatToken('ggggg',    'weekYear');                                                                      // 3537
addWeekYearFormatToken('GGGG',  'isoWeekYear');                                                                      // 3538
addWeekYearFormatToken('GGGGG', 'isoWeekYear');                                                                      // 3539
                                                                                                                     // 3540
// ALIASES                                                                                                           // 3541
                                                                                                                     // 3542
addUnitAlias('weekYear', 'gg');                                                                                      // 3543
addUnitAlias('isoWeekYear', 'GG');                                                                                   // 3544
                                                                                                                     // 3545
// PRIORITY                                                                                                          // 3546
                                                                                                                     // 3547
addUnitPriority('weekYear', 1);                                                                                      // 3548
addUnitPriority('isoWeekYear', 1);                                                                                   // 3549
                                                                                                                     // 3550
                                                                                                                     // 3551
// PARSING                                                                                                           // 3552
                                                                                                                     // 3553
addRegexToken('G',      matchSigned);                                                                                // 3554
addRegexToken('g',      matchSigned);                                                                                // 3555
addRegexToken('GG',     match1to2, match2);                                                                          // 3556
addRegexToken('gg',     match1to2, match2);                                                                          // 3557
addRegexToken('GGGG',   match1to4, match4);                                                                          // 3558
addRegexToken('gggg',   match1to4, match4);                                                                          // 3559
addRegexToken('GGGGG',  match1to6, match6);                                                                          // 3560
addRegexToken('ggggg',  match1to6, match6);                                                                          // 3561
                                                                                                                     // 3562
addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {                        // 3563
    week[token.substr(0, 2)] = toInt(input);                                                                         // 3564
});                                                                                                                  // 3565
                                                                                                                     // 3566
addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {                                              // 3567
    week[token] = hooks.parseTwoDigitYear(input);                                                                    // 3568
});                                                                                                                  // 3569
                                                                                                                     // 3570
// MOMENTS                                                                                                           // 3571
                                                                                                                     // 3572
function getSetWeekYear (input) {                                                                                    // 3573
    return getSetWeekYearHelper.call(this,                                                                           // 3574
            input,                                                                                                   // 3575
            this.week(),                                                                                             // 3576
            this.weekday(),                                                                                          // 3577
            this.localeData()._week.dow,                                                                             // 3578
            this.localeData()._week.doy);                                                                            // 3579
}                                                                                                                    // 3580
                                                                                                                     // 3581
function getSetISOWeekYear (input) {                                                                                 // 3582
    return getSetWeekYearHelper.call(this,                                                                           // 3583
            input, this.isoWeek(), this.isoWeekday(), 1, 4);                                                         // 3584
}                                                                                                                    // 3585
                                                                                                                     // 3586
function getISOWeeksInYear () {                                                                                      // 3587
    return weeksInYear(this.year(), 1, 4);                                                                           // 3588
}                                                                                                                    // 3589
                                                                                                                     // 3590
function getWeeksInYear () {                                                                                         // 3591
    var weekInfo = this.localeData()._week;                                                                          // 3592
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);                                                     // 3593
}                                                                                                                    // 3594
                                                                                                                     // 3595
function getSetWeekYearHelper(input, week, weekday, dow, doy) {                                                      // 3596
    var weeksTarget;                                                                                                 // 3597
    if (input == null) {                                                                                             // 3598
        return weekOfYear(this, dow, doy).year;                                                                      // 3599
    } else {                                                                                                         // 3600
        weeksTarget = weeksInYear(input, dow, doy);                                                                  // 3601
        if (week > weeksTarget) {                                                                                    // 3602
            week = weeksTarget;                                                                                      // 3603
        }                                                                                                            // 3604
        return setWeekAll.call(this, input, week, weekday, dow, doy);                                                // 3605
    }                                                                                                                // 3606
}                                                                                                                    // 3607
                                                                                                                     // 3608
function setWeekAll(weekYear, week, weekday, dow, doy) {                                                             // 3609
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),                                       // 3610
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);                                        // 3611
                                                                                                                     // 3612
    this.year(date.getUTCFullYear());                                                                                // 3613
    this.month(date.getUTCMonth());                                                                                  // 3614
    this.date(date.getUTCDate());                                                                                    // 3615
    return this;                                                                                                     // 3616
}                                                                                                                    // 3617
                                                                                                                     // 3618
// FORMATTING                                                                                                        // 3619
                                                                                                                     // 3620
addFormatToken('Q', 0, 'Qo', 'quarter');                                                                             // 3621
                                                                                                                     // 3622
// ALIASES                                                                                                           // 3623
                                                                                                                     // 3624
addUnitAlias('quarter', 'Q');                                                                                        // 3625
                                                                                                                     // 3626
// PRIORITY                                                                                                          // 3627
                                                                                                                     // 3628
addUnitPriority('quarter', 7);                                                                                       // 3629
                                                                                                                     // 3630
// PARSING                                                                                                           // 3631
                                                                                                                     // 3632
addRegexToken('Q', match1);                                                                                          // 3633
addParseToken('Q', function (input, array) {                                                                         // 3634
    array[MONTH] = (toInt(input) - 1) * 3;                                                                           // 3635
});                                                                                                                  // 3636
                                                                                                                     // 3637
// MOMENTS                                                                                                           // 3638
                                                                                                                     // 3639
function getSetQuarter (input) {                                                                                     // 3640
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);       // 3641
}                                                                                                                    // 3642
                                                                                                                     // 3643
// FORMATTING                                                                                                        // 3644
                                                                                                                     // 3645
addFormatToken('D', ['DD', 2], 'Do', 'date');                                                                        // 3646
                                                                                                                     // 3647
// ALIASES                                                                                                           // 3648
                                                                                                                     // 3649
addUnitAlias('date', 'D');                                                                                           // 3650
                                                                                                                     // 3651
// PRIOROITY                                                                                                         // 3652
addUnitPriority('date', 9);                                                                                          // 3653
                                                                                                                     // 3654
// PARSING                                                                                                           // 3655
                                                                                                                     // 3656
addRegexToken('D',  match1to2);                                                                                      // 3657
addRegexToken('DD', match1to2, match2);                                                                              // 3658
addRegexToken('Do', function (isStrict, locale) {                                                                    // 3659
    // TODO: Remove "ordinalParse" fallback in next major release.                                                   // 3660
    return isStrict ?                                                                                                // 3661
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :                                                     // 3662
      locale._dayOfMonthOrdinalParseLenient;                                                                         // 3663
});                                                                                                                  // 3664
                                                                                                                     // 3665
addParseToken(['D', 'DD'], DATE);                                                                                    // 3666
addParseToken('Do', function (input, array) {                                                                        // 3667
    array[DATE] = toInt(input.match(match1to2)[0], 10);                                                              // 3668
});                                                                                                                  // 3669
                                                                                                                     // 3670
// MOMENTS                                                                                                           // 3671
                                                                                                                     // 3672
var getSetDayOfMonth = makeGetSet('Date', true);                                                                     // 3673
                                                                                                                     // 3674
// FORMATTING                                                                                                        // 3675
                                                                                                                     // 3676
addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');                                                             // 3677
                                                                                                                     // 3678
// ALIASES                                                                                                           // 3679
                                                                                                                     // 3680
addUnitAlias('dayOfYear', 'DDD');                                                                                    // 3681
                                                                                                                     // 3682
// PRIORITY                                                                                                          // 3683
addUnitPriority('dayOfYear', 4);                                                                                     // 3684
                                                                                                                     // 3685
// PARSING                                                                                                           // 3686
                                                                                                                     // 3687
addRegexToken('DDD',  match1to3);                                                                                    // 3688
addRegexToken('DDDD', match3);                                                                                       // 3689
addParseToken(['DDD', 'DDDD'], function (input, array, config) {                                                     // 3690
    config._dayOfYear = toInt(input);                                                                                // 3691
});                                                                                                                  // 3692
                                                                                                                     // 3693
// HELPERS                                                                                                           // 3694
                                                                                                                     // 3695
// MOMENTS                                                                                                           // 3696
                                                                                                                     // 3697
function getSetDayOfYear (input) {                                                                                   // 3698
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;            // 3699
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');                                           // 3700
}                                                                                                                    // 3701
                                                                                                                     // 3702
// FORMATTING                                                                                                        // 3703
                                                                                                                     // 3704
addFormatToken('m', ['mm', 2], 0, 'minute');                                                                         // 3705
                                                                                                                     // 3706
// ALIASES                                                                                                           // 3707
                                                                                                                     // 3708
addUnitAlias('minute', 'm');                                                                                         // 3709
                                                                                                                     // 3710
// PRIORITY                                                                                                          // 3711
                                                                                                                     // 3712
addUnitPriority('minute', 14);                                                                                       // 3713
                                                                                                                     // 3714
// PARSING                                                                                                           // 3715
                                                                                                                     // 3716
addRegexToken('m',  match1to2);                                                                                      // 3717
addRegexToken('mm', match1to2, match2);                                                                              // 3718
addParseToken(['m', 'mm'], MINUTE);                                                                                  // 3719
                                                                                                                     // 3720
// MOMENTS                                                                                                           // 3721
                                                                                                                     // 3722
var getSetMinute = makeGetSet('Minutes', false);                                                                     // 3723
                                                                                                                     // 3724
// FORMATTING                                                                                                        // 3725
                                                                                                                     // 3726
addFormatToken('s', ['ss', 2], 0, 'second');                                                                         // 3727
                                                                                                                     // 3728
// ALIASES                                                                                                           // 3729
                                                                                                                     // 3730
addUnitAlias('second', 's');                                                                                         // 3731
                                                                                                                     // 3732
// PRIORITY                                                                                                          // 3733
                                                                                                                     // 3734
addUnitPriority('second', 15);                                                                                       // 3735
                                                                                                                     // 3736
// PARSING                                                                                                           // 3737
                                                                                                                     // 3738
addRegexToken('s',  match1to2);                                                                                      // 3739
addRegexToken('ss', match1to2, match2);                                                                              // 3740
addParseToken(['s', 'ss'], SECOND);                                                                                  // 3741
                                                                                                                     // 3742
// MOMENTS                                                                                                           // 3743
                                                                                                                     // 3744
var getSetSecond = makeGetSet('Seconds', false);                                                                     // 3745
                                                                                                                     // 3746
// FORMATTING                                                                                                        // 3747
                                                                                                                     // 3748
addFormatToken('S', 0, 0, function () {                                                                              // 3749
    return ~~(this.millisecond() / 100);                                                                             // 3750
});                                                                                                                  // 3751
                                                                                                                     // 3752
addFormatToken(0, ['SS', 2], 0, function () {                                                                        // 3753
    return ~~(this.millisecond() / 10);                                                                              // 3754
});                                                                                                                  // 3755
                                                                                                                     // 3756
addFormatToken(0, ['SSS', 3], 0, 'millisecond');                                                                     // 3757
addFormatToken(0, ['SSSS', 4], 0, function () {                                                                      // 3758
    return this.millisecond() * 10;                                                                                  // 3759
});                                                                                                                  // 3760
addFormatToken(0, ['SSSSS', 5], 0, function () {                                                                     // 3761
    return this.millisecond() * 100;                                                                                 // 3762
});                                                                                                                  // 3763
addFormatToken(0, ['SSSSSS', 6], 0, function () {                                                                    // 3764
    return this.millisecond() * 1000;                                                                                // 3765
});                                                                                                                  // 3766
addFormatToken(0, ['SSSSSSS', 7], 0, function () {                                                                   // 3767
    return this.millisecond() * 10000;                                                                               // 3768
});                                                                                                                  // 3769
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {                                                                  // 3770
    return this.millisecond() * 100000;                                                                              // 3771
});                                                                                                                  // 3772
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {                                                                 // 3773
    return this.millisecond() * 1000000;                                                                             // 3774
});                                                                                                                  // 3775
                                                                                                                     // 3776
                                                                                                                     // 3777
// ALIASES                                                                                                           // 3778
                                                                                                                     // 3779
addUnitAlias('millisecond', 'ms');                                                                                   // 3780
                                                                                                                     // 3781
// PRIORITY                                                                                                          // 3782
                                                                                                                     // 3783
addUnitPriority('millisecond', 16);                                                                                  // 3784
                                                                                                                     // 3785
// PARSING                                                                                                           // 3786
                                                                                                                     // 3787
addRegexToken('S',    match1to3, match1);                                                                            // 3788
addRegexToken('SS',   match1to3, match2);                                                                            // 3789
addRegexToken('SSS',  match1to3, match3);                                                                            // 3790
                                                                                                                     // 3791
var token;                                                                                                           // 3792
for (token = 'SSSS'; token.length <= 9; token += 'S') {                                                              // 3793
    addRegexToken(token, matchUnsigned);                                                                             // 3794
}                                                                                                                    // 3795
                                                                                                                     // 3796
function parseMs(input, array) {                                                                                     // 3797
    array[MILLISECOND] = toInt(('0.' + input) * 1000);                                                               // 3798
}                                                                                                                    // 3799
                                                                                                                     // 3800
for (token = 'S'; token.length <= 9; token += 'S') {                                                                 // 3801
    addParseToken(token, parseMs);                                                                                   // 3802
}                                                                                                                    // 3803
// MOMENTS                                                                                                           // 3804
                                                                                                                     // 3805
var getSetMillisecond = makeGetSet('Milliseconds', false);                                                           // 3806
                                                                                                                     // 3807
// FORMATTING                                                                                                        // 3808
                                                                                                                     // 3809
addFormatToken('z',  0, 0, 'zoneAbbr');                                                                              // 3810
addFormatToken('zz', 0, 0, 'zoneName');                                                                              // 3811
                                                                                                                     // 3812
// MOMENTS                                                                                                           // 3813
                                                                                                                     // 3814
function getZoneAbbr () {                                                                                            // 3815
    return this._isUTC ? 'UTC' : '';                                                                                 // 3816
}                                                                                                                    // 3817
                                                                                                                     // 3818
function getZoneName () {                                                                                            // 3819
    return this._isUTC ? 'Coordinated Universal Time' : '';                                                          // 3820
}                                                                                                                    // 3821
                                                                                                                     // 3822
var proto = Moment.prototype;                                                                                        // 3823
                                                                                                                     // 3824
proto.add               = add;                                                                                       // 3825
proto.calendar          = calendar$1;                                                                                // 3826
proto.clone             = clone;                                                                                     // 3827
proto.diff              = diff;                                                                                      // 3828
proto.endOf             = endOf;                                                                                     // 3829
proto.format            = format;                                                                                    // 3830
proto.from              = from;                                                                                      // 3831
proto.fromNow           = fromNow;                                                                                   // 3832
proto.to                = to;                                                                                        // 3833
proto.toNow             = toNow;                                                                                     // 3834
proto.get               = stringGet;                                                                                 // 3835
proto.invalidAt         = invalidAt;                                                                                 // 3836
proto.isAfter           = isAfter;                                                                                   // 3837
proto.isBefore          = isBefore;                                                                                  // 3838
proto.isBetween         = isBetween;                                                                                 // 3839
proto.isSame            = isSame;                                                                                    // 3840
proto.isSameOrAfter     = isSameOrAfter;                                                                             // 3841
proto.isSameOrBefore    = isSameOrBefore;                                                                            // 3842
proto.isValid           = isValid$2;                                                                                 // 3843
proto.lang              = lang;                                                                                      // 3844
proto.locale            = locale;                                                                                    // 3845
proto.localeData        = localeData;                                                                                // 3846
proto.max               = prototypeMax;                                                                              // 3847
proto.min               = prototypeMin;                                                                              // 3848
proto.parsingFlags      = parsingFlags;                                                                              // 3849
proto.set               = stringSet;                                                                                 // 3850
proto.startOf           = startOf;                                                                                   // 3851
proto.subtract          = subtract;                                                                                  // 3852
proto.toArray           = toArray;                                                                                   // 3853
proto.toObject          = toObject;                                                                                  // 3854
proto.toDate            = toDate;                                                                                    // 3855
proto.toISOString       = toISOString;                                                                               // 3856
proto.inspect           = inspect;                                                                                   // 3857
proto.toJSON            = toJSON;                                                                                    // 3858
proto.toString          = toString;                                                                                  // 3859
proto.unix              = unix;                                                                                      // 3860
proto.valueOf           = valueOf;                                                                                   // 3861
proto.creationData      = creationData;                                                                              // 3862
                                                                                                                     // 3863
// Year                                                                                                              // 3864
proto.year       = getSetYear;                                                                                       // 3865
proto.isLeapYear = getIsLeapYear;                                                                                    // 3866
                                                                                                                     // 3867
// Week Year                                                                                                         // 3868
proto.weekYear    = getSetWeekYear;                                                                                  // 3869
proto.isoWeekYear = getSetISOWeekYear;                                                                               // 3870
                                                                                                                     // 3871
// Quarter                                                                                                           // 3872
proto.quarter = proto.quarters = getSetQuarter;                                                                      // 3873
                                                                                                                     // 3874
// Month                                                                                                             // 3875
proto.month       = getSetMonth;                                                                                     // 3876
proto.daysInMonth = getDaysInMonth;                                                                                  // 3877
                                                                                                                     // 3878
// Week                                                                                                              // 3879
proto.week           = proto.weeks        = getSetWeek;                                                              // 3880
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;                                                           // 3881
proto.weeksInYear    = getWeeksInYear;                                                                               // 3882
proto.isoWeeksInYear = getISOWeeksInYear;                                                                            // 3883
                                                                                                                     // 3884
// Day                                                                                                               // 3885
proto.date       = getSetDayOfMonth;                                                                                 // 3886
proto.day        = proto.days             = getSetDayOfWeek;                                                         // 3887
proto.weekday    = getSetLocaleDayOfWeek;                                                                            // 3888
proto.isoWeekday = getSetISODayOfWeek;                                                                               // 3889
proto.dayOfYear  = getSetDayOfYear;                                                                                  // 3890
                                                                                                                     // 3891
// Hour                                                                                                              // 3892
proto.hour = proto.hours = getSetHour;                                                                               // 3893
                                                                                                                     // 3894
// Minute                                                                                                            // 3895
proto.minute = proto.minutes = getSetMinute;                                                                         // 3896
                                                                                                                     // 3897
// Second                                                                                                            // 3898
proto.second = proto.seconds = getSetSecond;                                                                         // 3899
                                                                                                                     // 3900
// Millisecond                                                                                                       // 3901
proto.millisecond = proto.milliseconds = getSetMillisecond;                                                          // 3902
                                                                                                                     // 3903
// Offset                                                                                                            // 3904
proto.utcOffset            = getSetOffset;                                                                           // 3905
proto.utc                  = setOffsetToUTC;                                                                         // 3906
proto.local                = setOffsetToLocal;                                                                       // 3907
proto.parseZone            = setOffsetToParsedOffset;                                                                // 3908
proto.hasAlignedHourOffset = hasAlignedHourOffset;                                                                   // 3909
proto.isDST                = isDaylightSavingTime;                                                                   // 3910
proto.isLocal              = isLocal;                                                                                // 3911
proto.isUtcOffset          = isUtcOffset;                                                                            // 3912
proto.isUtc                = isUtc;                                                                                  // 3913
proto.isUTC                = isUtc;                                                                                  // 3914
                                                                                                                     // 3915
// Timezone                                                                                                          // 3916
proto.zoneAbbr = getZoneAbbr;                                                                                        // 3917
proto.zoneName = getZoneName;                                                                                        // 3918
                                                                                                                     // 3919
// Deprecations                                                                                                      // 3920
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);                       // 3921
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);                           // 3922
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);                              // 3923
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
                                                                                                                     // 3926
function createUnix (input) {                                                                                        // 3927
    return createLocal(input * 1000);                                                                                // 3928
}                                                                                                                    // 3929
                                                                                                                     // 3930
function createInZone () {                                                                                           // 3931
    return createLocal.apply(null, arguments).parseZone();                                                           // 3932
}                                                                                                                    // 3933
                                                                                                                     // 3934
function preParsePostFormat (string) {                                                                               // 3935
    return string;                                                                                                   // 3936
}                                                                                                                    // 3937
                                                                                                                     // 3938
var proto$1 = Locale.prototype;                                                                                      // 3939
                                                                                                                     // 3940
proto$1.calendar        = calendar;                                                                                  // 3941
proto$1.longDateFormat  = longDateFormat;                                                                            // 3942
proto$1.invalidDate     = invalidDate;                                                                               // 3943
proto$1.ordinal         = ordinal;                                                                                   // 3944
proto$1.preparse        = preParsePostFormat;                                                                        // 3945
proto$1.postformat      = preParsePostFormat;                                                                        // 3946
proto$1.relativeTime    = relativeTime;                                                                              // 3947
proto$1.pastFuture      = pastFuture;                                                                                // 3948
proto$1.set             = set;                                                                                       // 3949
                                                                                                                     // 3950
// Month                                                                                                             // 3951
proto$1.months            =        localeMonths;                                                                     // 3952
proto$1.monthsShort       =        localeMonthsShort;                                                                // 3953
proto$1.monthsParse       =        localeMonthsParse;                                                                // 3954
proto$1.monthsRegex       = monthsRegex;                                                                             // 3955
proto$1.monthsShortRegex  = monthsShortRegex;                                                                        // 3956
                                                                                                                     // 3957
// Week                                                                                                              // 3958
proto$1.week = localeWeek;                                                                                           // 3959
proto$1.firstDayOfYear = localeFirstDayOfYear;                                                                       // 3960
proto$1.firstDayOfWeek = localeFirstDayOfWeek;                                                                       // 3961
                                                                                                                     // 3962
// Day of Week                                                                                                       // 3963
proto$1.weekdays       =        localeWeekdays;                                                                      // 3964
proto$1.weekdaysMin    =        localeWeekdaysMin;                                                                   // 3965
proto$1.weekdaysShort  =        localeWeekdaysShort;                                                                 // 3966
proto$1.weekdaysParse  =        localeWeekdaysParse;                                                                 // 3967
                                                                                                                     // 3968
proto$1.weekdaysRegex       =        weekdaysRegex;                                                                  // 3969
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;                                                             // 3970
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;                                                               // 3971
                                                                                                                     // 3972
// Hours                                                                                                             // 3973
proto$1.isPM = localeIsPM;                                                                                           // 3974
proto$1.meridiem = localeMeridiem;                                                                                   // 3975
                                                                                                                     // 3976
function get$1 (format, index, field, setter) {                                                                      // 3977
    var locale = getLocale();                                                                                        // 3978
    var utc = createUTC().set(setter, index);                                                                        // 3979
    return locale[field](utc, format);                                                                               // 3980
}                                                                                                                    // 3981
                                                                                                                     // 3982
function listMonthsImpl (format, index, field) {                                                                     // 3983
    if (isNumber(format)) {                                                                                          // 3984
        index = format;                                                                                              // 3985
        format = undefined;                                                                                          // 3986
    }                                                                                                                // 3987
                                                                                                                     // 3988
    format = format || '';                                                                                           // 3989
                                                                                                                     // 3990
    if (index != null) {                                                                                             // 3991
        return get$1(format, index, field, 'month');                                                                 // 3992
    }                                                                                                                // 3993
                                                                                                                     // 3994
    var i;                                                                                                           // 3995
    var out = [];                                                                                                    // 3996
    for (i = 0; i < 12; i++) {                                                                                       // 3997
        out[i] = get$1(format, i, field, 'month');                                                                   // 3998
    }                                                                                                                // 3999
    return out;                                                                                                      // 4000
}                                                                                                                    // 4001
                                                                                                                     // 4002
// ()                                                                                                                // 4003
// (5)                                                                                                               // 4004
// (fmt, 5)                                                                                                          // 4005
// (fmt)                                                                                                             // 4006
// (true)                                                                                                            // 4007
// (true, 5)                                                                                                         // 4008
// (true, fmt, 5)                                                                                                    // 4009
// (true, fmt)                                                                                                       // 4010
function listWeekdaysImpl (localeSorted, format, index, field) {                                                     // 4011
    if (typeof localeSorted === 'boolean') {                                                                         // 4012
        if (isNumber(format)) {                                                                                      // 4013
            index = format;                                                                                          // 4014
            format = undefined;                                                                                      // 4015
        }                                                                                                            // 4016
                                                                                                                     // 4017
        format = format || '';                                                                                       // 4018
    } else {                                                                                                         // 4019
        format = localeSorted;                                                                                       // 4020
        index = format;                                                                                              // 4021
        localeSorted = false;                                                                                        // 4022
                                                                                                                     // 4023
        if (isNumber(format)) {                                                                                      // 4024
            index = format;                                                                                          // 4025
            format = undefined;                                                                                      // 4026
        }                                                                                                            // 4027
                                                                                                                     // 4028
        format = format || '';                                                                                       // 4029
    }                                                                                                                // 4030
                                                                                                                     // 4031
    var locale = getLocale(),                                                                                        // 4032
        shift = localeSorted ? locale._week.dow : 0;                                                                 // 4033
                                                                                                                     // 4034
    if (index != null) {                                                                                             // 4035
        return get$1(format, (index + shift) % 7, field, 'day');                                                     // 4036
    }                                                                                                                // 4037
                                                                                                                     // 4038
    var i;                                                                                                           // 4039
    var out = [];                                                                                                    // 4040
    for (i = 0; i < 7; i++) {                                                                                        // 4041
        out[i] = get$1(format, (i + shift) % 7, field, 'day');                                                       // 4042
    }                                                                                                                // 4043
    return out;                                                                                                      // 4044
}                                                                                                                    // 4045
                                                                                                                     // 4046
function listMonths (format, index) {                                                                                // 4047
    return listMonthsImpl(format, index, 'months');                                                                  // 4048
}                                                                                                                    // 4049
                                                                                                                     // 4050
function listMonthsShort (format, index) {                                                                           // 4051
    return listMonthsImpl(format, index, 'monthsShort');                                                             // 4052
}                                                                                                                    // 4053
                                                                                                                     // 4054
function listWeekdays (localeSorted, format, index) {                                                                // 4055
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');                                                // 4056
}                                                                                                                    // 4057
                                                                                                                     // 4058
function listWeekdaysShort (localeSorted, format, index) {                                                           // 4059
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');                                           // 4060
}                                                                                                                    // 4061
                                                                                                                     // 4062
function listWeekdaysMin (localeSorted, format, index) {                                                             // 4063
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');                                             // 4064
}                                                                                                                    // 4065
                                                                                                                     // 4066
getSetGlobalLocale('en', {                                                                                           // 4067
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,                                                                  // 4068
    ordinal : function (number) {                                                                                    // 4069
        var b = number % 10,                                                                                         // 4070
            output = (toInt(number % 100 / 10) === 1) ? 'th' :                                                       // 4071
            (b === 1) ? 'st' :                                                                                       // 4072
            (b === 2) ? 'nd' :                                                                                       // 4073
            (b === 3) ? 'rd' : 'th';                                                                                 // 4074
        return number + output;                                                                                      // 4075
    }                                                                                                                // 4076
});                                                                                                                  // 4077
                                                                                                                     // 4078
// Side effect imports                                                                                               // 4079
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);                 // 4080
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);              // 4081
                                                                                                                     // 4082
var mathAbs = Math.abs;                                                                                              // 4083
                                                                                                                     // 4084
function abs () {                                                                                                    // 4085
    var data           = this._data;                                                                                 // 4086
                                                                                                                     // 4087
    this._milliseconds = mathAbs(this._milliseconds);                                                                // 4088
    this._days         = mathAbs(this._days);                                                                        // 4089
    this._months       = mathAbs(this._months);                                                                      // 4090
                                                                                                                     // 4091
    data.milliseconds  = mathAbs(data.milliseconds);                                                                 // 4092
    data.seconds       = mathAbs(data.seconds);                                                                      // 4093
    data.minutes       = mathAbs(data.minutes);                                                                      // 4094
    data.hours         = mathAbs(data.hours);                                                                        // 4095
    data.months        = mathAbs(data.months);                                                                       // 4096
    data.years         = mathAbs(data.years);                                                                        // 4097
                                                                                                                     // 4098
    return this;                                                                                                     // 4099
}                                                                                                                    // 4100
                                                                                                                     // 4101
function addSubtract$1 (duration, input, value, direction) {                                                         // 4102
    var other = createDuration(input, value);                                                                        // 4103
                                                                                                                     // 4104
    duration._milliseconds += direction * other._milliseconds;                                                       // 4105
    duration._days         += direction * other._days;                                                               // 4106
    duration._months       += direction * other._months;                                                             // 4107
                                                                                                                     // 4108
    return duration._bubble();                                                                                       // 4109
}                                                                                                                    // 4110
                                                                                                                     // 4111
// supports only 2.0-style add(1, 's') or add(duration)                                                              // 4112
function add$1 (input, value) {                                                                                      // 4113
    return addSubtract$1(this, input, value, 1);                                                                     // 4114
}                                                                                                                    // 4115
                                                                                                                     // 4116
// supports only 2.0-style subtract(1, 's') or subtract(duration)                                                    // 4117
function subtract$1 (input, value) {                                                                                 // 4118
    return addSubtract$1(this, input, value, -1);                                                                    // 4119
}                                                                                                                    // 4120
                                                                                                                     // 4121
function absCeil (number) {                                                                                          // 4122
    if (number < 0) {                                                                                                // 4123
        return Math.floor(number);                                                                                   // 4124
    } else {                                                                                                         // 4125
        return Math.ceil(number);                                                                                    // 4126
    }                                                                                                                // 4127
}                                                                                                                    // 4128
                                                                                                                     // 4129
function bubble () {                                                                                                 // 4130
    var milliseconds = this._milliseconds;                                                                           // 4131
    var days         = this._days;                                                                                   // 4132
    var months       = this._months;                                                                                 // 4133
    var data         = this._data;                                                                                   // 4134
    var seconds, minutes, hours, years, monthsFromDays;                                                              // 4135
                                                                                                                     // 4136
    // if we have a mix of positive and negative values, bubble down first                                           // 4137
    // check: https://github.com/moment/moment/issues/2166                                                           // 4138
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||                                                         // 4139
            (milliseconds <= 0 && days <= 0 && months <= 0))) {                                                      // 4140
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;                                                // 4141
        days = 0;                                                                                                    // 4142
        months = 0;                                                                                                  // 4143
    }                                                                                                                // 4144
                                                                                                                     // 4145
    // The following code bubbles up values, see the tests for                                                       // 4146
    // examples of what that means.                                                                                  // 4147
    data.milliseconds = milliseconds % 1000;                                                                         // 4148
                                                                                                                     // 4149
    seconds           = absFloor(milliseconds / 1000);                                                               // 4150
    data.seconds      = seconds % 60;                                                                                // 4151
                                                                                                                     // 4152
    minutes           = absFloor(seconds / 60);                                                                      // 4153
    data.minutes      = minutes % 60;                                                                                // 4154
                                                                                                                     // 4155
    hours             = absFloor(minutes / 60);                                                                      // 4156
    data.hours        = hours % 24;                                                                                  // 4157
                                                                                                                     // 4158
    days += absFloor(hours / 24);                                                                                    // 4159
                                                                                                                     // 4160
    // convert days to months                                                                                        // 4161
    monthsFromDays = absFloor(daysToMonths(days));                                                                   // 4162
    months += monthsFromDays;                                                                                        // 4163
    days -= absCeil(monthsToDays(monthsFromDays));                                                                   // 4164
                                                                                                                     // 4165
    // 12 months -> 1 year                                                                                           // 4166
    years = absFloor(months / 12);                                                                                   // 4167
    months %= 12;                                                                                                    // 4168
                                                                                                                     // 4169
    data.days   = days;                                                                                              // 4170
    data.months = months;                                                                                            // 4171
    data.years  = years;                                                                                             // 4172
                                                                                                                     // 4173
    return this;                                                                                                     // 4174
}                                                                                                                    // 4175
                                                                                                                     // 4176
function daysToMonths (days) {                                                                                       // 4177
    // 400 years have 146097 days (taking into account leap year rules)                                              // 4178
    // 400 years have 12 months === 4800                                                                             // 4179
    return days * 4800 / 146097;                                                                                     // 4180
}                                                                                                                    // 4181
                                                                                                                     // 4182
function monthsToDays (months) {                                                                                     // 4183
    // the reverse of daysToMonths                                                                                   // 4184
    return months * 146097 / 4800;                                                                                   // 4185
}                                                                                                                    // 4186
                                                                                                                     // 4187
function as (units) {                                                                                                // 4188
    if (!this.isValid()) {                                                                                           // 4189
        return NaN;                                                                                                  // 4190
    }                                                                                                                // 4191
    var days;                                                                                                        // 4192
    var months;                                                                                                      // 4193
    var milliseconds = this._milliseconds;                                                                           // 4194
                                                                                                                     // 4195
    units = normalizeUnits(units);                                                                                   // 4196
                                                                                                                     // 4197
    if (units === 'month' || units === 'year') {                                                                     // 4198
        days   = this._days   + milliseconds / 864e5;                                                                // 4199
        months = this._months + daysToMonths(days);                                                                  // 4200
        return units === 'month' ? months : months / 12;                                                             // 4201
    } else {                                                                                                         // 4202
        // handle milliseconds separately because of floating point math errors (issue #1867)                        // 4203
        days = this._days + Math.round(monthsToDays(this._months));                                                  // 4204
        switch (units) {                                                                                             // 4205
            case 'week'   : return days / 7     + milliseconds / 6048e5;                                             // 4206
            case 'day'    : return days         + milliseconds / 864e5;                                              // 4207
            case 'hour'   : return days * 24    + milliseconds / 36e5;                                               // 4208
            case 'minute' : return days * 1440  + milliseconds / 6e4;                                                // 4209
            case 'second' : return days * 86400 + milliseconds / 1000;                                               // 4210
            // Math.floor prevents floating point math errors here                                                   // 4211
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;                                      // 4212
            default: throw new Error('Unknown unit ' + units);                                                       // 4213
        }                                                                                                            // 4214
    }                                                                                                                // 4215
}                                                                                                                    // 4216
                                                                                                                     // 4217
// TODO: Use this.as('ms')?                                                                                          // 4218
function valueOf$1 () {                                                                                              // 4219
    if (!this.isValid()) {                                                                                           // 4220
        return NaN;                                                                                                  // 4221
    }                                                                                                                // 4222
    return (                                                                                                         // 4223
        this._milliseconds +                                                                                         // 4224
        this._days * 864e5 +                                                                                         // 4225
        (this._months % 12) * 2592e6 +                                                                               // 4226
        toInt(this._months / 12) * 31536e6                                                                           // 4227
    );                                                                                                               // 4228
}                                                                                                                    // 4229
                                                                                                                     // 4230
function makeAs (alias) {                                                                                            // 4231
    return function () {                                                                                             // 4232
        return this.as(alias);                                                                                       // 4233
    };                                                                                                               // 4234
}                                                                                                                    // 4235
                                                                                                                     // 4236
var asMilliseconds = makeAs('ms');                                                                                   // 4237
var asSeconds      = makeAs('s');                                                                                    // 4238
var asMinutes      = makeAs('m');                                                                                    // 4239
var asHours        = makeAs('h');                                                                                    // 4240
var asDays         = makeAs('d');                                                                                    // 4241
var asWeeks        = makeAs('w');                                                                                    // 4242
var asMonths       = makeAs('M');                                                                                    // 4243
var asYears        = makeAs('y');                                                                                    // 4244
                                                                                                                     // 4245
function clone$1 () {                                                                                                // 4246
    return createDuration(this);                                                                                     // 4247
}                                                                                                                    // 4248
                                                                                                                     // 4249
function get$2 (units) {                                                                                             // 4250
    units = normalizeUnits(units);                                                                                   // 4251
    return this.isValid() ? this[units + 's']() : NaN;                                                               // 4252
}                                                                                                                    // 4253
                                                                                                                     // 4254
function makeGetter(name) {                                                                                          // 4255
    return function () {                                                                                             // 4256
        return this.isValid() ? this._data[name] : NaN;                                                              // 4257
    };                                                                                                               // 4258
}                                                                                                                    // 4259
                                                                                                                     // 4260
var milliseconds = makeGetter('milliseconds');                                                                       // 4261
var seconds      = makeGetter('seconds');                                                                            // 4262
var minutes      = makeGetter('minutes');                                                                            // 4263
var hours        = makeGetter('hours');                                                                              // 4264
var days         = makeGetter('days');                                                                               // 4265
var months       = makeGetter('months');                                                                             // 4266
var years        = makeGetter('years');                                                                              // 4267
                                                                                                                     // 4268
function weeks () {                                                                                                  // 4269
    return absFloor(this.days() / 7);                                                                                // 4270
}                                                                                                                    // 4271
                                                                                                                     // 4272
var round = Math.round;                                                                                              // 4273
var thresholds = {                                                                                                   // 4274
    ss: 44,         // a few seconds to seconds                                                                      // 4275
    s : 45,         // seconds to minute                                                                             // 4276
    m : 45,         // minutes to hour                                                                               // 4277
    h : 22,         // hours to day                                                                                  // 4278
    d : 26,         // days to month                                                                                 // 4279
    M : 11          // months to year                                                                                // 4280
};                                                                                                                   // 4281
                                                                                                                     // 4282
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize                            // 4283
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {                                        // 4284
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);                                      // 4285
}                                                                                                                    // 4286
                                                                                                                     // 4287
function relativeTime$1 (posNegDuration, withoutSuffix, locale) {                                                    // 4288
    var duration = createDuration(posNegDuration).abs();                                                             // 4289
    var seconds  = round(duration.as('s'));                                                                          // 4290
    var minutes  = round(duration.as('m'));                                                                          // 4291
    var hours    = round(duration.as('h'));                                                                          // 4292
    var days     = round(duration.as('d'));                                                                          // 4293
    var months   = round(duration.as('M'));                                                                          // 4294
    var years    = round(duration.as('y'));                                                                          // 4295
                                                                                                                     // 4296
    var a = seconds <= thresholds.ss && ['s', seconds]  ||                                                           // 4297
            seconds < thresholds.s   && ['ss', seconds] ||                                                           // 4298
            minutes <= 1             && ['m']           ||                                                           // 4299
            minutes < thresholds.m   && ['mm', minutes] ||                                                           // 4300
            hours   <= 1             && ['h']           ||                                                           // 4301
            hours   < thresholds.h   && ['hh', hours]   ||                                                           // 4302
            days    <= 1             && ['d']           ||                                                           // 4303
            days    < thresholds.d   && ['dd', days]    ||                                                           // 4304
            months  <= 1             && ['M']           ||                                                           // 4305
            months  < thresholds.M   && ['MM', months]  ||                                                           // 4306
            years   <= 1             && ['y']           || ['yy', years];                                            // 4307
                                                                                                                     // 4308
    a[2] = withoutSuffix;                                                                                            // 4309
    a[3] = +posNegDuration > 0;                                                                                      // 4310
    a[4] = locale;                                                                                                   // 4311
    return substituteTimeAgo.apply(null, a);                                                                         // 4312
}                                                                                                                    // 4313
                                                                                                                     // 4314
// This function allows you to set the rounding function for relative time strings                                   // 4315
function getSetRelativeTimeRounding (roundingFunction) {                                                             // 4316
    if (roundingFunction === undefined) {                                                                            // 4317
        return round;                                                                                                // 4318
    }                                                                                                                // 4319
    if (typeof(roundingFunction) === 'function') {                                                                   // 4320
        round = roundingFunction;                                                                                    // 4321
        return true;                                                                                                 // 4322
    }                                                                                                                // 4323
    return false;                                                                                                    // 4324
}                                                                                                                    // 4325
                                                                                                                     // 4326
// This function allows you to set a threshold for relative time strings                                             // 4327
function getSetRelativeTimeThreshold (threshold, limit) {                                                            // 4328
    if (thresholds[threshold] === undefined) {                                                                       // 4329
        return false;                                                                                                // 4330
    }                                                                                                                // 4331
    if (limit === undefined) {                                                                                       // 4332
        return thresholds[threshold];                                                                                // 4333
    }                                                                                                                // 4334
    thresholds[threshold] = limit;                                                                                   // 4335
    if (threshold === 's') {                                                                                         // 4336
        thresholds.ss = limit - 1;                                                                                   // 4337
    }                                                                                                                // 4338
    return true;                                                                                                     // 4339
}                                                                                                                    // 4340
                                                                                                                     // 4341
function humanize (withSuffix) {                                                                                     // 4342
    if (!this.isValid()) {                                                                                           // 4343
        return this.localeData().invalidDate();                                                                      // 4344
    }                                                                                                                // 4345
                                                                                                                     // 4346
    var locale = this.localeData();                                                                                  // 4347
    var output = relativeTime$1(this, !withSuffix, locale);                                                          // 4348
                                                                                                                     // 4349
    if (withSuffix) {                                                                                                // 4350
        output = locale.pastFuture(+this, output);                                                                   // 4351
    }                                                                                                                // 4352
                                                                                                                     // 4353
    return locale.postformat(output);                                                                                // 4354
}                                                                                                                    // 4355
                                                                                                                     // 4356
var abs$1 = Math.abs;                                                                                                // 4357
                                                                                                                     // 4358
function sign(x) {                                                                                                   // 4359
    return ((x > 0) - (x < 0)) || +x;                                                                                // 4360
}                                                                                                                    // 4361
                                                                                                                     // 4362
function toISOString$1() {                                                                                           // 4363
    // for ISO strings we do not use the normal bubbling rules:                                                      // 4364
    //  * milliseconds bubble up until they become hours                                                             // 4365
    //  * days do not bubble at all                                                                                  // 4366
    //  * months bubble up until they become years                                                                   // 4367
    // This is because there is no context-free conversion between hours and days                                    // 4368
    // (think of clock changes)                                                                                      // 4369
    // and also not between days and months (28-31 days per month)                                                   // 4370
    if (!this.isValid()) {                                                                                           // 4371
        return this.localeData().invalidDate();                                                                      // 4372
    }                                                                                                                // 4373
                                                                                                                     // 4374
    var seconds = abs$1(this._milliseconds) / 1000;                                                                  // 4375
    var days         = abs$1(this._days);                                                                            // 4376
    var months       = abs$1(this._months);                                                                          // 4377
    var minutes, hours, years;                                                                                       // 4378
                                                                                                                     // 4379
    // 3600 seconds -> 60 minutes -> 1 hour                                                                          // 4380
    minutes           = absFloor(seconds / 60);                                                                      // 4381
    hours             = absFloor(minutes / 60);                                                                      // 4382
    seconds %= 60;                                                                                                   // 4383
    minutes %= 60;                                                                                                   // 4384
                                                                                                                     // 4385
    // 12 months -> 1 year                                                                                           // 4386
    years  = absFloor(months / 12);                                                                                  // 4387
    months %= 12;                                                                                                    // 4388
                                                                                                                     // 4389
                                                                                                                     // 4390
    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js                  // 4391
    var Y = years;                                                                                                   // 4392
    var M = months;                                                                                                  // 4393
    var D = days;                                                                                                    // 4394
    var h = hours;                                                                                                   // 4395
    var m = minutes;                                                                                                 // 4396
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';                                                 // 4397
    var total = this.asSeconds();                                                                                    // 4398
                                                                                                                     // 4399
    if (!total) {                                                                                                    // 4400
        // this is the same as C#'s (Noda) and python (isodate)...                                                   // 4401
        // but not other JS (goog.date)                                                                              // 4402
        return 'P0D';                                                                                                // 4403
    }                                                                                                                // 4404
                                                                                                                     // 4405
    var totalSign = total < 0 ? '-' : '';                                                                            // 4406
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';                                                      // 4407
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';                                                      // 4408
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';                                               // 4409
                                                                                                                     // 4410
    return totalSign + 'P' +                                                                                         // 4411
        (Y ? ymSign + Y + 'Y' : '') +                                                                                // 4412
        (M ? ymSign + M + 'M' : '') +                                                                                // 4413
        (D ? daysSign + D + 'D' : '') +                                                                              // 4414
        ((h || m || s) ? 'T' : '') +                                                                                 // 4415
        (h ? hmsSign + h + 'H' : '') +                                                                               // 4416
        (m ? hmsSign + m + 'M' : '') +                                                                               // 4417
        (s ? hmsSign + s + 'S' : '');                                                                                // 4418
}                                                                                                                    // 4419
                                                                                                                     // 4420
var proto$2 = Duration.prototype;                                                                                    // 4421
                                                                                                                     // 4422
proto$2.isValid        = isValid$1;                                                                                  // 4423
proto$2.abs            = abs;                                                                                        // 4424
proto$2.add            = add$1;                                                                                      // 4425
proto$2.subtract       = subtract$1;                                                                                 // 4426
proto$2.as             = as;                                                                                         // 4427
proto$2.asMilliseconds = asMilliseconds;                                                                             // 4428
proto$2.asSeconds      = asSeconds;                                                                                  // 4429
proto$2.asMinutes      = asMinutes;                                                                                  // 4430
proto$2.asHours        = asHours;                                                                                    // 4431
proto$2.asDays         = asDays;                                                                                     // 4432
proto$2.asWeeks        = asWeeks;                                                                                    // 4433
proto$2.asMonths       = asMonths;                                                                                   // 4434
proto$2.asYears        = asYears;                                                                                    // 4435
proto$2.valueOf        = valueOf$1;                                                                                  // 4436
proto$2._bubble        = bubble;                                                                                     // 4437
proto$2.clone          = clone$1;                                                                                    // 4438
proto$2.get            = get$2;                                                                                      // 4439
proto$2.milliseconds   = milliseconds;                                                                               // 4440
proto$2.seconds        = seconds;                                                                                    // 4441
proto$2.minutes        = minutes;                                                                                    // 4442
proto$2.hours          = hours;                                                                                      // 4443
proto$2.days           = days;                                                                                       // 4444
proto$2.weeks          = weeks;                                                                                      // 4445
proto$2.months         = months;                                                                                     // 4446
proto$2.years          = years;                                                                                      // 4447
proto$2.humanize       = humanize;                                                                                   // 4448
proto$2.toISOString    = toISOString$1;                                                                              // 4449
proto$2.toString       = toISOString$1;                                                                              // 4450
proto$2.toJSON         = toISOString$1;                                                                              // 4451
proto$2.locale         = locale;                                                                                     // 4452
proto$2.localeData     = localeData;                                                                                 // 4453
                                                                                                                     // 4454
// Deprecations                                                                                                      // 4455
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;                                                                                                 // 4457
                                                                                                                     // 4458
// Side effect imports                                                                                               // 4459
                                                                                                                     // 4460
// FORMATTING                                                                                                        // 4461
                                                                                                                     // 4462
addFormatToken('X', 0, 0, 'unix');                                                                                   // 4463
addFormatToken('x', 0, 0, 'valueOf');                                                                                // 4464
                                                                                                                     // 4465
// PARSING                                                                                                           // 4466
                                                                                                                     // 4467
addRegexToken('x', matchSigned);                                                                                     // 4468
addRegexToken('X', matchTimestamp);                                                                                  // 4469
addParseToken('X', function (input, array, config) {                                                                 // 4470
    config._d = new Date(parseFloat(input, 10) * 1000);                                                              // 4471
});                                                                                                                  // 4472
addParseToken('x', function (input, array, config) {                                                                 // 4473
    config._d = new Date(toInt(input));                                                                              // 4474
});                                                                                                                  // 4475
                                                                                                                     // 4476
// Side effect imports                                                                                               // 4477
                                                                                                                     // 4478
                                                                                                                     // 4479
hooks.version = '2.19.1';                                                                                            // 4480
                                                                                                                     // 4481
setHookCallback(createLocal);                                                                                        // 4482
                                                                                                                     // 4483
hooks.fn                    = proto;                                                                                 // 4484
hooks.min                   = min;                                                                                   // 4485
hooks.max                   = max;                                                                                   // 4486
hooks.now                   = now;                                                                                   // 4487
hooks.utc                   = createUTC;                                                                             // 4488
hooks.unix                  = createUnix;                                                                            // 4489
hooks.months                = listMonths;                                                                            // 4490
hooks.isDate                = isDate;                                                                                // 4491
hooks.locale                = getSetGlobalLocale;                                                                    // 4492
hooks.invalid               = createInvalid;                                                                         // 4493
hooks.duration              = createDuration;                                                                        // 4494
hooks.isMoment              = isMoment;                                                                              // 4495
hooks.weekdays              = listWeekdays;                                                                          // 4496
hooks.parseZone             = createInZone;                                                                          // 4497
hooks.localeData            = getLocale;                                                                             // 4498
hooks.isDuration            = isDuration;                                                                            // 4499
hooks.monthsShort           = listMonthsShort;                                                                       // 4500
hooks.weekdaysMin           = listWeekdaysMin;                                                                       // 4501
hooks.defineLocale          = defineLocale;                                                                          // 4502
hooks.updateLocale          = updateLocale;                                                                          // 4503
hooks.locales               = listLocales;                                                                           // 4504
hooks.weekdaysShort         = listWeekdaysShort;                                                                     // 4505
hooks.normalizeUnits        = normalizeUnits;                                                                        // 4506
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;                                                            // 4507
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;                                                           // 4508
hooks.calendarFormat        = getCalendarFormat;                                                                     // 4509
hooks.prototype             = proto;                                                                                 // 4510
                                                                                                                     // 4511
return hooks;                                                                                                        // 4512
                                                                                                                     // 4513
})));                                                                                                                // 4514
                                                                                                                     // 4515
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/momentjs_moment/export.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
moment = this.moment;                                                                                                // 2
try {                                                                                                                // 3
    delete this.moment;                                                                                              // 4
} catch (e) {                                                                                                        // 5
}                                                                                                                    // 6
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['momentjs:moment'] = {}, {
  moment: moment
});

})();
