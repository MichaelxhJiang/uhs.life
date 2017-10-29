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

/* Package-scope variables */
var HTTP, _methodHTTP;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/cfs_http-methods/http.methods.client.api.js              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
HTTP = Package.http && Package.http.HTTP || {};                      // 1
                                                                     // 2
// Client-side simulation is not yet implemented                     // 3
HTTP.methods = function() {                                          // 4
  throw new Error('HTTP.methods not implemented on client-side');    // 5
};                                                                   // 6
                                                                     // 7
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['cfs:http-methods'] = {}, {
  HTTP: HTTP,
  _methodHTTP: _methodHTTP
});

})();
