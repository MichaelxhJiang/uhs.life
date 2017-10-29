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
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/dbarrett_dropzonejs/.npm/package/node_modules/dropzone/dist/dropzone.js                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
/*                                                                                                                  // 2
 *                                                                                                                  // 3
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)                                                     // 4
 *                                                                                                                  // 5
 * Copyright (c) 2012, Matias Meno                                                                                  // 6
 *                                                                                                                  // 7
 * Permission is hereby granted, free of charge, to any person obtaining a copy                                     // 8
 * of this software and associated documentation files (the "Software"), to deal                                    // 9
 * in the Software without restriction, including without limitation the rights                                     // 10
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell                                        // 11
 * copies of the Software, and to permit persons to whom the Software is                                            // 12
 * furnished to do so, subject to the following conditions:                                                         // 13
 *                                                                                                                  // 14
 * The above copyright notice and this permission notice shall be included in                                       // 15
 * all copies or substantial portions of the Software.                                                              // 16
 *                                                                                                                  // 17
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR                                       // 18
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,                                         // 19
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE                                      // 20
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                                           // 21
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,                                    // 22
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN                                        // 23
 * THE SOFTWARE.                                                                                                    // 24
 *                                                                                                                  // 25
 */                                                                                                                 // 26
                                                                                                                    // 27
(function() {                                                                                                       // 28
  var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,             // 29
    __slice = [].slice,                                                                                             // 30
    __hasProp = {}.hasOwnProperty,                                                                                  // 31
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
                                                                                                                    // 33
  noop = function() {};                                                                                             // 34
                                                                                                                    // 35
  Emitter = (function() {                                                                                           // 36
    function Emitter() {}                                                                                           // 37
                                                                                                                    // 38
    Emitter.prototype.addEventListener = Emitter.prototype.on;                                                      // 39
                                                                                                                    // 40
    Emitter.prototype.on = function(event, fn) {                                                                    // 41
      this._callbacks = this._callbacks || {};                                                                      // 42
      if (!this._callbacks[event]) {                                                                                // 43
        this._callbacks[event] = [];                                                                                // 44
      }                                                                                                             // 45
      this._callbacks[event].push(fn);                                                                              // 46
      return this;                                                                                                  // 47
    };                                                                                                              // 48
                                                                                                                    // 49
    Emitter.prototype.emit = function() {                                                                           // 50
      var args, callback, callbacks, event, _i, _len;                                                               // 51
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];                         // 52
      this._callbacks = this._callbacks || {};                                                                      // 53
      callbacks = this._callbacks[event];                                                                           // 54
      if (callbacks) {                                                                                              // 55
        for (_i = 0, _len = callbacks.length; _i < _len; _i++) {                                                    // 56
          callback = callbacks[_i];                                                                                 // 57
          callback.apply(this, args);                                                                               // 58
        }                                                                                                           // 59
      }                                                                                                             // 60
      return this;                                                                                                  // 61
    };                                                                                                              // 62
                                                                                                                    // 63
    Emitter.prototype.removeListener = Emitter.prototype.off;                                                       // 64
                                                                                                                    // 65
    Emitter.prototype.removeAllListeners = Emitter.prototype.off;                                                   // 66
                                                                                                                    // 67
    Emitter.prototype.removeEventListener = Emitter.prototype.off;                                                  // 68
                                                                                                                    // 69
    Emitter.prototype.off = function(event, fn) {                                                                   // 70
      var callback, callbacks, i, _i, _len;                                                                         // 71
      if (!this._callbacks || arguments.length === 0) {                                                             // 72
        this._callbacks = {};                                                                                       // 73
        return this;                                                                                                // 74
      }                                                                                                             // 75
      callbacks = this._callbacks[event];                                                                           // 76
      if (!callbacks) {                                                                                             // 77
        return this;                                                                                                // 78
      }                                                                                                             // 79
      if (arguments.length === 1) {                                                                                 // 80
        delete this._callbacks[event];                                                                              // 81
        return this;                                                                                                // 82
      }                                                                                                             // 83
      for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {                                              // 84
        callback = callbacks[i];                                                                                    // 85
        if (callback === fn) {                                                                                      // 86
          callbacks.splice(i, 1);                                                                                   // 87
          break;                                                                                                    // 88
        }                                                                                                           // 89
      }                                                                                                             // 90
      return this;                                                                                                  // 91
    };                                                                                                              // 92
                                                                                                                    // 93
    return Emitter;                                                                                                 // 94
                                                                                                                    // 95
  })();                                                                                                             // 96
                                                                                                                    // 97
  Dropzone = (function(_super) {                                                                                    // 98
    var extend, resolveOption;                                                                                      // 99
                                                                                                                    // 100
    __extends(Dropzone, _super);                                                                                    // 101
                                                                                                                    // 102
    Dropzone.prototype.Emitter = Emitter;                                                                           // 103
                                                                                                                    // 104
                                                                                                                    // 105
    /*                                                                                                              // 106
    This is a list of all available events you can register on a dropzone object.                                   // 107
                                                                                                                    // 108
    You can register an event handler like this:                                                                    // 109
                                                                                                                    // 110
        dropzone.on("dragEnter", function() { });                                                                   // 111
     */                                                                                                             // 112
                                                                                                                    // 113
    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
                                                                                                                    // 115
    Dropzone.prototype.defaultOptions = {                                                                           // 116
      url: null,                                                                                                    // 117
      method: "post",                                                                                               // 118
      withCredentials: false,                                                                                       // 119
      parallelUploads: 2,                                                                                           // 120
      uploadMultiple: false,                                                                                        // 121
      maxFilesize: 256,                                                                                             // 122
      paramName: "file",                                                                                            // 123
      createImageThumbnails: true,                                                                                  // 124
      maxThumbnailFilesize: 10,                                                                                     // 125
      thumbnailWidth: 120,                                                                                          // 126
      thumbnailHeight: 120,                                                                                         // 127
      filesizeBase: 1000,                                                                                           // 128
      maxFiles: null,                                                                                               // 129
      params: {},                                                                                                   // 130
      clickable: true,                                                                                              // 131
      ignoreHiddenFiles: true,                                                                                      // 132
      acceptedFiles: null,                                                                                          // 133
      acceptedMimeTypes: null,                                                                                      // 134
      autoProcessQueue: true,                                                                                       // 135
      autoQueue: true,                                                                                              // 136
      addRemoveLinks: false,                                                                                        // 137
      previewsContainer: null,                                                                                      // 138
      hiddenInputContainer: "body",                                                                                 // 139
      capture: null,                                                                                                // 140
      dictDefaultMessage: "Drop files here to upload",                                                              // 141
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",                               // 142
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",          // 143
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",                       // 144
      dictInvalidFileType: "You can't upload files of this type.",                                                  // 145
      dictResponseError: "Server responded with {{statusCode}} code.",                                              // 146
      dictCancelUpload: "Cancel upload",                                                                            // 147
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",                                 // 148
      dictRemoveFile: "Remove file",                                                                                // 149
      dictRemoveFileConfirmation: null,                                                                             // 150
      dictMaxFilesExceeded: "You can not upload any more files.",                                                   // 151
      accept: function(file, done) {                                                                                // 152
        return done();                                                                                              // 153
      },                                                                                                            // 154
      init: function() {                                                                                            // 155
        return noop;                                                                                                // 156
      },                                                                                                            // 157
      forceFallback: false,                                                                                         // 158
      fallback: function() {                                                                                        // 159
        var child, messageElement, span, _i, _len, _ref;                                                            // 160
        this.element.className = "" + this.element.className + " dz-browser-not-supported";                         // 161
        _ref = this.element.getElementsByTagName("div");                                                            // 162
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                         // 163
          child = _ref[_i];                                                                                         // 164
          if (/(^| )dz-message($| )/.test(child.className)) {                                                       // 165
            messageElement = child;                                                                                 // 166
            child.className = "dz-message";                                                                         // 167
            continue;                                                                                               // 168
          }                                                                                                         // 169
        }                                                                                                           // 170
        if (!messageElement) {                                                                                      // 171
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");                 // 172
          this.element.appendChild(messageElement);                                                                 // 173
        }                                                                                                           // 174
        span = messageElement.getElementsByTagName("span")[0];                                                      // 175
        if (span) {                                                                                                 // 176
          if (span.textContent != null) {                                                                           // 177
            span.textContent = this.options.dictFallbackMessage;                                                    // 178
          } else if (span.innerText != null) {                                                                      // 179
            span.innerText = this.options.dictFallbackMessage;                                                      // 180
          }                                                                                                         // 181
        }                                                                                                           // 182
        return this.element.appendChild(this.getFallbackForm());                                                    // 183
      },                                                                                                            // 184
      resize: function(file) {                                                                                      // 185
        var info, srcRatio, trgRatio;                                                                               // 186
        info = {                                                                                                    // 187
          srcX: 0,                                                                                                  // 188
          srcY: 0,                                                                                                  // 189
          srcWidth: file.width,                                                                                     // 190
          srcHeight: file.height                                                                                    // 191
        };                                                                                                          // 192
        srcRatio = file.width / file.height;                                                                        // 193
        info.optWidth = this.options.thumbnailWidth;                                                                // 194
        info.optHeight = this.options.thumbnailHeight;                                                              // 195
        if ((info.optWidth == null) && (info.optHeight == null)) {                                                  // 196
          info.optWidth = info.srcWidth;                                                                            // 197
          info.optHeight = info.srcHeight;                                                                          // 198
        } else if (info.optWidth == null) {                                                                         // 199
          info.optWidth = srcRatio * info.optHeight;                                                                // 200
        } else if (info.optHeight == null) {                                                                        // 201
          info.optHeight = (1 / srcRatio) * info.optWidth;                                                          // 202
        }                                                                                                           // 203
        trgRatio = info.optWidth / info.optHeight;                                                                  // 204
        if (file.height < info.optHeight || file.width < info.optWidth) {                                           // 205
          info.trgHeight = info.srcHeight;                                                                          // 206
          info.trgWidth = info.srcWidth;                                                                            // 207
        } else {                                                                                                    // 208
          if (srcRatio > trgRatio) {                                                                                // 209
            info.srcHeight = file.height;                                                                           // 210
            info.srcWidth = info.srcHeight * trgRatio;                                                              // 211
          } else {                                                                                                  // 212
            info.srcWidth = file.width;                                                                             // 213
            info.srcHeight = info.srcWidth / trgRatio;                                                              // 214
          }                                                                                                         // 215
        }                                                                                                           // 216
        info.srcX = (file.width - info.srcWidth) / 2;                                                               // 217
        info.srcY = (file.height - info.srcHeight) / 2;                                                             // 218
        return info;                                                                                                // 219
      },                                                                                                            // 220
                                                                                                                    // 221
      /*                                                                                                            // 222
      Those functions register themselves to the events on init and handle all                                      // 223
      the user interface specific stuff. Overwriting them won't break the upload                                    // 224
      but can break the way it's displayed.                                                                         // 225
      You can overwrite them if you don't like the default behavior. If you just                                    // 226
      want to add an additional event handler, register it on the dropzone object                                   // 227
      and don't overwrite those options.                                                                            // 228
       */                                                                                                           // 229
      drop: function(e) {                                                                                           // 230
        return this.element.classList.remove("dz-drag-hover");                                                      // 231
      },                                                                                                            // 232
      dragstart: noop,                                                                                              // 233
      dragend: function(e) {                                                                                        // 234
        return this.element.classList.remove("dz-drag-hover");                                                      // 235
      },                                                                                                            // 236
      dragenter: function(e) {                                                                                      // 237
        return this.element.classList.add("dz-drag-hover");                                                         // 238
      },                                                                                                            // 239
      dragover: function(e) {                                                                                       // 240
        return this.element.classList.add("dz-drag-hover");                                                         // 241
      },                                                                                                            // 242
      dragleave: function(e) {                                                                                      // 243
        return this.element.classList.remove("dz-drag-hover");                                                      // 244
      },                                                                                                            // 245
      paste: noop,                                                                                                  // 246
      reset: function() {                                                                                           // 247
        return this.element.classList.remove("dz-started");                                                         // 248
      },                                                                                                            // 249
      addedfile: function(file) {                                                                                   // 250
        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;        // 251
        if (this.element === this.previewsContainer) {                                                              // 252
          this.element.classList.add("dz-started");                                                                 // 253
        }                                                                                                           // 254
        if (this.previewsContainer) {                                                                               // 255
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());                        // 256
          file.previewTemplate = file.previewElement;                                                               // 257
          this.previewsContainer.appendChild(file.previewElement);                                                  // 258
          _ref = file.previewElement.querySelectorAll("[data-dz-name]");                                            // 259
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 260
            node = _ref[_i];                                                                                        // 261
            node.textContent = file.name;                                                                           // 262
          }                                                                                                         // 263
          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");                                           // 264
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {                                                    // 265
            node = _ref1[_j];                                                                                       // 266
            node.innerHTML = this.filesize(file.size);                                                              // 267
          }                                                                                                         // 268
          if (this.options.addRemoveLinks) {                                                                        // 269
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);                                                      // 271
          }                                                                                                         // 272
          removeFileEvent = (function(_this) {                                                                      // 273
            return function(e) {                                                                                    // 274
              e.preventDefault();                                                                                   // 275
              e.stopPropagation();                                                                                  // 276
              if (file.status === Dropzone.UPLOADING) {                                                             // 277
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {                    // 278
                  return _this.removeFile(file);                                                                    // 279
                });                                                                                                 // 280
              } else {                                                                                              // 281
                if (_this.options.dictRemoveFileConfirmation) {                                                     // 282
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {                    // 283
                    return _this.removeFile(file);                                                                  // 284
                  });                                                                                               // 285
                } else {                                                                                            // 286
                  return _this.removeFile(file);                                                                    // 287
                }                                                                                                   // 288
              }                                                                                                     // 289
            };                                                                                                      // 290
          })(this);                                                                                                 // 291
          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");                                         // 292
          _results = [];                                                                                            // 293
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {                                                    // 294
            removeLink = _ref2[_k];                                                                                 // 295
            _results.push(removeLink.addEventListener("click", removeFileEvent));                                   // 296
          }                                                                                                         // 297
          return _results;                                                                                          // 298
        }                                                                                                           // 299
      },                                                                                                            // 300
      removedfile: function(file) {                                                                                 // 301
        var _ref;                                                                                                   // 302
        if (file.previewElement) {                                                                                  // 303
          if ((_ref = file.previewElement) != null) {                                                               // 304
            _ref.parentNode.removeChild(file.previewElement);                                                       // 305
          }                                                                                                         // 306
        }                                                                                                           // 307
        return this._updateMaxFilesReachedClass();                                                                  // 308
      },                                                                                                            // 309
      thumbnail: function(file, dataUrl) {                                                                          // 310
        var thumbnailElement, _i, _len, _ref;                                                                       // 311
        if (file.previewElement) {                                                                                  // 312
          file.previewElement.classList.remove("dz-file-preview");                                                  // 313
          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");                                       // 314
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 315
            thumbnailElement = _ref[_i];                                                                            // 316
            thumbnailElement.alt = file.name;                                                                       // 317
            thumbnailElement.src = dataUrl;                                                                         // 318
          }                                                                                                         // 319
          return setTimeout(((function(_this) {                                                                     // 320
            return function() {                                                                                     // 321
              return file.previewElement.classList.add("dz-image-preview");                                         // 322
            };                                                                                                      // 323
          })(this)), 1);                                                                                            // 324
        }                                                                                                           // 325
      },                                                                                                            // 326
      error: function(file, message) {                                                                              // 327
        var node, _i, _len, _ref, _results;                                                                         // 328
        if (file.previewElement) {                                                                                  // 329
          file.previewElement.classList.add("dz-error");                                                            // 330
          if (typeof message !== "String" && message.error) {                                                       // 331
            message = message.error;                                                                                // 332
          }                                                                                                         // 333
          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");                                    // 334
          _results = [];                                                                                            // 335
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 336
            node = _ref[_i];                                                                                        // 337
            _results.push(node.textContent = message);                                                              // 338
          }                                                                                                         // 339
          return _results;                                                                                          // 340
        }                                                                                                           // 341
      },                                                                                                            // 342
      errormultiple: noop,                                                                                          // 343
      processing: function(file) {                                                                                  // 344
        if (file.previewElement) {                                                                                  // 345
          file.previewElement.classList.add("dz-processing");                                                       // 346
          if (file._removeLink) {                                                                                   // 347
            return file._removeLink.textContent = this.options.dictCancelUpload;                                    // 348
          }                                                                                                         // 349
        }                                                                                                           // 350
      },                                                                                                            // 351
      processingmultiple: noop,                                                                                     // 352
      uploadprogress: function(file, progress, bytesSent) {                                                         // 353
        var node, _i, _len, _ref, _results;                                                                         // 354
        if (file.previewElement) {                                                                                  // 355
          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");                                  // 356
          _results = [];                                                                                            // 357
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 358
            node = _ref[_i];                                                                                        // 359
            if (node.nodeName === 'PROGRESS') {                                                                     // 360
              _results.push(node.value = progress);                                                                 // 361
            } else {                                                                                                // 362
              _results.push(node.style.width = "" + progress + "%");                                                // 363
            }                                                                                                       // 364
          }                                                                                                         // 365
          return _results;                                                                                          // 366
        }                                                                                                           // 367
      },                                                                                                            // 368
      totaluploadprogress: noop,                                                                                    // 369
      sending: noop,                                                                                                // 370
      sendingmultiple: noop,                                                                                        // 371
      success: function(file) {                                                                                     // 372
        if (file.previewElement) {                                                                                  // 373
          return file.previewElement.classList.add("dz-success");                                                   // 374
        }                                                                                                           // 375
      },                                                                                                            // 376
      successmultiple: noop,                                                                                        // 377
      canceled: function(file) {                                                                                    // 378
        return this.emit("error", file, "Upload canceled.");                                                        // 379
      },                                                                                                            // 380
      canceledmultiple: noop,                                                                                       // 381
      complete: function(file) {                                                                                    // 382
        if (file._removeLink) {                                                                                     // 383
          file._removeLink.textContent = this.options.dictRemoveFile;                                               // 384
        }                                                                                                           // 385
        if (file.previewElement) {                                                                                  // 386
          return file.previewElement.classList.add("dz-complete");                                                  // 387
        }                                                                                                           // 388
      },                                                                                                            // 389
      completemultiple: noop,                                                                                       // 390
      maxfilesexceeded: noop,                                                                                       // 391
      maxfilesreached: noop,                                                                                        // 392
      queuecomplete: noop,                                                                                          // 393
      addedfiles: noop,                                                                                             // 394
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
    };                                                                                                              // 396
                                                                                                                    // 397
    extend = function() {                                                                                           // 398
      var key, object, objects, target, val, _i, _len;                                                              // 399
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];                     // 400
      for (_i = 0, _len = objects.length; _i < _len; _i++) {                                                        // 401
        object = objects[_i];                                                                                       // 402
        for (key in object) {                                                                                       // 403
          val = object[key];                                                                                        // 404
          target[key] = val;                                                                                        // 405
        }                                                                                                           // 406
      }                                                                                                             // 407
      return target;                                                                                                // 408
    };                                                                                                              // 409
                                                                                                                    // 410
    function Dropzone(element, options) {                                                                           // 411
      var elementOptions, fallback, _ref;                                                                           // 412
      this.element = element;                                                                                       // 413
      this.version = Dropzone.version;                                                                              // 414
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");                // 415
      this.clickableElements = [];                                                                                  // 416
      this.listeners = [];                                                                                          // 417
      this.files = [];                                                                                              // 418
      if (typeof this.element === "string") {                                                                       // 419
        this.element = document.querySelector(this.element);                                                        // 420
      }                                                                                                             // 421
      if (!(this.element && (this.element.nodeType != null))) {                                                     // 422
        throw new Error("Invalid dropzone element.");                                                               // 423
      }                                                                                                             // 424
      if (this.element.dropzone) {                                                                                  // 425
        throw new Error("Dropzone already attached.");                                                              // 426
      }                                                                                                             // 427
      Dropzone.instances.push(this);                                                                                // 428
      this.element.dropzone = this;                                                                                 // 429
      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};                       // 430
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});               // 431
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {                                           // 432
        return this.options.fallback.call(this);                                                                    // 433
      }                                                                                                             // 434
      if (this.options.url == null) {                                                                               // 435
        this.options.url = this.element.getAttribute("action");                                                     // 436
      }                                                                                                             // 437
      if (!this.options.url) {                                                                                      // 438
        throw new Error("No URL provided.");                                                                        // 439
      }                                                                                                             // 440
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {                                           // 441
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }                                                                                                             // 443
      if (this.options.acceptedMimeTypes) {                                                                         // 444
        this.options.acceptedFiles = this.options.acceptedMimeTypes;                                                // 445
        delete this.options.acceptedMimeTypes;                                                                      // 446
      }                                                                                                             // 447
      this.options.method = this.options.method.toUpperCase();                                                      // 448
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {                                         // 449
        fallback.parentNode.removeChild(fallback);                                                                  // 450
      }                                                                                                             // 451
      if (this.options.previewsContainer !== false) {                                                               // 452
        if (this.options.previewsContainer) {                                                                       // 453
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");        // 454
        } else {                                                                                                    // 455
          this.previewsContainer = this.element;                                                                    // 456
        }                                                                                                           // 457
      }                                                                                                             // 458
      if (this.options.clickable) {                                                                                 // 459
        if (this.options.clickable === true) {                                                                      // 460
          this.clickableElements = [this.element];                                                                  // 461
        } else {                                                                                                    // 462
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");                       // 463
        }                                                                                                           // 464
      }                                                                                                             // 465
      this.init();                                                                                                  // 466
    }                                                                                                               // 467
                                                                                                                    // 468
    Dropzone.prototype.getAcceptedFiles = function() {                                                              // 469
      var file, _i, _len, _ref, _results;                                                                           // 470
      _ref = this.files;                                                                                            // 471
      _results = [];                                                                                                // 472
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 473
        file = _ref[_i];                                                                                            // 474
        if (file.accepted) {                                                                                        // 475
          _results.push(file);                                                                                      // 476
        }                                                                                                           // 477
      }                                                                                                             // 478
      return _results;                                                                                              // 479
    };                                                                                                              // 480
                                                                                                                    // 481
    Dropzone.prototype.getRejectedFiles = function() {                                                              // 482
      var file, _i, _len, _ref, _results;                                                                           // 483
      _ref = this.files;                                                                                            // 484
      _results = [];                                                                                                // 485
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 486
        file = _ref[_i];                                                                                            // 487
        if (!file.accepted) {                                                                                       // 488
          _results.push(file);                                                                                      // 489
        }                                                                                                           // 490
      }                                                                                                             // 491
      return _results;                                                                                              // 492
    };                                                                                                              // 493
                                                                                                                    // 494
    Dropzone.prototype.getFilesWithStatus = function(status) {                                                      // 495
      var file, _i, _len, _ref, _results;                                                                           // 496
      _ref = this.files;                                                                                            // 497
      _results = [];                                                                                                // 498
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 499
        file = _ref[_i];                                                                                            // 500
        if (file.status === status) {                                                                               // 501
          _results.push(file);                                                                                      // 502
        }                                                                                                           // 503
      }                                                                                                             // 504
      return _results;                                                                                              // 505
    };                                                                                                              // 506
                                                                                                                    // 507
    Dropzone.prototype.getQueuedFiles = function() {                                                                // 508
      return this.getFilesWithStatus(Dropzone.QUEUED);                                                              // 509
    };                                                                                                              // 510
                                                                                                                    // 511
    Dropzone.prototype.getUploadingFiles = function() {                                                             // 512
      return this.getFilesWithStatus(Dropzone.UPLOADING);                                                           // 513
    };                                                                                                              // 514
                                                                                                                    // 515
    Dropzone.prototype.getAddedFiles = function() {                                                                 // 516
      return this.getFilesWithStatus(Dropzone.ADDED);                                                               // 517
    };                                                                                                              // 518
                                                                                                                    // 519
    Dropzone.prototype.getActiveFiles = function() {                                                                // 520
      var file, _i, _len, _ref, _results;                                                                           // 521
      _ref = this.files;                                                                                            // 522
      _results = [];                                                                                                // 523
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 524
        file = _ref[_i];                                                                                            // 525
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {                                // 526
          _results.push(file);                                                                                      // 527
        }                                                                                                           // 528
      }                                                                                                             // 529
      return _results;                                                                                              // 530
    };                                                                                                              // 531
                                                                                                                    // 532
    Dropzone.prototype.init = function() {                                                                          // 533
      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;                                    // 534
      if (this.element.tagName === "form") {                                                                        // 535
        this.element.setAttribute("enctype", "multipart/form-data");                                                // 536
      }                                                                                                             // 537
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {              // 538
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }                                                                                                             // 540
      if (this.clickableElements.length) {                                                                          // 541
        setupHiddenFileInput = (function(_this) {                                                                   // 542
          return function() {                                                                                       // 543
            if (_this.hiddenFileInput) {                                                                            // 544
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);                                  // 545
            }                                                                                                       // 546
            _this.hiddenFileInput = document.createElement("input");                                                // 547
            _this.hiddenFileInput.setAttribute("type", "file");                                                     // 548
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {                                   // 549
              _this.hiddenFileInput.setAttribute("multiple", "multiple");                                           // 550
            }                                                                                                       // 551
            _this.hiddenFileInput.className = "dz-hidden-input";                                                    // 552
            if (_this.options.acceptedFiles != null) {                                                              // 553
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);                            // 554
            }                                                                                                       // 555
            if (_this.options.capture != null) {                                                                    // 556
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);                                 // 557
            }                                                                                                       // 558
            _this.hiddenFileInput.style.visibility = "hidden";                                                      // 559
            _this.hiddenFileInput.style.position = "absolute";                                                      // 560
            _this.hiddenFileInput.style.top = "0";                                                                  // 561
            _this.hiddenFileInput.style.left = "0";                                                                 // 562
            _this.hiddenFileInput.style.height = "0";                                                               // 563
            _this.hiddenFileInput.style.width = "0";                                                                // 564
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);          // 565
            return _this.hiddenFileInput.addEventListener("change", function() {                                    // 566
              var file, files, _i, _len;                                                                            // 567
              files = _this.hiddenFileInput.files;                                                                  // 568
              if (files.length) {                                                                                   // 569
                for (_i = 0, _len = files.length; _i < _len; _i++) {                                                // 570
                  file = files[_i];                                                                                 // 571
                  _this.addFile(file);                                                                              // 572
                }                                                                                                   // 573
              }                                                                                                     // 574
              _this.emit("addedfiles", files);                                                                      // 575
              return setupHiddenFileInput();                                                                        // 576
            });                                                                                                     // 577
          };                                                                                                        // 578
        })(this);                                                                                                   // 579
        setupHiddenFileInput();                                                                                     // 580
      }                                                                                                             // 581
      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;                                             // 582
      _ref1 = this.events;                                                                                          // 583
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {                                                          // 584
        eventName = _ref1[_i];                                                                                      // 585
        this.on(eventName, this.options[eventName]);                                                                // 586
      }                                                                                                             // 587
      this.on("uploadprogress", (function(_this) {                                                                  // 588
        return function() {                                                                                         // 589
          return _this.updateTotalUploadProgress();                                                                 // 590
        };                                                                                                          // 591
      })(this));                                                                                                    // 592
      this.on("removedfile", (function(_this) {                                                                     // 593
        return function() {                                                                                         // 594
          return _this.updateTotalUploadProgress();                                                                 // 595
        };                                                                                                          // 596
      })(this));                                                                                                    // 597
      this.on("canceled", (function(_this) {                                                                        // 598
        return function(file) {                                                                                     // 599
          return _this.emit("complete", file);                                                                      // 600
        };                                                                                                          // 601
      })(this));                                                                                                    // 602
      this.on("complete", (function(_this) {                                                                        // 603
        return function(file) {                                                                                     // 604
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {                                                                         // 606
              return _this.emit("queuecomplete");                                                                   // 607
            }), 0);                                                                                                 // 608
          }                                                                                                         // 609
        };                                                                                                          // 610
      })(this));                                                                                                    // 611
      noPropagation = function(e) {                                                                                 // 612
        e.stopPropagation();                                                                                        // 613
        if (e.preventDefault) {                                                                                     // 614
          return e.preventDefault();                                                                                // 615
        } else {                                                                                                    // 616
          return e.returnValue = false;                                                                             // 617
        }                                                                                                           // 618
      };                                                                                                            // 619
      this.listeners = [                                                                                            // 620
        {                                                                                                           // 621
          element: this.element,                                                                                    // 622
          events: {                                                                                                 // 623
            "dragstart": (function(_this) {                                                                         // 624
              return function(e) {                                                                                  // 625
                return _this.emit("dragstart", e);                                                                  // 626
              };                                                                                                    // 627
            })(this),                                                                                               // 628
            "dragenter": (function(_this) {                                                                         // 629
              return function(e) {                                                                                  // 630
                noPropagation(e);                                                                                   // 631
                return _this.emit("dragenter", e);                                                                  // 632
              };                                                                                                    // 633
            })(this),                                                                                               // 634
            "dragover": (function(_this) {                                                                          // 635
              return function(e) {                                                                                  // 636
                var efct;                                                                                           // 637
                try {                                                                                               // 638
                  efct = e.dataTransfer.effectAllowed;                                                              // 639
                } catch (_error) {}                                                                                 // 640
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';               // 641
                noPropagation(e);                                                                                   // 642
                return _this.emit("dragover", e);                                                                   // 643
              };                                                                                                    // 644
            })(this),                                                                                               // 645
            "dragleave": (function(_this) {                                                                         // 646
              return function(e) {                                                                                  // 647
                return _this.emit("dragleave", e);                                                                  // 648
              };                                                                                                    // 649
            })(this),                                                                                               // 650
            "drop": (function(_this) {                                                                              // 651
              return function(e) {                                                                                  // 652
                noPropagation(e);                                                                                   // 653
                return _this.drop(e);                                                                               // 654
              };                                                                                                    // 655
            })(this),                                                                                               // 656
            "dragend": (function(_this) {                                                                           // 657
              return function(e) {                                                                                  // 658
                return _this.emit("dragend", e);                                                                    // 659
              };                                                                                                    // 660
            })(this)                                                                                                // 661
          }                                                                                                         // 662
        }                                                                                                           // 663
      ];                                                                                                            // 664
      this.clickableElements.forEach((function(_this) {                                                             // 665
        return function(clickableElement) {                                                                         // 666
          return _this.listeners.push({                                                                             // 667
            element: clickableElement,                                                                              // 668
            events: {                                                                                               // 669
              "click": function(evt) {                                                                              // 670
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();                                                                    // 672
                }                                                                                                   // 673
                return true;                                                                                        // 674
              }                                                                                                     // 675
            }                                                                                                       // 676
          });                                                                                                       // 677
        };                                                                                                          // 678
      })(this));                                                                                                    // 679
      this.enable();                                                                                                // 680
      return this.options.init.call(this);                                                                          // 681
    };                                                                                                              // 682
                                                                                                                    // 683
    Dropzone.prototype.destroy = function() {                                                                       // 684
      var _ref;                                                                                                     // 685
      this.disable();                                                                                               // 686
      this.removeAllFiles(true);                                                                                    // 687
      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {                                       // 688
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);                                          // 689
        this.hiddenFileInput = null;                                                                                // 690
      }                                                                                                             // 691
      delete this.element.dropzone;                                                                                 // 692
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);                                        // 693
    };                                                                                                              // 694
                                                                                                                    // 695
    Dropzone.prototype.updateTotalUploadProgress = function() {                                                     // 696
      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;                       // 697
      totalBytesSent = 0;                                                                                           // 698
      totalBytes = 0;                                                                                               // 699
      activeFiles = this.getActiveFiles();                                                                          // 700
      if (activeFiles.length) {                                                                                     // 701
        _ref = this.getActiveFiles();                                                                               // 702
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                         // 703
          file = _ref[_i];                                                                                          // 704
          totalBytesSent += file.upload.bytesSent;                                                                  // 705
          totalBytes += file.upload.total;                                                                          // 706
        }                                                                                                           // 707
        totalUploadProgress = 100 * totalBytesSent / totalBytes;                                                    // 708
      } else {                                                                                                      // 709
        totalUploadProgress = 100;                                                                                  // 710
      }                                                                                                             // 711
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);                     // 712
    };                                                                                                              // 713
                                                                                                                    // 714
    Dropzone.prototype._getParamName = function(n) {                                                                // 715
      if (typeof this.options.paramName === "function") {                                                           // 716
        return this.options.paramName(n);                                                                           // 717
      } else {                                                                                                      // 718
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");                    // 719
      }                                                                                                             // 720
    };                                                                                                              // 721
                                                                                                                    // 722
    Dropzone.prototype.getFallbackForm = function() {                                                               // 723
      var existingFallback, fields, fieldsString, form;                                                             // 724
      if (existingFallback = this.getExistingFallback()) {                                                          // 725
        return existingFallback;                                                                                    // 726
      }                                                                                                             // 727
      fieldsString = "<div class=\"dz-fallback\">";                                                                 // 728
      if (this.options.dictFallbackText) {                                                                          // 729
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";                                             // 730
      }                                                                                                             // 731
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);                                                                // 733
      if (this.element.tagName !== "FORM") {                                                                        // 734
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);                                                                                   // 736
      } else {                                                                                                      // 737
        this.element.setAttribute("enctype", "multipart/form-data");                                                // 738
        this.element.setAttribute("method", this.options.method);                                                   // 739
      }                                                                                                             // 740
      return form != null ? form : fields;                                                                          // 741
    };                                                                                                              // 742
                                                                                                                    // 743
    Dropzone.prototype.getExistingFallback = function() {                                                           // 744
      var fallback, getFallback, tagName, _i, _len, _ref;                                                           // 745
      getFallback = function(elements) {                                                                            // 746
        var el, _i, _len;                                                                                           // 747
        for (_i = 0, _len = elements.length; _i < _len; _i++) {                                                     // 748
          el = elements[_i];                                                                                        // 749
          if (/(^| )fallback($| )/.test(el.className)) {                                                            // 750
            return el;                                                                                              // 751
          }                                                                                                         // 752
        }                                                                                                           // 753
      };                                                                                                            // 754
      _ref = ["div", "form"];                                                                                       // 755
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 756
        tagName = _ref[_i];                                                                                         // 757
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {                                   // 758
          return fallback;                                                                                          // 759
        }                                                                                                           // 760
      }                                                                                                             // 761
    };                                                                                                              // 762
                                                                                                                    // 763
    Dropzone.prototype.setupEventListeners = function() {                                                           // 764
      var elementListeners, event, listener, _i, _len, _ref, _results;                                              // 765
      _ref = this.listeners;                                                                                        // 766
      _results = [];                                                                                                // 767
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 768
        elementListeners = _ref[_i];                                                                                // 769
        _results.push((function() {                                                                                 // 770
          var _ref1, _results1;                                                                                     // 771
          _ref1 = elementListeners.events;                                                                          // 772
          _results1 = [];                                                                                           // 773
          for (event in _ref1) {                                                                                    // 774
            listener = _ref1[event];                                                                                // 775
            _results1.push(elementListeners.element.addEventListener(event, listener, false));                      // 776
          }                                                                                                         // 777
          return _results1;                                                                                         // 778
        })());                                                                                                      // 779
      }                                                                                                             // 780
      return _results;                                                                                              // 781
    };                                                                                                              // 782
                                                                                                                    // 783
    Dropzone.prototype.removeEventListeners = function() {                                                          // 784
      var elementListeners, event, listener, _i, _len, _ref, _results;                                              // 785
      _ref = this.listeners;                                                                                        // 786
      _results = [];                                                                                                // 787
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 788
        elementListeners = _ref[_i];                                                                                // 789
        _results.push((function() {                                                                                 // 790
          var _ref1, _results1;                                                                                     // 791
          _ref1 = elementListeners.events;                                                                          // 792
          _results1 = [];                                                                                           // 793
          for (event in _ref1) {                                                                                    // 794
            listener = _ref1[event];                                                                                // 795
            _results1.push(elementListeners.element.removeEventListener(event, listener, false));                   // 796
          }                                                                                                         // 797
          return _results1;                                                                                         // 798
        })());                                                                                                      // 799
      }                                                                                                             // 800
      return _results;                                                                                              // 801
    };                                                                                                              // 802
                                                                                                                    // 803
    Dropzone.prototype.disable = function() {                                                                       // 804
      var file, _i, _len, _ref, _results;                                                                           // 805
      this.clickableElements.forEach(function(element) {                                                            // 806
        return element.classList.remove("dz-clickable");                                                            // 807
      });                                                                                                           // 808
      this.removeEventListeners();                                                                                  // 809
      _ref = this.files;                                                                                            // 810
      _results = [];                                                                                                // 811
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 812
        file = _ref[_i];                                                                                            // 813
        _results.push(this.cancelUpload(file));                                                                     // 814
      }                                                                                                             // 815
      return _results;                                                                                              // 816
    };                                                                                                              // 817
                                                                                                                    // 818
    Dropzone.prototype.enable = function() {                                                                        // 819
      this.clickableElements.forEach(function(element) {                                                            // 820
        return element.classList.add("dz-clickable");                                                               // 821
      });                                                                                                           // 822
      return this.setupEventListeners();                                                                            // 823
    };                                                                                                              // 824
                                                                                                                    // 825
    Dropzone.prototype.filesize = function(size) {                                                                  // 826
      var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;                                             // 827
      selectedSize = 0;                                                                                             // 828
      selectedUnit = "b";                                                                                           // 829
      if (size > 0) {                                                                                               // 830
        units = ['TB', 'GB', 'MB', 'KB', 'b'];                                                                      // 831
        for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {                                                // 832
          unit = units[i];                                                                                          // 833
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;                                                 // 834
          if (size >= cutoff) {                                                                                     // 835
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);                                       // 836
            selectedUnit = unit;                                                                                    // 837
            break;                                                                                                  // 838
          }                                                                                                         // 839
        }                                                                                                           // 840
        selectedSize = Math.round(10 * selectedSize) / 10;                                                          // 841
      }                                                                                                             // 842
      return "<strong>" + selectedSize + "</strong> " + selectedUnit;                                               // 843
    };                                                                                                              // 844
                                                                                                                    // 845
    Dropzone.prototype._updateMaxFilesReachedClass = function() {                                                   // 846
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {             // 847
        if (this.getAcceptedFiles().length === this.options.maxFiles) {                                             // 848
          this.emit('maxfilesreached', this.files);                                                                 // 849
        }                                                                                                           // 850
        return this.element.classList.add("dz-max-files-reached");                                                  // 851
      } else {                                                                                                      // 852
        return this.element.classList.remove("dz-max-files-reached");                                               // 853
      }                                                                                                             // 854
    };                                                                                                              // 855
                                                                                                                    // 856
    Dropzone.prototype.drop = function(e) {                                                                         // 857
      var files, items;                                                                                             // 858
      if (!e.dataTransfer) {                                                                                        // 859
        return;                                                                                                     // 860
      }                                                                                                             // 861
      this.emit("drop", e);                                                                                         // 862
      files = e.dataTransfer.files;                                                                                 // 863
      this.emit("addedfiles", files);                                                                               // 864
      if (files.length) {                                                                                           // 865
        items = e.dataTransfer.items;                                                                               // 866
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {                                         // 867
          this._addFilesFromItems(items);                                                                           // 868
        } else {                                                                                                    // 869
          this.handleFiles(files);                                                                                  // 870
        }                                                                                                           // 871
      }                                                                                                             // 872
    };                                                                                                              // 873
                                                                                                                    // 874
    Dropzone.prototype.paste = function(e) {                                                                        // 875
      var items, _ref;                                                                                              // 876
      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {                  // 877
        return;                                                                                                     // 878
      }                                                                                                             // 879
      this.emit("paste", e);                                                                                        // 880
      items = e.clipboardData.items;                                                                                // 881
      if (items.length) {                                                                                           // 882
        return this._addFilesFromItems(items);                                                                      // 883
      }                                                                                                             // 884
    };                                                                                                              // 885
                                                                                                                    // 886
    Dropzone.prototype.handleFiles = function(files) {                                                              // 887
      var file, _i, _len, _results;                                                                                 // 888
      _results = [];                                                                                                // 889
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 890
        file = files[_i];                                                                                           // 891
        _results.push(this.addFile(file));                                                                          // 892
      }                                                                                                             // 893
      return _results;                                                                                              // 894
    };                                                                                                              // 895
                                                                                                                    // 896
    Dropzone.prototype._addFilesFromItems = function(items) {                                                       // 897
      var entry, item, _i, _len, _results;                                                                          // 898
      _results = [];                                                                                                // 899
      for (_i = 0, _len = items.length; _i < _len; _i++) {                                                          // 900
        item = items[_i];                                                                                           // 901
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {                                 // 902
          if (entry.isFile) {                                                                                       // 903
            _results.push(this.addFile(item.getAsFile()));                                                          // 904
          } else if (entry.isDirectory) {                                                                           // 905
            _results.push(this._addFilesFromDirectory(entry, entry.name));                                          // 906
          } else {                                                                                                  // 907
            _results.push(void 0);                                                                                  // 908
          }                                                                                                         // 909
        } else if (item.getAsFile != null) {                                                                        // 910
          if ((item.kind == null) || item.kind === "file") {                                                        // 911
            _results.push(this.addFile(item.getAsFile()));                                                          // 912
          } else {                                                                                                  // 913
            _results.push(void 0);                                                                                  // 914
          }                                                                                                         // 915
        } else {                                                                                                    // 916
          _results.push(void 0);                                                                                    // 917
        }                                                                                                           // 918
      }                                                                                                             // 919
      return _results;                                                                                              // 920
    };                                                                                                              // 921
                                                                                                                    // 922
    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {                                         // 923
      var dirReader, entriesReader;                                                                                 // 924
      dirReader = directory.createReader();                                                                         // 925
      entriesReader = (function(_this) {                                                                            // 926
        return function(entries) {                                                                                  // 927
          var entry, _i, _len;                                                                                      // 928
          for (_i = 0, _len = entries.length; _i < _len; _i++) {                                                    // 929
            entry = entries[_i];                                                                                    // 930
            if (entry.isFile) {                                                                                     // 931
              entry.file(function(file) {                                                                           // 932
                if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {                         // 933
                  return;                                                                                           // 934
                }                                                                                                   // 935
                file.fullPath = "" + path + "/" + file.name;                                                        // 936
                return _this.addFile(file);                                                                         // 937
              });                                                                                                   // 938
            } else if (entry.isDirectory) {                                                                         // 939
              _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);                                    // 940
            }                                                                                                       // 941
          }                                                                                                         // 942
        };                                                                                                          // 943
      })(this);                                                                                                     // 944
      return dirReader.readEntries(entriesReader, function(error) {                                                 // 945
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      });                                                                                                           // 947
    };                                                                                                              // 948
                                                                                                                    // 949
    Dropzone.prototype.accept = function(file, done) {                                                              // 950
      if (file.size > this.options.maxFilesize * 1024 * 1024) {                                                     // 951
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {                                         // 953
        return done(this.options.dictInvalidFileType);                                                              // 954
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {      // 955
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));                     // 956
        return this.emit("maxfilesexceeded", file);                                                                 // 957
      } else {                                                                                                      // 958
        return this.options.accept.call(this, file, done);                                                          // 959
      }                                                                                                             // 960
    };                                                                                                              // 961
                                                                                                                    // 962
    Dropzone.prototype.addFile = function(file) {                                                                   // 963
      file.upload = {                                                                                               // 964
        progress: 0,                                                                                                // 965
        total: file.size,                                                                                           // 966
        bytesSent: 0                                                                                                // 967
      };                                                                                                            // 968
      this.files.push(file);                                                                                        // 969
      file.status = Dropzone.ADDED;                                                                                 // 970
      this.emit("addedfile", file);                                                                                 // 971
      this._enqueueThumbnail(file);                                                                                 // 972
      return this.accept(file, (function(_this) {                                                                   // 973
        return function(error) {                                                                                    // 974
          if (error) {                                                                                              // 975
            file.accepted = false;                                                                                  // 976
            _this._errorProcessing([file], error);                                                                  // 977
          } else {                                                                                                  // 978
            file.accepted = true;                                                                                   // 979
            if (_this.options.autoQueue) {                                                                          // 980
              _this.enqueueFile(file);                                                                              // 981
            }                                                                                                       // 982
          }                                                                                                         // 983
          return _this._updateMaxFilesReachedClass();                                                               // 984
        };                                                                                                          // 985
      })(this));                                                                                                    // 986
    };                                                                                                              // 987
                                                                                                                    // 988
    Dropzone.prototype.enqueueFiles = function(files) {                                                             // 989
      var file, _i, _len;                                                                                           // 990
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 991
        file = files[_i];                                                                                           // 992
        this.enqueueFile(file);                                                                                     // 993
      }                                                                                                             // 994
      return null;                                                                                                  // 995
    };                                                                                                              // 996
                                                                                                                    // 997
    Dropzone.prototype.enqueueFile = function(file) {                                                               // 998
      if (file.status === Dropzone.ADDED && file.accepted === true) {                                               // 999
        file.status = Dropzone.QUEUED;                                                                              // 1000
        if (this.options.autoProcessQueue) {                                                                        // 1001
          return setTimeout(((function(_this) {                                                                     // 1002
            return function() {                                                                                     // 1003
              return _this.processQueue();                                                                          // 1004
            };                                                                                                      // 1005
          })(this)), 0);                                                                                            // 1006
        }                                                                                                           // 1007
      } else {                                                                                                      // 1008
        throw new Error("This file can't be queued because it has already been processed or was rejected.");        // 1009
      }                                                                                                             // 1010
    };                                                                                                              // 1011
                                                                                                                    // 1012
    Dropzone.prototype._thumbnailQueue = [];                                                                        // 1013
                                                                                                                    // 1014
    Dropzone.prototype._processingThumbnail = false;                                                                // 1015
                                                                                                                    // 1016
    Dropzone.prototype._enqueueThumbnail = function(file) {                                                         // 1017
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);                                                                            // 1019
        return setTimeout(((function(_this) {                                                                       // 1020
          return function() {                                                                                       // 1021
            return _this._processThumbnailQueue();                                                                  // 1022
          };                                                                                                        // 1023
        })(this)), 0);                                                                                              // 1024
      }                                                                                                             // 1025
    };                                                                                                              // 1026
                                                                                                                    // 1027
    Dropzone.prototype._processThumbnailQueue = function() {                                                        // 1028
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {                                         // 1029
        return;                                                                                                     // 1030
      }                                                                                                             // 1031
      this._processingThumbnail = true;                                                                             // 1032
      return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {                                  // 1033
        return function() {                                                                                         // 1034
          _this._processingThumbnail = false;                                                                       // 1035
          return _this._processThumbnailQueue();                                                                    // 1036
        };                                                                                                          // 1037
      })(this));                                                                                                    // 1038
    };                                                                                                              // 1039
                                                                                                                    // 1040
    Dropzone.prototype.removeFile = function(file) {                                                                // 1041
      if (file.status === Dropzone.UPLOADING) {                                                                     // 1042
        this.cancelUpload(file);                                                                                    // 1043
      }                                                                                                             // 1044
      this.files = without(this.files, file);                                                                       // 1045
      this.emit("removedfile", file);                                                                               // 1046
      if (this.files.length === 0) {                                                                                // 1047
        return this.emit("reset");                                                                                  // 1048
      }                                                                                                             // 1049
    };                                                                                                              // 1050
                                                                                                                    // 1051
    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {                                               // 1052
      var file, _i, _len, _ref;                                                                                     // 1053
      if (cancelIfNecessary == null) {                                                                              // 1054
        cancelIfNecessary = false;                                                                                  // 1055
      }                                                                                                             // 1056
      _ref = this.files.slice();                                                                                    // 1057
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 1058
        file = _ref[_i];                                                                                            // 1059
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {                                              // 1060
          this.removeFile(file);                                                                                    // 1061
        }                                                                                                           // 1062
      }                                                                                                             // 1063
      return null;                                                                                                  // 1064
    };                                                                                                              // 1065
                                                                                                                    // 1066
    Dropzone.prototype.createThumbnail = function(file, callback) {                                                 // 1067
      var fileReader;                                                                                               // 1068
      fileReader = new FileReader;                                                                                  // 1069
      fileReader.onload = (function(_this) {                                                                        // 1070
        return function() {                                                                                         // 1071
          if (file.type === "image/svg+xml") {                                                                      // 1072
            _this.emit("thumbnail", file, fileReader.result);                                                       // 1073
            if (callback != null) {                                                                                 // 1074
              callback();                                                                                           // 1075
            }                                                                                                       // 1076
            return;                                                                                                 // 1077
          }                                                                                                         // 1078
          return _this.createThumbnailFromUrl(file, fileReader.result, callback);                                   // 1079
        };                                                                                                          // 1080
      })(this);                                                                                                     // 1081
      return fileReader.readAsDataURL(file);                                                                        // 1082
    };                                                                                                              // 1083
                                                                                                                    // 1084
    Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {                   // 1085
      var img;                                                                                                      // 1086
      img = document.createElement("img");                                                                          // 1087
      if (crossOrigin) {                                                                                            // 1088
        img.crossOrigin = crossOrigin;                                                                              // 1089
      }                                                                                                             // 1090
      img.onload = (function(_this) {                                                                               // 1091
        return function() {                                                                                         // 1092
          var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;                                        // 1093
          file.width = img.width;                                                                                   // 1094
          file.height = img.height;                                                                                 // 1095
          resizeInfo = _this.options.resize.call(_this, file);                                                      // 1096
          if (resizeInfo.trgWidth == null) {                                                                        // 1097
            resizeInfo.trgWidth = resizeInfo.optWidth;                                                              // 1098
          }                                                                                                         // 1099
          if (resizeInfo.trgHeight == null) {                                                                       // 1100
            resizeInfo.trgHeight = resizeInfo.optHeight;                                                            // 1101
          }                                                                                                         // 1102
          canvas = document.createElement("canvas");                                                                // 1103
          ctx = canvas.getContext("2d");                                                                            // 1104
          canvas.width = resizeInfo.trgWidth;                                                                       // 1105
          canvas.height = resizeInfo.trgHeight;                                                                     // 1106
          drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          thumbnail = canvas.toDataURL("image/png");                                                                // 1108
          _this.emit("thumbnail", file, thumbnail);                                                                 // 1109
          if (callback != null) {                                                                                   // 1110
            return callback();                                                                                      // 1111
          }                                                                                                         // 1112
        };                                                                                                          // 1113
      })(this);                                                                                                     // 1114
      if (callback != null) {                                                                                       // 1115
        img.onerror = callback;                                                                                     // 1116
      }                                                                                                             // 1117
      return img.src = imageUrl;                                                                                    // 1118
    };                                                                                                              // 1119
                                                                                                                    // 1120
    Dropzone.prototype.processQueue = function() {                                                                  // 1121
      var i, parallelUploads, processingLength, queuedFiles;                                                        // 1122
      parallelUploads = this.options.parallelUploads;                                                               // 1123
      processingLength = this.getUploadingFiles().length;                                                           // 1124
      i = processingLength;                                                                                         // 1125
      if (processingLength >= parallelUploads) {                                                                    // 1126
        return;                                                                                                     // 1127
      }                                                                                                             // 1128
      queuedFiles = this.getQueuedFiles();                                                                          // 1129
      if (!(queuedFiles.length > 0)) {                                                                              // 1130
        return;                                                                                                     // 1131
      }                                                                                                             // 1132
      if (this.options.uploadMultiple) {                                                                            // 1133
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));                         // 1134
      } else {                                                                                                      // 1135
        while (i < parallelUploads) {                                                                               // 1136
          if (!queuedFiles.length) {                                                                                // 1137
            return;                                                                                                 // 1138
          }                                                                                                         // 1139
          this.processFile(queuedFiles.shift());                                                                    // 1140
          i++;                                                                                                      // 1141
        }                                                                                                           // 1142
      }                                                                                                             // 1143
    };                                                                                                              // 1144
                                                                                                                    // 1145
    Dropzone.prototype.processFile = function(file) {                                                               // 1146
      return this.processFiles([file]);                                                                             // 1147
    };                                                                                                              // 1148
                                                                                                                    // 1149
    Dropzone.prototype.processFiles = function(files) {                                                             // 1150
      var file, _i, _len;                                                                                           // 1151
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1152
        file = files[_i];                                                                                           // 1153
        file.processing = true;                                                                                     // 1154
        file.status = Dropzone.UPLOADING;                                                                           // 1155
        this.emit("processing", file);                                                                              // 1156
      }                                                                                                             // 1157
      if (this.options.uploadMultiple) {                                                                            // 1158
        this.emit("processingmultiple", files);                                                                     // 1159
      }                                                                                                             // 1160
      return this.uploadFiles(files);                                                                               // 1161
    };                                                                                                              // 1162
                                                                                                                    // 1163
    Dropzone.prototype._getFilesWithXhr = function(xhr) {                                                           // 1164
      var file, files;                                                                                              // 1165
      return files = (function() {                                                                                  // 1166
        var _i, _len, _ref, _results;                                                                               // 1167
        _ref = this.files;                                                                                          // 1168
        _results = [];                                                                                              // 1169
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                         // 1170
          file = _ref[_i];                                                                                          // 1171
          if (file.xhr === xhr) {                                                                                   // 1172
            _results.push(file);                                                                                    // 1173
          }                                                                                                         // 1174
        }                                                                                                           // 1175
        return _results;                                                                                            // 1176
      }).call(this);                                                                                                // 1177
    };                                                                                                              // 1178
                                                                                                                    // 1179
    Dropzone.prototype.cancelUpload = function(file) {                                                              // 1180
      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;                                                     // 1181
      if (file.status === Dropzone.UPLOADING) {                                                                     // 1182
        groupedFiles = this._getFilesWithXhr(file.xhr);                                                             // 1183
        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {                                                 // 1184
          groupedFile = groupedFiles[_i];                                                                           // 1185
          groupedFile.status = Dropzone.CANCELED;                                                                   // 1186
        }                                                                                                           // 1187
        file.xhr.abort();                                                                                           // 1188
        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {                                               // 1189
          groupedFile = groupedFiles[_j];                                                                           // 1190
          this.emit("canceled", groupedFile);                                                                       // 1191
        }                                                                                                           // 1192
        if (this.options.uploadMultiple) {                                                                          // 1193
          this.emit("canceledmultiple", groupedFiles);                                                              // 1194
        }                                                                                                           // 1195
      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {                             // 1196
        file.status = Dropzone.CANCELED;                                                                            // 1197
        this.emit("canceled", file);                                                                                // 1198
        if (this.options.uploadMultiple) {                                                                          // 1199
          this.emit("canceledmultiple", [file]);                                                                    // 1200
        }                                                                                                           // 1201
      }                                                                                                             // 1202
      if (this.options.autoProcessQueue) {                                                                          // 1203
        return this.processQueue();                                                                                 // 1204
      }                                                                                                             // 1205
    };                                                                                                              // 1206
                                                                                                                    // 1207
    resolveOption = function() {                                                                                    // 1208
      var args, option;                                                                                             // 1209
      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];                        // 1210
      if (typeof option === 'function') {                                                                           // 1211
        return option.apply(this, args);                                                                            // 1212
      }                                                                                                             // 1213
      return option;                                                                                                // 1214
    };                                                                                                              // 1215
                                                                                                                    // 1216
    Dropzone.prototype.uploadFile = function(file) {                                                                // 1217
      return this.uploadFiles([file]);                                                                              // 1218
    };                                                                                                              // 1219
                                                                                                                    // 1220
    Dropzone.prototype.uploadFiles = function(files) {                                                              // 1221
      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      xhr = new XMLHttpRequest();                                                                                   // 1223
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1224
        file = files[_i];                                                                                           // 1225
        file.xhr = xhr;                                                                                             // 1226
      }                                                                                                             // 1227
      method = resolveOption(this.options.method, files);                                                           // 1228
      url = resolveOption(this.options.url, files);                                                                 // 1229
      xhr.open(method, url, true);                                                                                  // 1230
      xhr.withCredentials = !!this.options.withCredentials;                                                         // 1231
      response = null;                                                                                              // 1232
      handleError = (function(_this) {                                                                              // 1233
        return function() {                                                                                         // 1234
          var _j, _len1, _results;                                                                                  // 1235
          _results = [];                                                                                            // 1236
          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {                                                    // 1237
            file = files[_j];                                                                                       // 1238
            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }                                                                                                         // 1240
          return _results;                                                                                          // 1241
        };                                                                                                          // 1242
      })(this);                                                                                                     // 1243
      updateProgress = (function(_this) {                                                                           // 1244
        return function(e) {                                                                                        // 1245
          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;                                // 1246
          if (e != null) {                                                                                          // 1247
            progress = 100 * e.loaded / e.total;                                                                    // 1248
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {                                                  // 1249
              file = files[_j];                                                                                     // 1250
              file.upload = {                                                                                       // 1251
                progress: progress,                                                                                 // 1252
                total: e.total,                                                                                     // 1253
                bytesSent: e.loaded                                                                                 // 1254
              };                                                                                                    // 1255
            }                                                                                                       // 1256
          } else {                                                                                                  // 1257
            allFilesFinished = true;                                                                                // 1258
            progress = 100;                                                                                         // 1259
            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {                                                  // 1260
              file = files[_k];                                                                                     // 1261
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {                 // 1262
                allFilesFinished = false;                                                                           // 1263
              }                                                                                                     // 1264
              file.upload.progress = progress;                                                                      // 1265
              file.upload.bytesSent = file.upload.total;                                                            // 1266
            }                                                                                                       // 1267
            if (allFilesFinished) {                                                                                 // 1268
              return;                                                                                               // 1269
            }                                                                                                       // 1270
          }                                                                                                         // 1271
          _results = [];                                                                                            // 1272
          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {                                                    // 1273
            file = files[_l];                                                                                       // 1274
            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));                     // 1275
          }                                                                                                         // 1276
          return _results;                                                                                          // 1277
        };                                                                                                          // 1278
      })(this);                                                                                                     // 1279
      xhr.onload = (function(_this) {                                                                               // 1280
        return function(e) {                                                                                        // 1281
          var _ref;                                                                                                 // 1282
          if (files[0].status === Dropzone.CANCELED) {                                                              // 1283
            return;                                                                                                 // 1284
          }                                                                                                         // 1285
          if (xhr.readyState !== 4) {                                                                               // 1286
            return;                                                                                                 // 1287
          }                                                                                                         // 1288
          response = xhr.responseText;                                                                              // 1289
          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
            try {                                                                                                   // 1291
              response = JSON.parse(response);                                                                      // 1292
            } catch (_error) {                                                                                      // 1293
              e = _error;                                                                                           // 1294
              response = "Invalid JSON response from server.";                                                      // 1295
            }                                                                                                       // 1296
          }                                                                                                         // 1297
          updateProgress();                                                                                         // 1298
          if (!((200 <= (_ref = xhr.status) && _ref < 300))) {                                                      // 1299
            return handleError();                                                                                   // 1300
          } else {                                                                                                  // 1301
            return _this._finished(files, response, e);                                                             // 1302
          }                                                                                                         // 1303
        };                                                                                                          // 1304
      })(this);                                                                                                     // 1305
      xhr.onerror = (function(_this) {                                                                              // 1306
        return function() {                                                                                         // 1307
          if (files[0].status === Dropzone.CANCELED) {                                                              // 1308
            return;                                                                                                 // 1309
          }                                                                                                         // 1310
          return handleError();                                                                                     // 1311
        };                                                                                                          // 1312
      })(this);                                                                                                     // 1313
      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;                                                       // 1314
      progressObj.onprogress = updateProgress;                                                                      // 1315
      headers = {                                                                                                   // 1316
        "Accept": "application/json",                                                                               // 1317
        "Cache-Control": "no-cache",                                                                                // 1318
        "X-Requested-With": "XMLHttpRequest"                                                                        // 1319
      };                                                                                                            // 1320
      if (this.options.headers) {                                                                                   // 1321
        extend(headers, this.options.headers);                                                                      // 1322
      }                                                                                                             // 1323
      for (headerName in headers) {                                                                                 // 1324
        headerValue = headers[headerName];                                                                          // 1325
        if (headerValue) {                                                                                          // 1326
          xhr.setRequestHeader(headerName, headerValue);                                                            // 1327
        }                                                                                                           // 1328
      }                                                                                                             // 1329
      formData = new FormData();                                                                                    // 1330
      if (this.options.params) {                                                                                    // 1331
        _ref1 = this.options.params;                                                                                // 1332
        for (key in _ref1) {                                                                                        // 1333
          value = _ref1[key];                                                                                       // 1334
          formData.append(key, value);                                                                              // 1335
        }                                                                                                           // 1336
      }                                                                                                             // 1337
      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {                                                        // 1338
        file = files[_j];                                                                                           // 1339
        this.emit("sending", file, xhr, formData);                                                                  // 1340
      }                                                                                                             // 1341
      if (this.options.uploadMultiple) {                                                                            // 1342
        this.emit("sendingmultiple", files, xhr, formData);                                                         // 1343
      }                                                                                                             // 1344
      if (this.element.tagName === "FORM") {                                                                        // 1345
        _ref2 = this.element.querySelectorAll("input, textarea, select, button");                                   // 1346
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {                                                      // 1347
          input = _ref2[_k];                                                                                        // 1348
          inputName = input.getAttribute("name");                                                                   // 1349
          inputType = input.getAttribute("type");                                                                   // 1350
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {                                       // 1351
            _ref3 = input.options;                                                                                  // 1352
            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {                                                  // 1353
              option = _ref3[_l];                                                                                   // 1354
              if (option.selected) {                                                                                // 1355
                formData.append(inputName, option.value);                                                           // 1356
              }                                                                                                     // 1357
            }                                                                                                       // 1358
          } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);                                                                // 1360
          }                                                                                                         // 1361
        }                                                                                                           // 1362
      }                                                                                                             // 1363
      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
        formData.append(this._getParamName(i), files[i], files[i].name);                                            // 1365
      }                                                                                                             // 1366
      return this.submitRequest(xhr, formData, files);                                                              // 1367
    };                                                                                                              // 1368
                                                                                                                    // 1369
    Dropzone.prototype.submitRequest = function(xhr, formData, files) {                                             // 1370
      return xhr.send(formData);                                                                                    // 1371
    };                                                                                                              // 1372
                                                                                                                    // 1373
    Dropzone.prototype._finished = function(files, responseText, e) {                                               // 1374
      var file, _i, _len;                                                                                           // 1375
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1376
        file = files[_i];                                                                                           // 1377
        file.status = Dropzone.SUCCESS;                                                                             // 1378
        this.emit("success", file, responseText, e);                                                                // 1379
        this.emit("complete", file);                                                                                // 1380
      }                                                                                                             // 1381
      if (this.options.uploadMultiple) {                                                                            // 1382
        this.emit("successmultiple", files, responseText, e);                                                       // 1383
        this.emit("completemultiple", files);                                                                       // 1384
      }                                                                                                             // 1385
      if (this.options.autoProcessQueue) {                                                                          // 1386
        return this.processQueue();                                                                                 // 1387
      }                                                                                                             // 1388
    };                                                                                                              // 1389
                                                                                                                    // 1390
    Dropzone.prototype._errorProcessing = function(files, message, xhr) {                                           // 1391
      var file, _i, _len;                                                                                           // 1392
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1393
        file = files[_i];                                                                                           // 1394
        file.status = Dropzone.ERROR;                                                                               // 1395
        this.emit("error", file, message, xhr);                                                                     // 1396
        this.emit("complete", file);                                                                                // 1397
      }                                                                                                             // 1398
      if (this.options.uploadMultiple) {                                                                            // 1399
        this.emit("errormultiple", files, message, xhr);                                                            // 1400
        this.emit("completemultiple", files);                                                                       // 1401
      }                                                                                                             // 1402
      if (this.options.autoProcessQueue) {                                                                          // 1403
        return this.processQueue();                                                                                 // 1404
      }                                                                                                             // 1405
    };                                                                                                              // 1406
                                                                                                                    // 1407
    return Dropzone;                                                                                                // 1408
                                                                                                                    // 1409
  })(Emitter);                                                                                                      // 1410
                                                                                                                    // 1411
  Dropzone.version = "4.2.0";                                                                                       // 1412
                                                                                                                    // 1413
  Dropzone.options = {};                                                                                            // 1414
                                                                                                                    // 1415
  Dropzone.optionsForElement = function(element) {                                                                  // 1416
    if (element.getAttribute("id")) {                                                                               // 1417
      return Dropzone.options[camelize(element.getAttribute("id"))];                                                // 1418
    } else {                                                                                                        // 1419
      return void 0;                                                                                                // 1420
    }                                                                                                               // 1421
  };                                                                                                                // 1422
                                                                                                                    // 1423
  Dropzone.instances = [];                                                                                          // 1424
                                                                                                                    // 1425
  Dropzone.forElement = function(element) {                                                                         // 1426
    if (typeof element === "string") {                                                                              // 1427
      element = document.querySelector(element);                                                                    // 1428
    }                                                                                                               // 1429
    if ((element != null ? element.dropzone : void 0) == null) {                                                    // 1430
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }                                                                                                               // 1432
    return element.dropzone;                                                                                        // 1433
  };                                                                                                                // 1434
                                                                                                                    // 1435
  Dropzone.autoDiscover = true;                                                                                     // 1436
                                                                                                                    // 1437
  Dropzone.discover = function() {                                                                                  // 1438
    var checkElements, dropzone, dropzones, _i, _len, _results;                                                     // 1439
    if (document.querySelectorAll) {                                                                                // 1440
      dropzones = document.querySelectorAll(".dropzone");                                                           // 1441
    } else {                                                                                                        // 1442
      dropzones = [];                                                                                               // 1443
      checkElements = function(elements) {                                                                          // 1444
        var el, _i, _len, _results;                                                                                 // 1445
        _results = [];                                                                                              // 1446
        for (_i = 0, _len = elements.length; _i < _len; _i++) {                                                     // 1447
          el = elements[_i];                                                                                        // 1448
          if (/(^| )dropzone($| )/.test(el.className)) {                                                            // 1449
            _results.push(dropzones.push(el));                                                                      // 1450
          } else {                                                                                                  // 1451
            _results.push(void 0);                                                                                  // 1452
          }                                                                                                         // 1453
        }                                                                                                           // 1454
        return _results;                                                                                            // 1455
      };                                                                                                            // 1456
      checkElements(document.getElementsByTagName("div"));                                                          // 1457
      checkElements(document.getElementsByTagName("form"));                                                         // 1458
    }                                                                                                               // 1459
    _results = [];                                                                                                  // 1460
    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {                                                        // 1461
      dropzone = dropzones[_i];                                                                                     // 1462
      if (Dropzone.optionsForElement(dropzone) !== false) {                                                         // 1463
        _results.push(new Dropzone(dropzone));                                                                      // 1464
      } else {                                                                                                      // 1465
        _results.push(void 0);                                                                                      // 1466
      }                                                                                                             // 1467
    }                                                                                                               // 1468
    return _results;                                                                                                // 1469
  };                                                                                                                // 1470
                                                                                                                    // 1471
  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];                                                // 1472
                                                                                                                    // 1473
  Dropzone.isBrowserSupported = function() {                                                                        // 1474
    var capableBrowser, regex, _i, _len, _ref;                                                                      // 1475
    capableBrowser = true;                                                                                          // 1476
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {                                                          // 1478
        capableBrowser = false;                                                                                     // 1479
      } else {                                                                                                      // 1480
        _ref = Dropzone.blacklistedBrowsers;                                                                        // 1481
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                         // 1482
          regex = _ref[_i];                                                                                         // 1483
          if (regex.test(navigator.userAgent)) {                                                                    // 1484
            capableBrowser = false;                                                                                 // 1485
            continue;                                                                                               // 1486
          }                                                                                                         // 1487
        }                                                                                                           // 1488
      }                                                                                                             // 1489
    } else {                                                                                                        // 1490
      capableBrowser = false;                                                                                       // 1491
    }                                                                                                               // 1492
    return capableBrowser;                                                                                          // 1493
  };                                                                                                                // 1494
                                                                                                                    // 1495
  without = function(list, rejectedItem) {                                                                          // 1496
    var item, _i, _len, _results;                                                                                   // 1497
    _results = [];                                                                                                  // 1498
    for (_i = 0, _len = list.length; _i < _len; _i++) {                                                             // 1499
      item = list[_i];                                                                                              // 1500
      if (item !== rejectedItem) {                                                                                  // 1501
        _results.push(item);                                                                                        // 1502
      }                                                                                                             // 1503
    }                                                                                                               // 1504
    return _results;                                                                                                // 1505
  };                                                                                                                // 1506
                                                                                                                    // 1507
  camelize = function(str) {                                                                                        // 1508
    return str.replace(/[\-_](\w)/g, function(match) {                                                              // 1509
      return match.charAt(1).toUpperCase();                                                                         // 1510
    });                                                                                                             // 1511
  };                                                                                                                // 1512
                                                                                                                    // 1513
  Dropzone.createElement = function(string) {                                                                       // 1514
    var div;                                                                                                        // 1515
    div = document.createElement("div");                                                                            // 1516
    div.innerHTML = string;                                                                                         // 1517
    return div.childNodes[0];                                                                                       // 1518
  };                                                                                                                // 1519
                                                                                                                    // 1520
  Dropzone.elementInside = function(element, container) {                                                           // 1521
    if (element === container) {                                                                                    // 1522
      return true;                                                                                                  // 1523
    }                                                                                                               // 1524
    while (element = element.parentNode) {                                                                          // 1525
      if (element === container) {                                                                                  // 1526
        return true;                                                                                                // 1527
      }                                                                                                             // 1528
    }                                                                                                               // 1529
    return false;                                                                                                   // 1530
  };                                                                                                                // 1531
                                                                                                                    // 1532
  Dropzone.getElement = function(el, name) {                                                                        // 1533
    var element;                                                                                                    // 1534
    if (typeof el === "string") {                                                                                   // 1535
      element = document.querySelector(el);                                                                         // 1536
    } else if (el.nodeType != null) {                                                                               // 1537
      element = el;                                                                                                 // 1538
    }                                                                                                               // 1539
    if (element == null) {                                                                                          // 1540
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }                                                                                                               // 1542
    return element;                                                                                                 // 1543
  };                                                                                                                // 1544
                                                                                                                    // 1545
  Dropzone.getElements = function(els, name) {                                                                      // 1546
    var e, el, elements, _i, _j, _len, _len1, _ref;                                                                 // 1547
    if (els instanceof Array) {                                                                                     // 1548
      elements = [];                                                                                                // 1549
      try {                                                                                                         // 1550
        for (_i = 0, _len = els.length; _i < _len; _i++) {                                                          // 1551
          el = els[_i];                                                                                             // 1552
          elements.push(this.getElement(el, name));                                                                 // 1553
        }                                                                                                           // 1554
      } catch (_error) {                                                                                            // 1555
        e = _error;                                                                                                 // 1556
        elements = null;                                                                                            // 1557
      }                                                                                                             // 1558
    } else if (typeof els === "string") {                                                                           // 1559
      elements = [];                                                                                                // 1560
      _ref = document.querySelectorAll(els);                                                                        // 1561
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {                                                         // 1562
        el = _ref[_j];                                                                                              // 1563
        elements.push(el);                                                                                          // 1564
      }                                                                                                             // 1565
    } else if (els.nodeType != null) {                                                                              // 1566
      elements = [els];                                                                                             // 1567
    }                                                                                                               // 1568
    if (!((elements != null) && elements.length)) {                                                                 // 1569
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }                                                                                                               // 1571
    return elements;                                                                                                // 1572
  };                                                                                                                // 1573
                                                                                                                    // 1574
  Dropzone.confirm = function(question, accepted, rejected) {                                                       // 1575
    if (window.confirm(question)) {                                                                                 // 1576
      return accepted();                                                                                            // 1577
    } else if (rejected != null) {                                                                                  // 1578
      return rejected();                                                                                            // 1579
    }                                                                                                               // 1580
  };                                                                                                                // 1581
                                                                                                                    // 1582
  Dropzone.isValidFile = function(file, acceptedFiles) {                                                            // 1583
    var baseMimeType, mimeType, validType, _i, _len;                                                                // 1584
    if (!acceptedFiles) {                                                                                           // 1585
      return true;                                                                                                  // 1586
    }                                                                                                               // 1587
    acceptedFiles = acceptedFiles.split(",");                                                                       // 1588
    mimeType = file.type;                                                                                           // 1589
    baseMimeType = mimeType.replace(/\/.*$/, "");                                                                   // 1590
    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {                                                    // 1591
      validType = acceptedFiles[_i];                                                                                // 1592
      validType = validType.trim();                                                                                 // 1593
      if (validType.charAt(0) === ".") {                                                                            // 1594
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;                                                                                              // 1596
        }                                                                                                           // 1597
      } else if (/\/\*$/.test(validType)) {                                                                         // 1598
        if (baseMimeType === validType.replace(/\/.*$/, "")) {                                                      // 1599
          return true;                                                                                              // 1600
        }                                                                                                           // 1601
      } else {                                                                                                      // 1602
        if (mimeType === validType) {                                                                               // 1603
          return true;                                                                                              // 1604
        }                                                                                                           // 1605
      }                                                                                                             // 1606
    }                                                                                                               // 1607
    return false;                                                                                                   // 1608
  };                                                                                                                // 1609
                                                                                                                    // 1610
  if (typeof jQuery !== "undefined" && jQuery !== null) {                                                           // 1611
    jQuery.fn.dropzone = function(options) {                                                                        // 1612
      return this.each(function() {                                                                                 // 1613
        return new Dropzone(this, options);                                                                         // 1614
      });                                                                                                           // 1615
    };                                                                                                              // 1616
  }                                                                                                                 // 1617
                                                                                                                    // 1618
  if (typeof module !== "undefined" && module !== null) {                                                           // 1619
    module.exports = Dropzone;                                                                                      // 1620
  } else {                                                                                                          // 1621
    window.Dropzone = Dropzone;                                                                                     // 1622
  }                                                                                                                 // 1623
                                                                                                                    // 1624
  Dropzone.ADDED = "added";                                                                                         // 1625
                                                                                                                    // 1626
  Dropzone.QUEUED = "queued";                                                                                       // 1627
                                                                                                                    // 1628
  Dropzone.ACCEPTED = Dropzone.QUEUED;                                                                              // 1629
                                                                                                                    // 1630
  Dropzone.UPLOADING = "uploading";                                                                                 // 1631
                                                                                                                    // 1632
  Dropzone.PROCESSING = Dropzone.UPLOADING;                                                                         // 1633
                                                                                                                    // 1634
  Dropzone.CANCELED = "canceled";                                                                                   // 1635
                                                                                                                    // 1636
  Dropzone.ERROR = "error";                                                                                         // 1637
                                                                                                                    // 1638
  Dropzone.SUCCESS = "success";                                                                                     // 1639
                                                                                                                    // 1640
                                                                                                                    // 1641
  /*                                                                                                                // 1642
                                                                                                                    // 1643
  Bugfix for iOS 6 and 7                                                                                            // 1644
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios                          // 1645
  based on the work of https://github.com/stomita/ios-imagefile-megapixel                                           // 1646
   */                                                                                                               // 1647
                                                                                                                    // 1648
  detectVerticalSquash = function(img) {                                                                            // 1649
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;                                                        // 1650
    iw = img.naturalWidth;                                                                                          // 1651
    ih = img.naturalHeight;                                                                                         // 1652
    canvas = document.createElement("canvas");                                                                      // 1653
    canvas.width = 1;                                                                                               // 1654
    canvas.height = ih;                                                                                             // 1655
    ctx = canvas.getContext("2d");                                                                                  // 1656
    ctx.drawImage(img, 0, 0);                                                                                       // 1657
    data = ctx.getImageData(0, 0, 1, ih).data;                                                                      // 1658
    sy = 0;                                                                                                         // 1659
    ey = ih;                                                                                                        // 1660
    py = ih;                                                                                                        // 1661
    while (py > sy) {                                                                                               // 1662
      alpha = data[(py - 1) * 4 + 3];                                                                               // 1663
      if (alpha === 0) {                                                                                            // 1664
        ey = py;                                                                                                    // 1665
      } else {                                                                                                      // 1666
        sy = py;                                                                                                    // 1667
      }                                                                                                             // 1668
      py = (ey + sy) >> 1;                                                                                          // 1669
    }                                                                                                               // 1670
    ratio = py / ih;                                                                                                // 1671
    if (ratio === 0) {                                                                                              // 1672
      return 1;                                                                                                     // 1673
    } else {                                                                                                        // 1674
      return ratio;                                                                                                 // 1675
    }                                                                                                               // 1676
  };                                                                                                                // 1677
                                                                                                                    // 1678
  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {                                            // 1679
    var vertSquashRatio;                                                                                            // 1680
    vertSquashRatio = detectVerticalSquash(img);                                                                    // 1681
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);                                    // 1682
  };                                                                                                                // 1683
                                                                                                                    // 1684
                                                                                                                    // 1685
  /*                                                                                                                // 1686
   * contentloaded.js                                                                                               // 1687
   *                                                                                                                // 1688
   * Author: Diego Perini (diego.perini at gmail.com)                                                               // 1689
   * Summary: cross-browser wrapper for DOMContentLoaded                                                            // 1690
   * Updated: 20101020                                                                                              // 1691
   * License: MIT                                                                                                   // 1692
   * Version: 1.2                                                                                                   // 1693
   *                                                                                                                // 1694
   * URL:                                                                                                           // 1695
   * http://javascript.nwbox.com/ContentLoaded/                                                                     // 1696
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE                                                          // 1697
   */                                                                                                               // 1698
                                                                                                                    // 1699
  contentLoaded = function(win, fn) {                                                                               // 1700
    var add, doc, done, init, poll, pre, rem, root, top;                                                            // 1701
    done = false;                                                                                                   // 1702
    top = true;                                                                                                     // 1703
    doc = win.document;                                                                                             // 1704
    root = doc.documentElement;                                                                                     // 1705
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");                                              // 1706
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");                                           // 1707
    pre = (doc.addEventListener ? "" : "on");                                                                       // 1708
    init = function(e) {                                                                                            // 1709
      if (e.type === "readystatechange" && doc.readyState !== "complete") {                                         // 1710
        return;                                                                                                     // 1711
      }                                                                                                             // 1712
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);                                              // 1713
      if (!done && (done = true)) {                                                                                 // 1714
        return fn.call(win, e.type || e);                                                                           // 1715
      }                                                                                                             // 1716
    };                                                                                                              // 1717
    poll = function() {                                                                                             // 1718
      var e;                                                                                                        // 1719
      try {                                                                                                         // 1720
        root.doScroll("left");                                                                                      // 1721
      } catch (_error) {                                                                                            // 1722
        e = _error;                                                                                                 // 1723
        setTimeout(poll, 50);                                                                                       // 1724
        return;                                                                                                     // 1725
      }                                                                                                             // 1726
      return init("poll");                                                                                          // 1727
    };                                                                                                              // 1728
    if (doc.readyState !== "complete") {                                                                            // 1729
      if (doc.createEventObject && root.doScroll) {                                                                 // 1730
        try {                                                                                                       // 1731
          top = !win.frameElement;                                                                                  // 1732
        } catch (_error) {}                                                                                         // 1733
        if (top) {                                                                                                  // 1734
          poll();                                                                                                   // 1735
        }                                                                                                           // 1736
      }                                                                                                             // 1737
      doc[add](pre + "DOMContentLoaded", init, false);                                                              // 1738
      doc[add](pre + "readystatechange", init, false);                                                              // 1739
      return win[add](pre + "load", init, false);                                                                   // 1740
    }                                                                                                               // 1741
  };                                                                                                                // 1742
                                                                                                                    // 1743
  Dropzone._autoDiscoverFunction = function() {                                                                     // 1744
    if (Dropzone.autoDiscover) {                                                                                    // 1745
      return Dropzone.discover();                                                                                   // 1746
    }                                                                                                               // 1747
  };                                                                                                                // 1748
                                                                                                                    // 1749
  contentLoaded(window, Dropzone._autoDiscoverFunction);                                                            // 1750
                                                                                                                    // 1751
}).call(this);                                                                                                      // 1752
                                                                                                                    // 1753
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/dbarrett_dropzonejs/lib/template.dropzonejs.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("dropzone");                                                                                   // 2
Template["dropzone"] = new Template("Template.dropzone", (function() {                                              // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    id: function() {                                                                                                // 6
      return Spacebars.mustache(view.lookup("id"));                                                                 // 7
    },                                                                                                              // 8
    class: "dropzone"                                                                                               // 9
  });                                                                                                               // 10
}));                                                                                                                // 11
                                                                                                                    // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/dbarrett_dropzonejs/lib/dropzonejs.js                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.dropzone.onRendered( function () {                                                                         // 1
  var options = _.extend( {}, Meteor.Dropzone.options, this.data );                                                 // 2
  if ( this.data.id ) {                                                                                             // 3
    this.dropzone = new Dropzone( '#' + this.data.id + '.dropzone', options );                                      // 4
  } else {                                                                                                          // 5
    this.$('.dropzone').dropzone( options );                                                                        // 6
  }                                                                                                                 // 7
} );                                                                                                                // 8
                                                                                                                    // 9
Meteor.startup(function() {                                                                                         // 10
  Dropzone.autoDiscover = false;                                                                                    // 11
  Meteor.Dropzone = {                                                                                               // 12
    options: {                                                                                                      // 13
                                                                                                                    // 14
    }                                                                                                               // 15
  }                                                                                                                 // 16
});                                                                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['dbarrett:dropzonejs'] = {};

})();
