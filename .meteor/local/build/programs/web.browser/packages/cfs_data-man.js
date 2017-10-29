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
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var DataMan;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/cfs_data-man/packages/cfs_data-man.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/cfs:data-man/client/Blob.js                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/* Blob.js                                                                                                          // 1
 * A Blob implementation.                                                                                           // 2
 * 2013-12-27                                                                                                       // 3
 *                                                                                                                  // 4
 * By Eli Grey, http://eligrey.com                                                                                  // 5
 * By Devin Samarin, https://github.com/eboyjr                                                                      // 6
 * License: X11/MIT                                                                                                 // 7
 *   See LICENSE.md                                                                                                 // 8
 */                                                                                                                 // 9
                                                                                                                    // 10
/*global self, unescape */                                                                                          // 11
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,                          // 12
  plusplus: true */                                                                                                 // 13
                                                                                                                    // 14
/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */                                           // 15
                                                                                                                    // 16
if (!(typeof Blob === "function" || typeof Blob === "object") || typeof URL === "undefined")                        // 17
if ((typeof Blob === "function" || typeof Blob === "object") && typeof webkitURL !== "undefined") self.URL = webkitURL;
else var Blob = (function (view) {                                                                                  // 19
    "use strict";                                                                                                   // 20
                                                                                                                    // 21
    var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || view.MSBlobBuilder || (function(view) {
        var                                                                                                         // 23
              get_class = function(object) {                                                                        // 24
                return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];                       // 25
            }                                                                                                       // 26
            , FakeBlobBuilder = function BlobBuilder() {                                                            // 27
                this.data = [];                                                                                     // 28
            }                                                                                                       // 29
            , FakeBlob = function Blob(data, type, encoding) {                                                      // 30
                this.data = data;                                                                                   // 31
                this.size = data.length;                                                                            // 32
                this.type = type;                                                                                   // 33
                this.encoding = encoding;                                                                           // 34
            }                                                                                                       // 35
            , FBB_proto = FakeBlobBuilder.prototype                                                                 // 36
            , FB_proto = FakeBlob.prototype                                                                         // 37
            , FileReaderSync = view.FileReaderSync                                                                  // 38
            , FileException = function(type) {                                                                      // 39
                this.code = this[this.name = type];                                                                 // 40
            }                                                                                                       // 41
            , file_ex_codes = (                                                                                     // 42
                  "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "                             // 43
                + "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"                                        // 44
            ).split(" ")                                                                                            // 45
            , file_ex_code = file_ex_codes.length                                                                   // 46
            , real_URL = view.URL || view.webkitURL || view                                                         // 47
            , real_create_object_URL = real_URL.createObjectURL                                                     // 48
            , real_revoke_object_URL = real_URL.revokeObjectURL                                                     // 49
            , URL = real_URL                                                                                        // 50
            , btoa = view.btoa                                                                                      // 51
            , atob = view.atob                                                                                      // 52
                                                                                                                    // 53
            , ArrayBuffer = view.ArrayBuffer                                                                        // 54
            , Uint8Array = view.Uint8Array                                                                          // 55
        ;                                                                                                           // 56
        FakeBlob.fake = FB_proto.fake = true;                                                                       // 57
        while (file_ex_code--) {                                                                                    // 58
            FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;                                // 59
        }                                                                                                           // 60
        if (!real_URL.createObjectURL) {                                                                            // 61
            URL = view.URL = {};                                                                                    // 62
        }                                                                                                           // 63
        URL.createObjectURL = function(blob) {                                                                      // 64
            var                                                                                                     // 65
                  type = blob.type                                                                                  // 66
                , data_URI_header                                                                                   // 67
            ;                                                                                                       // 68
            if (type === null) {                                                                                    // 69
                type = "application/octet-stream";                                                                  // 70
            }                                                                                                       // 71
            if (blob instanceof FakeBlob) {                                                                         // 72
                data_URI_header = "data:" + type;                                                                   // 73
                if (blob.encoding === "base64") {                                                                   // 74
                    return data_URI_header + ";base64," + blob.data;                                                // 75
                } else if (blob.encoding === "URI") {                                                               // 76
                    return data_URI_header + "," + decodeURIComponent(blob.data);                                   // 77
                } if (btoa) {                                                                                       // 78
                    return data_URI_header + ";base64," + btoa(blob.data);                                          // 79
                } else {                                                                                            // 80
                    return data_URI_header + "," + encodeURIComponent(blob.data);                                   // 81
                }                                                                                                   // 82
            } else if (real_create_object_URL) {                                                                    // 83
                return real_create_object_URL.call(real_URL, blob);                                                 // 84
            }                                                                                                       // 85
        };                                                                                                          // 86
        URL.revokeObjectURL = function(object_URL) {                                                                // 87
            if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {                                 // 88
                real_revoke_object_URL.call(real_URL, object_URL);                                                  // 89
            }                                                                                                       // 90
        };                                                                                                          // 91
        FBB_proto.append = function(data/*, endings*/) {                                                            // 92
            var bb = this.data;                                                                                     // 93
            // decode data to a binary string                                                                       // 94
            if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {                        // 95
                var                                                                                                 // 96
                      str = ""                                                                                      // 97
                    , buf = new Uint8Array(data)                                                                    // 98
                    , i = 0                                                                                         // 99
                    , buf_len = buf.length                                                                          // 100
                ;                                                                                                   // 101
                for (; i < buf_len; i++) {                                                                          // 102
                    str += String.fromCharCode(buf[i]);                                                             // 103
                }                                                                                                   // 104
                bb.push(str);                                                                                       // 105
            } else if (get_class(data) === "Blob" || get_class(data) === "File") {                                  // 106
                if (FileReaderSync) {                                                                               // 107
                    var fr = new FileReaderSync;                                                                    // 108
                    bb.push(fr.readAsBinaryString(data));                                                           // 109
                } else {                                                                                            // 110
                    // async FileReader won't work as BlobBuilder is sync                                           // 111
                    throw new FileException("NOT_READABLE_ERR");                                                    // 112
                }                                                                                                   // 113
            } else if (data instanceof FakeBlob) {                                                                  // 114
                if (data.encoding === "base64" && atob) {                                                           // 115
                    bb.push(atob(data.data));                                                                       // 116
                } else if (data.encoding === "URI") {                                                               // 117
                    bb.push(decodeURIComponent(data.data));                                                         // 118
                } else if (data.encoding === "raw") {                                                               // 119
                    bb.push(data.data);                                                                             // 120
                }                                                                                                   // 121
            } else {                                                                                                // 122
                if (typeof data !== "string") {                                                                     // 123
                    data += ""; // convert unsupported types to strings                                             // 124
                }                                                                                                   // 125
                // decode UTF-16 to binary string                                                                   // 126
                bb.push(unescape(encodeURIComponent(data)));                                                        // 127
            }                                                                                                       // 128
        };                                                                                                          // 129
        FBB_proto.getBlob = function(type) {                                                                        // 130
            if (!arguments.length) {                                                                                // 131
                type = null;                                                                                        // 132
            }                                                                                                       // 133
            return new FakeBlob(this.data.join(""), type, "raw");                                                   // 134
        };                                                                                                          // 135
        FBB_proto.toString = function() {                                                                           // 136
            return "[object BlobBuilder]";                                                                          // 137
        };                                                                                                          // 138
        FB_proto.slice = function(start, end, type) {                                                               // 139
            var args = arguments.length;                                                                            // 140
            if (args < 3) {                                                                                         // 141
                type = null;                                                                                        // 142
            }                                                                                                       // 143
            return new FakeBlob(                                                                                    // 144
                  this.data.slice(start, args > 1 ? end : this.data.length)                                         // 145
                , type                                                                                              // 146
                , this.encoding                                                                                     // 147
            );                                                                                                      // 148
        };                                                                                                          // 149
        FB_proto.toString = function() {                                                                            // 150
            return "[object Blob]";                                                                                 // 151
        };                                                                                                          // 152
        return FakeBlobBuilder;                                                                                     // 153
    }(view));                                                                                                       // 154
                                                                                                                    // 155
    return function Blob(blobParts, options) {                                                                      // 156
        var type = options ? (options.type || "") : "";                                                             // 157
        var builder = new BlobBuilder();                                                                            // 158
        if (blobParts) {                                                                                            // 159
            for (var i = 0, len = blobParts.length; i < len; i++) {                                                 // 160
                builder.append(blobParts[i]);                                                                       // 161
            }                                                                                                       // 162
        }                                                                                                           // 163
        return builder.getBlob(type);                                                                               // 164
    };                                                                                                              // 165
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));         // 166
                                                                                                                    // 167
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 177
}).call(this);                                                                                                         // 178
                                                                                                                       // 179
                                                                                                                       // 180
                                                                                                                       // 181
                                                                                                                       // 182
                                                                                                                       // 183
                                                                                                                       // 184
(function () {                                                                                                         // 185
                                                                                                                       // 186
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/cfs:data-man/client/data-man-api.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/**                                                                                                                 // 1
 * @method DataMan                                                                                                  // 2
 * @public                                                                                                          // 3
 * @constructor                                                                                                     // 4
 * @param {File|Blob|ArrayBuffer|Uint8Array|String} data The data that you want to manipulate.                      // 5
 * @param {String} [type] The data content (MIME) type, if known. Required if the first argument is an ArrayBuffer, Uint8Array, or URL
 */                                                                                                                 // 7
DataMan = function DataMan(data, type) {                                                                            // 8
  var self = this;                                                                                                  // 9
                                                                                                                    // 10
  if (!data) {                                                                                                      // 11
    throw new Error("DataMan constructor requires a data argument");                                                // 12
  }                                                                                                                 // 13
                                                                                                                    // 14
  // The end result of all this is that we will have one of the following set:                                      // 15
  // - self.blob                                                                                                    // 16
  // - self.url                                                                                                     // 17
  // Unless we already have in-memory data, we don't load anything into memory                                      // 18
  // and instead rely on obtaining a read stream when the time comes.                                               // 19
  if (typeof File !== "undefined" && data instanceof File) {                                                        // 20
    self.blob = data; // File inherits from Blob so this is OK                                                      // 21
    self._type = data.type;                                                                                         // 22
  } else if (typeof Blob !== "undefined" && data instanceof Blob) {                                                 // 23
    self.blob = data;                                                                                               // 24
    self._type = data.type;                                                                                         // 25
  } else if (typeof ArrayBuffer !== "undefined" && data instanceof ArrayBuffer || EJSON.isBinary(data)) {           // 26
    if (typeof Blob === "undefined") {                                                                              // 27
      throw new Error("Browser must support Blobs to handle an ArrayBuffer or Uint8Array");                         // 28
    }                                                                                                               // 29
    if (!type) {                                                                                                    // 30
      throw new Error("DataMan constructor requires a type argument when passed an ArrayBuffer or Uint8Array");     // 31
    }                                                                                                               // 32
    self.blob = new Blob([data], {type: type});                                                                     // 33
    self._type = type;                                                                                              // 34
  } else if (typeof data === "string") {                                                                            // 35
    if (data.slice(0, 5) === "data:") {                                                                             // 36
      self._type = data.slice(5, data.indexOf(';'));                                                                // 37
      self.blob = dataURItoBlob(data, self._type);                                                                  // 38
    } else if (data.slice(0, 5) === "http:" || data.slice(0, 6) === "https:") {                                     // 39
      if (!type) {                                                                                                  // 40
        throw new Error("DataMan constructor requires a type argument when passed a URL");                          // 41
      }                                                                                                             // 42
      self.url = data;                                                                                              // 43
      self._type = type;                                                                                            // 44
    } else {                                                                                                        // 45
      throw new Error("DataMan constructor received unrecognized data string");                                     // 46
    }                                                                                                               // 47
  } else {                                                                                                          // 48
    throw new Error("DataMan constructor received data that it doesn't support");                                   // 49
  }                                                                                                                 // 50
};                                                                                                                  // 51
                                                                                                                    // 52
/**                                                                                                                 // 53
 * @method DataMan.prototype.getBlob                                                                                // 54
 * @public                                                                                                          // 55
 * @param {Function} [callback] - callback(error, blob)                                                             // 56
 * @returns {undefined|Blob}                                                                                        // 57
 *                                                                                                                  // 58
 * Passes a Blob representing this data to a callback or returns                                                    // 59
 * the Blob if no callback is provided. A callback is required                                                      // 60
 * if getting a Blob for a URL.                                                                                     // 61
 */                                                                                                                 // 62
DataMan.prototype.getBlob = function dataManGetBlob(callback) {                                                     // 63
  var self = this;                                                                                                  // 64
                                                                                                                    // 65
  if (callback) {                                                                                                   // 66
    if (self.blob) {                                                                                                // 67
      callback(null, self.blob);                                                                                    // 68
    } else if (self.url) {                                                                                          // 69
      var xhr = new XMLHttpRequest();                                                                               // 70
      xhr.open('GET', self.url, true);                                                                              // 71
      xhr.responseType = "blob";                                                                                    // 72
      xhr.onload = function(data) {                                                                                 // 73
        self.blob = xhr.response;                                                                                   // 74
        callback(null, self.blob);                                                                                  // 75
      };                                                                                                            // 76
      xhr.onerror = function(err) {                                                                                 // 77
        callback(err);                                                                                              // 78
      };                                                                                                            // 79
      xhr.send();                                                                                                   // 80
    }                                                                                                               // 81
  } else {                                                                                                          // 82
    if (self.url)                                                                                                   // 83
      throw new Error('DataMan.getBlob requires a callback when managing a URL');                                   // 84
    return self.blob;                                                                                               // 85
  }                                                                                                                 // 86
};                                                                                                                  // 87
                                                                                                                    // 88
/**                                                                                                                 // 89
 * @method DataMan.prototype.getBinary                                                                              // 90
 * @public                                                                                                          // 91
 * @param {Number} [start] - First byte position to read.                                                           // 92
 * @param {Number} [end] - Last byte position to read.                                                              // 93
 * @param {Function} callback - callback(error, binaryData)                                                         // 94
 * @returns {undefined}                                                                                             // 95
 *                                                                                                                  // 96
 * Passes a Uint8Array representing this data to a callback.                                                        // 97
 */                                                                                                                 // 98
DataMan.prototype.getBinary = function dataManGetBinary(start, end, callback) {                                     // 99
  var self = this;                                                                                                  // 100
                                                                                                                    // 101
  if (typeof start === "function") {                                                                                // 102
    callback = start;                                                                                               // 103
  }                                                                                                                 // 104
  callback = callback || defaultCallback;                                                                           // 105
                                                                                                                    // 106
  function read(blob) {                                                                                             // 107
    if (typeof FileReader === "undefined") {                                                                        // 108
      callback(new Error("Browser does not support FileReader"));                                                   // 109
      return;                                                                                                       // 110
    }                                                                                                               // 111
                                                                                                                    // 112
    var reader = new FileReader();                                                                                  // 113
    reader.onload = function(evt) {                                                                                 // 114
      callback(null, new Uint8Array(evt.target.result));                                                            // 115
    };                                                                                                              // 116
    reader.onerror = function(err) {                                                                                // 117
      callback(err);                                                                                                // 118
    };                                                                                                              // 119
    reader.readAsArrayBuffer(blob);                                                                                 // 120
  }                                                                                                                 // 121
                                                                                                                    // 122
  self.getBlob(function (error, blob) {                                                                             // 123
    if (error) {                                                                                                    // 124
      callback(error);                                                                                              // 125
    } else {                                                                                                        // 126
      if (typeof start === "number" && typeof end === "number") {                                                   // 127
        var size = blob.size;                                                                                       // 128
        // Return the requested chunk of binary data                                                                // 129
        if (start >= size) {                                                                                        // 130
          callback(new Error("DataMan.getBinary: start position beyond end of data (" + size + ")"));               // 131
          return;                                                                                                   // 132
        }                                                                                                           // 133
        end = Math.min(size, end);                                                                                  // 134
                                                                                                                    // 135
        var slice = blob.slice || blob.webkitSlice || blob.mozSlice;                                                // 136
        if (typeof slice === 'undefined') {                                                                         // 137
          callback(new Error('Browser does not support File.slice'));                                               // 138
          return;                                                                                                   // 139
        }                                                                                                           // 140
                                                                                                                    // 141
        read(slice.call(blob, start, end, self._type));                                                             // 142
      } else {                                                                                                      // 143
        // Return the entire binary data                                                                            // 144
        read(blob);                                                                                                 // 145
      }                                                                                                             // 146
    }                                                                                                               // 147
  });                                                                                                               // 148
                                                                                                                    // 149
};                                                                                                                  // 150
                                                                                                                    // 151
/** @method DataMan.prototype.saveAs                                                                                // 152
 * @public                                                                                                          // 153
 * @param {String} [filename]                                                                                       // 154
 * @return {undefined}                                                                                              // 155
 *                                                                                                                  // 156
 * Tells the browser to save the data like a normal downloaded file,                                                // 157
 * using the provided filename.                                                                                     // 158
 *                                                                                                                  // 159
 */                                                                                                                 // 160
DataMan.prototype.saveAs = function dataManSaveAs(filename) {                                                       // 161
  var self = this;                                                                                                  // 162
                                                                                                                    // 163
  if (typeof window === "undefined")                                                                                // 164
    throw new Error("window must be defined to use saveLocal");                                                     // 165
                                                                                                                    // 166
  if (!window.saveAs) {                                                                                             // 167
    console.warn('DataMan.saveAs: window.saveAs not supported by this browser - add cfs-filesaver package');        // 168
    return;                                                                                                         // 169
  }                                                                                                                 // 170
                                                                                                                    // 171
  self.getBlob(function (error, blob) {                                                                             // 172
    if (error) {                                                                                                    // 173
      throw error;                                                                                                  // 174
    } else {                                                                                                        // 175
      window.saveAs(blob, filename);                                                                                // 176
    }                                                                                                               // 177
  });                                                                                                               // 178
};                                                                                                                  // 179
                                                                                                                    // 180
/**                                                                                                                 // 181
 * @method DataMan.prototype.getDataUri                                                                             // 182
 * @public                                                                                                          // 183
 * @param {function} callback callback(err, dataUri)                                                                // 184
 */                                                                                                                 // 185
DataMan.prototype.getDataUri = function dataManGetDataUri(callback) {                                               // 186
  // XXX: We could consider using: URL.createObjectURL(blob);                                                       // 187
  // This will create a reference to the blob data instead of a clone                                               // 188
  // This is part of the File API - as the rest - Not sure how to generally                                         // 189
  // support from IE10, FF26, Chrome 31, safari 7, opera 19, ios 6, android 4                                       // 190
                                                                                                                    // 191
  var self = this;                                                                                                  // 192
                                                                                                                    // 193
  if (typeof callback !== 'function')                                                                               // 194
    throw new Error("getDataUri requires callback function");                                                       // 195
                                                                                                                    // 196
  if (typeof FileReader === "undefined") {                                                                          // 197
    callback(new Error("Browser does not support FileReader"));                                                     // 198
    return;                                                                                                         // 199
  }                                                                                                                 // 200
                                                                                                                    // 201
  var fileReader = new FileReader();                                                                                // 202
  fileReader.onload = function(event) {                                                                             // 203
    var dataUri = event.target.result;                                                                              // 204
    callback(null, dataUri);                                                                                        // 205
  };                                                                                                                // 206
  fileReader.onerror = function(err) {                                                                              // 207
    callback(err);                                                                                                  // 208
  };                                                                                                                // 209
                                                                                                                    // 210
  self.getBlob(function (error, blob) {                                                                             // 211
    if (error) {                                                                                                    // 212
      callback(error);                                                                                              // 213
    } else {                                                                                                        // 214
      fileReader.readAsDataURL(blob);                                                                               // 215
    }                                                                                                               // 216
  });                                                                                                               // 217
};                                                                                                                  // 218
                                                                                                                    // 219
/**                                                                                                                 // 220
 * @method DataMan.prototype.size                                                                                   // 221
 * @public                                                                                                          // 222
 * @param {function} [callback] callback(err, size)                                                                 // 223
 *                                                                                                                  // 224
 * Passes the size of the data to the callback, if provided,                                                        // 225
 * or returns it. A callback is required to get the size of a URL on the client.                                    // 226
 */                                                                                                                 // 227
DataMan.prototype.size = function dataManSize(callback) {                                                           // 228
  var self = this;                                                                                                  // 229
                                                                                                                    // 230
  if (callback) {                                                                                                   // 231
    if (typeof self._size === "number") {                                                                           // 232
      callback(null, self._size);                                                                                   // 233
    } else {                                                                                                        // 234
      self.getBlob(function (error, blob) {                                                                         // 235
        if (error) {                                                                                                // 236
          callback(error);                                                                                          // 237
        } else {                                                                                                    // 238
          self._size = blob.size;                                                                                   // 239
          callback(null, self._size);                                                                               // 240
        }                                                                                                           // 241
      });                                                                                                           // 242
    }                                                                                                               // 243
  } else {                                                                                                          // 244
    if (self.url) {                                                                                                 // 245
      throw new Error("On the client, DataMan.size requires a callback when getting size for a URL on the client"); // 246
    } else if (typeof self._size === "number") {                                                                    // 247
      return self._size;                                                                                            // 248
    } else {                                                                                                        // 249
      var blob = self.getBlob();                                                                                    // 250
      self._size = blob.size;                                                                                       // 251
      return self._size;                                                                                            // 252
    }                                                                                                               // 253
  }                                                                                                                 // 254
};                                                                                                                  // 255
                                                                                                                    // 256
/**                                                                                                                 // 257
 * @method DataMan.prototype.type                                                                                   // 258
 * @public                                                                                                          // 259
 *                                                                                                                  // 260
 * Returns the type of the data.                                                                                    // 261
 */                                                                                                                 // 262
DataMan.prototype.type = function dataManType() {                                                                   // 263
  return this._type;                                                                                                // 264
};                                                                                                                  // 265
                                                                                                                    // 266
/**                                                                                                                 // 267
 * @method dataURItoBlob                                                                                            // 268
 * @private                                                                                                         // 269
 * @param {String} dataURI The data URI                                                                             // 270
 * @param {String} dataTYPE The content type                                                                        // 271
 * @returns {Blob} A new Blob instance                                                                              // 272
 *                                                                                                                  // 273
 * Converts a data URI to a Blob.                                                                                   // 274
 */                                                                                                                 // 275
function dataURItoBlob(dataURI, dataTYPE) {                                                                         // 276
  var str = atob(dataURI.split(',')[1]), array = [];                                                                // 277
  for(var i = 0; i < str.length; i++) array.push(str.charCodeAt(i));                                                // 278
  return new Blob([new Uint8Array(array)], {type: dataTYPE});                                                       // 279
}                                                                                                                   // 280
                                                                                                                    // 281
/**                                                                                                                 // 282
 * @method defaultCallback                                                                                          // 283
 * @private                                                                                                         // 284
 * @param {Error} [err]                                                                                             // 285
 * @returns {undefined}                                                                                             // 286
 *                                                                                                                  // 287
 * Can be used as a default callback for client methods that need a callback.                                       // 288
 * Simply throws the provided error if there is one.                                                                // 289
 */                                                                                                                 // 290
function defaultCallback(err) {                                                                                     // 291
  if (err) {                                                                                                        // 292
    // Show gentle error if Meteor error                                                                            // 293
    if (err instanceof Meteor.Error) {                                                                              // 294
      console.error(err.message);                                                                                   // 295
    } else {                                                                                                        // 296
      // Normal error, just throw error                                                                             // 297
      throw err;                                                                                                    // 298
    }                                                                                                               // 299
                                                                                                                    // 300
  }                                                                                                                 // 301
}                                                                                                                   // 302
                                                                                                                    // 303
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 497
}).call(this);                                                                                                         // 498
                                                                                                                       // 499
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['cfs:data-man'] = {}, {
  DataMan: DataMan
});

})();
