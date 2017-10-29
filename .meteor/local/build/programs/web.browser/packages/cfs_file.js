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
var FS = Package['cfs:base-package'].FS;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var check = Package.check.check;
var Match = Package.check.Match;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;
var HTTP = Package.http.HTTP;
var DataMan = Package['cfs:data-man'].DataMan;
var EventEmitter = Package['raix:eventemitter'].EventEmitter;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/cfs_file/packages/cfs_file.js                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/cfs:file/fsFile-common.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   // 1
 * @method FS.File                                                                                                    // 2
 * @namespace FS.File                                                                                                 // 3
 * @public                                                                                                            // 4
 * @constructor                                                                                                       // 5
 * @param {object|FS.File|data to attach} [ref] Another FS.File instance, a filerecord, or some data to pass to attachData
 */                                                                                                                   // 7
FS.File = function(ref, createdByTransform) {                                                                         // 8
  var self = this;                                                                                                    // 9
                                                                                                                      // 10
  self.createdByTransform = !!createdByTransform;                                                                     // 11
                                                                                                                      // 12
  if (ref instanceof FS.File || isBasicObject(ref)) {                                                                 // 13
    // Extend self with filerecord related data                                                                       // 14
    FS.Utility.extend(self, FS.Utility.cloneFileRecord(ref, {full: true}));                                           // 15
  } else if (ref) {                                                                                                   // 16
    self.attachData(ref);                                                                                             // 17
  }                                                                                                                   // 18
};                                                                                                                    // 19
                                                                                                                      // 20
// An FS.File can emit events                                                                                         // 21
FS.File.prototype = new EventEmitter();                                                                               // 22
                                                                                                                      // 23
/**                                                                                                                   // 24
 * @method FS.File.prototype.attachData                                                                               // 25
 * @public                                                                                                            // 26
 * @param {File|Blob|Buffer|ArrayBuffer|Uint8Array|String} data The data that you want to attach to the file.         // 27
 * @param {Object} [options] Options                                                                                  // 28
 * @param {String} [options.type] The data content (MIME) type, if known.                                             // 29
 * @param {String} [options.headers] When attaching a URL, headers to be used for the GET request (currently server only)
 * @param {String} [options.auth] When attaching a URL, "username:password" to be used for the GET request (currently server only)
 * @param {Function} [callback] Callback function, callback(error). On the client, a callback is required if data is a URL.
 * @returns {FS.File} This FS.File instance.                                                                          // 33
 *                                                                                                                    // 34
 */                                                                                                                   // 35
FS.File.prototype.attachData = function fsFileAttachData(data, options, callback) {                                   // 36
  var self = this;                                                                                                    // 37
                                                                                                                      // 38
  if (!callback && typeof options === "function") {                                                                   // 39
    callback = options;                                                                                               // 40
    options = {};                                                                                                     // 41
  }                                                                                                                   // 42
  options = options || {};                                                                                            // 43
                                                                                                                      // 44
  if (!data) {                                                                                                        // 45
    throw new Error('FS.File.attachData requires a data argument with some data');                                    // 46
  }                                                                                                                   // 47
                                                                                                                      // 48
  var urlOpts;                                                                                                        // 49
                                                                                                                      // 50
  // Set any other properties we can determine from the source data                                                   // 51
  // File                                                                                                             // 52
  if (typeof File !== "undefined" && data instanceof File) {                                                          // 53
    self.name(data.name);                                                                                             // 54
    self.updatedAt(data.lastModifiedDate);                                                                            // 55
    self.size(data.size);                                                                                             // 56
    setData(data.type);                                                                                               // 57
  }                                                                                                                   // 58
  // Blob                                                                                                             // 59
  else if (typeof Blob !== "undefined" && data instanceof Blob) {                                                     // 60
    self.updatedAt(new Date());                                                                                       // 61
    self.size(data.size);                                                                                             // 62
    setData(data.type);                                                                                               // 63
  }                                                                                                                   // 64
  // URL: we need to do a HEAD request to get the type because type                                                   // 65
  // is required for filtering to work.                                                                               // 66
  else if (typeof data === "string" && (data.slice(0, 5) === "http:" || data.slice(0, 6) === "https:")) {             // 67
    urlOpts = FS.Utility.extend({}, options);                                                                         // 68
    if (urlOpts.type) {                                                                                               // 69
      delete urlOpts.type;                                                                                            // 70
    }                                                                                                                 // 71
                                                                                                                      // 72
    if (!callback) {                                                                                                  // 73
      if (Meteor.isClient) {                                                                                          // 74
        throw new Error('FS.File.attachData requires a callback when attaching a URL on the client');                 // 75
      }                                                                                                               // 76
      var result = Meteor.call('_cfs_getUrlInfo', data, urlOpts);                                                     // 77
      FS.Utility.extend(self, {original: result});                                                                    // 78
      setData(result.type);                                                                                           // 79
    } else {                                                                                                          // 80
      Meteor.call('_cfs_getUrlInfo', data, urlOpts, function (error, result) {                                        // 81
        FS.debug && console.log("URL HEAD RESULT:", result);                                                          // 82
        if (error) {                                                                                                  // 83
          callback(error);                                                                                            // 84
        } else {                                                                                                      // 85
          FS.Utility.extend(self, {original: result});                                                                // 86
          setData(result.type);                                                                                       // 87
        }                                                                                                             // 88
      });                                                                                                             // 89
    }                                                                                                                 // 90
  }                                                                                                                   // 91
  // Everything else                                                                                                  // 92
  else {                                                                                                              // 93
    setData(options.type);                                                                                            // 94
  }                                                                                                                   // 95
                                                                                                                      // 96
  // Set the data                                                                                                     // 97
  function setData(type) {                                                                                            // 98
    self.data = new DataMan(data, type, urlOpts);                                                                     // 99
                                                                                                                      // 100
    // Update the type to match what the data is                                                                      // 101
    self.type(self.data.type());                                                                                      // 102
                                                                                                                      // 103
    // Update the size to match what the data is.                                                                     // 104
    // It's always safe to call self.data.size() without supplying a callback                                         // 105
    // because it requires a callback only for URLs on the client, and we                                             // 106
    // already added size for URLs when we got the result from '_cfs_getUrlInfo' method.                              // 107
    if (!self.size()) {                                                                                               // 108
      if (callback) {                                                                                                 // 109
        self.data.size(function (error, size) {                                                                       // 110
          if (error) {                                                                                                // 111
            callback && callback(error);                                                                              // 112
          } else {                                                                                                    // 113
            self.size(size);                                                                                          // 114
            setName();                                                                                                // 115
          }                                                                                                           // 116
        });                                                                                                           // 117
      } else {                                                                                                        // 118
        self.size(self.data.size());                                                                                  // 119
        setName();                                                                                                    // 120
      }                                                                                                               // 121
    } else {                                                                                                          // 122
      setName();                                                                                                      // 123
    }                                                                                                                 // 124
  }                                                                                                                   // 125
                                                                                                                      // 126
  function setName() {                                                                                                // 127
    // See if we can extract a file name from URL or filepath                                                         // 128
    if (!self.name() && typeof data === "string") {                                                                   // 129
      // name from URL                                                                                                // 130
      if (data.slice(0, 5) === "http:" || data.slice(0, 6) === "https:") {                                            // 131
        if (FS.Utility.getFileExtension(data).length) {                                                               // 132
          // for a URL we assume the end is a filename only if it has an extension                                    // 133
          self.name(FS.Utility.getFileName(data));                                                                    // 134
        }                                                                                                             // 135
      }                                                                                                               // 136
      // name from filepath                                                                                           // 137
      else if (data.slice(0, 5) !== "data:") {                                                                        // 138
        self.name(FS.Utility.getFileName(data));                                                                      // 139
      }                                                                                                               // 140
    }                                                                                                                 // 141
                                                                                                                      // 142
    callback && callback();                                                                                           // 143
  }                                                                                                                   // 144
                                                                                                                      // 145
  return self; //allow chaining                                                                                       // 146
};                                                                                                                    // 147
                                                                                                                      // 148
/**                                                                                                                   // 149
 * @method FS.File.prototype.uploadProgress                                                                           // 150
 * @public                                                                                                            // 151
 * @returns {number} The server confirmed upload progress                                                             // 152
 */                                                                                                                   // 153
FS.File.prototype.uploadProgress = function() {                                                                       // 154
  var self = this;                                                                                                    // 155
  // Make sure our file record is updated                                                                             // 156
  self.getFileRecord();                                                                                               // 157
                                                                                                                      // 158
  // If fully uploaded, return 100                                                                                    // 159
  if (self.uploadedAt) {                                                                                              // 160
    return 100;                                                                                                       // 161
  }                                                                                                                   // 162
  // Otherwise return the confirmed progress or 0                                                                     // 163
  else {                                                                                                              // 164
    return Math.round((self.chunkCount || 0) / (self.chunkSum || 1) * 100);                                           // 165
  }                                                                                                                   // 166
};                                                                                                                    // 167
                                                                                                                      // 168
/**                                                                                                                   // 169
 * @method FS.File.prototype.controlledByDeps                                                                         // 170
 * @public                                                                                                            // 171
 * @returns {FS.Collection} Returns true if this FS.File is reactive                                                  // 172
 *                                                                                                                    // 173
 * > Note: Returns true if this FS.File object was created by a FS.Collection                                         // 174
 * > and we are in a reactive computations. What does this mean? Well it should                                       // 175
 * > mean that our fileRecord is fully updated by Meteor and we are mounted on                                        // 176
 * > a collection                                                                                                     // 177
 */                                                                                                                   // 178
FS.File.prototype.controlledByDeps = function() {                                                                     // 179
  var self = this;                                                                                                    // 180
  return self.createdByTransform && Deps.active;                                                                      // 181
};                                                                                                                    // 182
                                                                                                                      // 183
/**                                                                                                                   // 184
 * @method FS.File.prototype.getCollection                                                                            // 185
 * @public                                                                                                            // 186
 * @returns {FS.Collection} Returns attached collection or undefined if not mounted                                   // 187
 */                                                                                                                   // 188
FS.File.prototype.getCollection = function() {                                                                        // 189
  // Get the collection reference                                                                                     // 190
  var self = this;                                                                                                    // 191
                                                                                                                      // 192
  // If we already made the link then do no more                                                                      // 193
  if (self.collection) {                                                                                              // 194
    return self.collection;                                                                                           // 195
  }                                                                                                                   // 196
                                                                                                                      // 197
  // If we don't have a collectionName then there's not much to do, the file is                                       // 198
  // not mounted yet                                                                                                  // 199
  if (!self.collectionName) {                                                                                         // 200
    // Should not throw an error here - could be common that the file is not                                          // 201
    // yet mounted into a collection                                                                                  // 202
    return;                                                                                                           // 203
  }                                                                                                                   // 204
                                                                                                                      // 205
  // Link the collection to the file                                                                                  // 206
  self.collection = FS._collections[self.collectionName];                                                             // 207
                                                                                                                      // 208
  return self.collection; //possibly undefined, but that's desired behavior                                           // 209
};                                                                                                                    // 210
                                                                                                                      // 211
/**                                                                                                                   // 212
 * @method FS.File.prototype.isMounted                                                                                // 213
 * @public                                                                                                            // 214
 * @returns {FS.Collection} Returns attached collection or undefined if not mounted                                   // 215
 */                                                                                                                   // 216
FS.File.prototype.isMounted = FS.File.prototype.getCollection;                                                        // 217
                                                                                                                      // 218
/**                                                                                                                   // 219
 * @method FS.File.prototype.getFileRecord Returns the fileRecord                                                     // 220
 * @public                                                                                                            // 221
 * @returns {object} The filerecord                                                                                   // 222
 */                                                                                                                   // 223
FS.File.prototype.getFileRecord = function() {                                                                        // 224
  var self = this;                                                                                                    // 225
  // Check if this file object fileRecord is kept updated by Meteor, if so                                            // 226
  // return self                                                                                                      // 227
  if (self.controlledByDeps()) {                                                                                      // 228
    return self;                                                                                                      // 229
  }                                                                                                                   // 230
  // Go for manually updating the file record                                                                         // 231
  if (self.isMounted()) {                                                                                             // 232
    FS.debug && console.log('GET FILERECORD: ' + self._id);                                                           // 233
                                                                                                                      // 234
    // Return the fileRecord or an empty object                                                                       // 235
    var fileRecord = self.collection.files.findOne({_id: self._id}) || {};                                            // 236
    FS.Utility.extend(self, fileRecord);                                                                              // 237
    return fileRecord;                                                                                                // 238
  } else {                                                                                                            // 239
    // We return an empty object, this way users can still do `getRecord().size`                                      // 240
    // Without getting an error                                                                                       // 241
    return {};                                                                                                        // 242
  }                                                                                                                   // 243
};                                                                                                                    // 244
                                                                                                                      // 245
/**                                                                                                                   // 246
 * @method FS.File.prototype.update                                                                                   // 247
 * @public                                                                                                            // 248
 * @param {modifier} modifier                                                                                         // 249
 * @param {object} [options]                                                                                          // 250
 * @param {function} [callback]                                                                                       // 251
 *                                                                                                                    // 252
 * Updates the fileRecord.                                                                                            // 253
 */                                                                                                                   // 254
FS.File.prototype.update = function(modifier, options, callback) {                                                    // 255
  var self = this;                                                                                                    // 256
                                                                                                                      // 257
  FS.debug && console.log('UPDATE: ' + JSON.stringify(modifier));                                                     // 258
                                                                                                                      // 259
  // Make sure we have options and callback                                                                           // 260
  if (!callback && typeof options === 'function') {                                                                   // 261
    callback = options;                                                                                               // 262
    options = {};                                                                                                     // 263
  }                                                                                                                   // 264
  callback = callback || FS.Utility.defaultCallback;                                                                  // 265
                                                                                                                      // 266
  if (!self.isMounted()) {                                                                                            // 267
    callback(new Error("Cannot update a file that is not associated with a collection"));                             // 268
    return;                                                                                                           // 269
  }                                                                                                                   // 270
                                                                                                                      // 271
  // Call collection update - File record                                                                             // 272
  return self.collection.files.update({_id: self._id}, modifier, options, function(err, count) {                      // 273
    // Update the fileRecord if it was changed and on the client                                                      // 274
    // The server-side methods will pull the fileRecord if needed                                                     // 275
    if (count > 0 && Meteor.isClient)                                                                                 // 276
      self.getFileRecord();                                                                                           // 277
    // Call callback                                                                                                  // 278
    callback(err, count);                                                                                             // 279
  });                                                                                                                 // 280
};                                                                                                                    // 281
                                                                                                                      // 282
/**                                                                                                                   // 283
 * @method FS.File.prototype._saveChanges                                                                             // 284
 * @private                                                                                                           // 285
 * @param {String} [what] "_original" to save original info, or a store name to save info for that store, or saves everything
 *                                                                                                                    // 287
 * Updates the fileRecord from values currently set on the FS.File instance.                                          // 288
 */                                                                                                                   // 289
FS.File.prototype._saveChanges = function(what) {                                                                     // 290
  var self = this;                                                                                                    // 291
                                                                                                                      // 292
  if (!self.isMounted()) {                                                                                            // 293
    return;                                                                                                           // 294
  }                                                                                                                   // 295
                                                                                                                      // 296
  FS.debug && console.log("FS.File._saveChanges:", what || "all");                                                    // 297
                                                                                                                      // 298
  var mod = {$set: {}};                                                                                               // 299
  if (what === "_original") {                                                                                         // 300
    mod.$set.original = self.original;                                                                                // 301
  } else if (typeof what === "string") {                                                                              // 302
    var info = self.copies[what];                                                                                     // 303
    if (info) {                                                                                                       // 304
      mod.$set["copies." + what] = info;                                                                              // 305
    }                                                                                                                 // 306
  } else {                                                                                                            // 307
    mod.$set.original = self.original;                                                                                // 308
    mod.$set.copies = self.copies;                                                                                    // 309
  }                                                                                                                   // 310
                                                                                                                      // 311
  self.update(mod);                                                                                                   // 312
};                                                                                                                    // 313
                                                                                                                      // 314
/**                                                                                                                   // 315
 * @method FS.File.prototype.remove                                                                                   // 316
 * @public                                                                                                            // 317
 * @param {Function} [callback]                                                                                       // 318
 * @returns {number} Count                                                                                            // 319
 *                                                                                                                    // 320
 * Remove the current file from its FS.Collection                                                                     // 321
 */                                                                                                                   // 322
FS.File.prototype.remove = function(callback) {                                                                       // 323
  var self = this;                                                                                                    // 324
                                                                                                                      // 325
  FS.debug && console.log('REMOVE: ' + self._id);                                                                     // 326
                                                                                                                      // 327
  callback = callback || FS.Utility.defaultCallback;                                                                  // 328
                                                                                                                      // 329
  if (!self.isMounted()) {                                                                                            // 330
    callback(new Error("Cannot remove a file that is not associated with a collection"));                             // 331
    return;                                                                                                           // 332
  }                                                                                                                   // 333
                                                                                                                      // 334
  return self.collection.files.remove({_id: self._id}, function(err, res) {                                           // 335
    if (!err) {                                                                                                       // 336
      delete self._id;                                                                                                // 337
      delete self.collection;                                                                                         // 338
      delete self.collectionName;                                                                                     // 339
    }                                                                                                                 // 340
    callback(err, res);                                                                                               // 341
  });                                                                                                                 // 342
};                                                                                                                    // 343
                                                                                                                      // 344
/**                                                                                                                   // 345
 * @method FS.File.prototype.moveTo                                                                                   // 346
 * @param {FS.Collection} targetCollection                                                                            // 347
 * @private // Marked private until implemented                                                                       // 348
 * @todo Needs to be implemented                                                                                      // 349
 *                                                                                                                    // 350
 * Move the file from current collection to another collection                                                        // 351
 *                                                                                                                    // 352
 * > Note: Not yet implemented                                                                                        // 353
 */                                                                                                                   // 354
                                                                                                                      // 355
/**                                                                                                                   // 356
 * @method FS.File.prototype.getExtension Returns the lowercase file extension                                        // 357
 * @public                                                                                                            // 358
 * @deprecated Use the `extension` getter/setter method instead.                                                      // 359
 * @param {Object} [options]                                                                                          // 360
 * @param {String} [options.store] - Store name. Default is the original extension.                                   // 361
 * @returns {string} The extension eg.: `jpg` or if not found then an empty string ''                                 // 362
 */                                                                                                                   // 363
FS.File.prototype.getExtension = function(options) {                                                                  // 364
  var self = this;                                                                                                    // 365
  return self.extension(options);                                                                                     // 366
};                                                                                                                    // 367
                                                                                                                      // 368
function checkContentType(fsFile, storeName, startOfType) {                                                           // 369
  var type;                                                                                                           // 370
  if (storeName && fsFile.hasStored(storeName)) {                                                                     // 371
    type = fsFile.type({store: storeName});                                                                           // 372
  } else {                                                                                                            // 373
    type = fsFile.type();                                                                                             // 374
  }                                                                                                                   // 375
  if (typeof type === "string") {                                                                                     // 376
    return type.indexOf(startOfType) === 0;                                                                           // 377
  }                                                                                                                   // 378
  return false;                                                                                                       // 379
}                                                                                                                     // 380
                                                                                                                      // 381
/**                                                                                                                   // 382
 * @method FS.File.prototype.isImage Is it an image file?                                                             // 383
 * @public                                                                                                            // 384
 * @param {object} [options]                                                                                          // 385
 * @param {string} [options.store] The store we're interested in                                                      // 386
 *                                                                                                                    // 387
 * Returns true if the copy of this file in the specified store has an image                                          // 388
 * content type. If the file object is unmounted or doesn't have a copy for                                           // 389
 * the specified store, or if you don't specify a store, this method checks                                           // 390
 * the content type of the original file.                                                                             // 391
 */                                                                                                                   // 392
FS.File.prototype.isImage = function(options) {                                                                       // 393
  return checkContentType(this, (options || {}).store, 'image/');                                                     // 394
};                                                                                                                    // 395
                                                                                                                      // 396
/**                                                                                                                   // 397
 * @method FS.File.prototype.isVideo Is it a video file?                                                              // 398
 * @public                                                                                                            // 399
 * @param {object} [options]                                                                                          // 400
 * @param {string} [options.store] The store we're interested in                                                      // 401
 *                                                                                                                    // 402
 * Returns true if the copy of this file in the specified store has a video                                           // 403
 * content type. If the file object is unmounted or doesn't have a copy for                                           // 404
 * the specified store, or if you don't specify a store, this method checks                                           // 405
 * the content type of the original file.                                                                             // 406
 */                                                                                                                   // 407
FS.File.prototype.isVideo = function(options) {                                                                       // 408
  return checkContentType(this, (options || {}).store, 'video/');                                                     // 409
};                                                                                                                    // 410
                                                                                                                      // 411
/**                                                                                                                   // 412
 * @method FS.File.prototype.isAudio Is it an audio file?                                                             // 413
 * @public                                                                                                            // 414
 * @param {object} [options]                                                                                          // 415
 * @param {string} [options.store] The store we're interested in                                                      // 416
 *                                                                                                                    // 417
 * Returns true if the copy of this file in the specified store has an audio                                          // 418
 * content type. If the file object is unmounted or doesn't have a copy for                                           // 419
 * the specified store, or if you don't specify a store, this method checks                                           // 420
 * the content type of the original file.                                                                             // 421
 */                                                                                                                   // 422
FS.File.prototype.isAudio = function(options) {                                                                       // 423
  return checkContentType(this, (options || {}).store, 'audio/');                                                     // 424
};                                                                                                                    // 425
                                                                                                                      // 426
/**                                                                                                                   // 427
 * @method FS.File.prototype.formattedSize                                                                            // 428
 * @public                                                                                                            // 429
 * @param  {Object} options                                                                                           // 430
 * @param  {String} [options.store=none,display original file size] Which file do you want to get the size of?        // 431
 * @param  {String} [options.formatString='0.00 b'] The `numeral` format string to use.                               // 432
 * @return {String} The file size formatted as a human readable string and reactively updated.                        // 433
 *                                                                                                                    // 434
 * * You must add the `numeral` package to your app before you can use this method.                                   // 435
 * * If info is not found or a size can't be determined, it will show 0.                                              // 436
 */                                                                                                                   // 437
FS.File.prototype.formattedSize = function fsFileFormattedSize(options) {                                             // 438
  var self = this;                                                                                                    // 439
                                                                                                                      // 440
  if (typeof numeral !== "function")                                                                                  // 441
    throw new Error("You must add the numeral package if you call FS.File.formattedSize");                            // 442
                                                                                                                      // 443
  options = options || {};                                                                                            // 444
  options = options.hash || options;                                                                                  // 445
                                                                                                                      // 446
  var size = self.size(options) || 0;                                                                                 // 447
  return numeral(size).format(options.formatString || '0.00 b');                                                      // 448
};                                                                                                                    // 449
                                                                                                                      // 450
/**                                                                                                                   // 451
 * @method FS.File.prototype.isUploaded Is this file completely uploaded?                                             // 452
 * @public                                                                                                            // 453
 * @returns {boolean} True if the number of uploaded bytes is equal to the file size.                                 // 454
 */                                                                                                                   // 455
FS.File.prototype.isUploaded = function() {                                                                           // 456
  var self = this;                                                                                                    // 457
                                                                                                                      // 458
  // Make sure we use the updated file record                                                                         // 459
  self.getFileRecord();                                                                                               // 460
                                                                                                                      // 461
  return !!self.uploadedAt;                                                                                           // 462
};                                                                                                                    // 463
                                                                                                                      // 464
/**                                                                                                                   // 465
 * @method FS.File.prototype.hasStored                                                                                // 466
 * @public                                                                                                            // 467
 * @param {string} storeName Name of the store                                                                        // 468
 * @param {boolean} [optimistic=false] In case that the file record is not found, read below                          // 469
 * @returns {boolean} Is a version of this file stored in the given store?                                            // 470
 *                                                                                                                    // 471
 * > Note: If the file is not published to the client or simply not found:                                            // 472
 * this method cannot know for sure if it exists or not. The `optimistic`                                             // 473
 * param is the boolean value to return. Are we `optimistic` that the copy                                            // 474
 * could exist. This is the case in `FS.File.url` we are optimistic that the                                          // 475
 * copy supplied by the user exists.                                                                                  // 476
 */                                                                                                                   // 477
FS.File.prototype.hasStored = function(storeName, optimistic) {                                                       // 478
  var self = this;                                                                                                    // 479
  // Make sure we use the updated file record                                                                         // 480
  self.getFileRecord();                                                                                               // 481
  // If we havent the published data then                                                                             // 482
  if (FS.Utility.isEmpty(self.copies)) {                                                                              // 483
    return !!optimistic;                                                                                              // 484
  }                                                                                                                   // 485
  if (typeof storeName === "string") {                                                                                // 486
    // Return true only if the `key` property is present, which is not set until                                      // 487
    // storage is complete.                                                                                           // 488
    return !!(self.copies && self.copies[storeName] && self.copies[storeName].key);                                   // 489
  }                                                                                                                   // 490
  return false;                                                                                                       // 491
};                                                                                                                    // 492
                                                                                                                      // 493
// Backwards compatibility                                                                                            // 494
FS.File.prototype.hasCopy = FS.File.prototype.hasStored;                                                              // 495
                                                                                                                      // 496
/**                                                                                                                   // 497
 * @method FS.File.prototype.getCopyInfo                                                                              // 498
 * @public                                                                                                            // 499
 * @deprecated Use individual methods with `store` option instead.                                                    // 500
 * @param {string} storeName Name of the store for which to get copy info.                                            // 501
 * @returns {Object} The file details, e.g., name, size, key, etc., specific to the copy saved in this store.         // 502
 */                                                                                                                   // 503
FS.File.prototype.getCopyInfo = function(storeName) {                                                                 // 504
  var self = this;                                                                                                    // 505
  // Make sure we use the updated file record                                                                         // 506
  self.getFileRecord();                                                                                               // 507
  return (self.copies && self.copies[storeName]) || null;                                                             // 508
};                                                                                                                    // 509
                                                                                                                      // 510
/**                                                                                                                   // 511
 * @method FS.File.prototype._getInfo                                                                                 // 512
 * @private                                                                                                           // 513
 * @param {String} [storeName] Name of the store for which to get file info. Omit for original file details.          // 514
 * @param {Object} [options]                                                                                          // 515
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first?           // 516
 * @returns {Object} The file details, e.g., name, size, key, etc. If not found, returns an empty object.             // 517
 */                                                                                                                   // 518
FS.File.prototype._getInfo = function(storeName, options) {                                                           // 519
  var self = this;                                                                                                    // 520
  options = options || {};                                                                                            // 521
                                                                                                                      // 522
  if (options.updateFileRecordFirst) {                                                                                // 523
    // Make sure we use the updated file record                                                                       // 524
    self.getFileRecord();                                                                                             // 525
  }                                                                                                                   // 526
                                                                                                                      // 527
  if (storeName) {                                                                                                    // 528
    return (self.copies && self.copies[storeName]) || {};                                                             // 529
  } else {                                                                                                            // 530
    return self.original || {};                                                                                       // 531
  }                                                                                                                   // 532
};                                                                                                                    // 533
                                                                                                                      // 534
/**                                                                                                                   // 535
 * @method FS.File.prototype._setInfo                                                                                 // 536
 * @private                                                                                                           // 537
 * @param {String} storeName - Name of the store for which to set file info. Non-string will set original file details.
 * @param {String} property - Property to set                                                                         // 539
 * @param {String} value - New value for property                                                                     // 540
 * @param {Boolean} save - Should the new value be saved to the DB, too, or just set in the FS.File properties?       // 541
 * @returns {undefined}                                                                                               // 542
 */                                                                                                                   // 543
FS.File.prototype._setInfo = function(storeName, property, value, save) {                                             // 544
  var self = this;                                                                                                    // 545
  if (typeof storeName === "string") {                                                                                // 546
    self.copies = self.copies || {};                                                                                  // 547
    self.copies[storeName] = self.copies[storeName] || {};                                                            // 548
    self.copies[storeName][property] = value;                                                                         // 549
    save && self._saveChanges(storeName);                                                                             // 550
  } else {                                                                                                            // 551
    self.original = self.original || {};                                                                              // 552
    self.original[property] = value;                                                                                  // 553
    save && self._saveChanges("_original");                                                                           // 554
  }                                                                                                                   // 555
};                                                                                                                    // 556
                                                                                                                      // 557
/**                                                                                                                   // 558
 * @method FS.File.prototype.name                                                                                     // 559
 * @public                                                                                                            // 560
 * @param {String|null} [value] - If setting the name, specify the new name as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                          // 562
 * @param {Object} [options.store=none,original] - Get or set the name of the version of the file that was saved in this store. Default is the original file name.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @param {Boolean} [options.save=true] Save change to database? Applies to setter usage only.                        // 565
 * @returns {String|undefined} If setting, returns `undefined`. If getting, returns the file name.                    // 566
 */                                                                                                                   // 567
FS.File.prototype.name = function(value, options) {                                                                   // 568
  var self = this;                                                                                                    // 569
                                                                                                                      // 570
  if (!options && ((typeof value === "object" && value !== null) || typeof value === "undefined")) {                  // 571
    // GET                                                                                                            // 572
    options = value || {};                                                                                            // 573
    options = options.hash || options; // allow use as UI helper                                                      // 574
    return self._getInfo(options.store, options).name;                                                                // 575
  } else {                                                                                                            // 576
    // SET                                                                                                            // 577
    options = options || {};                                                                                          // 578
    return self._setInfo(options.store, 'name', value, typeof options.save === "boolean" ? options.save : true);      // 579
  }                                                                                                                   // 580
};                                                                                                                    // 581
                                                                                                                      // 582
/**                                                                                                                   // 583
 * @method FS.File.prototype.extension                                                                                // 584
 * @public                                                                                                            // 585
 * @param {String|null} [value] - If setting the extension, specify the new extension (without period) as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                          // 587
 * @param {Object} [options.store=none,original] - Get or set the extension of the version of the file that was saved in this store. Default is the original file extension.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @param {Boolean} [options.save=true] Save change to database? Applies to setter usage only.                        // 590
 * @returns {String|undefined} If setting, returns `undefined`. If getting, returns the file extension or an empty string if there isn't one.
 */                                                                                                                   // 592
FS.File.prototype.extension = function(value, options) {                                                              // 593
  var self = this;                                                                                                    // 594
                                                                                                                      // 595
  if (!options && ((typeof value === "object" && value !== null) || typeof value === "undefined")) {                  // 596
    // GET                                                                                                            // 597
    options = value || {};                                                                                            // 598
    return FS.Utility.getFileExtension(self.name(options) || '');                                                     // 599
  } else {                                                                                                            // 600
    // SET                                                                                                            // 601
    options = options || {};                                                                                          // 602
    var newName = FS.Utility.setFileExtension(self.name(options) || '', value);                                       // 603
    return self._setInfo(options.store, 'name', newName, typeof options.save === "boolean" ? options.save : true);    // 604
  }                                                                                                                   // 605
};                                                                                                                    // 606
                                                                                                                      // 607
/**                                                                                                                   // 608
 * @method FS.File.prototype.size                                                                                     // 609
 * @public                                                                                                            // 610
 * @param {Number} [value] - If setting the size, specify the new size in bytes as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                          // 612
 * @param {Object} [options.store=none,original] - Get or set the size of the version of the file that was saved in this store. Default is the original file size.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @param {Boolean} [options.save=true] Save change to database? Applies to setter usage only.                        // 615
 * @returns {Number|undefined} If setting, returns `undefined`. If getting, returns the file size.                    // 616
 */                                                                                                                   // 617
FS.File.prototype.size = function(value, options) {                                                                   // 618
  var self = this;                                                                                                    // 619
                                                                                                                      // 620
  if (!options && ((typeof value === "object" && value !== null) || typeof value === "undefined")) {                  // 621
    // GET                                                                                                            // 622
    options = value || {};                                                                                            // 623
    options = options.hash || options; // allow use as UI helper                                                      // 624
    return self._getInfo(options.store, options).size;                                                                // 625
  } else {                                                                                                            // 626
    // SET                                                                                                            // 627
    options = options || {};                                                                                          // 628
    return self._setInfo(options.store, 'size', value, typeof options.save === "boolean" ? options.save : true);      // 629
  }                                                                                                                   // 630
};                                                                                                                    // 631
                                                                                                                      // 632
/**                                                                                                                   // 633
 * @method FS.File.prototype.type                                                                                     // 634
 * @public                                                                                                            // 635
 * @param {String} [value] - If setting the type, specify the new type as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                          // 637
 * @param {Object} [options.store=none,original] - Get or set the type of the version of the file that was saved in this store. Default is the original file type.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @param {Boolean} [options.save=true] Save change to database? Applies to setter usage only.                        // 640
 * @returns {String|undefined} If setting, returns `undefined`. If getting, returns the file type.                    // 641
 */                                                                                                                   // 642
FS.File.prototype.type = function(value, options) {                                                                   // 643
  var self = this;                                                                                                    // 644
                                                                                                                      // 645
  if (!options && ((typeof value === "object" && value !== null) || typeof value === "undefined")) {                  // 646
    // GET                                                                                                            // 647
    options = value || {};                                                                                            // 648
    options = options.hash || options; // allow use as UI helper                                                      // 649
    return self._getInfo(options.store, options).type;                                                                // 650
  } else {                                                                                                            // 651
    // SET                                                                                                            // 652
    options = options || {};                                                                                          // 653
    return self._setInfo(options.store, 'type', value, typeof options.save === "boolean" ? options.save : true);      // 654
  }                                                                                                                   // 655
};                                                                                                                    // 656
                                                                                                                      // 657
/**                                                                                                                   // 658
 * @method FS.File.prototype.updatedAt                                                                                // 659
 * @public                                                                                                            // 660
 * @param {String} [value] - If setting updatedAt, specify the new date as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                          // 662
 * @param {Object} [options.store=none,original] - Get or set the last updated date for the version of the file that was saved in this store. Default is the original last updated date.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @param {Boolean} [options.save=true] Save change to database? Applies to setter usage only.                        // 665
 * @returns {String|undefined} If setting, returns `undefined`. If getting, returns the file's last updated date.     // 666
 */                                                                                                                   // 667
FS.File.prototype.updatedAt = function(value, options) {                                                              // 668
  var self = this;                                                                                                    // 669
                                                                                                                      // 670
  if (!options && ((typeof value === "object" && value !== null && !(value instanceof Date)) || typeof value === "undefined")) {
    // GET                                                                                                            // 672
    options = value || {};                                                                                            // 673
    options = options.hash || options; // allow use as UI helper                                                      // 674
    return self._getInfo(options.store, options).updatedAt;                                                           // 675
  } else {                                                                                                            // 676
    // SET                                                                                                            // 677
    options = options || {};                                                                                          // 678
    return self._setInfo(options.store, 'updatedAt', value, typeof options.save === "boolean" ? options.save : true); // 679
  }                                                                                                                   // 680
};                                                                                                                    // 681
                                                                                                                      // 682
function isBasicObject(obj) {                                                                                         // 683
  return (obj === Object(obj) && Object.getPrototypeOf(obj) === Object.prototype);                                    // 684
}                                                                                                                     // 685
                                                                                                                      // 686
// getPrototypeOf polyfill                                                                                            // 687
if (typeof Object.getPrototypeOf !== "function") {                                                                    // 688
  if (typeof "".__proto__ === "object") {                                                                             // 689
    Object.getPrototypeOf = function(object) {                                                                        // 690
      return object.__proto__;                                                                                        // 691
    };                                                                                                                // 692
  } else {                                                                                                            // 693
    Object.getPrototypeOf = function(object) {                                                                        // 694
      // May break if the constructor has been tampered with                                                          // 695
      return object.constructor.prototype;                                                                            // 696
    };                                                                                                                // 697
  }                                                                                                                   // 698
}                                                                                                                     // 699
                                                                                                                      // 700
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 710
}).call(this);                                                       // 711
                                                                     // 712
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cfs:file'] = {};

})();
