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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Session = Package.session.Session;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var PersistentSession;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/u2622_persistent-session/lib/persistent_session.js                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// This file uses code direct from Meteor's reactive-dict package, mostly from                                  // 1
// this file: https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js             // 2
//                                                                                                              // 3
// helpers: https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js#L1-L16        // 4
var stringify = function (value) {                                                                              // 5
  if (value === undefined)                                                                                      // 6
    return 'undefined';                                                                                         // 7
  return EJSON.stringify(value);                                                                                // 8
};                                                                                                              // 9
var parse = function (serialized) {                                                                             // 10
  if (serialized === undefined || serialized === 'undefined')                                                   // 11
    return undefined;                                                                                           // 12
  return EJSON.parse(serialized);                                                                               // 13
};                                                                                                              // 14
                                                                                                                // 15
var changed = function (v) {                                                                                    // 16
  v && v.changed();                                                                                             // 17
};                                                                                                              // 18
                                                                                                                // 19
                                                                                                                // 20
PersistentSession = function (dictName) {                                                                       // 21
  if (_.isString(dictName)) {                                                                                   // 22
    this._dictName = dictName;                                                                                  // 23
                                                                                                                // 24
    // when "session", use the existing dict                                                                    // 25
    if (dictName == "session") {                                                                                // 26
      this._dictName = ""   // we don't need a name for session                                                 // 27
      this._dict = oldSession; // we also want to use the global (incase something was set previously)          // 28
                                                                                                                // 29
    // not session? create a new dict                                                                           // 30
    } else {                                                                                                    // 31
      this._dict = new ReactiveDict(dictName);                                                                  // 32
    }                                                                                                           // 33
                                                                                                                // 34
  } else {                                                                                                      // 35
    throw new Error("dictName must be a string");                                                               // 36
  }                                                                                                             // 37
                                                                                                                // 38
                                                                                                                // 39
  /*                                                                                                            // 40
   * Used to determine if we need to migrate how the data is stored.                                            // 41
   * Each time the data format changes, change this number.                                                     // 42
   *                                                                                                            // 43
   * It should match the current major + minor version:                                                         // 44
   * EG: 0.3 = 3, 1.2 = 12, 2.0 = 20, or for 0.3.x: 3, or 1.x: 10                                               // 45
   *                                                                                                            // 46
   */                                                                                                           // 47
  var PSA_DATA_VERSION = 4;                                                                                     // 48
                                                                                                                // 49
  // === INITIALIZE KEY TRACKING ===                                                                            // 50
  this.psKeys     = {};                                                                                         // 51
  this.psKeyList  = [];                                                                                         // 52
  this.psaKeys    = {};                                                                                         // 53
  this.psaKeyList = [];                                                                                         // 54
                                                                                                                // 55
  // initialize default method setting                                                                          // 56
  this.default_method = 'temporary'; // valid options: 'temporary', 'persistent', 'authenticated'               // 57
  if (Meteor.settings &&                                                                                        // 58
      Meteor.settings.public &&                                                                                 // 59
      Meteor.settings.public.persistent_session) {                                                              // 60
    this.default_method = Meteor.settings.public.persistent_session.default_method;                             // 61
  }                                                                                                             // 62
                                                                                                                // 63
                                                                                                                // 64
  var self = this;                                                                                              // 65
                                                                                                                // 66
  // === HOUSEKEEPING ===                                                                                       // 67
  /*                                                                                                            // 68
   * Converts previously stored values into EJSON compatible formats.                                           // 69
   */                                                                                                           // 70
  function migrateToEJSON() {                                                                                   // 71
    if (amplify.store('__PSDATAVERSION__' + self._dictName) >= 1) {                                             // 72
      return;                                                                                                   // 73
    }                                                                                                           // 74
                                                                                                                // 75
    var psKeyList = amplify.store('__PSKEYS__' + self._dictName);                                               // 76
    var psaKeyList = amplify.store('__PSAKEYS__' + self._dictName);                                             // 77
                                                                                                                // 78
    _.each([psKeyList, psaKeyList], function(list) {                                                            // 79
      _.each(list, function(key) {                                                                              // 80
        amplify.store(key, EJSON.stringify(amplify.store(key)));                                                // 81
      });                                                                                                       // 82
    });                                                                                                         // 83
                                                                                                                // 84
    amplify.store('__PSDATAVERSION__' + self._dictName, 2);                                                     // 85
  };                                                                                                            // 86
                                                                                                                // 87
  function migrate3Xto4X() {                                                                                    // 88
    if (amplify.store('__PSDATAVERSION__' + self._dictName) >= PSA_DATA_VERSION) {                              // 89
      return;                                                                                                   // 90
    }                                                                                                           // 91
                                                                                                                // 92
    var psKeyList = amplify.store('__PSKEYS__' + self._dictName);                                               // 93
    var psaKeyList = amplify.store('__PSAKEYS__' + self._dictName);                                             // 94
                                                                                                                // 95
    _.each([psKeyList, psaKeyList], function(list) {                                                            // 96
      _.each(list, function(key) {                                                                              // 97
        var invalid = false;                                                                                    // 98
        try {                                                                                                   // 99
          EJSON.parse(amplify.store(self._dictName+key));                                                       // 100
        } catch (error) {                                                                                       // 101
          //The data is already in the format that we expect                                                    // 102
          //Unfortunately there is no EJSON.canParse method                                                     // 103
          invalid = true;                                                                                       // 104
        }                                                                                                       // 105
        if (!invalid) {                                                                                         // 106
          var parsed = EJSON.parse(amplify.store(self._dictName+key));                                          // 107
          var jsoned = EJSON.toJSONValue(parsed);                                                               // 108
          amplify.store(self._dictName+key, jsoned);                                                            // 109
        }                                                                                                       // 110
      });                                                                                                       // 111
    });                                                                                                         // 112
                                                                                                                // 113
    amplify.store('__PSDATAVERSION__' + self._dictName, 4);                                                     // 114
  }                                                                                                             // 115
                                                                                                                // 116
  if (Meteor.isClient) {                                                                                        // 117
                                                                                                                // 118
    // --- on startup, load persistent data back into meteor session ---                                        // 119
    Meteor.startup(function(){                                                                                  // 120
      var val;                                                                                                  // 121
                                                                                                                // 122
      migrateToEJSON();                                                                                         // 123
      migrate3Xto4X();                                                                                          // 124
                                                                                                                // 125
      // persistent data                                                                                        // 126
      var psList = amplify.store('__PSKEYS__' + self._dictName);                                                // 127
      if ( typeof psList == "object" && psList.length!==undefined ) {                                           // 128
        for (var i=0; i<psList.length; i++) {                                                                   // 129
          if (!_.has(self._dict.keys, psList[i])) {                                                             // 130
            val = self.get(psList[i]);                                                                          // 131
            self.set(psList[i], val, true, false);                                                              // 132
          }                                                                                                     // 133
        }                                                                                                       // 134
      }                                                                                                         // 135
                                                                                                                // 136
      // authenticated data                                                                                     // 137
      var psaList = amplify.store('__PSAKEYS__' + self._dictName);                                              // 138
      if ( typeof psaList == "object" && psaList.length!==undefined ) {                                         // 139
        for (var i=0; i<psaList.length; i++) {                                                                  // 140
          if (!_.has(self._dict.keys, psaList[i])) {                                                            // 141
            val = self.get(psaList[i]);                                                                         // 142
            self.setAuth(psaList[i], val, true, true);                                                          // 143
          }                                                                                                     // 144
        }                                                                                                       // 145
      }                                                                                                         // 146
                                                                                                                // 147
    });                                                                                                         // 148
                                                                                                                // 149
  };                                                                                                            // 150
                                                                                                                // 151
  Tracker.autorun(function () {                                                                                 // 152
    // lazy check for accounts-base                                                                             // 153
    if (Meteor.userId) {                                                                                        // 154
      var userId = Meteor.userId()                                                                              // 155
      if (userId) {                                                                                             // 156
        // user is logged in, leave session in tacted                                                           // 157
      } else {                                                                                                  // 158
        // user is unset, clear authencated keys                                                                // 159
        self.clearAuth()                                                                                        // 160
      }                                                                                                         // 161
    }                                                                                                           // 162
  });                                                                                                           // 163
                                                                                                                // 164
  return this;                                                                                                  // 165
};                                                                                                              // 166
                                                                                                                // 167
// === LOCAL STORAGE INTERACTION ===                                                                            // 168
PersistentSession.prototype.store = function _psStore(type, key, value) {                                       // 169
  // use dict name for uniqueness                                                                               // 170
  this.psKeyList  = amplify.store('__PSKEYS__' + this._dictName) || [];                                         // 171
  this.psaKeyList = amplify.store('__PSAKEYS__' + this._dictName)|| [];                                         // 172
                                                                                                                // 173
  if (type == 'get') {                                                                                          // 174
    return amplify.store(this._dictName + key);                                                                 // 175
  } else {                                                                                                      // 176
                                                                                                                // 177
    this.psKeyList  = _.without(this.psKeyList, key);                                                           // 178
    this.psaKeyList = _.without(this.psaKeyList, key);                                                          // 179
    delete this.psKeys[key];                                                                                    // 180
    delete this.psaKeys[key];                                                                                   // 181
                                                                                                                // 182
    if (value===undefined || value===null || type=='temporary') {                                               // 183
      value = null;                                                                                             // 184
                                                                                                                // 185
    } else if (type=='persistent') {                                                                            // 186
      this.psKeys[key] = EJSON.toJSONValue(value);                                                              // 187
      this.psKeyList = _.union(this.psKeyList, [key]);                                                          // 188
                                                                                                                // 189
    } else if (type=='authenticated') {                                                                         // 190
      this.psaKeys[key] = EJSON.toJSONValue(value);                                                             // 191
      this.psaKeyList = _.union(this.psaKeyList, [key]);                                                        // 192
    }                                                                                                           // 193
                                                                                                                // 194
    amplify.store('__PSKEYS__', this.psKeyList);                                                                // 195
    amplify.store('__PSAKEYS__', this.psaKeyList);                                                              // 196
    amplify.store(this._dictName + key, EJSON.toJSONValue(value));                                              // 197
  }                                                                                                             // 198
};                                                                                                              // 199
                                                                                                                // 200
                                                                                                                // 201
// === GET ===                                                                                                  // 202
// keep for backwards compability, redirect to this._dict                                                       // 203
PersistentSession.prototype.old_get = function (/* arguments */){                                               // 204
  return this._dict.get.apply(this._dict, arguments);                                                           // 205
};                                                                                                              // 206
PersistentSession.prototype.get = function _psGet(key) {                                                        // 207
  var val = this.old_get(key);                                                                                  // 208
  var psVal;                                                                                                    // 209
  var unparsedPsVal = this.store('get', key);                                                                   // 210
  if (unparsedPsVal !== undefined) {                                                                            // 211
    psVal = EJSON.fromJSONValue(this.store('get', key));                                                        // 212
  }                                                                                                             // 213
                                                                                                                // 214
  /*                                                                                                            // 215
   * We can't do `return psVal || val;` here, as when psVal = undefined and                                     // 216
   * val = 0, it will return undefined, even though 0 is the correct value.                                     // 217
   */                                                                                                           // 218
  if (psVal === undefined || psVal === null) {                                                                  // 219
    return val;                                                                                                 // 220
  }                                                                                                             // 221
  return psVal;                                                                                                 // 222
};                                                                                                              // 223
                                                                                                                // 224
                                                                                                                // 225
// === SET ===                                                                                                  // 226
PersistentSession.prototype.old_set = function (/* arguments */){                                               // 227
  // defaults to a persistent, non-authenticated variable                                                       // 228
  return this._dict.set.apply(this._dict, arguments);                                                           // 229
};                                                                                                              // 230
PersistentSession.prototype.set = function _psSet(keyOrObject, value, persist, auth) {                          // 231
                                                                                                                // 232
  // Taken from https://github.com/meteor/meteor/blob/107d858/packages/reactive-dict/reactive-dict.js           // 233
  if ((typeof keyOrObject === 'object') && (value === undefined)) {                                             // 234
    this._setObject(keyOrObject, persist, auth);                                                                // 235
    return;                                                                                                     // 236
  }                                                                                                             // 237
                                                                                                                // 238
  var key = keyOrObject;                                                                                        // 239
  var type = 'temporary';                                                                                       // 240
  if (persist || (persist===undefined && (this.default_method=='persistent' || this.default_method=='authenticated'))) {
    if (auth || (persist===undefined && auth===undefined && this.default_method=='authenticated')) {            // 242
      type = 'authenticated';                                                                                   // 243
    } else {                                                                                                    // 244
      type = 'persistent';                                                                                      // 245
    }                                                                                                           // 246
  }                                                                                                             // 247
  this.store(type, key, value);                                                                                 // 248
  this.old_set(key, value);                                                                                     // 249
};                                                                                                              // 250
                                                                                                                // 251
                                                                                                                // 252
// Taken from https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js#L144-L151   // 253
// Backwords compat:                                                                                            // 254
PersistentSession.prototype.all = function _psAll() {                                                           // 255
  if (this._dict.allDeps) {                                                                                     // 256
    this._dict.allDeps.depend();                                                                                // 257
  }                                                                                                             // 258
  var ret = {};                                                                                                 // 259
  _.each(this._dict.keys, function(value, key) {                                                                // 260
    ret[key] = parse(value);                                                                                    // 261
  });                                                                                                           // 262
  return ret;                                                                                                   // 263
}                                                                                                               // 264
                                                                                                                // 265
PersistentSession.prototype._setObject = function _psSetObject(object, persist, auth) {                         // 266
  var self = this;                                                                                              // 267
                                                                                                                // 268
  _.each(object, function (value, key){                                                                         // 269
    self.set(key, value, persist, auth);                                                                        // 270
  });                                                                                                           // 271
};                                                                                                              // 272
                                                                                                                // 273
PersistentSession.prototype._ensureKey = function _psEnsureKey(key) {                                           // 274
  var self = this._dict;                                                                                        // 275
  if (!(key in self.keyDeps)) {                                                                                 // 276
    self.keyDeps[key] = new Tracker.Dependency;                                                                 // 277
    self.keyValueDeps[key] = {};                                                                                // 278
  }                                                                                                             // 279
}                                                                                                               // 280
                                                                                                                // 281
// === EQUALS ===                                                                                               // 282
// Taken from https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js#L93-L137    // 283
PersistentSession.prototype.equals = function _psEquals(key, value) {                                           // 284
                                                                                                                // 285
  // Mongo.ObjectID is in the 'mongo' package                                                                   // 286
  var ObjectID = null;                                                                                          // 287
  if (Package.mongo) {                                                                                          // 288
    ObjectID = Package.mongo.Mongo.ObjectID;                                                                    // 289
  }                                                                                                             // 290
                                                                                                                // 291
  // We don't allow objects (or arrays that might include objects) for                                          // 292
  // .equals, because JSON.stringify doesn't canonicalize object key                                            // 293
  // order. (We can make equals have the right return value by parsing the                                      // 294
  // current value and using EJSON.equals, but we won't have a canonical                                        // 295
  // element of keyValueDeps[key] to store the dependency.) You can still use                                   // 296
  // "EJSON.equals(reactiveDict.get(key), value)".                                                              // 297
  //                                                                                                            // 298
  // XXX we could allow arrays as long as we recursively check that there                                       // 299
  // are no objects                                                                                             // 300
  if (typeof value !== 'string' &&                                                                              // 301
      typeof value !== 'number' &&                                                                              // 302
      typeof value !== 'boolean' &&                                                                             // 303
      typeof value !== 'undefined' &&                                                                           // 304
      !(value instanceof Date) &&                                                                               // 305
      !(ObjectID && value instanceof ObjectID) &&                                                               // 306
      value !== null) {                                                                                         // 307
    throw new Error("ReactiveDict.equals: value must be scalar");                                               // 308
  }                                                                                                             // 309
  var serializedValue = stringify(value);                                                                       // 310
                                                                                                                // 311
  if (Tracker.active) {                                                                                         // 312
    this._ensureKey(key);                                                                                       // 313
                                                                                                                // 314
    if (! _.has(this._dict.keyValueDeps[key], serializedValue))                                                 // 315
      this._dict.keyValueDeps[key][serializedValue] = new Tracker.Dependency;                                   // 316
                                                                                                                // 317
    var isNew = this._dict.keyValueDeps[key][serializedValue].depend();                                         // 318
    if (isNew) {                                                                                                // 319
      var that = this;                                                                                          // 320
      Tracker.onInvalidate(function () {                                                                        // 321
        // clean up [key][serializedValue] if it's now empty, so we don't                                       // 322
        // use O(n) memory for n = values seen ever                                                             // 323
        if (! that._dict.keyValueDeps[key][serializedValue].hasDependents())                                    // 324
          delete that._dict.keyValueDeps[key][serializedValue];                                                 // 325
      });                                                                                                       // 326
    }                                                                                                           // 327
  }                                                                                                             // 328
                                                                                                                // 329
  var oldValue = this.get(key);                                                                                 // 330
                                                                                                                // 331
  return EJSON.equals(oldValue, value);                                                                         // 332
};                                                                                                              // 333
                                                                                                                // 334
// === SET TEMPORARY ===                                                                                        // 335
// alias to .set(); sets a non-persistent variable                                                              // 336
PersistentSession.prototype.setTemporary = function _psSetTemp(keyOrObject, value) {                            // 337
  this.set(keyOrObject, value, false, false);                                                                   // 338
};                                                                                                              // 339
PersistentSession.prototype.setTemp = function _psSetTemp(keyOrObject, value) {                                 // 340
  this.set(keyOrObject, value, false, false);                                                                   // 341
};                                                                                                              // 342
                                                                                                                // 343
// === SET PERSISTENT ===                                                                                       // 344
// alias to .set(); sets a persistent variable                                                                  // 345
PersistentSession.prototype.setPersistent = function _psSetPersistent(keyOrObject, value) {                     // 346
  this.set(keyOrObject, value, true, false);                                                                    // 347
};                                                                                                              // 348
                                                                                                                // 349
// === SET AUTHENTICATED ===                                                                                    // 350
// alias to .set(); sets a persistent variable that will be removed on logout                                   // 351
PersistentSession.prototype.setAuth = function _psSetAuth(keyOrObject, value) {                                 // 352
  this.set(keyOrObject, value, true, true);                                                                     // 353
};                                                                                                              // 354
                                                                                                                // 355
                                                                                                                // 356
// === MAKE TEMP / PERSISTENT / AUTH ===                                                                        // 357
// change the type of session var                                                                               // 358
PersistentSession.prototype.makeTemp = function _psMakeTemp(key) {                                              // 359
  this.store('temporary', key);                                                                                 // 360
};                                                                                                              // 361
PersistentSession.prototype.makePersistent = function _psMakePersistent(key) {                                  // 362
  var val = this.get(key);                                                                                      // 363
  this.store('persistent', key, val);                                                                           // 364
};                                                                                                              // 365
PersistentSession.prototype.makeAuth = function _psMakeAuth(key) {                                              // 366
  var val = this.get(key);                                                                                      // 367
  this.store('authenticated', key, val);                                                                        // 368
};                                                                                                              // 369
                                                                                                                // 370
                                                                                                                // 371
                                                                                                                // 372
// === CLEAR ===                                                                                                // 373
PersistentSession.prototype.old_clear = function (/* arguments */){                                             // 374
  return this._dict.clear.apply(this._dict, arguments);                                                         // 375
};                                                                                                              // 376
                                                                                                                // 377
// more or less how it's implemented in reactive dict, but add support for removing single or arrays of keys    // 378
// Derived from https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js#L153-L167
PersistentSession.prototype.clear = function _psClear(key, list) {                                              // 380
  var self = this;                                                                                              // 381
  var oldKeys = self._dict.keys;                                                                                // 382
                                                                                                                // 383
  if ((key === undefined) && (list === undefined)) {                                                            // 384
    list = oldKeys;                                                                                             // 385
  } else if (!(key === undefined)) {                                                                            // 386
    list = [key]                                                                                                // 387
  } else {                                                                                                      // 388
    // list = list                                                                                              // 389
  }                                                                                                             // 390
                                                                                                                // 391
  // okay, if it was an array of keys, find the old key pairings for reactivity                                 // 392
  if (_.isArray(list)){                                                                                         // 393
    var oldList = list;                                                                                         // 394
    var list = {}                                                                                               // 395
    _.each(oldList, function (key) {                                                                            // 396
      list[key] = oldKeys[key];                                                                                 // 397
    });                                                                                                         // 398
  }                                                                                                             // 399
                                                                                                                // 400
  _.each(list, function(value, akey) {                                                                          // 401
    self.set(akey, undefined, false, false);                                                                    // 402
                                                                                                                // 403
    changed(self._dict.keyDeps[akey]);                                                                          // 404
    if (self._dict.keyValueDeps[akey]) {                                                                        // 405
      changed(self._dict.keyValueDeps[akey][value]);                                                            // 406
      changed(self._dict.keyValueDeps[akey]['undefined']);                                                      // 407
    }                                                                                                           // 408
                                                                                                                // 409
    delete self._dict.keys[akey]; // remove the key                                                             // 410
  });                                                                                                           // 411
                                                                                                                // 412
  // reactive-dict 1.1.0+                                                                                       // 413
  if (self._dict.allDeps) {                                                                                     // 414
    self._dict.allDeps.changed();                                                                               // 415
  }                                                                                                             // 416
};                                                                                                              // 417
                                                                                                                // 418
                                                                                                                // 419
// === CLEAR TEMP ===                                                                                           // 420
// clears all the temporary keys                                                                                // 421
PersistentSession.prototype.clearTemp = function _psClearTemp() {                                               // 422
  this.clear(undefined, _.keys(_.omit(this._dict.keys, this.psKeys, this.psaKeys)));                            // 423
};                                                                                                              // 424
                                                                                                                // 425
// === CLEAR PERSISTENT ===                                                                                     // 426
// clears all persistent keys                                                                                   // 427
PersistentSession.prototype.clearPersistent = function _psClearPersistent() {                                   // 428
  this.clear(undefined, this.psKeys);                                                                           // 429
};                                                                                                              // 430
                                                                                                                // 431
// === CLEAR AUTH ===                                                                                           // 432
// clears all authenticated keys                                                                                // 433
PersistentSession.prototype.clearAuth = function _psClearAuth() {                                               // 434
  this.clear(undefined, this.psaKeys);                                                                          // 435
};                                                                                                              // 436
                                                                                                                // 437
                                                                                                                // 438
                                                                                                                // 439
                                                                                                                // 440
// === UPDATE ===                                                                                               // 441
// updates the value of a session var without changing its type                                                 // 442
PersistentSession.prototype.update = function _psUpdate(key, value) {                                           // 443
  var persist, auth;                                                                                            // 444
  if ( _.indexOf(this.psaKeyList, key) >= 0 ) { auth = true; }                                                  // 445
  if ( auth || _.indexOf(this.psKeyList, key) >= 0 ) { persist = true; }                                        // 446
  this.set(key, value, persist, auth);                                                                          // 447
};                                                                                                              // 448
                                                                                                                // 449
// === SET DEFAULT ===                                                                                          // 450
PersistentSession.prototype.old_setDefault = function (/* arguments */){                                        // 451
  return this._dict.setDefault.apply(this._dict, arguments);                                                    // 452
};                                                                                                              // 453
PersistentSession.prototype.setDefault = function _psSetDefault(keyOrObject, value, persist, auth) {            // 454
  var self = this;                                                                                              // 455
                                                                                                                // 456
  if (_.isObject(keyOrObject)) {                                                                                // 457
    _.each(keyOrObject, function(value, key) {                                                                  // 458
      self.setDefault(key, value, persist, auth);                                                               // 459
    });                                                                                                         // 460
    return;                                                                                                     // 461
  }                                                                                                             // 462
                                                                                                                // 463
  if ( this.get(keyOrObject) === undefined) {                                                                   // 464
    this.set(keyOrObject, value, persist, auth);                                                                // 465
  }                                                                                                             // 466
};                                                                                                              // 467
                                                                                                                // 468
// === SET DEFAULT TEMP ===                                                                                     // 469
PersistentSession.prototype.setDefaultTemp = function _psSetDefaultTemp(keyOrObject, value) {                   // 470
                                                                                                                // 471
  if (_.isObject(keyOrObject)) {                                                                                // 472
    value = undefined;                                                                                          // 473
  }                                                                                                             // 474
                                                                                                                // 475
  this.setDefault(keyOrObject, value, false, false);                                                            // 476
};                                                                                                              // 477
                                                                                                                // 478
// === SET DEFAULT PERSISTENT ===                                                                               // 479
PersistentSession.prototype.setDefaultPersistent = function _psSetDefaultPersistent(keyOrObject, value) {       // 480
                                                                                                                // 481
  if (_.isObject(keyOrObject)) {                                                                                // 482
    value = undefined;                                                                                          // 483
  }                                                                                                             // 484
                                                                                                                // 485
  this.setDefault(keyOrObject, value, true, false);                                                             // 486
};                                                                                                              // 487
                                                                                                                // 488
// === SET DEFAULT AUTH ===                                                                                     // 489
PersistentSession.prototype.setDefaultAuth = function _psSetDefaultAuth(keyOrObject, value) {                   // 490
                                                                                                                // 491
  if (_.isObject(keyOrObject)) {                                                                                // 492
    value = undefined;                                                                                          // 493
  }                                                                                                             // 494
                                                                                                                // 495
  this.setDefault(keyOrObject, value, true, true);                                                              // 496
};                                                                                                              // 497
                                                                                                                // 498
// automatically apply PersistentSession to Session                                                             // 499
var oldSession = _.clone(Session);                                                                              // 500
_.extend(Session, new PersistentSession("session"))                                                             // 501
                                                                                                                // 502
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['u2622:persistent-session'] = {}, {
  PersistentSession: PersistentSession
});

})();
