(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var FS = Package['cfs:base-package'].FS;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var PowerQueue = Package['cfs:power-queue'].PowerQueue;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/cfs_worker/packages/cfs_worker.js                                                                  //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/cfs:worker/fileWorker.js                                                                    //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
//// TODO: Use power queue to handle throttling etc.                                                    // 1
//// Use observe to monitor changes and have it create tasks for the power queue                        // 2
//// to perform.                                                                                        // 3
                                                                                                        // 4
/**                                                                                                     // 5
 * @public                                                                                              // 6
 * @type Object                                                                                         // 7
 */                                                                                                     // 8
FS.FileWorker = {};                                                                                     // 9
                                                                                                        // 10
/**                                                                                                     // 11
 * @method FS.FileWorker.observe                                                                        // 12
 * @public                                                                                              // 13
 * @param {FS.Collection} fsCollection                                                                  // 14
 * @returns {undefined}                                                                                 // 15
 *                                                                                                      // 16
 * Sets up observes on the fsCollection to store file copies and delete                                 // 17
 * temp files at the appropriate times.                                                                 // 18
 */                                                                                                     // 19
FS.FileWorker.observe = function(fsCollection) {                                                        // 20
                                                                                                        // 21
  // Initiate observe for finding newly uploaded/added files that need to be stored                     // 22
  // per store.                                                                                         // 23
  FS.Utility.each(fsCollection.options.stores, function(store) {                                        // 24
    var storeName = store.name;                                                                         // 25
    fsCollection.files.find(getReadyQuery(storeName), {                                                 // 26
      fields: {                                                                                         // 27
        copies: 0                                                                                       // 28
      }                                                                                                 // 29
    }).observe({                                                                                        // 30
      added: function(fsFile) {                                                                         // 31
        // added will catch fresh files                                                                 // 32
        FS.debug && console.log("FileWorker ADDED - calling saveCopy", storeName, "for", fsFile._id);   // 33
        saveCopy(fsFile, storeName);                                                                    // 34
      },                                                                                                // 35
      changed: function(fsFile) {                                                                       // 36
        // changed will catch failures and retry them                                                   // 37
        FS.debug && console.log("FileWorker CHANGED - calling saveCopy", storeName, "for", fsFile._id); // 38
        saveCopy(fsFile, storeName);                                                                    // 39
      }                                                                                                 // 40
    });                                                                                                 // 41
  });                                                                                                   // 42
                                                                                                        // 43
  // Initiate observe for finding files that have been stored so we can delete                          // 44
  // any temp files                                                                                     // 45
  fsCollection.files.find(getDoneQuery(fsCollection.options.stores)).observe({                          // 46
    added: function(fsFile) {                                                                           // 47
      FS.debug && console.log("FileWorker ADDED - calling deleteChunks for", fsFile._id);               // 48
      FS.TempStore.removeFile(fsFile);                                                                  // 49
    }                                                                                                   // 50
  });                                                                                                   // 51
                                                                                                        // 52
  // Initiate observe for catching files that have been removed and                                     // 53
  // removing the data from all stores as well                                                          // 54
  fsCollection.files.find().observe({                                                                   // 55
    removed: function(fsFile) {                                                                         // 56
      FS.debug && console.log('FileWorker REMOVED - removing all stored data for', fsFile._id);         // 57
      //remove from temp store                                                                          // 58
      FS.TempStore.removeFile(fsFile);                                                                  // 59
      //delete from all stores                                                                          // 60
      FS.Utility.each(fsCollection.options.stores, function(storage) {                                  // 61
        storage.adapter.remove(fsFile);                                                                 // 62
      });                                                                                               // 63
    }                                                                                                   // 64
  });                                                                                                   // 65
};                                                                                                      // 66
                                                                                                        // 67
/**                                                                                                     // 68
 *  @method getReadyQuery                                                                               // 69
 *  @private                                                                                            // 70
 *  @param {string} storeName - The name of the store to observe                                        // 71
 *                                                                                                      // 72
 *  Returns a selector that will be used to identify files that                                         // 73
 *  have been uploaded but have not yet been stored to the                                              // 74
 *  specified store.                                                                                    // 75
 *                                                                                                      // 76
 *  {                                                                                                   // 77
 *    uploadedAt: {$exists: true},                                                                      // 78
 *    'copies.storeName`: null,                                                                         // 79
 *    'failures.copies.storeName.doneTrying': {$ne: true}                                               // 80
 *  }                                                                                                   // 81
 */                                                                                                     // 82
function getReadyQuery(storeName) {                                                                     // 83
  var selector = {uploadedAt: {$exists: true}};                                                         // 84
  selector['copies.' + storeName] = null;                                                               // 85
  selector['failures.copies.' + storeName + '.doneTrying'] = {$ne: true};                               // 86
  return selector;                                                                                      // 87
}                                                                                                       // 88
                                                                                                        // 89
/**                                                                                                     // 90
 *  @method getDoneQuery                                                                                // 91
 *  @private                                                                                            // 92
 *  @param {Array} stores - The stores array from the FS.Collection options                             // 93
 *                                                                                                      // 94
 *  Returns a selector that will be used to identify files where all                                    // 95
 *  stores have successfully save or have failed the                                                    // 96
 *  max number of times but still have chunks. The resulting selector                                   // 97
 *  should be something like this:                                                                      // 98
 *                                                                                                      // 99
 *  {                                                                                                   // 100
 *    $and: [                                                                                           // 101
 *      {chunks: {$exists: true}},                                                                      // 102
 *      {                                                                                               // 103
 *        $or: [                                                                                        // 104
 *          {                                                                                           // 105
 *            $and: [                                                                                   // 106
 *              {                                                                                       // 107
 *                'copies.storeName': {$ne: null}                                                       // 108
 *              },                                                                                      // 109
 *              {                                                                                       // 110
 *                'copies.storeName': {$ne: false}                                                      // 111
 *              }                                                                                       // 112
 *            ]                                                                                         // 113
 *          },                                                                                          // 114
 *          {                                                                                           // 115
 *            'failures.copies.storeName.doneTrying': true                                              // 116
 *          }                                                                                           // 117
 *        ]                                                                                             // 118
 *      },                                                                                              // 119
 *      REPEATED FOR EACH STORE                                                                         // 120
 *    ]                                                                                                 // 121
 *  }                                                                                                   // 122
 *                                                                                                      // 123
 */                                                                                                     // 124
function getDoneQuery(stores) {                                                                         // 125
  var selector = {                                                                                      // 126
    $and: []                                                                                            // 127
  };                                                                                                    // 128
                                                                                                        // 129
  // Add conditions for all defined stores                                                              // 130
  FS.Utility.each(stores, function(store) {                                                             // 131
    var storeName = store.name;                                                                         // 132
    var copyCond = {$or: [{$and: []}]};                                                                 // 133
    var tempCond = {};                                                                                  // 134
    tempCond["copies." + storeName] = {$ne: null};                                                      // 135
    copyCond.$or[0].$and.push(tempCond);                                                                // 136
    tempCond = {};                                                                                      // 137
    tempCond["copies." + storeName] = {$ne: false};                                                     // 138
    copyCond.$or[0].$and.push(tempCond);                                                                // 139
    tempCond = {};                                                                                      // 140
    tempCond['failures.copies.' + storeName + '.doneTrying'] = true;                                    // 141
    copyCond.$or.push(tempCond);                                                                        // 142
    selector.$and.push(copyCond);                                                                       // 143
  })                                                                                                    // 144
                                                                                                        // 145
  return selector;                                                                                      // 146
}                                                                                                       // 147
                                                                                                        // 148
/**                                                                                                     // 149
 * @method saveCopy                                                                                     // 150
 * @private                                                                                             // 151
 * @param {FS.File} fsFile                                                                              // 152
 * @param {string} storeName                                                                            // 153
 * @param {Object} options                                                                              // 154
 * @param {Boolean} [options.overwrite=false] - Force save to the specified store?                      // 155
 * @returns {undefined}                                                                                 // 156
 *                                                                                                      // 157
 * Saves to the specified store. If the                                                                 // 158
 * `overwrite` option is `true`, will save to the store even if we already                              // 159
 * have, potentially overwriting any previously saved data. Synchronous.                                // 160
 */                                                                                                     // 161
function saveCopy(fsFile, storeName, options) {                                                         // 162
  options = options || {};                                                                              // 163
                                                                                                        // 164
  var storage = FS.StorageAdapter(storeName);                                                           // 165
  if (!storage) {                                                                                       // 166
    throw new Error('No store named "' + storeName + '" exists');                                       // 167
  }                                                                                                     // 168
                                                                                                        // 169
  FS.debug && console.log('saving to store ' + storeName);                                              // 170
                                                                                                        // 171
  var writeStream = storage.adapter.createWriteStream(fsFile);                                          // 172
  var readStream = FS.TempStore.createReadStream(fsFile);                                               // 173
                                                                                                        // 174
  // Pipe the temp data into the storage adapter                                                        // 175
  readStream.pipe(writeStream);                                                                         // 176
}                                                                                                       // 177
                                                                                                        // 178
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cfs:worker'] = {};

})();
