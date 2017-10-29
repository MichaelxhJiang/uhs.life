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

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/cfs_gridfs/packages/cfs_gridfs.js                                        //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
(function () {                                                                       // 1
                                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                             //    // 4
// packages/cfs:gridfs/gridfs.client.js                                        //    // 5
//                                                                             //    // 6
/////////////////////////////////////////////////////////////////////////////////    // 7
                                                                               //    // 8
/**                                                                            // 1  // 9
 * @public                                                                     // 2  // 10
 * @constructor                                                                // 3  // 11
 * @param {String} name - The store name                                       // 4  // 12
 * @param {Object} options                                                     // 5  // 13
 * @param {Function} [options.beforeSave] - Function to run before saving a file from the client. The context of the function will be the `FS.File` instance we're saving. The function may alter its properties.
 * @param {Number} [options.maxTries=5] - Max times to attempt saving a file   // 7  // 15
 * @returns {undefined}                                                        // 8  // 16
 *                                                                             // 9  // 17
 * Creates a GridFS store instance on the client, which is just a shell object // 10
 * storing some info.                                                          // 11
 */                                                                            // 12
FS.Store.GridFS = function(name, options) {                                    // 13
  var self = this;                                                             // 14
  if (!(self instanceof FS.Store.GridFS))                                      // 15
    throw new Error('FS.Store.GridFS missing keyword "new"');                  // 16
                                                                               // 17
  return new FS.StorageAdapter(name, options, {                                // 18
    typeName: 'storage.gridfs'                                                 // 19
  });                                                                          // 20
};                                                                             // 21
                                                                               // 22
/////////////////////////////////////////////////////////////////////////////////    // 31
                                                                                     // 32
}).call(this);                                                                       // 33
                                                                                     // 34
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cfs:gridfs'] = {};

})();
