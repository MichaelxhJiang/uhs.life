(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var Twit;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/schiller_twit/twit.js                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
// Write your package code here!

Twit = Npm.require('twit');
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['schiller:twit'] = {}, {
  Twit: Twit
});

})();
