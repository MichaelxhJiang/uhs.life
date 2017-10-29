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
var EJSON = Package.ejson.EJSON;
var EventEmitter = Package['raix:eventemitter'].EventEmitter;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var _storageAdapters;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/cfs_storage-adapter/packages/cfs_storage-adapter.js                        //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
(function () {                                                                         // 1
                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                               //    // 4
// packages/cfs:storage-adapter/storageAdapter.client.js                         //    // 5
//                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                 //    // 8
/* global FS, _storageAdapters:true, EventEmitter */                             // 1  // 9
                                                                                 // 2  // 10
// ############################################################################# // 3  // 11
//                                                                               // 4  // 12
// STORAGE ADAPTER                                                               // 5  // 13
//                                                                               // 6  // 14
// ############################################################################# // 7  // 15
                                                                                 // 8  // 16
_storageAdapters = {};                                                           // 9  // 17
                                                                                 // 10
FS.StorageAdapter = function(name, options, api) {                               // 11
  var self = this;                                                               // 12
                                                                                 // 13
  // Check the api                                                               // 14
  if (typeof api === 'undefined') {                                              // 15
    throw new Error('FS.StorageAdapter please define an api');                   // 16
  }                                                                              // 17
                                                                                 // 18
  // store reference for easy lookup by name                                     // 19
  if (typeof _storageAdapters[name] !== 'undefined') {                           // 20
    throw new Error('Storage name already exists: "' + name + '"');              // 21
  } else {                                                                       // 22
    _storageAdapters[name] = self;                                               // 23
  }                                                                              // 24
                                                                                 // 25
  // extend self with options and other info                                     // 26
  FS.Utility.extend(this, options || {}, {                                       // 27
    name: name                                                                   // 28
  });                                                                            // 29
                                                                                 // 30
  // XXX: TODO, add upload feature here...                                       // 31
  // we default to ddp upload but really let the SA like S3Cloud overwrite to    // 32
  // implement direct client to s3 upload                                        // 33
                                                                                 // 34
};                                                                               // 35
                                                                                 // 36
FS.StorageAdapter.prototype = new EventEmitter();                                // 37
                                                                                 // 38
///////////////////////////////////////////////////////////////////////////////////    // 47
                                                                                       // 48
}).call(this);                                                                         // 49
                                                                                       // 50
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cfs:storage-adapter'] = {};

})();
