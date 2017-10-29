(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var ECMAScript = Package.ecmascript.ECMAScript;
var DDPRateLimiter = Package['ddp-rate-limiter'].DDPRateLimiter;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var Hook = Package['callback-hook'].Hook;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

/* Package-scope variables */
var Accounts, EXPIRE_TOKENS_INTERVAL_MS, CONNECTION_CLOSE_DELAY_MS;

var require = meteorInstall({"node_modules":{"meteor":{"accounts-base":{"server_main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/server_main.js                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var module1 = module;                                                                                                // 1
module1.export({                                                                                                     // 1
  AccountsServer: function () {                                                                                      // 1
    return AccountsServer;                                                                                           // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var AccountsServer = void 0;                                                                                         // 1
module1.watch(require("./accounts_server.js"), {                                                                     // 1
  AccountsServer: function (v) {                                                                                     // 1
    AccountsServer = v;                                                                                              // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
module1.watch(require("./accounts_rate_limit.js"));                                                                  // 1
module1.watch(require("./url_server.js"));                                                                           // 1
/**                                                                                                                  // 5
 * @namespace Accounts                                                                                               //
 * @summary The namespace for all server-side accounts-related methods.                                              //
 */Accounts = new AccountsServer(Meteor.server); // Users table. Don't use the normal autopublish, since we want to hide
// some fields. Code to autopublish this is in accounts_server.js.                                                   // 12
// XXX Allow users to configure this collection name.                                                                // 13
/**                                                                                                                  // 15
 * @summary A [Mongo.Collection](#collections) containing user documents.                                            //
 * @locus Anywhere                                                                                                   //
 * @type {Mongo.Collection}                                                                                          //
 * @importFromPackage meteor                                                                                         //
*/                                                                                                                   //
Meteor.users = Accounts.users;                                                                                       // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts_common.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/accounts_common.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
module.export({                                                                                                      // 1
  AccountsCommon: function () {                                                                                      // 1
    return AccountsCommon;                                                                                           // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
                                                                                                                     //
var AccountsCommon = function () {                                                                                   //
  function AccountsCommon(options) {                                                                                 // 11
    (0, _classCallCheck3.default)(this, AccountsCommon);                                                             // 11
    // Currently this is read directly by packages like accounts-password                                            // 12
    // and accounts-ui-unstyled.                                                                                     // 13
    this._options = {}; // Note that setting this.connection = null causes this.users to be a                        // 14
    // LocalCollection, which is not what we want.                                                                   // 17
                                                                                                                     //
    this.connection = undefined;                                                                                     // 18
                                                                                                                     //
    this._initConnection(options || {}); // There is an allow call in accounts_server.js that restricts writes to    // 19
    // this collection.                                                                                              // 22
                                                                                                                     //
                                                                                                                     //
    this.users = new Mongo.Collection("users", {                                                                     // 23
      _preventAutopublish: true,                                                                                     // 24
      connection: this.connection                                                                                    // 25
    }); // Callback exceptions are printed with Meteor._debug and ignored.                                           // 23
                                                                                                                     //
    this._onLoginHook = new Hook({                                                                                   // 29
      bindEnvironment: false,                                                                                        // 30
      debugPrintExceptions: "onLogin callback"                                                                       // 31
    });                                                                                                              // 29
    this._onLoginFailureHook = new Hook({                                                                            // 34
      bindEnvironment: false,                                                                                        // 35
      debugPrintExceptions: "onLoginFailure callback"                                                                // 36
    });                                                                                                              // 34
    this._onLogoutHook = new Hook({                                                                                  // 39
      bindEnvironment: false,                                                                                        // 40
      debugPrintExceptions: "onLogout callback"                                                                      // 41
    });                                                                                                              // 39
  } /**                                                                                                              // 43
     * @summary Get the current user id, or `null` if no user is logged in. A reactive data source.                  //
     * @locus Anywhere                                                                                               //
     */                                                                                                              //
                                                                                                                     //
  AccountsCommon.prototype.userId = function () {                                                                    //
    function userId() {                                                                                              //
      throw new Error("userId method not implemented");                                                              // 50
    }                                                                                                                // 51
                                                                                                                     //
    return userId;                                                                                                   //
  }(); /**                                                                                                           //
        * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.           //
        * @locus Anywhere                                                                                            //
        */                                                                                                           //
                                                                                                                     //
  AccountsCommon.prototype.user = function () {                                                                      //
    function user() {                                                                                                //
      var userId = this.userId();                                                                                    // 58
      return userId ? this.users.findOne(userId) : null;                                                             // 59
    }                                                                                                                // 60
                                                                                                                     //
    return user;                                                                                                     //
  }(); // Set up config for the accounts system. Call this on both the client                                        //
  // and the server.                                                                                                 // 63
  //                                                                                                                 // 64
  // Note that this method gets overridden on AccountsServer.prototype, but                                          // 65
  // the overriding method calls the overridden method.                                                              // 66
  //                                                                                                                 // 67
  // XXX we should add some enforcement that this is called on both the                                              // 68
  // client and the server. Otherwise, a user can                                                                    // 69
  // 'forbidClientAccountCreation' only on the client and while it looks                                             // 70
  // like their app is secure, the server will still accept createUser                                               // 71
  // calls. https://github.com/meteor/meteor/issues/828                                                              // 72
  //                                                                                                                 // 73
  // @param options {Object} an object with fields:                                                                  // 74
  // - sendVerificationEmail {Boolean}                                                                               // 75
  //     Send email address verification emails to new users created from                                            // 76
  //     client signups.                                                                                             // 77
  // - forbidClientAccountCreation {Boolean}                                                                         // 78
  //     Do not allow clients to create accounts directly.                                                           // 79
  // - restrictCreationByEmailDomain {Function or String}                                                            // 80
  //     Require created users to have an email matching the function or                                             // 81
  //     having the string as domain.                                                                                // 82
  // - loginExpirationInDays {Number}                                                                                // 83
  //     Number of days since login until a user is logged out (login token                                          // 84
  //     expires).                                                                                                   // 85
  // - passwordResetTokenExpirationInDays {Number}                                                                   // 86
  //     Number of days since password reset token creation until the                                                // 87
  //     token cannt be used any longer (password reset token expires).                                              // 88
  // - ambiguousErrorMessages {Boolean}                                                                              // 89
  //     Return ambiguous error messages from login failures to prevent                                              // 90
  //     user enumeration.                                                                                           // 91
  // - bcryptRounds {Number}                                                                                         // 92
  //     Allows override of number of bcrypt rounds (aka work factor) used                                           // 93
  //     to store passwords.                                                                                         // 94
  /**                                                                                                                // 96
   * @summary Set global accounts options.                                                                           //
   * @locus Anywhere                                                                                                 //
   * @param {Object} options                                                                                         //
   * @param {Boolean} options.sendVerificationEmail New users with an email address will receive an address verification email.
   * @param {Boolean} options.forbidClientAccountCreation Calls to [`createUser`](#accounts_createuser) from the client will be rejected. In addition, if you are using [accounts-ui](#accountsui), the "Create account" link will not be available.
   * @param {String | Function} options.restrictCreationByEmailDomain If set to a string, only allows new users if the domain part of their email address matches the string. If set to a function, only allows new users if the function returns true.  The function is passed the full email address of the proposed new user.  Works with password-based sign-in and external services that expose email addresses (Google, Facebook, GitHub). All existing users still can log in after enabling this option. Example: `Accounts.config({ restrictCreationByEmailDomain: 'school.edu' })`.
   * @param {Number} options.loginExpirationInDays The number of days from when a user logs in until their token expires and they are logged out. Defaults to 90. Set to `null` to disable login expiration.
   * @param {String} options.oauthSecretKey When using the `oauth-encryption` package, the 16 byte key using to encrypt sensitive account credentials in the database, encoded in base64.  This option may only be specifed on the server.  See packages/oauth-encryption/README.md for details.
   * @param {Number} options.passwordResetTokenExpirationInDays The number of days from when a link to reset password is sent until token expires and user can't reset password with the link anymore. Defaults to 3.
   * @param {Number} options.passwordEnrollTokenExpirationInDays The number of days from when a link to set inital password is sent until token expires and user can't set password with the link anymore. Defaults to 30.
   * @param {Boolean} options.ambiguousErrorMessages Return ambiguous error messages from login failures to prevent user enumeration. Defaults to false.
   */                                                                                                                //
                                                                                                                     //
  AccountsCommon.prototype.config = function () {                                                                    //
    function config(options) {                                                                                       //
      var self = this; // We don't want users to accidentally only call Accounts.config on the                       // 110
      // client, where some of the options will have partial effects (eg removing                                    // 113
      // the "create account" button from accounts-ui if forbidClientAccountCreation                                 // 114
      // is set, or redirecting Google login to a specific-domain page) without                                      // 115
      // having their full effects.                                                                                  // 116
                                                                                                                     //
      if (Meteor.isServer) {                                                                                         // 117
        __meteor_runtime_config__.accountsConfigCalled = true;                                                       // 118
      } else if (!__meteor_runtime_config__.accountsConfigCalled) {                                                  // 119
        // XXX would be nice to "crash" the client and replace the UI with an error                                  // 120
        // message, but there's no trivial way to do this.                                                           // 121
        Meteor._debug("Accounts.config was called on the client but not on the " + "server; some configuration options may not take effect.");
      } // We need to validate the oauthSecretKey option at the time                                                 // 124
      // Accounts.config is called. We also deliberately don't store the                                             // 127
      // oauthSecretKey in Accounts._options.                                                                        // 128
                                                                                                                     //
                                                                                                                     //
      if (_.has(options, "oauthSecretKey")) {                                                                        // 129
        if (Meteor.isClient) throw new Error("The oauthSecretKey option may only be specified on the server");       // 130
        if (!Package["oauth-encryption"]) throw new Error("The oauth-encryption package must be loaded to set oauthSecretKey");
        Package["oauth-encryption"].OAuthEncryption.loadKey(options.oauthSecretKey);                                 // 134
        options = _.omit(options, "oauthSecretKey");                                                                 // 135
      } // validate option keys                                                                                      // 136
                                                                                                                     //
                                                                                                                     //
      var VALID_KEYS = ["sendVerificationEmail", "forbidClientAccountCreation", "passwordEnrollTokenExpirationInDays", "restrictCreationByEmailDomain", "loginExpirationInDays", "passwordResetTokenExpirationInDays", "ambiguousErrorMessages", "bcryptRounds"];
                                                                                                                     //
      _.each(_.keys(options), function (key) {                                                                       // 142
        if (!_.contains(VALID_KEYS, key)) {                                                                          // 143
          throw new Error("Accounts.config: Invalid key: " + key);                                                   // 144
        }                                                                                                            // 145
      }); // set values in Accounts._options                                                                         // 146
                                                                                                                     //
                                                                                                                     //
      _.each(VALID_KEYS, function (key) {                                                                            // 149
        if (key in options) {                                                                                        // 150
          if (key in self._options) {                                                                                // 151
            throw new Error("Can't set `" + key + "` more than once");                                               // 152
          }                                                                                                          // 153
                                                                                                                     //
          self._options[key] = options[key];                                                                         // 154
        }                                                                                                            // 155
      });                                                                                                            // 156
    }                                                                                                                // 157
                                                                                                                     //
    return config;                                                                                                   //
  }(); /**                                                                                                           //
        * @summary Register a callback to be called after a login attempt succeeds.                                  //
        * @locus Anywhere                                                                                            //
        * @param {Function} func The callback to be called when login is successful.                                 //
        */                                                                                                           //
                                                                                                                     //
  AccountsCommon.prototype.onLogin = function () {                                                                   //
    function onLogin(func) {                                                                                         //
      return this._onLoginHook.register(func);                                                                       // 165
    }                                                                                                                // 166
                                                                                                                     //
    return onLogin;                                                                                                  //
  }(); /**                                                                                                           //
        * @summary Register a callback to be called after a login attempt fails.                                     //
        * @locus Anywhere                                                                                            //
        * @param {Function} func The callback to be called after the login has failed.                               //
        */                                                                                                           //
                                                                                                                     //
  AccountsCommon.prototype.onLoginFailure = function () {                                                            //
    function onLoginFailure(func) {                                                                                  //
      return this._onLoginFailureHook.register(func);                                                                // 174
    }                                                                                                                // 175
                                                                                                                     //
    return onLoginFailure;                                                                                           //
  }(); /**                                                                                                           //
        * @summary Register a callback to be called after a logout attempt succeeds.                                 //
        * @locus Anywhere                                                                                            //
        * @param {Function} func The callback to be called when logout is successful.                                //
        */                                                                                                           //
                                                                                                                     //
  AccountsCommon.prototype.onLogout = function () {                                                                  //
    function onLogout(func) {                                                                                        //
      return this._onLogoutHook.register(func);                                                                      // 183
    }                                                                                                                // 184
                                                                                                                     //
    return onLogout;                                                                                                 //
  }();                                                                                                               //
                                                                                                                     //
  AccountsCommon.prototype._initConnection = function () {                                                           //
    function _initConnection(options) {                                                                              //
      if (!Meteor.isClient) {                                                                                        // 187
        return;                                                                                                      // 188
      } // The connection used by the Accounts system. This is the connection                                        // 189
      // that will get logged in by Meteor.login(), and this is the                                                  // 192
      // connection whose login state will be reflected by Meteor.userId().                                          // 193
      //                                                                                                             // 194
      // It would be much preferable for this to be in accounts_client.js,                                           // 195
      // but it has to be here because it's needed to create the                                                     // 196
      // Meteor.users collection.                                                                                    // 197
                                                                                                                     //
                                                                                                                     //
      if (options.connection) {                                                                                      // 199
        this.connection = options.connection;                                                                        // 200
      } else if (options.ddpUrl) {                                                                                   // 201
        this.connection = DDP.connect(options.ddpUrl);                                                               // 202
      } else if (typeof __meteor_runtime_config__ !== "undefined" && __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL) {
        // Temporary, internal hook to allow the server to point the client                                          // 205
        // to a different authentication server. This is for a very                                                  // 206
        // particular use case that comes up when implementing a oauth                                               // 207
        // server. Unsupported and may go away at any point in time.                                                 // 208
        //                                                                                                           // 209
        // We will eventually provide a general way to use account-base                                              // 210
        // against any DDP connection, not just one special one.                                                     // 211
        this.connection = DDP.connect(__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL);                            // 212
      } else {                                                                                                       // 214
        this.connection = Meteor.connection;                                                                         // 215
      }                                                                                                              // 216
    }                                                                                                                // 217
                                                                                                                     //
    return _initConnection;                                                                                          //
  }();                                                                                                               //
                                                                                                                     //
  AccountsCommon.prototype._getTokenLifetimeMs = function () {                                                       //
    function _getTokenLifetimeMs() {                                                                                 //
      // When loginExpirationInDays is set to null, we'll use a really high                                          // 220
      // number of days (LOGIN_UNEXPIRABLE_TOKEN_DAYS) to simulate an                                                // 221
      // unexpiring token.                                                                                           // 222
      var loginExpirationInDays = this._options.loginExpirationInDays === null ? LOGIN_UNEXPIRING_TOKEN_DAYS : this._options.loginExpirationInDays;
      return (loginExpirationInDays || DEFAULT_LOGIN_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000;                         // 227
    }                                                                                                                // 229
                                                                                                                     //
    return _getTokenLifetimeMs;                                                                                      //
  }();                                                                                                               //
                                                                                                                     //
  AccountsCommon.prototype._getPasswordResetTokenLifetimeMs = function () {                                          //
    function _getPasswordResetTokenLifetimeMs() {                                                                    //
      return (this._options.passwordResetTokenExpirationInDays || DEFAULT_PASSWORD_RESET_TOKEN_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000;
    }                                                                                                                // 234
                                                                                                                     //
    return _getPasswordResetTokenLifetimeMs;                                                                         //
  }();                                                                                                               //
                                                                                                                     //
  AccountsCommon.prototype._getPasswordEnrollTokenLifetimeMs = function () {                                         //
    function _getPasswordEnrollTokenLifetimeMs() {                                                                   //
      return (this._options.passwordEnrollTokenExpirationInDays || DEFAULT_PASSWORD_ENROLL_TOKEN_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000;
    }                                                                                                                // 239
                                                                                                                     //
    return _getPasswordEnrollTokenLifetimeMs;                                                                        //
  }();                                                                                                               //
                                                                                                                     //
  AccountsCommon.prototype._tokenExpiration = function () {                                                          //
    function _tokenExpiration(when) {                                                                                //
      // We pass when through the Date constructor for backwards compatibility;                                      // 242
      // `when` used to be a number.                                                                                 // 243
      return new Date(new Date(when).getTime() + this._getTokenLifetimeMs());                                        // 244
    }                                                                                                                // 245
                                                                                                                     //
    return _tokenExpiration;                                                                                         //
  }();                                                                                                               //
                                                                                                                     //
  AccountsCommon.prototype._tokenExpiresSoon = function () {                                                         //
    function _tokenExpiresSoon(when) {                                                                               //
      var minLifetimeMs = .1 * this._getTokenLifetimeMs();                                                           // 248
                                                                                                                     //
      var minLifetimeCapMs = MIN_TOKEN_LIFETIME_CAP_SECS * 1000;                                                     // 249
      if (minLifetimeMs > minLifetimeCapMs) minLifetimeMs = minLifetimeCapMs;                                        // 250
      return new Date() > new Date(when) - minLifetimeMs;                                                            // 252
    }                                                                                                                // 253
                                                                                                                     //
    return _tokenExpiresSoon;                                                                                        //
  }();                                                                                                               //
                                                                                                                     //
  return AccountsCommon;                                                                                             //
}();                                                                                                                 //
                                                                                                                     //
var Ap = AccountsCommon.prototype; // Note that Accounts is defined separately in accounts_client.js and             // 256
// accounts_server.js.                                                                                               // 259
/**                                                                                                                  // 261
 * @summary Get the current user id, or `null` if no user is logged in. A reactive data source.                      //
 * @locus Anywhere but publish functions                                                                             //
 * @importFromPackage meteor                                                                                         //
 */                                                                                                                  //
                                                                                                                     //
Meteor.userId = function () {                                                                                        // 266
  return Accounts.userId();                                                                                          // 267
}; /**                                                                                                               // 268
    * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.               //
    * @locus Anywhere but publish functions                                                                          //
    * @importFromPackage meteor                                                                                      //
    */                                                                                                               //
                                                                                                                     //
Meteor.user = function () {                                                                                          // 275
  return Accounts.user();                                                                                            // 276
}; // how long (in days) until a login token expires                                                                 // 277
                                                                                                                     //
                                                                                                                     //
var DEFAULT_LOGIN_EXPIRATION_DAYS = 90; // Expose for testing.                                                       // 280
                                                                                                                     //
Ap.DEFAULT_LOGIN_EXPIRATION_DAYS = DEFAULT_LOGIN_EXPIRATION_DAYS; // how long (in days) until reset password token expires
                                                                                                                     //
var DEFAULT_PASSWORD_RESET_TOKEN_EXPIRATION_DAYS = 3; // how long (in days) until enrol password token expires       // 285
                                                                                                                     //
var DEFAULT_PASSWORD_ENROLL_TOKEN_EXPIRATION_DAYS = 30; // Clients don't try to auto-login with a token that is going to expire within
// .1 * DEFAULT_LOGIN_EXPIRATION_DAYS, capped at MIN_TOKEN_LIFETIME_CAP_SECS.                                        // 289
// Tries to avoid abrupt disconnects from expiring tokens.                                                           // 290
                                                                                                                     //
var MIN_TOKEN_LIFETIME_CAP_SECS = 3600; // one hour                                                                  // 291
// how often (in milliseconds) we check for expired tokens                                                           // 292
                                                                                                                     //
EXPIRE_TOKENS_INTERVAL_MS = 600 * 1000; // 10 minutes                                                                // 293
// how long we wait before logging out clients when Meteor.logoutOtherClients is                                     // 294
// called                                                                                                            // 295
                                                                                                                     //
CONNECTION_CLOSE_DELAY_MS = 10 * 1000; // A large number of expiration days (approximately 100 years worth) that is  // 296
// used when creating unexpiring tokens.                                                                             // 299
                                                                                                                     //
var LOGIN_UNEXPIRING_TOKEN_DAYS = 365 * 100; // Expose for testing.                                                  // 300
                                                                                                                     //
Ap.LOGIN_UNEXPIRING_TOKEN_DAYS = LOGIN_UNEXPIRING_TOKEN_DAYS; // loginServiceConfiguration and ConfigError are maintained for backwards compatibility
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 305
  var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;                                  // 306
  Ap.loginServiceConfiguration = ServiceConfiguration.configurations;                                                // 308
  Ap.ConfigError = ServiceConfiguration.ConfigError;                                                                 // 309
}); // Thrown when the user cancels the login process (eg, closes an oauth                                           // 310
// popup, declines retina scan, etc)                                                                                 // 313
                                                                                                                     //
var lceName = 'Accounts.LoginCancelledError';                                                                        // 314
Ap.LoginCancelledError = Meteor.makeErrorType(lceName, function (description) {                                      // 315
  this.message = description;                                                                                        // 318
});                                                                                                                  // 319
Ap.LoginCancelledError.prototype.name = lceName; // This is used to transmit specific subclass errors over the wire. We should
// come up with a more generic way to do this (eg, with some sort of symbolic                                        // 324
// error code rather than a number).                                                                                 // 325
                                                                                                                     //
Ap.LoginCancelledError.numericError = 0x8acdc2f;                                                                     // 326
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts_rate_limit.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/accounts_rate_limit.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var AccountsCommon = void 0;                                                                                         // 1
module.watch(require("./accounts_common.js"), {                                                                      // 1
  AccountsCommon: function (v) {                                                                                     // 1
    AccountsCommon = v;                                                                                              // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var Ap = AccountsCommon.prototype;                                                                                   // 3
var defaultRateLimiterRuleId; // Removes default rate limiting rule                                                  // 4
                                                                                                                     //
Ap.removeDefaultRateLimit = function () {                                                                            // 6
  var resp = DDPRateLimiter.removeRule(defaultRateLimiterRuleId);                                                    // 7
  defaultRateLimiterRuleId = null;                                                                                   // 8
  return resp;                                                                                                       // 9
}; // Add a default rule of limiting logins, creating new users and password reset                                   // 10
// to 5 times every 10 seconds per connection.                                                                       // 13
                                                                                                                     //
                                                                                                                     //
Ap.addDefaultRateLimit = function () {                                                                               // 14
  if (!defaultRateLimiterRuleId) {                                                                                   // 15
    defaultRateLimiterRuleId = DDPRateLimiter.addRule({                                                              // 16
      userId: null,                                                                                                  // 17
      clientAddress: null,                                                                                           // 18
      type: 'method',                                                                                                // 19
      name: function (name) {                                                                                        // 20
        return _.contains(['login', 'createUser', 'resetPassword', 'forgotPassword'], name);                         // 21
      },                                                                                                             // 23
      connectionId: function (connectionId) {                                                                        // 24
        return true;                                                                                                 // 25
      }                                                                                                              // 26
    }, 5, 10000);                                                                                                    // 16
  }                                                                                                                  // 28
};                                                                                                                   // 29
                                                                                                                     //
Ap.addDefaultRateLimit();                                                                                            // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts_server.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/accounts_server.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _extends2 = require("babel-runtime/helpers/extends");                                                            //
                                                                                                                     //
var _extends3 = _interopRequireDefault(_extends2);                                                                   //
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
module.export({                                                                                                      // 1
  AccountsServer: function () {                                                                                      // 1
    return AccountsServer;                                                                                           // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var AccountsCommon = void 0;                                                                                         // 1
module.watch(require("./accounts_common.js"), {                                                                      // 1
  AccountsCommon: function (v) {                                                                                     // 1
    AccountsCommon = v;                                                                                              // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
                                                                                                                     //
var crypto = Npm.require('crypto');                                                                                  // 1
                                                                                                                     //
var AccountsServer = function (_AccountsCommon) {                                                                    //
  (0, _inherits3.default)(AccountsServer, _AccountsCommon);                                                          //
                                                                                                                     //
  // Note that this constructor is less likely to be instantiated multiple                                           // 14
  // times than the `AccountsClient` constructor, because a single server                                            // 15
  // can provide only one set of methods.                                                                            // 16
  function AccountsServer(server) {                                                                                  // 17
    (0, _classCallCheck3.default)(this, AccountsServer);                                                             // 17
                                                                                                                     //
    var _this = (0, _possibleConstructorReturn3.default)(this, _AccountsCommon.call(this));                          // 17
                                                                                                                     //
    _this._server = server || Meteor.server; // Set up the server's methods, as if by calling Meteor.methods.        // 20
                                                                                                                     //
    _this._initServerMethods();                                                                                      // 22
                                                                                                                     //
    _this._initAccountDataHooks(); // If autopublish is on, publish these user fields. Login service                 // 24
    // packages (eg accounts-google) add to these by calling                                                         // 27
    // addAutopublishFields.  Notably, this isn't implemented with multiple                                          // 28
    // publishes since DDP only merges only across top-level fields, not                                             // 29
    // subfields (such as 'services.facebook.accessToken')                                                           // 30
                                                                                                                     //
                                                                                                                     //
    _this._autopublishFields = {                                                                                     // 31
      loggedInUser: ['profile', 'username', 'emails'],                                                               // 32
      otherUsers: ['profile', 'username']                                                                            // 33
    };                                                                                                               // 31
                                                                                                                     //
    _this._initServerPublications(); // connectionId -> {connection, loginToken}                                     // 35
                                                                                                                     //
                                                                                                                     //
    _this._accountData = {}; // connection id -> observe handle for the login token that this connection is          // 38
    // currently associated with, or a number. The number indicates that we are in                                   // 41
    // the process of setting up the observe (using a number instead of a single                                     // 42
    // sentinel allows multiple attempts to set up the observe to identify which                                     // 43
    // one was theirs).                                                                                              // 44
                                                                                                                     //
    _this._userObservesForConnections = {};                                                                          // 45
    _this._nextUserObserveNumber = 1; // for the number described above.                                             // 46
    // list of all registered handlers.                                                                              // 48
                                                                                                                     //
    _this._loginHandlers = [];                                                                                       // 49
    setupUsersCollection(_this.users);                                                                               // 51
    setupDefaultLoginHandlers(_this);                                                                                // 52
    setExpireTokensInterval(_this);                                                                                  // 53
    _this._validateLoginHook = new Hook({                                                                            // 55
      bindEnvironment: false                                                                                         // 55
    });                                                                                                              // 55
    _this._validateNewUserHooks = [defaultValidateNewUserHook.bind(_this)];                                          // 56
                                                                                                                     //
    _this._deleteSavedTokensForAllUsersOnStartup();                                                                  // 60
                                                                                                                     //
    _this._skipCaseInsensitiveChecksForTest = {};                                                                    // 62
    return _this;                                                                                                    // 17
  } ///                                                                                                              // 63
  /// CURRENT USER                                                                                                   // 66
  ///                                                                                                                // 67
  // @override of "abstract" non-implementation in accounts_common.js                                                // 69
                                                                                                                     //
                                                                                                                     //
  AccountsServer.prototype.userId = function () {                                                                    //
    function userId() {                                                                                              //
      // This function only works if called inside a method or a pubication.                                         // 71
      // Using any of the infomation from Meteor.user() in a method or                                               // 72
      // publish function will always use the value from when the function first                                     // 73
      // runs. This is likely not what the user expects. The way to make this work                                   // 74
      // in a method or publish function is to do Meteor.find(this.userId).observe                                   // 75
      // and recompute when the user record changes.                                                                 // 76
      var currentInvocation = DDP._CurrentMethodInvocation.get() || DDP._CurrentPublicationInvocation.get();         // 77
                                                                                                                     //
      if (!currentInvocation) throw new Error("Meteor.userId can only be invoked in method calls or publications.");
      return currentInvocation.userId;                                                                               // 80
    }                                                                                                                // 81
                                                                                                                     //
    return userId;                                                                                                   //
  }(); ///                                                                                                           //
  /// LOGIN HOOKS                                                                                                    // 84
  ///                                                                                                                // 85
  /**                                                                                                                // 87
   * @summary Validate login attempts.                                                                               //
   * @locus Server                                                                                                   //
   * @param {Function} func Called whenever a login is attempted (either successful or unsuccessful).  A login can be aborted by returning a falsy value or throwing an exception.
   */                                                                                                                //
                                                                                                                     //
  AccountsServer.prototype.validateLoginAttempt = function () {                                                      //
    function validateLoginAttempt(func) {                                                                            //
      // Exceptions inside the hook callback are passed up to us.                                                    // 93
      return this._validateLoginHook.register(func);                                                                 // 94
    }                                                                                                                // 95
                                                                                                                     //
    return validateLoginAttempt;                                                                                     //
  }(); /**                                                                                                           //
        * @summary Set restrictions on new user creation.                                                            //
        * @locus Server                                                                                              //
        * @param {Function} func Called whenever a new user is created. Takes the new user object, and returns true to allow the creation or false to abort.
        */                                                                                                           //
                                                                                                                     //
  AccountsServer.prototype.validateNewUser = function () {                                                           //
    function validateNewUser(func) {                                                                                 //
      this._validateNewUserHooks.push(func);                                                                         // 103
    }                                                                                                                // 104
                                                                                                                     //
    return validateNewUser;                                                                                          //
  }(); ///                                                                                                           //
  /// CREATE USER HOOKS                                                                                              // 107
  ///                                                                                                                // 108
  /**                                                                                                                // 110
   * @summary Customize new user creation.                                                                           //
   * @locus Server                                                                                                   //
   * @param {Function} func Called whenever a new user is created. Return the new user object, or throw an `Error` to abort the creation.
   */                                                                                                                //
                                                                                                                     //
  AccountsServer.prototype.onCreateUser = function () {                                                              //
    function onCreateUser(func) {                                                                                    //
      if (this._onCreateUserHook) {                                                                                  // 116
        throw new Error("Can only call onCreateUser once");                                                          // 117
      }                                                                                                              // 118
                                                                                                                     //
      this._onCreateUserHook = func;                                                                                 // 120
    }                                                                                                                // 121
                                                                                                                     //
    return onCreateUser;                                                                                             //
  }(); /**                                                                                                           //
        * @summary Customize oauth user profile updates                                                              //
        * @locus Server                                                                                              //
        * @param {Function} func Called whenever a user is logged in via oauth. Return the profile object to be merged, or throw an `Error` to abort the creation.
        */                                                                                                           //
                                                                                                                     //
  AccountsServer.prototype.onExternalLogin = function () {                                                           //
    function onExternalLogin(func) {                                                                                 //
      if (this._onExternalLoginHook) {                                                                               // 129
        throw new Error("Can only call onExternalLogin once");                                                       // 130
      }                                                                                                              // 131
                                                                                                                     //
      this._onExternalLoginHook = func;                                                                              // 133
    }                                                                                                                // 134
                                                                                                                     //
    return onExternalLogin;                                                                                          //
  }();                                                                                                               //
                                                                                                                     //
  return AccountsServer;                                                                                             //
}(AccountsCommon);                                                                                                   //
                                                                                                                     //
;                                                                                                                    // 136
var Ap = AccountsServer.prototype; // Give each login hook callback a fresh cloned copy of the attempt               // 138
// object, but don't clone the connection.                                                                           // 141
//                                                                                                                   // 142
                                                                                                                     //
function cloneAttemptWithConnection(connection, attempt) {                                                           // 143
  var clonedAttempt = EJSON.clone(attempt);                                                                          // 144
  clonedAttempt.connection = connection;                                                                             // 145
  return clonedAttempt;                                                                                              // 146
}                                                                                                                    // 147
                                                                                                                     //
Ap._validateLogin = function (connection, attempt) {                                                                 // 149
  this._validateLoginHook.each(function (callback) {                                                                 // 150
    var ret;                                                                                                         // 151
                                                                                                                     //
    try {                                                                                                            // 152
      ret = callback(cloneAttemptWithConnection(connection, attempt));                                               // 153
    } catch (e) {                                                                                                    // 154
      attempt.allowed = false; // XXX this means the last thrown error overrides previous error                      // 156
      // messages. Maybe this is surprising to users and we should make                                              // 158
      // overriding errors more explicit. (see                                                                       // 159
      // https://github.com/meteor/meteor/issues/1960)                                                               // 160
                                                                                                                     //
      attempt.error = e;                                                                                             // 161
      return true;                                                                                                   // 162
    }                                                                                                                // 163
                                                                                                                     //
    if (!ret) {                                                                                                      // 164
      attempt.allowed = false; // don't override a specific error provided by a previous                             // 165
      // validator or the initial attempt (eg "incorrect password").                                                 // 167
                                                                                                                     //
      if (!attempt.error) attempt.error = new Meteor.Error(403, "Login forbidden");                                  // 168
    }                                                                                                                // 170
                                                                                                                     //
    return true;                                                                                                     // 171
  });                                                                                                                // 172
};                                                                                                                   // 173
                                                                                                                     //
Ap._successfulLogin = function (connection, attempt) {                                                               // 176
  this._onLoginHook.each(function (callback) {                                                                       // 177
    callback(cloneAttemptWithConnection(connection, attempt));                                                       // 178
    return true;                                                                                                     // 179
  });                                                                                                                // 180
};                                                                                                                   // 181
                                                                                                                     //
Ap._failedLogin = function (connection, attempt) {                                                                   // 183
  this._onLoginFailureHook.each(function (callback) {                                                                // 184
    callback(cloneAttemptWithConnection(connection, attempt));                                                       // 185
    return true;                                                                                                     // 186
  });                                                                                                                // 187
};                                                                                                                   // 188
                                                                                                                     //
Ap._successfulLogout = function (connection, userId) {                                                               // 190
  var user = userId && this.users.findOne(userId);                                                                   // 191
                                                                                                                     //
  this._onLogoutHook.each(function (callback) {                                                                      // 192
    callback({                                                                                                       // 193
      user: user,                                                                                                    // 193
      connection: connection                                                                                         // 193
    });                                                                                                              // 193
    return true;                                                                                                     // 194
  });                                                                                                                // 195
}; ///                                                                                                               // 196
/// LOGIN METHODS                                                                                                    // 199
///                                                                                                                  // 200
// Login methods return to the client an object containing these                                                     // 202
// fields when the user was logged in successfully:                                                                  // 203
//                                                                                                                   // 204
//   id: userId                                                                                                      // 205
//   token: *                                                                                                        // 206
//   tokenExpires: *                                                                                                 // 207
//                                                                                                                   // 208
// tokenExpires is optional and intends to provide a hint to the                                                     // 209
// client as to when the token will expire. If not provided, the                                                     // 210
// client will call Accounts._tokenExpiration, passing it the date                                                   // 211
// that it received the token.                                                                                       // 212
//                                                                                                                   // 213
// The login method will throw an error back to the client if the user                                               // 214
// failed to log in.                                                                                                 // 215
//                                                                                                                   // 216
//                                                                                                                   // 217
// Login handlers and service specific login methods such as                                                         // 218
// `createUser` internally return a `result` object containing these                                                 // 219
// fields:                                                                                                           // 220
//                                                                                                                   // 221
//   type:                                                                                                           // 222
//     optional string; the service name, overrides the handler                                                      // 223
//     default if present.                                                                                           // 224
//                                                                                                                   // 225
//   error:                                                                                                          // 226
//     exception; if the user is not allowed to login, the reason why.                                               // 227
//                                                                                                                   // 228
//   userId:                                                                                                         // 229
//     string; the user id of the user attempting to login (if                                                       // 230
//     known), required for an allowed login.                                                                        // 231
//                                                                                                                   // 232
//   options:                                                                                                        // 233
//     optional object merged into the result returned by the login                                                  // 234
//     method; used by HAMK from SRP.                                                                                // 235
//                                                                                                                   // 236
//   stampedLoginToken:                                                                                              // 237
//     optional object with `token` and `when` indicating the login                                                  // 238
//     token is already present in the database, returned by the                                                     // 239
//     "resume" login handler.                                                                                       // 240
//                                                                                                                   // 241
// For convenience, login methods can also throw an exception, which                                                 // 242
// is converted into an {error} result.  However, if the id of the                                                   // 243
// user attempting the login is known, a {userId, error} result should                                               // 244
// be returned instead since the user id is not captured when an                                                     // 245
// exception is thrown.                                                                                              // 246
//                                                                                                                   // 247
// This internal `result` object is automatically converted into the                                                 // 248
// public {id, token, tokenExpires} object returned to the client.                                                   // 249
// Try a login method, converting thrown exceptions into an {error}                                                  // 252
// result.  The `type` argument is a default, inserted into the result                                               // 253
// object if not explicitly returned.                                                                                // 254
//                                                                                                                   // 255
                                                                                                                     //
                                                                                                                     //
var tryLoginMethod = function (type, fn) {                                                                           // 256
  var result;                                                                                                        // 257
                                                                                                                     //
  try {                                                                                                              // 258
    result = fn();                                                                                                   // 259
  } catch (e) {                                                                                                      // 260
    result = {                                                                                                       // 262
      error: e                                                                                                       // 262
    };                                                                                                               // 262
  }                                                                                                                  // 263
                                                                                                                     //
  if (result && !result.type && type) result.type = type;                                                            // 265
  return result;                                                                                                     // 268
}; // Log in a user on a connection.                                                                                 // 269
//                                                                                                                   // 273
// We use the method invocation to set the user id on the connection,                                                // 274
// not the connection object directly. setUserId is tied to methods to                                               // 275
// enforce clear ordering of method application (using wait methods on                                               // 276
// the client, and a no setUserId after unblock restriction on the                                                   // 277
// server)                                                                                                           // 278
//                                                                                                                   // 279
// The `stampedLoginToken` parameter is optional.  When present, it                                                  // 280
// indicates that the login token has already been inserted into the                                                 // 281
// database and doesn't need to be inserted again.  (It's used by the                                                // 282
// "resume" login handler).                                                                                          // 283
                                                                                                                     //
                                                                                                                     //
Ap._loginUser = function (methodInvocation, userId, stampedLoginToken) {                                             // 284
  var self = this;                                                                                                   // 285
                                                                                                                     //
  if (!stampedLoginToken) {                                                                                          // 287
    stampedLoginToken = self._generateStampedLoginToken();                                                           // 288
                                                                                                                     //
    self._insertLoginToken(userId, stampedLoginToken);                                                               // 289
  } // This order (and the avoidance of yields) is important to make                                                 // 290
  // sure that when publish functions are rerun, they see a                                                          // 293
  // consistent view of the world: the userId is set and matches                                                     // 294
  // the login token on the connection (not that there is                                                            // 295
  // currently a public API for reading the login token on a                                                         // 296
  // connection).                                                                                                    // 297
                                                                                                                     //
                                                                                                                     //
  Meteor._noYieldsAllowed(function () {                                                                              // 298
    self._setLoginToken(userId, methodInvocation.connection, self._hashLoginToken(stampedLoginToken.token));         // 299
  });                                                                                                                // 304
                                                                                                                     //
  methodInvocation.setUserId(userId);                                                                                // 306
  return {                                                                                                           // 308
    id: userId,                                                                                                      // 309
    token: stampedLoginToken.token,                                                                                  // 310
    tokenExpires: self._tokenExpiration(stampedLoginToken.when)                                                      // 311
  };                                                                                                                 // 308
}; // After a login method has completed, call the login hooks.  Note                                                // 313
// that `attemptLogin` is called for *all* login attempts, even ones                                                 // 317
// which aren't successful (such as an invalid password, etc).                                                       // 318
//                                                                                                                   // 319
// If the login is allowed and isn't aborted by a validate login hook                                                // 320
// callback, log in the user.                                                                                        // 321
//                                                                                                                   // 322
                                                                                                                     //
                                                                                                                     //
Ap._attemptLogin = function (methodInvocation, methodName, methodArgs, result) {                                     // 323
  if (!result) throw new Error("result is required"); // XXX A programming error in a login handler can lead to this occuring, and
  // then we don't call onLogin or onLoginFailure callbacks. Should                                                  // 333
  // tryLoginMethod catch this case and turn it into an error?                                                       // 334
                                                                                                                     //
  if (!result.userId && !result.error) throw new Error("A login method must specify a userId or an error");          // 335
  var user;                                                                                                          // 338
  if (result.userId) user = this.users.findOne(result.userId);                                                       // 339
  var attempt = {                                                                                                    // 342
    type: result.type || "unknown",                                                                                  // 343
    allowed: !!(result.userId && !result.error),                                                                     // 344
    methodName: methodName,                                                                                          // 345
    methodArguments: _.toArray(methodArgs)                                                                           // 346
  };                                                                                                                 // 342
  if (result.error) attempt.error = result.error;                                                                    // 348
  if (user) attempt.user = user; // _validateLogin may mutate `attempt` by adding an error and changing allowed      // 350
  // to false, but that's the only change it can make (and the user's callbacks                                      // 354
  // only get a clone of `attempt`).                                                                                 // 355
                                                                                                                     //
  this._validateLogin(methodInvocation.connection, attempt);                                                         // 356
                                                                                                                     //
  if (attempt.allowed) {                                                                                             // 358
    var ret = _.extend(this._loginUser(methodInvocation, result.userId, result.stampedLoginToken), result.options || {});
                                                                                                                     //
    this._successfulLogin(methodInvocation.connection, attempt);                                                     // 367
                                                                                                                     //
    return ret;                                                                                                      // 368
  } else {                                                                                                           // 369
    this._failedLogin(methodInvocation.connection, attempt);                                                         // 371
                                                                                                                     //
    throw attempt.error;                                                                                             // 372
  }                                                                                                                  // 373
}; // All service specific login methods should go through this function.                                            // 374
// Ensure that thrown exceptions are caught and that login hook                                                      // 378
// callbacks are still called.                                                                                       // 379
//                                                                                                                   // 380
                                                                                                                     //
                                                                                                                     //
Ap._loginMethod = function (methodInvocation, methodName, methodArgs, type, fn) {                                    // 381
  return this._attemptLogin(methodInvocation, methodName, methodArgs, tryLoginMethod(type, fn));                     // 388
}; // Report a login attempt failed outside the context of a normal login                                            // 394
// method. This is for use in the case where there is a multi-step login                                             // 398
// procedure (eg SRP based password login). If a method early in the                                                 // 399
// chain fails, it should call this function to report a failure. There                                              // 400
// is no corresponding method for a successful login; methods that can                                               // 401
// succeed at logging a user in should always be actual login methods                                                // 402
// (using either Accounts._loginMethod or Accounts.registerLoginHandler).                                            // 403
                                                                                                                     //
                                                                                                                     //
Ap._reportLoginFailure = function (methodInvocation, methodName, methodArgs, result) {                               // 404
  var attempt = {                                                                                                    // 410
    type: result.type || "unknown",                                                                                  // 411
    allowed: false,                                                                                                  // 412
    error: result.error,                                                                                             // 413
    methodName: methodName,                                                                                          // 414
    methodArguments: _.toArray(methodArgs)                                                                           // 415
  };                                                                                                                 // 410
                                                                                                                     //
  if (result.userId) {                                                                                               // 418
    attempt.user = this.users.findOne(result.userId);                                                                // 419
  }                                                                                                                  // 420
                                                                                                                     //
  this._validateLogin(methodInvocation.connection, attempt);                                                         // 422
                                                                                                                     //
  this._failedLogin(methodInvocation.connection, attempt); // _validateLogin may mutate attempt to set a new error message. Return
  // the modified version.                                                                                           // 426
                                                                                                                     //
                                                                                                                     //
  return attempt;                                                                                                    // 427
}; ///                                                                                                               // 428
/// LOGIN HANDLERS                                                                                                   // 432
///                                                                                                                  // 433
// The main entry point for auth packages to hook in to login.                                                       // 435
//                                                                                                                   // 436
// A login handler is a login method which can return `undefined` to                                                 // 437
// indicate that the login request is not handled by this handler.                                                   // 438
//                                                                                                                   // 439
// @param name {String} Optional.  The service name, used by default                                                 // 440
// if a specific service name isn't returned in the result.                                                          // 441
//                                                                                                                   // 442
// @param handler {Function} A function that receives an options object                                              // 443
// (as passed as an argument to the `login` method) and returns one of:                                              // 444
// - `undefined`, meaning don't handle;                                                                              // 445
// - a login method result object                                                                                    // 446
                                                                                                                     //
                                                                                                                     //
Ap.registerLoginHandler = function (name, handler) {                                                                 // 448
  if (!handler) {                                                                                                    // 449
    handler = name;                                                                                                  // 450
    name = null;                                                                                                     // 451
  }                                                                                                                  // 452
                                                                                                                     //
  this._loginHandlers.push({                                                                                         // 454
    name: name,                                                                                                      // 455
    handler: handler                                                                                                 // 456
  });                                                                                                                // 454
}; // Checks a user's credentials against all the registered login                                                   // 458
// handlers, and returns a login token if the credentials are valid. It                                              // 462
// is like the login method, except that it doesn't set the logged-in                                                // 463
// user on the connection. Throws a Meteor.Error if logging in fails,                                                // 464
// including the case where none of the login handlers handled the login                                             // 465
// request. Otherwise, returns {id: userId, token: *, tokenExpires: *}.                                              // 466
//                                                                                                                   // 467
// For example, if you want to login with a plaintext password, `options` could be                                   // 468
//   { user: { username: <username> }, password: <password> }, or                                                    // 469
//   { user: { email: <email> }, password: <password> }.                                                             // 470
// Try all of the registered login handlers until one of them doesn't                                                // 472
// return `undefined`, meaning it handled this call to `login`. Return                                               // 473
// that return value.                                                                                                // 474
                                                                                                                     //
                                                                                                                     //
Ap._runLoginHandlers = function (methodInvocation, options) {                                                        // 475
  for (var i = 0; i < this._loginHandlers.length; ++i) {                                                             // 476
    var handler = this._loginHandlers[i];                                                                            // 477
    var result = tryLoginMethod(handler.name, function () {                                                          // 479
      return handler.handler.call(methodInvocation, options);                                                        // 482
    });                                                                                                              // 483
                                                                                                                     //
    if (result) {                                                                                                    // 486
      return result;                                                                                                 // 487
    }                                                                                                                // 488
                                                                                                                     //
    if (result !== undefined) {                                                                                      // 490
      throw new Meteor.Error(400, "A login handler should return a result or undefined");                            // 491
    }                                                                                                                // 492
  }                                                                                                                  // 493
                                                                                                                     //
  return {                                                                                                           // 495
    type: null,                                                                                                      // 496
    error: new Meteor.Error(400, "Unrecognized options for login request")                                           // 497
  };                                                                                                                 // 495
}; // Deletes the given loginToken from the database.                                                                // 499
//                                                                                                                   // 502
// For new-style hashed token, this will cause all connections                                                       // 503
// associated with the token to be closed.                                                                           // 504
//                                                                                                                   // 505
// Any connections associated with old-style unhashed tokens will be                                                 // 506
// in the process of becoming associated with hashed tokens and then                                                 // 507
// they'll get closed.                                                                                               // 508
                                                                                                                     //
                                                                                                                     //
Ap.destroyToken = function (userId, loginToken) {                                                                    // 509
  this.users.update(userId, {                                                                                        // 510
    $pull: {                                                                                                         // 511
      "services.resume.loginTokens": {                                                                               // 512
        $or: [{                                                                                                      // 513
          hashedToken: loginToken                                                                                    // 514
        }, {                                                                                                         // 514
          token: loginToken                                                                                          // 515
        }]                                                                                                           // 515
      }                                                                                                              // 512
    }                                                                                                                // 511
  });                                                                                                                // 510
};                                                                                                                   // 520
                                                                                                                     //
Ap._initServerMethods = function () {                                                                                // 522
  // The methods created in this function need to be created here so that                                            // 523
  // this variable is available in their scope.                                                                      // 524
  var accounts = this; // This object will be populated with methods and then passed to                              // 525
  // accounts._server.methods further below.                                                                         // 528
                                                                                                                     //
  var methods = {}; // @returns {Object|null}                                                                        // 529
  //   If successful, returns {token: reconnectToken, id: userId}                                                    // 532
  //   If unsuccessful (for example, if the user closed the oauth login popup),                                      // 533
  //     throws an error describing the reason                                                                       // 534
                                                                                                                     //
  methods.login = function (options) {                                                                               // 535
    var self = this; // Login handlers should really also check whatever field they look at in                       // 536
    // options, but we don't enforce it.                                                                             // 539
                                                                                                                     //
    check(options, Object);                                                                                          // 540
                                                                                                                     //
    var result = accounts._runLoginHandlers(self, options);                                                          // 542
                                                                                                                     //
    return accounts._attemptLogin(self, "login", arguments, result);                                                 // 544
  };                                                                                                                 // 545
                                                                                                                     //
  methods.logout = function () {                                                                                     // 547
    var token = accounts._getLoginToken(this.connection.id);                                                         // 548
                                                                                                                     //
    accounts._setLoginToken(this.userId, this.connection, null);                                                     // 549
                                                                                                                     //
    if (token && this.userId) accounts.destroyToken(this.userId, token);                                             // 550
                                                                                                                     //
    accounts._successfulLogout(this.connection, this.userId);                                                        // 552
                                                                                                                     //
    this.setUserId(null);                                                                                            // 553
  }; // Delete all the current user's tokens and close all open connections logged                                   // 554
  // in as this user. Returns a fresh new login token that this client can                                           // 557
  // use. Tests set Accounts._noConnectionCloseDelayForTest to delete tokens                                         // 558
  // immediately instead of using a delay.                                                                           // 559
  //                                                                                                                 // 560
  // XXX COMPAT WITH 0.7.2                                                                                           // 561
  // This single `logoutOtherClients` method has been replaced with two                                              // 562
  // methods, one that you call to get a new token, and another that you                                             // 563
  // call to remove all tokens except your own. The new design allows                                                // 564
  // clients to know when other clients have actually been logged                                                    // 565
  // out. (The `logoutOtherClients` method guarantees the caller that                                                // 566
  // the other clients will be logged out at some point, but makes no                                                // 567
  // guarantees about when.) This method is left in for backwards                                                    // 568
  // compatibility, especially since application code might be calling                                               // 569
  // this method directly.                                                                                           // 570
  //                                                                                                                 // 571
  // @returns {Object} Object with token and tokenExpires keys.                                                      // 572
                                                                                                                     //
                                                                                                                     //
  methods.logoutOtherClients = function () {                                                                         // 573
    var self = this;                                                                                                 // 574
    var user = accounts.users.findOne(self.userId, {                                                                 // 575
      fields: {                                                                                                      // 576
        "services.resume.loginTokens": true                                                                          // 577
      }                                                                                                              // 576
    });                                                                                                              // 575
                                                                                                                     //
    if (user) {                                                                                                      // 580
      // Save the current tokens in the database to be deleted in                                                    // 581
      // CONNECTION_CLOSE_DELAY_MS ms. This gives other connections in the                                           // 582
      // caller's browser time to find the fresh token in localStorage. We save                                      // 583
      // the tokens in the database in case we crash before actually deleting                                        // 584
      // them.                                                                                                       // 585
      var tokens = user.services.resume.loginTokens;                                                                 // 586
                                                                                                                     //
      var newToken = accounts._generateStampedLoginToken();                                                          // 587
                                                                                                                     //
      var userId = self.userId;                                                                                      // 588
      accounts.users.update(userId, {                                                                                // 589
        $set: {                                                                                                      // 590
          "services.resume.loginTokensToDelete": tokens,                                                             // 591
          "services.resume.haveLoginTokensToDelete": true                                                            // 592
        },                                                                                                           // 590
        $push: {                                                                                                     // 594
          "services.resume.loginTokens": accounts._hashStampedToken(newToken)                                        // 594
        }                                                                                                            // 594
      });                                                                                                            // 589
      Meteor.setTimeout(function () {                                                                                // 596
        // The observe on Meteor.users will take care of closing the connections                                     // 597
        // associated with `tokens`.                                                                                 // 598
        accounts._deleteSavedTokensForUser(userId, tokens);                                                          // 599
      }, accounts._noConnectionCloseDelayForTest ? 0 : CONNECTION_CLOSE_DELAY_MS); // We do not set the login token on this connection, but instead the
      // observe closes the connection and the client will reconnect with the                                        // 603
      // new token.                                                                                                  // 604
                                                                                                                     //
      return {                                                                                                       // 605
        token: newToken.token,                                                                                       // 606
        tokenExpires: accounts._tokenExpiration(newToken.when)                                                       // 607
      };                                                                                                             // 605
    } else {                                                                                                         // 609
      throw new Meteor.Error("You are not logged in.");                                                              // 610
    }                                                                                                                // 611
  }; // Generates a new login token with the same expiration as the                                                  // 612
  // connection's current token and saves it to the database. Associates                                             // 615
  // the connection with this new token and returns it. Throws an error                                              // 616
  // if called on a connection that isn't logged in.                                                                 // 617
  //                                                                                                                 // 618
  // @returns Object                                                                                                 // 619
  //   If successful, returns { token: <new token>, id: <user id>,                                                   // 620
  //   tokenExpires: <expiration date> }.                                                                            // 621
                                                                                                                     //
                                                                                                                     //
  methods.getNewToken = function () {                                                                                // 622
    var self = this;                                                                                                 // 623
    var user = accounts.users.findOne(self.userId, {                                                                 // 624
      fields: {                                                                                                      // 625
        "services.resume.loginTokens": 1                                                                             // 625
      }                                                                                                              // 625
    });                                                                                                              // 624
                                                                                                                     //
    if (!self.userId || !user) {                                                                                     // 627
      throw new Meteor.Error("You are not logged in.");                                                              // 628
    } // Be careful not to generate a new token that has a later                                                     // 629
    // expiration than the curren token. Otherwise, a bad guy with a                                                 // 631
    // stolen token could use this method to stop his stolen token from                                              // 632
    // ever expiring.                                                                                                // 633
                                                                                                                     //
                                                                                                                     //
    var currentHashedToken = accounts._getLoginToken(self.connection.id);                                            // 634
                                                                                                                     //
    var currentStampedToken = _.find(user.services.resume.loginTokens, function (stampedToken) {                     // 635
      return stampedToken.hashedToken === currentHashedToken;                                                        // 638
    });                                                                                                              // 639
                                                                                                                     //
    if (!currentStampedToken) {                                                                                      // 641
      // safety belt: this should never happen                                                                       // 641
      throw new Meteor.Error("Invalid login token");                                                                 // 642
    }                                                                                                                // 643
                                                                                                                     //
    var newStampedToken = accounts._generateStampedLoginToken();                                                     // 644
                                                                                                                     //
    newStampedToken.when = currentStampedToken.when;                                                                 // 645
                                                                                                                     //
    accounts._insertLoginToken(self.userId, newStampedToken);                                                        // 646
                                                                                                                     //
    return accounts._loginUser(self, self.userId, newStampedToken);                                                  // 647
  }; // Removes all tokens except the token associated with the current                                              // 648
  // connection. Throws an error if the connection is not logged                                                     // 651
  // in. Returns nothing on success.                                                                                 // 652
                                                                                                                     //
                                                                                                                     //
  methods.removeOtherTokens = function () {                                                                          // 653
    var self = this;                                                                                                 // 654
                                                                                                                     //
    if (!self.userId) {                                                                                              // 655
      throw new Meteor.Error("You are not logged in.");                                                              // 656
    }                                                                                                                // 657
                                                                                                                     //
    var currentToken = accounts._getLoginToken(self.connection.id);                                                  // 658
                                                                                                                     //
    accounts.users.update(self.userId, {                                                                             // 659
      $pull: {                                                                                                       // 660
        "services.resume.loginTokens": {                                                                             // 661
          hashedToken: {                                                                                             // 661
            $ne: currentToken                                                                                        // 661
          }                                                                                                          // 661
        }                                                                                                            // 661
      }                                                                                                              // 660
    });                                                                                                              // 659
  }; // Allow a one-time configuration for a login service. Modifications                                            // 664
  // to this collection are also allowed in insecure mode.                                                           // 667
                                                                                                                     //
                                                                                                                     //
  methods.configureLoginService = function (options) {                                                               // 668
    check(options, Match.ObjectIncluding({                                                                           // 669
      service: String                                                                                                // 669
    })); // Don't let random users configure a service we haven't added yet (so                                      // 669
    // that when we do later add it, it's set up with their configuration                                            // 671
    // instead of ours).                                                                                             // 672
    // XXX if service configuration is oauth-specific then this code should                                          // 673
    //     be in accounts-oauth; if it's not then the registry should be                                             // 674
    //     in this package                                                                                           // 675
                                                                                                                     //
    if (!(accounts.oauth && _.contains(accounts.oauth.serviceNames(), options.service))) {                           // 676
      throw new Meteor.Error(403, "Service unknown");                                                                // 678
    }                                                                                                                // 679
                                                                                                                     //
    var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;                                // 681
    if (ServiceConfiguration.configurations.findOne({                                                                // 683
      service: options.service                                                                                       // 683
    })) throw new Meteor.Error(403, "Service " + options.service + " already configured");                           // 683
    if (_.has(options, "secret") && usingOAuthEncryption()) options.secret = OAuthEncryption.seal(options.secret);   // 686
    ServiceConfiguration.configurations.insert(options);                                                             // 689
  };                                                                                                                 // 690
                                                                                                                     //
  accounts._server.methods(methods);                                                                                 // 692
};                                                                                                                   // 693
                                                                                                                     //
Ap._initAccountDataHooks = function () {                                                                             // 695
  var accounts = this;                                                                                               // 696
                                                                                                                     //
  accounts._server.onConnection(function (connection) {                                                              // 698
    accounts._accountData[connection.id] = {                                                                         // 699
      connection: connection                                                                                         // 700
    };                                                                                                               // 699
    connection.onClose(function () {                                                                                 // 703
      accounts._removeTokenFromConnection(connection.id);                                                            // 704
                                                                                                                     //
      delete accounts._accountData[connection.id];                                                                   // 705
    });                                                                                                              // 706
  });                                                                                                                // 707
};                                                                                                                   // 708
                                                                                                                     //
Ap._initServerPublications = function () {                                                                           // 710
  var accounts = this; // Publish all login service configuration fields other than secret.                          // 711
                                                                                                                     //
  accounts._server.publish("meteor.loginServiceConfiguration", function () {                                         // 714
    var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;                                // 715
    return ServiceConfiguration.configurations.find({}, {                                                            // 717
      fields: {                                                                                                      // 717
        secret: 0                                                                                                    // 717
      }                                                                                                              // 717
    });                                                                                                              // 717
  }, {                                                                                                               // 718
    is_auto: true                                                                                                    // 718
  }); // not techincally autopublish, but stops the warning.                                                         // 718
  // Publish the current user's record to the client.                                                                // 720
                                                                                                                     //
                                                                                                                     //
  accounts._server.publish(null, function () {                                                                       // 721
    if (this.userId) {                                                                                               // 722
      return accounts.users.find({                                                                                   // 723
        _id: this.userId                                                                                             // 724
      }, {                                                                                                           // 723
        fields: {                                                                                                    // 726
          profile: 1,                                                                                                // 727
          username: 1,                                                                                               // 728
          emails: 1                                                                                                  // 729
        }                                                                                                            // 726
      });                                                                                                            // 725
    } else {                                                                                                         // 732
      return null;                                                                                                   // 733
    }                                                                                                                // 734
  }, /*suppress autopublish warning*/{                                                                               // 735
    is_auto: true                                                                                                    // 735
  }); // Use Meteor.startup to give other packages a chance to call                                                  // 735
  // addAutopublishFields.                                                                                           // 738
                                                                                                                     //
                                                                                                                     //
  Package.autopublish && Meteor.startup(function () {                                                                // 739
    // ['profile', 'username'] -> {profile: 1, username: 1}                                                          // 740
    var toFieldSelector = function (fields) {                                                                        // 741
      return _.object(_.map(fields, function (field) {                                                               // 742
        return [field, 1];                                                                                           // 743
      }));                                                                                                           // 744
    };                                                                                                               // 745
                                                                                                                     //
    accounts._server.publish(null, function () {                                                                     // 747
      if (this.userId) {                                                                                             // 748
        return accounts.users.find({                                                                                 // 749
          _id: this.userId                                                                                           // 750
        }, {                                                                                                         // 749
          fields: toFieldSelector(accounts._autopublishFields.loggedInUser)                                          // 752
        });                                                                                                          // 751
      } else {                                                                                                       // 754
        return null;                                                                                                 // 755
      }                                                                                                              // 756
    }, /*suppress autopublish warning*/{                                                                             // 757
      is_auto: true                                                                                                  // 757
    }); // XXX this publish is neither dedup-able nor is it optimized by our special                                 // 757
    // treatment of queries on a specific _id. Therefore this will have O(n^2)                                       // 760
    // run-time performance every time a user document is changed (eg someone                                        // 761
    // logging in). If this is a problem, we can instead write a manual publish                                      // 762
    // function which filters out fields based on 'this.userId'.                                                     // 763
                                                                                                                     //
                                                                                                                     //
    accounts._server.publish(null, function () {                                                                     // 764
      var selector = this.userId ? {                                                                                 // 765
        _id: {                                                                                                       // 766
          $ne: this.userId                                                                                           // 766
        }                                                                                                            // 766
      } : {};                                                                                                        // 765
      return accounts.users.find(selector, {                                                                         // 769
        fields: toFieldSelector(accounts._autopublishFields.otherUsers)                                              // 770
      });                                                                                                            // 769
    }, /*suppress autopublish warning*/{                                                                             // 772
      is_auto: true                                                                                                  // 772
    });                                                                                                              // 772
  });                                                                                                                // 773
}; // Add to the list of fields or subfields to be automatically                                                     // 774
// published if autopublish is on. Must be called from top-level                                                     // 777
// code (ie, before Meteor.startup hooks run).                                                                       // 778
//                                                                                                                   // 779
// @param opts {Object} with:                                                                                        // 780
//   - forLoggedInUser {Array} Array of fields published to the logged-in user                                       // 781
//   - forOtherUsers {Array} Array of fields published to users that aren't logged in                                // 782
                                                                                                                     //
                                                                                                                     //
Ap.addAutopublishFields = function (opts) {                                                                          // 783
  this._autopublishFields.loggedInUser.push.apply(this._autopublishFields.loggedInUser, opts.forLoggedInUser);       // 784
                                                                                                                     //
  this._autopublishFields.otherUsers.push.apply(this._autopublishFields.otherUsers, opts.forOtherUsers);             // 786
}; ///                                                                                                               // 788
/// ACCOUNT DATA                                                                                                     // 791
///                                                                                                                  // 792
// HACK: This is used by 'meteor-accounts' to get the loginToken for a                                               // 794
// connection. Maybe there should be a public way to do that.                                                        // 795
                                                                                                                     //
                                                                                                                     //
Ap._getAccountData = function (connectionId, field) {                                                                // 796
  var data = this._accountData[connectionId];                                                                        // 797
  return data && data[field];                                                                                        // 798
};                                                                                                                   // 799
                                                                                                                     //
Ap._setAccountData = function (connectionId, field, value) {                                                         // 801
  var data = this._accountData[connectionId]; // safety belt. shouldn't happen. accountData is set in onConnection,  // 802
  // we don't have a connectionId until it is set.                                                                   // 805
                                                                                                                     //
  if (!data) return;                                                                                                 // 806
  if (value === undefined) delete data[field];else data[field] = value;                                              // 809
}; ///                                                                                                               // 813
/// RECONNECT TOKENS                                                                                                 // 817
///                                                                                                                  // 818
/// support reconnecting using a meteor login token                                                                  // 819
                                                                                                                     //
                                                                                                                     //
Ap._hashLoginToken = function (loginToken) {                                                                         // 821
  var hash = crypto.createHash('sha256');                                                                            // 822
  hash.update(loginToken);                                                                                           // 823
  return hash.digest('base64');                                                                                      // 824
}; // {token, when} => {hashedToken, when}                                                                           // 825
                                                                                                                     //
                                                                                                                     //
Ap._hashStampedToken = function (stampedToken) {                                                                     // 829
  return _.extend(_.omit(stampedToken, 'token'), {                                                                   // 830
    hashedToken: this._hashLoginToken(stampedToken.token)                                                            // 831
  });                                                                                                                // 830
}; // Using $addToSet avoids getting an index error if another client                                                // 833
// logging in simultaneously has already inserted the new hashed                                                     // 837
// token.                                                                                                            // 838
                                                                                                                     //
                                                                                                                     //
Ap._insertHashedLoginToken = function (userId, hashedToken, query) {                                                 // 839
  query = query ? _.clone(query) : {};                                                                               // 840
  query._id = userId;                                                                                                // 841
  this.users.update(query, {                                                                                         // 842
    $addToSet: {                                                                                                     // 843
      "services.resume.loginTokens": hashedToken                                                                     // 844
    }                                                                                                                // 843
  });                                                                                                                // 842
}; // Exported for tests.                                                                                            // 847
                                                                                                                     //
                                                                                                                     //
Ap._insertLoginToken = function (userId, stampedToken, query) {                                                      // 851
  this._insertHashedLoginToken(userId, this._hashStampedToken(stampedToken), query);                                 // 852
};                                                                                                                   // 857
                                                                                                                     //
Ap._clearAllLoginTokens = function (userId) {                                                                        // 860
  this.users.update(userId, {                                                                                        // 861
    $set: {                                                                                                          // 862
      'services.resume.loginTokens': []                                                                              // 863
    }                                                                                                                // 862
  });                                                                                                                // 861
}; // test hook                                                                                                      // 866
                                                                                                                     //
                                                                                                                     //
Ap._getUserObserve = function (connectionId) {                                                                       // 869
  return this._userObservesForConnections[connectionId];                                                             // 870
}; // Clean up this connection's association with the token: that is, stop                                           // 871
// the observe that we started when we associated the connection with                                                // 874
// this token.                                                                                                       // 875
                                                                                                                     //
                                                                                                                     //
Ap._removeTokenFromConnection = function (connectionId) {                                                            // 876
  if (_.has(this._userObservesForConnections, connectionId)) {                                                       // 877
    var observe = this._userObservesForConnections[connectionId];                                                    // 878
                                                                                                                     //
    if (typeof observe === 'number') {                                                                               // 879
      // We're in the process of setting up an observe for this connection. We                                       // 880
      // can't clean up that observe yet, but if we delete the placeholder for                                       // 881
      // this connection, then the observe will get cleaned up as soon as it has                                     // 882
      // been set up.                                                                                                // 883
      delete this._userObservesForConnections[connectionId];                                                         // 884
    } else {                                                                                                         // 885
      delete this._userObservesForConnections[connectionId];                                                         // 886
      observe.stop();                                                                                                // 887
    }                                                                                                                // 888
  }                                                                                                                  // 889
};                                                                                                                   // 890
                                                                                                                     //
Ap._getLoginToken = function (connectionId) {                                                                        // 892
  return this._getAccountData(connectionId, 'loginToken');                                                           // 893
}; // newToken is a hashed token.                                                                                    // 894
                                                                                                                     //
                                                                                                                     //
Ap._setLoginToken = function (userId, connection, newToken) {                                                        // 897
  var self = this;                                                                                                   // 898
                                                                                                                     //
  self._removeTokenFromConnection(connection.id);                                                                    // 900
                                                                                                                     //
  self._setAccountData(connection.id, 'loginToken', newToken);                                                       // 901
                                                                                                                     //
  if (newToken) {                                                                                                    // 903
    // Set up an observe for this token. If the token goes away, we need                                             // 904
    // to close the connection.  We defer the observe because there's                                                // 905
    // no need for it to be on the critical path for login; we just need                                             // 906
    // to ensure that the connection will get closed at some point if                                                // 907
    // the token gets deleted.                                                                                       // 908
    //                                                                                                               // 909
    // Initially, we set the observe for this connection to a number; this                                           // 910
    // signifies to other code (which might run while we yield) that we are in                                       // 911
    // the process of setting up an observe for this connection. Once the                                            // 912
    // observe is ready to go, we replace the number with the real observe                                           // 913
    // handle (unless the placeholder has been deleted or replaced by a                                              // 914
    // different placehold number, signifying that the connection was closed                                         // 915
    // already -- in this case we just clean up the observe that we started).                                        // 916
    var myObserveNumber = ++self._nextUserObserveNumber;                                                             // 917
    self._userObservesForConnections[connection.id] = myObserveNumber;                                               // 918
    Meteor.defer(function () {                                                                                       // 919
      // If something else happened on this connection in the meantime (it got                                       // 920
      // closed, or another call to _setLoginToken happened), just do                                                // 921
      // nothing. We don't need to start an observe for an old connection or old                                     // 922
      // token.                                                                                                      // 923
      if (self._userObservesForConnections[connection.id] !== myObserveNumber) {                                     // 924
        return;                                                                                                      // 925
      }                                                                                                              // 926
                                                                                                                     //
      var foundMatchingUser; // Because we upgrade unhashed login tokens to hashed tokens at                         // 928
      // login time, sessions will only be logged in with a hashed                                                   // 930
      // token. Thus we only need to observe hashed tokens here.                                                     // 931
                                                                                                                     //
      var observe = self.users.find({                                                                                // 932
        _id: userId,                                                                                                 // 933
        'services.resume.loginTokens.hashedToken': newToken                                                          // 934
      }, {                                                                                                           // 932
        fields: {                                                                                                    // 935
          _id: 1                                                                                                     // 935
        }                                                                                                            // 935
      }).observeChanges({                                                                                            // 935
        added: function () {                                                                                         // 936
          foundMatchingUser = true;                                                                                  // 937
        },                                                                                                           // 938
        removed: function () {                                                                                       // 939
          connection.close(); // The onClose callback for the connection takes care of                               // 940
          // cleaning up the observe handle and any other state we have                                              // 942
          // lying around.                                                                                           // 943
        }                                                                                                            // 944
      }); // If the user ran another login or logout command we were waiting for the                                 // 935
      // defer or added to fire (ie, another call to _setLoginToken occurred),                                       // 948
      // then we let the later one win (start an observe, etc) and just stop our                                     // 949
      // observe now.                                                                                                // 950
      //                                                                                                             // 951
      // Similarly, if the connection was already closed, then the onClose                                           // 952
      // callback would have called _removeTokenFromConnection and there won't                                       // 953
      // be an entry in _userObservesForConnections. We can stop the observe.                                        // 954
                                                                                                                     //
      if (self._userObservesForConnections[connection.id] !== myObserveNumber) {                                     // 955
        observe.stop();                                                                                              // 956
        return;                                                                                                      // 957
      }                                                                                                              // 958
                                                                                                                     //
      self._userObservesForConnections[connection.id] = observe;                                                     // 960
                                                                                                                     //
      if (!foundMatchingUser) {                                                                                      // 962
        // We've set up an observe on the user associated with `newToken`,                                           // 963
        // so if the new token is removed from the database, we'll close                                             // 964
        // the connection. But the token might have already been deleted                                             // 965
        // before we set up the observe, which wouldn't have closed the                                              // 966
        // connection because the observe wasn't running yet.                                                        // 967
        connection.close();                                                                                          // 968
      }                                                                                                              // 969
    });                                                                                                              // 970
  }                                                                                                                  // 971
};                                                                                                                   // 972
                                                                                                                     //
function setupDefaultLoginHandlers(accounts) {                                                                       // 974
  accounts.registerLoginHandler("resume", function (options) {                                                       // 975
    return defaultResumeLoginHandler.call(this, accounts, options);                                                  // 976
  });                                                                                                                // 977
} // Login handler for resume tokens.                                                                                // 978
                                                                                                                     //
                                                                                                                     //
function defaultResumeLoginHandler(accounts, options) {                                                              // 981
  if (!options.resume) return undefined;                                                                             // 982
  check(options.resume, String);                                                                                     // 985
                                                                                                                     //
  var hashedToken = accounts._hashLoginToken(options.resume); // First look for just the new-style hashed login token, to avoid
  // sending the unhashed token to the database in a query if we don't                                               // 990
  // need to.                                                                                                        // 991
                                                                                                                     //
                                                                                                                     //
  var user = accounts.users.findOne({                                                                                // 992
    "services.resume.loginTokens.hashedToken": hashedToken                                                           // 993
  });                                                                                                                // 993
                                                                                                                     //
  if (!user) {                                                                                                       // 995
    // If we didn't find the hashed login token, try also looking for                                                // 996
    // the old-style unhashed token.  But we need to look for either                                                 // 997
    // the old-style token OR the new-style token, because another                                                   // 998
    // client connection logging in simultaneously might have already                                                // 999
    // converted the token.                                                                                          // 1000
    user = accounts.users.findOne({                                                                                  // 1001
      $or: [{                                                                                                        // 1002
        "services.resume.loginTokens.hashedToken": hashedToken                                                       // 1003
      }, {                                                                                                           // 1003
        "services.resume.loginTokens.token": options.resume                                                          // 1004
      }]                                                                                                             // 1004
    });                                                                                                              // 1001
  }                                                                                                                  // 1007
                                                                                                                     //
  if (!user) return {                                                                                                // 1009
    error: new Meteor.Error(403, "You've been logged out by the server. Please log in again.")                       // 1011
  }; // Find the token, which will either be an object with fields                                                   // 1010
  // {hashedToken, when} for a hashed token or {token, when} for an                                                  // 1015
  // unhashed token.                                                                                                 // 1016
                                                                                                                     //
  var oldUnhashedStyleToken;                                                                                         // 1017
                                                                                                                     //
  var token = _.find(user.services.resume.loginTokens, function (token) {                                            // 1018
    return token.hashedToken === hashedToken;                                                                        // 1019
  });                                                                                                                // 1020
                                                                                                                     //
  if (token) {                                                                                                       // 1021
    oldUnhashedStyleToken = false;                                                                                   // 1022
  } else {                                                                                                           // 1023
    token = _.find(user.services.resume.loginTokens, function (token) {                                              // 1024
      return token.token === options.resume;                                                                         // 1025
    });                                                                                                              // 1026
    oldUnhashedStyleToken = true;                                                                                    // 1027
  }                                                                                                                  // 1028
                                                                                                                     //
  var tokenExpires = accounts._tokenExpiration(token.when);                                                          // 1030
                                                                                                                     //
  if (new Date() >= tokenExpires) return {                                                                           // 1031
    userId: user._id,                                                                                                // 1033
    error: new Meteor.Error(403, "Your session has expired. Please log in again.")                                   // 1034
  }; // Update to a hashed token when an unhashed token is encountered.                                              // 1032
                                                                                                                     //
  if (oldUnhashedStyleToken) {                                                                                       // 1038
    // Only add the new hashed token if the old unhashed token still                                                 // 1039
    // exists (this avoids resurrecting the token if it was deleted                                                  // 1040
    // after we read it).  Using $addToSet avoids getting an index                                                   // 1041
    // error if another client logging in simultaneously has already                                                 // 1042
    // inserted the new hashed token.                                                                                // 1043
    accounts.users.update({                                                                                          // 1044
      _id: user._id,                                                                                                 // 1046
      "services.resume.loginTokens.token": options.resume                                                            // 1047
    }, {                                                                                                             // 1045
      $addToSet: {                                                                                                   // 1049
        "services.resume.loginTokens": {                                                                             // 1050
          "hashedToken": hashedToken,                                                                                // 1051
          "when": token.when                                                                                         // 1052
        }                                                                                                            // 1050
      }                                                                                                              // 1049
    }); // Remove the old token *after* adding the new, since otherwise                                              // 1049
    // another client trying to login between our removing the old and                                               // 1058
    // adding the new wouldn't find a token to login with.                                                           // 1059
                                                                                                                     //
    accounts.users.update(user._id, {                                                                                // 1060
      $pull: {                                                                                                       // 1061
        "services.resume.loginTokens": {                                                                             // 1062
          "token": options.resume                                                                                    // 1062
        }                                                                                                            // 1062
      }                                                                                                              // 1061
    });                                                                                                              // 1060
  }                                                                                                                  // 1065
                                                                                                                     //
  return {                                                                                                           // 1067
    userId: user._id,                                                                                                // 1068
    stampedLoginToken: {                                                                                             // 1069
      token: options.resume,                                                                                         // 1070
      when: token.when                                                                                               // 1071
    }                                                                                                                // 1069
  };                                                                                                                 // 1067
} // (Also used by Meteor Accounts server and tests).                                                                // 1074
//                                                                                                                   // 1077
                                                                                                                     //
                                                                                                                     //
Ap._generateStampedLoginToken = function () {                                                                        // 1078
  return {                                                                                                           // 1079
    token: Random.secret(),                                                                                          // 1080
    when: new Date()                                                                                                 // 1081
  };                                                                                                                 // 1079
}; ///                                                                                                               // 1083
/// TOKEN EXPIRATION                                                                                                 // 1086
///                                                                                                                  // 1087
                                                                                                                     //
                                                                                                                     //
function expirePasswordToken(accounts, oldestValidDate, tokenFilter, userId) {                                       // 1089
  var userFilter = userId ? {                                                                                        // 1090
    _id: userId                                                                                                      // 1090
  } : {};                                                                                                            // 1090
  var resetRangeOr = {                                                                                               // 1091
    $or: [{                                                                                                          // 1092
      "services.password.reset.when": {                                                                              // 1093
        $lt: oldestValidDate                                                                                         // 1093
      }                                                                                                              // 1093
    }, {                                                                                                             // 1093
      "services.password.reset.when": {                                                                              // 1094
        $lt: +oldestValidDate                                                                                        // 1094
      }                                                                                                              // 1094
    }]                                                                                                               // 1094
  };                                                                                                                 // 1091
  var expireFilter = {                                                                                               // 1097
    $and: [tokenFilter, resetRangeOr]                                                                                // 1097
  };                                                                                                                 // 1097
  accounts.users.update((0, _extends3.default)({}, userFilter, expireFilter), {                                      // 1099
    $unset: {                                                                                                        // 1100
      "services.password.reset": ""                                                                                  // 1101
    }                                                                                                                // 1100
  }, {                                                                                                               // 1099
    multi: true                                                                                                      // 1103
  });                                                                                                                // 1103
} // Deletes expired tokens from the database and closes all open connections                                        // 1104
// associated with these tokens.                                                                                     // 1107
//                                                                                                                   // 1108
// Exported for tests. Also, the arguments are only used by                                                          // 1109
// tests. oldestValidDate is simulate expiring tokens without waiting                                                // 1110
// for them to actually expire. userId is used by tests to only expire                                               // 1111
// tokens for the test user.                                                                                         // 1112
                                                                                                                     //
                                                                                                                     //
Ap._expireTokens = function (oldestValidDate, userId) {                                                              // 1113
  var tokenLifetimeMs = this._getTokenLifetimeMs(); // when calling from a test with extra arguments, you must specify both!
                                                                                                                     //
                                                                                                                     //
  if (oldestValidDate && !userId || !oldestValidDate && userId) {                                                    // 1117
    throw new Error("Bad test. Must specify both oldestValidDate and userId.");                                      // 1118
  }                                                                                                                  // 1119
                                                                                                                     //
  oldestValidDate = oldestValidDate || new Date(new Date() - tokenLifetimeMs);                                       // 1121
  var userFilter = userId ? {                                                                                        // 1123
    _id: userId                                                                                                      // 1123
  } : {}; // Backwards compatible with older versions of meteor that stored login token                              // 1123
  // timestamps as numbers.                                                                                          // 1127
                                                                                                                     //
  this.users.update(_.extend(userFilter, {                                                                           // 1128
    $or: [{                                                                                                          // 1129
      "services.resume.loginTokens.when": {                                                                          // 1130
        $lt: oldestValidDate                                                                                         // 1130
      }                                                                                                              // 1130
    }, {                                                                                                             // 1130
      "services.resume.loginTokens.when": {                                                                          // 1131
        $lt: +oldestValidDate                                                                                        // 1131
      }                                                                                                              // 1131
    }]                                                                                                               // 1131
  }), {                                                                                                              // 1128
    $pull: {                                                                                                         // 1134
      "services.resume.loginTokens": {                                                                               // 1135
        $or: [{                                                                                                      // 1136
          when: {                                                                                                    // 1137
            $lt: oldestValidDate                                                                                     // 1137
          }                                                                                                          // 1137
        }, {                                                                                                         // 1137
          when: {                                                                                                    // 1138
            $lt: +oldestValidDate                                                                                    // 1138
          }                                                                                                          // 1138
        }]                                                                                                           // 1138
      }                                                                                                              // 1135
    }                                                                                                                // 1134
  }, {                                                                                                               // 1133
    multi: true                                                                                                      // 1142
  }); // The observe on Meteor.users will take care of closing connections for                                       // 1142
  // expired tokens.                                                                                                 // 1144
}; // Deletes expired password reset tokens from the database.                                                       // 1145
//                                                                                                                   // 1148
// Exported for tests. Also, the arguments are only used by                                                          // 1149
// tests. oldestValidDate is simulate expiring tokens without waiting                                                // 1150
// for them to actually expire. userId is used by tests to only expire                                               // 1151
// tokens for the test user.                                                                                         // 1152
                                                                                                                     //
                                                                                                                     //
Ap._expirePasswordResetTokens = function (oldestValidDate, userId) {                                                 // 1153
  var tokenLifetimeMs = this._getPasswordResetTokenLifetimeMs(); // when calling from a test with extra arguments, you must specify both!
                                                                                                                     //
                                                                                                                     //
  if (oldestValidDate && !userId || !oldestValidDate && userId) {                                                    // 1157
    throw new Error("Bad test. Must specify both oldestValidDate and userId.");                                      // 1158
  }                                                                                                                  // 1159
                                                                                                                     //
  oldestValidDate = oldestValidDate || new Date(new Date() - tokenLifetimeMs);                                       // 1161
  var tokenFilter = {                                                                                                // 1164
    $or: [{                                                                                                          // 1165
      "services.password.reset.reason": "reset"                                                                      // 1166
    }, {                                                                                                             // 1166
      "services.password.reset.reason": {                                                                            // 1167
        $exists: false                                                                                               // 1167
      }                                                                                                              // 1167
    }]                                                                                                               // 1167
  };                                                                                                                 // 1164
  expirePasswordToken(this, oldestValidDate, tokenFilter, userId);                                                   // 1171
}; // Deletes expired password enroll tokens from the database.                                                      // 1172
//                                                                                                                   // 1175
// Exported for tests. Also, the arguments are only used by                                                          // 1176
// tests. oldestValidDate is simulate expiring tokens without waiting                                                // 1177
// for them to actually expire. userId is used by tests to only expire                                               // 1178
// tokens for the test user.                                                                                         // 1179
                                                                                                                     //
                                                                                                                     //
Ap._expirePasswordEnrollTokens = function (oldestValidDate, userId) {                                                // 1180
  var tokenLifetimeMs = this._getPasswordEnrollTokenLifetimeMs(); // when calling from a test with extra arguments, you must specify both!
                                                                                                                     //
                                                                                                                     //
  if (oldestValidDate && !userId || !oldestValidDate && userId) {                                                    // 1184
    throw new Error("Bad test. Must specify both oldestValidDate and userId.");                                      // 1185
  }                                                                                                                  // 1186
                                                                                                                     //
  oldestValidDate = oldestValidDate || new Date(new Date() - tokenLifetimeMs);                                       // 1188
  var tokenFilter = {                                                                                                // 1191
    "services.password.reset.reason": "enroll"                                                                       // 1192
  };                                                                                                                 // 1191
  expirePasswordToken(this, oldestValidDate, tokenFilter, userId);                                                   // 1195
}; // @override from accounts_common.js                                                                              // 1196
                                                                                                                     //
                                                                                                                     //
Ap.config = function (options) {                                                                                     // 1199
  // Call the overridden implementation of the method.                                                               // 1200
  var superResult = AccountsCommon.prototype.config.apply(this, arguments); // If the user set loginExpirationInDays to null, then we need to clear the
  // timer that periodically expires tokens.                                                                         // 1204
                                                                                                                     //
  if (_.has(this._options, "loginExpirationInDays") && this._options.loginExpirationInDays === null && this.expireTokenInterval) {
    Meteor.clearInterval(this.expireTokenInterval);                                                                  // 1208
    this.expireTokenInterval = null;                                                                                 // 1209
  }                                                                                                                  // 1210
                                                                                                                     //
  return superResult;                                                                                                // 1212
};                                                                                                                   // 1213
                                                                                                                     //
function setExpireTokensInterval(accounts) {                                                                         // 1215
  accounts.expireTokenInterval = Meteor.setInterval(function () {                                                    // 1216
    accounts._expireTokens();                                                                                        // 1217
                                                                                                                     //
    accounts._expirePasswordResetTokens();                                                                           // 1218
                                                                                                                     //
    accounts._expirePasswordEnrollTokens();                                                                          // 1219
  }, EXPIRE_TOKENS_INTERVAL_MS);                                                                                     // 1220
} ///                                                                                                                // 1221
/// OAuth Encryption Support                                                                                         // 1225
///                                                                                                                  // 1226
                                                                                                                     //
                                                                                                                     //
var OAuthEncryption = Package["oauth-encryption"] && Package["oauth-encryption"].OAuthEncryption;                    // 1228
                                                                                                                     //
function usingOAuthEncryption() {                                                                                    // 1232
  return OAuthEncryption && OAuthEncryption.keyIsLoaded();                                                           // 1233
} // OAuth service data is temporarily stored in the pending credentials                                             // 1234
// collection during the oauth authentication process.  Sensitive data                                               // 1238
// such as access tokens are encrypted without the user id because                                                   // 1239
// we don't know the user id yet.  We re-encrypt these fields with the                                               // 1240
// user id included when storing the service data permanently in                                                     // 1241
// the users collection.                                                                                             // 1242
//                                                                                                                   // 1243
                                                                                                                     //
                                                                                                                     //
function pinEncryptedFieldsToUser(serviceData, userId) {                                                             // 1244
  _.each(_.keys(serviceData), function (key) {                                                                       // 1245
    var value = serviceData[key];                                                                                    // 1246
    if (OAuthEncryption && OAuthEncryption.isSealed(value)) value = OAuthEncryption.seal(OAuthEncryption.open(value), userId);
    serviceData[key] = value;                                                                                        // 1249
  });                                                                                                                // 1250
} // Encrypt unencrypted login service secrets when oauth-encryption is                                              // 1251
// added.                                                                                                            // 1255
//                                                                                                                   // 1256
// XXX For the oauthSecretKey to be available here at startup, the                                                   // 1257
// developer must call Accounts.config({oauthSecretKey: ...}) at load                                                // 1258
// time, instead of in a Meteor.startup block, because the startup                                                   // 1259
// block in the app code will run after this accounts-base startup                                                   // 1260
// block.  Perhaps we need a post-startup callback?                                                                  // 1261
                                                                                                                     //
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 1263
  if (!usingOAuthEncryption()) {                                                                                     // 1264
    return;                                                                                                          // 1265
  }                                                                                                                  // 1266
                                                                                                                     //
  var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;                                  // 1268
  ServiceConfiguration.configurations.find({                                                                         // 1271
    $and: [{                                                                                                         // 1272
      secret: {                                                                                                      // 1273
        $exists: true                                                                                                // 1273
      }                                                                                                              // 1273
    }, {                                                                                                             // 1272
      "secret.algorithm": {                                                                                          // 1275
        $exists: false                                                                                               // 1275
      }                                                                                                              // 1275
    }]                                                                                                               // 1274
  }).forEach(function (config) {                                                                                     // 1271
    ServiceConfiguration.configurations.update(config._id, {                                                         // 1278
      $set: {                                                                                                        // 1279
        secret: OAuthEncryption.seal(config.secret)                                                                  // 1280
      }                                                                                                              // 1279
    });                                                                                                              // 1278
  });                                                                                                                // 1283
}); // XXX see comment on Accounts.createUser in passwords_server about adding a                                     // 1284
// second "server options" argument.                                                                                 // 1287
                                                                                                                     //
function defaultCreateUserHook(options, user) {                                                                      // 1288
  if (options.profile) user.profile = options.profile;                                                               // 1289
  return user;                                                                                                       // 1291
} // Called by accounts-password                                                                                     // 1292
                                                                                                                     //
                                                                                                                     //
Ap.insertUserDoc = function (options, user) {                                                                        // 1295
  // - clone user document, to protect from modification                                                             // 1296
  // - add createdAt timestamp                                                                                       // 1297
  // - prepare an _id, so that you can modify other collections (eg                                                  // 1298
  // create a first task for every new user)                                                                         // 1299
  //                                                                                                                 // 1300
  // XXX If the onCreateUser or validateNewUser hooks fail, we might                                                 // 1301
  // end up having modified some other collection                                                                    // 1302
  // inappropriately. The solution is probably to have onCreateUser                                                  // 1303
  // accept two callbacks - one that gets called before inserting                                                    // 1304
  // the user document (in which you can modify its contents), and                                                   // 1305
  // one that gets called after (in which you should change other                                                    // 1306
  // collections)                                                                                                    // 1307
  user = _.extend({                                                                                                  // 1308
    createdAt: new Date(),                                                                                           // 1309
    _id: Random.id()                                                                                                 // 1310
  }, user);                                                                                                          // 1308
                                                                                                                     //
  if (user.services) {                                                                                               // 1313
    _.each(user.services, function (serviceData) {                                                                   // 1314
      pinEncryptedFieldsToUser(serviceData, user._id);                                                               // 1315
    });                                                                                                              // 1316
  }                                                                                                                  // 1317
                                                                                                                     //
  var fullUser;                                                                                                      // 1319
                                                                                                                     //
  if (this._onCreateUserHook) {                                                                                      // 1320
    fullUser = this._onCreateUserHook(options, user); // This is *not* part of the API. We need this because we can't isolate
    // the global server environment between tests, meaning we can't test                                            // 1324
    // both having a create user hook set and not having one set.                                                    // 1325
                                                                                                                     //
    if (fullUser === 'TEST DEFAULT HOOK') fullUser = defaultCreateUserHook(options, user);                           // 1326
  } else {                                                                                                           // 1328
    fullUser = defaultCreateUserHook(options, user);                                                                 // 1329
  }                                                                                                                  // 1330
                                                                                                                     //
  _.each(this._validateNewUserHooks, function (hook) {                                                               // 1332
    if (!hook(fullUser)) throw new Meteor.Error(403, "User validation failed");                                      // 1333
  });                                                                                                                // 1335
                                                                                                                     //
  var userId;                                                                                                        // 1337
                                                                                                                     //
  try {                                                                                                              // 1338
    userId = this.users.insert(fullUser);                                                                            // 1339
  } catch (e) {                                                                                                      // 1340
    // XXX string parsing sucks, maybe                                                                               // 1341
    // https://jira.mongodb.org/browse/SERVER-3069 will get fixed one day                                            // 1342
    if (e.name !== 'MongoError') throw e;                                                                            // 1343
    if (e.code !== 11000) throw e;                                                                                   // 1344
    if (e.errmsg.indexOf('emails.address') !== -1) throw new Meteor.Error(403, "Email already exists.");             // 1345
    if (e.errmsg.indexOf('username') !== -1) throw new Meteor.Error(403, "Username already exists."); // XXX better error reporting for services.facebook.id duplicate, etc
                                                                                                                     //
    throw e;                                                                                                         // 1350
  }                                                                                                                  // 1351
                                                                                                                     //
  return userId;                                                                                                     // 1352
}; // Helper function: returns false if email does not match company domain from                                     // 1353
// the configuration.                                                                                                // 1356
                                                                                                                     //
                                                                                                                     //
Ap._testEmailDomain = function (email) {                                                                             // 1357
  var domain = this._options.restrictCreationByEmailDomain;                                                          // 1358
  return !domain || _.isFunction(domain) && domain(email) || _.isString(domain) && new RegExp('@' + Meteor._escapeRegExp(domain) + '$', 'i').test(email);
}; // Validate new user's email or Google/Facebook/GitHub account's email                                            // 1363
                                                                                                                     //
                                                                                                                     //
function defaultValidateNewUserHook(user) {                                                                          // 1366
  var self = this;                                                                                                   // 1367
  var domain = self._options.restrictCreationByEmailDomain;                                                          // 1368
  if (!domain) return true;                                                                                          // 1369
  var emailIsGood = false;                                                                                           // 1372
                                                                                                                     //
  if (!_.isEmpty(user.emails)) {                                                                                     // 1373
    emailIsGood = _.any(user.emails, function (email) {                                                              // 1374
      return self._testEmailDomain(email.address);                                                                   // 1375
    });                                                                                                              // 1376
  } else if (!_.isEmpty(user.services)) {                                                                            // 1377
    // Find any email of any service and check it                                                                    // 1378
    emailIsGood = _.any(user.services, function (service) {                                                          // 1379
      return service.email && self._testEmailDomain(service.email);                                                  // 1380
    });                                                                                                              // 1381
  }                                                                                                                  // 1382
                                                                                                                     //
  if (emailIsGood) return true;                                                                                      // 1384
  if (_.isString(domain)) throw new Meteor.Error(403, "@" + domain + " email required");else throw new Meteor.Error(403, "Email doesn't match the criteria.");
} ///                                                                                                                // 1391
/// MANAGING USER OBJECTS                                                                                            // 1394
///                                                                                                                  // 1395
// Updates or creates a user after we authenticate with a 3rd party.                                                 // 1397
//                                                                                                                   // 1398
// @param serviceName {String} Service name (eg, twitter).                                                           // 1399
// @param serviceData {Object} Data to store in the user's record                                                    // 1400
//        under services[serviceName]. Must include an "id" field                                                    // 1401
//        which is a unique identifier for the user in the service.                                                  // 1402
// @param options {Object, optional} Other options to pass to insertUserDoc                                          // 1403
//        (eg, profile)                                                                                              // 1404
// @returns {Object} Object with token and id keys, like the result                                                  // 1405
//        of the "login" method.                                                                                     // 1406
//                                                                                                                   // 1407
                                                                                                                     //
                                                                                                                     //
Ap.updateOrCreateUserFromExternalService = function (serviceName, serviceData, options) {                            // 1408
  options = _.clone(options || {});                                                                                  // 1413
  if (serviceName === "password" || serviceName === "resume") throw new Error("Can't use updateOrCreateUserFromExternalService with internal service " + serviceName);
  if (!_.has(serviceData, 'id')) throw new Error("Service data for service " + serviceName + " must include id"); // Look for a user with the appropriate service user id.
                                                                                                                     //
  var selector = {};                                                                                                 // 1424
  var serviceIdKey = "services." + serviceName + ".id"; // XXX Temporary special case for Twitter. (Issue #629)      // 1425
  //   The serviceData.id will be a string representation of an integer.                                             // 1428
  //   We want it to match either a stored string or int representation.                                             // 1429
  //   This is to cater to earlier versions of Meteor storing twitter                                                // 1430
  //   user IDs in number form, and recent versions storing them as strings.                                         // 1431
  //   This can be removed once migration technology is in place, and twitter                                        // 1432
  //   users stored with integer IDs have been migrated to string IDs.                                               // 1433
                                                                                                                     //
  if (serviceName === "twitter" && !isNaN(serviceData.id)) {                                                         // 1434
    selector["$or"] = [{}, {}];                                                                                      // 1435
    selector["$or"][0][serviceIdKey] = serviceData.id;                                                               // 1436
    selector["$or"][1][serviceIdKey] = parseInt(serviceData.id, 10);                                                 // 1437
  } else {                                                                                                           // 1438
    selector[serviceIdKey] = serviceData.id;                                                                         // 1439
  }                                                                                                                  // 1440
                                                                                                                     //
  var user = this.users.findOne(selector); // When creating a new user we pass through all options. When updating an
  // existing user, by default we only process/pass through the serviceData                                          // 1445
  // (eg, so that we keep an unexpired access token and don't cache old email                                        // 1446
  // addresses in serviceData.email). The onExternalLogin hook can be used when                                      // 1447
  // creating or updating a user, to modify or pass through more options as                                          // 1448
  // needed.                                                                                                         // 1449
                                                                                                                     //
  var opts = user ? {} : options;                                                                                    // 1450
                                                                                                                     //
  if (this._onExternalLoginHook) {                                                                                   // 1451
    opts = this._onExternalLoginHook(options, user);                                                                 // 1452
  }                                                                                                                  // 1453
                                                                                                                     //
  if (user) {                                                                                                        // 1455
    pinEncryptedFieldsToUser(serviceData, user._id);                                                                 // 1456
    var setAttrs = {};                                                                                               // 1458
                                                                                                                     //
    _.each(serviceData, function (value, key) {                                                                      // 1459
      setAttrs["services." + serviceName + "." + key] = value;                                                       // 1460
    }); // XXX Maybe we should re-use the selector above and notice if the update                                    // 1461
    //     touches nothing?                                                                                          // 1464
                                                                                                                     //
                                                                                                                     //
    setAttrs = _.extend({}, setAttrs, opts);                                                                         // 1465
    this.users.update(user._id, {                                                                                    // 1466
      $set: setAttrs                                                                                                 // 1467
    });                                                                                                              // 1466
    return {                                                                                                         // 1470
      type: serviceName,                                                                                             // 1471
      userId: user._id                                                                                               // 1472
    };                                                                                                               // 1470
  } else {                                                                                                           // 1474
    // Create a new user with the service data.                                                                      // 1475
    user = {                                                                                                         // 1476
      services: {}                                                                                                   // 1476
    };                                                                                                               // 1476
    user.services[serviceName] = serviceData;                                                                        // 1477
    return {                                                                                                         // 1478
      type: serviceName,                                                                                             // 1479
      userId: this.insertUserDoc(opts, user)                                                                         // 1480
    };                                                                                                               // 1478
  }                                                                                                                  // 1482
};                                                                                                                   // 1483
                                                                                                                     //
function setupUsersCollection(users) {                                                                               // 1485
  ///                                                                                                                // 1486
  /// RESTRICTING WRITES TO USER OBJECTS                                                                             // 1487
  ///                                                                                                                // 1488
  users.allow({                                                                                                      // 1489
    // clients can modify the profile field of their own document, and                                               // 1490
    // nothing else.                                                                                                 // 1491
    update: function (userId, user, fields, modifier) {                                                              // 1492
      // make sure it is our record                                                                                  // 1493
      if (user._id !== userId) return false; // user can only modify the 'profile' field. sets to multiple           // 1494
      // sub-keys (eg profile.foo and profile.bar) are merged into entry                                             // 1498
      // in the fields list.                                                                                         // 1499
                                                                                                                     //
      if (fields.length !== 1 || fields[0] !== 'profile') return false;                                              // 1500
      return true;                                                                                                   // 1503
    },                                                                                                               // 1504
    fetch: ['_id'] // we only look at _id.                                                                           // 1505
                                                                                                                     //
  }); /// DEFAULT INDEXES ON USERS                                                                                   // 1489
                                                                                                                     //
  users._ensureIndex('username', {                                                                                   // 1509
    unique: 1,                                                                                                       // 1509
    sparse: 1                                                                                                        // 1509
  });                                                                                                                // 1509
                                                                                                                     //
  users._ensureIndex('emails.address', {                                                                             // 1510
    unique: 1,                                                                                                       // 1510
    sparse: 1                                                                                                        // 1510
  });                                                                                                                // 1510
                                                                                                                     //
  users._ensureIndex('services.resume.loginTokens.hashedToken', {                                                    // 1511
    unique: 1,                                                                                                       // 1512
    sparse: 1                                                                                                        // 1512
  });                                                                                                                // 1512
                                                                                                                     //
  users._ensureIndex('services.resume.loginTokens.token', {                                                          // 1513
    unique: 1,                                                                                                       // 1514
    sparse: 1                                                                                                        // 1514
  }); // For taking care of logoutOtherClients calls that crashed before the                                         // 1514
  // tokens were deleted.                                                                                            // 1516
                                                                                                                     //
                                                                                                                     //
  users._ensureIndex('services.resume.haveLoginTokensToDelete', {                                                    // 1517
    sparse: 1                                                                                                        // 1518
  }); // For expiring login tokens                                                                                   // 1518
                                                                                                                     //
                                                                                                                     //
  users._ensureIndex("services.resume.loginTokens.when", {                                                           // 1520
    sparse: 1                                                                                                        // 1520
  }); // For expiring password tokens                                                                                // 1520
                                                                                                                     //
                                                                                                                     //
  users._ensureIndex('services.password.reset.when', {                                                               // 1522
    sparse: 1                                                                                                        // 1522
  });                                                                                                                // 1522
} ///                                                                                                                // 1523
/// CLEAN UP FOR `logoutOtherClients`                                                                                // 1526
///                                                                                                                  // 1527
                                                                                                                     //
                                                                                                                     //
Ap._deleteSavedTokensForUser = function (userId, tokensToDelete) {                                                   // 1529
  if (tokensToDelete) {                                                                                              // 1530
    this.users.update(userId, {                                                                                      // 1531
      $unset: {                                                                                                      // 1532
        "services.resume.haveLoginTokensToDelete": 1,                                                                // 1533
        "services.resume.loginTokensToDelete": 1                                                                     // 1534
      },                                                                                                             // 1532
      $pullAll: {                                                                                                    // 1536
        "services.resume.loginTokens": tokensToDelete                                                                // 1537
      }                                                                                                              // 1536
    });                                                                                                              // 1531
  }                                                                                                                  // 1540
};                                                                                                                   // 1541
                                                                                                                     //
Ap._deleteSavedTokensForAllUsersOnStartup = function () {                                                            // 1543
  var self = this; // If we find users who have saved tokens to delete on startup, delete                            // 1544
  // them now. It's possible that the server could have crashed and come                                             // 1547
  // back up before new tokens are found in localStorage, but this                                                   // 1548
  // shouldn't happen very often. We shouldn't put a delay here because                                              // 1549
  // that would give a lot of power to an attacker with a stolen login                                               // 1550
  // token and the ability to crash the server.                                                                      // 1551
                                                                                                                     //
  Meteor.startup(function () {                                                                                       // 1552
    self.users.find({                                                                                                // 1553
      "services.resume.haveLoginTokensToDelete": true                                                                // 1554
    }, {                                                                                                             // 1553
      "services.resume.loginTokensToDelete": 1                                                                       // 1556
    }).forEach(function (user) {                                                                                     // 1555
      self._deleteSavedTokensForUser(user._id, user.services.resume.loginTokensToDelete);                            // 1558
    });                                                                                                              // 1562
  });                                                                                                                // 1563
};                                                                                                                   // 1564
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"url_server.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/url_server.js                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var AccountsServer = void 0;                                                                                         // 1
module.watch(require("./accounts_server.js"), {                                                                      // 1
  AccountsServer: function (v) {                                                                                     // 1
    AccountsServer = v;                                                                                              // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
// XXX These should probably not actually be public?                                                                 // 3
AccountsServer.prototype.urls = {                                                                                    // 5
  resetPassword: function (token) {                                                                                  // 6
    return Meteor.absoluteUrl('#/reset-password/' + token);                                                          // 7
  },                                                                                                                 // 8
  verifyEmail: function (token) {                                                                                    // 10
    return Meteor.absoluteUrl('#/verify-email/' + token);                                                            // 11
  },                                                                                                                 // 12
  enrollAccount: function (token) {                                                                                  // 14
    return Meteor.absoluteUrl('#/enroll-account/' + token);                                                          // 15
  }                                                                                                                  // 16
};                                                                                                                   // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("./node_modules/meteor/accounts-base/server_main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['accounts-base'] = exports, {
  Accounts: Accounts
});

})();

//# sourceMappingURL=accounts-base.js.map
