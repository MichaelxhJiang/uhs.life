(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;

/* Package-scope variables */
var __coffeescriptShare, FlowRouterHelpers;

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/arillo_flow-router-helpers/client/helpers.coffee.js                      //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var currentRouteName, currentRouteOption, func, helpers, isSubReady, name, param, pathFor, queryParam, subsReady, urlFor,                   
  slice = [].slice,                                                                  //
  hasProp = {}.hasOwnProperty;                                                       //
                                                                                     //
subsReady = function() {                                                             // 2
  var subs;                                                                          // 3
  subs = 1 <= arguments.length ? slice.call(arguments, 0) : [];                      // 3
  if (subs.length === 1) {                                                           // 3
    return FlowRouter.subsReady();                                                   // 3
  }                                                                                  //
  subs = subs.slice(0, subs.length - 1);                                             // 3
  return _.reduce(subs, function(memo, sub) {                                        //
    return memo && FlowRouter.subsReady(sub);                                        //
  }, true);                                                                          //
};                                                                                   // 2
                                                                                     //
pathFor = function(path, view) {                                                     // 2
  var hashBang, query, ref;                                                          // 11
  if (view == null) {                                                                //
    view = {                                                                         //
      hash: {}                                                                       // 10
    };                                                                               //
  }                                                                                  //
  if (!path) {                                                                       // 11
    throw new Error('no path defined');                                              // 11
  }                                                                                  //
  if (!view.hash) {                                                                  // 13
    view = {                                                                         // 13
      hash: view                                                                     // 13
    };                                                                               //
  }                                                                                  //
  if (((ref = path.hash) != null ? ref.route : void 0) != null) {                    // 14
    view = path;                                                                     // 15
    path = view.hash.route;                                                          // 15
    delete view.hash.route;                                                          // 15
  }                                                                                  //
  query = view.hash.query ? FlowRouter._qs.parse(view.hash.query) : {};              // 11
  hashBang = view.hash.hash ? view.hash.hash : '';                                   // 11
  return FlowRouter.path(path, view.hash, query) + (hashBang ? "#" + hashBang : '');
};                                                                                   // 10
                                                                                     //
urlFor = function(path, view) {                                                      // 2
  var relativePath;                                                                  // 24
  relativePath = pathFor(path, view);                                                // 24
  return Meteor.absoluteUrl(relativePath.substr(1));                                 //
};                                                                                   // 23
                                                                                     //
param = function(name) {                                                             // 2
  return FlowRouter.getParam(name);                                                  //
};                                                                                   // 28
                                                                                     //
queryParam = function(key) {                                                         // 2
  return FlowRouter.getQueryParam(key);                                              //
};                                                                                   // 32
                                                                                     //
currentRouteName = function() {                                                      // 2
  return FlowRouter.getRouteName();                                                  //
};                                                                                   // 36
                                                                                     //
currentRouteOption = function(optionName) {                                          // 2
  return FlowRouter.current().route.options[optionName];                             //
};                                                                                   // 40
                                                                                     //
isSubReady = function(sub) {                                                         // 2
  if (sub) {                                                                         // 45
    return FlowRouter.subsReady(sub);                                                // 45
  }                                                                                  //
  return FlowRouter.subsReady();                                                     // 46
};                                                                                   // 44
                                                                                     //
helpers = {                                                                          // 2
  subsReady: subsReady,                                                              // 49
  pathFor: pathFor,                                                                  // 49
  urlFor: urlFor,                                                                    // 49
  param: param,                                                                      // 49
  queryParam: queryParam,                                                            // 49
  currentRouteName: currentRouteName,                                                // 49
  isSubReady: isSubReady,                                                            // 49
  currentRouteOption: currentRouteOption                                             // 49
};                                                                                   //
                                                                                     //
if (Meteor.isClient) {                                                               // 58
  for (name in helpers) {                                                            // 59
    if (!hasProp.call(helpers, name)) continue;                                      //
    func = helpers[name];                                                            //
    Template.registerHelper(name, func);                                             // 59
  }                                                                                  // 59
}                                                                                    //
                                                                                     //
if (Meteor.isServer) {                                                               // 61
  FlowRouterHelpers = {                                                              // 62
    pathFor: pathFor,                                                                // 63
    urlFor: urlFor                                                                   // 63
  };                                                                                 //
}                                                                                    //
                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['arillo:flow-router-helpers'] = {}, {
  FlowRouterHelpers: FlowRouterHelpers
});

})();

//# sourceMappingURL=arillo_flow-router-helpers.js.map
