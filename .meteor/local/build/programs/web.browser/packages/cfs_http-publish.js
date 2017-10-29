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
var HTTP = Package['cfs:http-methods'].HTTP;

/* Package-scope variables */
var _publishHTTP;

(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/cfs_http-publish/packages/cfs_http-publish.js                      //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
(function () {                                                                 // 1
                                                                               // 2
///////////////////////////////////////////////////////////////////////////    // 3
//                                                                       //    // 4
// packages/cfs:http-publish/http.publish.client.api.js                  //    // 5
//                                                                       //    // 6
///////////////////////////////////////////////////////////////////////////    // 7
                                                                         //    // 8
// Client-side is not implemented                                        // 1  // 9
HTTP.publish = function() {                                              // 2  // 10
  throw new Error('HTTP.publish not implemented on client-side');        // 3  // 11
};                                                                       // 4  // 12
                                                                         // 5  // 13
HTTP.publishFormats = function() {                                       // 6  // 14
  throw new Error('HTTP.publishFormats not implemented on client-side'); // 7  // 15
};                                                                       // 8  // 16
                                                                         // 9  // 17
HTTP.unpublish = function() {                                            // 10
  throw new Error('HTTP.unpublish not implemented on client-side');      // 11
};                                                                       // 12
                                                                         // 13
///////////////////////////////////////////////////////////////////////////    // 22
                                                                               // 23
}).call(this);                                                                 // 24
                                                                               // 25
/////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['cfs:http-publish'] = {}, {
  _publishHTTP: _publishHTTP
});

})();
