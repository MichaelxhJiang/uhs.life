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
var _ = Package.underscore._;
var Random = Package.random.Random;
var Accounts = Package['accounts-base'].Accounts;
var Google = Package['google-oauth'].Google;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/accounts-google/notice.js                                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
if (Package['accounts-ui']                                                                             // 1
    && !Package['service-configuration']                                                               // 2
    && !Package.hasOwnProperty('google-config-ui')) {                                                  // 3
  console.warn(                                                                                        // 4
    "Note: You're using accounts-ui and accounts-google,\n" +                                          // 5
    "but didn't install the configuration UI for the Google\n" +                                       // 6
    "OAuth. You can install it with:\n" +                                                              // 7
    "\n" +                                                                                             // 8
    "    meteor add google-config-ui" +                                                                // 9
    "\n"                                                                                               // 10
  );                                                                                                   // 11
}                                                                                                      // 12
                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/accounts-google/google.js                                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Accounts.oauth.registerService('google');                                                              // 1
                                                                                                       // 2
if (Meteor.isClient) {                                                                                 // 3
  const loginWithGoogle = function(options, callback) {                                                // 4
    // support a callback without options                                                              // 5
    if (! callback && typeof options === "function") {                                                 // 6
      callback = options;                                                                              // 7
      options = null;                                                                                  // 8
    }                                                                                                  // 9
                                                                                                       // 10
    if (Meteor.isCordova &&                                                                            // 11
        Google.signIn) {                                                                               // 12
      // After 20 April 2017, Google OAuth login will no longer work from                              // 13
      // a WebView, so Cordova apps must use Google Sign-In instead.                                   // 14
      // https://github.com/meteor/meteor/issues/8253                                                  // 15
      Google.signIn(options, callback);                                                                // 16
      return;                                                                                          // 17
    }                                                                                                  // 18
                                                                                                       // 19
    // Use Google's domain-specific login page if we want to restrict creation to                      // 20
    // a particular email domain. (Don't use it if restrictCreationByEmailDomain                       // 21
    // is a function.) Note that all this does is change Google's UI ---                               // 22
    // accounts-base/accounts_server.js still checks server-side that the server                       // 23
    // has the proper email address after the OAuth conversation.                                      // 24
    if (typeof Accounts._options.restrictCreationByEmailDomain === 'string') {                         // 25
      options = _.extend({}, options || {});                                                           // 26
      options.loginUrlParameters = _.extend({}, options.loginUrlParameters || {});                     // 27
      options.loginUrlParameters.hd = Accounts._options.restrictCreationByEmailDomain;                 // 28
    }                                                                                                  // 29
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Google.requestCredential(options, credentialRequestCompleteCallback);                              // 31
  };                                                                                                   // 32
  Accounts.registerClientLoginFunction('google', loginWithGoogle);                                     // 33
  Meteor.loginWithGoogle = function () {                                                               // 34
    return Accounts.applyLoginFunction('google', arguments);                                           // 35
  };                                                                                                   // 36
} else {                                                                                               // 37
  Accounts.addAutopublishFields({                                                                      // 38
    forLoggedInUser: _.map(                                                                            // 39
      // publish access token since it can be used from the client (if                                 // 40
      // transmitted over ssl or on                                                                    // 41
      // localhost). https://developers.google.com/accounts/docs/OAuth2UserAgent                       // 42
      // refresh token probably shouldn't be sent down.                                                // 43
      Google.whitelistedFields.concat(['accessToken', 'expiresAt']), // don't publish refresh token    // 44
      function (subfield) { return 'services.google.' + subfield; }),                                  // 45
                                                                                                       // 46
    forOtherUsers: _.map(                                                                              // 47
      // even with autopublish, no legitimate web app should be                                        // 48
      // publishing all users' emails                                                                  // 49
      _.without(Google.whitelistedFields, 'email', 'verified_email'),                                  // 50
      function (subfield) { return 'services.google.' + subfield; })                                   // 51
  });                                                                                                  // 52
}                                                                                                      // 53
                                                                                                       // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['accounts-google'] = {};

})();
