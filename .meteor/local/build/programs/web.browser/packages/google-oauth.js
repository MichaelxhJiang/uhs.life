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
var OAuth = Package.oauth.OAuth;
var Oauth = Package.oauth.Oauth;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Random = Package.random.Random;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var Google;

var require = meteorInstall({"node_modules":{"meteor":{"google-oauth":{"google_client.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/google-oauth/google_client.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Google = require("./namespace.js");                                                                                // 1
                                                                                                                       //
var ILLEGAL_PARAMETERS = {                                                                                             // 3
  'response_type': 1,                                                                                                  // 4
  'client_id': 1,                                                                                                      // 5
  'scope': 1,                                                                                                          // 6
  'redirect_uri': 1,                                                                                                   // 7
  'state': 1                                                                                                           // 8
}; // Request Google credentials for the user                                                                          // 3
// @param options {optional}                                                                                           // 12
// @param credentialRequestCompleteCallback {Function} Callback function to call on                                    // 13
//   completion. Takes one argument, credentialToken on success, or Error on                                           // 14
//   error.                                                                                                            // 15
                                                                                                                       //
Google.requestCredential = function (options, credentialRequestCompleteCallback) {                                     // 16
  // support both (options, callback) and (callback).                                                                  // 17
  if (!credentialRequestCompleteCallback && typeof options === 'function') {                                           // 18
    credentialRequestCompleteCallback = options;                                                                       // 19
    options = {};                                                                                                      // 20
  } else if (!options) {                                                                                               // 21
    options = {};                                                                                                      // 22
  }                                                                                                                    // 23
                                                                                                                       //
  var config = ServiceConfiguration.configurations.findOne({                                                           // 25
    service: 'google'                                                                                                  // 25
  });                                                                                                                  // 25
                                                                                                                       //
  if (!config) {                                                                                                       // 26
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError());    // 27
    return;                                                                                                            // 29
  }                                                                                                                    // 30
                                                                                                                       //
  var credentialToken = Random.secret(); // we need the email scope to get user id from google.                        // 32
                                                                                                                       //
  var requiredScopes = {                                                                                               // 35
    'email': 1                                                                                                         // 35
  };                                                                                                                   // 35
  var scopes = options.requestPermissions || ['profile'];                                                              // 36
  scopes.forEach(function (scope) {                                                                                    // 37
    requiredScopes[scope] = 1;                                                                                         // 38
  });                                                                                                                  // 39
  scopes = Object.keys(requiredScopes);                                                                                // 40
  var loginUrlParameters = {};                                                                                         // 42
                                                                                                                       //
  if (config.loginUrlParameters) {                                                                                     // 43
    Object.assign(loginUrlParameters, config.loginUrlParameters);                                                      // 44
  }                                                                                                                    // 45
                                                                                                                       //
  if (options.loginUrlParameters) {                                                                                    // 46
    Object.assign(loginUrlParameters, options.loginUrlParameters);                                                     // 47
  } // validate options keys                                                                                           // 48
                                                                                                                       //
                                                                                                                       //
  Object.keys(loginUrlParameters).forEach(function (key) {                                                             // 51
    if (ILLEGAL_PARAMETERS.hasOwnProperty(key)) {                                                                      // 52
      throw new Error("Google.requestCredential: Invalid loginUrlParameter: " + key);                                  // 53
    }                                                                                                                  // 54
  }); // backwards compatible options                                                                                  // 55
                                                                                                                       //
  if (options.requestOfflineToken != null) {                                                                           // 58
    loginUrlParameters.access_type = options.requestOfflineToken ? 'offline' : 'online';                               // 59
  }                                                                                                                    // 60
                                                                                                                       //
  if (options.prompt != null) {                                                                                        // 61
    loginUrlParameters.prompt = options.prompt;                                                                        // 62
  } else if (options.forceApprovalPrompt) {                                                                            // 63
    loginUrlParameters.prompt = 'consent';                                                                             // 64
  }                                                                                                                    // 65
                                                                                                                       //
  if (options.loginHint) {                                                                                             // 67
    loginUrlParameters.login_hint = options.loginHint;                                                                 // 68
  }                                                                                                                    // 69
                                                                                                                       //
  var loginStyle = OAuth._loginStyle('google', config, options); // https://developers.google.com/accounts/docs/OAuth2WebServer#formingtheurl
                                                                                                                       //
                                                                                                                       //
  Object.assign(loginUrlParameters, {                                                                                  // 73
    "response_type": "code",                                                                                           // 74
    "client_id": config.clientId,                                                                                      // 75
    "scope": scopes.join(' '),                                                                                         // 76
    // space delimited                                                                                                 // 76
    "redirect_uri": OAuth._redirectUri('google', config),                                                              // 77
    "state": OAuth._stateParam(loginStyle, credentialToken, options.redirectUrl)                                       // 78
  });                                                                                                                  // 73
  var loginUrl = 'https://accounts.google.com/o/oauth2/auth?' + Object.keys(loginUrlParameters).map(function (param) {
    return encodeURIComponent(param) + '=' + encodeURIComponent(loginUrlParameters[param]);                            // 82
  }).join("&");                                                                                                        // 84
  OAuth.launchLogin({                                                                                                  // 86
    loginService: "google",                                                                                            // 87
    loginStyle: loginStyle,                                                                                            // 88
    loginUrl: loginUrl,                                                                                                // 89
    credentialRequestCompleteCallback: credentialRequestCompleteCallback,                                              // 90
    credentialToken: credentialToken,                                                                                  // 91
    popupOptions: {                                                                                                    // 92
      height: 600                                                                                                      // 92
    }                                                                                                                  // 92
  });                                                                                                                  // 86
};                                                                                                                     // 94
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"namespace.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/google-oauth/namespace.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// The module.exports object of this module becomes the Google namespace                                               // 1
// for other modules in this package.                                                                                  // 2
Google = module.exports; // So that api.export finds the "Google" property.                                            // 3
                                                                                                                       //
Google.Google = Google;                                                                                                // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/google-oauth/google_client.js");
var exports = require("./node_modules/meteor/google-oauth/namespace.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['google-oauth'] = exports, {
  Google: Google
});

})();
