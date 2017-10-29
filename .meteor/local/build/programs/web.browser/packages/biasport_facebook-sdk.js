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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package['templating-runtime'].Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/biasport_facebook-sdk/sdk.js                                                             //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Meteor.startup(function () {                                                                         // 1
   $('body').prepend('<div id="fb-root"></div>');                                                    // 2
   (function(d, s, id){                                                                              // 3
      var js, fjs = d.getElementsByTagName(s)[0];                                                    // 4
      if (d.getElementById(id)) {return;}                                                            // 5
      js = d.createElement(s); js.id = id;                                                           // 6
      js.src = "//connect.facebook.net/en_US/sdk.js";                                                // 7
      fjs.parentNode.insertBefore(js, fjs);                                                          // 8
   }(document, 'script', 'facebook-jssdk'));                                                         // 9
});                                                                                                  // 10
                                                                                                     // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/biasport_facebook-sdk/template.templates.js                                              //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("facebookLike");                                                                // 2
Template["facebookLike"] = new Template("Template.facebookLike", (function() {                       // 3
  var view = this;                                                                                   // 4
  return HTML.DIV({                                                                                  // 5
    class: "fb-like",                                                                                // 6
    "data-send": "true",                                                                             // 7
    "data-width": function() {                                                                       // 8
      return Spacebars.mustache(view.lookup("width"));                                               // 9
    },                                                                                               // 10
    "data-show-faces": function() {                                                                  // 11
      return Spacebars.mustache(view.lookup("faces"));                                               // 12
    },                                                                                               // 13
    "data-action": function() {                                                                      // 14
      return Spacebars.mustache(view.lookup("action"));                                              // 15
    },                                                                                               // 16
    "data-colorscheme": function() {                                                                 // 17
      return Spacebars.mustache(view.lookup("colorscheme"));                                         // 18
    },                                                                                               // 19
    "data-href": function() {                                                                        // 20
      return Spacebars.mustache(view.lookup("href"));                                                // 21
    },                                                                                               // 22
    "data-kid-directed-site": function() {                                                           // 23
      return Spacebars.mustache(view.lookup("kid"));                                                 // 24
    },                                                                                               // 25
    "data-layout": function() {                                                                      // 26
      return Spacebars.mustache(view.lookup("layout"));                                              // 27
    },                                                                                               // 28
    "data-ref": function() {                                                                         // 29
      return Spacebars.mustache(view.lookup("ref"));                                                 // 30
    },                                                                                               // 31
    "data-share": function() {                                                                       // 32
      return Spacebars.mustache(view.lookup("share"));                                               // 33
    }                                                                                                // 34
  }, "\n    ");                                                                                      // 35
}));                                                                                                 // 36
                                                                                                     // 37
Template.__checkName("facebookShare");                                                               // 38
Template["facebookShare"] = new Template("Template.facebookShare", (function() {                     // 39
  var view = this;                                                                                   // 40
  return HTML.DIV({                                                                                  // 41
    class: "fb-share-button",                                                                        // 42
    "data-href": function() {                                                                        // 43
      return Spacebars.mustache(view.lookup("href"));                                                // 44
    },                                                                                               // 45
    "data-width": function() {                                                                       // 46
      return Spacebars.mustache(view.lookup("width"));                                               // 47
    }                                                                                                // 48
  });                                                                                                // 49
}));                                                                                                 // 50
                                                                                                     // 51
Template.__checkName("facebookPost");                                                                // 52
Template["facebookPost"] = new Template("Template.facebookPost", (function() {                       // 53
  var view = this;                                                                                   // 54
  return HTML.DIV({                                                                                  // 55
    class: "fb-post",                                                                                // 56
    "data-href": function() {                                                                        // 57
      return Spacebars.mustache(view.lookup("href"));                                                // 58
    },                                                                                               // 59
    "data-width": function() {                                                                       // 60
      return Spacebars.mustache(view.lookup("width"));                                               // 61
    }                                                                                                // 62
  });                                                                                                // 63
}));                                                                                                 // 64
                                                                                                     // 65
Template.__checkName("facebookComments");                                                            // 66
Template["facebookComments"] = new Template("Template.facebookComments", (function() {               // 67
  var view = this;                                                                                   // 68
  return HTML.DIV({                                                                                  // 69
    class: "fb-comments",                                                                            // 70
    "data-href": function() {                                                                        // 71
      return Spacebars.mustache(view.lookup("href"));                                                // 72
    },                                                                                               // 73
    "data-numposts": function() {                                                                    // 74
      return Spacebars.mustache(view.lookup("num_posts"));                                           // 75
    },                                                                                               // 76
    "data-colorscheme": function() {                                                                 // 77
      return Spacebars.mustache(view.lookup("colorscheme"));                                         // 78
    },                                                                                               // 79
    "data-width": function() {                                                                       // 80
      return Spacebars.mustache(view.lookup("width"));                                               // 81
    },                                                                                               // 82
    "data-order-by": function() {                                                                    // 83
      return Spacebars.mustache(view.lookup("order_by"));                                            // 84
    },                                                                                               // 85
    "data-mobile": function() {                                                                      // 86
      return Spacebars.mustache(view.lookup("mobile"));                                              // 87
    }                                                                                                // 88
  });                                                                                                // 89
}));                                                                                                 // 90
                                                                                                     // 91
Template.__checkName("facebookSend");                                                                // 92
Template["facebookSend"] = new Template("Template.facebookSend", (function() {                       // 93
  var view = this;                                                                                   // 94
  return HTML.DIV({                                                                                  // 95
    class: "fb-send",                                                                                // 96
    "data-href": function() {                                                                        // 97
      return Spacebars.mustache(view.lookup("href"));                                                // 98
    },                                                                                               // 99
    "data-colorscheme": function() {                                                                 // 100
      return Spacebars.mustache(view.lookup("colorscheme"));                                         // 101
    },                                                                                               // 102
    "data-kid-directed-site": function() {                                                           // 103
      return Spacebars.mustache(view.lookup("kid_directed_site"));                                   // 104
    },                                                                                               // 105
    "data-ref": function() {                                                                         // 106
      return Spacebars.mustache(view.lookup("ref"));                                                 // 107
    }                                                                                                // 108
  });                                                                                                // 109
}));                                                                                                 // 110
                                                                                                     // 111
Template.__checkName("facebookFollow");                                                              // 112
Template["facebookFollow"] = new Template("Template.facebookFollow", (function() {                   // 113
  var view = this;                                                                                   // 114
  return HTML.DIV({                                                                                  // 115
    class: "fb-follow",                                                                              // 116
    "data-href": function() {                                                                        // 117
      return Spacebars.mustache(view.lookup("href"));                                                // 118
    },                                                                                               // 119
    "data-colorscheme": function() {                                                                 // 120
      return Spacebars.mustache(view.lookup("colorscheme"));                                         // 121
    },                                                                                               // 122
    "data-layout": function() {                                                                      // 123
      return Spacebars.mustache(view.lookup("layout"));                                              // 124
    },                                                                                               // 125
    "data-show-faces": function() {                                                                  // 126
      return Spacebars.mustache(view.lookup("faces"));                                               // 127
    }                                                                                                // 128
  });                                                                                                // 129
}));                                                                                                 // 130
                                                                                                     // 131
Template.__checkName("facebookActivity");                                                            // 132
Template["facebookActivity"] = new Template("Template.facebookActivity", (function() {               // 133
  var view = this;                                                                                   // 134
  return HTML.DIV({                                                                                  // 135
    class: "fb-activity",                                                                            // 136
    "data-site": function() {                                                                        // 137
      return Spacebars.mustache(view.lookup("site"));                                                // 138
    },                                                                                               // 139
    "data-action": function() {                                                                      // 140
      return Spacebars.mustache(view.lookup("action"));                                              // 141
    },                                                                                               // 142
    "data-colorscheme": function() {                                                                 // 143
      return Spacebars.mustache(view.lookup("colorscheme"));                                         // 144
    },                                                                                               // 145
    "data-header": function() {                                                                      // 146
      return Spacebars.mustache(view.lookup("header"));                                              // 147
    },                                                                                               // 148
    "data-filter": function() {                                                                      // 149
      return Spacebars.mustache(view.lookup("filter"));                                              // 150
    },                                                                                               // 151
    "data-linktarget": function() {                                                                  // 152
      return Spacebars.mustache(view.lookup("linktarget"));                                          // 153
    },                                                                                               // 154
    "data-recommendations": function() {                                                             // 155
      return Spacebars.mustache(view.lookup("recommendations"));                                     // 156
    },                                                                                               // 157
    "data-ref": function() {                                                                         // 158
      return Spacebars.mustache(view.lookup("ref"));                                                 // 159
    },                                                                                               // 160
    "data-width": function() {                                                                       // 161
      return Spacebars.mustache(view.lookup("width"));                                               // 162
    }                                                                                                // 163
  });                                                                                                // 164
}));                                                                                                 // 165
                                                                                                     // 166
Template.__checkName("facebookRecommendations");                                                     // 167
Template["facebookRecommendations"] = new Template("Template.facebookRecommendations", (function() {
  var view = this;                                                                                   // 169
  return HTML.DIV({                                                                                  // 170
    class: "fb-recommendations",                                                                     // 171
    "data-site": function() {                                                                        // 172
      return Spacebars.mustache(view.lookup("site"));                                                // 173
    },                                                                                               // 174
    "data-action": function() {                                                                      // 175
      return Spacebars.mustache(view.lookup("action"));                                              // 176
    },                                                                                               // 177
    "data-colorscheme": function() {                                                                 // 178
      return Spacebars.mustache(view.lookup("colorscheme"));                                         // 179
    },                                                                                               // 180
    "data-header": function() {                                                                      // 181
      return Spacebars.mustache(view.lookup("header"));                                              // 182
    },                                                                                               // 183
    "data-add-id": function() {                                                                      // 184
      return Spacebars.mustache(view.lookup("add_id"));                                              // 185
    },                                                                                               // 186
    "data-height": function() {                                                                      // 187
      return Spacebars.mustache(view.lookup("height"));                                              // 188
    },                                                                                               // 189
    "data-linktarget": function() {                                                                  // 190
      return Spacebars.mustache(view.lookup("linktarget"));                                          // 191
    },                                                                                               // 192
    "data-ref": function() {                                                                         // 193
      return Spacebars.mustache(view.lookup("ref"));                                                 // 194
    },                                                                                               // 195
    "data-width": function() {                                                                       // 196
      return Spacebars.mustache(view.lookup("width"));                                               // 197
    }                                                                                                // 198
  });                                                                                                // 199
}));                                                                                                 // 200
                                                                                                     // 201
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['biasport:facebook-sdk'] = {};

})();
