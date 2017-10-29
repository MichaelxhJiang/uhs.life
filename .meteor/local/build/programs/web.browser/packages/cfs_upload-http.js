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
var PowerQueue = Package['cfs:power-queue'].PowerQueue;
var ReactiveList = Package['cfs:reactive-list'].ReactiveList;

/* Package-scope variables */
var httpCall, buildUrl, encodeParams, encodeString, makeErrorByStatus, populateData, UploadTransferQueue;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/cfs_upload-http/packages/cfs_upload-http.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/cfs:upload-http/http-call-client.js                                                                  //    // 5
//                                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                                 //    // 8
/*                                                                                                               // 1  // 9
 * We use this instead of HTTP.call from the http package for now. If/when                                       // 2  // 10
 * PR 1670 is merged and released, we can probably remove this file and begin                                    // 3  // 11
 * using HTTP.call directly.                                                                                     // 4  // 12
 */                                                                                                              // 5  // 13
                                                                                                                 // 6  // 14
httpCall = function(method, url, options, callback) {                                                            // 7  // 15
                                                                                                                 // 8  // 16
  ////////// Process arguments //////////                                                                        // 9  // 17
                                                                                                                 // 10
  if (! callback && typeof options === "function") {                                                             // 11
    // support (method, url, callback) argument list                                                             // 12
    callback = options;                                                                                          // 13
    options = null;                                                                                              // 14
  }                                                                                                              // 15
                                                                                                                 // 16
  options = options || {};                                                                                       // 17
                                                                                                                 // 18
  if (typeof callback !== "function")                                                                            // 19
    throw new Error(                                                                                             // 20
      "Can't make a blocking HTTP call from the client; callback required.");                                    // 21
                                                                                                                 // 22
  method = (method || "").toUpperCase();                                                                         // 23
                                                                                                                 // 24
  var headers = {};                                                                                              // 25
                                                                                                                 // 26
  var content = options.content;                                                                                 // 27
  if (options.data) {                                                                                            // 28
    content = JSON.stringify(options.data);                                                                      // 29
    headers['Content-Type'] = 'application/json';                                                                // 30
  }                                                                                                              // 31
                                                                                                                 // 32
  var params_for_url, params_for_body;                                                                           // 33
  if (content || method === "GET" || method === "HEAD")                                                          // 34
    params_for_url = options.params;                                                                             // 35
  else                                                                                                           // 36
    params_for_body = options.params;                                                                            // 37
                                                                                                                 // 38
  var query_match = /^(.*?)(\?.*)?$/.exec(url);                                                                  // 39
  url = buildUrl(query_match[1], query_match[2],                                                                 // 40
                 options.query, params_for_url);                                                                 // 41
                                                                                                                 // 42
  if (options.followRedirects === false)                                                                         // 43
    throw new Error("Option followRedirects:false not supported on client.");                                    // 44
                                                                                                                 // 45
  var username, password;                                                                                        // 46
  if (options.auth) {                                                                                            // 47
    var colonLoc = options.auth.indexOf(':');                                                                    // 48
    if (colonLoc < 0)                                                                                            // 49
      throw new Error('auth option should be of the form "username:password"');                                  // 50
    username = options.auth.substring(0, colonLoc);                                                              // 51
    password = options.auth.substring(colonLoc+1);                                                               // 52
  }                                                                                                              // 53
                                                                                                                 // 54
  if (params_for_body) {                                                                                         // 55
    content = encodeParams(params_for_body);                                                                     // 56
  }                                                                                                              // 57
                                                                                                                 // 58
  FS.Utility.extend(headers, options.headers || {});                                                             // 59
                                                                                                                 // 60
  ////////// Callback wrapping //////////                                                                        // 61
                                                                                                                 // 62
  // wrap callback to add a 'response' property on an error, in case                                             // 63
  // we have both (http 4xx/5xx error, which has a response payload)                                             // 64
  callback = (function(callback) {                                                                               // 65
    return function(error, response) {                                                                           // 66
      if (error && response)                                                                                     // 67
        error.response = response;                                                                               // 68
      callback(error, response);                                                                                 // 69
    };                                                                                                           // 70
  })(callback);                                                                                                  // 71
                                                                                                                 // 72
  // safety belt: only call the callback once.                                                                   // 73
  callback = FS.Utility.once(callback);                                                                          // 74
                                                                                                                 // 75
                                                                                                                 // 76
  ////////// Kickoff! //////////                                                                                 // 77
                                                                                                                 // 78
  // from this point on, errors are because of something remote, not                                             // 79
  // something we should check in advance. Turn exceptions into error                                            // 80
  // results.                                                                                                    // 81
  try {                                                                                                          // 82
    // setup XHR object                                                                                          // 83
    var xhr;                                                                                                     // 84
    if (typeof XMLHttpRequest !== "undefined")                                                                   // 85
      xhr = new XMLHttpRequest();                                                                                // 86
    else if (typeof ActiveXObject !== "undefined")                                                               // 87
      xhr = new ActiveXObject("Microsoft.XMLHttp"); // IE6                                                       // 88
    else                                                                                                         // 89
      throw new Error("Can't create XMLHttpRequest"); // ???                                                     // 90
                                                                                                                 // 91
    xhr.open(method, url, true, username, password);                                                             // 92
                                                                                                                 // 93
    // support custom "ejson-binary" response type                                                               // 94
    // and all browser-supported types                                                                           // 95
    var convertToBinary;                                                                                         // 96
    if (options.responseType === "ejson-binary") {                                                               // 97
      xhr.responseType = "arraybuffer";                                                                          // 98
      convertToBinary = true;                                                                                    // 99
    } else {                                                                                                     // 100
      xhr.responseType = options.responseType;                                                                   // 101
    }                                                                                                            // 102
                                                                                                                 // 103
    for (var k in headers)                                                                                       // 104
      xhr.setRequestHeader(k, headers[k]);                                                                       // 105
                                                                                                                 // 106
                                                                                                                 // 107
    // setup timeout                                                                                             // 108
    var timed_out = false;                                                                                       // 109
    var timer;                                                                                                   // 110
    if (options.timeout) {                                                                                       // 111
      timer = Meteor.setTimeout(function() {                                                                     // 112
        timed_out = true;                                                                                        // 113
        xhr.abort();                                                                                             // 114
      }, options.timeout);                                                                                       // 115
    };                                                                                                           // 116
                                                                                                                 // 117
    // callback on complete                                                                                      // 118
    xhr.onreadystatechange = function(evt) {                                                                     // 119
      if (xhr.readyState === 4) { // COMPLETE                                                                    // 120
        if (timer)                                                                                               // 121
          Meteor.clearTimeout(timer);                                                                            // 122
                                                                                                                 // 123
        if (timed_out) {                                                                                         // 124
          callback(new Error("timeout"));                                                                        // 125
        } else if (! xhr.status) {                                                                               // 126
          // no HTTP response                                                                                    // 127
          callback(new Error("network"));                                                                        // 128
        } else {                                                                                                 // 129
                                                                                                                 // 130
          var response = {};                                                                                     // 131
          response.statusCode = xhr.status;                                                                      // 132
                                                                                                                 // 133
          var body = xhr.response || xhr.responseText;                                                           // 134
                                                                                                                 // 135
          // Some browsers don't yet support "json" responseType,                                                // 136
          // but we can replicate it                                                                             // 137
          if (options.responseType === "json" && typeof body === "string") {                                     // 138
            try {                                                                                                // 139
              body = JSON.parse(body);                                                                           // 140
            } catch (err) {                                                                                      // 141
              body = null;                                                                                       // 142
            }                                                                                                    // 143
          }                                                                                                      // 144
                                                                                                                 // 145
          // Add support for a custom responseType: "ejson-binary"                                               // 146
          if (convertToBinary && typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && body instanceof ArrayBuffer) {
            var view = new Uint8Array(body);                                                                     // 148
            var len = body.byteLength;                                                                           // 149
            var binaryBody = EJSON.newBinary(len);                                                               // 150
            for (var i = 0; i < len; i++) {                                                                      // 151
              binaryBody[i] = view[i];                                                                           // 152
            }                                                                                                    // 153
            body = binaryBody;                                                                                   // 154
          }                                                                                                      // 155
                                                                                                                 // 156
          response.content = body;                                                                               // 157
                                                                                                                 // 158
          response.headers = {};                                                                                 // 159
          var header_str = xhr.getAllResponseHeaders();                                                          // 160
                                                                                                                 // 161
          // https://github.com/meteor/meteor/issues/553                                                         // 162
          //                                                                                                     // 163
          // In Firefox there is a weird issue, sometimes                                                        // 164
          // getAllResponseHeaders returns the empty string, but                                                 // 165
          // getResponseHeader returns correct results. Possibly this                                            // 166
          // issue:                                                                                              // 167
          // https://bugzilla.mozilla.org/show_bug.cgi?id=608735                                                 // 168
          //                                                                                                     // 169
          // If this happens we can't get a full list of headers, but                                            // 170
          // at least get content-type so our JSON decoding happens                                              // 171
          // correctly. In theory, we could try and rescue more header                                           // 172
          // values with a list of common headers, but content-type is                                           // 173
          // the only vital one for now.                                                                         // 174
          if ("" === header_str && xhr.getResponseHeader("content-type"))                                        // 175
            header_str =                                                                                         // 176
            "content-type: " + xhr.getResponseHeader("content-type");                                            // 177
                                                                                                                 // 178
          var headers_raw = header_str.split(/\r?\n/);                                                           // 179
          FS.Utility.each(headers_raw, function (h) {                                                            // 180
            var m = /^(.*?):(?:\s+)(.*)$/.exec(h);                                                               // 181
            if (m && m.length === 3)                                                                             // 182
              response.headers[m[1].toLowerCase()] = m[2];                                                       // 183
          });                                                                                                    // 184
                                                                                                                 // 185
          populateData(response);                                                                                // 186
                                                                                                                 // 187
          var error = null;                                                                                      // 188
          if (response.statusCode >= 400)                                                                        // 189
            error = makeErrorByStatus(response.statusCode, response.content);                                    // 190
                                                                                                                 // 191
          callback(error, response);                                                                             // 192
        }                                                                                                        // 193
      }                                                                                                          // 194
    };                                                                                                           // 195
                                                                                                                 // 196
    // send it on its way                                                                                        // 197
    xhr.send(content);                                                                                           // 198
                                                                                                                 // 199
  } catch (err) {                                                                                                // 200
    callback(err);                                                                                               // 201
  }                                                                                                              // 202
                                                                                                                 // 203
};                                                                                                               // 204
                                                                                                                 // 205
buildUrl = function(before_qmark, from_qmark, opt_query, opt_params) {                                           // 206
  var url_without_query = before_qmark;                                                                          // 207
  var query = from_qmark ? from_qmark.slice(1) : null;                                                           // 208
                                                                                                                 // 209
  if (typeof opt_query === "string")                                                                             // 210
    query = String(opt_query);                                                                                   // 211
                                                                                                                 // 212
  if (opt_params) {                                                                                              // 213
    query = query || "";                                                                                         // 214
    var prms = encodeParams(opt_params);                                                                         // 215
    if (query && prms)                                                                                           // 216
      query += '&';                                                                                              // 217
    query += prms;                                                                                               // 218
  }                                                                                                              // 219
                                                                                                                 // 220
  var url = url_without_query;                                                                                   // 221
  if (query !== null)                                                                                            // 222
    url += ("?"+query);                                                                                          // 223
                                                                                                                 // 224
  return url;                                                                                                    // 225
};                                                                                                               // 226
                                                                                                                 // 227
encodeParams = function(params) {                                                                                // 228
  var buf = [];                                                                                                  // 229
  FS.Utility.each(params, function(value, key) {                                                                 // 230
    if (buf.length)                                                                                              // 231
      buf.push('&');                                                                                             // 232
    buf.push(encodeString(key), '=', encodeString(value));                                                       // 233
  });                                                                                                            // 234
  return buf.join('').replace(/%20/g, '+');                                                                      // 235
};                                                                                                               // 236
                                                                                                                 // 237
encodeString = function(str) {                                                                                   // 238
  return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");                               // 239
};                                                                                                               // 240
                                                                                                                 // 241
makeErrorByStatus = function(statusCode, content) {                                                              // 242
  var MAX_LENGTH = 160; // if you change this, also change the appropriate test                                  // 243
                                                                                                                 // 244
  var truncate = function(str, length) {                                                                         // 245
    return str.length > length ? str.slice(0, length) + '...' : str;                                             // 246
  };                                                                                                             // 247
                                                                                                                 // 248
  var message = "failed [" + statusCode + "]";                                                                   // 249
  if (content)                                                                                                   // 250
    message += " " + truncate(content.replace(/\n/g, " "), MAX_LENGTH);                                          // 251
                                                                                                                 // 252
  return new Error(message);                                                                                     // 253
};                                                                                                               // 254
                                                                                                                 // 255
// Fill in `response.data` if the content-type is JSON.                                                          // 256
populateData = function(response) {                                                                              // 257
  // Read Content-Type header, up to a ';' if there is one.                                                      // 258
  // A typical header might be "application/json; charset=utf-8"                                                 // 259
  // or just "application/json".                                                                                 // 260
  var contentType = (response.headers['content-type'] || ';').split(';')[0];                                     // 261
                                                                                                                 // 262
  // Only try to parse data as JSON if server sets correct content type.                                         // 263
  if (FS.Utility.include(['application/json', 'text/javascript'], contentType)) {                                // 264
    try {                                                                                                        // 265
      response.data = JSON.parse(response.content);                                                              // 266
    } catch (err) {                                                                                              // 267
      response.data = null;                                                                                      // 268
    }                                                                                                            // 269
  } else {                                                                                                       // 270
    response.data = null;                                                                                        // 271
  }                                                                                                              // 272
};                                                                                                               // 273
                                                                                                                 // 274
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 283
                                                                                                                       // 284
}).call(this);                                                                                                         // 285
                                                                                                                       // 286
                                                                                                                       // 287
                                                                                                                       // 288
                                                                                                                       // 289
                                                                                                                       // 290
                                                                                                                       // 291
(function () {                                                                                                         // 292
                                                                                                                       // 293
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 294
//                                                                                                               //    // 295
// packages/cfs:upload-http/upload-http-common.js                                                                //    // 296
//                                                                                                               //    // 297
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 298
                                                                                                                 //    // 299
FS.HTTP = FS.HTTP || {};                                                                                         // 1  // 300
                                                                                                                 // 2  // 301
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 302
                                                                                                                       // 303
}).call(this);                                                                                                         // 304
                                                                                                                       // 305
                                                                                                                       // 306
                                                                                                                       // 307
                                                                                                                       // 308
                                                                                                                       // 309
                                                                                                                       // 310
(function () {                                                                                                         // 311
                                                                                                                       // 312
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 313
//                                                                                                               //    // 314
// packages/cfs:upload-http/upload-http-client.js                                                                //    // 315
//                                                                                                               //    // 316
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 317
                                                                                                                 //    // 318
/*                                                                                                               // 1  // 319
 * HTTP Upload Transfer Queue                                                                                    // 2  // 320
 */                                                                                                              // 3  // 321
                                                                                                                 // 4  // 322
// 2MB default upload chunk size                                                                                 // 5  // 323
// Can be overridden by user with FS.config.uploadChunkSize or per FS.Collection in collection options           // 6  // 324
var defaultChunkSize = 2 * 1024 * 1024;                                                                          // 7  // 325
                                                                                                                 // 8  // 326
/**                                                                                                              // 9  // 327
 * @private                                                                                                      // 10
 * @param {Object} task                                                                                          // 11
 * @param {Function} next                                                                                        // 12
 * @return {undefined}                                                                                           // 13
 */                                                                                                              // 14
var _taskHandler = function(task, next) {                                                                        // 15
  FS.debug && console.log("uploading chunk " + task.chunk + ", bytes " + task.start + " to " + Math.min(task.end, task.fileObj.size()) + " of " + task.fileObj.size());
  task.fileObj.data.getBinary(task.start, task.end, function gotBinaryCallback(err, data) {                      // 17
    if (err) {                                                                                                   // 18
      next(new Meteor.Error(err.error, err.message));                                                            // 19
    } else {                                                                                                     // 20
                                                                                                                 // 21
      FS.debug && console.log('PUT to URL', task.url, task.urlParams);                                           // 22
                                                                                                                 // 23
      httpCall("PUT", task.url, {                                                                                // 24
        params: FS.Utility.extend({chunk: task.chunk}, task.urlParams),                                          // 25
        content: data,                                                                                           // 26
        headers: {                                                                                               // 27
          'Content-Type': task.fileObj.type()                                                                    // 28
        }                                                                                                        // 29
      }, function(error, result) {                                                                               // 30
        task = null;                                                                                             // 31
        if (error) {                                                                                             // 32
          next(new Meteor.Error(error.error, error.message));                                                    // 33
        } else {                                                                                                 // 34
          next();                                                                                                // 35
        }                                                                                                        // 36
      });                                                                                                        // 37
                                                                                                                 // 38
    }                                                                                                            // 39
  });                                                                                                            // 40
};                                                                                                               // 41
                                                                                                                 // 42
/**                                                                                                              // 43
 * @private                                                                                                      // 44
 * @param {Object} data                                                                                          // 45
 * @param {Function} addTask                                                                                     // 46
 * @return {undefined}                                                                                           // 47
 */                                                                                                              // 48
var _errorHandler = function(data, addTask, failures) {                                                          // 49
  // If file upload fails                                                                                        // 50
  // TODO We should retry a few times and then emit error?                                                       // 51
  // data.fileObj.emit("error", error);                                                                          // 52
};                                                                                                               // 53
                                                                                                                 // 54
/** @method UploadTransferQueue                                                                                  // 55
 * @namespace UploadTransferQueue                                                                                // 56
 * @constructor                                                                                                  // 57
 * @param {Object} [options]                                                                                     // 58
 */                                                                                                              // 59
UploadTransferQueue = function(options) {                                                                        // 60
  // Rig options                                                                                                 // 61
  options = options || {};                                                                                       // 62
                                                                                                                 // 63
  // Init the power queue                                                                                        // 64
  var self = new PowerQueue({                                                                                    // 65
    name: 'HTTPUploadTransferQueue',                                                                             // 66
    // spinalQueue: ReactiveList,                                                                                // 67
    maxProcessing: 1,                                                                                            // 68
    maxFailures: 5,                                                                                              // 69
    jumpOnFailure: true,                                                                                         // 70
    autostart: true,                                                                                             // 71
    isPaused: false,                                                                                             // 72
    filo: false,                                                                                                 // 73
    debug: FS.debug                                                                                              // 74
  });                                                                                                            // 75
                                                                                                                 // 76
  // Keep track of uploaded files via this queue                                                                 // 77
  self.files = {};                                                                                               // 78
                                                                                                                 // 79
  // cancel maps onto queue reset                                                                                // 80
  self.cancel = self.reset;                                                                                      // 81
                                                                                                                 // 82
  /**                                                                                                            // 83
    * @method UploadTransferQueue.isUploadingFile                                                                // 84
    * @param {FS.File} fileObj File to check if uploading                                                        // 85
    * @returns {Boolean} True if the file is uploading                                                           // 86
    *                                                                                                            // 87
    * @todo Maybe have a similar function for accessing the file upload queue?                                   // 88
    */                                                                                                           // 89
  self.isUploadingFile = function(fileObj) {                                                                     // 90
    // Check if file is already in queue                                                                         // 91
    return !!(fileObj && fileObj._id && fileObj.collectionName && (self.files[fileObj.collectionName] || {})[fileObj._id]);
  };                                                                                                             // 93
                                                                                                                 // 94
  /** @method UploadTransferQueue.resumeUploadingFile                                                            // 95
   * @param {FS.File} File to resume uploading                                                                   // 96
   * @todo Not sure if this is the best way to handle resumes                                                    // 97
   */                                                                                                            // 98
  self.resumeUploadingFile = function(fileObj) {                                                                 // 99
    // Make sure we are handed a FS.File                                                                         // 100
    if (!(fileObj instanceof FS.File)) {                                                                         // 101
      throw new Error('Transfer queue expects a FS.File');                                                       // 102
    }                                                                                                            // 103
                                                                                                                 // 104
    if (fileObj.isMounted()) {                                                                                   // 105
      // This might still be true, preventing upload, if                                                         // 106
      // there was a server restart without client restart.                                                      // 107
      self.files[fileObj.collectionName] = self.files[fileObj.collectionName] || {};                             // 108
      self.files[fileObj.collectionName][fileObj._id] = false;                                                   // 109
      // Kick off normal upload                                                                                  // 110
      self.uploadFile(fileObj);                                                                                  // 111
    }                                                                                                            // 112
  };                                                                                                             // 113
                                                                                                                 // 114
  /** @method UploadTransferQueue.uploadFile                                                                     // 115
   * @param {FS.File} File to upload                                                                             // 116
   * @todo Check that a file can only be added once - maybe a visual helper on the FS.File?                      // 117
   * @todo Have an initial request to the server getting uploaded chunks for resume                              // 118
   */                                                                                                            // 119
  self.uploadFile = function(fileObj) {                                                                          // 120
    FS.debug && console.log("HTTP uploadFile");                                                                  // 121
                                                                                                                 // 122
    // Make sure we are handed a FS.File                                                                         // 123
    if (!(fileObj instanceof FS.File)) {                                                                         // 124
      throw new Error('Transfer queue expects a FS.File');                                                       // 125
    }                                                                                                            // 126
                                                                                                                 // 127
    // Make sure that we have size as number                                                                     // 128
    if (typeof fileObj.size() !== 'number') {                                                                    // 129
      throw new Error('TransferQueue upload failed: fileObj size not set');                                      // 130
    }                                                                                                            // 131
                                                                                                                 // 132
    // We don't add the file if it's already in transfer or if already uploaded                                  // 133
    if (self.isUploadingFile(fileObj) || fileObj.isUploaded()) {                                                 // 134
      return;                                                                                                    // 135
    }                                                                                                            // 136
                                                                                                                 // 137
    // Make sure the file object is mounted on a collection                                                      // 138
    if (fileObj.isMounted()) {                                                                                   // 139
                                                                                                                 // 140
      var collectionName = fileObj.collectionName;                                                               // 141
      var id = fileObj._id;                                                                                      // 142
                                                                                                                 // 143
      // Set the chunkSize to match the collection options, or global config, or default                         // 144
      fileObj.chunkSize = fileObj.collection.options.chunkSize || FS.config.uploadChunkSize || defaultChunkSize; // 145
      // Set counter for uploaded chunks                                                                         // 146
      fileObj.chunkCount = 0;                                                                                    // 147
      // Calc the number of chunks                                                                               // 148
      fileObj.chunkSum = Math.ceil(fileObj.size() / fileObj.chunkSize);                                          // 149
                                                                                                                 // 150
      if (fileObj.chunkSum === 0)                                                                                // 151
        return;                                                                                                  // 152
                                                                                                                 // 153
      // Update the filerecord                                                                                   // 154
      // TODO eventually we should be able to do this without storing any chunk info in the filerecord           // 155
      fileObj.update({$set: {chunkSize: fileObj.chunkSize, chunkCount: fileObj.chunkCount, chunkSum: fileObj.chunkSum}});
                                                                                                                 // 157
      // Create a sub queue                                                                                      // 158
      var chunkQueue = new PowerQueue({                                                                          // 159
        onEnded: function oneChunkQueueEnded() {                                                                 // 160
          // Remove from list of files being uploaded                                                            // 161
          self.files[collectionName][id] = false;                                                                // 162
          // XXX It might be possible for this to be called even though there were errors uploading?             // 163
          fileObj.emit("uploaded");                                                                              // 164
        },                                                                                                       // 165
        spinalQueue: ReactiveList,                                                                               // 166
        maxProcessing: 1,                                                                                        // 167
        maxFailures: 5,                                                                                          // 168
        jumpOnFailure: true,                                                                                     // 169
        autostart: false,                                                                                        // 170
        isPaused: false,                                                                                         // 171
        filo: false                                                                                              // 172
      });                                                                                                        // 173
                                                                                                                 // 174
      // Rig the custom task handler                                                                             // 175
      chunkQueue.taskHandler = _taskHandler;                                                                     // 176
                                                                                                                 // 177
      // Rig the error handler                                                                                   // 178
      chunkQueue.errorHandler = _errorHandler;                                                                   // 179
                                                                                                                 // 180
      // Set flag that this file is being transfered                                                             // 181
      self.files[collectionName] = self.files[collectionName] || {};                                             // 182
      self.files[collectionName][id] = true;                                                                     // 183
                                                                                                                 // 184
      // Construct URL                                                                                           // 185
      var url = FS.HTTP.uploadUrl + '/' + collectionName;                                                        // 186
      if (id) {                                                                                                  // 187
        url += '/' + id;                                                                                         // 188
      }                                                                                                          // 189
                                                                                                                 // 190
      // TODO: Could we somehow figure out if the collection requires login?                                     // 191
      var authToken = '';                                                                                        // 192
      if (typeof Accounts !== "undefined") {                                                                     // 193
        var authObject = {                                                                                       // 194
          authToken: Accounts._storedLoginToken() || '',                                                         // 195
        };                                                                                                       // 196
                                                                                                                 // 197
        // Set the authToken                                                                                     // 198
        var authString = JSON.stringify(authObject);                                                             // 199
        authToken = FS.Utility.btoa(authString);                                                                 // 200
      }                                                                                                          // 201
                                                                                                                 // 202
      // Construct query string                                                                                  // 203
      var urlParams = {                                                                                          // 204
        filename: fileObj.name()                                                                                 // 205
      };                                                                                                         // 206
      if (authToken !== '') {                                                                                    // 207
        urlParams.token = authToken;                                                                             // 208
      }                                                                                                          // 209
                                                                                                                 // 210
      // Add chunk upload tasks                                                                                  // 211
      for (var chunk = 0, start; chunk < fileObj.chunkSum; chunk++) {                                            // 212
        start = chunk * fileObj.chunkSize;                                                                       // 213
        // Create and add the task                                                                               // 214
        // XXX should we somehow make sure we haven't uploaded this chunk already, in                            // 215
        // case we are resuming?                                                                                 // 216
        chunkQueue.add({                                                                                         // 217
          chunk: chunk,                                                                                          // 218
          name: fileObj.name(),                                                                                  // 219
          url: url,                                                                                              // 220
          urlParams: urlParams,                                                                                  // 221
          fileObj: fileObj,                                                                                      // 222
          start: start,                                                                                          // 223
          end: (chunk + 1) * fileObj.chunkSize                                                                   // 224
        });                                                                                                      // 225
      }                                                                                                          // 226
                                                                                                                 // 227
      // Add the queue to the main upload queue                                                                  // 228
      self.add(chunkQueue);                                                                                      // 229
    }                                                                                                            // 230
                                                                                                                 // 231
  };                                                                                                             // 232
                                                                                                                 // 233
  return self;                                                                                                   // 234
};                                                                                                               // 235
                                                                                                                 // 236
/**                                                                                                              // 237
 * @namespace FS                                                                                                 // 238
 * @type UploadTransferQueue                                                                                     // 239
 *                                                                                                               // 240
 * There is a single uploads transfer queue per client (not per CFS)                                             // 241
 */                                                                                                              // 242
FS.HTTP.uploadQueue = new UploadTransferQueue();                                                                 // 243
                                                                                                                 // 244
/*                                                                                                               // 245
 * FS.File extensions                                                                                            // 246
 */                                                                                                              // 247
                                                                                                                 // 248
/**                                                                                                              // 249
 * @method FS.File.prototype.resume                                                                              // 250
 * @public                                                                                                       // 251
 * @param {File|Blob|Buffer} ref                                                                                 // 252
 * @todo WIP, Not yet implemented for server                                                                     // 253
 *                                                                                                               // 254
 * > This function is not yet implemented for server                                                             // 255
 */                                                                                                              // 256
FS.File.prototype.resume = function(ref) {                                                                       // 257
  var self = this;                                                                                               // 258
  FS.uploadQueue.resumeUploadingFile(self);                                                                      // 259
};                                                                                                               // 260
                                                                                                                 // 261
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 580
                                                                                                                       // 581
}).call(this);                                                                                                         // 582
                                                                                                                       // 583
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cfs:upload-http'] = {};

})();
