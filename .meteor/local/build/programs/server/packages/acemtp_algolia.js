(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var AlgoliaSearch, algoliasearch;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/acemtp_algolia/server.js                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
AlgoliaSearch = algoliasearch = Npm.require('algoliasearch');

///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['acemtp:algolia'] = {}, {
  AlgoliaSearch: AlgoliaSearch
});

})();
