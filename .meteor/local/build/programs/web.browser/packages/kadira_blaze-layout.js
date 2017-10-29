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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Template = Package['templating-runtime'].Template;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var HTML = Package.htmljs.HTML;
var Spacebars = Package.spacebars.Spacebars;

/* Package-scope variables */
var BlazeLayout;

(function(){

////////////////////////////////////////////////////////////////////////////////////
//                                                                                //
// packages/kadira_blaze-layout/lib/client/namespace.js                           //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////
                                                                                  //
BlazeLayout = {};                                                                 // 1
////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////
//                                                                                //
// packages/kadira_blaze-layout/lib/client/layout.js                              //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////
                                                                                  //
var currentLayoutName = null;                                                     // 1
var currentLayout = null;                                                         // 2
var currentRegions = new ReactiveDict();                                          // 3
var currentData;                                                                  // 4
var _isReady = false;                                                             // 5
                                                                                  // 6
BlazeLayout.setRoot = function(root) {                                            // 7
  BlazeLayout._root = root;                                                       // 8
};                                                                                // 9
                                                                                  // 10
BlazeLayout.render = function render(layout, regions) {                           // 11
  regions = regions || {};                                                        // 12
  Meteor.startup(function() {                                                     // 13
    // To make sure dom is loaded before we do rendering layout.                  // 14
    // Related to issue #25                                                       // 15
    if(!_isReady) {                                                               // 16
      Meteor.defer(function() {                                                   // 17
        _isReady = true;                                                          // 18
        BlazeLayout._render(layout, regions)                                      // 19
      });                                                                         // 20
    } else {                                                                      // 21
      BlazeLayout._render(layout, regions);                                       // 22
    }                                                                             // 23
  });                                                                             // 24
};                                                                                // 25
                                                                                  // 26
BlazeLayout.reset = function reset() {                                            // 27
  var layout = currentLayout;                                                     // 28
  if(layout) {                                                                    // 29
    if(layout._domrange) {                                                        // 30
      // if it's rendered let's remove it right away                              // 31
      Blaze.remove(layout);                                                       // 32
    } else {                                                                      // 33
      // if not let's remove it when it rendered                                  // 34
      layout.onViewReady(function() {                                             // 35
        Blaze.remove(layout);                                                     // 36
      });                                                                         // 37
    }                                                                             // 38
                                                                                  // 39
    currentLayout = null;                                                         // 40
    currentLayoutName = null;                                                     // 41
    currentRegions = new ReactiveDict();                                          // 42
  }                                                                               // 43
};                                                                                // 44
                                                                                  // 45
BlazeLayout._regionsToData = function _regionsToData(regions, data) {             // 46
  data = data || {};                                                              // 47
  _.each(regions, function(value, key) {                                          // 48
    currentRegions.set(key, value);                                               // 49
    data[key] = BlazeLayout._buildRegionGetter(key);                              // 50
  });                                                                             // 51
                                                                                  // 52
  return data;                                                                    // 53
};                                                                                // 54
                                                                                  // 55
BlazeLayout._updateRegions = function _updateRegions(regions) {                   // 56
  var needsRerender = false;                                                      // 57
  // unset removed regions from the exiting data                                  // 58
  _.each(currentData, function(value, key) {                                      // 59
    if(regions[key] === undefined) {                                              // 60
      currentRegions.set(key, undefined);                                         // 61
      delete currentData[key];                                                    // 62
    }                                                                             // 63
  });                                                                             // 64
                                                                                  // 65
  _.each(regions, function(value, key) {                                          // 66
    // if this key does not yet exist then blaze                                  // 67
    // has no idea about this key and it won't get the value of this key          // 68
    // so, we need to force a re-render                                           // 69
    if(currentData && currentData[key] === undefined) {                           // 70
      needsRerender = true;                                                       // 71
      // and, add the data function for this new key                              // 72
      currentData[key] = BlazeLayout._buildRegionGetter(key);                     // 73
    }                                                                             // 74
    currentRegions.set(key, value);                                               // 75
  });                                                                             // 76
                                                                                  // 77
  // force re-render if we need to                                                // 78
  if(currentLayout && needsRerender) {                                            // 79
    currentLayout.dataVar.dep.changed();                                          // 80
  }                                                                               // 81
};                                                                                // 82
                                                                                  // 83
BlazeLayout._getRootDomNode = function _getRootDomNode() {                        // 84
  var root = BlazeLayout._root                                                    // 85
  if(!root) {                                                                     // 86
    root = Blaze._DOMBackend.parseHTML('<div id="__blaze-root"></div>')[0];       // 87
    document.body.appendChild(root);                                              // 88
    BlazeLayout.setRoot(root);                                                    // 89
  } else if (typeof root === 'string') {                                          // 90
    root = Blaze._DOMBackend.findBySelector(root, document)[0];                   // 91
  } else if (root.jquery) {                                                       // 92
    root = root[0];                                                               // 93
  }                                                                               // 94
                                                                                  // 95
  if(!root) {                                                                     // 96
    throw new Error("Root element does not exist");                               // 97
  }                                                                               // 98
                                                                                  // 99
  return root;                                                                    // 100
};                                                                                // 101
                                                                                  // 102
BlazeLayout._buildRegionGetter = function _buildRegionGetter(key) {               // 103
  return function() {                                                             // 104
    return currentRegions.get(key);                                               // 105
  };                                                                              // 106
};                                                                                // 107
                                                                                  // 108
BlazeLayout._getTemplate = function (layout, rootDomNode) {                       // 109
  if (Blaze._getTemplate) {                                                       // 110
    // if Meteor 1.2, see https://github.com/meteor/meteor/pull/4036              // 111
    // using Blaze._getTemplate instead of directly accessing Template allows     // 112
    // packages like Blaze Components to hook into the process                    // 113
    return Blaze._getTemplate(layout, function () {                               // 114
      var view = Blaze.getView(rootDomNode);                                      // 115
      // find the closest view with a template instance                           // 116
      while (view && !view._templateInstance) {                                   // 117
        view = view.originalParentView || view.parentView;                        // 118
      }                                                                           // 119
      // return found template instance, or null                                  // 120
      return (view && view._templateInstance) || null;                            // 121
    });                                                                           // 122
  }                                                                               // 123
  else {                                                                          // 124
    return Template[layout];                                                      // 125
  }                                                                               // 126
};                                                                                // 127
                                                                                  // 128
BlazeLayout._render = function _render(layout, regions) {                         // 129
  var rootDomNode = BlazeLayout._getRootDomNode();                                // 130
  if(currentLayoutName != layout) {                                               // 131
    // remove old view                                                            // 132
    BlazeLayout.reset();                                                          // 133
    currentData = BlazeLayout._regionsToData(regions);                            // 134
                                                                                  // 135
    currentLayout = Blaze._TemplateWith(currentData, function() {                 // 136
      var template = BlazeLayout._getTemplate(layout, rootDomNode);               // 137
                                                                                  // 138
      // 'layout' should be null (to render nothing) or an existing template name
      if (layout !== null && !template)                                           // 140
        console.log('BlazeLayout warning: unknown template "' + layout + '"');    // 141
                                                                                  // 142
      return Spacebars.include(template);                                         // 143
    });                                                                           // 144
                                                                                  // 145
    Blaze.render(currentLayout, rootDomNode, null, Blaze.getView(rootDomNode));   // 146
    currentLayoutName = layout;                                                   // 147
  } else {                                                                        // 148
    BlazeLayout._updateRegions(regions);                                          // 149
  }                                                                               // 150
};                                                                                // 151
                                                                                  // 152
////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['kadira:blaze-layout'] = {}, {
  BlazeLayout: BlazeLayout
});

})();
