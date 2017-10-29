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
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var _ = Package.underscore._;

/* Package-scope variables */
var __coffeescriptShare, ActiveRoute;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/zimme_active-route/packages/zimme_active-route.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/zimme:active-route/lib/activeroute.coffee.js                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var checkArgument, checkRouterPackages, errorMessages, fr, ir, test;                                                  // 10
                                                                                                                      // 11
fr = ir = null;                                                                                                       // 12
                                                                                                                      // 13
checkArgument = function(arg) {                                                                                       // 14
  var error;                                                                                                          // 15
  try {                                                                                                               // 16
    return check(arg, Match.OneOf(RegExp, String));                                                                   // 17
  } catch (_error) {                                                                                                  // 18
    error = _error;                                                                                                   // 19
    throw new Error(errorMessages.invalidArgument);                                                                   // 20
  }                                                                                                                   // 21
};                                                                                                                    // 22
                                                                                                                      // 23
checkRouterPackages = function() {                                                                                    // 24
  var _ref;                                                                                                           // 25
  fr = (_ref = Package['kadira:flow-router']) != null ? _ref : Package['meteorhacks:flow-router'];                    // 26
  ir = Package['iron:router'];                                                                                        // 27
  if (!(ir || fr)) {                                                                                                  // 28
    throw new Error(errorMessages.noSupportedRouter);                                                                 // 29
  }                                                                                                                   // 30
};                                                                                                                    // 31
                                                                                                                      // 32
errorMessages = {                                                                                                     // 33
  noSupportedRouter: 'No supported router installed. Please install ' + 'iron:router or meteorhacks:flow-router.',    // 34
  invalidArgument: 'Invalid argument, must be String or RegExp.'                                                      // 35
};                                                                                                                    // 36
                                                                                                                      // 37
share.config = new ReactiveDict('activeRouteConfig');                                                                 // 38
                                                                                                                      // 39
share.config.setDefault({                                                                                             // 40
  activeClass: 'active',                                                                                              // 41
  caseSensitive: true,                                                                                                // 42
  disabledClass: 'disabled'                                                                                           // 43
});                                                                                                                   // 44
                                                                                                                      // 45
test = function(value, pattern) {                                                                                     // 46
  var result;                                                                                                         // 47
  if (!value) {                                                                                                       // 48
    return false;                                                                                                     // 49
  }                                                                                                                   // 50
  if (Match.test(pattern, RegExp)) {                                                                                  // 51
    result = value.search(pattern);                                                                                   // 52
    result = result > -1;                                                                                             // 53
  } else if (Match.test(pattern, String)) {                                                                           // 54
    if (share.config.equals('caseSensitive', false)) {                                                                // 55
      value = value.toLowerCase();                                                                                    // 56
      pattern = pattern.toLowerCase();                                                                                // 57
    }                                                                                                                 // 58
    result = value === pattern;                                                                                       // 59
  }                                                                                                                   // 60
  return result != null ? result : result = false;                                                                    // 61
};                                                                                                                    // 62
                                                                                                                      // 63
ActiveRoute = {                                                                                                       // 64
  config: function() {                                                                                                // 65
    return this.configure.apply(this, arguments);                                                                     // 66
  },                                                                                                                  // 67
  configure: function(options) {                                                                                      // 68
    if (Meteor.isServer) {                                                                                            // 69
      return;                                                                                                         // 70
    }                                                                                                                 // 71
    share.config.set(options);                                                                                        // 72
  },                                                                                                                  // 73
  name: function(routeName) {                                                                                         // 74
    var currentRouteName, _ref, _ref1;                                                                                // 75
    checkRouterPackages();                                                                                            // 76
    if (Meteor.isServer) {                                                                                            // 77
      return;                                                                                                         // 78
    }                                                                                                                 // 79
    checkArgument(routeName);                                                                                         // 80
    if (ir) {                                                                                                         // 81
      currentRouteName = (_ref = ir.Router.current()) != null ? (_ref1 = _ref.route) != null ? typeof _ref1.getName === "function" ? _ref1.getName() : void 0 : void 0 : void 0;
    }                                                                                                                 // 83
    if (fr) {                                                                                                         // 84
      if (currentRouteName == null) {                                                                                 // 85
        currentRouteName = fr.FlowRouter.getRouteName();                                                              // 86
      }                                                                                                               // 87
    }                                                                                                                 // 88
    return test(currentRouteName, routeName);                                                                         // 89
  },                                                                                                                  // 90
  path: function(path) {                                                                                              // 91
    var controller, currentPath;                                                                                      // 92
    checkRouterPackages();                                                                                            // 93
    if (Meteor.isServer) {                                                                                            // 94
      return;                                                                                                         // 95
    }                                                                                                                 // 96
    checkArgument(path);                                                                                              // 97
    if (ir) {                                                                                                         // 98
      controller = ir.Router.current();                                                                               // 99
      if (controller != null ? controller.route : void 0) {                                                           // 100
        currentPath = controller != null ? controller.location.get().path : void 0;                                   // 101
      }                                                                                                               // 102
    }                                                                                                                 // 103
    if (fr) {                                                                                                         // 104
      fr.FlowRouter.watchPathChange();                                                                                // 105
      if (currentPath == null) {                                                                                      // 106
        currentPath = fr.FlowRouter.current().path;                                                                   // 107
      }                                                                                                               // 108
    }                                                                                                                 // 109
    return test(currentPath, path);                                                                                   // 110
  }                                                                                                                   // 111
};                                                                                                                    // 112
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 114
}).call(this);                                                                                                        // 115
                                                                                                                      // 116
                                                                                                                      // 117
                                                                                                                      // 118
                                                                                                                      // 119
                                                                                                                      // 120
                                                                                                                      // 121
(function () {                                                                                                        // 122
                                                                                                                      // 123
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/zimme:active-route/client/helpers.coffee.js                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Template, func, helpers, isActive, name,                                                                          // 131
  __hasProp = {}.hasOwnProperty;                                                                                      // 132
                                                                                                                      // 133
if (!Package.templating) {                                                                                            // 134
  return;                                                                                                             // 135
}                                                                                                                     // 136
                                                                                                                      // 137
Template = Package.templating.Template;                                                                               // 138
                                                                                                                      // 139
isActive = function(type, inverse) {                                                                                  // 140
  var helperName;                                                                                                     // 141
  if (inverse == null) {                                                                                              // 142
    inverse = false;                                                                                                  // 143
  }                                                                                                                   // 144
  helperName = 'is';                                                                                                  // 145
  if (inverse) {                                                                                                      // 146
    helperName += 'Not';                                                                                              // 147
  }                                                                                                                   // 148
  helperName += "Active" + type;                                                                                      // 149
  return function(options, attributes) {                                                                              // 150
    var className, isPath, name, path, pattern, regex, result, t, _ref;                                               // 151
    if (options == null) {                                                                                            // 152
      options = {};                                                                                                   // 153
    }                                                                                                                 // 154
    if (attributes == null) {                                                                                         // 155
      attributes = {};                                                                                                // 156
    }                                                                                                                 // 157
    if (Match.test(options, Spacebars.kw)) {                                                                          // 158
      options = options.hash;                                                                                         // 159
    }                                                                                                                 // 160
    if (Match.test(attributes, Spacebars.kw)) {                                                                       // 161
      attributes = attributes.hash;                                                                                   // 162
    }                                                                                                                 // 163
    if (Match.test(options, String)) {                                                                                // 164
      if (share.config.equals('regex', true)) {                                                                       // 165
        options = {                                                                                                   // 166
          regex: options                                                                                              // 167
        };                                                                                                            // 168
      } else if (type === 'Path') {                                                                                   // 169
        options = {                                                                                                   // 170
          path: options                                                                                               // 171
        };                                                                                                            // 172
      } else {                                                                                                        // 173
        options = {                                                                                                   // 174
          name: options                                                                                               // 175
        };                                                                                                            // 176
      }                                                                                                               // 177
    }                                                                                                                 // 178
    options = _.defaults(attributes, options);                                                                        // 179
    pattern = Match.ObjectIncluding({                                                                                 // 180
      "class": Match.Optional(String),                                                                                // 181
      className: Match.Optional(String),                                                                              // 182
      regex: Match.Optional(Match.OneOf(RegExp, String)),                                                             // 183
      name: Match.Optional(String),                                                                                   // 184
      path: Match.Optional(String)                                                                                    // 185
    });                                                                                                               // 186
    check(options, pattern);                                                                                          // 187
    regex = options.regex, name = options.name, path = options.path;                                                  // 188
    className = (_ref = options["class"]) != null ? _ref : options.className;                                         // 189
    if (type === 'Path') {                                                                                            // 190
      name = null;                                                                                                    // 191
    } else {                                                                                                          // 192
      path = null;                                                                                                    // 193
    }                                                                                                                 // 194
    if (!(regex || name || path)) {                                                                                   // 195
      t = type === 'Route' ? 'name' : type;                                                                           // 196
      t = t.toLowerCase();                                                                                            // 197
      console.error(("Invalid argument, " + helperName + " takes \"" + t + "\", ") + ("" + t + "=\"" + t + "\" or regex=\"regex\""));
      return false;                                                                                                   // 199
    }                                                                                                                 // 200
    if (Match.test(regex, String)) {                                                                                  // 201
      if (share.config.equals('caseSensitive', false)) {                                                              // 202
        regex = new RegExp(regex, 'i');                                                                               // 203
      } else {                                                                                                        // 204
        regex = new RegExp(regex);                                                                                    // 205
      }                                                                                                               // 206
    }                                                                                                                 // 207
    if (regex == null) {                                                                                              // 208
      regex = name || path;                                                                                           // 209
    }                                                                                                                 // 210
    if (inverse) {                                                                                                    // 211
      if (className == null) {                                                                                        // 212
        className = share.config.get('disabledClass');                                                                // 213
      }                                                                                                               // 214
    } else {                                                                                                          // 215
      if (className == null) {                                                                                        // 216
        className = share.config.get('activeClass');                                                                  // 217
      }                                                                                                               // 218
    }                                                                                                                 // 219
    if (type === 'Path') {                                                                                            // 220
      isPath = true;                                                                                                  // 221
    }                                                                                                                 // 222
    if (isPath) {                                                                                                     // 223
      result = ActiveRoute.path(regex);                                                                               // 224
    } else {                                                                                                          // 225
      result = ActiveRoute.name(regex);                                                                               // 226
    }                                                                                                                 // 227
    if (inverse) {                                                                                                    // 228
      result = !result;                                                                                               // 229
    }                                                                                                                 // 230
    if (result) {                                                                                                     // 231
      return className;                                                                                               // 232
    } else {                                                                                                          // 233
      return false;                                                                                                   // 234
    }                                                                                                                 // 235
  };                                                                                                                  // 236
};                                                                                                                    // 237
                                                                                                                      // 238
helpers = {                                                                                                           // 239
  isActiveRoute: isActive('Route'),                                                                                   // 240
  isActivePath: isActive('Path'),                                                                                     // 241
  isNotActiveRoute: isActive('Route', true),                                                                          // 242
  isNotActivePath: isActive('Path', true)                                                                             // 243
};                                                                                                                    // 244
                                                                                                                      // 245
for (name in helpers) {                                                                                               // 246
  if (!__hasProp.call(helpers, name)) continue;                                                                       // 247
  func = helpers[name];                                                                                               // 248
  Template.registerHelper(name, func);                                                                                // 249
}                                                                                                                     // 250
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 252
}).call(this);                                                                                                        // 253
                                                                                                                      // 254
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['zimme:active-route'] = {}, {
  ActiveRoute: ActiveRoute
});

})();
