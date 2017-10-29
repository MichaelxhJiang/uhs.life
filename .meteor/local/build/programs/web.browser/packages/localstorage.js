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
var Random = Package.random.Random;

(function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// packages/localstorage/localstorage.js                                            //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
// Meteor._localStorage is not an ideal name, but we can change it later.           // 1
                                                                                    // 2
// Let's test to make sure that localStorage actually works. For example, in        // 3
// Safari with private browsing on, window.localStorage exists but actually         // 4
// trying to use it throws.                                                         // 5
// Accessing window.localStorage can also immediately throw an error in IE (#1291).
                                                                                    // 7
var hasOwn = Object.prototype.hasOwnProperty;                                       // 8
var key = '_localstorage_test_' + Random.id();                                      // 9
var retrieved;                                                                      // 10
var storage;                                                                        // 11
                                                                                    // 12
try {                                                                               // 13
  storage = global.localStorage;                                                    // 14
                                                                                    // 15
  if (storage) {                                                                    // 16
    storage.setItem(key, key);                                                      // 17
    retrieved = storage.getItem(key);                                               // 18
    storage.removeItem(key);                                                        // 19
  }                                                                                 // 20
} catch (ignored) {}                                                                // 21
                                                                                    // 22
if (key === retrieved) {                                                            // 23
  if (Meteor.isServer) {                                                            // 24
    Meteor._localStorage = storage;                                                 // 25
  } else {                                                                          // 26
    // Some browsers (e.g. IE11) don't properly handle attempts to change           // 27
    // window.localStorage methods. By using proxy methods to expose                // 28
    // window.localStorage functionality, developers can change the                 // 29
    // behavior of Meteor._localStorage methods without breaking                    // 30
    // window.localStorage.                                                         // 31
    ["getItem",                                                                     // 32
     "setItem",                                                                     // 33
     "removeItem",                                                                  // 34
    ].forEach(function (name) {                                                     // 35
      this[name] = function () {                                                    // 36
        return storage[name].apply(storage, arguments);                             // 37
      };                                                                            // 38
    }, Meteor._localStorage = {});                                                  // 39
  }                                                                                 // 40
}                                                                                   // 41
                                                                                    // 42
if (! Meteor._localStorage) {                                                       // 43
  if (Meteor.isClient) {                                                            // 44
    Meteor._debug(                                                                  // 45
      "You are running a browser with no localStorage or userData "                 // 46
        + "support. Logging in from one tab will not cause another "                // 47
        + "tab to be logged in.");                                                  // 48
  }                                                                                 // 49
                                                                                    // 50
  Meteor._localStorage = Object.create({                                            // 51
    setItem: function (key, val) {                                                  // 52
      this[key] = val;                                                              // 53
    },                                                                              // 54
                                                                                    // 55
    removeItem: function (key) {                                                    // 56
      delete this[key];                                                             // 57
    },                                                                              // 58
                                                                                    // 59
    getItem: function (key) {                                                       // 60
      return hasOwn.call(this, key) ? this[key] : null;                             // 61
    }                                                                               // 62
  });                                                                               // 63
}                                                                                   // 64
                                                                                    // 65
//////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.localstorage = {};

})();
