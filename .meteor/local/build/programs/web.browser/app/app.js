var require = meteorInstall({"imports":{"ui":{"components":{"editor.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/editor.html                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.editor.js");                                                                      // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.editor.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.editor.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("editor");                                                                                        // 2
Template["editor"] = new Template("Template.editor", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("canEdit"));                                                                     // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", HTML.DIV({                                                                                  // 8
      class: "editor-open"                                                                                             // 9
    }, "\n            ", HTML.I({                                                                                      // 10
      class: "material-icons",                                                                                         // 11
      id: "openEditor"                                                                                                 // 12
    }, "add"), "\n        "), "\n        ", HTML.DIV({                                                                 // 13
      class: "container-fluid editor-main",                                                                            // 14
      hidden: ""                                                                                                       // 15
    }, "\n            ", HTML.A({                                                                                      // 16
      class: "editor-control editor-back"                                                                              // 17
    }, HTML.I({                                                                                                        // 18
      class: "fa fa-arrow-left"                                                                                        // 19
    })), "\n            ", HTML.A({                                                                                    // 20
      class: "editor-control editor-close"                                                                             // 21
    }, HTML.I({                                                                                                        // 22
      class: "fa fa-times"                                                                                             // 23
    })), "\n            ", Spacebars.include(view.lookupTemplate("announcementMenu")), "\n            ", Spacebars.include(view.lookupTemplate("blogEditor")), "\n            ", Spacebars.include(view.lookupTemplate("announcementEditor")), "\n            ", Spacebars.include(view.lookupTemplate("suggestionEditor")), "\n            ", Spacebars.include(view.lookupTemplate("blogDraft")), "\n            ", Spacebars.include(view.lookupTemplate("allPosts")), "\n            ", HTML.DIV({
      class: "container blog-intro text-center"                                                                        // 25
    }, "\n                ", HTML.DIV({                                                                                // 26
      class: "center-wrapper"                                                                                          // 27
    }, "\n                    ", HTML.DIV({                                                                            // 28
      class: "post-source mb-45"                                                                                       // 29
    }, "\n                        ", HTML.DIV({                                                                        // 30
      class: "row mb-30"                                                                                               // 31
    }, "\n                            ", HTML.DIV({                                                                    // 32
      class: "col-lg-12 col-md-12 col-sm-12 mb-30"                                                                     // 33
    }, "\n                                ", HTML.H2("Welcome to The Composer"), "\n                                ", HTML.H4("Select a place to start writing"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      class: "row text-center mb-30"                                                                                   // 35
    }, "\n                            ", HTML.DIV({                                                                    // 36
      class: "col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-30"                                                             // 37
    }, "\n                                ", HTML.DIV({                                                                // 38
      class: "editor-options",                                                                                         // 39
      id: "startNewDraft"                                                                                              // 40
    }, "\n                                    ", HTML.I({                                                              // 41
      class: "fa fa-pencil fa-5x mb-15 hidden-xs",                                                                     // 42
      "aria-hidden": "true"                                                                                            // 43
    }), "\n                                    ", HTML.P("Create from scratch"), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      class: "col-lg-6 col-sm-12 col-xs-12"                                                                            // 45
    }, "\n                                ", HTML.DIV({                                                                // 46
      class: "editor-options",                                                                                         // 47
      id: "checkDrafts"                                                                                                // 48
    }, "\n                                    ", HTML.I({                                                              // 49
      class: "fa fa-file-text-o fa-5x mb-15 hidden-xs",                                                                // 50
      "aria-hidden": "true"                                                                                            // 51
    }), "\n                                    ", HTML.P("Resume a Draft"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      class: "row text-center mb-30"                                                                                   // 53
    }, "\n                            ", HTML.DIV({                                                                    // 54
      class: "col-lg-12"                                                                                               // 55
    }, "\n                                ", HTML.DIV({                                                                // 56
      class: "editor-options",                                                                                         // 57
      id: "checkAll"                                                                                                   // 58
    }, "\n                                    ", HTML.I({                                                              // 59
      class: "fa fa-list fa-5x mb-15 hidden-xs",                                                                       // 60
      "aria-hidden": "true"                                                                                            // 61
    }), "\n                                    ", HTML.P("Check all your posts"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      class: "container post-type text-center",                                                                        // 63
      hidden: ""                                                                                                       // 64
    }, "\n                ", HTML.DIV({                                                                                // 65
      class: "center-wrapper"                                                                                          // 66
    }, "\n                    ", HTML.DIV({                                                                            // 67
      class: "mb-45"                                                                                                   // 68
    }, "\n                        ", HTML.DIV({                                                                        // 69
      class: "row mb-30"                                                                                               // 70
    }, "\n                            ", HTML.DIV({                                                                    // 71
      class: "col-lg-12 col-md-12 col-sm-12 mb-30"                                                                     // 72
    }, "\n                                ", HTML.H2("Nice,"), "\n                                ", HTML.H4("What would you like to compose?"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      class: "row text-center mb-30"                                                                                   // 74
    }, "\n                            ", Blaze.If(function() {                                                         // 75
      return Spacebars.call(view.lookup("canWriteAnnounce"));                                                          // 76
    }, function() {                                                                                                    // 77
      return [ "\n                                ", HTML.DIV({                                                        // 78
        class: "col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-30",                                                          // 79
        id: "startAnnouncement"                                                                                        // 80
      }, "\n                                    ", HTML.DIV({                                                          // 81
        class: "editor-options"                                                                                        // 82
      }, "\n                                        ", HTML.I({                                                        // 83
        class: "fa fa-bullhorn fa-5x mb-15 hidden-xs"                                                                  // 84
      }), "\n                                        ", HTML.P("Announcement"), "\n                                    "), "\n                                "), "\n                            " ];
    }), "\n                            ", Blaze.If(function() {                                                        // 86
      return Spacebars.call(view.lookup("canWriteBlog"));                                                              // 87
    }, function() {                                                                                                    // 88
      return [ "\n                                ", HTML.DIV({                                                        // 89
        class: "col-lg-4 col-md-4 hidden-xs mb-30",                                                                    // 90
        id: "startBlog"                                                                                                // 91
      }, "\n                                    ", HTML.DIV({                                                          // 92
        class: "editor-options"                                                                                        // 93
      }, "\n                                        ", HTML.I({                                                        // 94
        class: "fa fa-newspaper-o fa-5x mb-15 hidden-xs"                                                               // 95
      }), "\n                                        ", HTML.P("Story"), "\n                                    "), "\n                                "), "\n                            " ];
    }), "\n                            ", HTML.DIV({                                                                   // 97
      class: "col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-30 hidden-xs",                                                  // 98
      id: "startSuggestion"                                                                                            // 99
    }, "\n                                ", HTML.DIV({                                                                // 100
      class: "editor-options"                                                                                          // 101
    }, "\n                                    ", HTML.I({                                                              // 102
      class: "fa fa-commenting-o fa-5x mb-15 hidden-xs"                                                                // 103
    }), "\n                                    ", HTML.P("Suggestion"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    " ];
  });                                                                                                                  // 105
}));                                                                                                                   // 106
                                                                                                                       // 107
Template.__checkName("blogDraft");                                                                                     // 108
Template["blogDraft"] = new Template("Template.blogDraft", (function() {                                               // 109
  var view = this;                                                                                                     // 110
  return HTML.DIV({                                                                                                    // 111
    class: "container blog-drafts",                                                                                    // 112
    hidden: ""                                                                                                         // 113
  }, "\n        ", HTML.DIV({                                                                                          // 114
    class: "center-wrapper"                                                                                            // 115
  }, "\n            ", HTML.DIV({                                                                                      // 116
    class: "mb-45"                                                                                                     // 117
  }, "\n                ", HTML.Raw('<div class="row mb-30">\n                    <div class="col-lg-12 col-md-12 col-sm-12 mb-30 text-center mt-30">\n                        <h2>Here are all your drafts,</h2>\n                        <h4>Click on one to continue editing</h4>\n                    </div>\n                </div>'), "\n                ", HTML.DIV({
    class: "row"                                                                                                       // 119
  }, "\n                    ", Blaze.Each(function() {                                                                 // 120
    return Spacebars.call(view.lookup("drafts"));                                                                      // 121
  }, function() {                                                                                                      // 122
    return [ "\n                        ", HTML.DIV({                                                                  // 123
      class: "col-lg-12 draft-item",                                                                                   // 124
      id: function() {                                                                                                 // 125
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 126
      }                                                                                                                // 127
    }, "\n                            ", HTML.Comment(" Blog post example, with featured image "), "\n                            ", HTML.DIV({
      class: "editor-options draft-inline"                                                                             // 129
    }, "\n                                ", HTML.DIV({                                                                // 130
      class: "image-preview"                                                                                           // 131
    }, "\n                                    ", HTML.IMG({                                                            // 132
      src: function() {                                                                                                // 133
        return Spacebars.mustache(view.lookup("imageLink"));                                                           // 134
      },                                                                                                               // 135
      class: "img-responsive"                                                                                          // 136
    }), "\n                                "), "\n                                ", HTML.DIV({                        // 137
      class: "content-preview"                                                                                         // 138
    }, "\n                                    ", HTML.H3({                                                             // 139
      class: "draft-title"                                                                                             // 140
    }, Blaze.View("lookup:headline", function() {                                                                      // 141
      return Spacebars.mustache(view.lookup("headline"));                                                              // 142
    }), Blaze.View("lookup:title", function() {                                                                        // 143
      return Spacebars.mustache(view.lookup("title"));                                                                 // 144
    })), "\n                                    ", HTML.SPAN("Created: ", Blaze.View("lookup:draftedDate", function() {
      return Spacebars.mustache(view.lookup("draftedDate"));                                                           // 146
    }), ". Format: ", Blaze.View("lookup:type", function() {                                                           // 147
      return Spacebars.mustache(view.lookup("type"));                                                                  // 148
    })), "\n                                    ", HTML.P({                                                            // 149
      class: "draft-body"                                                                                              // 150
    }, Blaze.If(function() {                                                                                           // 151
      return Spacebars.call(view.lookup("isBlog"));                                                                    // 152
    }, function() {                                                                                                    // 153
      return Blaze.View("lookup:subtitle", function() {                                                                // 154
        return Spacebars.mustache(view.lookup("subtitle"));                                                            // 155
      });                                                                                                              // 156
    }, function() {                                                                                                    // 157
      return Blaze.View("lookup:content", function() {                                                                 // 158
        return Spacebars.mustache(view.lookup("content"));                                                             // 159
      });                                                                                                              // 160
    })), "\n                                    ", HTML.DIV({                                                          // 161
      class: "dropdown",                                                                                               // 162
      style: "max-width: 164px"                                                                                        // 163
    }, "\n                                        ", HTML.BUTTON({                                                     // 164
      class: "dropbtn"                                                                                                 // 165
    }, "Quick Actions"), "\n                                        ", HTML.DIV({                                      // 166
      class: "dropdown-content"                                                                                        // 167
    }, "\n                                            ", HTML.A({                                                      // 168
      href: "",                                                                                                        // 169
      class: "btn-publish-draft"                                                                                       // 170
    }, "Publish"), "\n                                            ", HTML.A({                                          // 171
      href: "",                                                                                                        // 172
      class: "btn-delete-draft"                                                                                        // 173
    }, HTML.I({                                                                                                        // 174
      class: "fa fa-trash-o"                                                                                           // 175
    }), " Delete"), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
  }), "\n                    ", HTML.Raw('<button class="btn btn-primary btn-wide load-more-posts">Load More</button>'), "\n                "), "\n            "), "\n        "), "\n    ");
}));                                                                                                                   // 178
                                                                                                                       // 179
Template.__checkName("allPosts");                                                                                      // 180
Template["allPosts"] = new Template("Template.allPosts", (function() {                                                 // 181
  var view = this;                                                                                                     // 182
  return HTML.DIV({                                                                                                    // 183
    class: "container all-posts",                                                                                      // 184
    hidden: ""                                                                                                         // 185
  }, "\n        ", HTML.DIV({                                                                                          // 186
    class: "center-wrapper"                                                                                            // 187
  }, "\n            ", HTML.DIV({                                                                                      // 188
    class: "mb-45"                                                                                                     // 189
  }, "\n                ", HTML.Raw('<div class="row mb-30">\n                    <div class="col-lg-12 col-md-12 col-sm-12 mb-30 text-center mt-30">\n                        <h2>Here are all your posts,</h2>\n                        <h4>Click on one to continue editing</h4>\n                    </div>\n                </div>'), "\n                ", HTML.DIV({
    class: "row"                                                                                                       // 191
  }, "\n                    ", Blaze.Each(function() {                                                                 // 192
    return Spacebars.call(view.lookup("post"));                                                                        // 193
  }, function() {                                                                                                      // 194
    return [ "\n                        ", HTML.DIV({                                                                  // 195
      class: "col-lg-12 draft-item",                                                                                   // 196
      id: function() {                                                                                                 // 197
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 198
      }                                                                                                                // 199
    }, "\n                            ", HTML.DIV({                                                                    // 200
      class: "editor-options draft-inline"                                                                             // 201
    }, "\n                                ", HTML.DIV({                                                                // 202
      class: "col-md-3"                                                                                                // 203
    }, "\n                                    ", HTML.IMG({                                                            // 204
      src: function() {                                                                                                // 205
        return Spacebars.mustache(view.lookup("imageLink"));                                                           // 206
      },                                                                                                               // 207
      class: "img-responsive"                                                                                          // 208
    }), "\n                                "), "\n                                ", HTML.DIV({                        // 209
      class: "content-preview col-md-6"                                                                                // 210
    }, "\n                                    ", HTML.H3({                                                             // 211
      class: "draft-title"                                                                                             // 212
    }, Blaze.View("lookup:headline", function() {                                                                      // 213
      return Spacebars.mustache(view.lookup("headline"));                                                              // 214
    }), Blaze.View("lookup:title", function() {                                                                        // 215
      return Spacebars.mustache(view.lookup("title"));                                                                 // 216
    })), "\n                                    ", HTML.SPAN("Created: ", Blaze.View("lookup:draftedDate", function() {
      return Spacebars.mustache(view.lookup("draftedDate"));                                                           // 218
    }), ". Format: ", Blaze.View("lookup:type", function() {                                                           // 219
      return Spacebars.mustache(view.lookup("type"));                                                                  // 220
    })), "\n                                    ", HTML.P({                                                            // 221
      class: "draft-body"                                                                                              // 222
    }, Blaze.If(function() {                                                                                           // 223
      return Spacebars.call(view.lookup("isBlog"));                                                                    // 224
    }, function() {                                                                                                    // 225
      return Blaze.View("lookup:subtitle", function() {                                                                // 226
        return Spacebars.mustache(view.lookup("subtitle"));                                                            // 227
      });                                                                                                              // 228
    }, function() {                                                                                                    // 229
      return Blaze.View("lookup:content", function() {                                                                 // 230
        return Spacebars.mustache(view.lookup("content"));                                                             // 231
      });                                                                                                              // 232
    })), "\n                                    ", HTML.DIV({                                                          // 233
      class: "dropdown",                                                                                               // 234
      style: "max-width: 164px"                                                                                        // 235
    }, "\n                                        ", HTML.BUTTON({                                                     // 236
      class: "dropbtn"                                                                                                 // 237
    }, "Quick Actions"), "\n                                        ", HTML.DIV({                                      // 238
      class: "dropdown-content"                                                                                        // 239
    }, "\n                                            ", HTML.A({                                                      // 240
      href: "",                                                                                                        // 241
      class: "btn-republish-post"                                                                                      // 242
    }, "re-Publish"), "\n                                            ", HTML.A({                                       // 243
      href: "",                                                                                                        // 244
      class: "btn-delete-post"                                                                                         // 245
    }, HTML.I({                                                                                                        // 246
      class: "fa fa-trash-o"                                                                                           // 247
    }), " Delete"), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      class: "review-stage col-md-3"                                                                                   // 249
    }, "\n                                    ", HTML.H5("Review Stage"), "\n                                    ", HTML.H1(Blaze.View("lookup:stage", function() {
      return Spacebars.mustache(view.lookup("stage"));                                                                 // 251
    })), "\n                                    ", HTML.H5(Blaze.View("lookup:stageCaption", function() {              // 252
      return Spacebars.mustache(view.lookup("stageCaption"));                                                          // 253
    })), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
  }), "\n                "), "\n            "), "\n        "), "\n    ");                                              // 255
}));                                                                                                                   // 256
                                                                                                                       // 257
Template.__checkName("blogEditor");                                                                                    // 258
Template["blogEditor"] = new Template("Template.blogEditor", (function() {                                             // 259
  var view = this;                                                                                                     // 260
  return HTML.Raw('<div class="container blog-editor" hidden="">\n        <h2 class="editor-title">Creating a new draft</h2>\n        <p class="editor-subtitle">Story</p>\n        <div class="row">\n            <div class="col-lg-12 col-md-12">\n                <form class="form post-info-form full-width">\n                    <!--Blog Title-->\n                    <input type="text" placeholder="Title*" id="blogTitle">\n                    <input type="text" placeholder="Description*" name="sub" id="blogSubTitle">\n                </form>\n            </div>\n        </div>\n        <div class="row mb-45">\n            <div class="col-lg-12 col-md-12">\n                <div class="editable" id="blogContent"></div>\n            </div>\n        </div>\n\n        <div class="row mb-60">\n            <div class="col-md-6 col-lg-6">\n                <div class="editor-card">\n                    <div class="card-body">\n                        <h3>Add Some Tags</h3>\n                        <p>By adding some tags, other users can more easily find your post by search. To add a tag, simply write in the text box below, hit enter after every tag.</p>\n                        <input data-role="tagsinput" class="tags" placeholder="Write your tags here">\n                        <hr>\n                        <h3>Select Categories</h3>\n                        <p>By selecting the categories this post belongs to, we can improve the user feed experience. To select click on the box below and pick an option from the drop up box, you can choose multiple if needed.</p>\n                        <select name="category-selector" class="category-select" id="blogCategorySelect" multiple="" style="width: 100%">\n                        </select>\n                        <hr>\n                        <h3>Is this story related to any courses or clubs?</h3>\n                        <p>Select Them using the dialog below. Selecting these helps us index your story so when a user searches for it, they can find it easily.</p>\n                        <select name="category-selector" class="category-select" id="blogOrganizationSelect" multiple="" style="width: 100%">\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-6 col-lg-6 ">\n                <div class="editor-card">\n                    <div class="card-body">\n                        <h3>Featured Splash Image</h3>\n                        <p>Upload an image to help attract users to your blog, stock photos work well, avoid images with text. Please credit the photographer with the form below.</p>\n                        <form action="/file-upload" class="dropzone" id="dropzone"></form>\n                        <h5 id="unsplashPrompt">Want to avoid the hassle? <a href="" id="getFeaturedUnsplash">Click here</a> and we will find an image for you!</h5>\n                        <hr>\n                        <h3>Pick a release date</h3>\n                        <p>Use the date selector bellow to select the day you would like this post published.</p>\n                        <input type="text" class="form-control input-date">\n                        <hr>\n                        <h3>Set the visibility</h3>\n                        <p>Choose who this blog post is written for, public means people outside the board will receive access.</p>\n                        <select name="category-selector" class="visibility-select" style="width: 100%">\n                            <option value="1">Everyone</option>\n                            <option value="2">Students Only</option>\n                            <option value="3">Teachers and Staff Only</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row text-center mb-80">\n            <div class="col-md-4 col-lg-4">\n                <div class="editor-card publish">\n                    <h3>Publish</h3>\n                </div>\n            </div>\n            <div class="col-md-4 col-lg-4">\n                <div class="editor-card preview btn-preview">\n                    <h3>Preview</h3>\n                </div>\n            </div>\n            <div class="col-md-4 col-lg-4">\n                <div class="editor-card save-draft">\n                    <h3>Save as draft</h3>\n                </div>\n            </div>\n        </div>\n    </div>');
}));                                                                                                                   // 262
                                                                                                                       // 263
Template.__checkName("announcementMenu");                                                                              // 264
Template["announcementMenu"] = new Template("Template.announcementMenu", (function() {                                 // 265
  var view = this;                                                                                                     // 266
  return HTML.Raw('<div class="container announcement-menu" hidden="">\n        <div class="announcement-type text-center">\n            <div class="row mb-30">\n                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-30">\n                    <h2>Solid,</h2>\n                    <h4>How would you like to present your news?</h4>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-lg-4 col-sm-12 col-xs-12 mb-30">\n                    <div class="editor-options" id="imageOnly">\n                        <i class="fa fa-picture-o fa-5x mb-15 hidden-xs"></i>\n                        <p>I made a <b>Poster</b>. (Image Only)</p>\n                    </div>\n                </div>\n                <div class="col-lg-4 col-sm-12 col-xs-12 mb-30" id="textOnly">\n                    <div class="editor-options">\n                        <i class="fa fa-font fa-5x mb-15 hidden-xs"></i>\n                        <p>I wrote some <b>Text</b>. (Text Only)</p>\n                    </div>\n                </div>\n                <div class="col-lg-4 col-sm-12 col-xs-12" id="textAndImage">\n                    <div class="editor-options">\n                        <i class="fa fa-heart-o fa-5x mb-15 hidden-xs"></i>\n                        <p>I have both a poster and some text.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>');
}));                                                                                                                   // 268
                                                                                                                       // 269
Template.__checkName("announcementEditor");                                                                            // 270
Template["announcementEditor"] = new Template("Template.announcementEditor", (function() {                             // 271
  var view = this;                                                                                                     // 272
  return HTML.DIV({                                                                                                    // 273
    class: "container blog-announcements"                                                                              // 274
  }, "\n        ", HTML.DIV({                                                                                          // 275
    class: "text-center image-only",                                                                                   // 276
    hidden: ""                                                                                                         // 277
  }, "\n            ", HTML.Raw('<div class="row mb-30">\n                <div class="col-lg-12 col-md-12 col-sm-12 mb-30">\n                    <h2>Upload an image announcement</h2>\n                    <h4>Simply drop your image in the box below, and add a headline</h4>\n                </div>\n            </div>'), "\n            ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 279
      id: Spacebars.call("imageOnlyHeadline")                                                                          // 280
    };                                                                                                                 // 281
  }, function() {                                                                                                      // 282
    return Spacebars.include(view.lookupTemplate("announcementHeadline"));                                             // 283
  }), "\n            ", Blaze._TemplateWith(function() {                                                               // 284
    return {                                                                                                           // 285
      id: Spacebars.call("announcementImage")                                                                          // 286
    };                                                                                                                 // 287
  }, function() {                                                                                                      // 288
    return Spacebars.include(view.lookupTemplate("announcementImageInput"));                                           // 289
  }), "\n            ", HTML.Raw('<h5 class="quick-image-prompt"></h5>'), "\n            ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 291
      imgAndText: Spacebars.call(false)                                                                                // 292
    };                                                                                                                 // 293
  }, function() {                                                                                                      // 294
    return Spacebars.include(view.lookupTemplate("announcementOptions"));                                              // 295
  }), "\n        "), "\n\n        ", HTML.DIV({                                                                        // 296
    class: "text-center text-only",                                                                                    // 297
    hidden: ""                                                                                                         // 298
  }, "\n            ", HTML.Raw('<div class="row mb-30">\n                <div class="col-lg-12 col-md-12 col-sm-12 mb-30">\n                    <h2>Text Only Announcements</h2>\n                    <h4>Write/Paste your information in the big box below, 140 characters max.</h4>\n                </div>\n            </div>'), "\n            ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 300
      id: Spacebars.call("textOnlyHeadline")                                                                           // 301
    };                                                                                                                 // 302
  }, function() {                                                                                                      // 303
    return Spacebars.include(view.lookupTemplate("announcementHeadline"));                                             // 304
  }), "\n            ", Blaze._TemplateWith(function() {                                                               // 305
    return {                                                                                                           // 306
      max: Spacebars.call("1000")                                                                                      // 307
    };                                                                                                                 // 308
  }, function() {                                                                                                      // 309
    return Spacebars.include(view.lookupTemplate("announcementTextInput"));                                            // 310
  }), "\n            ", Blaze._TemplateWith(function() {                                                               // 311
    return {                                                                                                           // 312
      imgAndText: Spacebars.call(false)                                                                                // 313
    };                                                                                                                 // 314
  }, function() {                                                                                                      // 315
    return Spacebars.include(view.lookupTemplate("announcementOptions"));                                              // 316
  }), "\n        "), "\n        ", HTML.DIV({                                                                          // 317
    class: "text-center text-and-image",                                                                               // 318
    hidden: ""                                                                                                         // 319
  }, "\n            ", HTML.Raw('<div class="row mb-30">\n                <div class="col-lg-12 col-md-12 col-sm-12 mb-30">\n                    <h2>Text and Image Announcements</h2>\n                    <h4>Write/Paste your information in the big box below, 140 characters max.</h4>\n                </div>\n            </div>'), "\n            ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 321
      id: Spacebars.call("textImageHeadline")                                                                          // 322
    };                                                                                                                 // 323
  }, function() {                                                                                                      // 324
    return Spacebars.include(view.lookupTemplate("announcementHeadline"));                                             // 325
  }), "\n            ", Blaze._TemplateWith(function() {                                                               // 326
    return {                                                                                                           // 327
      max: Spacebars.call("1000")                                                                                      // 328
    };                                                                                                                 // 329
  }, function() {                                                                                                      // 330
    return Spacebars.include(view.lookupTemplate("announcementTextInput"));                                            // 331
  }), "\n            ", Blaze._TemplateWith(function() {                                                               // 332
    return {                                                                                                           // 333
      id: Spacebars.call("announcementImageTwo")                                                                       // 334
    };                                                                                                                 // 335
  }, function() {                                                                                                      // 336
    return Spacebars.include(view.lookupTemplate("announcementImageInput"));                                           // 337
  }), "\n            ", Blaze._TemplateWith(function() {                                                               // 338
    return {                                                                                                           // 339
      imgAndText: Spacebars.call(true)                                                                                 // 340
    };                                                                                                                 // 341
  }, function() {                                                                                                      // 342
    return Spacebars.include(view.lookupTemplate("announcementOptions"));                                              // 343
  }), "\n\n        "), "\n    ");                                                                                      // 344
}));                                                                                                                   // 345
                                                                                                                       // 346
Template.__checkName("announcementHeadline");                                                                          // 347
Template["announcementHeadline"] = new Template("Template.announcementHeadline", (function() {                         // 348
  var view = this;                                                                                                     // 349
  return HTML.DIV({                                                                                                    // 350
    class: "row"                                                                                                       // 351
  }, "\n        ", HTML.DIV({                                                                                          // 352
    class: "col-lg-12 col-md-12"                                                                                       // 353
  }, "\n            ", HTML.FORM({                                                                                     // 354
    class: "form post-info-form full-width"                                                                            // 355
  }, "\n                ", HTML.INPUT({                                                                                // 356
    type: "text",                                                                                                      // 357
    placeholder: "Headline*",                                                                                          // 358
    id: function() {                                                                                                   // 359
      return Spacebars.mustache(view.lookup("id"));                                                                    // 360
    },                                                                                                                 // 361
    maxlength: "50"                                                                                                    // 362
  }), "\n            "), "\n        "), "\n    ");                                                                     // 363
}));                                                                                                                   // 364
                                                                                                                       // 365
Template.__checkName("announcementOptions");                                                                           // 366
Template["announcementOptions"] = new Template("Template.announcementOptions", (function() {                           // 367
  var view = this;                                                                                                     // 368
  return [ Blaze.If(function() {                                                                                       // 369
    return Spacebars.call(view.lookup("imgAndText"));                                                                  // 370
  }, function() {                                                                                                      // 371
    return [ "\n    ", HTML.DIV({                                                                                      // 372
      class: "row mb-45 text-left"                                                                                     // 373
    }, "\n        ", HTML.DIV({                                                                                        // 374
      class: "col-lg-4 col-md-4 col-sm-12 col-xs-12"                                                                   // 375
    }, "\n            ", HTML.H3("Add Some Tags"), "\n            ", HTML.P("By adding some tags, other users can easily find your post by search. To add a tag, simply write in the text box below, hit enter after every tag."), "\n            ", HTML.INPUT({
      "data-role": "tagsinput",                                                                                        // 377
      class: "announce-tags",                                                                                          // 378
      placeholder: "Write your tags here"                                                                              // 379
    }), "\n            ", HTML.H3("Select Categories"), "\n            ", HTML.P("By selecting the categories this post belongs to, we can improve the user feed experience. To select click on the box below and pick an option from the drop up box, you can choose multiple if needed."), "\n            ", HTML.SELECT({
      name: "category-selector",                                                                                       // 381
      class: "category-select announcement-category",                                                                  // 382
      multiple: "",                                                                                                    // 383
      style: "width: 100%"                                                                                             // 384
    }), "\n            ", HTML.H3("Is this Club related?"), "\n            ", HTML.P("If this announcement is for student clubs or teams, please select them below."), "\n            ", HTML.SELECT({
      name: "category-selector",                                                                                       // 386
      class: "category-select clubs-category",                                                                         // 387
      multiple: "",                                                                                                    // 388
      style: "width: 100%"                                                                                             // 389
    }), "\n        "), "\n        ", HTML.DIV({                                                                        // 390
      class: "col-lg-4 col-md-4 col-sm-12 col-xs-12"                                                                   // 391
    }, "\n            ", HTML.H3("Set Priority"), "\n            ", HTML.P({                                           // 392
      class: "mb-15"                                                                                                   // 393
    }, "Selecting a priority helps us determine the best way to present your announcement to other users."), "\n            ", HTML.DIV({
      class: "col-md-6 col-sm-6 col-xs-6 text-center"                                                                  // 395
    }, "\n                ", HTML.DIV({                                                                                // 396
      class: "is-checked priority-toggle",                                                                             // 397
      "data-priority": "image"                                                                                         // 398
    }, "\n                    ", HTML.I({                                                                              // 399
      class: "fa fa-file-image-o fa-3x"                                                                                // 400
    }), "\n                    ", HTML.H4({                                                                            // 401
      class: ""                                                                                                        // 402
    }, "Image"), "\n                "), "\n            "), "\n            ", HTML.DIV({                                // 403
      class: "col-md-6 col-sm-6 col-xs-6 text-center"                                                                  // 404
    }, "\n                ", HTML.DIV({                                                                                // 405
      class: "priority-toggle",                                                                                        // 406
      "data-priority": "text"                                                                                          // 407
    }, "\n                    ", HTML.I({                                                                              // 408
      class: "fa fa-file-text-o fa-3x"                                                                                 // 409
    }), "\n                    ", HTML.H4({                                                                            // 410
      class: ""                                                                                                        // 411
    }, "Text"), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({                    // 412
      class: "col-lg-4 col-md-4 col-sm-12 col-xs-12"                                                                   // 413
    }, "\n            ", HTML.H3("Pick a date range"), "\n            ", HTML.P("Use the date selector bellow to select the days you would like this post to be visible to the rest of the users."), "\n            ", HTML.DIV({
      class: "input-group input-daterange"                                                                             // 415
    }, "\n                ", HTML.INPUT({                                                                              // 416
      type: "text",                                                                                                    // 417
      class: "form-control startDate"                                                                                  // 418
    }), "\n                ", HTML.DIV({                                                                               // 419
      class: "input-group-addon"                                                                                       // 420
    }, "to"), "\n                ", HTML.INPUT({                                                                       // 421
      type: "text",                                                                                                    // 422
      class: "form-control endDate"                                                                                    // 423
    }), "\n            "), "\n            ", HTML.H3("Set the visibility"), "\n            ", HTML.P("Choose who this blog post is written for, public means people outside the board will receive access."), "\n            ", HTML.SELECT({
      name: "category-selector",                                                                                       // 425
      class: "visibility-select",                                                                                      // 426
      style: "width: 100%"                                                                                             // 427
    }, "\n                ", HTML.OPTION({                                                                             // 428
      value: "1"                                                                                                       // 429
    }, "Everyone"), "\n                ", HTML.OPTION({                                                                // 430
      value: "2"                                                                                                       // 431
    }, "Students Only"), "\n                ", HTML.OPTION({                                                           // 432
      value: "3"                                                                                                       // 433
    }, "Teachers and Staff Only"), "\n            "), "\n        "), "\n    "), "\n    " ];                            // 434
  }, function() {                                                                                                      // 435
    return [ "\n        ", HTML.DIV({                                                                                  // 436
      class: "row mb-45 text-left"                                                                                     // 437
    }, "\n            ", HTML.DIV({                                                                                    // 438
      class: "col-lg-4 col-md-3"                                                                                       // 439
    }, "\n                ", HTML.H3("Add Some Tags"), "\n                ", HTML.P("By adding some tags, other users can more easily find your post by search. To add a tag, simply write in the text box below, hit enter after every tag."), "\n                ", HTML.INPUT({
      "data-role": "tagsinput",                                                                                        // 441
      class: "announce-tags",                                                                                          // 442
      placeholder: "Write your tags here"                                                                              // 443
    }), "\n            "), "\n            ", HTML.DIV({                                                                // 444
      class: "col-lg-4 col-md-3"                                                                                       // 445
    }, "\n                ", HTML.H3("Select Categories"), "\n                ", HTML.P("By selecting the categories this post belongs to, we can improve the user feed experience. To select click on the box below and pick an option from the drop up box, you can choose multiple if needed."), "\n                ", HTML.SELECT({
      name: "category-selector",                                                                                       // 447
      class: "category-select announcement-category",                                                                  // 448
      multiple: "",                                                                                                    // 449
      style: "width: 100%"                                                                                             // 450
    }), "\n                ", HTML.H3("Is this Club related?"), "\n                ", HTML.P("If this announcement is for student clubs or teams, please select them below."), "\n                ", HTML.SELECT({
      name: "category-selector",                                                                                       // 452
      class: "category-select clubs-category",                                                                         // 453
      multiple: "",                                                                                                    // 454
      style: "width: 100%"                                                                                             // 455
    }), "\n            "), "\n            ", HTML.DIV({                                                                // 456
      class: "col-lg-4 col-md-3"                                                                                       // 457
    }, "\n                ", HTML.H3("Pick a date range"), "\n                ", HTML.P("Use the date selector bellow to select the days you would like this post to be visible to the rest of the users."), "\n                ", HTML.DIV({
      class: "input-group input-daterange"                                                                             // 459
    }, "\n                    ", HTML.INPUT({                                                                          // 460
      type: "text",                                                                                                    // 461
      class: "form-control startDate"                                                                                  // 462
    }), "\n                    ", HTML.DIV({                                                                           // 463
      class: "input-group-addon"                                                                                       // 464
    }, "to"), "\n                    ", HTML.INPUT({                                                                   // 465
      type: "text",                                                                                                    // 466
      class: "form-control endDate"                                                                                    // 467
    }), "\n                "), "\n                ", HTML.H3("Set the visibility"), "\n                ", HTML.P("Choose who this blog post is written for, public means people outside the board will receive access."), "\n                ", HTML.SELECT({
      name: "category-selector",                                                                                       // 469
      class: "visibility-select",                                                                                      // 470
      style: "width: 100%"                                                                                             // 471
    }, "\n                    ", HTML.OPTION({                                                                         // 472
      value: "1"                                                                                                       // 473
    }, "Everyone"), "\n                    ", HTML.OPTION({                                                            // 474
      value: "2"                                                                                                       // 475
    }, "Students Only"), "\n                    ", HTML.OPTION({                                                       // 476
      value: "3"                                                                                                       // 477
    }, "Teachers and Staff Only"), "\n                "), "\n            "), "\n        "), "\n    " ];                // 478
  }), HTML.Raw('\n    <div class="row mb-45">\n        <div class="col-lg-6 col-md-6">\n            <button class="btn btn-login btn-post">POST</button>\n        </div>\n        <div class="col-lg-6 col-md-6">\n            <button class="btn btn-login btn-save">SAVE FOR LATER</button>\n        </div>\n    </div>') ];
}));                                                                                                                   // 480
                                                                                                                       // 481
Template.__checkName("announcementTextInput");                                                                         // 482
Template["announcementTextInput"] = new Template("Template.announcementTextInput", (function() {                       // 483
  var view = this;                                                                                                     // 484
  return HTML.DIV({                                                                                                    // 485
    class: "row mb-45"                                                                                                 // 486
  }, "\n        ", HTML.DIV({                                                                                          // 487
    class: "col-lg-12 col-md-12"                                                                                       // 488
  }, "\n            ", HTML.Raw("<h3>Text Portion</h3>"), "\n            ", HTML.TEXTAREA({                            // 489
    placeholder: "Add your information here! 140 characters max.",                                                     // 490
    class: "announcement-text",                                                                                        // 491
    maxlength: function() {                                                                                            // 492
      return Spacebars.mustache(view.lookup("max"));                                                                   // 493
    },                                                                                                                 // 494
    id: "textContent"                                                                                                  // 495
  }), "\n            ", HTML.P({                                                                                       // 496
    class: "text-left"                                                                                                 // 497
  }, "You have ", HTML.SPAN({                                                                                          // 498
    class: "announcement-counter"                                                                                      // 499
  }, Blaze.View("lookup:max", function() {                                                                             // 500
    return Spacebars.mustache(view.lookup("max"));                                                                     // 501
  })), " characters left."), "\n        "), "\n    ");                                                                 // 502
}));                                                                                                                   // 503
                                                                                                                       // 504
Template.__checkName("announcementImageInput");                                                                        // 505
Template["announcementImageInput"] = new Template("Template.announcementImageInput", (function() {                     // 506
  var view = this;                                                                                                     // 507
  return HTML.DIV({                                                                                                    // 508
    class: "row mb-45"                                                                                                 // 509
  }, "\n        ", HTML.DIV({                                                                                          // 510
    class: "col-lg-12 col-md-12"                                                                                       // 511
  }, "\n            ", HTML.FORM({                                                                                     // 512
    action: "/file-upload",                                                                                            // 513
    class: "dropzone",                                                                                                 // 514
    id: function() {                                                                                                   // 515
      return Spacebars.mustache(view.lookup("id"));                                                                    // 516
    }                                                                                                                  // 517
  }), "\n        "), "\n    ");                                                                                        // 518
}));                                                                                                                   // 519
                                                                                                                       // 520
Template.__checkName("suggestionEditor");                                                                              // 521
Template["suggestionEditor"] = new Template("Template.suggestionEditor", (function() {                                 // 522
  var view = this;                                                                                                     // 523
  return HTML.DIV({                                                                                                    // 524
    class: "container suggestions",                                                                                    // 525
    hidden: ""                                                                                                         // 526
  }, HTML.Raw('\n        <div class="mb-45">\n            <div class="row mb-30 text-center">\n                <div class="col-lg-12 col-md-12 col-sm-12 mb-30">\n                    <h2>Feedback and suggestions,</h2>\n                    <h4>Voice your concerns to the school admins and the developers of uhs.life directly.</h4>\n                </div>\n            </div>\n        </div>\n        '), Blaze._TemplateWith(function() {
    return {                                                                                                           // 528
      id: Spacebars.call("suggestionHeadline")                                                                         // 529
    };                                                                                                                 // 530
  }, function() {                                                                                                      // 531
    return Spacebars.include(view.lookupTemplate("announcementHeadline"));                                             // 532
  }), "\n        ", Blaze._TemplateWith(function() {                                                                   // 533
    return {                                                                                                           // 534
      max: Spacebars.call("1000")                                                                                      // 535
    };                                                                                                                 // 536
  }, function() {                                                                                                      // 537
    return Spacebars.include(view.lookupTemplate("announcementTextInput"));                                            // 538
  }), HTML.Raw("\n        <h3>Add an image if you like!</h3>\n        "), Blaze._TemplateWith(function() {             // 539
    return {                                                                                                           // 540
      id: Spacebars.call("suggestionImage")                                                                            // 541
    };                                                                                                                 // 542
  }, function() {                                                                                                      // 543
    return Spacebars.include(view.lookupTemplate("announcementImageInput"));                                           // 544
  }), HTML.Raw('\n        <div class="row mb-45">\n            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                <button class="btn btn-login btn-post">POST</button>\n            </div>\n        </div>\n    '));
}));                                                                                                                   // 546
                                                                                                                       // 547
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navigation.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/navigation.html                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.navigation.js");                                                                  // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.navigation.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.navigation.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("navigation");                                                                                    // 2
Template["navigation"] = new Template("Template.navigation", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    class: "top-nav"                                                                                                   // 6
  }, "\n        ", HTML.NAV("\n            ", HTML.DIV({                                                               // 7
    class: "nav-extend hidden-print"                                                                                   // 8
  }, "\n                ", HTML.SPAN({                                                                                 // 9
    class: "side-nav-prompt"                                                                                           // 10
  }, "\n                    ", HTML.Raw('<i class="fa fa-bars"></i>'), " ", HTML.SPAN({                                // 11
    class: "hidden-xs hidden-sm"                                                                                       // 12
  }, Blaze.View("lookup:_", function() {                                                                               // 13
    return Spacebars.mustache(view.lookup("_"), "nav.left");                                                           // 14
  })), "\n                "), "\n            "), "\n            ", HTML.DIV({                                          // 15
    class: "nav-hub"                                                                                                   // 16
  }, "\n                ", HTML.Raw('<div class="nav-hub-progress"></div>'), "\n                ", HTML.DIV({          // 17
    class: "nav-title-text text-morph"                                                                                 // 18
  }, HTML.SPAN(Blaze.View("lookup:title", function() {                                                                 // 19
    return Spacebars.mustache(view.lookup("title"));                                                                   // 20
  }))), "\n            "), "\n            ", HTML.DIV({                                                                // 21
    class: "nav-oper hidden-print"                                                                                     // 22
  }, "\n                ", HTML.SPAN({                                                                                 // 23
    class: "top-operation-prompt"                                                                                      // 24
  }, "\n                    ", HTML.Raw('<i class="fa fa-search"></i>'), " ", HTML.SPAN({                              // 25
    class: "hidden-sm hidden-xs"                                                                                       // 26
  }, Blaze.View("lookup:_", function() {                                                                               // 27
    return Spacebars.mustache(view.lookup("_"), "nav.right");                                                          // 28
  })), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV("\n            ", HTML.Raw('<form class="global-search">\n                <input type="text" placeholder="Type something here to search" class="main-search" id="globalSearch" autocomplete="off">\n            </form>'), "\n            ", HTML.DIV({
    class: "search-content"                                                                                            // 30
  }, "\n                ", HTML.DIV({                                                                                  // 31
    class: "container pt-60"                                                                                           // 32
  }, "\n                    ", HTML.DIV({                                                                              // 33
    class: "search-prompt"                                                                                             // 34
  }, "\n                        ", HTML.Raw('<p><i class="fa fa-arrow-up" aria-hidden="true"></i> </p>'), "\n                        ", HTML.P({
    class: "unselectable"                                                                                              // 36
  }, Blaze.View("lookup:_", function() {                                                                               // 37
    return Spacebars.mustache(view.lookup("_"), "nav.search_prompt.init");                                             // 38
  })), "\n                    "), "\n                    ", Blaze.Each(function() {                                    // 39
    return Spacebars.call(view.lookup("searchContent"));                                                               // 40
  }, function() {                                                                                                      // 41
    return [ "\n                        ", HTML.DIV({                                                                  // 42
      class: "col-lg-6 "                                                                                               // 43
    }, "\n                            ", HTML.DIV({                                                                    // 44
      class: "search-result"                                                                                           // 45
    }, "\n                                ", HTML.H2(Blaze.View("lookup:headline", function() {                        // 46
      return Spacebars.mustache(view.lookup("headline"));                                                              // 47
    })), "\n                                ", HTML.P(Blaze.View("lookup:content", function() {                        // 48
      return Spacebars.mustache(view.lookup("content"));                                                               // 49
    })), "\n                                ", HTML.IMG({                                                              // 50
      class: "img-responsive",                                                                                         // 51
      src: function() {                                                                                                // 52
        return Spacebars.mustache(view.lookup("img"));                                                                 // 53
      }                                                                                                                // 54
    }), "\n                            "), "\n                        "), "\n                    " ];                  // 55
  }), "\n                "), "\n            "), "\n        "), "\n    "), "\n\n    ", HTML.DIV({                       // 56
    class: "side-nav"                                                                                                  // 57
  }, "\n        ", HTML.DIV({                                                                                          // 58
    class: "side-nav-header"                                                                                           // 59
  }, "\n            ", HTML.H4("\n                ", Blaze.View("lookup:username", function() {                        // 60
    return Spacebars.mustache(view.lookup("username"));                                                                // 61
  }), "\n            "), "\n            ", HTML.A({                                                                    // 62
    href: "/logout",                                                                                                   // 63
    class: "logout-btn"                                                                                                // 64
  }, Blaze.View("lookup:_", function() {                                                                               // 65
    return Spacebars.mustache(view.lookup("_"), "nav.logout");                                                         // 66
  })), "\n        "), "\n        ", HTML.DIV({                                                                         // 67
    class: "side-nav-body"                                                                                             // 68
  }, "\n            ", Blaze.If(function() {                                                                           // 69
    return Spacebars.call(view.lookup("dash"));                                                                        // 70
  }, function() {                                                                                                      // 71
    return [ "\n                ", HTML.A({                                                                            // 72
      href: "/dashboard"                                                                                               // 73
    }, HTML.I({                                                                                                        // 74
      class: "fa fa-home"                                                                                              // 75
    }), " Home"), "\n                ", HTML.A({                                                                       // 76
      href: "/dashboard/announcements"                                                                                 // 77
    }, HTML.I({                                                                                                        // 78
      class: "fa fa-bullhorn"                                                                                          // 79
    }), " Posts"), "\n                ", HTML.A({                                                                      // 80
      href: "/dashboard/suggestions"                                                                                   // 81
    }, HTML.I({                                                                                                        // 82
      class: "fa fa-pencil-square-o"                                                                                   // 83
    }), " Suggestions"), "\n                ", HTML.A({                                                                // 84
      href: "/dashboard/categories"                                                                                    // 85
    }, HTML.I({                                                                                                        // 86
      class: "fa fa-list"                                                                                              // 87
    }), " Manage Categories"), "\n                ", HTML.A({                                                          // 88
      href: "/dashboard/organizations"                                                                                 // 89
    }, HTML.I({                                                                                                        // 90
      class: "fa fa-list"                                                                                              // 91
    }), " Manage Organizations"), "\n                ", HTML.A({                                                       // 92
      href: "/dashboard/users"                                                                                         // 93
    }, HTML.I({                                                                                                        // 94
      class: "fa fa-group"                                                                                             // 95
    }), " Manage Users"), "\n                ", HTML.A({                                                               // 96
      href: ""                                                                                                         // 97
    }, HTML.I({                                                                                                        // 98
      class: "fa fa-newspaper-o"                                                                                       // 99
    }), " Newsletters"), "\n                ", HTML.A({                                                                // 100
      href: ""                                                                                                         // 101
    }, HTML.I({                                                                                                        // 102
      class: "fa fa-gear"                                                                                              // 103
    }), " Settings"), "\n            " ];                                                                              // 104
  }, function() {                                                                                                      // 105
    return [ "\n                ", HTML.A({                                                                            // 106
      href: "/"                                                                                                        // 107
    }, Blaze.View("lookup:_", function() {                                                                             // 108
      return Spacebars.mustache(view.lookup("_"), "nav.side_items.stream");                                            // 109
    })), "\n                ", HTML.A({                                                                                // 110
      href: "/stories"                                                                                                 // 111
    }, Blaze.View("lookup:_", function() {                                                                             // 112
      return Spacebars.mustache(view.lookup("_"), "nav.side_items.stories");                                           // 113
    })), "\n                ", Blaze.If(function() {                                                                   // 114
      return Spacebars.call(view.lookup("isStudent"));                                                                 // 115
    }, function() {                                                                                                    // 116
      return [ "\n                    ", HTML.A({                                                                      // 117
        href: "",                                                                                                      // 118
        id: "academics"                                                                                                // 119
      }, HTML.DIV({                                                                                                    // 120
        class: "expand-text"                                                                                           // 121
      }, Blaze.View("lookup:_", function() {                                                                           // 122
        return Spacebars.mustache(view.lookup("_"), "nav.side_items.marks");                                           // 123
      })), HTML.I({                                                                                                    // 124
        class: "fa fa-times academics-icon"                                                                            // 125
      })), "\n                    ", HTML.UL({                                                                         // 126
        class: "course-list"                                                                                           // 127
      }, "\n                        ", Blaze.Each(function() {                                                         // 128
        return Spacebars.call(view.lookup("courses"));                                                                 // 129
      }, function() {                                                                                                  // 130
        return [ "\n                            ", HTML.LI(HTML.A({                                                    // 131
          href: function() {                                                                                           // 132
            return [ "/course/", Spacebars.mustache(view.lookup("subject_id")) ];                                      // 133
          },                                                                                                           // 134
          class: "course-link"                                                                                         // 135
        }, Blaze.View("lookup:course", function() {                                                                    // 136
          return Spacebars.mustache(view.lookup("course"));                                                            // 137
        }), HTML.I({                                                                                                   // 138
          class: function() {                                                                                          // 139
            return Spacebars.mustache(view.lookup("state"));                                                           // 140
          }                                                                                                            // 141
        }, Blaze.View("lookup:mark", function() {                                                                      // 142
          return Spacebars.mustache(view.lookup("mark"));                                                              // 143
        })))), "\n                        " ];                                                                         // 144
      }), "\n                    "), "\n                    ", HTML.A({                                                // 145
        href: ""                                                                                                       // 146
      }, Blaze.View("lookup:_", function() {                                                                           // 147
        return Spacebars.mustache(view.lookup("_"), "nav.side_items.suggest");                                         // 148
      })), "\n                " ];                                                                                     // 149
    }), "\n                ", Blaze.If(function() {                                                                    // 150
      return Spacebars.call(view.lookup("isAdmin"));                                                                   // 151
    }, function() {                                                                                                    // 152
      return [ "\n                    ", HTML.A({                                                                      // 153
        href: "/dashboard"                                                                                             // 154
      }, Blaze.View("lookup:_", function() {                                                                           // 155
        return Spacebars.mustache(view.lookup("_"), "nav.side_items.admin");                                           // 156
      })), "\n                " ];                                                                                     // 157
    }), "\n            " ];                                                                                            // 158
  }), "\n        "), "\n    "), HTML.Raw('\n    <div class="nav-overlay"></div>') ];                                   // 159
}));                                                                                                                   // 160
                                                                                                                       // 161
Template.__checkName("teachAssistPass");                                                                               // 162
Template["teachAssistPass"] = new Template("Template.teachAssistPass", (function() {                                   // 163
  var view = this;                                                                                                     // 164
  return HTML.DIV({                                                                                                    // 165
    class: "modal fade"                                                                                                // 166
  }, "\n        ", HTML.DIV({                                                                                          // 167
    class: "modal-dialog"                                                                                              // 168
  }, "\n            ", HTML.DIV({                                                                                      // 169
    class: "modal-content"                                                                                             // 170
  }, "\n                ", HTML.DIV({                                                                                  // 171
    class: "modal-header"                                                                                              // 172
  }, "\n                    ", HTML.H4({                                                                               // 173
    class: "modal-title"                                                                                               // 174
  }, Blaze.View("lookup:_", function() {                                                                               // 175
    return Spacebars.mustache(view.lookup("_"), "nav.teach.login");                                                    // 176
  }), " ", Blaze.View("lookup:student_id", function() {                                                                // 177
    return Spacebars.mustache(view.lookup("student_id"));                                                              // 178
  })), "\n                "), "\n                ", HTML.DIV({                                                         // 179
    class: "modal-body"                                                                                                // 180
  }, "\n                    ", HTML.FORM({                                                                             // 181
    id: "reLoginForm"                                                                                                  // 182
  }, "\n                        ", HTML.Raw('<div class="form-group">\n                            <input type="password" aria-describedby="TeachAssistPassword" placeholder="Password" id="reLoginPass">\n                        </div>'), "\n                        ", HTML.BUTTON({
    type: "submit",                                                                                                    // 184
    class: "btn btn-primary btn-wide"                                                                                  // 185
  }, Blaze.View("lookup:_", function() {                                                                               // 186
    return Spacebars.mustache(view.lookup("_"), "nav.teach.submit_login");                                             // 187
  })), "\n                    "), "\n                "), "\n\n                ", HTML.DIV({                            // 188
    class: "modal-footer"                                                                                              // 189
  }, "\n                    ", HTML.BUTTON({                                                                           // 190
    type: "button",                                                                                                    // 191
    class: "btn btn-default",                                                                                          // 192
    "data-dismiss": "modal"                                                                                            // 193
  }, Blaze.View("lookup:_", function() {                                                                               // 194
    return Spacebars.mustache(view.lookup("_"), "nav.close");                                                          // 195
  })), "\n                "), "\n\n            "), "\n        "), "\n    ");                                           // 196
}));                                                                                                                   // 197
                                                                                                                       // 198
Template.__checkName("teachAssistConnect");                                                                            // 199
Template["teachAssistConnect"] = new Template("Template.teachAssistConnect", (function() {                             // 200
  var view = this;                                                                                                     // 201
  return HTML.DIV({                                                                                                    // 202
    class: "modal fade"                                                                                                // 203
  }, "\n        ", HTML.DIV({                                                                                          // 204
    class: "modal-dialog"                                                                                              // 205
  }, "\n            ", HTML.DIV({                                                                                      // 206
    class: "modal-content"                                                                                             // 207
  }, "\n                ", HTML.DIV({                                                                                  // 208
    class: "modal-header"                                                                                              // 209
  }, "\n                    ", HTML.H4({                                                                               // 210
    class: "modal-title"                                                                                               // 211
  }, Blaze.View("lookup:_", function() {                                                                               // 212
    return Spacebars.mustache(view.lookup("_"), "nav.teach.connect");                                                  // 213
  })), "\n                "), "\n                ", HTML.DIV({                                                         // 214
    class: "modal-body"                                                                                                // 215
  }, "\n                    ", HTML.FORM({                                                                             // 216
    id: "connectLoginForm"                                                                                             // 217
  }, "\n                        ", HTML.Raw('<div class="form-group">\n                            <input type="text" aria-describedby="TeachAssistStudentNumber" placeholder="Student Number" id="connectNum">\n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group">\n                            <input type="password" aria-describedby="TeachAssistPassword" placeholder="Password" id="connectPass">\n                        </div>'), "\n                        ", HTML.BUTTON({
    type: "submit",                                                                                                    // 219
    class: "btn btn-primary btn-wide"                                                                                  // 220
  }, Blaze.View("lookup:_", function() {                                                                               // 221
    return Spacebars.mustache(view.lookup("_"), "nav.teach.submit_login");                                             // 222
  })), "\n                    "), "\n                "), "\n\n                ", HTML.DIV({                            // 223
    class: "modal-footer"                                                                                              // 224
  }, "\n                    ", HTML.BUTTON({                                                                           // 225
    type: "button",                                                                                                    // 226
    class: "btn btn-default",                                                                                          // 227
    "data-dismiss": "modal"                                                                                            // 228
  }, Blaze.View("lookup:_", function() {                                                                               // 229
    return Spacebars.mustache(view.lookup("_"), "nav.close");                                                          // 230
  })), "\n                "), "\n\n            "), "\n        "), "\n    ");                                           // 231
}));                                                                                                                   // 232
                                                                                                                       // 233
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"editor.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/editor.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Images = void 0;                                                                                                   // 1
module.watch(require("../../api/images/images.js"), {                                                                  // 1
    Images: function (v) {                                                                                             // 1
        Images = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
module.watch(require("./editor.html"));                                                                                // 1
var operationStack = ['.editor-open'];                                                                                 // 7
var hasUnsplash = false;                                                                                               // 8
var originalTitle = "";                                                                                                // 9
var allPosts = null;                                                                                                   // 10
Template.allPosts.onRendered(function () {                                                                             // 11
    Tracker.autorun(function () {                                                                                      // 12
        allPosts = Meteor.subscribeWithPagination('postsByUser', 10);                                                  // 13
        Meteor.subscribe('images');                                                                                    // 14
    });                                                                                                                // 15
});                                                                                                                    // 16
Template.blogDraft.onRendered(function () {                                                                            // 18
    Tracker.autorun(function () {                                                                                      // 19
        Meteor.subscribeWithPagination('drafts', 10);                                                                  // 20
        Meteor.subscribe('images');                                                                                    // 21
    });                                                                                                                // 22
});                                                                                                                    // 23
Template.blogEditor.onRendered(function () {                                                                           // 25
    Tracker.autorun(function () {                                                                                      // 26
        var categorySub = Meteor.subscribe('blogCategories');                                                          // 27
        var courseSub = Meteor.subscribe('allCourses', 1000);                                                          // 28
        var clubSub = Meteor.subscribe('allClubs', 1000);                                                              // 29
                                                                                                                       //
        if (categorySub.ready()) {                                                                                     // 30
            var categories = BlogCategories.find({});                                                                  // 31
            categories.observeChanges({                                                                                // 32
                added: function (id, fields) {                                                                         // 33
                    var newCat = new Option(fields.name, fields.name);                                                 // 34
                    $('#blogCategorySelect').append(newCat);                                                           // 35
                }                                                                                                      // 36
            });                                                                                                        // 32
        }                                                                                                              // 38
                                                                                                                       //
        if (courseSub.ready() && clubSub.ready()) {                                                                    // 39
            var courses = Courses.find({});                                                                            // 40
            var clubs = Clubs.find({});                                                                                // 41
            courses.observeChanges({                                                                                   // 42
                added: function (id, fields) {                                                                         // 43
                    var newCat = new Option(fields.name + " - " + fields.code, fields.code);                           // 44
                    $('#blogOrganizationSelect').append(newCat);                                                       // 45
                }                                                                                                      // 46
            });                                                                                                        // 42
            clubs.observeChanges({                                                                                     // 48
                added: function (id, fields) {                                                                         // 49
                    var newCat = new Option(fields.name, fields.code);                                                 // 50
                    $('#blogOrganizationSelect').append(newCat);                                                       // 51
                }                                                                                                      // 52
            });                                                                                                        // 48
        }                                                                                                              // 54
    });                                                                                                                // 55
    $(document).ready(function () {                                                                                    // 56
        $('#blogCategorySelect').select2({                                                                             // 57
            placeholder: "Click to select matching categories",                                                        // 58
            allowClear: true                                                                                           // 59
        });                                                                                                            // 57
        $('#blogOrganizationSelect').select2({                                                                         // 61
            placeholder: "Click to select matching categories",                                                        // 62
            allowClear: true                                                                                           // 63
        }); // Append it to the select                                                                                 // 61
                                                                                                                       //
        $('.visibility-select').select2({                                                                              // 66
            placeholder: "Click to select the scope of this post"                                                      // 67
        });                                                                                                            // 66
        $('.input-date').datepicker({                                                                                  // 69
            startDate: '+1d'                                                                                           // 70
        });                                                                                                            // 69
        var $editor = $('.editable');                                                                                  // 72
        $editor.froalaEditor({                                                                                         // 73
            scaytAutoload: false,                                                                                      // 74
            //This setting can be completely ignored.                                                                  // 75
            scaytOptions: {                                                                                            // 76
                enableOnTouchDevices: false,                                                                           // 77
                localization: 'en',                                                                                    // 78
                extraModules: 'ui',                                                                                    // 79
                DefaultSelection: 'American English',                                                                  // 80
                spellcheckLang: 'en_US',                                                                               // 81
                contextMenuSections: 'suggest|moresuggest',                                                            // 82
                serviceProtocol: 'https',                                                                              // 83
                servicePort: '80',                                                                                     // 84
                serviceHost: 'svc.webspellchecker.net',                                                                // 85
                servicePath: 'spellcheck/script/ssrv.cgi',                                                             // 86
                contextMenuForMisspelledOnly: true,                                                                    // 87
                scriptPath: 'https://demo.webspellchecker.net/froala/customscayt.js'                                   // 88
            },                                                                                                         // 76
            //ignore end                                                                                               // 90
            toolbarButtons: ['fullscreen', '|', 'paragraphFormat', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertFile', 'insertVideo', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', '|', 'print', 'help', '|', 'undo', 'redo'],
            toolbarButtonsSM: ['fullscreen', '|', 'bold', 'italic', 'underline', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertFile', 'insertVideo', 'insertTable', '|', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', '|', 'undo', 'redo'],
            placeholderText: 'Tell your story here...',                                                                // 93
            tableStyles: {                                                                                             // 94
                class1: 'table'                                                                                        // 95
            },                                                                                                         // 94
            paragraphFormat: {                                                                                         // 97
                N: 'Normal',                                                                                           // 98
                H2: 'Title',                                                                                           // 99
                PRE: 'Code'                                                                                            // 100
            },                                                                                                         // 97
            fileAllowedTypes: ['application/pdf', 'application/msword']                                                // 102
        });                                                                                                            // 73
        $editor.on('froalaEditor.image.beforeUpload', function (e, editor, images) {                                   // 104
            var self = $(this);                                                                                        // 105
            Images.insert(images[0], function (err, fileObj) {                                                         // 107
                //console.log("editor ",  editor);                                                                     // 108
                //console.log("after insert:", fileObj._id);                                                           // 109
                Tracker.autorun(function (c) {                                                                         // 110
                    fileObj = Images.findOne(fileObj._id);                                                             // 111
                    var url = fileObj.url();                                                                           // 112
                                                                                                                       //
                    if (url) {                                                                                         // 113
                        var imgList = $('img.fr-fic');                                                                 // 114
                        self.froalaEditor('image.insert', url, true);                                                  // 115
                        imgList[imgList.length - 1].remove();                                                          // 116
                        return {                                                                                       // 117
                            link: url                                                                                  // 118
                        };                                                                                             // 117
                    }                                                                                                  // 120
                });                                                                                                    // 121
            });                                                                                                        // 122
        });                                                                                                            // 123
                                                                                                                       //
        if (Meteor.isClient) {                                                                                         // 124
            Dropzone.autoDiscover = false;                                                                             // 125
            $(".tags").tagsinput('items');                                                                             // 126
            var blogDrop = initDropZone('dropzone', {                                                                  // 127
                number: 1,                                                                                             // 128
                size: 8,                                                                                               // 129
                message: "Drop an image here to be the featured image, or click to select an image using the browser."
            });                                                                                                        // 127
        }                                                                                                              // 132
    });                                                                                                                // 133
});                                                                                                                    // 134
Template.announcementEditor.onRendered(function () {                                                                   // 136
    Tracker.autorun(function () {                                                                                      // 137
        var categorySub = Meteor.subscribe('categories');                                                              // 138
        var clubSub = Meteor.subscribe('allClubs', 100);                                                               // 139
                                                                                                                       //
        if (categorySub.ready()) {                                                                                     // 140
            var categories = Categories.find({});                                                                      // 141
            categories.observeChanges({                                                                                // 142
                added: function (id, fields) {                                                                         // 143
                    var newCat = new Option(fields.name, fields.name);                                                 // 144
                    $('.announcement-category').append(newCat);                                                        // 145
                }                                                                                                      // 146
            });                                                                                                        // 142
        }                                                                                                              // 148
                                                                                                                       //
        if (clubSub.ready()) {                                                                                         // 149
            var clubs = Clubs.find({});                                                                                // 150
            clubs.observeChanges({                                                                                     // 151
                added: function (id, fields) {                                                                         // 152
                    var newCat = new Option(fields.name, fields.name);                                                 // 153
                    $('.clubs-category').append(newCat);                                                               // 154
                }                                                                                                      // 155
            });                                                                                                        // 151
        }                                                                                                              // 157
    });                                                                                                                // 158
    $(document).ready(function () {                                                                                    // 159
        $('.category-select').select2({                                                                                // 160
            placeholder: "Click to select matching categories",                                                        // 161
            allowClear: true                                                                                           // 162
        });                                                                                                            // 160
        $('.input-daterange').datepicker({                                                                             // 164
            startDate: '+1d'                                                                                           // 165
        });                                                                                                            // 164
                                                                                                                       //
        if (Meteor.isClient) {                                                                                         // 167
            var arrayOfImageIds = [];                                                                                  // 168
            Dropzone.autoDiscover = false;                                                                             // 169
            $(".tags").tagsinput('items');                                                                             // 170
            var announcementDrop = initDropZone("announcementImage", {                                                 // 171
                number: 1,                                                                                             // 172
                size: 8,                                                                                               // 173
                message: "Drop your poster here, or click to select an image using the browser."                       // 174
            });                                                                                                        // 171
            var announcementImageTwo = initDropZone("announcementImageTwo", {                                          // 176
                number: 1,                                                                                             // 177
                size: 8,                                                                                               // 178
                message: "Drop your poster here, or click to select an image using the browser."                       // 179
            });                                                                                                        // 176
        }                                                                                                              // 181
    });                                                                                                                // 183
});                                                                                                                    // 184
Template.suggestionEditor.onRendered(function () {                                                                     // 186
    var suggestionDrop = initDropZone('suggestionImage', {                                                             // 187
        number: 1,                                                                                                     // 188
        size: 8                                                                                                        // 189
    });                                                                                                                // 187
});                                                                                                                    // 191
Template.announcementOptions.onRendered(function () {                                                                  // 193
    this.$(".announce-tags").tagsinput('items');                                                                       // 194
});                                                                                                                    // 195
Template.editor.helpers({                                                                                              // 197
    'canEdit': function () {                                                                                           // 198
        return Roles.userIsInRole(Meteor.userId(), ['teacher', 'blogEditor', 'announcementEditor', 'admin']);          // 199
    },                                                                                                                 // 200
    'canWriteAnnounce': function () {                                                                                  // 201
        return Roles.userIsInRole(Meteor.userId(), ['teacher', 'admin', 'announcementEditor']);                        // 202
    },                                                                                                                 // 203
    'canWriteBlog': function () {                                                                                      // 204
        return Roles.userIsInRole(Meteor.userId(), ['teacher', 'admin', 'blogEditor']);                                // 205
    }                                                                                                                  // 206
});                                                                                                                    // 197
Template.blogDraft.helpers({                                                                                           // 209
    'drafts': function () {                                                                                            // 210
        return Drafts.find({});                                                                                        // 211
    },                                                                                                                 // 212
    'draftedDate': function () {                                                                                       // 213
        return moment(this.draftedDate).format('MMMM Do YYYY');                                                        // 214
    },                                                                                                                 // 215
    'imageLink': function () {                                                                                         // 216
        if (this.unsplash) {                                                                                           // 217
            return this.unsplash.urls.full;                                                                            // 218
        } else {                                                                                                       // 219
            try {                                                                                                      // 220
                return Images.findOne({                                                                                // 221
                    _id: this.imgId                                                                                    // 221
                }).url();                                                                                              // 221
            } catch (e) {//console.log('error getting photo')                                                          // 222
            }                                                                                                          // 224
        }                                                                                                              // 225
    },                                                                                                                 // 226
    'isBlog': function () {                                                                                            // 227
        return this.type === 'blog';                                                                                   // 228
    }                                                                                                                  // 229
});                                                                                                                    // 209
Template.allPosts.helpers({                                                                                            // 232
    'post': function () {                                                                                              // 233
        return Posts.find({                                                                                            // 234
            'author': Meteor.userId()                                                                                  // 235
        });                                                                                                            // 234
    },                                                                                                                 // 237
    'draftedDate': function () {                                                                                       // 238
        return moment(this.draftedDate).format('MMMM Do YYYY');                                                        // 239
    },                                                                                                                 // 240
    'imageLink': function () {                                                                                         // 241
        if (this.unsplash) {                                                                                           // 242
            return this.unsplash.urls.full;                                                                            // 243
        } else {                                                                                                       // 244
            try {                                                                                                      // 245
                return Images.findOne({                                                                                // 246
                    _id: this.imgId                                                                                    // 246
                }).url();                                                                                              // 246
            } catch (e) {//console.log('error getting photo')                                                          // 247
            }                                                                                                          // 249
        }                                                                                                              // 250
    },                                                                                                                 // 251
    'isBlog': function () {                                                                                            // 252
        return this.type === 'blog';                                                                                   // 253
    },                                                                                                                 // 254
    'stage': function () {                                                                                             // 255
        return this.meta.screeningStage;                                                                               // 256
    },                                                                                                                 // 257
    'stageCaption': function () {                                                                                      // 258
        var text = 'Post Submitted';                                                                                   // 259
                                                                                                                       //
        if (this.meta.screeningStage === 3) {                                                                          // 260
            text = "Post Approved";                                                                                    // 261
        } else if (this.meta.screeningStage === -1) {                                                                  // 262
            text = "Post Rejected";                                                                                    // 263
        }                                                                                                              // 264
                                                                                                                       //
        return text;                                                                                                   // 265
    }                                                                                                                  // 266
}); /* Events */                                                                                                       // 232
Template.editor.events({                                                                                               // 271
    'click #openEditor': function () {                                                                                 // 272
        originalTitle = Session.get('DocumentTitle');                                                                  // 273
        Session.set('DocumentTitle', 'Composer | uhs.life');                                                           // 274
        swapElements('.editor-open', '.editor-main');                                                                  // 276
                                                                                                                       //
        if (operationStack.length === 1) {                                                                             // 277
            operationStack.push('.blog-intro');                                                                        // 278
        }                                                                                                              // 279
                                                                                                                       //
        $('html, body').css({                                                                                          // 280
            overflow: 'hidden'                                                                                         // 281
        }); // Disables the Scrolling                                                                                  // 280
    },                                                                                                                 // 283
    'click #startNewDraft': function () {                                                                              // 284
        swapElements('.blog-intro', '.post-type');                                                                     // 285
        operationStack.push('.post-type');                                                                             // 286
    },                                                                                                                 // 287
    'click #checkDrafts': function () {                                                                                // 288
        swapElements('.blog-intro', '.blog-drafts');                                                                   // 289
        operationStack.push('.blog-drafts');                                                                           // 290
    },                                                                                                                 // 291
    'click #checkAll': function () {                                                                                   // 292
        swapElements('.blog-intro', '.all-posts');                                                                     // 293
        operationStack.push('.all-posts');                                                                             // 294
    },                                                                                                                 // 295
    'click #startBlog': function () {                                                                                  // 296
        swapElements('.post-type', '.blog-editor');                                                                    // 297
        operationStack.push('.blog-editor');                                                                           // 298
        Session.set('announcementType', 'blog');                                                                       // 299
    },                                                                                                                 // 300
    'click #startAnnouncement': function () {                                                                          // 301
        swapElements('.post-type', '.announcement-menu');                                                              // 302
        operationStack.push('.announcement-menu');                                                                     // 303
    },                                                                                                                 // 304
    'click #startSuggestion': function () {                                                                            // 305
        swapElements('.post-type', '.suggestions');                                                                    // 306
        operationStack.push('.suggestions');                                                                           // 307
        Session.set('announcementType', 'suggestion');                                                                 // 308
    },                                                                                                                 // 309
    'click .editor-close': function () {                                                                               // 310
        Session.set('DocumentTitle', originalTitle);                                                                   // 311
        swapElements('.editor-main', '.editor-open');                                                                  // 312
        $('html, body').css({                                                                                          // 313
            overflow: 'visible'                                                                                        // 314
        }); // Disables the Scrolling                                                                                  // 313
    },                                                                                                                 // 316
    'click .editor-back': function () {                                                                                // 317
        if (operationStack.length - 2 === 0) {                                                                         // 318
            Session.set('DocumentTitle', originalTitle);                                                               // 319
            swapElements('.editor-main', '.editor-open');                                                              // 320
            $('html, body').css({                                                                                      // 321
                overflow: 'visible'                                                                                    // 322
            }); // Enables the Scrolling                                                                               // 321
        } else {                                                                                                       // 324
            swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);        // 325
        }                                                                                                              // 326
                                                                                                                       //
        operationStack.pop();                                                                                          // 327
    },                                                                                                                 // 328
    'click #imageOnly': function () {                                                                                  // 329
        swapElements('.announcement-menu', '.image-only');                                                             // 330
        operationStack.push('.image-only');                                                                            // 331
        Session.set('announcementType', 'imageOnly');                                                                  // 332
    },                                                                                                                 // 333
    'click #textOnly': function () {                                                                                   // 334
        swapElements('.announcement-menu', '.text-only');                                                              // 335
        operationStack.push('.text-only');                                                                             // 336
        Session.set('announcementType', 'textOnly');                                                                   // 337
    },                                                                                                                 // 338
    'click #textAndImage': function () {                                                                               // 339
        swapElements('.announcement-menu', '.text-and-image');                                                         // 340
        operationStack.push('.text-and-image');                                                                        // 341
        Session.set('announcementType', 'textAndImage');                                                               // 342
    },                                                                                                                 // 343
    'input .announcement-text': function (evt) {                                                                       // 344
        var maxlength = $(evt.target).attr("maxlength");                                                               // 345
        var length = $(evt.target).val().length;                                                                       // 346
                                                                                                                       //
        if (length >= maxlength) {                                                                                     // 348
            console.log("You have reached the maximum number of characters.");                                         // 349
            $('.announcement-counter').text(0);                                                                        // 350
        } else {                                                                                                       // 351
            $('.announcement-counter').text(maxlength - length);                                                       // 352
        }                                                                                                              // 353
    },                                                                                                                 // 354
    'click .priority-toggle': function (evt) {                                                                         // 355
        var priority = $(evt.target).attr('data-priority');                                                            // 356
        $('.is-checked').removeClass('is-checked');                                                                    // 357
        $(evt.target).addClass('is-checked');                                                                          // 358
        Session.set('priority', priority);                                                                             // 359
    }                                                                                                                  // 360
});                                                                                                                    // 271
Template.allPosts.events({                                                                                             // 362
    'click .load-more-posts': function (evt) {                                                                         // 363
        evt.preventDefault();                                                                                          // 364
        allPosts.loadNextPage();                                                                                       // 365
    },                                                                                                                 // 366
    'click .draft-item': function (evt) {                                                                              // 367
        if (!$(evt.target).hasClass('btn-delete-post') && !$(evt.target).hasClass('btn-republish-post')) {             // 368
            var obj = $(evt.target).closest($('.draft-item'));                                                         // 369
            var id = obj.attr('id');                                                                                   // 370
            setEditorContent(Posts.findOne({                                                                           // 371
                _id: id                                                                                                // 371
            }));                                                                                                       // 371
        }                                                                                                              // 372
    },                                                                                                                 // 373
    'click .btn-delete-post': function (evt) {                                                                         // 374
        evt.preventDefault();                                                                                          // 375
        var obj = $(evt.target).closest($('.draft-item'));                                                             // 376
        var id = obj.attr('id');                                                                                       // 377
        alertConfirm('Are you sure', 'This action cannot be reverted, if you don\'t want this post to show up in the list, we recommend you archive it.', function (accepted) {
            if (accepted) {                                                                                            // 379
                Posts.remove({                                                                                         // 380
                    _id: id                                                                                            // 380
                }, function (err) {                                                                                    // 380
                    if (err) {                                                                                         // 381
                        alertError("Error Removing Post", "Please try again later.\n" + err.message);                  // 382
                    } else {                                                                                           // 383
                        alertSuccess("Successfully Removed Post", "");                                                 // 384
                    }                                                                                                  // 385
                });                                                                                                    // 386
            }                                                                                                          // 387
        });                                                                                                            // 388
    }                                                                                                                  // 389
});                                                                                                                    // 362
Template.blogEditor.events({                                                                                           // 391
    'click .publish': function (event, template) {                                                                     // 392
        var json = constructBlogJson();                                                                                // 393
        Meteor.call('posts.postBlog', json, function (err) {                                                           // 395
            if (err) {                                                                                                 // 396
                alertError('Post Failed!', err.message);                                                               // 397
            } else {                                                                                                   // 398
                alertSuccess('Success!', 'The post has been submitted.');                                              // 399
                Drafts.remove({                                                                                        // 400
                    _id: Session.get('draftEditItem')                                                                  // 400
                });                                                                                                    // 400
                Session.set('draftEditItem', null);                                                                    // 401
                wipeEditor('blog'); // Go back                                                                         // 402
                                                                                                                       //
                if (operationStack.length - 2 === 0) {                                                                 // 404
                    swapElements('.editor-main', '.editor-open');                                                      // 405
                    $('html, body').css({                                                                              // 406
                        overflow: 'visible'                                                                            // 407
                    }); // Enables the Scrolling                                                                       // 406
                } else {                                                                                               // 409
                    swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                }                                                                                                      // 411
                                                                                                                       //
                operationStack.pop();                                                                                  // 412
            }                                                                                                          // 413
        });                                                                                                            // 414
    },                                                                                                                 // 415
    'click .save-draft': function () {                                                                                 // 416
        var json = constructBlogJson();                                                                                // 417
                                                                                                                       //
        if (Session.get('draftEditItem')) {                                                                            // 418
            Drafts.update({                                                                                            // 419
                _id: Session.get('draftEditItem')                                                                      // 419
            }, json, function (err) {                                                                                  // 419
                if (err) {                                                                                             // 420
                    alertError('Saving Draft Failed!', err.message);                                                   // 421
                } else {                                                                                               // 422
                    alertSuccess("Saved!", "");                                                                        // 423
                }                                                                                                      // 424
            });                                                                                                        // 425
        } else {                                                                                                       // 426
            Meteor.call('drafts.postDraftBlog', json, function (err) {                                                 // 427
                if (err) {                                                                                             // 428
                    alertError('Saving Draft Failed!', err.message);                                                   // 429
                } else {                                                                                               // 430
                    alertSuccess('Success!', 'The draft has been saved.');                                             // 431
                }                                                                                                      // 432
            });                                                                                                        // 433
        }                                                                                                              // 434
    },                                                                                                                 // 435
    'click #getFeaturedUnsplash': function (evt, template) {                                                           // 436
        $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");                      // 437
        Meteor.call('setupUnsplash', function (err) {                                                                  // 438
            if (err) {                                                                                                 // 439
                console.log(err);                                                                                      // 440
                hasUnsplash = false;                                                                                   // 441
            } else {                                                                                                   // 442
                var list = getKeyWord($('.editable').froalaEditor('html.get'));                                        // 443
                var agent = 0;                                                                                         // 444
                                                                                                                       //
                var getImg = function () {                                                                             // 445
                    Meteor.call('searchKeyword', list[agent], function (err, data) {                                   // 446
                        if (err) {                                                                                     // 447
                            console.log(err);                                                                          // 448
                            $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one.");
                            hasUnsplash = false;                                                                       // 450
                        } else {                                                                                       // 451
                            console.log(data);                                                                         // 452
                                                                                                                       //
                            if (data.results.length <= 0) {                                                            // 453
                                agent++;                                                                               // 454
                                                                                                                       //
                                if (agent <= list.length) {                                                            // 455
                                    console.log('no image found');                                                     // 456
                                    getImg();                                                                          // 457
                                } else {                                                                               // 458
                                    $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");
                                    Meteor.call('getRandomPhoto', function (err, data) {                               // 460
                                        if (err) {                                                                     // 461
                                            console.log(err);                                                          // 462
                                            $('.unsplash-container').replaceWith("<form action='/file-upload' class='dropzone' id='dropzone'></form>");
                                            var blogDrop = initDropZone('dropzone', {                                  // 464
                                                number: 1,                                                             // 465
                                                size: 8,                                                               // 466
                                                message: "Drop an image here to be the featured image, or click to select an image using the browser."
                                            });                                                                        // 464
                                            $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one instead.");
                                            hasUnsplash = false;                                                       // 470
                                        } else {                                                                       // 471
                                            console.log(data);                                                         // 472
                                            Session.set('unsplash_img', data.id);                                      // 473
                                            Session.set('unsplashData', data);                                         // 474
                                            $('#dropzone').replaceWith("<img src='" + data.urls.regular + "' class='img-responsive unsplash-container'/>");
                                            $('#unsplashPrompt').html("Here you go! This image is by <a href='" + data.user.links.html + "?utm_source=uhs.life&utm_medium=referral&utm_campaign=api-credit'>" + data.user.name + "</a> from " + data.user.location + " via <b>Unsplash</b>. <br><br> Want a differnt one? <a href='' id='newUnsplash'>Click Here</a>. Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
                                        }                                                                              // 477
                                    });                                                                                // 478
                                }                                                                                      // 479
                            } else {                                                                                   // 480
                                var num = getRandomInt(0, data.results.length - 1);                                    // 481
                                Session.set('unsplash_img', data.results[num].id);                                     // 482
                                Session.set('unsplashData', data.results[num]);                                        // 483
                                hasUnsplash = true;                                                                    // 484
                                $('#dropzone').replaceWith("<img src='" + data.results[num].urls.regular + "' class='img-responsive unsplash-container'/>");
                                $('#unsplashPrompt').html("Here you go! This image is by <a href='" + data.results[num].user.links.html + "?utm_source=uhs.life&utm_medium=referral&utm_campaign=api-credit'>" + data.results[num].user.name + "</a> from " + data.results[num].user.location + " via <b>Unsplash</b>. <br><br> This will be your featured image, if you want another one <a href='' id='newUnsplash'>Click Here</a> Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
                            }                                                                                          // 487
                        }                                                                                              // 489
                    });                                                                                                // 490
                };                                                                                                     // 491
                                                                                                                       //
                getImg();                                                                                              // 492
            }                                                                                                          // 493
        });                                                                                                            // 494
    },                                                                                                                 // 495
    'click #newUnsplash': function () {                                                                                // 496
        $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");                      // 497
        Meteor.call('getRandomPhoto', function (err, data) {                                                           // 498
            if (err) {                                                                                                 // 499
                console.log(err);                                                                                      // 500
                $('.unsplash-container').replaceWith("<form action='/file-upload' class='dropzone' id='dropzone'></form>");
                var blogDrop = initDropZone('dropzone', {                                                              // 502
                    number: 1,                                                                                         // 503
                    size: 8,                                                                                           // 504
                    message: "Drop an image here to be the featured image, or click to select an image using the browser."
                });                                                                                                    // 502
                $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one instead.");  // 507
                hasUnsplash = false;                                                                                   // 508
            } else {                                                                                                   // 509
                console.log(data);                                                                                     // 510
                Session.set('unsplash_img', data.id);                                                                  // 511
                Session.set('unsplashData', data);                                                                     // 512
                $('.unsplash-container').replaceWith("<img src='" + data.urls.regular + "' class='img-responsive unsplash-container'/>");
                $('#unsplashPrompt').html("Here you go! This image is by <a href='" + data.user.links.html + "?utm_source=uhs.life&utm_medium=referral&utm_campaign=api-credit'>" + data.user.name + "</a> from " + data.user.location + " via <b>Unsplash</b>. <br><br> Want a differnt one? <a href='' id='newUnsplash'>Click Here</a>. Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
            }                                                                                                          // 515
        });                                                                                                            // 516
    },                                                                                                                 // 517
    'click #newUpload': function () {                                                                                  // 518
        $('.unsplash-container').replaceWith("<form action='/file-upload' class='dropzone' id='dropzone'></form>");    // 519
        var blogDrop = initDropZone('dropzone', {                                                                      // 520
            number: 1,                                                                                                 // 521
            size: 8,                                                                                                   // 522
            message: "Drop an image here to be the featured image, or click to select an image using the browser."     // 523
        });                                                                                                            // 520
        $('#unsplashPrompt').html("Want to avoid the hassle? <a href='' id='getFeaturedUnsplash'>Click here</a> and we will find an image for you!");
    },                                                                                                                 // 526
    'click .btn-preview': function () {                                                                                // 527
        var imageID = hasUnsplash ? Session.get('unsplash_img') : Session.get('newImageId');                           // 528
        var previewPost = {                                                                                            // 529
            title: $('#blogTitle').val() + " (This is a preview)",                                                     // 530
            subtitle: $('#blogSubTitle').val(),                                                                        // 531
            content: $('.editable').froalaEditor('html.get'),                                                          // 532
            tags: $(".tags").val(),                                                                                    // 533
            unsplash: Session.get('unsplashData'),                                                                     // 534
            imgId: imageID,                                                                                            // 535
            meta: {                                                                                                    // 536
                hasUnsplash: hasUnsplash                                                                               // 537
            }                                                                                                          // 536
        };                                                                                                             // 529
        Session.setPersistent('preview_json', previewPost);                                                            // 540
        $('html, body').css({                                                                                          // 541
            overflow: 'visible'                                                                                        // 542
        }); // Enables the Scrolling                                                                                   // 541
                                                                                                                       //
        window.open('/blog/preview', '_blank');                                                                        // 544
    }                                                                                                                  // 545
});                                                                                                                    // 391
Template.announcementOptions.events({                                                                                  // 547
    'click .btn-post': function (event, template) {                                                                    // 548
        var type = Session.get('announcementType');                                                                    // 549
        var json = constructAnnouncementJson(type);                                                                    // 550
                                                                                                                       //
        if (type === "imageOnly") {                                                                                    // 551
            Meteor.call('posts.postImage', json, function (err) {                                                      // 552
                if (err) {                                                                                             // 553
                    alertError('Posting Failed!', err.message);                                                        // 554
                } else {                                                                                               // 555
                    alertSuccess('Success!', 'The post has been submitted.');                                          // 556
                    Drafts.remove({                                                                                    // 557
                        _id: Session.get('draftEditItem')                                                              // 557
                    });                                                                                                // 557
                    Session.set('draftEditItem', null);                                                                // 558
                    wipeEditor('announcement', 'imageOnly');                                                           // 559
                                                                                                                       //
                    if (operationStack.length - 2 === 0) {                                                             // 560
                        swapElements('.editor-main', '.editor-open');                                                  // 561
                        $('html, body').css({                                                                          // 562
                            overflow: 'visible'                                                                        // 563
                        }); // Enables the Scrolling                                                                   // 562
                    } else {                                                                                           // 565
                        swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                    }                                                                                                  // 567
                                                                                                                       //
                    operationStack.pop();                                                                              // 568
                }                                                                                                      // 569
            });                                                                                                        // 570
        } else if (type === "textOnly") {                                                                              // 572
            Meteor.call('posts.postText', json, function (err) {                                                       // 573
                if (err) {                                                                                             // 574
                    alertError('Post Failed!', err.message);                                                           // 575
                } else {                                                                                               // 576
                    alertSuccess('Success!', 'The post has been submitted.');                                          // 577
                    Drafts.remove({                                                                                    // 578
                        _id: Session.get('draftEditItem')                                                              // 578
                    });                                                                                                // 578
                    Session.set('draftEditItem', null);                                                                // 579
                    wipeEditor('announcement', 'textOnly');                                                            // 580
                                                                                                                       //
                    if (operationStack.length - 2 === 0) {                                                             // 581
                        swapElements('.editor-main', '.editor-open');                                                  // 582
                        $('html, body').css({                                                                          // 583
                            overflow: 'visible'                                                                        // 584
                        }); // Enables the Scrolling                                                                   // 583
                    } else {                                                                                           // 586
                        swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                    }                                                                                                  // 588
                                                                                                                       //
                    operationStack.pop();                                                                              // 589
                }                                                                                                      // 590
            });                                                                                                        // 591
        } else if (type === 'textAndImage') {                                                                          // 592
            Meteor.call('posts.postTextImage', json, function (err) {                                                  // 593
                if (err) {                                                                                             // 594
                    alertError('Post Failed!', err.message);                                                           // 595
                } else {                                                                                               // 596
                    alertSuccess('Success!', 'The post has been submitted.');                                          // 597
                    Drafts.remove({                                                                                    // 598
                        _id: Session.get('draftEditItem')                                                              // 598
                    });                                                                                                // 598
                    Session.set('draftEditItem', null);                                                                // 599
                    wipeEditor('announcement', 'imageText');                                                           // 600
                                                                                                                       //
                    if (operationStack.length - 2 === 0) {                                                             // 601
                        swapElements('.editor-main', '.editor-open');                                                  // 602
                        $('html, body').css({                                                                          // 603
                            overflow: 'visible'                                                                        // 604
                        }); // Enables the Scrolling                                                                   // 603
                    } else {                                                                                           // 606
                        swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                    }                                                                                                  // 608
                                                                                                                       //
                    operationStack.pop();                                                                              // 609
                }                                                                                                      // 610
            });                                                                                                        // 611
        }                                                                                                              // 612
    },                                                                                                                 // 614
    'click .btn-save': function () {                                                                                   // 615
        var type = Session.get('announcementType');                                                                    // 616
        var json = constructAnnouncementJson(type);                                                                    // 617
                                                                                                                       //
        if (Session.get('draftEditItem')) {                                                                            // 619
            Drafts.update({                                                                                            // 620
                _id: Session.get('draftEditItem')                                                                      // 620
            }, json, function (err) {                                                                                  // 620
                if (err) {                                                                                             // 621
                    alertError('Saving Draft Failed!', err.message);                                                   // 622
                } else {                                                                                               // 623
                    alertSuccess("Saved!", "");                                                                        // 624
                                                                                                                       //
                    if (operationStack.length - 2 === 0) {                                                             // 625
                        swapElements('.editor-main', '.editor-open');                                                  // 626
                        $('html, body').css({                                                                          // 627
                            overflow: 'visible'                                                                        // 628
                        }); // Enables the Scrolling                                                                   // 627
                    } else {                                                                                           // 630
                        swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                    }                                                                                                  // 632
                                                                                                                       //
                    operationStack.pop();                                                                              // 633
                }                                                                                                      // 634
            });                                                                                                        // 635
        } else {                                                                                                       // 636
            if (type === "imageOnly") {                                                                                // 637
                Meteor.call('drafts.postDraftImage', json, function (err) {                                            // 639
                    if (err) {                                                                                         // 640
                        alertError('Saving Draft Failed!', err.message);                                               // 641
                    } else {                                                                                           // 642
                        alertSuccess('Success!', 'The draft has been saved.');                                         // 643
                        wipeEditor('announcement', 'imageOnly');                                                       // 644
                                                                                                                       //
                        if (operationStack.length - 2 === 0) {                                                         // 645
                            swapElements('.editor-main', '.editor-open');                                              // 646
                            $('html, body').css({                                                                      // 647
                                overflow: 'visible'                                                                    // 648
                            }); // Enables the Scrolling                                                               // 647
                        } else {                                                                                       // 650
                            swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                        }                                                                                              // 652
                                                                                                                       //
                        operationStack.pop();                                                                          // 653
                    }                                                                                                  // 654
                });                                                                                                    // 655
            } else if (type === "textOnly") {                                                                          // 657
                Meteor.call('drafts.postDraftText', json, function (err) {                                             // 659
                    if (err) {                                                                                         // 660
                        alertError('Saving Draft Failed!', err.message);                                               // 661
                    } else {                                                                                           // 662
                        alertSuccess('Success!', 'The draft has been saved.');                                         // 663
                        wipeEditor('announcement', 'textOnly');                                                        // 664
                                                                                                                       //
                        if (operationStack.length - 2 === 0) {                                                         // 665
                            swapElements('.editor-main', '.editor-open');                                              // 666
                            $('html, body').css({                                                                      // 667
                                overflow: 'visible'                                                                    // 668
                            }); // Enables the Scrolling                                                               // 667
                        } else {                                                                                       // 670
                            swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                        }                                                                                              // 672
                                                                                                                       //
                        operationStack.pop();                                                                          // 673
                    }                                                                                                  // 674
                });                                                                                                    // 675
            } else if (type === 'textAndImage') {                                                                      // 676
                Meteor.call('drafts.postDraftTextImage', json, function (err) {                                        // 677
                    if (err) {                                                                                         // 678
                        alertError('Saving Draft Failed!', err.message);                                               // 679
                    } else {                                                                                           // 680
                        alertSuccess('Success!', 'The draft has been saved.');                                         // 681
                        wipeEditor('announcement', 'imageText');                                                       // 682
                                                                                                                       //
                        if (operationStack.length - 2 === 0) {                                                         // 683
                            swapElements('.editor-main', '.editor-open');                                              // 684
                            $('html, body').css({                                                                      // 685
                                overflow: 'visible'                                                                    // 686
                            }); // Enables the Scrolling                                                               // 685
                        } else {                                                                                       // 688
                            swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                        }                                                                                              // 690
                                                                                                                       //
                        operationStack.pop();                                                                          // 691
                    }                                                                                                  // 692
                });                                                                                                    // 693
            }                                                                                                          // 694
        }                                                                                                              // 695
    }                                                                                                                  // 698
});                                                                                                                    // 547
Template.blogDraft.events({                                                                                            // 700
    'click .btn-delete-draft': function (evt) {                                                                        // 701
        evt.preventDefault();                                                                                          // 702
        var obj = $(evt.target).closest($('.draft-item'));                                                             // 703
        var id = obj.attr('id');                                                                                       // 704
        Meteor.call('drafts.remove', id, function (err) {                                                              // 705
            if (err) {                                                                                                 // 706
                alertError("Something went wrong when deleting the draft", err.message);                               // 707
            }                                                                                                          // 708
        });                                                                                                            // 709
    },                                                                                                                 // 710
    'click .btn-post-draft': function (evt) {                                                                          // 711
        evt.preventDefault();                                                                                          // 712
        var obj = $(evt.target).closest($('.draft-item'));                                                             // 713
        var id = obj.attr('id');                                                                                       // 714
        var json = Drafts.findOne({                                                                                    // 715
            _id: id                                                                                                    // 715
        });                                                                                                            // 715
        var type = json.type;                                                                                          // 716
                                                                                                                       //
        if (type === "imageOnly") {                                                                                    // 717
            Meteor.call('posts.postImage', json, function (err) {                                                      // 718
                if (err) {                                                                                             // 719
                    alertError('Posting Failed!', err.message);                                                        // 720
                } else {                                                                                               // 721
                    alertSuccess('Success!', 'The post has been submitted.');                                          // 722
                    Drafts.remove({                                                                                    // 723
                        _id: id                                                                                        // 723
                    });                                                                                                // 723
                }                                                                                                      // 724
            });                                                                                                        // 725
        } else if (type === "textOnly") {                                                                              // 727
            Meteor.call('posts.postText', json, function (err) {                                                       // 728
                if (err) {                                                                                             // 729
                    alertError('Post Failed!', err.message);                                                           // 730
                } else {                                                                                               // 731
                    alertSuccess('Success!', 'The post has been submitted.');                                          // 732
                    Drafts.remove({                                                                                    // 733
                        _id: id                                                                                        // 733
                    });                                                                                                // 733
                }                                                                                                      // 734
            });                                                                                                        // 735
        } else if (type === 'textAndImage') {                                                                          // 736
            Meteor.call('posts.postTextImage', json, function (err) {                                                  // 737
                if (err) {                                                                                             // 738
                    alertError('Post Failed!', err.message);                                                           // 739
                } else {                                                                                               // 740
                    alertSuccess('Success!', 'The post has been submitted.');                                          // 741
                    Drafts.remove({                                                                                    // 742
                        _id: id                                                                                        // 742
                    });                                                                                                // 742
                }                                                                                                      // 743
            });                                                                                                        // 744
        } else if (type === 'blog') {                                                                                  // 745
            Meteor.call('posts.postBlog', json, function (err) {                                                       // 746
                if (err) {                                                                                             // 747
                    alertError('Post Failed!', err.message);                                                           // 748
                } else {                                                                                               // 749
                    alertSuccess('Success!', 'The post has been submitted.');                                          // 750
                    Drafts.remove({                                                                                    // 751
                        _id: id                                                                                        // 751
                    });                                                                                                // 751
                }                                                                                                      // 752
            });                                                                                                        // 753
        }                                                                                                              // 754
    },                                                                                                                 // 755
    'click .btn-publish-draft': function (evt) {                                                                       // 756
        var obj = $(evt.target).closest($('.draft-item'));                                                             // 757
        var id = obj.attr('id');                                                                                       // 758
        var json = Drafts.findOne({                                                                                    // 759
            _id: id                                                                                                    // 759
        });                                                                                                            // 759
        var type = json.subType;                                                                                       // 760
                                                                                                                       //
        if (json.type === 'blog') {                                                                                    // 761
            Meteor.call('posts.postBlog', json, function (err) {                                                       // 762
                if (err) {                                                                                             // 763
                    alertError('Post Failed!', err.message);                                                           // 764
                } else {                                                                                               // 765
                    alertSuccess('Success!', 'The post has been submitted.');                                          // 766
                    Drafts.remove({                                                                                    // 767
                        _id: id                                                                                        // 767
                    });                                                                                                // 767
                }                                                                                                      // 768
            });                                                                                                        // 769
        } else {                                                                                                       // 770
            if (type === "imageOnly") {                                                                                // 771
                Meteor.call('posts.postImage', json, function (err) {                                                  // 772
                    if (err) {                                                                                         // 773
                        alertError('Posting Failed!', err.message);                                                    // 774
                    } else {                                                                                           // 775
                        alertSuccess('Success!', 'The post has been submitted.');                                      // 776
                        Drafts.remove({                                                                                // 777
                            _id: id                                                                                    // 777
                        });                                                                                            // 777
                    }                                                                                                  // 778
                });                                                                                                    // 779
            } else if (type === "textOnly") {                                                                          // 781
                Meteor.call('posts.postText', json, function (err) {                                                   // 782
                    if (err) {                                                                                         // 783
                        alertError('Post Failed!', err.message);                                                       // 784
                    } else {                                                                                           // 785
                        alertSuccess('Success!', 'The post has been submitted.');                                      // 786
                        Drafts.remove({                                                                                // 787
                            _id: id                                                                                    // 787
                        });                                                                                            // 787
                    }                                                                                                  // 788
                });                                                                                                    // 789
            } else if (type === 'textAndImage') {                                                                      // 790
                Meteor.call('posts.postTextImage', json, function (err) {                                              // 791
                    if (err) {                                                                                         // 792
                        alertError('Post Failed!', err.message);                                                       // 793
                    } else {                                                                                           // 794
                        alertSuccess('Success!', 'The post has been submitted.');                                      // 795
                        Drafts.remove({                                                                                // 796
                            _id: id                                                                                    // 796
                        });                                                                                            // 796
                    }                                                                                                  // 797
                });                                                                                                    // 798
            }                                                                                                          // 799
        }                                                                                                              // 800
    },                                                                                                                 // 801
    'click .draft-item': function (evt) {                                                                              // 802
        if (!$(evt.target).hasClass('btn-delete-draft') && !$(evt.target).hasClass('btn-publish-draft')) {             // 803
            var obj = $(evt.target).closest($('.draft-item'));                                                         // 804
            var id = obj.attr('id');                                                                                   // 805
            Session.set('draftEditItem', id);                                                                          // 806
            setEditorContent(Drafts.findOne({                                                                          // 807
                _id: id                                                                                                // 807
            }));                                                                                                       // 807
            console.log(Session.get('draftEditItem'));                                                                 // 808
        }                                                                                                              // 809
    }                                                                                                                  // 810
});                                                                                                                    // 700
Template.suggestionEditor.events({                                                                                     // 812
    'click .btn-post': function () {                                                                                   // 813
        var headline = $('#suggestionHeadline').val();                                                                 // 814
        var content = $('.announcement-text')[2].value;                                                                // 815
        var imgId = Session.get('newImageId');                                                                         // 816
        var authorId = Meteor.userId();                                                                                // 818
        var draftedDate = new Date();                                                                                  // 819
                                                                                                                       //
        if (!imgId) {                                                                                                  // 821
            //TODO                                                                                                     // 822
            console.log('No image uploaded');                                                                          // 823
        }                                                                                                              // 824
                                                                                                                       //
        if (!headline) {                                                                                               // 825
            //TODO                                                                                                     // 826
            console.log('No headline entered');                                                                        // 827
        }                                                                                                              // 828
                                                                                                                       //
        if (!content) {                                                                                                // 829
            //TODO                                                                                                     // 830
            console.log('No content entered');                                                                         // 831
        }                                                                                                              // 832
                                                                                                                       //
        var json = {                                                                                                   // 834
            author: authorId,                                                                                          // 835
            type: 'suggestion',                                                                                        // 836
            headline: headline,                                                                                        // 837
            content: content,                                                                                          // 838
            draftedDate: draftedDate,                                                                                  // 839
            imgId: imgId                                                                                               // 840
        };                                                                                                             // 834
        console.log(json);                                                                                             // 842
        Meteor.call('suggestions.postSuggestion', json, function (err) {                                               // 844
            console.log('posted');                                                                                     // 845
                                                                                                                       //
            if (err) {                                                                                                 // 846
                alertError('Post Failed!', err.message);                                                               // 847
            } else {                                                                                                   // 848
                alertSuccess('Success!', 'The post has been submitted.');                                              // 849
                                                                                                                       //
                if (operationStack.length - 2 === 0) {                                                                 // 850
                    swapElements('.editor-main', '.editor-open');                                                      // 851
                    $('html, body').css({                                                                              // 852
                        overflow: 'visible'                                                                            // 853
                    }); // Enables the Scrolling                                                                       // 852
                } else {                                                                                               // 855
                    swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                }                                                                                                      // 857
                                                                                                                       //
                operationStack.pop();                                                                                  // 858
            }                                                                                                          // 859
        });                                                                                                            // 860
    }                                                                                                                  // 861
});                                                                                                                    // 812
                                                                                                                       //
function initDropZone(id, info) {                                                                                      // 864
    return new Dropzone("form#" + id, {                                                                                // 865
        maxFiles: info.number || 1,                                                                                    // 866
        maxFilesize: info.size || 8,                                                                                   // 867
        thumbnailWidth: 400,                                                                                           // 868
        addRemoveLinks: true,                                                                                          // 869
        dictDefaultMessage: info.message || "Drop your image here, or click to select an image using the browser.",    // 870
        accept: function (file, done) {                                                                                // 871
            $('.quick-image-prompt').html('');                                                                         // 872
            var FSFile = new FS.File(file);                                                                            // 873
            Images.insert(FSFile, function (err, fileObj) {                                                            // 874
                if (err) {                                                                                             // 875
                    console.log(err);                                                                                  // 876
                } else {                                                                                               // 877
                    Images.remove({                                                                                    // 878
                        _id: Session.get('newImageId')                                                                 // 878
                    }, function (err) {                                                                                // 878
                        if (err) {                                                                                     // 879
                            console.log("error removing image:\n" + err);                                              // 880
                        }                                                                                              // 881
                    });                                                                                                // 882
                    hasUnsplash = false;                                                                               // 883
                    Session.set('newFileLink', fileObj.extension()); //update the file type                            // 884
                                                                                                                       //
                    Session.set('newImageId', fileObj._id); //update the image id to current image                     // 885
                                                                                                                       //
                    done();                                                                                            // 886
                }                                                                                                      // 887
            });                                                                                                        // 888
        }                                                                                                              // 889
    });                                                                                                                // 865
}                                                                                                                      // 891
                                                                                                                       //
function swapElements(a, b) {                                                                                          // 892
    $(a).fadeOut('fast', function () {                                                                                 // 893
        $(b).fadeIn("slow");                                                                                           // 894
    });                                                                                                                // 895
}                                                                                                                      // 896
                                                                                                                       //
function getRandomInt(min, max) {                                                                                      // 897
    return Math.floor(Math.random() * (max - min + 1)) + min;                                                          // 898
}                                                                                                                      // 899
                                                                                                                       //
function setEditorContent(json) {                                                                                      // 900
    if (json.type === 'blog') {                                                                                        // 901
        $('#blogTitle').val(json.title);                                                                               // 902
        $('#blogSubTitle').val(json.subtitle);                                                                         // 903
        $('.editable').froalaEditor('html.set', json.content);                                                         // 904
                                                                                                                       //
        _.forEach(json.tags, function (item) {                                                                         // 905
            $('.tags').tagsinput('add', item);                                                                         // 906
        });                                                                                                            // 907
                                                                                                                       //
        $('.visibility-select').val(json.meta.visibility).trigger("change");                                           // 908
        $(".category-select").val(json.categories).trigger("change");                                                  // 909
        $("#blogOrganizationSelect").val(json.organizationsValues).trigger("change");                                  // 910
        $('.input-date').datepicker('update', json.releaseDate);                                                       // 911
                                                                                                                       //
        if (json.unsplash) {                                                                                           // 912
            Meteor.call('setupUnsplash', function (err) {                                                              // 913
                if (err) {                                                                                             // 914
                    console.log(err);                                                                                  // 915
                    $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one.");      // 916
                } else {                                                                                               // 917
                    Meteor.call('getPhoto', json.imgId, function (err, data) {                                         // 918
                        if (err) {                                                                                     // 919
                            console.log(err);                                                                          // 920
                            $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one.");
                        } else {                                                                                       // 922
                            Session.set('unsplash_img', data.id);                                                      // 923
                            Session.set('unsplashData', data);                                                         // 924
                            hasUnsplash = true;                                                                        // 925
                            $('#dropzone').replaceWith("<img src='" + data.urls.regular + "' class='img-responsive unsplash-container'/>");
                            $('#unsplashPrompt').html("Here you go! This image is by <a href='" + data.user.links.html + "'>" + data.user.name + "</a> from " + data.user.location + " via <b>Unsplash</b>. <br><br> This will be your featured image, if you want another one <a href='' id='newUnsplash'>Click Here</a> Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
                        }                                                                                              // 928
                    });                                                                                                // 929
                }                                                                                                      // 930
            });                                                                                                        // 931
        }                                                                                                              // 932
                                                                                                                       //
        swapElements('.blog-drafts', '.blog-editor');                                                                  // 933
        operationStack.push('.blog-editor');                                                                           // 934
        Session.set('announcementType', 'blog');                                                                       // 935
    } else if (json.type === 'announcement') {                                                                         // 936
        if (json.subType === 'imageOnly') {                                                                            // 937
            $('#imageOnlyHeadline').val(json.headline);                                                                // 938
                                                                                                                       //
            if (json.imgId) {                                                                                          // 939
                Session.set('newImageId', json.imgId);                                                                 // 940
                $('.quick-image-prompt').html('You have already uploaded an image, if you would like to change it, simply add a different one. Otherwise, simply ignore the box.');
            }                                                                                                          // 942
                                                                                                                       //
            _.forEach(json.tags, function (item) {                                                                     // 943
                $('.announce-tags:eq(0)').tagsinput('add', item);                                                      // 944
            });                                                                                                        // 945
                                                                                                                       //
            $(".announcement-category:eq(0)").val(json.categories).trigger("change");                                  // 946
            $(".clubs-category:eq(0)").val(json.clubs).trigger("change");                                              // 947
            $('.startDate:eq(0)').datepicker('update', json.startDate);                                                // 948
            $('.endDate:eq(0)').datepicker('update', json.endDate);                                                    // 949
            swapElements('.blog-drafts', '.image-only');                                                               // 950
            operationStack.push('.image-only');                                                                        // 951
            Session.set('announcementType', 'imageOnly');                                                              // 952
        } else if (json.subType === 'textOnly') {                                                                      // 953
            $('#textOnlyHeadline').val(json.headline);                                                                 // 954
            $('.announcement-text:eq(0)').val(json.content);                                                           // 955
                                                                                                                       //
            _.forEach(json.tags, function (item) {                                                                     // 956
                $('.announce-tags:eq(1)').tagsinput('add', item);                                                      // 957
            });                                                                                                        // 958
                                                                                                                       //
            $(".announcement-category:eq(1)").val(json.categories).trigger("change");                                  // 959
            $(".clubs-category:eq(1)").val(json.clubs).trigger("change");                                              // 960
            $('.startDate:eq(1)').datepicker('update', json.startDate);                                                // 961
            $('.endDate:eq(1)').datepicker('update', json.endDate);                                                    // 962
            swapElements('.blog-drafts', '.text-only');                                                                // 963
            operationStack.push('.text-only');                                                                         // 964
            Session.set('announcementType', 'textOnly');                                                               // 965
        } else if (json.subType === 'imageText') {                                                                     // 966
            $('#textImageHeadline').val(json.headline);                                                                // 967
                                                                                                                       //
            if (json.imgId) {                                                                                          // 968
                Session.set('newImageId', json.imgId);                                                                 // 969
                $('.quick-image-prompt').html('You have already uploaded an image, if you would like to change it, simply add a different one. Otherwise, simply ignore the box.');
            }                                                                                                          // 971
                                                                                                                       //
            $('.announcement-text:eq(1)').val(json.content);                                                           // 972
            $(".announcement-category:eq(2)").val(json.categories).trigger("change");                                  // 973
            $(".clubs-category:eq(2)").val(json.clubs).trigger("change");                                              // 974
            $('.startDate:eq(2)').datepicker('update', json.startDate);                                                // 975
            $('.endDate:eq(2)').datepicker('update', json.endDate);                                                    // 976
            Session.set('priority', json.meta.priority);                                                               // 977
            $('.is-checked').removeClass('is-checked');                                                                // 978
            $(".priority-toggle[data-priority=" + Session.get('priority') + "]").addClass('is-checked');               // 979
            swapElements('.blog-drafts', '.text-and-image');                                                           // 980
            operationStack.push('.text-and-image');                                                                    // 981
            Session.set('announcementType', 'textAndImage');                                                           // 982
        }                                                                                                              // 983
    }                                                                                                                  // 984
}                                                                                                                      // 985
                                                                                                                       //
function wipeEditor(type, subType) {                                                                                   // 987
    if (type === 'blog') {                                                                                             // 988
        $('#blogTitle').val(null);                                                                                     // 989
        $('#blogSubTitle').val(null);                                                                                  // 990
        $('.editable').froalaEditor('html.set', '');                                                                   // 991
        $('.tags').tagsinput('removeAll');                                                                             // 992
        $('.visibility-select').val(null).trigger("change");                                                           // 993
        $(".category-select").val(null).trigger("change");                                                             // 994
        $('.input-date').datepicker('update', null);                                                                   // 995
        Session.set('unsplash_img', null);                                                                             // 996
        Session.set('unsplashData', null);                                                                             // 997
        Session.set('newImageId', null);                                                                               // 998
        var blogDrop = initDropZone('dropzone', {                                                                      // 999
            number: 1,                                                                                                 // 1000
            size: 8,                                                                                                   // 1001
            message: "Drop an image here to be the featured image, or click to select an image using the browser."     // 1002
        });                                                                                                            // 999
        $('#unsplashPrompt').html("Want to avoid the hassle? <a href='' id='getFeaturedUnsplash'>Click here</a> and we will find an image for you!");
    } else if (type === 'announcement') {                                                                              // 1005
        if (subType === 'imageOnly') {                                                                                 // 1006
            $('#imageOnlyHeadline').val(null);                                                                         // 1007
            Session.set('newImageId', null);                                                                           // 1008
            $('#announcementImage').replaceWith("<form action='/file-upload' class='dropzone' id='announcementImage'></form>");
            var announcementDrop = initDropZone("announcementImage", {                                                 // 1010
                number: 1,                                                                                             // 1011
                size: 8,                                                                                               // 1012
                message: "Drop your poster here, or click to select an image using the browser."                       // 1013
            });                                                                                                        // 1010
            $('.quick-image-prompt').html("");                                                                         // 1015
            $('.announce-tags:eq(0)').tagsinput('removeAll');                                                          // 1016
            $(".announcement-category:eq(0)").val(null).trigger("change");                                             // 1017
            $(".clubs-category:eq(0)").val(null).trigger("change");                                                    // 1018
            $('.startDate:eq(0)').datepicker('update', null);                                                          // 1019
            $('.endDate:eq(0)').datepicker('update', null);                                                            // 1020
        } else if (subType === 'textOnly') {                                                                           // 1021
            $('#textOnlyHeadline').val(null);                                                                          // 1022
            $('.announcement-text:eq(0)').val(null);                                                                   // 1023
            $('.announce-tags:eq(1)').tagsinput('removeAll');                                                          // 1024
            $(".announcement-category:eq(1)").val(null).trigger("change");                                             // 1025
            $(".clubs-category:eq(1)").val(null).trigger("change");                                                    // 1026
            $('.startDate:eq(1)').datepicker('update', null);                                                          // 1027
            $('.endDate:eq(1)').datepicker('update', null);                                                            // 1028
        } else if (subType === 'imageText') {                                                                          // 1029
            $('#textImageHeadline').val(null);                                                                         // 1030
            Session.set('newImageId', null);                                                                           // 1031
            $('#announcementImageTwo').replaceWith("<form action='/file-upload' class='dropzone' id='announcementImageTwo'></form>");
                                                                                                                       //
            var _announcementDrop = initDropZone("announcementImageTwo", {                                             // 1033
                number: 1,                                                                                             // 1034
                size: 8,                                                                                               // 1035
                message: "Drop your poster here, or click to select an image using the browser."                       // 1036
            });                                                                                                        // 1033
                                                                                                                       //
            $('.quick-image-prompt').html('');                                                                         // 1038
            $('.announcement-text:eq(1)').val(null);                                                                   // 1039
            $('.announce-tags:eq(2)').tagsinput('removeAll');                                                          // 1040
            $(".announcement-category:eq(2)").val(null).trigger("change");                                             // 1041
            $(".clubs-category:eq(2)").val(null).trigger("change");                                                    // 1042
            $('.startDate:eq(2)').datepicker('update', null);                                                          // 1043
            $('.endDate:eq(2)').datepicker('update', null);                                                            // 1044
            Session.set('priority', 'image');                                                                          // 1045
            $('.is-checked').removeClass('is-checked');                                                                // 1046
            $(".priority-toggle[data-priority=" + Session.get('priority') + "]").addClass('is-checked');               // 1047
        }                                                                                                              // 1048
    }                                                                                                                  // 1049
}                                                                                                                      // 1050
                                                                                                                       //
function constructBlogJson() {                                                                                         // 1051
    var title = $('#blogTitle').val();                                                                                 // 1052
    var subtitle = $('#blogSubTitle').val();                                                                           // 1053
    var content = $('.editable').froalaEditor('html.get');                                                             // 1054
    var str = $(".tags").val();                                                                                        // 1055
    var separators = [' , ', ', ', ',', ' ,'];                                                                         // 1056
    var tags = str.split(new RegExp(separators.join('|'), 'g'));                                                       // 1057
    var imgId = hasUnsplash ? Session.get('unsplash_img') : Session.get('newImageId');                                 // 1058
    var releaseDate = new Date($('.input-date').val());                                                                // 1059
    var draftedDate = new Date();                                                                                      // 1060
    var options = $('.category-select')[0].options;                                                                    // 1061
    var categories = [];                                                                                               // 1062
                                                                                                                       //
    for (var i = 0; i < options.length; i++) {                                                                         // 1063
        var opt = options[i];                                                                                          // 1064
                                                                                                                       //
        if (opt.selected) {                                                                                            // 1065
            categories.push(opt.value);                                                                                // 1066
        }                                                                                                              // 1067
    }                                                                                                                  // 1068
                                                                                                                       //
    var orgOptions = document.getElementById('blogOrganizationSelect').options;                                        // 1069
    var orgNames = [],                                                                                                 // 1070
        orgVal = [];                                                                                                   // 1070
                                                                                                                       //
    for (var _i = 0; _i < orgOptions.length; _i++) {                                                                   // 1071
        var _opt = orgOptions[_i];                                                                                     // 1072
                                                                                                                       //
        if (_opt.selected) {                                                                                           // 1073
            orgNames.push(_opt.text);                                                                                  // 1074
            orgVal.push(_opt.value);                                                                                   // 1075
        }                                                                                                              // 1076
    }                                                                                                                  // 1077
                                                                                                                       //
    var authorId = Meteor.userId();                                                                                    // 1078
    var imageFirst = null; //meta                                                                                      // 1079
                                                                                                                       //
    var visibility = $('.visibility-select')[0].value;                                                                 // 1081
    return {                                                                                                           // 1083
        author: authorId,                                                                                              // 1084
        type: 'blog',                                                                                                  // 1085
        releaseDate: releaseDate,                                                                                      // 1086
        draftedDate: draftedDate,                                                                                      // 1087
        title: title,                                                                                                  // 1088
        subtitle: subtitle,                                                                                            // 1089
        content: content,                                                                                              // 1090
        tags: tags,                                                                                                    // 1091
        categories: categories,                                                                                        // 1092
        imgId: imgId,                                                                                                  // 1093
        unsplash: Session.get('unsplashData'),                                                                         // 1094
        organizationsNames: orgNames,                                                                                  // 1095
        organizationsValues: orgVal,                                                                                   // 1096
        meta: {                                                                                                        // 1097
            imageFirst: imageFirst,                                                                                    // 1098
            hasUnsplash: hasUnsplash,                                                                                  // 1099
            visibility: visibility                                                                                     // 1100
        }                                                                                                              // 1097
    };                                                                                                                 // 1083
}                                                                                                                      // 1103
                                                                                                                       //
function constructAnnouncementJson(type) {                                                                             // 1104
    if (type === "imageOnly") {                                                                                        // 1105
        console.log('constructing image only');                                                                        // 1106
        var headline = $('#imageOnlyHeadline').val();                                                                  // 1107
        var imgId = Session.get('newImageId');                                                                         // 1108
        var separators = [' , ', ', ', ',', ' ,'];                                                                     // 1109
        var tags = $(".announce-tags")[0].value.split(new RegExp(separators.join('|'), 'g'));                          // 1110
        var options = $('.announcement-category')[0].options;                                                          // 1111
        var categories = [];                                                                                           // 1112
                                                                                                                       //
        for (var i = 0; i < options.length; i++) {                                                                     // 1113
            var opt = options[i];                                                                                      // 1114
                                                                                                                       //
            if (opt.selected) {                                                                                        // 1115
                categories.push(opt.value);                                                                            // 1116
            }                                                                                                          // 1117
        }                                                                                                              // 1118
                                                                                                                       //
        var clubs = $('.clubs-category')[0].options;                                                                   // 1119
        var clubList = [];                                                                                             // 1120
                                                                                                                       //
        for (var _i2 = 0; _i2 < clubs.length; _i2++) {                                                                 // 1121
            var _opt2 = clubs[_i2];                                                                                    // 1122
                                                                                                                       //
            if (_opt2.selected) {                                                                                      // 1123
                clubList.push(_opt2.value);                                                                            // 1124
            }                                                                                                          // 1125
        }                                                                                                              // 1126
                                                                                                                       //
        var authorId = Meteor.userId();                                                                                // 1127
        var startDate = new Date($('.startDate')[0].value);                                                            // 1128
        var endDate = new Date($('.endDate')[0].value);                                                                // 1129
        var draftedDate = new Date();                                                                                  // 1130
        var visibility = $('.visibility-select')[1].value;                                                             // 1131
                                                                                                                       //
        if (!imgId) {                                                                                                  // 1132
            alertError('Post Incomplete!', "You haven't uploaded an image yet!");                                      // 1133
        }                                                                                                              // 1134
                                                                                                                       //
        if (!headline) {                                                                                               // 1135
            //TODO                                                                                                     // 1136
            alertError('Post Incomplete!', "You haven't added a headline!");                                           // 1137
        }                                                                                                              // 1138
                                                                                                                       //
        if (!startDate || !endDate) {                                                                                  // 1139
            alertError('Post Incomplete!', "You haven't added a date!");                                               // 1140
        }                                                                                                              // 1141
                                                                                                                       //
        return {                                                                                                       // 1142
            author: authorId,                                                                                          // 1143
            type: 'announcement',                                                                                      // 1144
            subType: 'imageOnly',                                                                                      // 1145
            startDate: startDate,                                                                                      // 1146
            endDate: endDate,                                                                                          // 1147
            draftedDate: draftedDate,                                                                                  // 1148
            headline: headline,                                                                                        // 1149
            tags: tags,                                                                                                // 1150
            categories: categories,                                                                                    // 1151
            imgId: imgId,                                                                                              // 1152
            clubs: clubList,                                                                                           // 1153
            meta: {                                                                                                    // 1154
                hasUnsplash: hasUnsplash,                                                                              // 1155
                visibility: visibility                                                                                 // 1156
            }                                                                                                          // 1154
        };                                                                                                             // 1142
    } else if (type === "textOnly") {                                                                                  // 1159
        var _headline = $('#textOnlyHeadline').val();                                                                  // 1160
                                                                                                                       //
        var content = $('.announcement-text')[0].value;                                                                // 1161
        var _separators = [' , ', ', ', ',', ' ,'];                                                                    // 1162
                                                                                                                       //
        var _tags = $(".announce-tags")[1].value.split(new RegExp(_separators.join('|'), 'g'));                        // 1163
                                                                                                                       //
        var _options = $('.announcement-category')[1].options;                                                         // 1165
        var _categories = [];                                                                                          // 1166
                                                                                                                       //
        for (var _i3 = 0; _i3 < _options.length; _i3++) {                                                              // 1168
            var _opt3 = _options[_i3];                                                                                 // 1169
                                                                                                                       //
            if (_opt3.selected) {                                                                                      // 1170
                _categories.push(_opt3.value);                                                                         // 1171
            }                                                                                                          // 1172
        }                                                                                                              // 1173
                                                                                                                       //
        var _visibility = $('.visibility-select')[2].value;                                                            // 1174
                                                                                                                       //
        var _authorId = Meteor.userId();                                                                               // 1175
                                                                                                                       //
        var _startDate = new Date($('.startDate')[1].value);                                                           // 1176
                                                                                                                       //
        var _endDate = new Date($('.endDate')[1].value);                                                               // 1177
                                                                                                                       //
        var _draftedDate = new Date();                                                                                 // 1178
                                                                                                                       //
        var _clubs = $('.clubs-category')[1].options;                                                                  // 1179
        var _clubList = [];                                                                                            // 1180
                                                                                                                       //
        for (var _i4 = 0; _i4 < _clubs.length; _i4++) {                                                                // 1181
            var _opt4 = _clubs[_i4];                                                                                   // 1182
                                                                                                                       //
            if (_opt4.selected) {                                                                                      // 1183
                _clubList.push(_opt4.value);                                                                           // 1184
            }                                                                                                          // 1185
        } //meta                                                                                                       // 1186
                                                                                                                       //
                                                                                                                       //
        if (!content) {                                                                                                // 1189
            alertError('Post Incomplete!', "You haven't added any content yet!");                                      // 1190
        }                                                                                                              // 1191
                                                                                                                       //
        if (!_headline) {                                                                                              // 1192
            //TODO                                                                                                     // 1193
            alertError('Post Incomplete!', "You haven't added a headline!");                                           // 1194
        }                                                                                                              // 1195
                                                                                                                       //
        if (!_startDate || !_endDate) {                                                                                // 1196
            alertError('Post Incomplete!', "You haven't added a date!");                                               // 1197
        }                                                                                                              // 1198
                                                                                                                       //
        return {                                                                                                       // 1200
            author: _authorId,                                                                                         // 1201
            type: 'announcement',                                                                                      // 1202
            subType: 'textOnly',                                                                                       // 1203
            startDate: _startDate,                                                                                     // 1204
            endDate: _endDate,                                                                                         // 1205
            draftedDate: _draftedDate,                                                                                 // 1206
            headline: _headline,                                                                                       // 1207
            content: content,                                                                                          // 1208
            tags: _tags || [],                                                                                         // 1209
            categories: _categories || [],                                                                             // 1210
            clubs: _clubList,                                                                                          // 1211
            meta: {                                                                                                    // 1212
                hasUnsplash: hasUnsplash,                                                                              // 1213
                visibility: _visibility                                                                                // 1214
            }                                                                                                          // 1212
        };                                                                                                             // 1200
    } else if (type === 'textAndImage') {                                                                              // 1217
        var _headline2 = $('#textImageHeadline').val();                                                                // 1218
                                                                                                                       //
        var _content = $('.announcement-text')[1].value;                                                               // 1219
                                                                                                                       //
        var _imgId = Session.get('newImageId');                                                                        // 1220
                                                                                                                       //
        var str = $(".announce-tags")[2].value;                                                                        // 1221
        var _separators2 = [' , ', ', ', ',', ' ,'];                                                                   // 1222
                                                                                                                       //
        var _tags2 = str.split(new RegExp(_separators2.join('|'), 'g'));                                               // 1223
                                                                                                                       //
        var _options2 = $('.announcement-category')[2].options;                                                        // 1225
        var _categories2 = [];                                                                                         // 1226
                                                                                                                       //
        for (var _i5 = 0; _i5 < _options2.length; _i5++) {                                                             // 1228
            var _opt5 = _options2[_i5];                                                                                // 1229
                                                                                                                       //
            if (_opt5.selected) {                                                                                      // 1230
                _categories2.push(_opt5.value);                                                                        // 1231
            }                                                                                                          // 1232
        }                                                                                                              // 1233
                                                                                                                       //
        var _visibility2 = $('.visibility-select')[3].value;                                                           // 1234
                                                                                                                       //
        var _authorId2 = Meteor.userId();                                                                              // 1235
                                                                                                                       //
        var _startDate2 = new Date($('.startDate')[2].value);                                                          // 1236
                                                                                                                       //
        var _endDate2 = new Date($('.endDate')[2].value);                                                              // 1237
                                                                                                                       //
        var _draftedDate2 = new Date();                                                                                // 1238
                                                                                                                       //
        var _clubs2 = $('.clubs-category')[2].options;                                                                 // 1239
        var _clubList2 = [];                                                                                           // 1240
                                                                                                                       //
        for (var _i6 = 0; _i6 < _clubs2.length; _i6++) {                                                               // 1241
            var _opt6 = _clubs2[_i6];                                                                                  // 1242
                                                                                                                       //
            if (_opt6.selected) {                                                                                      // 1243
                _clubList2.push(_opt6.value);                                                                          // 1244
            }                                                                                                          // 1245
        } //meta                                                                                                       // 1246
                                                                                                                       //
                                                                                                                       //
        var priority = Session.get('priority');                                                                        // 1248
                                                                                                                       //
        if (!_imgId) {                                                                                                 // 1249
            alertError('Post Incomplete!', "You haven't uploaded an image yet!");                                      // 1250
        }                                                                                                              // 1251
                                                                                                                       //
        if (!_headline2) {                                                                                             // 1252
            //TODO                                                                                                     // 1253
            alertError('Post Incomplete!', "You haven't added a headline!");                                           // 1254
        }                                                                                                              // 1255
                                                                                                                       //
        if (!_startDate2 || !_endDate2) {                                                                              // 1256
            alertError('Post Incomplete!', "You haven't added a date!");                                               // 1257
        }                                                                                                              // 1258
                                                                                                                       //
        if (!_content) {                                                                                               // 1259
            //TODO                                                                                                     // 1260
            alertError('Post Incomplete!', "You haven't added any information!");                                      // 1261
        }                                                                                                              // 1262
                                                                                                                       //
        return {                                                                                                       // 1264
            author: _authorId2,                                                                                        // 1265
            type: 'announcement',                                                                                      // 1266
            subType: 'imageText',                                                                                      // 1267
            headline: _headline2,                                                                                      // 1268
            content: _content,                                                                                         // 1269
            startDate: _startDate2,                                                                                    // 1270
            endDate: _endDate2,                                                                                        // 1271
            draftedDate: _draftedDate2,                                                                                // 1272
            tags: _tags2 || [],                                                                                        // 1273
            categories: _categories2 || [],                                                                            // 1274
            imgId: _imgId,                                                                                             // 1275
            clubs: _clubList2,                                                                                         // 1276
            meta: {                                                                                                    // 1277
                priority: priority || 'image',                                                                         // 1278
                hasUnsplash: hasUnsplash,                                                                              // 1279
                visibility: _visibility2                                                                               // 1280
            }                                                                                                          // 1277
        };                                                                                                             // 1264
    }                                                                                                                  // 1283
}                                                                                                                      // 1284
                                                                                                                       //
function getKeyWord(text) {                                                                                            // 1286
    var keyword_extractor = require("keyword-extractor");                                                              // 1287
                                                                                                                       //
    var keywords = $(text).text(); //  Extract the keywords                                                            // 1289
                                                                                                                       //
    var extraction_result = keyword_extractor.extract(keywords, {                                                      // 1291
        language: "english",                                                                                           // 1292
        remove_digits: true,                                                                                           // 1293
        return_changed_case: true,                                                                                     // 1294
        remove_duplicates: false,                                                                                      // 1295
        remove_max_ngrams: 10                                                                                          // 1296
    });                                                                                                                // 1291
    return extraction_result;                                                                                          // 1298
}                                                                                                                      // 1299
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navigation.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/navigation.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Typed = void 0;                                                                                                    // 1
module.watch(require("typedjs-placeholder"), {                                                                         // 1
    "default": function (v) {                                                                                          // 1
        Typed = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var Images = void 0;                                                                                                   // 1
module.watch(require("../../api/images/images.js"), {                                                                  // 1
    Images: function (v) {                                                                                             // 1
        Images = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
module.watch(require("./navigation.html"));                                                                            // 1
module.watch(require("../lib/morphext.js"));                                                                           // 1
Template.navigation.onRendered(function () {                                                                           // 8
    //$('.course-list').hide();                                                                                        // 9
    $('.main-search').hide();                                                                                          // 10
    $('.search-content').hide();                                                                                       // 11
    $('.nav-overlay').hide();                                                                                          // 12
    Session.set('searchContent', {                                                                                     // 13
        hits: []                                                                                                       // 13
    });                                                                                                                // 13
});                                                                                                                    // 14
Template.navigation.helpers({                                                                                          // 16
    'date': function () {                                                                                              // 17
        return "Friday April 7th";                                                                                     // 18
    },                                                                                                                 // 19
    'username': function () {                                                                                          // 20
        return Session.get('name');                                                                                    // 21
    },                                                                                                                 // 22
    'title': function () {                                                                                             // 23
        return Session.get('navTitle');                                                                                // 24
    },                                                                                                                 // 25
    'isStudent': function () {                                                                                         // 26
        return Roles.userIsInRole(Meteor.userId(), 'student');                                                         // 27
    },                                                                                                                 // 28
    'isAdmin': function () {                                                                                           // 29
        return Roles.userIsInRole(Meteor.userId(), 'admin');                                                           // 30
    },                                                                                                                 // 31
    'searchContent': function () {                                                                                     // 32
        return Session.get('searchContent').hits;                                                                      // 33
    },                                                                                                                 // 34
    'img': function () {                                                                                               // 35
        if (this.unsplash) {                                                                                           // 36
            return this.unsplash.urls.full;                                                                            // 37
        } else if (this.imgId) {                                                                                       // 38
            try {                                                                                                      // 39
                return Images.findOne({                                                                                // 40
                    _id: this.imgId                                                                                    // 40
                }).url();                                                                                              // 40
            } catch (e) {//console.log('error getting photo')                                                          // 41
            }                                                                                                          // 43
        }                                                                                                              // 45
    },                                                                                                                 // 46
    'courses': function () {                                                                                           // 47
        return Session.get('courses');                                                                                 // 48
    },                                                                                                                 // 49
    'state': function () {                                                                                             // 50
        var now = new Date();                                                                                          // 51
        var diff = Math.abs(now - Session.get('tokenExpiry'));                                                         // 52
        var minutes = Math.floor(diff / 1000 / 60);                                                                    // 53
        return minutes > 30 ? 'expired' : 'fine';                                                                      // 54
    },                                                                                                                 // 55
    'mark': function () {                                                                                              // 56
        var mark = this.mark;                                                                                          // 57
                                                                                                                       //
        if (mark.length > 6) {                                                                                         // 58
            mark = "N/A";                                                                                              // 59
        }                                                                                                              // 60
                                                                                                                       //
        return mark;                                                                                                   // 61
    },                                                                                                                 // 62
    'dash': function () {                                                                                              // 63
        return Session.get('inDash');                                                                                  // 64
    }                                                                                                                  // 65
});                                                                                                                    // 16
Template.navigation.events({                                                                                           // 68
    'click .nav-extend': function () {                                                                                 // 69
        var sideNav = $('.side-nav');                                                                                  // 70
        var sideNavPrompt = $('.side-nav-prompt');                                                                     // 71
        $('.top-nav').toggleClass('right-push');                                                                       // 72
        $('.main').toggleClass('right-push');                                                                          // 73
        sideNav.toggleClass('right-push');                                                                             // 74
                                                                                                                       //
        if ($('.main').hasClass('right-push')) {                                                                       // 75
            sideNavPrompt.html("<i class='fa fa-times'></i> <span class='hidden-xs hidden-sm'>CLOSE</span>");          // 76
            $('.nav-overlay').fadeIn('fast');                                                                          // 77
        } else {                                                                                                       // 78
            sideNavPrompt.html("<i class='fa fa-bars'></i> <span class='hidden-xs hidden-sm'>MENU</span>");            // 79
            $('.nav-overlay').fadeOut('fast');                                                                         // 80
        }                                                                                                              // 81
    },                                                                                                                 // 82
    'click .nav-overlay': function () {                                                                                // 83
        var sideNav = $('.side-nav');                                                                                  // 84
        var sideNavPrompt = $('.side-nav-prompt');                                                                     // 85
        $('.top-nav').removeClass('right-push');                                                                       // 86
        $('.main').removeClass('right-push');                                                                          // 87
        sideNav.removeClass('right-push');                                                                             // 88
                                                                                                                       //
        if ($('.main').hasClass('right-push')) {                                                                       // 89
            sideNavPrompt.html("<i class='fa fa-times'></i> <span class='hidden-xs hidden-sm'>CLOSE</span>");          // 90
            $('.nav-overlay').fadeIn('fast');                                                                          // 91
        } else {                                                                                                       // 92
            sideNavPrompt.html("<i class='fa fa-bars'></i> <span class='hidden-xs hidden-sm'>MENU</span>");            // 93
            $('.nav-overlay').fadeOut('fast');                                                                         // 94
        }                                                                                                              // 95
    },                                                                                                                 // 96
    'click .nav-oper': function () {                                                                                   // 97
        var searchBox = $('.main-search');                                                                             // 98
        var searchContent = $('.search-content');                                                                      // 99
        var prompt = $('.top-operation-prompt');                                                                       // 100
        Session.set('searchContent', {                                                                                 // 101
            hits: []                                                                                                   // 101
        });                                                                                                            // 101
                                                                                                                       //
        if (!searchBox.is(':visible')) {                                                                               // 102
            searchBox.fadeIn('fast');                                                                                  // 103
            $('.search-result').show();                                                                                // 104
            searchContent.fadeIn("<i class='fa fa-times'></i> <span class='hidden-sm hidden-xs'>SEARCH</span>");       // 105
            prompt.html("CLOSE");                                                                                      // 106
            searchBox.typed({                                                                                          // 107
                strings: ["\"Volleyball\"", "\"Octoberfest\"", "\"Guidance\"", "\"DECA\"", "\"USAC\"", "\"Who made this app?\""],
                typeSpeed: 40,                                                                                         // 116
                loop: true,                                                                                            // 117
                shuffle: true,                                                                                         // 118
                showCursor: true,                                                                                      // 119
                cursorChar: "|"                                                                                        // 120
            });                                                                                                        // 107
            $('html, body').css({                                                                                      // 122
                overflow: 'hidden'                                                                                     // 123
            });                                                                                                        // 122
        } else {                                                                                                       // 125
            searchBox.fadeOut('fast');                                                                                 // 126
            $('.search-result').hide();                                                                                // 127
            searchContent.fadeOut('fast');                                                                             // 128
            prompt.html("<i class='fa fa-search'></i> <span class='hidden-sm hidden-xs'>SEARCH</span>");               // 129
            $('html, body').css({                                                                                      // 130
                overflow: 'auto'                                                                                       // 131
            });                                                                                                        // 130
        }                                                                                                              // 133
    },                                                                                                                 // 134
    'click #academics': function () {                                                                                  // 135
        if (!Session.get('token')) {                                                                                   // 136
            Modal.show('teachAssistConnect');                                                                          // 137
        }                                                                                                              // 138
                                                                                                                       //
        var list = $('.course-list');                                                                                  // 139
        var icon = $('.academics-icon');                                                                               // 140
                                                                                                                       //
        if (!list.is(':visible')) {                                                                                    // 141
            list.show(500);                                                                                            // 142
            icon.removeClass('fa-bars');                                                                               // 143
            icon.addClass('fa-times');                                                                                 // 144
        } else {                                                                                                       // 145
            list.hide(500);                                                                                            // 146
            icon.removeClass('fa-times');                                                                              // 147
            icon.addClass('fa-bars');                                                                                  // 148
        }                                                                                                              // 149
    },                                                                                                                 // 150
    'input .main-search': function () {                                                                                // 151
        var searchBox = $('.main-search');                                                                             // 152
        var searchPrompt = $('.search-prompt');                                                                        // 153
                                                                                                                       //
        if (searchBox.val().length > 0) {                                                                              // 154
            searchPrompt.css('display', 'none');                                                                       // 155
            console.log(searchBox.val());                                                                              // 156
            searchPost(searchBox.val());                                                                               // 157
        } else {                                                                                                       // 158
            searchPrompt.css('display', 'block');                                                                      // 159
            Session.set('searchContent', {                                                                             // 160
                hits: []                                                                                               // 160
            });                                                                                                        // 160
        }                                                                                                              // 161
    }                                                                                                                  // 162
});                                                                                                                    // 68
Template.teachAssistPass.helpers({                                                                                     // 165
    'student_id': function () {                                                                                        // 166
        return Meteor.user().profile.student_number;                                                                   // 167
    }                                                                                                                  // 168
});                                                                                                                    // 165
Template.teachAssistConnect.events({                                                                                   // 171
    'submit #connectLoginForm': function (evt) {                                                                       // 172
        evt.preventDefault();                                                                                          // 173
        var pass = $('#reLoginPass').val();                                                                            // 174
        Meteor.call('getTeachAssistTokens', {                                                                          // 175
            student_number: Meteor.user().profile.student_number,                                                      // 175
            password: pass                                                                                             // 175
        }, function (err, data) {                                                                                      // 175
            if (err) {                                                                                                 // 176
                alertError("Failed to connect with teach assist", err.message);                                        // 177
            } else {                                                                                                   // 178
                Meteor.users.update({                                                                                  // 179
                    _id: Meteor.userId()                                                                               // 179
                }, {                                                                                                   // 179
                    $set: {                                                                                            // 179
                        "private.token": data,                                                                         // 179
                        "private.tokenDate": new Date()                                                                // 179
                    }                                                                                                  // 179
                }, function (err) {                                                                                    // 179
                    if (err) {                                                                                         // 180
                        alertError("Something went wrong", err.message);                                               // 181
                    } else {                                                                                           // 182
                        Meteor.call('getTeachAssistCourses', data, function (err, data) {                              // 183
                            if (err) {                                                                                 // 184
                                alertError("Something went wrong", "");                                                // 185
                            } else {                                                                                   // 186
                                Meteor.users.update({                                                                  // 187
                                    _id: Meteor.userId()                                                               // 187
                                }, {                                                                                   // 187
                                    $set: {                                                                            // 187
                                        "private.courses": data                                                        // 187
                                    }                                                                                  // 187
                                });                                                                                    // 187
                                Modal.hide('teachAssistPass');                                                         // 188
                                FlowRouter.reload();                                                                   // 189
                            }                                                                                          // 190
                        });                                                                                            // 191
                    }                                                                                                  // 192
                });                                                                                                    // 193
            }                                                                                                          // 194
        });                                                                                                            // 195
    }                                                                                                                  // 196
});                                                                                                                    // 171
Template.teachAssistPass.events({                                                                                      // 199
    'submit #reLoginForm': function (evt) {                                                                            // 200
        evt.preventDefault();                                                                                          // 201
        var pass = $('#reLoginPass').val();                                                                            // 202
        Meteor.call('getTeachAssistTokens', {                                                                          // 203
            student_number: Meteor.user().profile.student_number,                                                      // 203
            password: pass                                                                                             // 203
        }, function (err, data) {                                                                                      // 203
            if (err) {                                                                                                 // 204
                alertError("Failed to connect with teach assist", err.message);                                        // 205
            } else {                                                                                                   // 206
                Meteor.users.update({                                                                                  // 207
                    _id: Meteor.userId()                                                                               // 207
                }, {                                                                                                   // 207
                    $set: {                                                                                            // 207
                        "private.token": data,                                                                         // 207
                        "private.tokenDate": new Date()                                                                // 207
                    }                                                                                                  // 207
                }, function (err) {                                                                                    // 207
                    if (err) {                                                                                         // 208
                        alertError("Something went wrong", err.message);                                               // 209
                    } else {                                                                                           // 210
                        Meteor.call('getTeachAssistCourses', data, function (err, data) {                              // 211
                            if (err) {                                                                                 // 212
                                alertError("Something went wrong", "");                                                // 213
                            } else {                                                                                   // 214
                                Meteor.users.update({                                                                  // 215
                                    _id: Meteor.userId()                                                               // 215
                                }, {                                                                                   // 215
                                    $set: {                                                                            // 215
                                        "private.courses": data                                                        // 215
                                    }                                                                                  // 215
                                });                                                                                    // 215
                                Modal.hide('teachAssistPass');                                                         // 216
                                FlowRouter.reload();                                                                   // 217
                            }                                                                                          // 218
                        });                                                                                            // 219
                    }                                                                                                  // 220
                });                                                                                                    // 221
            }                                                                                                          // 222
        });                                                                                                            // 223
    }                                                                                                                  // 224
});                                                                                                                    // 199
                                                                                                                       //
setTitle = function (title) {                                                                                          // 227
    $('.nav-title-text').html('<span>' + title + '</span>');                                                           // 228
};                                                                                                                     // 229
                                                                                                                       //
setProgressBar = function (percentage) {                                                                               // 231
    $('.nav-title-text').css('color', '#fff');                                                                         // 232
    $('.nav-hub-progress').animate({                                                                                   // 233
        width: percentage                                                                                              // 233
    }, 1500);                                                                                                          // 233
};                                                                                                                     // 234
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layouts":{"applicationLayout.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/applicationLayout.html                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.applicationLayout.js");                                                           // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.applicationLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/template.applicationLayout.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("applicationLayout");                                                                             // 2
Template["applicationLayout"] = new Template("Template.applicationLayout", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      template: Spacebars.call(view.lookup("main"))                                                                    // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(function() {                                                                              // 10
      return Spacebars.call(Template.__dynamic);                                                                       // 11
    });                                                                                                                // 12
  });                                                                                                                  // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"applicationLayout.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/applicationLayout.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./applicationLayout.html"));                                                                     // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"pages":{"bigPicture.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/bigPicture.html                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.bigPicture.js");                                                                  // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.bigPicture.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.bigPicture.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("bigPicture");                                                                                    // 2
Template["bigPicture"] = new Template("Template.bigPicture", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    class: "flickity flickity-fullscreen"                                                                              // 6
  }, "\n        ", Blaze.Each(function() {                                                                             // 7
    return Spacebars.call(view.lookup("announcement"));                                                                // 8
  }, function() {                                                                                                      // 9
    return [ "\n            ", HTML.DIV({                                                                              // 10
      class: "gallery-cell"                                                                                            // 11
    }, "\n                ", Spacebars.include(view.lookupTemplate("bigPictureItem")), "\n            "), "\n        " ];
  }), "\n    "), "\n    ", Spacebars.include(view.lookupTemplate("bottomBar")) ];                                      // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
Template.__checkName("bigPictureItem");                                                                                // 16
Template["bigPictureItem"] = new Template("Template.bigPictureItem", (function() {                                     // 17
  var view = this;                                                                                                     // 18
  return [ HTML.H1(Blaze.View("lookup:headline", function() {                                                          // 19
    return Spacebars.mustache(view.lookup("headline"));                                                                // 20
  })), "\n    ", HTML.IMG({                                                                                            // 21
    src: function() {                                                                                                  // 22
      return Spacebars.mustache(view.lookup("imageLink"));                                                             // 23
    }                                                                                                                  // 24
  }), HTML.Raw("\n    <br>\n    "), HTML.H3({                                                                          // 25
    class: "mt-30"                                                                                                     // 26
  }, Blaze.View("lookup:content", function() {                                                                         // 27
    return Spacebars.mustache(view.lookup("content"));                                                                 // 28
  })) ];                                                                                                               // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
Template.__checkName("bottomBar");                                                                                     // 32
Template["bottomBar"] = new Template("Template.bottomBar", (function() {                                               // 33
  var view = this;                                                                                                     // 34
  return HTML.Raw('<nav class="navbar-fixed-bottom bottom-bar">\n        <div class="bottom-inner">\n            <h2><span id="clock"></span> - <span id="rotatingMessage">All visitors please report to main office!</span></h2>\n        </div>\n\n    </nav>');
}));                                                                                                                   // 36
                                                                                                                       // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"blogs.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/blogs.html                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.blogs.js");                                                                       // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.blogs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.blogs.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("blogs");                                                                                         // 2
Template["blogs"] = new Template("Template.blogs", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("navigation")), "\n    ", Spacebars.include(view.lookupTemplate("editor")), "\n    ", HTML.DIV({
    class: "container main"                                                                                            // 6
  }, "\n        ", HTML.DIV({                                                                                          // 7
    class: "content"                                                                                                   // 8
  }, "\n            ", Blaze.Each(function() {                                                                         // 9
    return Spacebars.call(view.lookup("blogCategories"));                                                              // 10
  }, function() {                                                                                                      // 11
    return [ "\n                ", Spacebars.include(view.lookupTemplate("blogCategory")), "\n            " ];         // 12
  }), "\n        "), "\n    ") ];                                                                                      // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
Template.__checkName("blogItem");                                                                                      // 16
Template["blogItem"] = new Template("Template.blogItem", (function() {                                                 // 17
  var view = this;                                                                                                     // 18
  return HTML.DIV({                                                                                                    // 19
    class: function() {                                                                                                // 20
      return [ "grid-item image ", Spacebars.mustache(view.lookup("categories")), " blog-item story-item" ];           // 21
    },                                                                                                                 // 22
    id: function() {                                                                                                   // 23
      return Spacebars.mustache(view.lookup("_id"));                                                                   // 24
    }                                                                                                                  // 25
  }, "\n        ", HTML.DIV({                                                                                          // 26
    class: "image-wrap",                                                                                               // 27
    id: "wrapper"                                                                                                      // 28
  }, "\n            ", HTML.IMG({                                                                                      // 29
    class: "img-responsive",                                                                                           // 30
    src: function() {                                                                                                  // 31
      return Spacebars.mustache(view.lookup("imageLink"));                                                             // 32
    }                                                                                                                  // 33
  }), "\n        "), "\n        ", HTML.DIV({                                                                          // 34
    class: "grid-blog-body"                                                                                            // 35
  }, "\n            ", HTML.H3(Blaze.View("lookup:title", function() {                                                 // 36
    return Spacebars.mustache(view.lookup("title"));                                                                   // 37
  })), "\n            ", HTML.SPAN({                                                                                   // 38
    class: "grid-item-footer"                                                                                          // 39
  }, Blaze.View("lookup:writer", function() {                                                                          // 40
    return Spacebars.mustache(view.lookup("writer"));                                                                  // 41
  })), "\n            ", HTML.P(Blaze.View("lookup:subtitle", function() {                                             // 42
    return Spacebars.mustache(view.lookup("subtitle"));                                                                // 43
  })), "\n            ", HTML.SPAN({                                                                                   // 44
    class: "grid-item-footer"                                                                                          // 45
  }, Blaze.View("lookup:date", function() {                                                                            // 46
    return Spacebars.mustache(view.lookup("date"));                                                                    // 47
  })), "\n            ", HTML.Raw('<!--<a href="" class="btn btn-primary btn-wide">Read More</a>-->'), "\n        "), "\n    ");
}));                                                                                                                   // 49
                                                                                                                       // 50
Template.__checkName("blogCategory");                                                                                  // 51
Template["blogCategory"] = new Template("Template.blogCategory", (function() {                                         // 52
  var view = this;                                                                                                     // 53
  return [ HTML.DIV({                                                                                                  // 54
    class: "row mb-15"                                                                                                 // 55
  }, "\n        ", HTML.DIV({                                                                                          // 56
    class: "col-lg-12"                                                                                                 // 57
  }, "\n            ", HTML.H3(Blaze.View("lookup:categoryName", function() {                                          // 58
    return Spacebars.mustache(view.lookup("categoryName"));                                                            // 59
  })), "\n            ", HTML.Raw('<a href="">View All</a>'), "\n        "), "\n    "), "\n    ", HTML.DIV({           // 60
    class: "row"                                                                                                       // 61
  }, "\n        ", Blaze.Each(function() {                                                                             // 62
    return Spacebars.call(view.lookup("blogPreviews"));                                                                // 63
  }, function() {                                                                                                      // 64
    return [ "\n            ", HTML.DIV({                                                                              // 65
      class: "col-lg-3"                                                                                                // 66
    }, "\n                ", Spacebars.include(view.lookupTemplate("blogItem")), "\n            "), "\n        " ];    // 67
  }), "\n    ") ];                                                                                                     // 68
}));                                                                                                                   // 69
                                                                                                                       // 70
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"course.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/course.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.course.js");                                                                      // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.course.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.course.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("course");                                                                                        // 2
Template["course"] = new Template("Template.course", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return [ Blaze._TemplateWith(function() {                                                                            // 5
    return {                                                                                                           // 6
      oper: Spacebars.call("true")                                                                                     // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("navigation"));                                                       // 10
  }), "\n    ", HTML.DIV({                                                                                             // 11
    class: "main post-body mb-60"                                                                                      // 12
  }, "\n        ", HTML.DIV({                                                                                          // 13
    class: "container-fluid center-wrapper course-header"                                                              // 14
  }, "\n            ", HTML.DIV({                                                                                      // 15
    class: "sections-container"                                                                                        // 16
  }, "\n                ", Blaze.If(function() {                                                                       // 17
    return Spacebars.call(view.lookup("isMobile"));                                                                    // 18
  }, function() {                                                                                                      // 19
    return [ "\n                    ", HTML.DIV({                                                                      // 20
      class: "row"                                                                                                     // 21
    }, "\n                        ", HTML.DIV({                                                                        // 22
      class: "col-md-3 col-sm-6 col-xs-6 mb-30"                                                                        // 23
    }, "\n                            ", HTML.DIV({                                                                    // 24
      class: "section-card"                                                                                            // 25
    }, "\n                                ", HTML.CANVAS({                                                             // 26
      id: "knowledgeChart"                                                                                             // 27
    }), "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                              // 28
      return Spacebars.mustache(view.lookup("_"), "details.course.knowledge");                                         // 29
    })), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({    // 30
      class: "col-md-3 col-sm-6 col-xs-6"                                                                              // 31
    }, "\n                            ", HTML.DIV({                                                                    // 32
      class: "section-card"                                                                                            // 33
    }, "\n                                ", HTML.CANVAS({                                                             // 34
      id: "thinkingChart"                                                                                              // 35
    }), "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                              // 36
      return Spacebars.mustache(view.lookup("_"), "details.course.thinking");                                          // 37
    })), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      class: "row mb-15"                                                                                               // 39
    }, "\n                        ", HTML.DIV({                                                                        // 40
      class: "col-md-3 col-sm-6 col-xs-6"                                                                              // 41
    }, "\n                            ", HTML.DIV({                                                                    // 42
      class: "section-card"                                                                                            // 43
    }, "\n                                ", HTML.CANVAS({                                                             // 44
      id: "communicationChart"                                                                                         // 45
    }), "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                              // 46
      return Spacebars.mustache(view.lookup("_"), "details.course.communication");                                     // 47
    })), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({    // 48
      class: "col-md-3 col-sm-6 col-xs-6"                                                                              // 49
    }, "\n                            ", HTML.DIV({                                                                    // 50
      class: "section-card"                                                                                            // 51
    }, "\n                                ", HTML.CANVAS({                                                             // 52
      id: "applicationChart"                                                                                           // 53
    }), "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                              // 54
      return Spacebars.mustache(view.lookup("_"), "details.course.application");                                       // 55
    })), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      class: "row"                                                                                                     // 57
    }, "\n                        ", HTML.DIV({                                                                        // 58
      class: "col-md-12 col-sm-12 col-xs-12"                                                                           // 59
    }, "\n                            ", HTML.DIV({                                                                    // 60
      class: "section-card"                                                                                            // 61
    }, "\n                                ", HTML.H2({                                                                 // 62
      class: "performance-mark"                                                                                        // 63
    }, Blaze.View("lookup:culminating", function() {                                                                   // 64
      return Spacebars.mustache(view.lookup("culminating"));                                                           // 65
    })), "\n                                ", HTML.H3({                                                               // 66
      class: "mt-0"                                                                                                    // 67
    }, Blaze.View("lookup:_", function() {                                                                             // 68
      return Spacebars.mustache(view.lookup("_"), "details.course.culminating");                                       // 69
    })), "\n                            "), "\n                        "), "\n                    "), "\n                " ];
  }, function() {                                                                                                      // 71
    return [ "\n                    ", HTML.DIV({                                                                      // 72
      class: "row"                                                                                                     // 73
    }, "\n                        ", HTML.DIV({                                                                        // 74
      class: "col-md-3 col-sm-6 col-xs-6 mb-30"                                                                        // 75
    }, "\n                            ", HTML.DIV({                                                                    // 76
      class: "section-card"                                                                                            // 77
    }, "\n                                ", HTML.CANVAS({                                                             // 78
      id: "knowledgeChart",                                                                                            // 79
      width: "400",                                                                                                    // 80
      height: "400"                                                                                                    // 81
    }), "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                              // 82
      return Spacebars.mustache(view.lookup("_"), "details.course.knowledge");                                         // 83
    })), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({    // 84
      class: "col-md-3 col-sm-6 col-xs-6"                                                                              // 85
    }, "\n                            ", HTML.DIV({                                                                    // 86
      class: "section-card"                                                                                            // 87
    }, "\n                                ", HTML.CANVAS({                                                             // 88
      id: "thinkingChart",                                                                                             // 89
      width: "400",                                                                                                    // 90
      height: "400"                                                                                                    // 91
    }), "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                              // 92
      return Spacebars.mustache(view.lookup("_"), "details.course.thinking");                                          // 93
    })), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({    // 94
      class: "col-md-3 col-sm-6 col-xs-6"                                                                              // 95
    }, "\n                            ", HTML.DIV({                                                                    // 96
      class: "section-card"                                                                                            // 97
    }, "\n                                ", HTML.CANVAS({                                                             // 98
      id: "communicationChart",                                                                                        // 99
      width: "400",                                                                                                    // 100
      height: "400"                                                                                                    // 101
    }), "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                              // 102
      return Spacebars.mustache(view.lookup("_"), "details.course.communication");                                     // 103
    })), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({    // 104
      class: "col-md-3 col-sm-6 col-xs-6"                                                                              // 105
    }, "\n                            ", HTML.DIV({                                                                    // 106
      class: "section-card"                                                                                            // 107
    }, "\n                                ", HTML.CANVAS({                                                             // 108
      id: "applicationChart",                                                                                          // 109
      width: "400",                                                                                                    // 110
      height: "400"                                                                                                    // 111
    }), "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                              // 112
      return Spacebars.mustache(view.lookup("_"), "details.course.application");                                       // 113
    })), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      class: "row"                                                                                                     // 115
    }, "\n                        ", HTML.DIV({                                                                        // 116
      class: "col-md-12 col-sm-12 col-xs-12"                                                                           // 117
    }, "\n                            ", HTML.DIV({                                                                    // 118
      class: "section-card"                                                                                            // 119
    }, "\n                                ", HTML.H2({                                                                 // 120
      class: "performance-mark"                                                                                        // 121
    }, Blaze.View("lookup:culminating", function() {                                                                   // 122
      return Spacebars.mustache(view.lookup("culminating"));                                                           // 123
    })), "\n                                ", HTML.H3({                                                               // 124
      class: "mt-0"                                                                                                    // 125
    }, Blaze.View("lookup:_", function() {                                                                             // 126
      return Spacebars.mustache(view.lookup("_"), "details.course.culminating");                                       // 127
    })), "\n                            "), "\n                        "), "\n                    "), "\n                " ];
  }), "\n\n            "), "\n            ", HTML.DIV({                                                                // 129
    class: "navbar-fixed-bottom text-center text-capitalize scroll-down hidden-xs"                                     // 130
  }, "\n                ", HTML.P(Blaze.View("lookup:_", function() {                                                  // 131
    return Spacebars.mustache(view.lookup("_"), "details.scroll");                                                     // 132
  })), "\n                ", HTML.Raw('<div class="bounce arrow"></div>'), "\n            "), "\n        "), "\n        ", HTML.DIV({
    class: "container"                                                                                                 // 134
  }, "\n            ", HTML.DIV({                                                                                      // 135
    class: "row mt-30"                                                                                                 // 136
  }, "\n                ", HTML.DIV({                                                                                  // 137
    class: "col-md-12 text-center assessment-tabs"                                                                     // 138
  }, "\n                    ", HTML.DIV({                                                                              // 139
    class: "button-group filter-button-group mb-30"                                                                    // 140
  }, "\n                        ", HTML.BUTTON({                                                                       // 141
    class: "filter-btn is-checked",                                                                                    // 142
    "data-tab": "assessments"                                                                                          // 143
  }, Blaze.View("lookup:_", function() {                                                                               // 144
    return Spacebars.mustache(view.lookup("_"), "details.course.menu.assess");                                         // 145
  })), "\n                        ", HTML.BUTTON({                                                                     // 146
    class: "filter-btn",                                                                                               // 147
    "data-tab": "insights"                                                                                             // 148
  }, Blaze.View("lookup:_", function() {                                                                               // 149
    return Spacebars.mustache(view.lookup("_"), "details.course.menu.insights");                                       // 150
  })), "\n                        ", HTML.BUTTON({                                                                     // 151
    class: "filter-btn",                                                                                               // 152
    "data-tab": "resources"                                                                                            // 153
  }, Blaze.View("lookup:_", function() {                                                                               // 154
    return Spacebars.mustache(view.lookup("_"), "details.course.menu.resources");                                      // 155
  })), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({               // 156
    class: "assessments"                                                                                               // 157
  }, "\n                ", Blaze.Each(function() {                                                                     // 158
    return Spacebars.call(view.lookup("assessment"));                                                                  // 159
  }, function() {                                                                                                      // 160
    return [ "\n                ", HTML.DIV({                                                                          // 161
      class: "row mb-30"                                                                                               // 162
    }, "\n                    ", Blaze.Each(function() {                                                               // 163
      return Spacebars.call(view.lookup("."));                                                                         // 164
    }, function() {                                                                                                    // 165
      return [ "\n                        ", HTML.DIV({                                                                // 166
        class: "col-md-6"                                                                                              // 167
      }, "\n                            ", HTML.DIV({                                                                  // 168
        class: "assessment-body text-center"                                                                           // 169
      }, "\n                                ", HTML.DIV({                                                              // 170
        class: "assessment-info"                                                                                       // 171
      }, "\n                                    ", HTML.H3({                                                           // 172
        class: "assessment-title"                                                                                      // 173
      }, Blaze.View("lookup:title", function() {                                                                       // 174
        return Spacebars.mustache(view.lookup("title"));                                                               // 175
      })), "\n                                    ", HTML.P(Blaze.View("lookup:feedback", function() {                 // 176
        return Spacebars.mustache(view.lookup("feedback"));                                                            // 177
      })), "\n                                "), "\n                                ", HTML.DIV({                     // 178
        class: "assessment-performance"                                                                                // 179
      }, "\n                                    ", HTML.DIV({                                                          // 180
        class: "performance-presenter",                                                                                // 181
        hidden: ""                                                                                                     // 182
      }, "\n                                        ", HTML.DIV({                                                      // 183
        class: "close-presenter"                                                                                       // 184
      }, "\n                                            ", HTML.I({                                                    // 185
        class: "fa fa-2x fa-times"                                                                                     // 186
      }), "\n                                        "), "\n                                        ", HTML.H4({       // 187
        class: "presenter-section"                                                                                     // 188
      }, "Section Title"), "\n                                        ", HTML.H3(Blaze.View("lookup:_", function() {   // 189
        return Spacebars.mustache(view.lookup("_"), "details.course.expand_a");                                        // 190
      }), " ", HTML.SPAN({                                                                                             // 191
        class: "important achieved"                                                                                    // 192
      }, "10"), " ", Blaze.View("lookup:_", function() {                                                               // 193
        return Spacebars.mustache(view.lookup("_"), "details.course.expand_b");                                        // 194
      }), " ", HTML.SPAN({                                                                                             // 195
        class: "important out-of"                                                                                      // 196
      }, "10")), "\n                                        ", HTML.H5({                                               // 197
        class: "mb-30"                                                                                                 // 198
      }, Blaze.View("lookup:_", function() {                                                                           // 199
        return Spacebars.mustache(view.lookup("_"), "details.course.weight");                                          // 200
      }), ": ", HTML.SPAN({                                                                                            // 201
        class: "weight"                                                                                                // 202
      }, "10")), "\n", HTML.Comment('                                        <h4 class="text-left">Insights:</h4>\n                                        <ul class="text-left">\n                                            <li>This is insight number 1</li>\n                                            <li>Your performance in this section caused your mark to rise by 2.1%</li>\n                                        </ul>'), "\n                                    "), "\n                                    ", Spacebars.With(function() {
        return Spacebars.call(view.lookup("K"));                                                                       // 204
      }, function() {                                                                                                  // 205
        return [ "\n                                        ", HTML.DIV({                                              // 206
          class: "knowledge performance"                                                                               // 207
        }, "\n                                            ", HTML.DIV({                                                // 208
          class: "performance-progress",                                                                               // 209
          id: "test1",                                                                                                 // 210
          "data-progress": function() {                                                                                // 211
            return Spacebars.mustache(view.lookup("percentage"));                                                      // 212
          }                                                                                                            // 213
        }), "\n                                            ", HTML.DIV({                                               // 214
          class: "general-info"                                                                                        // 215
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 216
          return Spacebars.mustache(view.lookup("_"), "details.course.knowledge");                                     // 217
        }), " - ", HTML.SPAN({                                                                                         // 218
          class: "important"                                                                                           // 219
        }, Blaze.View("lookup:percentage", function() {                                                                // 220
          return Spacebars.mustache(view.lookup("percentage"));                                                        // 221
        })))), "\n                                        "), "\n                                    " ];              // 222
      }, function() {                                                                                                  // 223
        return [ "\n                                        ", HTML.DIV({                                              // 224
          class: "knowledge performance not-available"                                                                 // 225
        }, "\n                                            ", HTML.DIV({                                                // 226
          class: "performance-progress",                                                                               // 227
          "data-progress": "0"                                                                                         // 228
        }), "\n                                            ", HTML.DIV({                                               // 229
          class: "general-info"                                                                                        // 230
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 231
          return Spacebars.mustache(view.lookup("_"), "details.course.knowledge");                                     // 232
        }), " - ", HTML.SPAN({                                                                                         // 233
          class: "important"                                                                                           // 234
        }, Blaze.View("lookup:_", function() {                                                                         // 235
          return Spacebars.mustache(view.lookup("_"), "details.course.no");                                            // 236
        })))), "\n                                        "), "\n                                    " ];              // 237
      }), "\n                                    ", Spacebars.With(function() {                                        // 238
        return Spacebars.call(view.lookup("T"));                                                                       // 239
      }, function() {                                                                                                  // 240
        return [ "\n                                        ", HTML.DIV({                                              // 241
          class: "thinking performance"                                                                                // 242
        }, "\n                                            ", HTML.DIV({                                                // 243
          class: "performance-progress",                                                                               // 244
          "data-progress": function() {                                                                                // 245
            return Spacebars.mustache(view.lookup("percentage"));                                                      // 246
          }                                                                                                            // 247
        }), "\n                                            ", HTML.DIV({                                               // 248
          class: "general-info"                                                                                        // 249
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 250
          return Spacebars.mustache(view.lookup("_"), "details.course.thinking");                                      // 251
        }), " - ", HTML.SPAN({                                                                                         // 252
          class: "important"                                                                                           // 253
        }, Blaze.View("lookup:percentage", function() {                                                                // 254
          return Spacebars.mustache(view.lookup("percentage"));                                                        // 255
        })))), "\n                                        "), "\n                                    " ];              // 256
      }, function() {                                                                                                  // 257
        return [ "\n                                        ", HTML.DIV({                                              // 258
          class: "thinking performance not-available"                                                                  // 259
        }, "\n                                            ", HTML.DIV({                                                // 260
          class: "performance-progress",                                                                               // 261
          "data-progress": "0"                                                                                         // 262
        }), "\n                                            ", HTML.DIV({                                               // 263
          class: "general-info"                                                                                        // 264
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 265
          return Spacebars.mustache(view.lookup("_"), "details.course.thinking");                                      // 266
        }), " - ", HTML.SPAN({                                                                                         // 267
          class: "important"                                                                                           // 268
        }, Blaze.View("lookup:_", function() {                                                                         // 269
          return Spacebars.mustache(view.lookup("_"), "details.course.no");                                            // 270
        })))), "\n                                        "), "\n                                    " ];              // 271
      }), "\n                                    ", Spacebars.With(function() {                                        // 272
        return Spacebars.call(view.lookup("C"));                                                                       // 273
      }, function() {                                                                                                  // 274
        return [ "\n                                        ", HTML.DIV({                                              // 275
          class: "communication performance"                                                                           // 276
        }, "\n                                            ", HTML.DIV({                                                // 277
          class: "performance-progress",                                                                               // 278
          "data-progress": function() {                                                                                // 279
            return Spacebars.mustache(view.lookup("percentage"));                                                      // 280
          }                                                                                                            // 281
        }), "\n                                            ", HTML.DIV({                                               // 282
          class: "general-info"                                                                                        // 283
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 284
          return Spacebars.mustache(view.lookup("_"), "details.course.communication");                                 // 285
        }), " - ", HTML.SPAN({                                                                                         // 286
          class: "important"                                                                                           // 287
        }, Blaze.View("lookup:percentage", function() {                                                                // 288
          return Spacebars.mustache(view.lookup("percentage"));                                                        // 289
        })))), "\n                                        "), "\n                                    " ];              // 290
      }, function() {                                                                                                  // 291
        return [ "\n                                        ", HTML.DIV({                                              // 292
          class: "communication performance not-available"                                                             // 293
        }, "\n                                            ", HTML.DIV({                                                // 294
          class: "performance-progress",                                                                               // 295
          "data-progress": "0"                                                                                         // 296
        }), "\n                                            ", HTML.DIV({                                               // 297
          class: "general-info"                                                                                        // 298
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 299
          return Spacebars.mustache(view.lookup("_"), "details.course.communication");                                 // 300
        }), " - ", HTML.SPAN({                                                                                         // 301
          class: "important"                                                                                           // 302
        }, Blaze.View("lookup:_", function() {                                                                         // 303
          return Spacebars.mustache(view.lookup("_"), "details.course.no");                                            // 304
        })))), "\n                                        "), "\n                                    " ];              // 305
      }), "\n                                    ", Spacebars.With(function() {                                        // 306
        return Spacebars.call(view.lookup("A"));                                                                       // 307
      }, function() {                                                                                                  // 308
        return [ "\n                                        ", HTML.DIV({                                              // 309
          class: "application performance"                                                                             // 310
        }, "\n                                            ", HTML.DIV({                                                // 311
          class: "performance-progress",                                                                               // 312
          "data-progress": function() {                                                                                // 313
            return Spacebars.mustache(view.lookup("percentage"));                                                      // 314
          }                                                                                                            // 315
        }), "\n                                            ", HTML.DIV({                                               // 316
          class: "general-info"                                                                                        // 317
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 318
          return Spacebars.mustache(view.lookup("_"), "details.course.application");                                   // 319
        }), " - ", HTML.SPAN({                                                                                         // 320
          class: "important"                                                                                           // 321
        }, Blaze.View("lookup:percentage", function() {                                                                // 322
          return Spacebars.mustache(view.lookup("percentage"));                                                        // 323
        })))), "\n                                        "), "\n                                    " ];              // 324
      }, function() {                                                                                                  // 325
        return [ "\n                                        ", HTML.DIV({                                              // 326
          class: "application performance not-available"                                                               // 327
        }, "\n                                            ", HTML.DIV({                                                // 328
          class: "performance-progress",                                                                               // 329
          "data-progress": "0"                                                                                         // 330
        }), "\n                                            ", HTML.DIV({                                               // 331
          class: "general-info"                                                                                        // 332
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 333
          return Spacebars.mustache(view.lookup("_"), "details.course.application");                                   // 334
        }), " - ", HTML.SPAN({                                                                                         // 335
          class: "important"                                                                                           // 336
        }, Blaze.View("lookup:_", function() {                                                                         // 337
          return Spacebars.mustache(view.lookup("_"), "details.course.no");                                            // 338
        })))), "\n                                        "), "\n                                    " ];              // 339
      }), "\n                                    ", Spacebars.With(function() {                                        // 340
        return Spacebars.call(view.lookup("O"));                                                                       // 341
      }, function() {                                                                                                  // 342
        return [ "\n                                        ", HTML.DIV({                                              // 343
          class: "other performance"                                                                                   // 344
        }, "\n                                            ", HTML.DIV({                                                // 345
          class: "performance-progress",                                                                               // 346
          "data-progress": function() {                                                                                // 347
            return Spacebars.mustache(view.lookup("percentage"));                                                      // 348
          }                                                                                                            // 349
        }), "\n                                            ", HTML.DIV({                                               // 350
          class: "general-info"                                                                                        // 351
        }, HTML.P(Blaze.View("lookup:_", function() {                                                                  // 352
          return Spacebars.mustache(view.lookup("_"), "details.course.other");                                         // 353
        }), " - ", HTML.SPAN({                                                                                         // 354
          class: "important"                                                                                           // 355
        }, Blaze.View("lookup:percentage", function() {                                                                // 356
          return Spacebars.mustache(view.lookup("percentage"));                                                        // 357
        })))), "\n                                        "), "\n                                    " ];              // 358
      }), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
    }), "\n                "), "\n                " ];                                                                 // 360
  }), "\n            "), "\n            ", HTML.DIV({                                                                  // 361
    class: "insights"                                                                                                  // 362
  }, "\n                ", HTML.DIV({                                                                                  // 363
    class: "row mb-30"                                                                                                 // 364
  }, "\n                    ", HTML.DIV({                                                                              // 365
    class: "col-md-12"                                                                                                 // 366
  }, "\n                        ", HTML.DIV({                                                                          // 367
    class: "assessment-body text-center"                                                                               // 368
  }, "\n                            ", HTML.DIV({                                                                      // 369
    class: "chart-content"                                                                                             // 370
  }, "\n                                ", HTML.H3(Blaze.View("lookup:_", function() {                                 // 371
    return Spacebars.mustache(view.lookup("_"), "details.course.timeline_graph");                                      // 372
  })), "\n                                ", HTML.Raw('<canvas id="markByAssignment"></canvas>'), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
    class: "row mb-30"                                                                                                 // 374
  }, "\n                    ", HTML.DIV({                                                                              // 375
    class: "col-md-12"                                                                                                 // 376
  }, "\n                        ", HTML.DIV({                                                                          // 377
    class: "assessment-body text-center"                                                                               // 378
  }, "\n                            ", HTML.DIV({                                                                      // 379
    class: "chart-content"                                                                                             // 380
  }, "\n                                ", HTML.H3("S", Blaze.View("lookup:_", function() {                            // 381
    return Spacebars.mustache(view.lookup("_"), "details.course.assignments_graph");                                   // 382
  })), "\n                                ", HTML.Raw('<canvas id="sectionMarkByAssignment"></canvas>'), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    class: "resources",                                                                                                // 384
    hidden: ""                                                                                                         // 385
  }, "\n                ", Blaze.Each(function() {                                                                     // 386
    return Spacebars.call(view.lookup("readings"));                                                                    // 387
  }, function() {                                                                                                      // 388
    return [ "\n                    ", HTML.DIV({                                                                      // 389
      class: "col-lg-12 draft-item",                                                                                   // 390
      id: function() {                                                                                                 // 391
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 392
      }                                                                                                                // 393
    }, "\n                        ", HTML.Comment(" Blog post example, with featured image "), "\n                        ", HTML.DIV({
      class: "editor-options draft-inline"                                                                             // 395
    }, "\n                            ", HTML.DIV({                                                                    // 396
      class: "image-preview"                                                                                           // 397
    }, "\n                                ", HTML.IMG({                                                                // 398
      src: function() {                                                                                                // 399
        return Spacebars.mustache(view.lookup("imageLink"));                                                           // 400
      },                                                                                                               // 401
      class: "img-responsive"                                                                                          // 402
    }), "\n                            "), "\n                            ", HTML.DIV({                                // 403
      class: "content-preview"                                                                                         // 404
    }, "\n                                ", HTML.H3({                                                                 // 405
      class: "draft-title"                                                                                             // 406
    }, Blaze.View("lookup:headline", function() {                                                                      // 407
      return Spacebars.mustache(view.lookup("headline"));                                                              // 408
    }), Blaze.View("lookup:title", function() {                                                                        // 409
      return Spacebars.mustache(view.lookup("title"));                                                                 // 410
    })), "\n                                ", HTML.SPAN("Created: ", Blaze.View("lookup:releaseDate", function() {    // 411
      return Spacebars.mustache(view.lookup("releaseDate"));                                                           // 412
    }), "."), "\n                                ", HTML.P({                                                           // 413
      class: "draft-body"                                                                                              // 414
    }, Blaze.View("lookup:subtitle", function() {                                                                      // 415
      return Spacebars.mustache(view.lookup("subtitle"));                                                              // 416
    })), "\n                            "), "\n                        "), "\n                    "), "\n                " ];
  }), "\n            "), "\n        "), "\n    ") ];                                                                   // 418
}));                                                                                                                   // 419
                                                                                                                       // 420
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dashboard.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/dashboard.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.dashboard.js");                                                                   // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.dashboard.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.dashboard.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("dashboard");                                                                                     // 2
Template["dashboard"] = new Template("Template.dashboard", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("navigation")), "\n    ", HTML.DIV({                                  // 5
    class: "container-fluid"                                                                                           // 6
  }, "\n        ", HTML.DIV({                                                                                          // 7
    class: "col-lg-12 dash-component dash-body"                                                                        // 8
  }, "\n            ", Blaze._TemplateWith(function() {                                                                // 9
    return {                                                                                                           // 10
      template: Spacebars.call(view.lookup("dash"))                                                                    // 11
    };                                                                                                                 // 12
  }, function() {                                                                                                      // 13
    return Spacebars.include(function() {                                                                              // 14
      return Spacebars.call(Template.__dynamic);                                                                       // 15
    });                                                                                                                // 16
  }), "\n        "), "\n    ") ];                                                                                      // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
Template.__checkName("dashHome");                                                                                      // 20
Template["dashHome"] = new Template("Template.dashHome", (function() {                                                 // 21
  var view = this;                                                                                                     // 22
  return HTML.DIV({                                                                                                    // 23
    class: "container"                                                                                                 // 24
  }, HTML.Raw('\n        <div class="row text-center mb-60">\n            <div class="col-lg-12">\n                <h2>Home</h2>\n            </div>\n        </div>\n        '), HTML.DIV({
    class: "row"                                                                                                       // 26
  }, "\n            ", HTML.DIV({                                                                                      // 27
    class: "col-lg-12"                                                                                                 // 28
  }, "\n                ", HTML.DIV({                                                                                  // 29
    class: "dash-item"                                                                                                 // 30
  }, "\n                    ", HTML.Raw('<div class="dash-item-header text-center">\n                        <h3>New Announcement Requests</h3>\n                        <p>Click on one to edit its details</p>\n                    </div>'), "\n                    ", HTML.Raw("<hr>"), "\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("post"));                                                                        // 32
  }, function() {                                                                                                      // 33
    return [ "\n                        ", Blaze.If(function() {                                                       // 34
      return Spacebars.call(view.lookup("noImage"));                                                                   // 35
    }, function() {                                                                                                    // 36
      return [ "\n                            ", HTML.DIV({                                                            // 37
        class: "editor-options new-post draft-inline",                                                                 // 38
        id: function() {                                                                                               // 39
          return Spacebars.mustache(view.lookup("_id"));                                                               // 40
        }                                                                                                              // 41
      }, "\n                                ", HTML.DIV("\n                                    ", HTML.DIV({           // 42
        class: "content-preview"                                                                                       // 43
      }, "\n                                        ", HTML.H4({                                                       // 44
        class: "draft-title"                                                                                           // 45
      }, Blaze.View("lookup:headline", function() {                                                                    // 46
        return Spacebars.mustache(view.lookup("headline"));                                                            // 47
      })), "\n                                        ", HTML.P({                                                      // 48
        class: "meta"                                                                                                  // 49
      }, Blaze.View("lookup:writer", function() {                                                                      // 50
        return Spacebars.mustache(view.lookup("writer"));                                                              // 51
      }), " | ", Blaze.View("lookup:startDate", function() {                                                           // 52
        return Spacebars.mustache(view.lookup("startDate"));                                                           // 53
      }), " - ", Blaze.View("lookup:endDate", function() {                                                             // 54
        return Spacebars.mustache(view.lookup("endDate"));                                                             // 55
      }), " | Tags: ", Blaze.View("lookup:tags", function() {                                                          // 56
        return Spacebars.mustache(view.lookup("tags"));                                                                // 57
      }), " | Category: ", Blaze.View("lookup:categories", function() {                                                // 58
        return Spacebars.mustache(view.lookup("categories"));                                                          // 59
      }), " | "), "\n                                        ", HTML.P({                                               // 60
        class: "draft-body"                                                                                            // 61
      }, Blaze.View("lookup:content", function() {                                                                     // 62
        return Spacebars.mustache(view.lookup("content"));                                                             // 63
      })), "\n                                    "), "\n                                    ", HTML.DIV({             // 64
        class: "operations"                                                                                            // 65
      }, "\n                                        ", HTML.BUTTON({                                                   // 66
        class: "btn btn-approve"                                                                                       // 67
      }, HTML.I({                                                                                                      // 68
        class: "fa fa-check"                                                                                           // 69
      }), " Approve"), "\n                                        ", HTML.BUTTON({                                     // 70
        class: "btn btn-reject"                                                                                        // 71
      }, HTML.I({                                                                                                      // 72
        class: "fa fa-times"                                                                                           // 73
      }), " Reject"), "\n                                    "), "\n                                "), "\n                            "), "\n                        " ];
    }, function() {                                                                                                    // 75
      return [ "\n                            ", HTML.DIV({                                                            // 76
        class: "editor-options new-post with-image draft-inline",                                                      // 77
        id: function() {                                                                                               // 78
          return Spacebars.mustache(view.lookup("_id"));                                                               // 79
        }                                                                                                              // 80
      }, "\n                                ", HTML.DIV("\n                                    ", HTML.DIV({           // 81
        class: "flexed mb-15"                                                                                          // 82
      }, "\n                                        ", HTML.DIV({                                                      // 83
        class: "image-preview"                                                                                         // 84
      }, "\n                                            ", HTML.IMG({                                                  // 85
        src: function() {                                                                                              // 86
          return Spacebars.mustache(view.lookup("imageLink"));                                                         // 87
        },                                                                                                             // 88
        class: "img-responsive"                                                                                        // 89
      }), "\n                                        "), "\n                                        ", HTML.DIV({      // 90
        class: "content-preview"                                                                                       // 91
      }, "\n                                            ", HTML.H3({                                                   // 92
        class: "draft-title"                                                                                           // 93
      }, Blaze.View("lookup:headline", function() {                                                                    // 94
        return Spacebars.mustache(view.lookup("headline"));                                                            // 95
      })), "\n                                            ", HTML.P({                                                  // 96
        class: "meta"                                                                                                  // 97
      }, Blaze.View("lookup:writer", function() {                                                                      // 98
        return Spacebars.mustache(view.lookup("writer"));                                                              // 99
      }), " | ", Blaze.View("lookup:startDate", function() {                                                           // 100
        return Spacebars.mustache(view.lookup("startDate"));                                                           // 101
      }), " - ", Blaze.View("lookup:endDate", function() {                                                             // 102
        return Spacebars.mustache(view.lookup("endDate"));                                                             // 103
      }), " | Tags: ", Blaze.View("lookup:tags", function() {                                                          // 104
        return Spacebars.mustache(view.lookup("tags"));                                                                // 105
      }), " | Category: ", Blaze.View("lookup:categories", function() {                                                // 106
        return Spacebars.mustache(view.lookup("categories"));                                                          // 107
      }), " | "), "\n                                            ", Blaze.If(function() {                              // 108
        return Spacebars.call(view.lookup("hasContent"));                                                              // 109
      }, function() {                                                                                                  // 110
        return [ "\n                                                ", HTML.P({                                        // 111
          class: "draft-body"                                                                                          // 112
        }, Blaze.View("lookup:content", function() {                                                                   // 113
          return Spacebars.mustache(view.lookup("content"));                                                           // 114
        })), "\n                                            " ];                                                       // 115
      }), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV("\n                                        ", HTML.BUTTON({
        class: "btn btn-approve"                                                                                       // 117
      }, HTML.I({                                                                                                      // 118
        class: "fa fa-check"                                                                                           // 119
      }), " Approve"), "\n                                        ", HTML.BUTTON({                                     // 120
        class: "btn btn-reject"                                                                                        // 121
      }, HTML.I({                                                                                                      // 122
        class: "fa fa-times"                                                                                           // 123
      }), " Reject"), "\n                                    "), "\n                                "), "\n                            "), "\n                        " ];
    }), "\n                        ", HTML.HR(), "\n                    " ];                                           // 125
  }), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({                                // 126
    class: "row"                                                                                                       // 127
  }, "\n            ", HTML.DIV({                                                                                      // 128
    class: "col-lg-12"                                                                                                 // 129
  }, "\n                ", HTML.DIV({                                                                                  // 130
    class: "dash-item"                                                                                                 // 131
  }, "\n                    ", HTML.Raw('<div class="dash-item-header text-center">\n                        <h3>New Blog posts</h3>\n                        <p>Click on one to view it</p>\n                    </div>'), "\n                    ", HTML.Raw("<hr>"), "\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("blogPost"));                                                                    // 133
  }, function() {                                                                                                      // 134
    return [ "\n                        ", HTML.DIV({                                                                  // 135
      class: "editor-options new-post draft-inline",                                                                   // 136
      id: function() {                                                                                                 // 137
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 138
      }                                                                                                                // 139
    }, "\n                            ", HTML.DIV("\n                                ", HTML.DIV({                     // 140
      class: "content-preview"                                                                                         // 141
    }, "\n                                    ", HTML.H4({                                                             // 142
      class: "draft-title"                                                                                             // 143
    }, Blaze.View("lookup:title", function() {                                                                         // 144
      return Spacebars.mustache(view.lookup("title"));                                                                 // 145
    })), "\n                                    ", HTML.P({                                                            // 146
      class: "meta"                                                                                                    // 147
    }, Blaze.View("lookup:writer", function() {                                                                        // 148
      return Spacebars.mustache(view.lookup("writer"));                                                                // 149
    }), " | Released: ", Blaze.View("lookup:releaseDate", function() {                                                 // 150
      return Spacebars.mustache(view.lookup("releaseDate"));                                                           // 151
    }), " | Drafted: ", Blaze.View("lookup:draftedDate", function() {                                                  // 152
      return Spacebars.mustache(view.lookup("draftedDate"));                                                           // 153
    }), " | Tags: ", Blaze.View("lookup:tags", function() {                                                            // 154
      return Spacebars.mustache(view.lookup("tags"));                                                                  // 155
    }), " | Category: ", Blaze.View("lookup:categories", function() {                                                  // 156
      return Spacebars.mustache(view.lookup("categories"));                                                            // 157
    }), " | "), "\n                                    ", HTML.P({                                                     // 158
      class: "draft-body"                                                                                              // 159
    }, Blaze.View("lookup:subtitle", function() {                                                                      // 160
      return Spacebars.mustache(view.lookup("subtitle"));                                                              // 161
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 162
      class: "operations"                                                                                              // 163
    }, "\n                                    ", HTML.BUTTON({                                                         // 164
      class: "btn btn-approve"                                                                                         // 165
    }, HTML.I({                                                                                                        // 166
      class: "fa fa-check"                                                                                             // 167
    }), " Approve"), "\n                                    ", HTML.BUTTON({                                           // 168
      class: "btn btn-reject"                                                                                          // 169
    }, HTML.I({                                                                                                        // 170
      class: "fa fa-times"                                                                                             // 171
    }), " Reject"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.HR(), "\n                    " ];
  }), "\n                "), "\n            "), "\n        "), "\n    ");                                              // 173
}));                                                                                                                   // 174
                                                                                                                       // 175
Template.__checkName("dashUsers");                                                                                     // 176
Template["dashUsers"] = new Template("Template.dashUsers", (function() {                                               // 177
  var view = this;                                                                                                     // 178
  return HTML.DIV({                                                                                                    // 179
    class: "container"                                                                                                 // 180
  }, HTML.Raw('\n        <div class="row text-center mb-60">\n            <div class="col-lg-12">\n                <h2>User Manager</h2>\n            </div>\n        </div>\n        '), HTML.DIV({
    class: "row"                                                                                                       // 182
  }, "\n            ", HTML.Raw('<div class="col-lg-12">\n                <div class="dash-item text-center">\n                    <h3>All users</h3>\n                    <p>Use the tool bellow to filter and search for users</p>\n                </div>\n            </div>'), "\n            ", HTML.Raw("<hr>"), "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("userList"));                                                                    // 184
  }, function() {                                                                                                      // 185
    return [ "\n                ", HTML.DIV({                                                                          // 186
      class: "col-lg-12"                                                                                               // 187
    }, "\n                    ", HTML.DIV({                                                                            // 188
      class: "dash-item flexed dash-user-container",                                                                   // 189
      id: function() {                                                                                                 // 190
        return Spacebars.mustache(view.lookup("id"));                                                                  // 191
      }                                                                                                                // 192
    }, "\n                        ", HTML.DIV({                                                                        // 193
      class: "col-lg-2"                                                                                                // 194
    }, "\n                            ", HTML.IMG({                                                                    // 195
      class: "img-circle profile-img",                                                                                 // 196
      src: function() {                                                                                                // 197
        return Spacebars.mustache(view.lookup("img"));                                                                 // 198
      }                                                                                                                // 199
    }), "\n                        "), "\n\n                        ", HTML.DIV({                                      // 200
      class: "user-text-info col-lg-8"                                                                                 // 201
    }, "\n                            ", HTML.H4(Blaze.View("lookup:name", function() {                                // 202
      return Spacebars.mustache(view.lookup("name"));                                                                  // 203
    })), "\n                            ", HTML.P({                                                                    // 204
      class: "text-muted user-expand"                                                                                  // 205
    }, HTML.I({                                                                                                        // 206
      class: "fa fa-angle-down"                                                                                        // 207
    }), " Expand Info"), "\n                            ", HTML.DIV({                                                  // 208
      class: "detailed-user-info"                                                                                      // 209
    }, "\n                                ", HTML.DIV({                                                                // 210
      class: "col-lg-6 text-muted"                                                                                     // 211
    }, "\n                                    ", HTML.P("Email: ", Blaze.View("lookup:services.google.email", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "google", "email"));                            // 213
    })), "\n                                    ", HTML.P("Student Number: ", Blaze.View("lookup:profile.studentNum", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "studentNum"));                                  // 215
    })), "\n                                    ", HTML.P("Roles: ", Blaze.View("lookup:roles", function() {           // 216
      return Spacebars.mustache(view.lookup("roles"));                                                                 // 217
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 218
      class: "col-lg-6 text-muted"                                                                                     // 219
    }, "\n                                    ", HTML.P("Gender: Male"), "\n                                    ", HTML.P("Initialized: ", Blaze.View("lookup:profile.init", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "init"));                                        // 221
    })), "\n                                    ", HTML.P("Mailing List Email: ", Blaze.View("lookup:profile.email", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "email"));                                       // 223
    })), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      class: "user-operations col-lg-2"                                                                                // 225
    }, "\n                            ", HTML.DIV({                                                                    // 226
      class: "dropdown"                                                                                                // 227
    }, "\n                                ", HTML.BUTTON({                                                             // 228
      class: "dropbtn"                                                                                                 // 229
    }, "Options"), "\n                                ", HTML.DIV({                                                    // 230
      class: "dropdown-content"                                                                                        // 231
    }, "\n                                    ", HTML.A({                                                              // 232
      href: "",                                                                                                        // 233
      class: "btn-modify-roles"                                                                                        // 234
    }, "Modify User Role"), "\n                                    ", HTML.A({                                         // 235
      href: "",                                                                                                        // 236
      class: "btn-ban-user"                                                                                            // 237
    }, "BAN USER"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            " ];
  }), "\n            ", HTML.Raw('<a href="" class="btn btn-wide btn-primary">Load More</a>'), "\n        "), "\n    ");
}));                                                                                                                   // 240
                                                                                                                       // 241
Template.__checkName("dashAnnouncements");                                                                             // 242
Template["dashAnnouncements"] = new Template("Template.dashAnnouncements", (function() {                               // 243
  var view = this;                                                                                                     // 244
  return HTML.DIV({                                                                                                    // 245
    class: "container"                                                                                                 // 246
  }, HTML.Raw('\n        <div class="row text-center mb-60">\n            <div class="col-lg-12">\n                <h2>Posts</h2>\n            </div>\n        </div>\n        '), HTML.DIV({
    class: "row"                                                                                                       // 248
  }, "\n            ", HTML.DIV({                                                                                      // 249
    class: "col-lg-12"                                                                                                 // 250
  }, "\n                ", HTML.DIV({                                                                                  // 251
    class: "dash-item"                                                                                                 // 252
  }, "\n                    ", HTML.Raw('<div class="dash-item-header text-center">\n                        <h3>Currently showing announcements</h3>\n                        <p>Click on one to edit its details</p>\n                    </div>'), "\n                    ", HTML.Raw("<hr>"), "\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("post"));                                                                        // 254
  }, function() {                                                                                                      // 255
    return [ "\n                        ", Blaze.If(function() {                                                       // 256
      return Spacebars.call(view.lookup("noImage"));                                                                   // 257
    }, function() {                                                                                                    // 258
      return [ "\n                            ", HTML.DIV({                                                            // 259
        class: "editor-options new-post draft-inline",                                                                 // 260
        id: function() {                                                                                               // 261
          return Spacebars.mustache(view.lookup("_id"));                                                               // 262
        }                                                                                                              // 263
      }, "\n                                ", HTML.DIV("\n                                    ", HTML.DIV({           // 264
        class: "content-preview"                                                                                       // 265
      }, "\n                                        ", HTML.H4({                                                       // 266
        class: "draft-title"                                                                                           // 267
      }, Blaze.View("lookup:headline", function() {                                                                    // 268
        return Spacebars.mustache(view.lookup("headline"));                                                            // 269
      })), "\n                                        ", HTML.P({                                                      // 270
        class: "meta"                                                                                                  // 271
      }, Blaze.View("lookup:writer", function() {                                                                      // 272
        return Spacebars.mustache(view.lookup("writer"));                                                              // 273
      }), " | ", Blaze.View("lookup:startDate", function() {                                                           // 274
        return Spacebars.mustache(view.lookup("startDate"));                                                           // 275
      }), " - ", Blaze.View("lookup:endDate", function() {                                                             // 276
        return Spacebars.mustache(view.lookup("endDate"));                                                             // 277
      }), " | Tags: ", Blaze.View("lookup:tags", function() {                                                          // 278
        return Spacebars.mustache(view.lookup("tags"));                                                                // 279
      }), " | Category: ", Blaze.View("lookup:categories", function() {                                                // 280
        return Spacebars.mustache(view.lookup("categories"));                                                          // 281
      }), " | "), "\n                                        ", HTML.P({                                               // 282
        class: "draft-body"                                                                                            // 283
      }, Blaze.View("lookup:content", function() {                                                                     // 284
        return Spacebars.mustache(view.lookup("content"));                                                             // 285
      })), "\n                                    "), "\n                                    ", HTML.DIV({             // 286
        class: "operations"                                                                                            // 287
      }, "\n                                        ", HTML.BUTTON({                                                   // 288
        class: "btn btn-reject"                                                                                        // 289
      }, HTML.I({                                                                                                      // 290
        class: "fa fa-times"                                                                                           // 291
      }), " Remove"), "\n                                    "), "\n                                "), "\n                            "), "\n                        " ];
    }, function() {                                                                                                    // 293
      return [ "\n                            ", HTML.DIV({                                                            // 294
        class: "editor-options new-post with-image draft-inline",                                                      // 295
        id: function() {                                                                                               // 296
          return Spacebars.mustache(view.lookup("_id"));                                                               // 297
        }                                                                                                              // 298
      }, "\n                                ", HTML.DIV("\n                                    ", HTML.DIV({           // 299
        class: "flexed mb-15"                                                                                          // 300
      }, "\n                                        ", HTML.DIV({                                                      // 301
        class: "image-preview"                                                                                         // 302
      }, "\n                                            ", HTML.IMG({                                                  // 303
        src: function() {                                                                                              // 304
          return Spacebars.mustache(view.lookup("imageLink"));                                                         // 305
        },                                                                                                             // 306
        class: "img-responsive"                                                                                        // 307
      }), "\n                                        "), "\n                                        ", HTML.DIV({      // 308
        class: "content-preview"                                                                                       // 309
      }, "\n                                            ", HTML.H3({                                                   // 310
        class: "draft-title"                                                                                           // 311
      }, Blaze.View("lookup:headline", function() {                                                                    // 312
        return Spacebars.mustache(view.lookup("headline"));                                                            // 313
      })), "\n                                            ", HTML.P({                                                  // 314
        class: "meta"                                                                                                  // 315
      }, Blaze.View("lookup:writer", function() {                                                                      // 316
        return Spacebars.mustache(view.lookup("writer"));                                                              // 317
      }), " | ", Blaze.View("lookup:startDate", function() {                                                           // 318
        return Spacebars.mustache(view.lookup("startDate"));                                                           // 319
      }), " - ", Blaze.View("lookup:endDate", function() {                                                             // 320
        return Spacebars.mustache(view.lookup("endDate"));                                                             // 321
      }), " | Tags: ", Blaze.View("lookup:tags", function() {                                                          // 322
        return Spacebars.mustache(view.lookup("tags"));                                                                // 323
      }), " | Category: ", Blaze.View("lookup:categories", function() {                                                // 324
        return Spacebars.mustache(view.lookup("categories"));                                                          // 325
      }), " | "), "\n                                            ", Blaze.If(function() {                              // 326
        return Spacebars.call(view.lookup("hasContent"));                                                              // 327
      }, function() {                                                                                                  // 328
        return [ "\n                                                ", HTML.P({                                        // 329
          class: "draft-body"                                                                                          // 330
        }, Blaze.View("lookup:content", function() {                                                                   // 331
          return Spacebars.mustache(view.lookup("content"));                                                           // 332
        })), "\n                                            " ];                                                       // 333
      }), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV("\n                                        ", HTML.BUTTON({
        class: "btn btn-reject"                                                                                        // 335
      }, HTML.I({                                                                                                      // 336
        class: "fa fa-times"                                                                                           // 337
      }), " Remove"), "\n                                    "), "\n                                "), "\n                            "), "\n                        " ];
    }), "\n                        ", HTML.HR(), "\n                    " ];                                           // 339
  }), "\n                    ", HTML.Raw('<a href="" class="btn btn-wide btn-primary">Load More</a>'), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    class: "row"                                                                                                       // 341
  }, "\n            ", HTML.DIV({                                                                                      // 342
    class: "col-lg-12"                                                                                                 // 343
  }, "\n                ", HTML.DIV({                                                                                  // 344
    class: "dash-item"                                                                                                 // 345
  }, "\n                    ", HTML.Raw('<div class="dash-item-header text-center">\n                        <h3>All blog posts available</h3>\n                        <p>Click on one to view it</p>\n                    </div>'), "\n                    ", HTML.Raw("<hr>"), "\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("blogPost"));                                                                    // 347
  }, function() {                                                                                                      // 348
    return [ "\n                        ", HTML.DIV({                                                                  // 349
      class: "editor-options new-post draft-inline dash-blog-item",                                                    // 350
      id: function() {                                                                                                 // 351
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 352
      }                                                                                                                // 353
    }, "\n                            ", HTML.DIV("\n                                ", HTML.DIV({                     // 354
      class: "content-preview"                                                                                         // 355
    }, "\n                                    ", HTML.H4({                                                             // 356
      class: "draft-title"                                                                                             // 357
    }, Blaze.View("lookup:title", function() {                                                                         // 358
      return Spacebars.mustache(view.lookup("title"));                                                                 // 359
    })), "\n                                    ", HTML.P({                                                            // 360
      class: "meta"                                                                                                    // 361
    }, Blaze.View("lookup:writer", function() {                                                                        // 362
      return Spacebars.mustache(view.lookup("writer"));                                                                // 363
    }), " | Released: ", Blaze.View("lookup:releaseDate", function() {                                                 // 364
      return Spacebars.mustache(view.lookup("releaseDate"));                                                           // 365
    }), " | Drafted: ", Blaze.View("lookup:draftedDate", function() {                                                  // 366
      return Spacebars.mustache(view.lookup("draftedDate"));                                                           // 367
    }), " | Tags: ", Blaze.View("lookup:tags", function() {                                                            // 368
      return Spacebars.mustache(view.lookup("tags"));                                                                  // 369
    }), " | Category: ", Blaze.View("lookup:categories", function() {                                                  // 370
      return Spacebars.mustache(view.lookup("categories"));                                                            // 371
    }), " | "), "\n                                    ", HTML.P(Blaze.View("lookup:subtitle", function() {            // 372
      return Spacebars.mustache(view.lookup("subtitle"));                                                              // 373
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 374
      class: "operations"                                                                                              // 375
    }, "\n                                    ", HTML.BUTTON({                                                         // 376
      class: "btn btn-reject"                                                                                          // 377
    }, HTML.I({                                                                                                        // 378
      class: "fa fa-times"                                                                                             // 379
    }), " Remove"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.HR(), "\n                    " ];
  }), "\n                "), "\n            "), "\n        "), "\n    ");                                              // 381
}));                                                                                                                   // 382
                                                                                                                       // 383
Template.__checkName("dashCategories");                                                                                // 384
Template["dashCategories"] = new Template("Template.dashCategories", (function() {                                     // 385
  var view = this;                                                                                                     // 386
  return HTML.DIV({                                                                                                    // 387
    class: "container"                                                                                                 // 388
  }, HTML.Raw('\n        <div class="row text-center mb-60">\n            <div class="col-lg-12">\n                <h2>Category Manager</h2>\n            </div>\n        </div>\n        '), HTML.DIV({
    class: "row"                                                                                                       // 390
  }, "\n            ", HTML.Raw('<div class="col-lg-12">\n                <div class="dash-item text-center">\n                    <h3>Manage the categories available here</h3>\n                    <a class="btn btn-primary btn-create-category">Add new category</a>\n                </div>\n            </div>'), "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("category"));                                                                    // 392
  }, function() {                                                                                                      // 393
    return [ "\n                ", HTML.DIV({                                                                          // 394
      class: "col-lg-12"                                                                                               // 395
    }, "\n                    ", HTML.DIV({                                                                            // 396
      class: "dash-item flexed dash-category-container",                                                               // 397
      id: function() {                                                                                                 // 398
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 399
      }                                                                                                                // 400
    }, "\n                        ", HTML.DIV({                                                                        // 401
      class: "col-lg-2"                                                                                                // 402
    }, "\n                            ", HTML.H3(Blaze.View("lookup:name", function() {                                // 403
      return Spacebars.mustache(view.lookup("name"));                                                                  // 404
    })), "\n                        "), "\n\n                        ", HTML.DIV({                                     // 405
      class: "user-text-info col-lg-8"                                                                                 // 406
    }, "\n                            ", HTML.H4("Description:"), "\n                            ", HTML.P(Blaze.View("lookup:description", function() {
      return Spacebars.mustache(view.lookup("description"));                                                           // 408
    })), "\n                            ", HTML.P({                                                                    // 409
      class: "grid-item-footer"                                                                                        // 410
    }, "Featured: ", Blaze.View("lookup:featured", function() {                                                        // 411
      return Spacebars.mustache(view.lookup("featured"));                                                              // 412
    }), " | Created: ", Blaze.View("lookup:date", function() {                                                         // 413
      return Spacebars.mustache(view.lookup("date"));                                                                  // 414
    })), "\n                        "), "\n                        ", HTML.DIV({                                       // 415
      class: "user-operations col-lg-2"                                                                                // 416
    }, "\n                            ", HTML.DIV({                                                                    // 417
      class: "dropdown"                                                                                                // 418
    }, "\n                                ", HTML.BUTTON({                                                             // 419
      class: "dropbtn"                                                                                                 // 420
    }, "Options"), "\n                                ", HTML.DIV({                                                    // 421
      class: "dropdown-content"                                                                                        // 422
    }, "\n                                    ", HTML.A({                                                              // 423
      href: "",                                                                                                        // 424
      class: "btn-modify-category"                                                                                     // 425
    }, "Edit Info"), "\n                                    ", HTML.A({                                                // 426
      href: "",                                                                                                        // 427
      class: "btn-delete-category"                                                                                     // 428
    }, HTML.I({                                                                                                        // 429
      class: "fa fa-trash-o"                                                                                           // 430
    }), " Delete Category"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            " ];
  }), "\n\n        "), "\n        ", HTML.DIV({                                                                        // 432
    class: "row"                                                                                                       // 433
  }, "\n            ", HTML.Raw('<div class="col-lg-12">\n                <div class="dash-item text-center">\n                    <h3>Story Categories</h3>\n                    <a class="btn btn-primary btn-create-category" data-category="blog">Add new category</a>\n                </div>\n            </div>'), "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("blogCategory"));                                                                // 435
  }, function() {                                                                                                      // 436
    return [ "\n                ", HTML.DIV({                                                                          // 437
      class: "col-lg-12"                                                                                               // 438
    }, "\n                    ", HTML.DIV({                                                                            // 439
      class: "dash-item flexed dash-category-container",                                                               // 440
      "data-category": "blog",                                                                                         // 441
      id: function() {                                                                                                 // 442
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 443
      }                                                                                                                // 444
    }, "\n                        ", HTML.DIV({                                                                        // 445
      class: "col-lg-2"                                                                                                // 446
    }, "\n                            ", HTML.H3(Blaze.View("lookup:name", function() {                                // 447
      return Spacebars.mustache(view.lookup("name"));                                                                  // 448
    })), "\n                        "), "\n\n                        ", HTML.DIV({                                     // 449
      class: "user-text-info col-lg-8"                                                                                 // 450
    }, "\n                            ", HTML.H4("Description:"), "\n                            ", HTML.P(Blaze.View("lookup:description", function() {
      return Spacebars.mustache(view.lookup("description"));                                                           // 452
    })), "\n                            ", HTML.P({                                                                    // 453
      class: "grid-item-footer"                                                                                        // 454
    }, "Featured: ", Blaze.View("lookup:featured", function() {                                                        // 455
      return Spacebars.mustache(view.lookup("featured"));                                                              // 456
    }), " | Created: ", Blaze.View("lookup:date", function() {                                                         // 457
      return Spacebars.mustache(view.lookup("date"));                                                                  // 458
    })), "\n                        "), "\n                        ", HTML.DIV({                                       // 459
      class: "user-operations col-lg-2"                                                                                // 460
    }, "\n                            ", HTML.DIV({                                                                    // 461
      class: "dropdown"                                                                                                // 462
    }, "\n                                ", HTML.BUTTON({                                                             // 463
      class: "dropbtn"                                                                                                 // 464
    }, "Options"), "\n                                ", HTML.DIV({                                                    // 465
      class: "dropdown-content"                                                                                        // 466
    }, "\n                                    ", HTML.A({                                                              // 467
      href: "",                                                                                                        // 468
      class: "btn-modify-category"                                                                                     // 469
    }, "Edit Info"), "\n                                    ", HTML.A({                                                // 470
      href: "",                                                                                                        // 471
      class: "btn-delete-category"                                                                                     // 472
    }, HTML.I({                                                                                                        // 473
      class: "fa fa-trash-o"                                                                                           // 474
    }), " Delete Category"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            " ];
  }), "\n\n        "), "\n    ");                                                                                      // 476
}));                                                                                                                   // 477
                                                                                                                       // 478
Template.__checkName("dashOrganizations");                                                                             // 479
Template["dashOrganizations"] = new Template("Template.dashOrganizations", (function() {                               // 480
  var view = this;                                                                                                     // 481
  return HTML.DIV({                                                                                                    // 482
    class: "container"                                                                                                 // 483
  }, "\n        ", HTML.DIV({                                                                                          // 484
    class: "row text-center mb-60"                                                                                     // 485
  }, "\n            ", HTML.Raw('<div class="col-lg-12">\n                <h2>Organizations</h2>\n            </div>'), "\n            ", HTML.DIV("\n                ", HTML.DIV({
    class: "col-lg-6"                                                                                                  // 487
  }, "\n                    ", HTML.Raw("<h5>Names</h5>"), "\n                    ", HTML.TEXTAREA({                   // 488
    id: "courseNames"                                                                                                  // 489
  }), "\n                "), "\n                ", HTML.DIV({                                                          // 490
    class: "col-lg-6"                                                                                                  // 491
  }, "\n                    ", HTML.Raw("<h5>Code</h5>"), "\n                    ", HTML.TEXTAREA({                    // 492
    id: "courseCodes"                                                                                                  // 493
  }), "\n                "), "\n                ", HTML.Raw('<div class="col-lg-12">\n                    <button class="btn btn-wide btn-primary" id="uploadCourses">Create Courses</button>\n                </div>'), "\n            "), "\n        "), "\n        ", HTML.DIV({
    class: "row"                                                                                                       // 495
  }, "\n            ", HTML.DIV({                                                                                      // 496
    class: "col-lg-6"                                                                                                  // 497
  }, "\n                ", HTML.DIV({                                                                                  // 498
    class: "dash-item"                                                                                                 // 499
  }, "\n                    ", HTML.Raw('<div class="dash-item-header text-center">\n                        <h3>Courses</h3>\n                        <p>These courses allow users to search and to categorize their posts as.</p>\n                    </div>'), "\n                    ", HTML.Raw("<hr>"), "\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("courses"));                                                                     // 501
  }, function() {                                                                                                      // 502
    return [ "\n                        ", HTML.DIV({                                                                  // 503
      class: "editor-options new-post draft-inline col-lg-6",                                                          // 504
      "data-category": "course",                                                                                       // 505
      id: function() {                                                                                                 // 506
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 507
      }                                                                                                                // 508
    }, "\n                            ", HTML.DIV("\n                                ", HTML.DIV({                     // 509
      class: "content-preview"                                                                                         // 510
    }, "\n                                    ", HTML.H4({                                                             // 511
      class: "draft-title"                                                                                             // 512
    }, Blaze.View("lookup:code", function() {                                                                          // 513
      return Spacebars.mustache(view.lookup("code"));                                                                  // 514
    })), "\n                                    ", HTML.H5(Blaze.View("lookup:name", function() {                      // 515
      return Spacebars.mustache(view.lookup("name"));                                                                  // 516
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 517
      class: "dropdown",                                                                                               // 518
      style: "max-width: 160px"                                                                                        // 519
    }, "\n                                    ", HTML.BUTTON({                                                         // 520
      class: "dropbtn"                                                                                                 // 521
    }, "Options"), "\n                                    ", HTML.DIV({                                                // 522
      class: "dropdown-content"                                                                                        // 523
    }, "\n                                        ", HTML.A({                                                          // 524
      href: "",                                                                                                        // 525
      class: "btn-delete"                                                                                              // 526
    }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
  }), "\n                    ", HTML.Raw("<hr>"), "\n                    ", HTML.Raw('<button class="btn btn-wide btn-primary" id="coursesLoadMore">Load More</button>'), "\n                "), "\n            "), "\n\n            ", HTML.DIV({
    class: "col-lg-6"                                                                                                  // 529
  }, "\n                ", HTML.DIV({                                                                                  // 530
    class: "dash-item"                                                                                                 // 531
  }, "\n                    ", HTML.Raw('<div class="dash-item-header text-center">\n                        <h3>Clubs</h3>\n                        <p>These clubs allow users to search and to categorize their posts as.</p>\n                        <a href="" class="btn btn-primary" id="createNewClub">Create a new club</a>\n                    </div>'), "\n                    ", HTML.Raw("<hr>"), "\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("clubs"));                                                                       // 533
  }, function() {                                                                                                      // 534
    return [ "\n                        ", HTML.DIV({                                                                  // 535
      class: "editor-options draft-inline col-lg-12",                                                                  // 536
      "data-category": "club",                                                                                         // 537
      id: function() {                                                                                                 // 538
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 539
      }                                                                                                                // 540
    }, "\n                            ", HTML.DIV("\n                                ", HTML.DIV({                     // 541
      class: "content-preview user-text-info"                                                                          // 542
    }, "\n                                    ", HTML.H4({                                                             // 543
      class: "draft-title"                                                                                             // 544
    }, Blaze.View("lookup:name", function() {                                                                          // 545
      return Spacebars.mustache(view.lookup("name"));                                                                  // 546
    })), "\n                                    ", HTML.H5(Blaze.View("lookup:description", function() {               // 547
      return Spacebars.mustache(view.lookup("description"));                                                           // 548
    })), "\n                                    ", HTML.SPAN({                                                         // 549
      class: "grid-item-footer"                                                                                        // 550
    }, "Room: ", Blaze.View("lookup:room", function() {                                                                // 551
      return Spacebars.mustache(view.lookup("room"));                                                                  // 552
    }), " | Schedule: ", Blaze.View("lookup:schedule", function() {                                                    // 553
      return Spacebars.mustache(view.lookup("schedule"));                                                              // 554
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 555
      class: "dropdown",                                                                                               // 556
      style: "max-width: 160px"                                                                                        // 557
    }, "\n                                    ", HTML.BUTTON({                                                         // 558
      class: "dropbtn"                                                                                                 // 559
    }, "Options"), "\n                                    ", HTML.DIV({                                                // 560
      class: "dropdown-content"                                                                                        // 561
    }, "\n                                        ", HTML.A({                                                          // 562
      href: "",                                                                                                        // 563
      class: "btn-delete"                                                                                              // 564
    }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
  }), "\n                    ", HTML.Raw("<hr>"), "\n                    ", HTML.Raw('<button class="btn btn-wide btn-primary" id="coursesLoadMore">Load More</button>'), "\n                "), "\n            "), "\n        "), "\n    ");
}));                                                                                                                   // 567
                                                                                                                       // 568
Template.__checkName("dashPostEditor");                                                                                // 569
Template["dashPostEditor"] = new Template("Template.dashPostEditor", (function() {                                     // 570
  var view = this;                                                                                                     // 571
  return HTML.DIV({                                                                                                    // 572
    class: "modal fade"                                                                                                // 573
  }, "\n        ", HTML.DIV({                                                                                          // 574
    class: "modal-dialog"                                                                                              // 575
  }, "\n            ", HTML.DIV({                                                                                      // 576
    class: "modal-content"                                                                                             // 577
  }, "\n                ", HTML.Raw('<div class="modal-header">\n                    <h4 class="modal-title">Editing Announcement Request Content</h4>\n                </div>'), "\n                ", HTML.DIV({
    class: "modal-body"                                                                                                // 579
  }, "\n                    ", HTML.FORM({                                                                             // 580
    class: "dash-announcement-edit"                                                                                    // 581
  }, "\n                        ", HTML.Raw('<div class="form-group">\n                            <label for="newPostHeadline">Headline</label>\n                            <input type="text" aria-describedby="textHeadline" placeholder="Enter a new headline" id="newPostHeadline">\n                        </div>'), "\n                        ", HTML.DIV({
    class: "form-group"                                                                                                // 583
  }, "\n                            ", HTML.Raw('<label for="newPostBody">Text Content</label>'), "\n                            ", HTML.TEXTAREA({
    placeholder: "Add your information here! 140 characters max.",                                                     // 585
    class: "announcement-text",                                                                                        // 586
    maxlength: "140",                                                                                                  // 587
    id: "newPostBody"                                                                                                  // 588
  }), "\n                        "), "\n                        ", HTML.Raw('<div class="form-group">\n                            <label for="newPostTags">Tags</label>\n                            <input data-role="tagsinput" class="announce-tags" placeholder="Write your tags here" id="newPostTags">\n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group">\n                            <label for="newPostCategories">Categories</label>\n                            <select name="category-selector" class="category-select" multiple="" style="width: 75%" id="newPostCategories">\n                            </select>\n                        </div>'), "\n                        ", HTML.Raw('<button type="submit" class="btn btn-primary btn-wide">Update</button>'), "\n                    "), "\n                "), "\n\n                ", HTML.Raw('<div class="modal-footer">\n                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n                </div>'), "\n\n            "), "\n        "), "\n    ");
}));                                                                                                                   // 590
                                                                                                                       // 591
Template.__checkName("dashCategoryEditor");                                                                            // 592
Template["dashCategoryEditor"] = new Template("Template.dashCategoryEditor", (function() {                             // 593
  var view = this;                                                                                                     // 594
  return HTML.DIV({                                                                                                    // 595
    class: "modal fade"                                                                                                // 596
  }, "\n        ", HTML.DIV({                                                                                          // 597
    class: "modal-dialog"                                                                                              // 598
  }, "\n            ", HTML.DIV({                                                                                      // 599
    class: "modal-content"                                                                                             // 600
  }, "\n                ", HTML.Raw('<div class="modal-header">\n                    <h4 class="modal-title">Creating New Category</h4>\n                </div>'), "\n                ", HTML.DIV({
    class: "modal-body"                                                                                                // 602
  }, "\n                    ", HTML.FORM({                                                                             // 603
    class: "dash-category-edit"                                                                                        // 604
  }, "\n                        ", HTML.Raw('<div class="form-group">\n                            <label for="newPostHeadline">Name of Category</label>\n                            <input type="text" aria-describedby="textHeadline" placeholder="Type Here" id="newCategoryName">\n                        </div>'), "\n                        ", HTML.DIV({
    class: "form-group"                                                                                                // 606
  }, "\n                            ", HTML.Raw('<label for="newPostBody">Description of Category</label>'), "\n                            ", HTML.TEXTAREA({
    placeholder: "Describe this category here",                                                                        // 608
    class: "announcement-text",                                                                                        // 609
    maxlength: "140",                                                                                                  // 610
    id: "newCategoryDescription"                                                                                       // 611
  }), "\n                        "), "\n                        ", HTML.Raw('<div class="form-group">\n                            <form action="/file-upload" class="dropzone category-image" id="newCategoryImage"></form>\n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group">\n                            <h4>Options</h4>\n                            <input type="checkbox" class="ios8-switch ios8-switch-lg" id="newCategoryFeatured">\n                            <label for="newCategoryFeatured">Featured Category</label>\n                        </div>'), "\n                        ", HTML.Raw('<button type="submit" class="btn btn-primary btn-wide">Create</button>'), "\n                    "), "\n                "), "\n\n                ", HTML.Raw('<div class="modal-footer">\n                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n                </div>'), "\n\n            "), "\n        "), "\n    ");
}));                                                                                                                   // 613
                                                                                                                       // 614
Template.__checkName("dashClubEditor");                                                                                // 615
Template["dashClubEditor"] = new Template("Template.dashClubEditor", (function() {                                     // 616
  var view = this;                                                                                                     // 617
  return HTML.DIV({                                                                                                    // 618
    class: "modal fade"                                                                                                // 619
  }, "\n        ", HTML.DIV({                                                                                          // 620
    class: "modal-dialog"                                                                                              // 621
  }, "\n            ", HTML.DIV({                                                                                      // 622
    class: "modal-content"                                                                                             // 623
  }, "\n                ", HTML.Raw('<div class="modal-header">\n                    <h4 class="modal-title">Creating New Club</h4>\n                </div>'), "\n                ", HTML.DIV({
    class: "modal-body"                                                                                                // 625
  }, "\n                    ", HTML.FORM({                                                                             // 626
    class: "dash-club-edit"                                                                                            // 627
  }, "\n                        ", HTML.Raw('<div class="form-group">\n                            <label for="newPostHeadline">Name of Club</label>\n                            <input type="text" aria-describedby="textHeadline" placeholder="Type Here" id="newClubName">\n                        </div>'), "\n                        ", HTML.DIV({
    class: "form-group"                                                                                                // 629
  }, "\n                            ", HTML.Raw('<label for="newPostBody">Description</label>'), "\n                            ", HTML.TEXTAREA({
    placeholder: "Describe this category here",                                                                        // 631
    class: "announcement-text",                                                                                        // 632
    maxlength: "400",                                                                                                  // 633
    id: "newClubDescription"                                                                                           // 634
  }), "\n                        "), "\n                        ", HTML.Raw('<div class="form-group">\n                            <label for="newPostHeadline">Meeting Room</label>\n                            <input type="text" aria-describedby="textHeadline" placeholder="Type Here" id="newClubRoom">\n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group">\n                            <label for="newPostHeadline">General Meeting schedule</label>\n                            <input type="text" aria-describedby="textHeadline" placeholder="Type Here" id="newClubSchedule">\n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group">\n                            <label for="newClubImage">Club Image</label>\n                            <form action="/file-upload" class="dropzone category-image" id="newClubImage"></form>\n                        </div>'), "\n                        ", HTML.Raw('<button type="submit" class="btn btn-primary btn-wide">Submit</button>'), "\n                    "), "\n                "), "\n\n                ", HTML.Raw('<div class="modal-footer">\n                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n                </div>'), "\n\n            "), "\n        "), "\n    ");
}));                                                                                                                   // 636
                                                                                                                       // 637
Template.__checkName("dashRoleEditor");                                                                                // 638
Template["dashRoleEditor"] = new Template("Template.dashRoleEditor", (function() {                                     // 639
  var view = this;                                                                                                     // 640
  return HTML.DIV({                                                                                                    // 641
    class: "modal fade"                                                                                                // 642
  }, "\n        ", HTML.DIV({                                                                                          // 643
    class: "modal-dialog"                                                                                              // 644
  }, "\n            ", HTML.DIV({                                                                                      // 645
    class: "modal-content"                                                                                             // 646
  }, "\n                ", HTML.DIV({                                                                                  // 647
    class: "modal-header"                                                                                              // 648
  }, "\n                    ", HTML.H4({                                                                               // 649
    class: "modal-title"                                                                                               // 650
  }, "Editing ", Blaze.View("lookup:name", function() {                                                                // 651
    return Spacebars.mustache(view.lookup("name"));                                                                    // 652
  }), "'s Roles"), "\n                "), "\n                ", HTML.Raw('<div class="modal-body">\n                    <form class="dash-role-edit">\n                        <div class="form-group">\n                            <select name="category-selector" class="category-select" multiple="" style="width: 75%" id="newUserRoles">\n                                <option value="student">Student</option>\n                                <option value="teacher">Teacher</option>\n                                <option value="admin">**Admin**</option>\n                                <option value="blogEditor">Allowed to create Blog</option>\n                                <option value="announcementEditor">Allowed to submit announcements</option>\n                            </select>\n                        </div>\n                        <button type="submit" class="btn btn-primary btn-wide">Update</button>\n                    </form>\n                </div>'), "\n\n                ", HTML.Raw('<div class="modal-footer">\n                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n                </div>'), "\n\n            "), "\n        "), "\n    ");
}));                                                                                                                   // 654
                                                                                                                       // 655
Template.__checkName("dashSuggestions");                                                                               // 656
Template["dashSuggestions"] = new Template("Template.dashSuggestions", (function() {                                   // 657
  var view = this;                                                                                                     // 658
  return HTML.DIV({                                                                                                    // 659
    class: "container"                                                                                                 // 660
  }, HTML.Raw('\n        <div class="row text-center mb-60">\n            <div class="col-lg-12">\n                <h2>Suggestions</h2>\n            </div>\n        </div>\n        '), HTML.DIV({
    class: "row"                                                                                                       // 662
  }, "\n            ", HTML.DIV({                                                                                      // 663
    class: "col-lg-12"                                                                                                 // 664
  }, "\n                ", HTML.DIV({                                                                                  // 665
    class: "dash-item"                                                                                                 // 666
  }, "\n                    ", Blaze.Each(function() {                                                                 // 667
    return Spacebars.call(view.lookup("suggestion"));                                                                  // 668
  }, function() {                                                                                                      // 669
    return [ "\n                        ", Blaze.If(function() {                                                       // 670
      return Spacebars.call(view.lookup("noImage"));                                                                   // 671
    }, function() {                                                                                                    // 672
      return [ "\n                            ", HTML.DIV({                                                            // 673
        class: "editor-options new-post with-image draft-inline",                                                      // 674
        id: function() {                                                                                               // 675
          return Spacebars.mustache(view.lookup("_id"));                                                               // 676
        }                                                                                                              // 677
      }, "\n                                ", HTML.DIV("\n                                    ", HTML.DIV({           // 678
        class: "flexed mb-15"                                                                                          // 679
      }, "\n                                        ", HTML.DIV({                                                      // 680
        class: "content-preview"                                                                                       // 681
      }, "\n                                            ", HTML.H3({                                                   // 682
        class: "draft-title"                                                                                           // 683
      }, Blaze.View("lookup:headline", function() {                                                                    // 684
        return Spacebars.mustache(view.lookup("headline"));                                                            // 685
      })), "\n                                            ", HTML.P({                                                  // 686
        class: "meta"                                                                                                  // 687
      }, Blaze.View("lookup:writer", function() {                                                                      // 688
        return Spacebars.mustache(view.lookup("writer"));                                                              // 689
      }), " | ", Blaze.View("lookup:draftedDate", function() {                                                         // 690
        return Spacebars.mustache(view.lookup("draftedDate"));                                                         // 691
      }), " "), "\n                                            ", HTML.P({                                             // 692
        class: "draft-body"                                                                                            // 693
      }, Blaze.View("lookup:content", function() {                                                                     // 694
        return Spacebars.mustache(view.lookup("content"));                                                             // 695
      })), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV("\n                                        ", HTML.BUTTON({
        class: "btn btn-reject-suggestion"                                                                             // 697
      }, HTML.I({                                                                                                      // 698
        class: "fa fa-times"                                                                                           // 699
      }), " Remove"), "\n                                    "), "\n                                "), "\n                            "), "\n                        " ];
    }, function() {                                                                                                    // 701
      return [ "\n                            ", HTML.DIV({                                                            // 702
        class: "editor-options new-post with-image draft-inline",                                                      // 703
        id: function() {                                                                                               // 704
          return Spacebars.mustache(view.lookup("_id"));                                                               // 705
        }                                                                                                              // 706
      }, "\n                                ", HTML.DIV("\n                                    ", HTML.DIV({           // 707
        class: "flexed mb-15"                                                                                          // 708
      }, "\n                                        ", HTML.DIV({                                                      // 709
        class: "image-preview"                                                                                         // 710
      }, "\n                                            ", HTML.IMG({                                                  // 711
        src: function() {                                                                                              // 712
          return Spacebars.mustache(view.lookup("imageLink"));                                                         // 713
        },                                                                                                             // 714
        class: "img-responsive"                                                                                        // 715
      }), "\n                                        "), "\n                                        ", HTML.DIV({      // 716
        class: "content-preview"                                                                                       // 717
      }, "\n                                            ", HTML.H3({                                                   // 718
        class: "draft-title"                                                                                           // 719
      }, Blaze.View("lookup:headline", function() {                                                                    // 720
        return Spacebars.mustache(view.lookup("headline"));                                                            // 721
      })), "\n                                            ", HTML.P({                                                  // 722
        class: "meta"                                                                                                  // 723
      }, Blaze.View("lookup:writer", function() {                                                                      // 724
        return Spacebars.mustache(view.lookup("writer"));                                                              // 725
      }), " | ", Blaze.View("lookup:draftedDate", function() {                                                         // 726
        return Spacebars.mustache(view.lookup("draftedDate"));                                                         // 727
      }), " "), "\n                                            ", HTML.P({                                             // 728
        class: "draft-body"                                                                                            // 729
      }, Blaze.View("lookup:content", function() {                                                                     // 730
        return Spacebars.mustache(view.lookup("content"));                                                             // 731
      })), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV("\n                                        ", HTML.BUTTON({
        class: "btn btn-reject"                                                                                        // 733
      }, HTML.I({                                                                                                      // 734
        class: "fa fa-times"                                                                                           // 735
      }), " Remove"), "\n                                    "), "\n                                "), "\n                            "), "\n                        " ];
    }), "\n\n                        ", HTML.HR(), "\n                    " ];                                         // 737
  }), "\n                    ", HTML.Raw('<a href="" class="btn btn-wide btn-primary">Load More</a>'), "\n                "), "\n            "), "\n        "), "\n    ");
}));                                                                                                                   // 739
                                                                                                                       // 740
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"details.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/details.html                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.details.js");                                                                     // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.details.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.details.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("details");                                                                                       // 2
Template["details"] = new Template("Template.details", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return [ Blaze._TemplateWith(function() {                                                                            // 5
    return {                                                                                                           // 6
      oper: Spacebars.call("true")                                                                                     // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("navigation"));                                                       // 10
  }), "\n    ", HTML.DIV({                                                                                             // 11
    class: "main post-body"                                                                                            // 12
  }, "\n        ", HTML.DIV({                                                                                          // 13
    class: "container-fluid post-header center-wrapper",                                                               // 14
    style: function() {                                                                                                // 15
      return [ "background-image: url(", Spacebars.mustache(view.lookup("postSplash")), ")" ];                         // 16
    }                                                                                                                  // 17
  }, "\n            ", HTML.DIV("\n                ", HTML.H1(Blaze.View("lookup:postSubtitle", function() {           // 18
    return Spacebars.mustache(view.lookup("postSubtitle"));                                                            // 19
  })), "\n            "), "\n            ", HTML.DIV({                                                                 // 20
    class: "navbar-fixed-bottom text-center text-capitalize scroll-down"                                               // 21
  }, "\n                ", HTML.P(Blaze.View("lookup:_", function() {                                                  // 22
    return Spacebars.mustache(view.lookup("_"), "details.scroll");                                                     // 23
  })), "\n                ", HTML.Raw('<div class="bounce arrow"></div>'), "\n            "), "\n        "), "\n        ", HTML.DIV({
    class: "container mb-30"                                                                                           // 25
  }, "\n            ", HTML.DIV({                                                                                      // 26
    class: "post-info mt-30"                                                                                           // 27
  }, "\n                ", HTML.DIV({                                                                                  // 28
    class: "key-info"                                                                                                  // 29
  }, "\n                    ", HTML.DIV({                                                                              // 30
    class: "author-img-container"                                                                                      // 31
  }, "\n                        ", HTML.IMG({                                                                          // 32
    src: function() {                                                                                                  // 33
      return Spacebars.mustache(view.lookup("picture"));                                                               // 34
    },                                                                                                                 // 35
    height: "45",                                                                                                      // 36
    class: "img-circle"                                                                                                // 37
  }), "\n                    "), "\n                    ", HTML.DIV("\n                        ", HTML.SPAN({          // 38
    class: "name"                                                                                                      // 39
  }, Blaze.View("lookup:name", function() {                                                                            // 40
    return Spacebars.mustache(view.lookup("name"));                                                                    // 41
  })), "\n                        ", HTML.SPAN({                                                                       // 42
    class: "description"                                                                                               // 43
  }, Blaze.View("lookup:tagline", function() {                                                                         // 44
    return Spacebars.mustache(view.lookup("tagline"));                                                                 // 45
  })), "\n                    "), "\n                "), "\n                ", HTML.DIV({                              // 46
    class: "other-info"                                                                                                // 47
  }, "\n                    ", HTML.SPAN({                                                                             // 48
    class: "name"                                                                                                      // 49
  }, Blaze.View("lookup:_", function() {                                                                               // 50
    return Spacebars.mustache(view.lookup("_"), "details.poseted_date");                                               // 51
  }), ": July 29th, 2017"), "\n                    ", HTML.SPAN("Tags:\n                        ", Blaze.View("lookup:postTags", function() {
    return Spacebars.mustache(view.lookup("postTags"));                                                                // 53
  }), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({                // 54
    class: "post-text mt-30"                                                                                           // 55
  }, "\n                ", Blaze.View("lookup:postBody", function() {                                                  // 56
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("postBody")));                                             // 57
  }), "\n            "), "\n        "), "\n", HTML.Raw('<!--        <div class="container post-after mb-60">\n            <div class="credit-info mb-30">\n                <span>This is where all the credit info will go. Including bibliography and citations.</span>\n            </div>\n            <hr />\n            <div class="recommendation">\n                <h2 class="mb-15 text-center text-capitalize">Further Reading</h2>\n                <div class="row">\n                    &lt;!&ndash; I guess we can go for a carousel here &ndash;&gt;\n                    <div class="col-md-3">\n                        <div class="recommend-card">\n                            <img class="img-responsive" src="/img/test.jpg" />\n                            <div class="editor-card">\n                                <h3>This is a recommended post</h3>\n                                <p>Yonglin Wang</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-3">\n                        <div class="recommend-card">\n                            <img class="img-responsive" src="/img/test.jpg" />\n                            <div class="editor-card">\n                                <h3>This is a recommended post</h3>\n                                <p>Yonglin Wang</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-3">\n                        <div class="recommend-card">\n                            <img class="img-responsive" src="/img/test.jpg" />\n                            <div class="editor-card">\n                                <h3>This is a recommended post</h3>\n                                <p>Yonglin Wang</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-3">\n                        <div class="recommend-card">\n                            <img class="img-responsive" src="/img/test.jpg" />\n                            <div class="editor-card">\n                                <h3>This is a recommended post</h3>\n                                <p>Yonglin Wang</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>-->'), "\n        ", HTML.FOOTER({
    class: "text-center"                                                                                               // 59
  }, "\n            ", HTML.DIV({                                                                                      // 60
    class: "container"                                                                                                 // 61
  }, "\n                ", HTML.H3(Blaze.View("lookup:_", function() {                                                 // 62
    return Spacebars.mustache(view.lookup("_"), "branding");                                                           // 63
  })), "\n                ", HTML.P(Blaze.View("lookup:_", function() {                                                // 64
    return Spacebars.mustache(view.lookup("_"), "tagline");                                                            // 65
  })), "\n            "), "\n        "), "\n    ") ];                                                                  // 66
}));                                                                                                                   // 67
                                                                                                                       // 68
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"firstTime.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/firstTime.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.firstTime.js");                                                                   // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.firstTime.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.firstTime.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("firstTime");                                                                                     // 2
Template["firstTime"] = new Template("Template.firstTime", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "image-container full-height",                                                                              // 6
    style: "background-image: url('/img/home-bg.jpg')"                                                                 // 7
  }, "\n        ", Blaze.If(function() {                                                                               // 8
    return Spacebars.dataMustache(view.lookup("isInRole"), "student");                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n            ", HTML.DIV({                                                                              // 11
      class: "container"                                                                                               // 12
    }, "\n            ", HTML.DIV({                                                                                    // 13
      class: "row"                                                                                                     // 14
    }, "\n                ", HTML.DIV({                                                                                // 15
      class: "col-sm-8 col-sm-offset-2"                                                                                // 16
    }, "\n                    ", HTML.DIV({                                                                            // 17
      class: "wizard-container"                                                                                        // 18
    }, "\n                        ", HTML.DIV({                                                                        // 19
      class: "card"                                                                                                    // 20
    }, "\n                            ", HTML.DIV({                                                                    // 21
      class: "card-head"                                                                                               // 22
    }, "\n                                ", HTML.DIV({                                                                // 23
      id: "firstIntro"                                                                                                 // 24
    }, "\n                                    ", HTML.H2(Blaze.View("lookup:_", function() {                           // 25
      return Spacebars.mustache(view.lookup("_"), "first.greet");                                                      // 26
    })), "\n                                    ", HTML.P(Blaze.View("lookup:_", function() {                          // 27
      return Spacebars.mustache(view.lookup("_"), "first.greet_more");                                                 // 28
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 29
      id: "teachIntro",                                                                                                // 30
      hidden: ""                                                                                                       // 31
    }, "\n                                    ", HTML.H2(Blaze.View("lookup:_", function() {                           // 32
      return Spacebars.mustache(view.lookup("_"), "first.teach");                                                      // 33
    })), "\n                                    ", HTML.P("\n                                        ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "first.teach_more");                                                 // 35
    }), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      id: "emailIntro",                                                                                                // 37
      hidden: ""                                                                                                       // 38
    }, "\n                                    ", HTML.H2(Blaze.View("lookup:_", function() {                           // 39
      return Spacebars.mustache(view.lookup("_"), "first.news");                                                       // 40
    })), "\n                                    ", HTML.P(Blaze.View("lookup:_", function() {                          // 41
      return Spacebars.mustache(view.lookup("_"), "first.news_more");                                                  // 42
    })), "\n                                    ", HTML.P(Blaze.View("lookup:_", function() {                          // 43
      return Spacebars.mustache(view.lookup("_"), "first.news_inst");                                                  // 44
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 45
      id: "confirmIntro",                                                                                              // 46
      hidden: ""                                                                                                       // 47
    }, "\n                                    ", HTML.H2(Blaze.View("lookup:_", function() {                           // 48
      return Spacebars.mustache(view.lookup("_"), "first.confirm");                                                    // 49
    })), "\n                                    ", HTML.P("\n                                        ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "first.confirm_more");                                               // 51
    }), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.HR(), "\n                            ", HTML.DIV({
      class: "card-body"                                                                                               // 53
    }, "\n                                ", HTML.DIV({                                                                // 54
      class: "info-form",                                                                                              // 55
      id: "beginIntro"                                                                                                 // 56
    }, "\n                                    ", HTML.A({                                                              // 57
      href: "",                                                                                                        // 58
      class: "btn btn-lg btn-login",                                                                                   // 59
      id: "startFirst"                                                                                                 // 60
    }, "\n                                        ", Blaze.View("lookup:_", function() {                               // 61
      return Spacebars.mustache(view.lookup("_"), "first.btn.intro");                                                  // 62
    }), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      class: "info-form",                                                                                              // 64
      id: "teachAssistInfo",                                                                                           // 65
      hidden: ""                                                                                                       // 66
    }, "\n                                    ", HTML.FORM({                                                           // 67
      class: "teach-assist-login",                                                                                     // 68
      id: "teachAssistForm"                                                                                            // 69
    }, "\n                                        ", HTML.INPUT({                                                      // 70
      type: "text",                                                                                                    // 71
      id: "teachUser",                                                                                                 // 72
      placeholder: function() {                                                                                        // 73
        return Spacebars.mustache(view.lookup("_"), "first.input.sNum");                                               // 74
      }                                                                                                                // 75
    }), "\n                                        ", HTML.INPUT({                                                     // 76
      type: "password",                                                                                                // 77
      id: "teachPass",                                                                                                 // 78
      placeholder: function() {                                                                                        // 79
        return Spacebars.mustache(view.lookup("_"), "first.input.sPass");                                              // 80
      }                                                                                                                // 81
    }), "\n                                        ", HTML.INPUT({                                                     // 82
      type: "submit",                                                                                                  // 83
      class: "btn btn-primary btn-lg btn-login mb-15",                                                                 // 84
      value: function() {                                                                                              // 85
        return Spacebars.mustache(view.lookup("_"), "first.btn.authorize");                                            // 86
      }                                                                                                                // 87
    }), "\n                                    "), "\n                                    ", HTML.DIV({                // 88
      class: "teachLoader",                                                                                            // 89
      hidden: ""                                                                                                       // 90
    }, "\n                                        ", HTML.I({                                                          // 91
      class: "fa fa-spinner fa-pulse fa-5x fa-fw"                                                                      // 92
    }), "\n                                        ", HTML.SPAN({                                                      // 93
      class: "sr-only"                                                                                                 // 94
    }, Blaze.View("lookup:_", function() {                                                                             // 95
      return Spacebars.mustache(view.lookup("_"), "loading");                                                          // 96
    })), "\n                                    "), "\n                                    ", HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "first.teach_skip");                                                 // 98
    }), " ", HTML.A({                                                                                                  // 99
      href: "",                                                                                                        // 100
      id: "skipNext"                                                                                                   // 101
    }, Blaze.View("lookup:_", function() {                                                                             // 102
      return Spacebars.mustache(view.lookup("_"), "first.btn.skip");                                                   // 103
    }))), "\n                                "), "\n                                ", HTML.DIV({                      // 104
      class: "info-form",                                                                                              // 105
      id: "subscriptionEmail",                                                                                         // 106
      hidden: ""                                                                                                       // 107
    }, "\n                                    ", HTML.FORM({                                                           // 108
      id: "newsletterEmailForm"                                                                                        // 109
    }, "\n                                        ", HTML.INPUT({                                                      // 110
      type: "email",                                                                                                   // 111
      placeholder: "Your Email",                                                                                       // 112
      id: "personalEmail"                                                                                              // 113
    }), "\n                                        ", HTML.INPUT({                                                     // 114
      type: "submit",                                                                                                  // 115
      class: "btn btn-primary btn-lg btn-login mb-15",                                                                 // 116
      value: function() {                                                                                              // 117
        return Spacebars.mustache(view.lookup("_"), "first.btn.signup");                                               // 118
      }                                                                                                                // 119
    }), "\n                                        ", HTML.SPAN(Blaze.View("lookup:_", function() {                    // 120
      return Spacebars.mustache(view.lookup("_"), "first.news_skip");                                                  // 121
    }), " ", HTML.A({                                                                                                  // 122
      href: "",                                                                                                        // 123
      id: "skipEmail"                                                                                                  // 124
    }, Blaze.View("lookup:_", function() {                                                                             // 125
      return Spacebars.mustache(view.lookup("_"), "first.btn.skip");                                                   // 126
    }))), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      class: "info-form",                                                                                              // 128
      id: "confirmDetails",                                                                                            // 129
      hidden: ""                                                                                                       // 130
    }, "\n                                    ", HTML.FORM({                                                           // 131
      class: "form",                                                                                                   // 132
      id: "finalForm"                                                                                                  // 133
    }, "\n                                        ", HTML.LABEL({                                                      // 134
      for: "introName"                                                                                                 // 135
    }, Blaze.View("lookup:_", function() {                                                                             // 136
      return Spacebars.mustache(view.lookup("_"), "first.input.cName");                                                // 137
    })), "\n                                        ", HTML.INPUT({                                                    // 138
      type: "text",                                                                                                    // 139
      id: "introName",                                                                                                 // 140
      disabled: ""                                                                                                     // 141
    }), "\n                                        ", HTML.LABEL({                                                     // 142
      for: "introStudentNum"                                                                                           // 143
    }, Blaze.View("lookup:_", function() {                                                                             // 144
      return Spacebars.mustache(view.lookup("_"), "first.input.cNum");                                                 // 145
    })), "\n                                        ", HTML.INPUT({                                                    // 146
      type: "text",                                                                                                    // 147
      id: "introStudentNum",                                                                                           // 148
      disabled: ""                                                                                                     // 149
    }), "\n                                        ", HTML.LABEL({                                                     // 150
      for: "introSubEmail"                                                                                             // 151
    }, Blaze.View("lookup:_", function() {                                                                             // 152
      return Spacebars.mustache(view.lookup("_"), "first.input.cMail");                                                // 153
    })), "\n                                        ", HTML.INPUT({                                                    // 154
      type: "email",                                                                                                   // 155
      id: "introSubEmail",                                                                                             // 156
      disabled: ""                                                                                                     // 157
    }), "\n                                        ", HTML.DIV({                                                       // 158
      class: "form-group"                                                                                              // 159
    }, "\n                                            ", HTML.INPUT({                                                  // 160
      type: "checkbox",                                                                                                // 161
      class: "ios8-switch",                                                                                            // 162
      id: "checkboxTerms"                                                                                              // 163
    }), "\n                                            ", HTML.LABEL({                                                 // 164
      for: "checkboxTerms"                                                                                             // 165
    }, Blaze.View("lookup:_", function() {                                                                             // 166
      return Spacebars.mustache(view.lookup("_"), "first.input.cTerms");                                               // 167
    })), "\n                                        "), "\n                                        ", HTML.INPUT({     // 168
      type: "submit",                                                                                                  // 169
      class: "btn btn-lg btn-login",                                                                                   // 170
      value: function() {                                                                                              // 171
        return Spacebars.mustache(view.lookup("_"), "first.btn.done");                                                 // 172
      }                                                                                                                // 173
    }), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      class: "final-message",                                                                                          // 175
      hidden: ""                                                                                                       // 176
    }, "\n                        ", HTML.H1(Blaze.View("lookup:_", function() {                                       // 177
      return Spacebars.mustache(view.lookup("_"), "first.done");                                                       // 178
    })), "\n                        ", HTML.H2(Blaze.View("lookup:_", function() {                                     // 179
      return Spacebars.mustache(view.lookup("_"), "first.done_more");                                                  // 180
    })), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        " ];           // 181
  }, function() {                                                                                                      // 182
    return [ "\n            ", HTML.DIV({                                                                              // 183
      class: "container"                                                                                               // 184
    }, "\n            ", HTML.DIV({                                                                                    // 185
      class: "row"                                                                                                     // 186
    }, "\n                ", HTML.DIV({                                                                                // 187
      class: "col-sm-8 col-sm-offset-2"                                                                                // 188
    }, "\n                    ", HTML.DIV({                                                                            // 189
      class: "wizard-container"                                                                                        // 190
    }, "\n                        ", HTML.DIV({                                                                        // 191
      class: "card"                                                                                                    // 192
    }, "\n                            ", HTML.DIV({                                                                    // 193
      class: "card-head"                                                                                               // 194
    }, "\n                                ", HTML.DIV({                                                                // 195
      id: "firstIntro"                                                                                                 // 196
    }, "\n                                    ", HTML.H2(Blaze.View("lookup:_", function() {                           // 197
      return Spacebars.mustache(view.lookup("_"), "first.greet");                                                      // 198
    })), "\n                                    ", HTML.P(Blaze.View("lookup:_", function() {                          // 199
      return Spacebars.mustache(view.lookup("_"), "first.greet_more");                                                 // 200
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 201
      id: "teachIntro",                                                                                                // 202
      hidden: ""                                                                                                       // 203
    }, "\n                                    ", HTML.H2(Blaze.View("lookup:_", function() {                           // 204
      return Spacebars.mustache(view.lookup("_"), "first.teach_t");                                                    // 205
    })), "\n                                    ", HTML.P("\n                                        ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "first.teach_t_more");                                               // 207
    }), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      id: "emailIntro",                                                                                                // 209
      hidden: ""                                                                                                       // 210
    }, "\n                                    ", HTML.H2(Blaze.View("lookup:_", function() {                           // 211
      return Spacebars.mustache(view.lookup("_"), "first.news");                                                       // 212
    })), "\n                                    ", HTML.P(Blaze.View("lookup:_", function() {                          // 213
      return Spacebars.mustache(view.lookup("_"), "first.news_more");                                                  // 214
    })), "\n                                    ", HTML.P(Blaze.View("lookup:_", function() {                          // 215
      return Spacebars.mustache(view.lookup("_"), "first.news_inst");                                                  // 216
    })), "\n                                "), "\n                                ", HTML.DIV({                       // 217
      id: "confirmIntro",                                                                                              // 218
      hidden: ""                                                                                                       // 219
    }, "\n                                    ", HTML.H2(Blaze.View("lookup:_", function() {                           // 220
      return Spacebars.mustache(view.lookup("_"), "first.confirm");                                                    // 221
    })), "\n                                    ", HTML.P("\n                                        ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "first.confirm_t_more");                                             // 223
    }), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.HR(), "\n                            ", HTML.DIV({
      class: "card-body"                                                                                               // 225
    }, "\n                                ", HTML.DIV({                                                                // 226
      class: "info-form",                                                                                              // 227
      id: "beginIntro"                                                                                                 // 228
    }, "\n                                    ", HTML.A({                                                              // 229
      href: "",                                                                                                        // 230
      class: "btn btn-lg btn-login",                                                                                   // 231
      id: "startFirst"                                                                                                 // 232
    }, "\n                                        ", Blaze.View("lookup:_", function() {                               // 233
      return Spacebars.mustache(view.lookup("_"), "first.btn.intro");                                                  // 234
    }), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      class: "info-form",                                                                                              // 236
      id: "teachAssistInfo",                                                                                           // 237
      hidden: ""                                                                                                       // 238
    }, "\n                                    ", HTML.FORM({                                                           // 239
      class: "select-organizations",                                                                                   // 240
      id: "organizationsForm"                                                                                          // 241
    }, "\n                                        ", HTML.DIV({                                                        // 242
      class: "form-group mb-15"                                                                                        // 243
    }, "\n                                            ", HTML.LABEL({                                                  // 244
      for: "firstCourseSelect"                                                                                         // 245
    }, Blaze.View("lookup:_", function() {                                                                             // 246
      return Spacebars.mustache(view.lookup("_"), "first.input.tCourse");                                              // 247
    })), "\n                                            ", HTML.SELECT({                                               // 248
      name: "category-selector",                                                                                       // 249
      class: "category-select ",                                                                                       // 250
      id: "firstCourseSelect",                                                                                         // 251
      multiple: "",                                                                                                    // 252
      style: "width: 60%"                                                                                              // 253
    }), "\n                                        "), "\n                                        ", HTML.DIV({        // 254
      class: "form-group mb-15"                                                                                        // 255
    }, "\n                                            ", HTML.LABEL({                                                  // 256
      for: "firstClubSelect"                                                                                           // 257
    }, Blaze.View("lookup:_", function() {                                                                             // 258
      return Spacebars.mustache(view.lookup("_"), "first.input.tClub");                                                // 259
    })), "\n                                            ", HTML.SELECT({                                               // 260
      name: "category-selector",                                                                                       // 261
      class: "category-select mb-15",                                                                                  // 262
      id: "firstClubSelect",                                                                                           // 263
      multiple: "",                                                                                                    // 264
      style: "width: 60%"                                                                                              // 265
    }), "\n                                        "), "\n                                        ", HTML.INPUT({      // 266
      type: "submit",                                                                                                  // 267
      class: "btn btn-primary btn-lg btn-login mb-15",                                                                 // 268
      value: "Confirm"                                                                                                 // 269
    }), "\n                                    "), "\n                                    ", HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "first.teach_t_skip");                                               // 271
    }), " ", HTML.A({                                                                                                  // 272
      href: "",                                                                                                        // 273
      id: "skipNext"                                                                                                   // 274
    }, Blaze.View("lookup:_", function() {                                                                             // 275
      return Spacebars.mustache(view.lookup("_"), "first.btn.skip");                                                   // 276
    }))), "\n                                "), "\n                                ", HTML.DIV({                      // 277
      class: "info-form",                                                                                              // 278
      id: "subscriptionEmail",                                                                                         // 279
      hidden: ""                                                                                                       // 280
    }, "\n                                    ", HTML.FORM({                                                           // 281
      id: "newsletterEmailForm"                                                                                        // 282
    }, "\n                                        ", HTML.INPUT({                                                      // 283
      type: "email",                                                                                                   // 284
      placeholder: "Your Email",                                                                                       // 285
      id: "personalEmail"                                                                                              // 286
    }), "\n                                        ", HTML.INPUT({                                                     // 287
      type: "submit",                                                                                                  // 288
      class: "btn btn-primary btn-lg btn-login mb-15",                                                                 // 289
      value: "Join the club"                                                                                           // 290
    }), "\n                                        ", HTML.SPAN(Blaze.View("lookup:_", function() {                    // 291
      return Spacebars.mustache(view.lookup("_"), "first.news_skip");                                                  // 292
    }), " ", HTML.A({                                                                                                  // 293
      href: "",                                                                                                        // 294
      id: "skipEmail"                                                                                                  // 295
    }, Blaze.View("lookup:_", function() {                                                                             // 296
      return Spacebars.mustache(view.lookup("_"), "first.btn.skip");                                                   // 297
    }))), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      class: "info-form",                                                                                              // 299
      id: "confirmDetails",                                                                                            // 300
      hidden: ""                                                                                                       // 301
    }, "\n                                    ", HTML.FORM({                                                           // 302
      class: "form",                                                                                                   // 303
      id: "finalForm"                                                                                                  // 304
    }, "\n                                        ", HTML.LABEL({                                                      // 305
      for: "introName"                                                                                                 // 306
    }, Blaze.View("lookup:_", function() {                                                                             // 307
      return Spacebars.mustache(view.lookup("_"), "first.input.cName");                                                // 308
    })), "\n                                        ", HTML.INPUT({                                                    // 309
      type: "text",                                                                                                    // 310
      id: "introName",                                                                                                 // 311
      disabled: ""                                                                                                     // 312
    }), "\n                                        ", HTML.LABEL({                                                     // 313
      for: "introTagLine"                                                                                              // 314
    }, "Tag line: max 25 characters"), "\n                                        ", HTML.INPUT({                      // 315
      type: "text",                                                                                                    // 316
      id: "introTagLine",                                                                                              // 317
      placeholder: "'English Teacher, Thrill lover', 'I love uhs' ...",                                                // 318
      maxlength: "25"                                                                                                  // 319
    }), "\n                                        ", HTML.LABEL({                                                     // 320
      for: "introSubEmail"                                                                                             // 321
    }, Blaze.View("lookup:_", function() {                                                                             // 322
      return Spacebars.mustache(view.lookup("_"), "first.input.cMail");                                                // 323
    })), "\n                                        ", HTML.INPUT({                                                    // 324
      type: "email",                                                                                                   // 325
      id: "introSubEmail",                                                                                             // 326
      disabled: ""                                                                                                     // 327
    }), "\n                                        ", HTML.DIV({                                                       // 328
      class: "form-group"                                                                                              // 329
    }, "\n                                            ", HTML.INPUT({                                                  // 330
      type: "checkbox",                                                                                                // 331
      class: "ios8-switch",                                                                                            // 332
      id: "checkboxTerms"                                                                                              // 333
    }), "\n                                            ", HTML.LABEL({                                                 // 334
      for: "checkboxTerms"                                                                                             // 335
    }, Blaze.View("lookup:_", function() {                                                                             // 336
      return Spacebars.mustache(view.lookup("_"), "first.input.cTerms");                                               // 337
    })), "\n                                        "), "\n                                        ", HTML.INPUT({     // 338
      type: "submit",                                                                                                  // 339
      class: "btn btn-lg btn-login",                                                                                   // 340
      value: "Confirm"                                                                                                 // 341
    }), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      class: "final-message",                                                                                          // 343
      hidden: ""                                                                                                       // 344
    }, "\n                        ", HTML.H1(Blaze.View("lookup:_", function() {                                       // 345
      return Spacebars.mustache(view.lookup("_"), "first.done");                                                       // 346
    })), "\n                        ", HTML.H2(Blaze.View("lookup:_", function() {                                     // 347
      return Spacebars.mustache(view.lookup("_"), "first.done_more");                                                  // 348
    })), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        " ];           // 349
  }), "\n    ");                                                                                                       // 350
}));                                                                                                                   // 351
                                                                                                                       // 352
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/login.html                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.login.js");                                                                       // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.login.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("login");                                                                                         // 2
Template["login"] = new Template("Template.login", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "container-fluid full-screen"                                                                               // 6
  }, "\n        ", HTML.DIV({                                                                                          // 7
    class: "branding"                                                                                                  // 8
  }, "\n            ", HTML.SPAN({                                                                                     // 9
    class: "life-brand"                                                                                                // 10
  }, Blaze.View("lookup:_", function() {                                                                               // 11
    return Spacebars.mustache(view.lookup("_"), "login.branding");                                                     // 12
  })), "\n        "), "\n        ", HTML.DIV({                                                                         // 13
    class: "login-menu "                                                                                               // 14
  }, "\n            ", HTML.UL({                                                                                       // 15
    class: "login-menu-items"                                                                                          // 16
  }, "\n                ", HTML.LI({                                                                                   // 17
    class: "hidden-xs hidden-sm"                                                                                       // 18
  }, HTML.A({                                                                                                          // 19
    href: "http://google.ca"                                                                                           // 20
  }, Blaze.View("lookup:_", function() {                                                                               // 21
    return Spacebars.mustache(view.lookup("_"), "login.about");                                                        // 22
  }))), "\n                ", HTML.LI({                                                                                // 23
    class: "hidden-xs hidden-sm"                                                                                       // 24
  }, HTML.A({                                                                                                          // 25
    href: "http://google.ca"                                                                                           // 26
  }, Blaze.View("lookup:_", function() {                                                                               // 27
    return Spacebars.mustache(view.lookup("_"), "login.help");                                                         // 28
  }))), "\n                ", HTML.LI({                                                                                // 29
    class: "hidden-xs hidden-sm"                                                                                       // 30
  }, HTML.A({                                                                                                          // 31
    href: "http://google.ca"                                                                                           // 32
  }, Blaze.View("lookup:_", function() {                                                                               // 33
    return Spacebars.mustache(view.lookup("_"), "login.legal");                                                        // 34
  }))), "\n            "), "\n        "), "\n        ", HTML.DIV({                                                     // 35
    class: "col-lg-8 col-md-8 jumbotron-area hidden-sm hidden-xs"                                                      // 36
  }, "\n            ", HTML.DIV({                                                                                      // 37
    class: "information"                                                                                               // 38
  }, "\n                ", HTML.H1({                                                                                   // 39
    class: "jumbotron-greeting"                                                                                        // 40
  }, Blaze.View("lookup:_", function() {                                                                               // 41
    return Spacebars.mustache(view.lookup("_"), "login.welcome");                                                      // 42
  })), "\n                ", HTML.Raw('<span class="jumbotron-title">Here are some important information</span>'), "\n                ", HTML.Raw('<p class="jumbotron-details">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus dolore ea est excepturi id, qui quo ratione sapiente suscipit? At cupiditate deserunt dolorum expedita facere illum nisi non quod.\n                    ommodi consectetur doloremque eius enim neque nostrum, reprehenderit repudiandae. Ab aspernatur cumque dolore doloribus eaque fugit illo ipsam ipsum minima nam nisi odio officia omnis, quasi quisquam sunt totam vitae.\n                    Adipisci alias aspernatur deleniti dolores exercitationem facilis illo ipsa laboriosam minima necessitatibus nemo nesciunt, non optio porro praesentium quae quia quos reiciendis sequi, soluta suscipit tempore tenetur ullam vero voluptas!\n                </p>'), "\n                ", HTML.A({
    class: "btn btn-lg btn-white"                                                                                      // 44
  }, Blaze.View("lookup:_", function() {                                                                               // 45
    return Spacebars.mustache(view.lookup("_"), "login.read_more");                                                    // 46
  })), "\n            "), "\n        "), "\n        ", HTML.DIV({                                                      // 47
    class: "col-lg-4 col-md-4 col-sm-12 col-xs-12 login-area"                                                          // 48
  }, "\n            ", HTML.DIV({                                                                                      // 49
    class: "login-with-google"                                                                                         // 50
  }, "\n                ", HTML.H1({                                                                                   // 51
    class: "mb-30"                                                                                                     // 52
  }, Blaze.View("lookup:_", function() {                                                                               // 53
    return Spacebars.mustache(view.lookup("_"), "login.title");                                                        // 54
  })), "\n                ", HTML.A({                                                                                  // 55
    class: "btn btn-primary btn-lg btn-login ptb-30",                                                                  // 56
    id: "googleLogin",                                                                                                 // 57
    href: ""                                                                                                           // 58
  }, "\n                    ", HTML.Raw('<i class="fa fa-fw fa-2x fa-google" aria-hidden="true"></i>'), " ", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "login.main_btn");                                                     // 60
  }), "\n                "), "\n            "), "\n\n", HTML.Raw('<!--            <div class="form">\n                <form class="register-form">\n                    <h1>Register</h1>\n                    <input type="text" placeholder="First Name" name="firstName" />\n                    <input type="text" placeholder="Last Name" name="lastName"/>\n                    <span class="email-warning">This email is invalid</span>\n                    <input type="email" placeholder="Email Address" id="registerEmail" name="registerEmail"/>\n                    <input type="password" placeholder="Password" name="registerPassword"/>\n                    <input type="submit" value="Let\'s Go!" id="registerSubmit"/>\n                    <p class="message">Already registered? <a href="" class="operation">Sign In</a></p>\n                </form>\n                <form class="login-form">\n                    <h1>Login</h1>\n                    <input type="text" placeholder="Email" name="email"/>\n                    <input type="password" placeholder="Password" name="password"/>\n                    <input type="submit" value="Login"/>\n                    <p class="message">Not registered? <a href="" class="operation">Create an account</a></p>\n                </form>\n            </div>-->'), "\n        "), "\n    ");
}));                                                                                                                   // 62
                                                                                                                       // 63
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stream.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/stream.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.stream.js");                                                                      // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.stream.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.stream.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("stream");                                                                                        // 2
Template["stream"] = new Template("Template.stream", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("navigation")), "\n    ", Spacebars.include(view.lookupTemplate("editor")), "\n    ", HTML.DIV({
    class: "container main"                                                                                            // 6
  }, "\n        ", HTML.DIV({                                                                                          // 7
    class: "col-lg-12 content"                                                                                         // 8
  }, "\n            ", HTML.DIV({                                                                                      // 9
    class: "button-group filter-button-group mb-30"                                                                    // 10
  }, "\n                ", HTML.BUTTON({                                                                               // 11
    class: "filter-btn is-checked",                                                                                    // 12
    "data-filter": "*"                                                                                                 // 13
  }, Blaze.View("lookup:_", function() {                                                                               // 14
    return Spacebars.mustache(view.lookup("_"), "stream.all");                                                         // 15
  })), "\n                ", Blaze.Each(function() {                                                                   // 16
    return Spacebars.call(view.lookup("category"));                                                                    // 17
  }, function() {                                                                                                      // 18
    return [ "\n                    ", HTML.BUTTON({                                                                   // 19
      class: "filter-btn",                                                                                             // 20
      "data-filter": function() {                                                                                      // 21
        return [ ".", Spacebars.mustache(view.lookup("name")) ];                                                       // 22
      }                                                                                                                // 23
    }, Blaze.View("lookup:name", function() {                                                                          // 24
      return Spacebars.mustache(view.lookup("name"));                                                                  // 25
    })), "\n                " ];                                                                                       // 26
  }), "\n            "), "\n            ", HTML.DIV({                                                                  // 27
    class: "grid"                                                                                                      // 28
  }, "\n                ", HTML.Raw('<div class="grid-sizer"></div>'), "\n                ", HTML.Raw('<div class="gutter-sizer"></div>'), "\n                ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("allPosts"));                                                                    // 30
  }, function() {                                                                                                      // 31
    return [ "\n                    ", Blaze.If(function() {                                                           // 32
      return Spacebars.call(view.lookup("isImageOnly"));                                                               // 33
    }, function() {                                                                                                    // 34
      return [ "\n                        ", HTML.DIV({                                                                // 35
        class: function() {                                                                                            // 36
          return [ "grid-item image ", Spacebars.mustache(view.lookup("categories")) ];                                // 37
        }                                                                                                              // 38
      }, "\n                            ", HTML.DIV({                                                                  // 39
        class: "item-container"                                                                                        // 40
      }, "\n                                ", HTML.IMG({                                                              // 41
        class: "img-responsive",                                                                                       // 42
        src: function() {                                                                                              // 43
          return Spacebars.mustache(view.lookup("imageLink"));                                                         // 44
        }                                                                                                              // 45
      }), "\n                                ", HTML.DIV({                                                             // 46
        class: "overlay-small"                                                                                         // 47
      }, "\n                                    ", HTML.DIV({                                                          // 48
        class: "text"                                                                                                  // 49
      }, "\n                                        ", HTML.H4(Blaze.View("lookup:headline", function() {              // 50
        return Spacebars.mustache(view.lookup("headline"));                                                            // 51
      })), "\n                                        ", HTML.DIV({                                                    // 52
        class: "image-only-author"                                                                                     // 53
      }, "\n                                            ", HTML.P(Blaze.View("lookup:writer", function() {             // 54
        return Spacebars.mustache(view.lookup("writer"));                                                              // 55
      })), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
    }), "\n                    ", Blaze.If(function() {                                                                // 57
      return Spacebars.call(view.lookup("isTextOnly"));                                                                // 58
    }, function() {                                                                                                    // 59
      return [ "\n                        ", HTML.DIV({                                                                // 60
        class: function() {                                                                                            // 61
          return [ "grid-item ", Spacebars.mustache(view.lookup("categories")) ];                                      // 62
        }                                                                                                              // 63
      }, "\n                            ", HTML.DIV({                                                                  // 64
        class: "post-title mb-10"                                                                                      // 65
      }, "\n                                ", HTML.H3(Blaze.View("lookup:headline", function() {                      // 66
        return Spacebars.mustache(view.lookup("headline"));                                                            // 67
      })), "\n                            "), "\n                            ", HTML.P("\n                                ", Blaze.View("lookup:content", function() {
        return Spacebars.mustache(view.lookup("content"));                                                             // 69
      }), "\n                            "), "\n                            ", HTML.SPAN({                             // 70
        class: "grid-item-footer"                                                                                      // 71
      }, Blaze.View("lookup:writer", function() {                                                                      // 72
        return Spacebars.mustache(view.lookup("writer"));                                                              // 73
      }), " | ", Blaze.View("lookup:_", function() {                                                                   // 74
        return Spacebars.mustache(view.lookup("_"), "stream.time_range");                                              // 75
      }), ": ", Blaze.View("lookup:effectiveDate", function() {                                                        // 76
        return Spacebars.mustache(view.lookup("effectiveDate"));                                                       // 77
      })), "\n                        "), "\n                    " ];                                                  // 78
    }), "\n                    ", Blaze.If(function() {                                                                // 79
      return Spacebars.call(view.lookup("isImageText"));                                                               // 80
    }, function() {                                                                                                    // 81
      return [ "\n                        ", Blaze.If(function() {                                                     // 82
        return Spacebars.call(view.lookup("imageOverText"));                                                           // 83
      }, function() {                                                                                                  // 84
        return [ "\n                            ", HTML.DIV({                                                          // 85
          class: function() {                                                                                          // 86
            return [ "grid-item image ", Spacebars.mustache(view.lookup("categories")) ];                              // 87
          }                                                                                                            // 88
        }, "\n                                ", HTML.DIV({                                                            // 89
          class: "item-container"                                                                                      // 90
        }, "\n                                    ", HTML.IMG({                                                        // 91
          src: function() {                                                                                            // 92
            return Spacebars.mustache(view.lookup("imageLink"));                                                       // 93
          },                                                                                                           // 94
          alt: "Test Image",                                                                                           // 95
          class: "item-image"                                                                                          // 96
        }), "\n                                    ", HTML.DIV({                                                       // 97
          class: "overlay"                                                                                             // 98
        }, "\n                                        ", HTML.DIV({                                                    // 99
          class: "text"                                                                                                // 100
        }, "\n                                            ", HTML.H3(Blaze.View("lookup:headline", function() {        // 101
          return Spacebars.mustache(view.lookup("headline"));                                                          // 102
        })), "\n                                            ", HTML.SPAN(Blaze.View("lookup:writer", function() {      // 103
          return Spacebars.mustache(view.lookup("writer"));                                                            // 104
        })), "\n                                            ", HTML.P(Blaze.View("lookup:content", function() {        // 105
          return Spacebars.mustache(view.lookup("content"));                                                           // 106
        })), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                        " ];
      }), "\n                        ", Blaze.If(function() {                                                          // 108
        return Spacebars.call(view.lookup("textOverImage"));                                                           // 109
      }, function() {                                                                                                  // 110
        return [ "\n                            ", HTML.DIV({                                                          // 111
          class: function() {                                                                                          // 112
            return [ "grid-item image ", Spacebars.mustache(view.lookup("categories")), " text-over-image" ];          // 113
          }                                                                                                            // 114
        }, "\n                                ", HTML.DIV({                                                            // 115
          class: "grid-bg-img-container",                                                                              // 116
          style: function() {                                                                                          // 117
            return [ "background: url(", Spacebars.mustache(view.lookup("imageLink")), ")" ];                          // 118
          }                                                                                                            // 119
        }, "\n                                    ", HTML.DIV({                                                        // 120
          class: "overlay-partial"                                                                                     // 121
        }, "\n                                        ", HTML.DIV({                                                    // 122
          class: "post-title mb-10"                                                                                    // 123
        }, "\n                                            ", HTML.H3(Blaze.View("lookup:headline", function() {        // 124
          return Spacebars.mustache(view.lookup("headline"));                                                          // 125
        })), "\n                                        "), "\n                                        ", HTML.P(Blaze.View("lookup:content", function() {
          return Spacebars.mustache(view.lookup("content"));                                                           // 127
        })), "\n                                        ", HTML.SPAN({                                                 // 128
          class: "grid-item-footer"                                                                                    // 129
        }, Blaze.View("lookup:writer", function() {                                                                    // 130
          return Spacebars.mustache(view.lookup("writer"));                                                            // 131
        }), " | ", Blaze.View("lookup:_", function() {                                                                 // 132
          return Spacebars.mustache(view.lookup("_"), "stream.time_range");                                            // 133
        }), ": ", Blaze.View("lookup:effectiveDate", function() {                                                      // 134
          return Spacebars.mustache(view.lookup("effectiveDate"));                                                     // 135
        })), "\n                                    "), "\n                                "), "\n                            "), "\n                        " ];
      }), "\n                    " ];                                                                                  // 137
    }), "\n                    ", Blaze.If(function() {                                                                // 138
      return Spacebars.call(view.lookup("isBlog"));                                                                    // 139
    }, function() {                                                                                                    // 140
      return [ "\n                        ", HTML.DIV({                                                                // 141
        class: function() {                                                                                            // 142
          return [ "grid-item image ", Spacebars.mustache(view.lookup("categories")), " blog-item" ];                  // 143
        },                                                                                                             // 144
        id: function() {                                                                                               // 145
          return Spacebars.mustache(view.lookup("_id"));                                                               // 146
        }                                                                                                              // 147
      }, "\n                            ", HTML.IMG({                                                                  // 148
        class: "img-responsive",                                                                                       // 149
        src: function() {                                                                                              // 150
          return Spacebars.mustache(view.lookup("imageLink"));                                                         // 151
        }                                                                                                              // 152
      }), "\n                            ", HTML.DIV({                                                                 // 153
        class: "grid-blog-body"                                                                                        // 154
      }, "\n                                ", HTML.H3(Blaze.View("lookup:title", function() {                         // 155
        return Spacebars.mustache(view.lookup("title"));                                                               // 156
      })), "\n                                ", HTML.SPAN({                                                           // 157
        class: "grid-item-footer"                                                                                      // 158
      }, Blaze.View("lookup:writer", function() {                                                                      // 159
        return Spacebars.mustache(view.lookup("writer"));                                                              // 160
      })), "\n                                ", HTML.P(Blaze.View("lookup:subtitle", function() {                     // 161
        return Spacebars.mustache(view.lookup("subtitle"));                                                            // 162
      })), "\n                                ", HTML.A({                                                              // 163
        href: "",                                                                                                      // 164
        class: "btn btn-primary btn-wide"                                                                              // 165
      }, Blaze.View("lookup:_", function() {                                                                           // 166
        return Spacebars.mustache(view.lookup("_"), "stream.read_more");                                               // 167
      })), "\n                            "), "\n                        "), "\n                    " ];               // 168
    }), "\n                " ];                                                                                        // 169
  }, function() {                                                                                                      // 170
    return [ "\n                    ", HTML.H2({                                                                       // 171
      class: "text-center"                                                                                             // 172
    }, Blaze.View("lookup:_", function() {                                                                             // 173
      return Spacebars.mustache(view.lookup("_"), "stream.no");                                                        // 174
    })), "\n                " ];                                                                                       // 175
  }), "\n            "), "\n        "), "\n    ") ];                                                                   // 176
}));                                                                                                                   // 177
                                                                                                                       // 178
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bigPicture.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/bigPicture.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./bigPicture.html"));                                                                            // 1
var Images = void 0;                                                                                                   // 1
module.watch(require("../../api/images/images.js"), {                                                                  // 1
    Images: function (v) {                                                                                             // 1
        Images = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var flickity = void 0;                                                                                                 // 1
module.watch(require("flickity"), {                                                                                    // 1
    "default": function (v) {                                                                                          // 1
        flickity = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var imagesLoaded = void 0;                                                                                             // 1
module.watch(require("imagesloaded"), {                                                                                // 1
    "default": function (v) {                                                                                          // 1
        imagesLoaded = v;                                                                                              // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
var morphSettings = {                                                                                                  // 9
    // The [in] animation type. Refer to Animate.css for a list of available animations.                               // 10
    animation: "flipInX",                                                                                              // 11
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ";;",                                                                                                   // 13
    // The delay between the changing of each phrase in milliseconds.                                                  // 14
    speed: 8000,                                                                                                       // 15
    complete: function () {// Called after the entrance animation is executed.                                         // 16
    }                                                                                                                  // 18
};                                                                                                                     // 9
Template.bigPicture.onRendered(function () {                                                                           // 20
    Tracker.autorun(function () {                                                                                      // 21
        var newsSub = Meteor.subscribe('announcements', 10, Meteor.userId());                                          // 22
        var imageSub = Meteor.subscribe('images');                                                                     // 23
                                                                                                                       //
        if (newsSub.ready()) {                                                                                         // 24
            $('.flickity').flickity({                                                                                  // 25
                cellAlign: 'left',                                                                                     // 26
                contain: true,                                                                                         // 27
                imagesLoaded: true,                                                                                    // 28
                lazyLoad: true,                                                                                        // 29
                autoPlay: 5000,                                                                                        // 30
                pageDots: false,                                                                                       // 31
                prevNextButtons: false,                                                                                // 32
                pauseAutoPlayOnHover: false,                                                                           // 33
                selectedAttraction: 0.01,                                                                              // 34
                friction: 0.15                                                                                         // 35
            });                                                                                                        // 25
            $('.dot').css('width', $('.flickity-page-dots').width() / $('.dot').length + 'px');                        // 37
        }                                                                                                              // 38
    });                                                                                                                // 39
});                                                                                                                    // 40
Template.bigPicture.helpers({                                                                                          // 42
    'announcement': function () {                                                                                      // 43
        return Posts.find({});                                                                                         // 44
    }                                                                                                                  // 45
});                                                                                                                    // 42
Template.bigPictureItem.helpers({                                                                                      // 48
    'imageLink': function () {                                                                                         // 49
        try {                                                                                                          // 50
            return Images.findOne({                                                                                    // 51
                _id: this.imgId                                                                                        // 51
            }).url();                                                                                                  // 51
        } catch (e) {}                                                                                                 // 52
    }                                                                                                                  // 54
});                                                                                                                    // 48
Template.bottomBar.onRendered(function () {                                                                            // 57
    $(document).ready(function () {                                                                                    // 58
        displayTime();                                                                                                 // 59
        $("#rotatingMessage").Morphext(morphSettings);                                                                 // 60
    });                                                                                                                // 61
});                                                                                                                    // 62
                                                                                                                       //
function displayTime() {                                                                                               // 64
    var time = moment().format('h:mm');                                                                                // 65
    $('#clock').html(time);                                                                                            // 66
    setTimeout(displayTime, 1000);                                                                                     // 67
}                                                                                                                      // 68
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"blogs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/blogs.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./blogs.html"));                                                                                 // 1
Template.blogs.onCreated(function () {                                                                                 // 6
    Session.set('navTitle', 'Stories');                                                                                // 7
});                                                                                                                    // 8
Template.blogs.onRendered(function () {                                                                                // 10
    Tracker.autorun(function () {                                                                                      // 11
        Meteor.subscribe('blogCategories');                                                                            // 12
        Meteor.subscribe('posts');                                                                                     // 13
    });                                                                                                                // 14
});                                                                                                                    // 15
Template.blogs.helpers({                                                                                               // 17
    'blogCategories': function () {                                                                                    // 18
        return BlogCategories.find({});                                                                                // 19
    }                                                                                                                  // 20
});                                                                                                                    // 17
Template.blogCategory.helpers({                                                                                        // 23
    'categoryName': function () {                                                                                      // 24
        return this.name;                                                                                              // 25
    },                                                                                                                 // 26
    'blogPreviews': function () {                                                                                      // 27
        console.log(this.name);                                                                                        // 28
        return Posts.find({                                                                                            // 29
            'type': 'blog',                                                                                            // 30
            'categories': this.name                                                                                    // 31
        }, {                                                                                                           // 29
            limit: 4                                                                                                   // 33
        });                                                                                                            // 32
    }                                                                                                                  // 35
});                                                                                                                    // 23
Template.blogItem.onRendered(function () {});                                                                          // 38
Template.blogItem.helpers({                                                                                            // 41
    'imageLink': function () {                                                                                         // 42
        if (this.unsplash) {                                                                                           // 43
            console.log(this);                                                                                         // 44
            return this.unsplash.urls.full;                                                                            // 45
        } else if (this.imgId) {                                                                                       // 46
            try {                                                                                                      // 47
                return Images.findOne({                                                                                // 48
                    _id: this.imgId                                                                                    // 48
                }).url();                                                                                              // 48
            } catch (e) {//console.log('error getting photo')                                                          // 49
            }                                                                                                          // 51
        }                                                                                                              // 52
    },                                                                                                                 // 53
    'writer': function () {                                                                                            // 54
        return Meteor.users.findOne({                                                                                  // 55
            _id: this.author                                                                                           // 55
        }).services.google.name;                                                                                       // 55
    },                                                                                                                 // 56
    'date': function () {                                                                                              // 57
        return moment(this.releasedDate).format("MMMM Do YYYY");                                                       // 58
    },                                                                                                                 // 59
    'subtitle': function () {                                                                                          // 60
        var string = this.subtitle;                                                                                    // 61
        var length = 40;                                                                                               // 62
        return string.length > length ? string.substring(0, length - 3) + "..." : string;                              // 63
    }                                                                                                                  // 66
});                                                                                                                    // 41
Template.blogItem.events({                                                                                             // 69
    'click .blog-item': function (evt, template) {                                                                     // 70
        var obj = $(evt.target).closest($('.blog-item'));                                                              // 71
        var id = obj.attr('id');                                                                                       // 72
        FlowRouter.go('/blog/' + id);                                                                                  // 73
    }                                                                                                                  // 74
});                                                                                                                    // 69
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"course.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/course.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("../lib/charting.js"));                                                                           // 1
module.watch(require("../lib/alert.js"));                                                                              // 1
var Images = void 0;                                                                                                   // 1
module.watch(require("../../api/images/images.js"), {                                                                  // 1
    Images: function (v) {                                                                                             // 1
        Images = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
module.watch(require("./course.html"));                                                                                // 1
Template.course.onRendered(function () {                                                                               // 6
    Tracker.autorun(function () {                                                                                      // 7
        var sub = Meteor.subscribe('allCourses', 1000);                                                                // 8
        Meteor.subscribe('images');                                                                                    // 9
                                                                                                                       //
        if (sub.ready()) {                                                                                             // 10
            var code = Session.get('courseData').data.course.substring(0, Session.get('courseData').data.course.indexOf("-"));
            var item = Courses.findOne({                                                                               // 12
                code: code                                                                                             // 13
            });                                                                                                        // 12
            setTitle(item.name + ' | ' + Session.get('displayMark'));                                                  // 15
            Session.set('courseCode', code);                                                                           // 16
            Meteor.subscribe('postsByCourse', code, 10);                                                               // 17
        }                                                                                                              // 18
    });                                                                                                                // 19
    var k = void 0,                                                                                                    // 20
        t = void 0,                                                                                                    // 20
        a = void 0,                                                                                                    // 20
        c = void 0;                                                                                                    // 20
    $(document).ready(function () {                                                                                    // 21
        Tracker.autorun(function () {                                                                                  // 22
            var marks = Session.get('courseData').categoryMarks;                                                       // 23
                                                                                                                       //
            if (marks) {                                                                                               // 24
                setProgressBar(Session.get('displayMark').substring(1));                                               // 25
                                                                                                                       //
                try {                                                                                                  // 26
                    console.log();                                                                                     // 27
                    k.data.datasets[0].data = [marks[0], 100 - marks[0]];                                              // 28
                    t.data.datasets[0].data = [marks[1], 100 - marks[1]];                                              // 29
                    c.data.datasets[0].data = [marks[2], 100 - marks[2]];                                              // 30
                    a.data.datasets[0].data = [marks[3], 100 - marks[3]];                                              // 31
                    k.update();                                                                                        // 32
                    t.update();                                                                                        // 33
                    a.update();                                                                                        // 34
                    c.update();                                                                                        // 35
                } catch (e) {                                                                                          // 36
                    console.log('first time graphing');                                                                // 37
                    k = drawChart('knowledgeChart', marks[0]);                                                         // 38
                    t = drawChart('thinkingChart', marks[1]);                                                          // 39
                    a = drawChart('communicationChart', marks[2]);                                                     // 40
                    c = drawChart('applicationChart', marks[3]);                                                       // 41
                }                                                                                                      // 42
            }                                                                                                          // 44
        });                                                                                                            // 45
        $(document).scroll(function () {                                                                               // 46
            $('.performance-progress').each(function () {                                                              // 47
                $(this).css({                                                                                          // 48
                    width: $(this).attr('data-progress')                                                               // 48
                });                                                                                                    // 48
            });                                                                                                        // 49
        });                                                                                                            // 50
        $('.performance-presenter').hide();                                                                            // 51
    });                                                                                                                // 52
    $('.insights').hide();                                                                                             // 53
});                                                                                                                    // 54
Template.course.helpers({                                                                                              // 56
    'assessment': function () {                                                                                        // 57
        var arr = Session.get('courseData').data.assessment;                                                           // 58
        var newArr = [];                                                                                               // 59
                                                                                                                       //
        while (arr.length) {                                                                                           // 60
            newArr.push(arr.splice(0, 2));                                                                             // 60
        }                                                                                                              // 60
                                                                                                                       //
        return newArr;                                                                                                 // 61
    },                                                                                                                 // 62
    'percentage': function () {                                                                                        // 63
        return Math.round(this.mark / this.outOf * 100 * 10) / 10 + "%";                                               // 64
    },                                                                                                                 // 65
    'readings': function () {                                                                                          // 66
        return Posts.find({                                                                                            // 67
            'type': 'blog',                                                                                            // 68
            organizationsValues: Session.get('courseCode')                                                             // 69
        });                                                                                                            // 67
    },                                                                                                                 // 71
    'imageLink': function () {                                                                                         // 72
        if (this.unsplash) {                                                                                           // 73
            return this.unsplash.urls.full;                                                                            // 74
        } else if (this.imgId) {                                                                                       // 75
            var id = this.imgId;                                                                                       // 76
            return Images.findOne({                                                                                    // 77
                _id: id                                                                                                // 77
            }).url();                                                                                                  // 77
        }                                                                                                              // 78
    },                                                                                                                 // 79
    'isMobile': function () {                                                                                          // 80
        return $(window).width() <= 768;                                                                               // 81
    },                                                                                                                 // 82
    'culminating': function () {                                                                                       // 83
        return Session.get('courseData').categories.O * 100 + '%';                                                     // 84
    }                                                                                                                  // 85
});                                                                                                                    // 56
Template.course.events({                                                                                               // 88
    'click .performance': function (evt, template) {                                                                   // 89
        var choice = $(evt.target).closest($('.performance'));                                                         // 90
        var assessment = $(evt.target).closest($('.assessment-body'));                                                 // 91
        var title = assessment.find('.assessment-title').text();                                                       // 92
        var object = null;                                                                                             // 93
                                                                                                                       //
        _.forEach(Session.get('courseData').data.assessment, function (item) {                                         // 94
            if (item.title === title) {                                                                                // 95
                object = item;                                                                                         // 96
            }                                                                                                          // 97
        });                                                                                                            // 98
                                                                                                                       //
        if (!choice.hasClass('not-available')) {                                                                       // 99
            var data = $(evt.target).closest($('.assessment-performance')).find($('.performance-presenter'));          // 100
            var section = data.find('.presenter-section');                                                             // 101
            var achieved = data.find('.achieved');                                                                     // 102
            var outOf = data.find('.out-of');                                                                          // 103
            var weight = data.find('.weight');                                                                         // 104
                                                                                                                       //
            if (choice.hasClass('knowledge')) {                                                                        // 105
                data.css({                                                                                             // 106
                    background: 'linear-gradient(to right, #f7971e, #ffd200)'                                          // 107
                });                                                                                                    // 106
                achieved.text(object.K.mark);                                                                          // 109
                outOf.text(object.K.outOf);                                                                            // 110
                weight.text(object.K.weight);                                                                          // 111
                section.text('Knowledge');                                                                             // 112
            } else if (choice.hasClass('thinking')) {                                                                  // 113
                data.css({                                                                                             // 114
                    background: 'linear-gradient(to right, #11998e, #38ef7d)'                                          // 115
                });                                                                                                    // 114
                achieved.text(object.T.mark);                                                                          // 117
                outOf.text(object.T.outOf);                                                                            // 118
                weight.text(object.T.weight);                                                                          // 119
                section.text('Thinking');                                                                              // 120
            } else if (choice.hasClass('communication')) {                                                             // 121
                data.css({                                                                                             // 122
                    background: 'linear-gradient(to right, #7F00FF, #E100FF)'                                          // 123
                });                                                                                                    // 122
                achieved.text(object.C.mark);                                                                          // 125
                outOf.text(object.C.outOf);                                                                            // 126
                weight.text(object.C.weight);                                                                          // 127
                section.text('Communication');                                                                         // 128
            } else if (choice.hasClass('application')) {                                                               // 129
                data.css({                                                                                             // 130
                    background: 'linear-gradient(to right, #fc4a1a, #f7b733)'                                          // 131
                });                                                                                                    // 130
                achieved.text(object.A.mark);                                                                          // 133
                outOf.text(object.A.outOf);                                                                            // 134
                weight.text(object.A.weight);                                                                          // 135
                section.text('Application');                                                                           // 136
            } else if (choice.hasClass('other')) {                                                                     // 137
                data.css({                                                                                             // 138
                    background: 'linear-gradient(to right, #757F9A, #D7DDE8)'                                          // 139
                });                                                                                                    // 138
                achieved.text(object.O.mark);                                                                          // 141
                outOf.text(object.O.outOf);                                                                            // 142
                weight.text(object.O.weight);                                                                          // 143
                section.text('Culminating');                                                                           // 144
            }                                                                                                          // 145
                                                                                                                       //
            data.slideDown('fast');                                                                                    // 147
        }                                                                                                              // 148
    },                                                                                                                 // 150
    'click .close-presenter': function (evt, template) {                                                               // 151
        var data = $(evt.target).closest($('.performance-presenter'));                                                 // 152
        data.slideUp('fast');                                                                                          // 153
    },                                                                                                                 // 154
    'click .filter-btn': function (evt) {                                                                              // 155
        var filterValue = '.' + $(evt.target).attr('data-tab');                                                        // 156
        var currentValue = '.' + $('.is-checked').attr('data-tab');                                                    // 157
        $('.is-checked').removeClass('is-checked');                                                                    // 158
        $(evt.target).addClass('is-checked');                                                                          // 159
                                                                                                                       //
        if (filterValue === '.insights') {                                                                             // 160
            $(currentValue).fadeOut('fast');                                                                           // 161
            $('.insights').fadeIn('slow');                                                                             // 162
            var names = [],                                                                                            // 163
                marks = [];                                                                                            // 163
                                                                                                                       //
            _.forEach(Session.get('courseData').data.assessment, function (item) {                                     // 164
                names.push(item.title);                                                                                // 165
            });                                                                                                        // 166
                                                                                                                       //
            _.forEach(Session.get('courseData').timeline, function (item) {                                            // 167
                marks.push(item.mark);                                                                                 // 168
            });                                                                                                        // 169
                                                                                                                       //
            console.log(names, marks);                                                                                 // 170
            drawPolyChart('markByAssignment', names, marks);                                                           // 171
            drawPerformChart('sectionMarkByAssignment', ['a', 'b', 'c', 'd'], [90, 88, 85, 99], [88, 90, 99, 78], [100, 89, 67, 88], [99, 99, 89, 86]);
        } else {                                                                                                       // 173
            $(currentValue).fadeOut('fast');                                                                           // 174
            $(filterValue).fadeIn('slow');                                                                             // 175
        }                                                                                                              // 176
    }                                                                                                                  // 177
});                                                                                                                    // 88
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dashboard.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/dashboard.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./dashboard.html"));                                                                             // 1
var Images = void 0;                                                                                                   // 1
module.watch(require("../../api/images/images.js"), {                                                                  // 1
    Images: function (v) {                                                                                             // 1
        Images = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
//import {Suggestions} from '../../api/suggestions/suggestions.js';                                                    // 3
var courseSub = void 0;                                                                                                // 4
var clubSub = void 0;                                                                                                  // 5
Template.dashboard.onRendered(function () {});                                                                         // 6
Template.dashCategories.onRendered(function () {                                                                       // 8
    setTitle('Manage Categories');                                                                                     // 9
});                                                                                                                    // 10
Template.dashHome.onRendered(function () {                                                                             // 11
    setTitle('Home');                                                                                                  // 12
    Tracker.autorun(function () {                                                                                      // 13
        Meteor.subscribe('posts');                                                                                     // 14
        Meteor.subscribe('categories');                                                                                // 15
        Meteor.subscribe('blogCategories');                                                                            // 16
        Meteor.subscribe('images');                                                                                    // 17
    });                                                                                                                // 18
});                                                                                                                    // 19
Template.dashSuggestions.onRendered(function () {                                                                      // 20
    setTitle('Suggestion');                                                                                            // 21
    Tracker.autorun(function () {                                                                                      // 22
        Meteor.subscribe('suggestions');                                                                               // 23
    });                                                                                                                // 24
});                                                                                                                    // 25
Template.dashOrganizations.onRendered(function () {                                                                    // 26
    setTitle('Manage Organizations');                                                                                  // 27
    Tracker.autorun(function () {                                                                                      // 28
        courseSub = Meteor.subscribeWithPagination('allCourses', 10);                                                  // 29
        clubSub = Meteor.subscribeWithPagination('allClubs', 10);                                                      // 30
    });                                                                                                                // 31
});                                                                                                                    // 32
Template.dashUsers.onRendered(function () {                                                                            // 33
    setTitle('Manage Organizations');                                                                                  // 34
    Tracker.autorun(function () {                                                                                      // 35
        Meteor.subscribe('allUsers');                                                                                  // 36
    });                                                                                                                // 37
});                                                                                                                    // 38
Template.dashHome.helpers({                                                                                            // 40
    'post': function () {                                                                                              // 41
        return Posts.find({                                                                                            // 42
            'meta.approved': false,                                                                                    // 43
            'type': 'announcement',                                                                                    // 44
            'meta.screeningStage': 0                                                                                   // 45
        });                                                                                                            // 42
    },                                                                                                                 // 47
    'blogPost': function () {                                                                                          // 48
        return Posts.find({                                                                                            // 49
            'meta.approved': false,                                                                                    // 50
            'type': 'blog'                                                                                             // 51
        });                                                                                                            // 49
    },                                                                                                                 // 53
    'writer': function () {                                                                                            // 54
        //console.log(this);                                                                                           // 55
        return Meteor.users.findOne({                                                                                  // 56
            _id: this.author                                                                                           // 56
        }).services.google.name;                                                                                       // 56
    },                                                                                                                 // 57
    'noImage': function () {                                                                                           // 58
        return this.subType === 'textOnly';                                                                            // 59
    },                                                                                                                 // 60
    'imageLink': function () {                                                                                         // 61
        try {                                                                                                          // 62
            return Images.findOne({                                                                                    // 63
                _id: this.imgId                                                                                        // 63
            }).url();                                                                                                  // 63
        } catch (e) {//console.log('error getting photo')                                                              // 64
        }                                                                                                              // 66
    },                                                                                                                 // 67
    'hasContent': function () {                                                                                        // 68
        return this.subType !== 'imageOnly';                                                                           // 69
    },                                                                                                                 // 70
    'draftedDate': function () {                                                                                       // 71
        return moment(this.draftedDate).format("MMMM Do YYYY");                                                        // 72
    },                                                                                                                 // 73
    'releaseDate': function () {                                                                                       // 74
        return moment(this.releaseDate).format("MMMM Do YYYY");                                                        // 75
    }                                                                                                                  // 76
});                                                                                                                    // 40
Template.dashAnnouncements.helpers({                                                                                   // 79
    'post': function () {                                                                                              // 80
        return Posts.find({                                                                                            // 81
            'meta.approved': true,                                                                                     // 82
            'type': 'announcement'                                                                                     // 83
        });                                                                                                            // 81
    },                                                                                                                 // 85
    'blogPost': function () {                                                                                          // 86
        return Posts.find({                                                                                            // 87
            'type': 'blog'                                                                                             // 88
        });                                                                                                            // 87
    },                                                                                                                 // 90
    'writer': function () {                                                                                            // 91
        //console.log(this);                                                                                           // 92
        return Meteor.users.findOne({                                                                                  // 93
            _id: this.author                                                                                           // 93
        }).services.google.name;                                                                                       // 93
    },                                                                                                                 // 94
    'noImage': function () {                                                                                           // 95
        return this.subType === 'textOnly';                                                                            // 96
    },                                                                                                                 // 97
    'imageLink': function () {                                                                                         // 98
        console.log(this);                                                                                             // 99
                                                                                                                       //
        try {                                                                                                          // 100
            return Images.findOne({                                                                                    // 101
                _id: this.imgId                                                                                        // 101
            }).url();                                                                                                  // 101
        } catch (e) {//console.log('error getting photo')                                                              // 102
        }                                                                                                              // 104
    },                                                                                                                 // 106
    'hasContent': function () {                                                                                        // 107
        return this.subType !== 'imageOnly';                                                                           // 108
    }                                                                                                                  // 109
});                                                                                                                    // 79
Template.dashSuggestions.helpers({                                                                                     // 112
    'suggestion': function () {                                                                                        // 113
        return Suggestions.find({});                                                                                   // 114
    },                                                                                                                 // 115
    'writer': function () {                                                                                            // 116
        //console.log(this);                                                                                           // 117
        return Meteor.users.findOne({                                                                                  // 118
            _id: this.author                                                                                           // 118
        }).services.google.name;                                                                                       // 118
    },                                                                                                                 // 119
    'noImage': function () {                                                                                           // 120
        return this.imgId === null;                                                                                    // 121
    },                                                                                                                 // 122
    'imageLink': function () {                                                                                         // 123
        try {                                                                                                          // 124
            return Images.findOne({                                                                                    // 125
                _id: this.imgId                                                                                        // 125
            }).url();                                                                                                  // 125
        } catch (e) {//console.log('error getting photo from Images - dashboard')                                      // 126
        }                                                                                                              // 128
    },                                                                                                                 // 129
    'draftedDate': function () {                                                                                       // 130
        return moment(this.draftedDate).format("MMMM Do YYYY");                                                        // 131
    }                                                                                                                  // 132
});                                                                                                                    // 112
Template.dashSuggestions.events({                                                                                      // 135
    'click .btn-reject-suggestion': function (evt) {                                                                   // 136
        var obj = $(evt.target).closest($('.new-post'));                                                               // 137
        var id = obj.attr('id');                                                                                       // 138
        Meteor.call('suggestions.removeSuggestions', id, function (err) {                                              // 139
            if (err) {                                                                                                 // 140
                alertError("Error Occurred When Removing Suggestion", err.message);                                    // 141
            }                                                                                                          // 142
        });                                                                                                            // 143
    }                                                                                                                  // 144
});                                                                                                                    // 135
Template.dashCategories.helpers({                                                                                      // 147
    'category': function () {                                                                                          // 148
        return Categories.find({});                                                                                    // 149
    },                                                                                                                 // 150
    'featured': function () {                                                                                          // 151
        return this.featured ? 'Yes' : 'No';                                                                           // 152
    },                                                                                                                 // 153
    'date': function () {                                                                                              // 154
        return moment(this.createdDate).format("MMMM Do YYYY");                                                        // 155
    },                                                                                                                 // 156
    'blogCategory': function () {                                                                                      // 157
        return BlogCategories.find({});                                                                                // 158
    }                                                                                                                  // 159
});                                                                                                                    // 147
Template.dashUsers.helpers({                                                                                           // 162
    'userList': function () {                                                                                          // 163
        return Meteor.users.find({});                                                                                  // 164
    },                                                                                                                 // 165
    'img': function () {                                                                                               // 166
        return this.services.google.picture;                                                                           // 167
    },                                                                                                                 // 168
    'name': function () {                                                                                              // 169
        return this.services.google.name;                                                                              // 170
    },                                                                                                                 // 171
    'id': function () {                                                                                                // 172
        return this._id;                                                                                               // 173
    }                                                                                                                  // 174
});                                                                                                                    // 162
Template.dashOrganizations.helpers({                                                                                   // 177
    'courses': function () {                                                                                           // 178
        return Courses.find({});                                                                                       // 179
    },                                                                                                                 // 180
    'clubs': function () {                                                                                             // 181
        return Clubs.find({});                                                                                         // 182
    }                                                                                                                  // 183
});                                                                                                                    // 177
Template.dashboard.events({                                                                                            // 186
    'click .new-post': function (evt) {                                                                                // 187
        var obj = $(evt.target).closest($('.new-post'));                                                               // 188
        var id = obj.attr('id');                                                                                       // 189
        Session.set('editingId', id);                                                                                  // 190
        var info = Posts.findOne({                                                                                     // 191
            _id: id                                                                                                    // 191
        });                                                                                                            // 191
        Session.set('dashEditorData', info);                                                                           // 192
        if (!$(evt.target).attr('class').includes('btn-reject') && !$(evt.target).attr('class').includes('btn-approve')) Modal.show('dashPostEditor');
    },                                                                                                                 // 196
    'click .btn-approve': function (evt) {                                                                             // 197
        var obj = $(evt.target).closest($('.new-post'));                                                               // 198
        var id = obj.attr('id');                                                                                       // 199
        Meteor.call('posts.approvePost', id, function (err) {                                                          // 200
            if (err) {                                                                                                 // 201
                alertError("Error Occurred When Approving Post", err.message);                                         // 202
            }                                                                                                          // 203
        }); //Post on Facebook                                                                                         // 204
        /*setupFacebook(function(err, response) {                                                                      // 206
         if (err) {                                                                                                    //
         console.log(err);                                                                                             //
         } else {                                                                                                      //
         let post = Session.get('dashEditorData');                                                                     //
         let type = post.type;                                                                                         //
         if (type === 'announcement') {                                                                                //
         let subType = post.subType;                                                                                   //
         if (subType === 'textOnly') {                                                                                 //
         postTextFacebook(post);                                                                                       //
         } else if (subType === 'imageOnly') {                                                                         //
         postImageFacebook(post);                                                                                      //
         } else {                                                                                                      //
         postTextImageFacebook(post);                                                                                  //
         }                                                                                                             //
         }                                                                                                             //
         }                                                                                                             //
         });*/                                                                                                         //
    },                                                                                                                 // 224
    'click .btn-reject': function (evt) {                                                                              // 225
        var obj = $(evt.target).closest($('.new-post'));                                                               // 226
        var id = obj.attr('id');                                                                                       // 227
        var reason = null;                                                                                             // 228
        alertPrompt("Please give the reason of rejection", function (result) {                                         // 229
            if (result) {                                                                                              // 230
                Meteor.call('posts.rejectPost', id, result, function (err) {                                           // 231
                    if (err) {                                                                                         // 232
                        alertError("Error Occurred When Removing Post", err.message);                                  // 233
                    }                                                                                                  // 234
                });                                                                                                    // 235
            }                                                                                                          // 236
        });                                                                                                            // 237
    }                                                                                                                  // 239
});                                                                                                                    // 186
Template.dashCategories.events({                                                                                       // 242
    'click .btn-create-category': function (evt) {                                                                     // 243
        if ($(evt.target).attr('data-category') === 'blog') {                                                          // 244
            Session.set('editingBlogCategory', true);                                                                  // 245
        } else Session.set('editingBlogCategory', false);                                                              // 246
                                                                                                                       //
        Modal.show('dashCategoryEditor');                                                                              // 247
    },                                                                                                                 // 248
    'click .btn-delete-category': function (evt) {                                                                     // 249
        var obj = $(evt.target).closest($('.dash-category-container'));                                                // 250
        var type = obj.attr('data-category');                                                                          // 251
        var id = obj.attr('id');                                                                                       // 252
                                                                                                                       //
        if (type === 'blog') {                                                                                         // 253
            Meteor.call('blogCategory.remove', id, function (err) {                                                    // 254
                if (err) {                                                                                             // 255
                    alertError('Something Terrible Happened...', err.message);                                         // 256
                }                                                                                                      // 257
            });                                                                                                        // 258
        } else {                                                                                                       // 259
            Meteor.call('category.remove', id, function (err) {                                                        // 260
                if (err) {                                                                                             // 261
                    alertError('Something Terrible Happened...', err.message);                                         // 262
                }                                                                                                      // 263
            });                                                                                                        // 264
        }                                                                                                              // 265
    }                                                                                                                  // 266
});                                                                                                                    // 242
Template.dashUsers.events({                                                                                            // 269
    'click .btn-modify-roles': function (evt) {                                                                        // 270
        var obj = $(evt.target).closest($('.dash-user-container'));                                                    // 271
        var id = obj.attr('id');                                                                                       // 272
        Session.set('editingUser', Meteor.users.findOne({                                                              // 273
            _id: id                                                                                                    // 273
        }));                                                                                                           // 273
        Modal.show('dashRoleEditor');                                                                                  // 274
    },                                                                                                                 // 275
    'click .btn-ban-user': function (evt) {                                                                            // 276
        var obj = $(evt.target).closest($('.dash-user-container'));                                                    // 277
        var id = obj.attr('id');                                                                                       // 278
        alertPrompt("This doesn't have to happen. Please give a reason for the banning.", function (result) {          // 279
            Meteor.call('accounts.ban', id, result, function (err) {                                                   // 280
                if (err) {                                                                                             // 281
                    alertError("Failed to ban user", err.message);                                                     // 282
                } else {                                                                                               // 283
                    alertSuccess("User has been successfully banned", "");                                             // 284
                }                                                                                                      // 285
            });                                                                                                        // 286
        });                                                                                                            // 287
    }                                                                                                                  // 288
});                                                                                                                    // 269
Template.dashOrganizations.events({                                                                                    // 291
    'click #uploadCourses': function () {                                                                              // 292
        var names = $('#courseNames').val();                                                                           // 293
        var codes = $('#courseCodes').val();                                                                           // 294
        Meteor.call('courses.addSeveral', names, codes, function (err) {                                               // 295
            if (err) {                                                                                                 // 296
                alertError("Failed", err.message);                                                                     // 297
            } else {                                                                                                   // 298
                alertSuccess('yeah', 'it didnt fail.');                                                                // 299
            }                                                                                                          // 300
        });                                                                                                            // 301
    },                                                                                                                 // 302
    'click #coursesLoadMore': function () {                                                                            // 303
        courseSub.loadNextPage();                                                                                      // 304
        clubSub.loadNextPage();                                                                                        // 305
    },                                                                                                                 // 306
    'click #createNewClub': function () {                                                                              // 307
        Modal.show('dashClubEditor');                                                                                  // 308
    },                                                                                                                 // 309
    'click .btn-delete': function (evt) {                                                                              // 310
        var obj = $(evt.target).closest($('.editor-options'));                                                         // 311
        var type = obj.attr('data-category');                                                                          // 312
        var id = obj.attr('id');                                                                                       // 313
                                                                                                                       //
        if (type === 'club') {                                                                                         // 314
            Meteor.call('clubs.remove', id, function (err) {                                                           // 315
                if (err) {                                                                                             // 316
                    alertError('Something Terrible Happened...', err.message);                                         // 317
                }                                                                                                      // 318
            });                                                                                                        // 319
        } else {                                                                                                       // 320
            Meteor.call('course.remove', id, function (err) {                                                          // 321
                if (err) {                                                                                             // 322
                    alertError('Something Terrible Happened...', err.message);                                         // 323
                }                                                                                                      // 324
            });                                                                                                        // 325
        }                                                                                                              // 326
    }                                                                                                                  // 327
});                                                                                                                    // 291
Template.dashRoleEditor.onRendered(function () {                                                                       // 330
    var data = Session.get('editingUser');                                                                             // 331
    console.log(data);                                                                                                 // 332
    $(document).ready(function () {                                                                                    // 333
        $('#newUserRoles').select2({                                                                                   // 334
            placeholder: "Click to select...",                                                                         // 335
            allowClear: false                                                                                          // 336
        });                                                                                                            // 334
        $("#newUserRoles").val(data.roles).trigger("change");                                                          // 338
    });                                                                                                                // 339
});                                                                                                                    // 340
Template.dashRoleEditor.helpers({                                                                                      // 342
    'name': function () {                                                                                              // 343
        return Session.get('editingUser').services.google.name;                                                        // 344
    }                                                                                                                  // 345
});                                                                                                                    // 342
Template.dashRoleEditor.events({                                                                                       // 348
    'submit .dash-role-edit': function (evt) {                                                                         // 349
        var data = Session.get('editingUser');                                                                         // 350
        evt.preventDefault();                                                                                          // 351
        console.log($('#newUserRoles').val());                                                                         // 352
        Meteor.call('addUserToRole', data._id, $('#newUserRoles').val(), function (err) {                              // 353
            if (err) {                                                                                                 // 354
                alertError("Role Modification Failed!", err.message);                                                  // 355
            } else {                                                                                                   // 356
                Modal.hide('dashRoleEditor');                                                                          // 357
                alertSuccess("Success!", "User Role has been successfully modified!");                                 // 358
            }                                                                                                          // 359
        });                                                                                                            // 360
    }                                                                                                                  // 361
});                                                                                                                    // 348
Template.dashClubEditor.onRendered(function () {                                                                       // 364
    var drop = initDropZone('newClubImage', {                                                                          // 365
        number: 1,                                                                                                     // 366
        size: 10,                                                                                                      // 367
        message: "Drop your image here or click to use the file browser"                                               // 368
    });                                                                                                                // 365
});                                                                                                                    // 370
Template.dashCategoryEditor.onRendered(function () {                                                                   // 372
    var drop = initDropZone('newCategoryImage', {                                                                      // 373
        number: 1,                                                                                                     // 374
        size: 10,                                                                                                      // 375
        message: "Drop your image here or click to use the file browser"                                               // 376
    });                                                                                                                // 373
});                                                                                                                    // 378
Template.dashPostEditor.onRendered(function () {                                                                       // 380
    var data = Session.get('dashEditorData');                                                                          // 381
                                                                                                                       //
    if (data.subType === 'imageOnly') {                                                                                // 382
        $('#newPostBody').hide();                                                                                      // 383
    } else {                                                                                                           // 384
        $('#newPostBody').val(data.content);                                                                           // 385
    }                                                                                                                  // 386
                                                                                                                       //
    $('#newPostHeadline').val(data.headline);                                                                          // 387
    $("#newPostTags").tagsinput('items');                                                                              // 388
                                                                                                                       //
    _.forEach(data.tags, function (item) {                                                                             // 389
        $('#newPostTags').tagsinput('add', item);                                                                      // 390
    });                                                                                                                // 391
                                                                                                                       //
    Tracker.autorun(function () {                                                                                      // 393
        var categorySub = Meteor.subscribe('categories');                                                              // 394
                                                                                                                       //
        if (categorySub.ready()) {                                                                                     // 395
            var categories = Categories.find({});                                                                      // 396
            categories.observeChanges({                                                                                // 397
                added: function (id, fields) {                                                                         // 398
                    var newCat = new Option(fields.name, fields.name);                                                 // 399
                    $('#newPostCategories').append(newCat);                                                            // 400
                }                                                                                                      // 401
            });                                                                                                        // 397
            $("#newPostCategories").val(data.categories).trigger("change");                                            // 403
        }                                                                                                              // 404
    });                                                                                                                // 405
    $(document).ready(function () {                                                                                    // 406
        $('#newPostCategories').select2({                                                                              // 407
            placeholder: "Click to select matching categories",                                                        // 408
            allowClear: true                                                                                           // 409
        });                                                                                                            // 407
    });                                                                                                                // 411
});                                                                                                                    // 412
Template.dashCategoryEditor.events({                                                                                   // 414
    'submit .dash-category-edit': function (evt) {                                                                     // 415
        evt.preventDefault();                                                                                          // 416
        var json = {                                                                                                   // 417
            name: $('#newCategoryName').val(),                                                                         // 418
            description: $('#newCategoryDescription').val(),                                                           // 419
            imgId: Session.get('categoryImageId'),                                                                     // 420
            featured: $('#newCategoryFeatured').is(':checked')                                                         // 421
        }; //console.log(json);                                                                                        // 417
                                                                                                                       //
        if (!Session.get('editingBlogCategory')) {                                                                     // 424
            Meteor.call('category.addNew', json, function (err) {                                                      // 425
                Modal.hide('dashCategoryEditor');                                                                      // 426
                                                                                                                       //
                if (err) {                                                                                             // 427
                    alertError('Something Wrong Happened...', err.message);                                            // 428
                }                                                                                                      // 429
            });                                                                                                        // 430
        } else {                                                                                                       // 431
            Meteor.call('blogCategory.addNew', json, function (err) {                                                  // 432
                Modal.hide('dashCategoryEditor');                                                                      // 433
                                                                                                                       //
                if (err) {                                                                                             // 434
                    alertError('Something Wrong Happened...', err.message);                                            // 435
                }                                                                                                      // 436
            });                                                                                                        // 437
        }                                                                                                              // 438
    }                                                                                                                  // 440
});                                                                                                                    // 414
Template.dashClubEditor.events({                                                                                       // 443
    'submit .dash-club-edit': function (evt) {                                                                         // 444
        evt.preventDefault();                                                                                          // 445
        var json = {                                                                                                   // 446
            name: $('#newClubName').val(),                                                                             // 447
            description: $('#newClubDescription').val(),                                                               // 448
            room: $('#newClubRoom').val(),                                                                             // 449
            schedule: $('#newClubSchedule').val(),                                                                     // 450
            imgId: Session.get('categoryImageId')                                                                      // 451
        };                                                                                                             // 446
        Meteor.call('clubs.add', json, function (err) {                                                                // 453
            if (err) {                                                                                                 // 454
                alertError("Error Creating Club", err.message);                                                        // 455
            } else {                                                                                                   // 456
                Modal.hide('dashClubEditor');                                                                          // 457
                alertSuccess("Yah!", "Club successfully created!");                                                    // 458
            }                                                                                                          // 459
        });                                                                                                            // 460
    }                                                                                                                  // 461
});                                                                                                                    // 443
Template.dashPostEditor.events({                                                                                       // 464
    'submit .dash-announcement-edit': function (evt) {                                                                 // 465
        evt.preventDefault();                                                                                          // 466
        var separators = [' , ', ', ', ',', ' ,'];                                                                     // 467
        var tags = $('#newPostTags').val().split(new RegExp(separators.join('|'), 'g'));                               // 468
        var json = {                                                                                                   // 469
            headline: $('#newPostHeadline').val(),                                                                     // 470
            content: $('#newPostBody').val(),                                                                          // 471
            tags: tags                                                                                                 // 472
        };                                                                                                             // 469
        Posts.update({                                                                                                 // 474
            _id: Session.get('editingId')                                                                              // 474
        }, {                                                                                                           // 474
            $set: json                                                                                                 // 474
        });                                                                                                            // 474
        Modal.hide();                                                                                                  // 475
    }                                                                                                                  // 476
});                                                                                                                    // 464
                                                                                                                       //
function initDropZone(id, info) {                                                                                      // 480
    return new Dropzone("form#" + id, {                                                                                // 481
        maxFiles: info.number || 1,                                                                                    // 482
        maxFilesize: info.size || 8,                                                                                   // 483
        thumbnailWidth: 400,                                                                                           // 484
        addRemoveLinks: true,                                                                                          // 485
        dictDefaultMessage: info.message || "Drop your image here, or click to select an image using the browser.",    // 486
        accept: function (file, done) {                                                                                // 487
            var FSFile = new FS.File(file);                                                                            // 488
            Images.insert(FSFile, function (err, fileObj) {                                                            // 490
                if (err) {                                                                                             // 491
                    console.log(err);                                                                                  // 492
                } else {                                                                                               // 493
                    //remove the currently uploaded image                                                              // 494
                    //if there is none, this will not do anything                                                      // 495
                    Images.remove({                                                                                    // 496
                        _id: Session.get('newImageId')                                                                 // 496
                    }, function (err) {                                                                                // 496
                        if (err) {                                                                                     // 497
                            console.log("error removing image:\n" + err);                                              // 498
                        }                                                                                              // 499
                    }); //retreive file extension                                                                      // 500
                                                                                                                       //
                    hasUnsplash = false;                                                                               // 502
                    Session.set('newFileType', fileObj.extension()); //update the file type                            // 503
                                                                                                                       //
                    Session.set('categoryImageId', fileObj._id); //update the image id to current image                // 504
                                                                                                                       //
                    done();                                                                                            // 505
                }                                                                                                      // 506
            });                                                                                                        // 507
        }                                                                                                              // 508
    });                                                                                                                // 481
}                                                                                                                      // 510
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"details.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/details.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Images = void 0;                                                                                                   // 1
module.watch(require("../../api/images/images.js"), {                                                                  // 1
    Images: function (v) {                                                                                             // 1
        Images = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
module.watch(require("./details.html"));                                                                               // 1
Template.details.onCreated(function () {                                                                               // 4
    var data = Session.get('post_data');                                                                               // 5
    Session.set('navTitle', data.title);                                                                               // 6
});                                                                                                                    // 7
Template.details.onRendered(function () {});                                                                           // 9
Template.details.helpers({                                                                                             // 12
    'name': function () {                                                                                              // 13
        return Session.get('name');                                                                                    // 14
    },                                                                                                                 // 15
    'picture': function () {                                                                                           // 16
        return Session.get('user_img');                                                                                // 17
    },                                                                                                                 // 18
    'postSubtitle': function () {                                                                                      // 19
        var data = Session.get('post_data');                                                                           // 20
        return data.subtitle;                                                                                          // 21
    },                                                                                                                 // 22
    'postBody': function () {                                                                                          // 23
        var data = Session.get('post_data');                                                                           // 24
        return data.content;                                                                                           // 25
    },                                                                                                                 // 26
    'postTags': function () {                                                                                          // 27
        var data = Session.get('post_data');                                                                           // 28
        return data.tags;                                                                                              // 29
    },                                                                                                                 // 30
    'postSplash': function () {                                                                                        // 31
        var data = Session.get('post_data');                                                                           // 32
                                                                                                                       //
        if (data.meta.hasUnsplash) {                                                                                   // 33
            Meteor.call('setupUnsplash', function (err) {                                                              // 34
                if (err) {                                                                                             // 35
                    console.log(err);                                                                                  // 36
                } else {                                                                                               // 37
                    Meteor.call('getPhoto', data.imgId, function (err, data) {                                         // 38
                        if (err) {                                                                                     // 39
                            console.log(err);                                                                          // 40
                        } else {                                                                                       // 41
                            console.log(data.urls.full);                                                               // 42
                            $('.post-header').css('background-image', "url(" + data.urls.full + ")");                  // 43
                            return data.urls.full;                                                                     // 44
                        }                                                                                              // 45
                    });                                                                                                // 46
                }                                                                                                      // 47
            });                                                                                                        // 48
        } else {                                                                                                       // 49
            Tracker.autorun(function () {                                                                              // 50
                var image = Images.findOne({                                                                           // 51
                    _id: data.imgId                                                                                    // 51
                });                                                                                                    // 51
                                                                                                                       //
                if (image) {                                                                                           // 52
                    var url = image.url();                                                                             // 53
                    $('.post-header').css('background-image', "url(" + url + ")");                                     // 54
                    return true;                                                                                       // 55
                }                                                                                                      // 56
            });                                                                                                        // 57
        }                                                                                                              // 58
    }                                                                                                                  // 59
});                                                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"firstTime.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/firstTime.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./firstTime.html"));                                                                             // 1
Template.firstTime.onRendered(function () {                                                                            // 6
    Tracker.autorun(function () {                                                                                      // 7
        var courseSub = Meteor.subscribe('allCourses', 1000);                                                          // 8
        var clubSub = Meteor.subscribe('allClubs', 1000);                                                              // 9
                                                                                                                       //
        if (courseSub.ready() && clubSub.ready()) {                                                                    // 10
            var courses = Courses.find({});                                                                            // 11
            var clubs = Clubs.find({});                                                                                // 12
            courses.observeChanges({                                                                                   // 13
                added: function (id, fields) {                                                                         // 14
                    var newCat = new Option(fields.name + " - " + fields.code, fields.code);                           // 15
                    $('#firstCourseSelect').append(newCat);                                                            // 16
                }                                                                                                      // 17
            });                                                                                                        // 13
            clubs.observeChanges({                                                                                     // 19
                added: function (id, fields) {                                                                         // 20
                    var newCat = new Option(fields.name, fields.code);                                                 // 21
                    $('#firstClubSelect').append(newCat);                                                              // 22
                }                                                                                                      // 23
            });                                                                                                        // 19
        }                                                                                                              // 25
    });                                                                                                                // 26
    $('#firstCourseSelect').select2({                                                                                  // 27
        placeholder: "Click to select matching categories",                                                            // 28
        allowClear: true                                                                                               // 29
    });                                                                                                                // 27
    $('#firstClubSelect').select2({                                                                                    // 31
        placeholder: "Click to select matching categories",                                                            // 32
        allowClear: true                                                                                               // 33
    });                                                                                                                // 31
});                                                                                                                    // 35
Template.firstTime.events({                                                                                            // 37
    'click #startFirst': function (evt, template) {                                                                    // 38
        evt.preventDefault();                                                                                          // 39
        swapElements('#firstIntro', '#teachIntro');                                                                    // 40
        swapElements('#beginIntro', '#teachAssistInfo');                                                               // 41
    },                                                                                                                 // 42
    'click #skipNext': function (evt, template) {                                                                      // 43
        evt.preventDefault();                                                                                          // 44
        swapElements('#teachIntro', '#emailIntro');                                                                    // 45
        swapElements('#teachAssistInfo', '#subscriptionEmail');                                                        // 46
    },                                                                                                                 // 47
    'click #skipEmail': function (evt, template) {                                                                     // 48
        evt.preventDefault();                                                                                          // 49
        var user = Meteor.user();                                                                                      // 50
        $('#introName').val(user.services.google.name);                                                                // 51
        $('#introStudentNum').val(user.profile.student_number);                                                        // 52
        $('#introSubEmail').val(user.profile.email);                                                                   // 53
        swapElements('#emailIntro', '#confirmIntro');                                                                  // 54
        swapElements('#subscriptionEmail', '#confirmDetails');                                                         // 55
    },                                                                                                                 // 56
    'submit #teachAssistForm': function (evt) {                                                                        // 57
        evt.preventDefault();                                                                                          // 58
        var user = $('#teachUser').val();                                                                              // 59
        var pass = $('#teachPass').val();                                                                              // 60
        $('.teach-assist-login').fadeOut('fast', function () {                                                         // 61
            $('.teachLoader').fadeIn('slow');                                                                          // 62
        });                                                                                                            // 63
        Meteor.call('getTeachAssistTokens', {                                                                          // 64
            student_number: user,                                                                                      // 64
            password: pass                                                                                             // 64
        }, function (err, data) {                                                                                      // 64
            if (err) {                                                                                                 // 65
                alertError("Failed to connect with teach assist", err.message);                                        // 66
                $('.teachLoader').fadeOut('fast', function () {                                                        // 67
                    $('.teach-assist-login').fadeIn('slow');                                                           // 68
                });                                                                                                    // 69
            } else {                                                                                                   // 70
                Meteor.users.update({                                                                                  // 71
                    _id: Meteor.userId()                                                                               // 71
                }, {                                                                                                   // 71
                    $set: {                                                                                            // 71
                        "private.token": data,                                                                         // 71
                        "private.tokenDate": new Date()                                                                // 71
                    }                                                                                                  // 71
                }, function (err) {                                                                                    // 71
                    if (err) {                                                                                         // 72
                        alertError("Something went wrong", "You can connect your account anytime later");              // 73
                        swapElements('#teachIntro', '#emailIntro');                                                    // 74
                        swapElements('#teachAssistInfo', '#subscriptionEmail');                                        // 75
                    } else {                                                                                           // 76
                        Meteor.users.update({                                                                          // 77
                            _id: Meteor.userId()                                                                       // 77
                        }, {                                                                                           // 77
                            $set: {                                                                                    // 77
                                "profile.student_number": user                                                         // 77
                            }                                                                                          // 77
                        });                                                                                            // 77
                        Meteor.call('getTeachAssistCourses', data, function (err, data) {                              // 78
                            if (err) {                                                                                 // 79
                                alertError("Something went wrong", "You can connect your account anytime later");      // 80
                                swapElements('#teachIntro', '#emailIntro');                                            // 81
                                swapElements('#teachAssistInfo', '#subscriptionEmail');                                // 82
                            } else {                                                                                   // 83
                                Meteor.users.update({                                                                  // 84
                                    _id: Meteor.userId()                                                               // 84
                                }, {                                                                                   // 84
                                    $set: {                                                                            // 84
                                        "private.courses": data                                                        // 84
                                    }                                                                                  // 84
                                });                                                                                    // 84
                                alertSuccess("Yeah!", 'We have successfully connected you and teach assist, however further login will be required since token may expire.');
                                swapElements('#teachIntro', '#emailIntro');                                            // 86
                                swapElements('#teachAssistInfo', '#subscriptionEmail');                                // 87
                            }                                                                                          // 88
                        });                                                                                            // 89
                    }                                                                                                  // 90
                });                                                                                                    // 91
            }                                                                                                          // 92
        });                                                                                                            // 93
    },                                                                                                                 // 94
    'submit #organizationsForm': function (evt) {                                                                      // 95
        evt.preventDefault();                                                                                          // 96
        var courses = $('#firstCourseSelect').val();                                                                   // 97
        var clubs = $('#firstClubSelect').val();                                                                       // 98
        Meteor.users.update({                                                                                          // 99
            _id: Meteor.userId()                                                                                       // 99
        }, {                                                                                                           // 99
            $set: {                                                                                                    // 99
                "profile.courses": courses,                                                                            // 99
                "profile.clubs": clubs                                                                                 // 99
            }                                                                                                          // 99
        }, function (err) {                                                                                            // 99
            if (err) {                                                                                                 // 100
                alertError("Error Occurred when updating your profile", err.message);                                  // 101
            } else {                                                                                                   // 102
                alertSuccess("Thank you!", "We have recorded the information you provided");                           // 103
            }                                                                                                          // 104
        });                                                                                                            // 105
    },                                                                                                                 // 106
    'submit #newsletterEmailForm': function (evt) {                                                                    // 107
        evt.preventDefault();                                                                                          // 108
        var email = $('#personalEmail').val();                                                                         // 109
        var userInfo = Meteor.user().services.google;                                                                  // 110
                                                                                                                       //
        if (!validateEmail(email)) {                                                                                   // 111
            alertError("Sorry...", "The email you entered is unacceptable.");                                          // 112
        } else {                                                                                                       // 113
            Meteor.call('news.addSubscriber', email, userInfo.given_name, userInfo.family_name, function (err) {       // 114
                if (err) {                                                                                             // 115
                    alertError("Something went wrong", err.message + "\nYou can subscribe to the newsletter anytime later.");
                } else {                                                                                               // 117
                    Session.set('personalEmail', email);                                                               // 118
                    alertSuccess("Great!", "We have signed you up for newsletters!");                                  // 119
                    swapElements('#emailIntro', '#confirmIntro');                                                      // 120
                    swapElements('#subscriptionEmail', '#confirmDetails');                                             // 121
                }                                                                                                      // 122
            });                                                                                                        // 123
        }                                                                                                              // 124
    },                                                                                                                 // 125
    'submit #finalForm': function (evt, template) {                                                                    // 126
        evt.preventDefault();                                                                                          // 127
                                                                                                                       //
        if (document.getElementById('checkboxTerms').checked) {                                                        // 128
            var id = Meteor.userId();                                                                                  // 129
            Meteor.call('initUserProfile', id, function (err) {                                                        // 130
                if (err) {                                                                                             // 131
                    alertError('Error Initiating Your Account', err.message);                                          // 132
                } else {                                                                                               // 133
                    swapElements('.wizard-container', '.final-message');                                               // 134
                    setTimeout(function () {                                                                           // 135
                        FlowRouter.go('/');                                                                            // 136
                    }, 3000);                                                                                          // 137
                }                                                                                                      // 138
            });                                                                                                        // 139
        } else {                                                                                                       // 140
            alertError("Oops.", "Please agree to the terms of service.");                                              // 141
        }                                                                                                              // 142
    }                                                                                                                  // 144
});                                                                                                                    // 37
                                                                                                                       //
function swapElements(a, b) {                                                                                          // 147
    $(a).fadeOut('fast', function () {                                                                                 // 148
        $(this).replaceWith($(b));                                                                                     // 149
        $(b).fadeIn("slow");                                                                                           // 150
    });                                                                                                                // 151
}                                                                                                                      // 152
                                                                                                                       //
function validateEmail(email) {                                                                                        // 153
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);                                                                                             // 155
}                                                                                                                      // 156
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/login.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./login.html"));                                                                                 // 1
Template.login.onRendered(function () {                                                                                // 6
    //disable register and hid all error prompts when the page initializes                                             // 7
    $('.email-warning').hide();                                                                                        // 8
    $('#registerSubmit').prop('disabled', true);                                                                       // 9
}); /**                                                                                                                // 10
     * This function defines all the events on the login page.*/                                                       //
Template.login.events({                                                                                                // 15
    //toggle between register and login form                                                                           // 16
    'click .operation': function () {                                                                                  // 17
        $('form').animate({                                                                                            // 18
            height: "toggle",                                                                                          // 18
            opacity: "toggle"                                                                                          // 18
        }, "slow");                                                                                                    // 18
    },                                                                                                                 // 19
    'submit .login-form': function (evt) {                                                                             // 20
        evt.preventDefault();                                                                                          // 21
        var email = evt.target.email.value;                                                                            // 22
        var pass = evt.target.password.value;                                                                          // 23
        Meteor.loginWithPassword(email, pass, function (err) {                                                         // 24
            if (err) {                                                                                                 // 25
                console.log(err);                                                                                      // 26
            } else {}                                                                                                  // 27
        });                                                                                                            // 30
    },                                                                                                                 // 32
    'submit .register-form': function (evt) {                                                                          // 33
        var email = evt.target.registerEmail.value;                                                                    // 34
        var firstName = evt.target.firstName.value;                                                                    // 35
        var lastName = evt.target.lastName.value;                                                                      // 36
        var pass = evt.target.registerPassword.value;                                                                  // 37
        Accounts.createUser({                                                                                          // 38
            username: firstName + lastName,                                                                            // 39
            email: email,                                                                                              // 40
            password: pass,                                                                                            // 41
            profile: {                                                                                                 // 42
                firstName: firstName,                                                                                  // 43
                lastName: lastName,                                                                                    // 44
                fullName: firstName + " " + lastName,                                                                  // 45
                homeRoom: 0,                                                                                           // 46
                picture: null                                                                                          // 47
            }                                                                                                          // 42
        }, function (err) {                                                                                            // 38
            if (err) {                                                                                                 // 50
                alert("error");                                                                                        // 51
                console.log(err);                                                                                      // 52
            } else {                                                                                                   // 53
                console.log("Success");                                                                                // 54
            }                                                                                                          // 55
        });                                                                                                            // 56
    },                                                                                                                 // 57
    'click #googleLogin': function () {                                                                                // 58
        Meteor.loginWithGoogle({                                                                                       // 59
            loginStyle: "redirect",                                                                                    // 60
            requestPermissions: ['profile', 'email']                                                                   // 61
        }, function (err) {                                                                                            // 59
            if (err) {                                                                                                 // 63
                alertError("Sorry...", err.message);                                                                   // 64
            }                                                                                                          // 65
        });                                                                                                            // 66
    },                                                                                                                 // 67
    'keyup #registerEmail': function (evt) {                                                                           // 68
        evt.preventDefault();                                                                                          // 69
        var email = evt.target.value;                                                                                  // 70
                                                                                                                       //
        if (validateEmail(email)) {                                                                                    // 71
            $('.email-warning').hide();                                                                                // 72
            $('#registerSubmit').prop('disabled', false);                                                              // 73
        } else {                                                                                                       // 74
            $('.email-warning').show();                                                                                // 75
            $('#registerSubmit').prop('disabled', true);                                                               // 76
        }                                                                                                              // 77
    }                                                                                                                  // 78
}); /**                                                                                                                // 15
     * This local method validates the state of a String to see if it is a proper email                                //
     * **/                                                                                                             //
                                                                                                                       //
function validateEmail(email) {                                                                                        // 83
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);                                                                                             // 85
}                                                                                                                      // 86
                                                                                                                       //
Accounts.onLogin(function () {                                                                                         // 88
    var redirect = Session.get('redirectAfterLogin');                                                                  // 89
                                                                                                                       //
    if (redirect) {                                                                                                    // 90
        if (redirect !== '/login') {                                                                                   // 91
            FlowRouter.go(redirect);                                                                                   // 92
        }                                                                                                              // 93
    } else {//FlowRouter.go('/');                                                                                      // 94
    }                                                                                                                  // 96
});                                                                                                                    // 97
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stream.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/stream.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var imagesLoaded = void 0;                                                                                             // 1
module.watch(require("imagesloaded"), {                                                                                // 1
    "default": function (v) {                                                                                          // 1
        imagesLoaded = v;                                                                                              // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
module.watch(require("./stream.html"));                                                                                // 1
var Images = void 0;                                                                                                   // 1
module.watch(require("../../api/images/images.js"), {                                                                  // 1
    Images: function (v) {                                                                                             // 1
        Images = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var isotopeSettings = {                                                                                                // 7
    itemSelector: '.grid-item',                                                                                        // 8
    percentPosition: true,                                                                                             // 9
    masonry: {                                                                                                         // 10
        columnWidth: '.grid-sizer',                                                                                    // 11
        gutter: '.gutter-sizer'                                                                                        // 12
    }                                                                                                                  // 10
};                                                                                                                     // 7
Template.stream.onRendered(function () {                                                                               // 15
    var $grid = $('.grid');                                                                                            // 16
    Tracker.autorun(function () {                                                                                      // 17
        var postSub = Meteor.subscribe('announcements', 10, Meteor.userId());                                          // 18
        var categorySub = Meteor.subscribe('categories');                                                              // 19
        var imageSub = Meteor.subscribe('images');                                                                     // 20
                                                                                                                       //
        if (postSub.ready()) {                                                                                         // 21
            $('.grid').isotope(isotopeSettings);                                                                       // 22
            $('.grid').imagesLoaded().progress(function () {                                                           // 23
                $('.grid').isotope(isotopeSettings);                                                                   // 24
            });                                                                                                        // 25
        }                                                                                                              // 26
    });                                                                                                                // 27
    setTitle('Stream');                                                                                                // 28
});                                                                                                                    // 29
Template.stream.helpers({                                                                                              // 31
    'category': function () {                                                                                          // 32
        return Categories.find({});                                                                                    // 33
    },                                                                                                                 // 34
    'allPosts': function () {                                                                                          // 35
        var query = Posts.find({                                                                                       // 36
            'meta.approved': true,                                                                                     // 37
            'type': 'announcement'                                                                                     // 38
        });                                                                                                            // 36
        query.observeChanges({                                                                                         // 40
            added: function (id, fields) {                                                                             // 41
                setTimeout(function () {                                                                               // 42
                    $('.grid').isotope('reloadItems');                                                                 // 43
                    $('.grid').isotope();                                                                              // 44
                }, 500);                                                                                               // 45
            },                                                                                                         // 46
            changed: function (id, fields) {                                                                           // 47
                setTimeout(function () {                                                                               // 48
                    $('.grid').isotope('reloadItems');                                                                 // 49
                    $('.grid').isotope();                                                                              // 50
                }, 500);                                                                                               // 51
            },                                                                                                         // 52
            removed: function () {                                                                                     // 53
                setTimeout(function () {                                                                               // 54
                    $('.grid').isotope('reloadItems');                                                                 // 55
                    $('.grid').isotope();                                                                              // 56
                }, 500);                                                                                               // 57
            }                                                                                                          // 58
        });                                                                                                            // 40
        return query.fetch().reverse();                                                                                // 60
    },                                                                                                                 // 61
    'effectiveDate': function () {                                                                                     // 62
        return this.startDate === this.endDate ? moment(this.startDate).format("MMMM Do YYYY") : moment(this.startDate).format("MMMM Do YYYY") + " - " + moment(this.endDate).format("MMMM Do YYYY");
    },                                                                                                                 // 64
    'isImageOnly': function () {                                                                                       // 65
        return this.subType === 'imageOnly' && this.type === 'announcement';                                           // 66
    },                                                                                                                 // 67
    'isTextOnly': function () {                                                                                        // 68
        return this.subType === 'textOnly' && this.type === 'announcement';                                            // 69
    },                                                                                                                 // 70
    'isImageText': function () {                                                                                       // 71
        return this.subType === 'imageText' && this.type === 'announcement';                                           // 72
    },                                                                                                                 // 73
    'isBlog': function () {                                                                                            // 74
        return this.type === 'blog';                                                                                   // 75
    },                                                                                                                 // 76
    'categories': function () {                                                                                        // 77
        var list = this.categories;                                                                                    // 78
        var text = "";                                                                                                 // 79
                                                                                                                       //
        _.forEach(list, function (item) {                                                                              // 80
            text += item + " ";                                                                                        // 81
        });                                                                                                            // 82
                                                                                                                       //
        return text;                                                                                                   // 83
    },                                                                                                                 // 84
    'textOverImage': function () {                                                                                     // 85
        return this.subType === 'imageText' && this.type === 'announcement' && this.meta.priority === 'text';          // 86
    },                                                                                                                 // 87
    'imageOverText': function () {                                                                                     // 88
        return this.subType === 'imageText' && this.type === 'announcement' && this.meta.priority === 'image';         // 89
    },                                                                                                                 // 90
    'writer': function () {                                                                                            // 91
        return Meteor.users.findOne({                                                                                  // 92
            _id: this.author                                                                                           // 92
        }).services.google.name;                                                                                       // 92
    },                                                                                                                 // 93
    'imageLink': function () {                                                                                         // 94
        if (this.unsplash) {                                                                                           // 95
            return this.unsplash.urls.full;                                                                            // 96
        } else if (this.imgId) {                                                                                       // 97
            try {                                                                                                      // 98
                return Images.findOne({                                                                                // 99
                    _id: this.imgId                                                                                    // 99
                }).url();                                                                                              // 99
            } catch (e) {//console.log('error getting photo')                                                          // 100
            }                                                                                                          // 102
        }                                                                                                              // 103
    }                                                                                                                  // 104
});                                                                                                                    // 31
Template.stream.events({                                                                                               // 108
    'click .filter-btn': function (evt) {                                                                              // 109
        var filterValue = $(evt.target).attr('data-filter');                                                           // 110
        $('.is-checked').removeClass('is-checked');                                                                    // 111
        $(evt.target).addClass('is-checked');                                                                          // 112
        $('.grid').isotope({                                                                                           // 113
            filter: filterValue                                                                                        // 113
        });                                                                                                            // 113
    },                                                                                                                 // 114
    'click .blog-item': function (evt, template) {                                                                     // 115
        var obj = $(evt.target).closest($('.blog-item'));                                                              // 116
        var id = obj.attr('id');                                                                                       // 117
        FlowRouter.go('/blog/' + id);                                                                                  // 118
    }                                                                                                                  // 119
});                                                                                                                    // 108
                                                                                                                       //
getUnsplashLink = function (id) {                                                                                      // 121
    Meteor.call('setupUnsplash', function (err) {                                                                      // 122
        if (err) {                                                                                                     // 123
            console.log(err);                                                                                          // 124
        } else {                                                                                                       // 125
            console.log(id);                                                                                           // 126
            Meteor.call('getPhoto', id, function (err, data) {                                                         // 127
                if (err) {                                                                                             // 128
                    console.log(err);                                                                                  // 129
                } else {                                                                                               // 130
                    Session.set('unsplashFeatured', data.urls.full);                                                   // 131
                    $('.grid').isotope();                                                                              // 132
                }                                                                                                      // 133
            });                                                                                                        // 134
        }                                                                                                              // 135
    });                                                                                                                // 136
};                                                                                                                     // 137
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"alert.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/lib/alert.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//This file provides a library of dialogs that are used in uhs.life                                                    // 1
alertError = function (title, body) {                                                                                  // 3
    bootbox.alert({                                                                                                    // 4
        title: "<i class='fa fa-5x fa-times-circle-o'></i>",                                                           // 5
        message: "<h3>" + title + "</h3><p>" + body + "</p>",                                                          // 6
        buttons: {                                                                                                     // 7
            ok: {                                                                                                      // 8
                label: "Got it",                                                                                       // 9
                className: 'btn-confirm'                                                                               // 10
            }                                                                                                          // 8
        }                                                                                                              // 7
    });                                                                                                                // 4
};                                                                                                                     // 14
                                                                                                                       //
alertSuccess = function (title, body) {                                                                                // 16
    bootbox.alert({                                                                                                    // 17
        title: "<i class='fa fa-5x fa-check-circle-o'></i>",                                                           // 18
        message: "<h3>" + title + "</h3><p>" + body + "</p>",                                                          // 19
        buttons: {                                                                                                     // 20
            ok: {                                                                                                      // 21
                label: "Got it",                                                                                       // 22
                className: 'btn-confirm'                                                                               // 23
            }                                                                                                          // 21
        }                                                                                                              // 20
    });                                                                                                                // 17
    $(".modal-header").css('background', '#4caf50');                                                                   // 27
    $(".btn-confirm").css('background', '#4caf50');                                                                    // 28
};                                                                                                                     // 29
                                                                                                                       //
alertConfirm = function (title, body, callback) {                                                                      // 31
    bootbox.confirm({                                                                                                  // 32
        title: "<i class='fa fa-5x fa-question-circle-o'></i>",                                                        // 33
        message: "<h3>" + title + "</h3><p>" + body + "</p>",                                                          // 34
        buttons: {                                                                                                     // 35
            confirm: {                                                                                                 // 36
                label: 'Yes I am Sure',                                                                                // 37
                className: 'btn-success'                                                                               // 38
            },                                                                                                         // 36
            cancel: {                                                                                                  // 40
                label: 'No, I am Not',                                                                                 // 41
                className: 'btn-grey'                                                                                  // 42
            }                                                                                                          // 40
        },                                                                                                             // 35
        callback: function (result) {                                                                                  // 45
            callback(result);                                                                                          // 46
        }                                                                                                              // 47
    });                                                                                                                // 32
    $(".modal-header").css('background', '#2196F3');                                                                   // 49
};                                                                                                                     // 50
                                                                                                                       //
alertPrompt = function (title, callback) {                                                                             // 52
    bootbox.prompt({                                                                                                   // 53
        title: title,                                                                                                  // 54
        inputType: 'textarea',                                                                                         // 55
        callback: function (result) {                                                                                  // 56
            callback(result);                                                                                          // 57
        }                                                                                                              // 58
    });                                                                                                                // 53
};                                                                                                                     // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"charting.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/lib/charting.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var chart = void 0;                                                                                                    // 1
module.watch(require("chart.js"), {                                                                                    // 1
    "default": function (v) {                                                                                          // 1
        chart = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
// Chart options                                                                                                       // 3
Chart.defaults.global.legend.display = false;                                                                          // 4
Chart.defaults.global.tooltips.enabled = true;                                                                         // 5
                                                                                                                       //
drawChart = function (chartId, mark) {                                                                                 // 6
    //$( "canvas#"+chartId ).replaceWith( "<canvas id='" + chartId + "'></canvas>" );                                  // 7
    var color = void 0;                                                                                                // 8
                                                                                                                       //
    if (mark >= 95) {                                                                                                  // 9
        color = "#009688";                                                                                             // 10
    } else if (mark >= 90) {                                                                                           // 11
        color = "#4caf50";                                                                                             // 12
    } else if (mark >= 85) {                                                                                           // 13
        color = "#8bc34a";                                                                                             // 14
    } else if (mark >= 80) {                                                                                           // 15
        color = "#cddc39";                                                                                             // 16
    } else if (mark >= 75) {                                                                                           // 17
        color = "#ffeb3b";                                                                                             // 18
    } else if (mark >= 70) {                                                                                           // 19
        color = "#ffc107";                                                                                             // 20
    } else if (mark >= 60) {                                                                                           // 21
        color = "#ff9800";                                                                                             // 22
    } else if (mark >= 55) {                                                                                           // 23
        color = "#ff5722";                                                                                             // 24
    } else if (mark < 55) {                                                                                            // 25
        color = "#f44336";                                                                                             // 26
    }                                                                                                                  // 27
                                                                                                                       //
    var ctx = document.getElementById(chartId).getContext("2d"); //This will get the first returned node in the jQuery collection.
                                                                                                                       //
    return new Chart(ctx, {                                                                                            // 30
        type: 'doughnut',                                                                                              // 31
        data: {                                                                                                        // 32
            labels: ["Achievements", "Losts"],                                                                         // 33
            datasets: [{                                                                                               // 37
                data: [mark, (100 - mark).toFixed(1)],                                                                 // 39
                backgroundColor: [color, "#A9A9A9"],                                                                   // 40
                hoverBackgroundColor: [color, "#A9A9A9"]                                                               // 44
            }]                                                                                                         // 38
        }                                                                                                              // 32
    });                                                                                                                // 30
};                                                                                                                     // 51
                                                                                                                       //
drawSmallChartSide = function (chartId, mark, color) {                                                                 // 53
    $("canvas#" + chartId).replaceWith("<canvas id=" + chartId + " width='20' height='20'></canvas>"); //Get context with jQuery - using jQuery's .get() method.
                                                                                                                       //
    var ctx = document.getElementById(chartId).getContext("2d"); //This will get the first returned node in the jQuery collection.
                                                                                                                       //
    myNewChart = new Chart(ctx, {                                                                                      // 58
        type: 'doughnut',                                                                                              // 59
        data: {                                                                                                        // 60
            labels: ["Achievements", "Losts"],                                                                         // 61
            datasets: [{                                                                                               // 65
                data: [mark, (100 - mark).toFixed(1)],                                                                 // 67
                backgroundColor: [color, "#A9A9A9"],                                                                   // 68
                hoverBackgroundColor: [color, "#A9A9A9"]                                                               // 72
            }]                                                                                                         // 66
        },                                                                                                             // 60
        options: {                                                                                                     // 78
            animation: false                                                                                           // 79
        }                                                                                                              // 78
    });                                                                                                                // 58
};                                                                                                                     // 82
                                                                                                                       //
drawSmallChart = function (chartId, mark, color) {                                                                     // 84
    $("canvas#" + chartId).replaceWith("<canvas id=" + chartId + "></canvas>"); //Get context with jQuery - using jQuery's .get() method.
                                                                                                                       //
    var ctx = document.getElementById(chartId).getContext("2d"); //This will get the first returned node in the jQuery collection.
                                                                                                                       //
    var myNewChart = new Chart(ctx, {                                                                                  // 89
        type: 'doughnut',                                                                                              // 90
        data: {                                                                                                        // 91
            labels: ["Achievements", "Losts"],                                                                         // 92
            datasets: [{                                                                                               // 96
                data: [mark, (100 - mark).toFixed(1)],                                                                 // 98
                backgroundColor: [color, "#A9A9A9"],                                                                   // 99
                hoverBackgroundColor: [color, "#A9A9A9"]                                                               // 103
            }]                                                                                                         // 97
        },                                                                                                             // 91
        options: {                                                                                                     // 109
            animation: false                                                                                           // 110
        }                                                                                                              // 109
    });                                                                                                                // 89
};                                                                                                                     // 113
                                                                                                                       //
drawPolyChart = function (chartId, assignments, marks) {                                                               // 115
    //Get context with jQuery - using jQuery's .get() method.                                                          // 117
    var ctx = document.getElementById(chartId).getContext("2d");                                                       // 118
    var data = {                                                                                                       // 120
        labels: assignments,                                                                                           // 121
        datasets: [{                                                                                                   // 122
            label: "M.A.T.A.",                                                                                         // 124
            fill: true,                                                                                                // 125
            lineTension: 0.1,                                                                                          // 126
            backgroundColor: "rgba(75,192,192,0.4)",                                                                   // 127
            borderColor: "rgba(75,192,192,1)",                                                                         // 128
            borderCapStyle: 'butt',                                                                                    // 129
            borderDash: [],                                                                                            // 130
            borderDashOffset: 0.0,                                                                                     // 131
            borderJoinStyle: 'miter',                                                                                  // 132
            pointBorderColor: "rgba(75,192,192,1)",                                                                    // 133
            pointBackgroundColor: "#fff",                                                                              // 134
            pointBorderWidth: 1,                                                                                       // 135
            pointHoverRadius: 5,                                                                                       // 136
            pointHoverBackgroundColor: "rgba(75,192,192,1)",                                                           // 137
            pointHoverBorderColor: "rgba(220,220,220,1)",                                                              // 138
            pointHoverBorderWidth: 2,                                                                                  // 139
            pointRadius: 5,                                                                                            // 140
            pointHitRadius: 10,                                                                                        // 141
            data: marks,                                                                                               // 142
            spanGaps: false                                                                                            // 143
        }]                                                                                                             // 123
    }; //This will get the first returned node in the jQuery collection.                                               // 120
                                                                                                                       //
    var myChart = new Chart(ctx, {                                                                                     // 148
        type: 'line',                                                                                                  // 149
        data: data,                                                                                                    // 150
        options: {                                                                                                     // 151
            scales: {                                                                                                  // 152
                xAxes: [{                                                                                              // 153
                    ticks: {                                                                                           // 154
                        display: false                                                                                 // 155
                    }                                                                                                  // 154
                }],                                                                                                    // 153
                yAxes: [{                                                                                              // 158
                    ticks: {                                                                                           // 159
                        display: true                                                                                  // 160
                    }                                                                                                  // 159
                }]                                                                                                     // 158
            }                                                                                                          // 152
        }                                                                                                              // 151
    });                                                                                                                // 148
};                                                                                                                     // 166
                                                                                                                       //
drawPerformChart = function (chartId, assignments, k, t, c, a) {                                                       // 168
    //Get context with jQuery - using jQuery's .get() method.                                                          // 170
    var ctx = document.getElementById(chartId).getContext("2d");                                                       // 171
    var data = {                                                                                                       // 173
        labels: assignments,                                                                                           // 174
        datasets: [{                                                                                                   // 175
            label: "Knowledge",                                                                                        // 177
            fill: false,                                                                                               // 178
            lineTension: 0.1,                                                                                          // 179
            backgroundColor: "rgba(255,193,7,0.4)",                                                                    // 180
            borderColor: "rgba(255,193,7,1)",                                                                          // 181
            borderCapStyle: 'butt',                                                                                    // 182
            borderDash: [],                                                                                            // 183
            borderDashOffset: 0.0,                                                                                     // 184
            borderJoinStyle: 'miter',                                                                                  // 185
            pointBorderColor: "rgba(255,193,7,1)",                                                                     // 186
            pointBackgroundColor: "#fff",                                                                              // 187
            pointBorderWidth: 1,                                                                                       // 188
            pointHoverRadius: 5,                                                                                       // 189
            pointHoverBackgroundColor: "rgba(255,193,7,1)",                                                            // 190
            pointHoverBorderColor: "rgba(255,193,7,1)",                                                                // 191
            pointHoverBorderWidth: 2,                                                                                  // 192
            pointRadius: 5,                                                                                            // 193
            pointHitRadius: 10,                                                                                        // 194
            data: k,                                                                                                   // 195
            spanGaps: true                                                                                             // 196
        }, {                                                                                                           // 176
            label: "Thinking",                                                                                         // 199
            fill: false,                                                                                               // 200
            lineTension: 0.1,                                                                                          // 201
            backgroundColor: "rgba(76,175,80,0.4)",                                                                    // 202
            borderColor: "rgba(76,175,80,1)",                                                                          // 203
            borderCapStyle: 'butt',                                                                                    // 204
            borderDash: [],                                                                                            // 205
            borderDashOffset: 0.0,                                                                                     // 206
            borderJoinStyle: 'miter',                                                                                  // 207
            pointBorderColor: "rgba(76,175,80,1)",                                                                     // 208
            pointBackgroundColor: "#fff",                                                                              // 209
            pointBorderWidth: 1,                                                                                       // 210
            pointHoverRadius: 5,                                                                                       // 211
            pointHoverBackgroundColor: "rgba(76,175,80,1)",                                                            // 212
            pointHoverBorderColor: "rgba(76,175,80,1)",                                                                // 213
            pointHoverBorderWidth: 2,                                                                                  // 214
            pointRadius: 5,                                                                                            // 215
            pointHitRadius: 10,                                                                                        // 216
            data: t,                                                                                                   // 217
            spanGaps: true                                                                                             // 218
        }, {                                                                                                           // 198
            label: "Communication",                                                                                    // 221
            fill: false,                                                                                               // 222
            lineTension: 0.1,                                                                                          // 223
            backgroundColor: "rgba(103,58,183,0.4)",                                                                   // 224
            borderColor: "rgba(103,58,183,1)",                                                                         // 225
            borderCapStyle: 'butt',                                                                                    // 226
            borderDash: [],                                                                                            // 227
            borderDashOffset: 0.0,                                                                                     // 228
            borderJoinStyle: 'miter',                                                                                  // 229
            pointBorderColor: "rgba(103,58,183,1)",                                                                    // 230
            pointBackgroundColor: "#fff",                                                                              // 231
            pointBorderWidth: 1,                                                                                       // 232
            pointHoverRadius: 5,                                                                                       // 233
            pointHoverBackgroundColor: "rgba(103,58,183,1)",                                                           // 234
            pointHoverBorderColor: "rgba(103,58,183,1)",                                                               // 235
            pointHoverBorderWidth: 2,                                                                                  // 236
            pointRadius: 5,                                                                                            // 237
            pointHitRadius: 10,                                                                                        // 238
            data: c,                                                                                                   // 239
            spanGaps: true                                                                                             // 240
        }, {                                                                                                           // 220
            label: "Application",                                                                                      // 243
            fill: false,                                                                                               // 244
            lineTension: 0.1,                                                                                          // 245
            backgroundColor: "rgba(255,87,34,0.4)",                                                                    // 246
            borderColor: "rgba(255,87,34,1)",                                                                          // 247
            borderCapStyle: 'butt',                                                                                    // 248
            borderDash: [],                                                                                            // 249
            borderDashOffset: 0.0,                                                                                     // 250
            borderJoinStyle: 'miter',                                                                                  // 251
            pointBorderColor: "rgba(255,87,34,1)",                                                                     // 252
            pointBackgroundColor: "#fff",                                                                              // 253
            pointBorderWidth: 1,                                                                                       // 254
            pointHoverRadius: 5,                                                                                       // 255
            pointHoverBackgroundColor: "rgba(255,87,34,1)",                                                            // 256
            pointHoverBorderColor: "rgba(255,87,34,1)",                                                                // 257
            pointHoverBorderWidth: 2,                                                                                  // 258
            pointRadius: 5,                                                                                            // 259
            pointHitRadius: 10,                                                                                        // 260
            data: a,                                                                                                   // 261
            spanGaps: true                                                                                             // 262
        }]                                                                                                             // 242
    }; //This will get the first returned node in the jQuery collection.                                               // 173
                                                                                                                       //
    var myChart = new Chart(ctx, {                                                                                     // 267
        type: 'line',                                                                                                  // 268
        data: data,                                                                                                    // 269
        options: {                                                                                                     // 270
            scales: {                                                                                                  // 271
                xAxes: [{                                                                                              // 272
                    ticks: {                                                                                           // 273
                        display: false                                                                                 // 274
                    }                                                                                                  // 273
                }],                                                                                                    // 272
                yAxes: [{                                                                                              // 277
                    ticks: {                                                                                           // 278
                        display: true                                                                                  // 279
                    }                                                                                                  // 278
                }]                                                                                                     // 277
            }                                                                                                          // 271
        }                                                                                                              // 270
    });                                                                                                                // 267
};                                                                                                                     // 285
                                                                                                                       //
drawHalfChart = function (chartId, mark, total, color) {                                                               // 288
    var data = {                                                                                                       // 289
        labels: ["Achievements", "Losts"],                                                                             // 290
        datasets: [{                                                                                                   // 294
            data: [mark, total - mark],                                                                                // 295
            backgroundColor: [color, "#A9A9A9"],                                                                       // 296
            hoverBackgroundColor: [color, "#A9A9A9"]                                                                   // 300
        }]                                                                                                             // 294
    };                                                                                                                 // 289
    var ctx = document.getElementById(chartId).getContext("2d"); // And for a doughnut chart                           // 308
                                                                                                                       //
    var myDoughnutChart = new Chart(ctx, {                                                                             // 311
        type: 'doughnut',                                                                                              // 312
        data: data,                                                                                                    // 313
        options: {                                                                                                     // 314
            cutoutPercentage: 70,                                                                                      // 315
            rotation: 1 * Math.PI,                                                                                     // 316
            circumference: 1 * Math.PI,                                                                                // 317
            animation: false                                                                                           // 318
        }                                                                                                              // 314
    });                                                                                                                // 311
};                                                                                                                     // 321
                                                                                                                       //
drawHalfChartSide = function (chartId, mark, total, color) {                                                           // 323
    $("canvas#" + chartId).replaceWith("<canvas id=" + chartId + "></canvas>");                                        // 324
    var data = {                                                                                                       // 325
        labels: ["Achievements", "Losts"],                                                                             // 326
        datasets: [{                                                                                                   // 330
            data: [mark, total - mark],                                                                                // 331
            backgroundColor: [color, "#A9A9A9"],                                                                       // 332
            hoverBackgroundColor: [color, "#A9A9A9"]                                                                   // 336
        }]                                                                                                             // 330
    };                                                                                                                 // 325
    var ctx = document.getElementById(chartId).getContext("2d"); // And for a doughnut chart                           // 343
                                                                                                                       //
    var myDoughnutChart = new Chart(ctx, {                                                                             // 346
        type: 'doughnut',                                                                                              // 347
        data: data,                                                                                                    // 348
        options: {                                                                                                     // 349
            cutoutPercentage: 70,                                                                                      // 350
            rotation: 1 * Math.PI,                                                                                     // 351
            circumference: 1 * Math.PI,                                                                                // 352
            animation: false                                                                                           // 353
        }                                                                                                              // 349
    });                                                                                                                // 346
};                                                                                                                     // 356
                                                                                                                       //
drawPolyChartSide = function (chartId, assignments, marks) {                                                           // 358
    $("canvas#" + chartId).replaceWith("<canvas id=" + chartId + "></canvas>"); //Get context with jQuery - using jQuery's .get() method.
                                                                                                                       //
    var ctx = document.getElementById(chartId).getContext("2d");                                                       // 361
    var data = {                                                                                                       // 363
        labels: assignments,                                                                                           // 364
        datasets: [{                                                                                                   // 365
            label: "M.A.T.A.",                                                                                         // 367
            fill: false,                                                                                               // 368
            lineTension: 0.1,                                                                                          // 369
            backgroundColor: "rgba(75,192,192,0.4)",                                                                   // 370
            borderColor: "rgba(75,192,192,1)",                                                                         // 371
            borderCapStyle: 'butt',                                                                                    // 372
            borderDash: [],                                                                                            // 373
            borderDashOffset: 0.0,                                                                                     // 374
            borderJoinStyle: 'miter',                                                                                  // 375
            pointBorderColor: "rgba(75,192,192,1)",                                                                    // 376
            pointBackgroundColor: "#fff",                                                                              // 377
            pointBorderWidth: 1,                                                                                       // 378
            pointHoverRadius: 5,                                                                                       // 379
            pointHoverBackgroundColor: "rgba(75,192,192,1)",                                                           // 380
            pointHoverBorderColor: "rgba(220,220,220,1)",                                                              // 381
            pointHoverBorderWidth: 2,                                                                                  // 382
            pointRadius: 5,                                                                                            // 383
            pointHitRadius: 10,                                                                                        // 384
            data: marks,                                                                                               // 385
            spanGaps: false                                                                                            // 386
        }]                                                                                                             // 366
    }; //This will get the first returned node in the jQuery collection.                                               // 363
                                                                                                                       //
    var myChart = new Chart(ctx, {                                                                                     // 391
        type: 'line',                                                                                                  // 392
        data: data,                                                                                                    // 393
        options: {                                                                                                     // 394
            scales: {                                                                                                  // 395
                xAxes: [{                                                                                              // 396
                    ticks: {                                                                                           // 397
                        display: false                                                                                 // 398
                    }                                                                                                  // 397
                }],                                                                                                    // 396
                yAxes: [{                                                                                              // 401
                    ticks: {                                                                                           // 402
                        display: false                                                                                 // 403
                    }                                                                                                  // 402
                }]                                                                                                     // 401
            }                                                                                                          // 395
        }                                                                                                              // 394
    });                                                                                                                // 391
};                                                                                                                     // 409
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"morphext.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/lib/morphext.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Morphext - Text Rotating Plugin for jQuery                                                                          //
 * https://github.com/MrSaints/Morphext                                                                                //
 *                                                                                                                     //
 * Built on jQuery Boilerplate                                                                                         //
 * http://jqueryboilerplate.com/                                                                                       //
 *                                                                                                                     //
 * Copyright 2014 Ian Lai and other contributors                                                                       //
 * Released under the MIT license                                                                                      //
 * http://ian.mit-license.org/                                                                                         //
 */ /*eslint-env browser */ /*global jQuery:false */ /*eslint-disable no-underscore-dangle */(function ($) {           //
    "use strict";                                                                                                      // 18
                                                                                                                       //
    var pluginName = "Morphext",                                                                                       // 20
        defaults = {                                                                                                   // 20
        animation: "bounceIn",                                                                                         // 22
        separator: ",",                                                                                                // 23
        speed: 2000,                                                                                                   // 24
        complete: $.noop                                                                                               // 25
    };                                                                                                                 // 21
                                                                                                                       //
    function Plugin(element, options) {                                                                                // 28
        this.element = $(element);                                                                                     // 29
        this.settings = $.extend({}, defaults, options);                                                               // 31
        this._defaults = defaults;                                                                                     // 32
                                                                                                                       //
        this._init();                                                                                                  // 33
    }                                                                                                                  // 34
                                                                                                                       //
    Plugin.prototype = {                                                                                               // 36
        _init: function () {                                                                                           // 37
            var $that = this;                                                                                          // 38
            this.phrases = [];                                                                                         // 39
            this.element.addClass("morphext");                                                                         // 41
            $.each(this.element.text().split(this.settings.separator), function (key, value) {                         // 43
                $that.phrases.push($.trim(value));                                                                     // 44
            });                                                                                                        // 45
            this.index = -1;                                                                                           // 47
            this.animate();                                                                                            // 48
            this.start();                                                                                              // 49
        },                                                                                                             // 50
        animate: function () {                                                                                         // 51
            this.index = ++this.index % this.phrases.length;                                                           // 52
            this.element[0].innerHTML = "<span class=\"animated " + this.settings.animation + "\">" + this.phrases[this.index] + "</span>";
                                                                                                                       //
            if ($.isFunction(this.settings.complete)) {                                                                // 55
                this.settings.complete.call(this);                                                                     // 56
            }                                                                                                          // 57
        },                                                                                                             // 58
        start: function () {                                                                                           // 59
            var $that = this;                                                                                          // 60
            this._interval = setInterval(function () {                                                                 // 61
                $that.animate();                                                                                       // 62
            }, this.settings.speed);                                                                                   // 63
        },                                                                                                             // 64
        stop: function () {                                                                                            // 65
            this._interval = clearInterval(this._interval);                                                            // 66
        }                                                                                                              // 67
    };                                                                                                                 // 36
                                                                                                                       //
    $.fn[pluginName] = function (options) {                                                                            // 70
        return this.each(function () {                                                                                 // 71
            if (!$.data(this, "plugin_" + pluginName)) {                                                               // 72
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));                                       // 73
            }                                                                                                          // 74
        });                                                                                                            // 75
    };                                                                                                                 // 76
})(jQuery);                                                                                                            // 77
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"api":{"images":{"images.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/images/images.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
   Images: function () {                                                                                               // 1
      return Images;                                                                                                   // 1
   }                                                                                                                   // 1
});                                                                                                                    // 1
var imageStore = new FS.Store.GridFS("images");                                                                        // 1
var Images = new FS.Collection("images", {                                                                             // 3
   stores: [imageStore]                                                                                                // 4
});                                                                                                                    // 3
//Set the permissions for Images collection                                                                            // 7
Images.allow({                                                                                                         // 8
   insert: function () {                                                                                               // 9
      return Roles.userIsInRole(this.userId, ['teacher', 'admin']);                                                    // 10
   },                                                                                                                  // 11
   update: function () {                                                                                               // 12
      return Roles.userIsInRole(this.userId, ['teacher', 'admin']);                                                    // 13
   },                                                                                                                  // 14
   remove: function () {                                                                                               // 15
      return Roles.userIsInRole(this.userId, ['teacher', 'admin']);                                                    // 16
   },                                                                                                                  // 17
   download: function () {                                                                                             // 18
      return Roles.userIsInRole(this.userId, ['teacher', 'admin']);                                                    // 19
   }                                                                                                                   // 20
});                                                                                                                    // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"client":{"algoliaAll.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/algoliaAll.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//setup for use of retreiving ALL results in algolia database                                                          // 1
// api key that connects the client side to Algolia's server                                                           // 3
var client = AlgoliaSearch("GJDCY9DKEW", "1881fcb5fac28b033952f92b1bc33430"); // select indice (collection) of data to be accesed. In this case it would be the announcements
                                                                                                                       //
var index = client.initIndex('announcement'); //function to search for announcements with a keyword                    // 7
                                                                                                                       //
searchAll = function (keyword) {                                                                                       // 10
    //performs the search in algolia database in indice announcement                                                   // 12
    index.search(keyword, function () {                                                                                // 13
        function searchDone(err, content) {                                                                            // 13
            //error catch (server down, or algolia issue)                                                              // 15
            if (err) {                                                                                                 // 16
                console.error('Algolia returned an error', err);                                                       // 17
            } else {                                                                                                   // 18
                //retrieves number of results in content.nbHits                                                        // 20
                console.log('Received ' + content.nbHits + ' results.'); //Spits out list of announcements with the keyword
                                                                                                                       //
                Session.set('results', content);                                                                       // 24
            }                                                                                                          // 25
        }                                                                                                              // 26
                                                                                                                       //
        return searchDone;                                                                                             // 13
    }());                                                                                                              // 13
};                                                                                                                     // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"algoliaSearch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/algoliaSearch.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//setup for use of search in algolia database                                                                          // 1
// api key that connects the client side to Algolia's server                                                           // 3
var client = AlgoliaSearch("GJDCY9DKEW", "1881fcb5fac28b033952f92b1bc33430"); // select indice (collection) of data to be accesed. In this case it would be the announcements
                                                                                                                       //
var index = client.initIndex('announcement'); //function to search for announcements with a keyword                    // 7
                                                                                                                       //
searchPost = function (keyword) {                                                                                      // 10
    //performs the search in algolia database in indice announcement                                                   // 12
    index.search(keyword, function () {                                                                                // 13
        function searchDone(err, content) {                                                                            // 13
            //error catch (server down, or algolia issue)                                                              // 15
            if (err) {                                                                                                 // 16
                console.error('Algolia returned an error', err);                                                       // 17
            } else {                                                                                                   // 18
                //retrieves number of results in content.nbHits                                                        // 20
                console.log('Received ' + content.nbHits + ' results.'); //Spits out list of announcements with the keyword
                                                                                                                       //
                Session.set('searchContent', content);                                                                 // 24
            }                                                                                                          // 25
        }                                                                                                              // 26
                                                                                                                       //
        return searchDone;                                                                                             // 13
    }());                                                                                                              // 13
};                                                                                                                     // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"facebook.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/facebook.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var module1 = module;                                                                                                  // 1
var Images = void 0;                                                                                                   // 1
module1.watch(require("../../api/images/images.js"), {                                                                 // 1
    Images: function (v) {                                                                                             // 1
        Images = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
//function to setup the facebook API                                                                                   // 3
setupFacebook = function (callback) {                                                                                  // 4
    Meteor.call('getFBAppId', function (err, result) {                                                                 // 5
        //get the app id from server                                                                                   // 5
        if (err) {                                                                                                     // 6
            console.log("error retreiving FB App ID");                                                                 // 7
            callback(err, null);                                                                                       // 8
        } else {                                                                                                       // 9
            //Initialize the facebook SDK                                                                              // 10
            FB.init({                                                                                                  // 12
                appId: result,                                                                                         // 13
                status: true,                                                                                          // 14
                xfbml: true,                                                                                           // 15
                version: 'v2.9'                                                                                        // 16
            }, function (err, response) {                                                                              // 12
                if (err) {                                                                                             // 18
                    console.log(err);                                                                                  // 19
                } else {                                                                                               // 20
                    console.log(response);                                                                             // 21
                }                                                                                                      // 22
            });                                                                                                        // 23
            callback(null, 1);                                                                                         // 24
        }                                                                                                              // 25
    });                                                                                                                // 26
};                                                                                                                     // 27
                                                                                                                       //
extendToken = function (accessToken) {                                                                                 // 29
    var appId = void 0,                                                                                                // 30
        appSec = void 0;                                                                                               // 30
    Meteor.call('getFBAppId', function (err, response) {                                                               // 31
        appId = response;                                                                                              // 32
        Meteor.call('getFBSecret', function (err, response2) {                                                         // 33
            appSec = response2;                                                                                        // 34
            console.log(appId);                                                                                        // 35
            console.log(appSec);                                                                                       // 36
            console.log(accessToken);                                                                                  // 37
            $.get("https://graph.facebook.com/oauth/access_token", {                                                   // 38
                grant_type: 'fb_exchange_token',                                                                       // 39
                client_id: appId,                                                                                      // 40
                client_secret: appSec,                                                                                 // 41
                fb_exchange_token: accessToken                                                                         // 42
            }, function (data) {                                                                                       // 38
                console.log(data);                                                                                     // 44
            });                                                                                                        // 45
        });                                                                                                            // 46
    });                                                                                                                // 47
}; //function to post a message to facebook                                                                            // 49
                                                                                                                       //
                                                                                                                       //
postTextFacebook = function (obj) {                                                                                    // 52
    //console.log("attempting to log in");                                                                             // 53
    /*FB.api('/1152573311514394/feed', 'post', {access_token: 'EAAGTzYuTCloBAFMDsZBc4ZB8Vle8L7Scrm07kYvDRc0SvaOYLwbOCQBtinhUQ4OSlRQOdNY7qgIGBDrVK60ckPdcNHZC6mZC8rANyjZCtH4XcE5qexIZCSHFDniuMyGBAcm3eZCpRDmhZA3NrNUyKa63ymrX7kQ4UKA4ThYD7CJffivm32CPIJ7i5sPcQ9X7KTGk5PgGXXpwiQZDZD',
         message: obj.headline + '\n' + obj.content},                                                                  //
         function (response) {                                                                                         //
             console.log(response);                                                                                    //
    });*/FB.login(function (response) {                                                                                //
        //use this to get access token for user                                                                        // 60
        //var token = response.authResponse.accessToken;                                                               // 61
        var pageToken, pageId;                                                                                         // 62
        console.log(response); //make the API call to access pages                                                     // 63
                                                                                                                       //
        FB.api('/me/accounts', function (response) {                                                                   // 65
            //console.log(response);                                                                                   // 66
            //store the pageToken and pageId for the first entry.                                                      // 68
            //This account is intended to only have one page as admin                                                  // 69
            pageToken = response.data[0].access_token;                                                                 // 70
            pageId = response.data[0].id; //extendToken(pageToken);                                                    // 71
            //make the API call to post as page                                                                        // 74
                                                                                                                       //
            FB.api('/' + pageId + '/feed', 'post', {                                                                   // 75
                access_token: pageToken,                                                                               // 75
                message: obj.headline + '\n' + obj.content                                                             // 75
            }, function (response) {                                                                                   // 75
                console.log(response);                                                                                 // 76
            });                                                                                                        // 77
        });                                                                                                            // 79
    }, {                                                                                                               // 80
        scope: 'publish_actions,manage_pages,publish_pages'                                                            // 80
    }); //permissions listed here                                                                                      // 80
}; //test function to post with an image                                                                               // 81
                                                                                                                       //
                                                                                                                       //
postImageFacebook = function (obj) {                                                                                   // 84
    console.log("posting to facebook"); /*FB.api('/1152573311514394/feed', 'post', {access_token: 'EAAGTzYuTCloBAFMDsZBc4ZB8Vle8L7Scrm07kYvDRc0SvaOYLwbOCQBtinhUQ4OSlRQOdNY7qgIGBDrVK60ckPdcNHZC6mZC8rANyjZCtH4XcE5qexIZCSHFDniuMyGBAcm3eZCpRDmhZA3NrNUyKa63ymrX7kQ4UKA4ThYD7CJffivm32CPIJ7i5sPcQ9X7KTGk5PgGXXpwiQZDZD',
                                            message: obj.headline,                                                     //
                                            picture: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg',
                                            link: 'https://www.nytimes.com/2017/09/08/us/hurricane-irma-miami-florida.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news'},  //'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'Images.findOne({'_id':obj.imgId}).url()
                                            function (response) {                                                      //
                                                console.log(response);                                                 //
                                          });*/                                                                        //
    FB.login(function (response) {                                                                                     // 94
        //use this to get access token for user                                                                        // 95
        //var token = response.authResponse.accessToken;                                                               // 96
        var pageToken, pageId; //make the API call to access pages                                                     // 97
                                                                                                                       //
        FB.api('/me/accounts', function (response) {                                                                   // 100
            console.log(response); //store the pageToken and pageId for the first entry.                               // 101
            //This account is intended to only have one page as admin                                                  // 104
                                                                                                                       //
            pageToken = response.data[0].access_token;                                                                 // 105
            pageId = response.data[0].id; //make the API call to post as page                                          // 106
                                                                                                                       //
            FB.api('/' + pageId + '/photos', 'post', {                                                                 // 109
                access_token: pageToken,                                                                               // 110
                message: obj.headline,                                                                                 // 111
                picture: Images.findOne({                                                                              // 112
                    '_id': obj.imgId                                                                                   // 112
                }).url() //'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'          // 112
                //link: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'             // 113
                //url: 'https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg'
                                                                                                                       //
            }, function (response) {                                                                                   // 109
                console.log(response);                                                                                 // 116
            });                                                                                                        // 117
        });                                                                                                            // 118
    }, {                                                                                                               // 119
        scope: 'publish_actions,manage_pages,publish_pages'                                                            // 119
    }); //permissions listed here                                                                                      // 119
}; //test function to post with an image                                                                               // 120
                                                                                                                       //
                                                                                                                       //
postTextImageFacebook = function (obj) {                                                                               // 123
    /*FB.api('/1152573311514394/feed', 'post', {access_token: 'EAAGTzYuTCloBALbOyEn5bDSAOVexEfStqMoHHhgXdZAeaPtUZCDduZAOjEggM89N8CdpfslUkG0OVxVzZBva4gRwla4oiySttyqjpjP92ALvYGean0aG2QdooSmQGhil9fOuarbssvgrnBXy0B8lJL2nZBj9EH83oQEtrnVj7wcIW3LkV8uBS',
        message: obj.headline + '\n' + obj.content,                                                                    //
        picture: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg',                   //
        link: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'},  //'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'Images.findOne({'_id':obj.imgId}).url()
        function (response) {                                                                                          //
            console.log(response);                                                                                     //
    });*/FB.login(function (response) {                                                                                //
        //use this to get access token for user                                                                        // 132
        //var token = response.authResponse.accessToken;                                                               // 133
        var pageToken, pageId; //make the API call to access pages                                                     // 134
                                                                                                                       //
        FB.api('/me/accounts', function (response) {                                                                   // 137
            console.log(response); //store the pageToken and pageId for the first entry.                               // 138
            //This account is intended to only have one page as admin                                                  // 141
                                                                                                                       //
            pageToken = response.data[0].access_token;                                                                 // 142
            pageId = response.data[0].id; //make the API call to post as page                                          // 143
                                                                                                                       //
            FB.api('/' + pageId + '/photos', 'post', {                                                                 // 146
                access_token: pageToken,                                                                               // 147
                message: obj.headline + '\n' + obj.content,                                                            // 148
                picture: Images.findOne({                                                                              // 149
                    '_id': obj.imgId                                                                                   // 149
                }).url() //link: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'    // 149
                // url: 'https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg'
                                                                                                                       //
            }, function (response) {                                                                                   // 146
                console.log(response);                                                                                 // 153
            });                                                                                                        // 154
        });                                                                                                            // 155
    }, {                                                                                                               // 156
        scope: 'publish_actions,manage_pages,publish_pages'                                                            // 156
    }); //permissions listed here                                                                                      // 156
};                                                                                                                     // 157
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imports.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/imports.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("../../ui/layouts/applicationLayout.js"));                                                        // 1
module.watch(require("../../ui/components/navigation.js"));                                                            // 1
module.watch(require("../../ui/pages/login.js"));                                                                      // 1
module.watch(require("../../ui/pages/stream.js"));                                                                     // 1
module.watch(require("../../ui/pages/firstTime.js"));                                                                  // 1
module.watch(require("../../ui/pages/details.js"));                                                                    // 1
module.watch(require("../../ui/components/editor.js"));                                                                // 1
module.watch(require("../../ui/pages/course.js"));                                                                     // 1
module.watch(require("../../ui/pages/dashboard.js"));                                                                  // 1
module.watch(require("../../ui/pages/blogs.js"));                                                                      // 1
module.watch(require("../../ui/pages/bigPicture.js"));                                                                 // 1
module.watch(require("./facebook.js"));                                                                                // 1
module.watch(require("./algoliaSearch.js"));                                                                           // 1
module.watch(require("./algoliaAll.js"));                                                                              // 1
Drafts = new Mongo.Collection('drafts');                                                                               // 28
Clubs = new Mongo.Collection('clubs');                                                                                 // 29
Posts = new Mongo.Collection('posts');                                                                                 // 30
Courses = new Mongo.Collection('courses');                                                                             // 31
Categories = new Mongo.Collection('categories');                                                                       // 32
BlogCategories = new Mongo.Collection('blogcategories');                                                               // 33
Suggestions = new Mongo.Collection('suggestions');                                                                     // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/index.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * This file defines the entry point of the client application, all initialization                                     //
 * behaviors are defined here.*/'use strict';                                                                          //
                                                                                                                       //
module.watch(require("./imports.js"));                                                                                 // 1
module.watch(require("./routes.js"));                                                                                  // 1
Deps.autorun(function () {                                                                                             // 8
    Session.setDefault('searchContent', {                                                                              // 9
        hits: []                                                                                                       // 9
    });                                                                                                                // 9
    document.title = Session.get("DocumentTitle");                                                                     // 10
});                                                                                                                    // 11
                                                                                                                       //
function getUserLanguage() {                                                                                           // 13
    return "en";                                                                                                       // 14
}                                                                                                                      // 15
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 17
    Meteor.startup(function () {                                                                                       // 18
        TAPi18n.setLanguage('en').done(function () {}).fail(function (error_message) {                                 // 19
            // Handle the situation                                                                                    // 23
            console.log(error_message);                                                                                // 24
        });                                                                                                            // 25
    });                                                                                                                // 26
}                                                                                                                      // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/routes.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * This file defines all the routing that takes place                                                                  //
 *                                                                                                                     //
 * */var loggedIn = FlowRouter.group({                                                                                 //
    triggersEnter: [function () {                                                                                      // 7
        var route = void 0;                                                                                            // 9
        Session.set("DocumentTitle", "UHS Life - Crafted By Students, For Everyone");                                  // 10
                                                                                                                       //
        if (!(Meteor.loggingIn() || Meteor.userId())) {                                                                // 11
            route = FlowRouter.current();                                                                              // 12
            Session.set('redirectAfterLogin', route.path);                                                             // 13
            console.log(Session.get('redirectAfterLogin'));                                                            // 14
            FlowRouter.go('/login');                                                                                   // 15
        } else {                                                                                                       // 16
            Tracker.autorun(function () {                                                                              // 17
                var userSub = Meteor.subscribe('allUsers');                                                            // 18
                var user = Meteor.user();                                                                              // 19
                                                                                                                       //
                if (user && userSub.ready()) {                                                                         // 20
                    Session.setPersistent('inDash', false);                                                            // 21
                                                                                                                       //
                    if (!user.profile.init) {                                                                          // 22
                        Meteor.call('accounts.initRoles');                                                             // 23
                        FlowRouter.go('/first');                                                                       // 24
                    } else {                                                                                           // 25
                        Session.setPersistent('name', user.services.google.name);                                      // 26
                                                                                                                       //
                        if (Roles.userIsInRole(Meteor.userId(), 'student')) {                                          // 27
                            Session.setPersistent('courses', user.private.courses);                                    // 28
                            Session.setPersistent('token', user.private.token);                                        // 29
                            Session.setPersistent('tokenExpiry', user.private.tokenDate);                              // 30
                        }                                                                                              // 31
                                                                                                                       //
                        Session.set('user_img', user.services.google.picture);                                         // 32
                    }                                                                                                  // 33
                }                                                                                                      // 34
            });                                                                                                        // 35
        }                                                                                                              // 36
    }]                                                                                                                 // 37
});                                                                                                                    // 6
var admin = FlowRouter.group({                                                                                         // 41
    triggersEnter: [function () {                                                                                      // 42
        var route = void 0;                                                                                            // 44
                                                                                                                       //
        if (!(Meteor.loggingIn() || Meteor.userId())) {                                                                // 45
            route = FlowRouter.current();                                                                              // 46
            Session.set('redirectAfterLogin', route.path);                                                             // 47
            console.log(Session.get('redirectAfterLogin'));                                                            // 48
            FlowRouter.go('/login');                                                                                   // 49
        } else {                                                                                                       // 50
            Session.setPersistent('inDash', true);                                                                     // 51
            Tracker.autorun(function () {                                                                              // 52
                var userSub = Meteor.subscribe('allUsers');                                                            // 53
                var user = Meteor.user();                                                                              // 54
                                                                                                                       //
                if (user && userSub.ready()) {                                                                         // 55
                    if (!user.profile.init) {                                                                          // 56
                        Meteor.call('accounts.initRoles');                                                             // 57
                        FlowRouter.go('/first');                                                                       // 58
                    } else {                                                                                           // 59
                        Session.set('name', user.services.google.name);                                                // 60
                        Session.set('id', user.profile.id);                                                            // 61
                        Session.set('courses', user.private.courses);                                                  // 62
                        Session.set('tokenExpiry', user.private.tokenDate);                                            // 63
                        Session.set('token', user.private.token);                                                      // 64
                        Session.set('user_img', user.services.google.picture);                                         // 65
                    } /*else if(!Roles.userIsInRole(user._id, 'admin')){                                               // 66
                       alertError('Sorry', "You do not have access to this area.");                                    //
                       FlowRouter.go('/')                                                                              //
                       }*/                                                                                             //
                }                                                                                                      // 71
            });                                                                                                        // 72
        }                                                                                                              // 73
    }]                                                                                                                 // 74
});                                                                                                                    // 41
admin.route('/dashboard/users', {                                                                                      // 78
    action: function () {                                                                                              // 79
        Session.set("DocumentTitle", "Users - Administrative Dashboard | uhs.life");                                   // 80
        BlazeLayout.render('dashboard', {                                                                              // 81
            dash: 'dashUsers'                                                                                          // 81
        });                                                                                                            // 81
    }                                                                                                                  // 82
});                                                                                                                    // 78
admin.route('/dashboard/announcements', {                                                                              // 85
    action: function () {                                                                                              // 86
        Session.set("DocumentTitle", "All Announcements - Administrative Dashboard | uhs.life");                       // 87
        BlazeLayout.render('dashboard', {                                                                              // 88
            dash: 'dashAnnouncements'                                                                                  // 88
        });                                                                                                            // 88
    }                                                                                                                  // 89
});                                                                                                                    // 85
admin.route('/dashboard/categories', {                                                                                 // 92
    action: function () {                                                                                              // 93
        Session.set("DocumentTitle", "Categories - Administrative Dashboard | uhs.life");                              // 94
        BlazeLayout.render('dashboard', {                                                                              // 95
            dash: 'dashCategories'                                                                                     // 95
        });                                                                                                            // 95
    }                                                                                                                  // 96
});                                                                                                                    // 92
admin.route('/dashboard/organizations', {                                                                              // 99
    action: function () {                                                                                              // 100
        Session.set("DocumentTitle", "Organizations - Administrative Dashboard | uhs.life");                           // 101
        BlazeLayout.render('dashboard', {                                                                              // 102
            dash: 'dashOrganizations'                                                                                  // 102
        });                                                                                                            // 102
    }                                                                                                                  // 103
});                                                                                                                    // 99
admin.route('/dashboard/suggestions', {                                                                                // 106
    action: function () {                                                                                              // 107
        Session.set("DocumentTitle", "Suggestions - Administrative Dashboard | uhs.life");                             // 108
        BlazeLayout.render('dashboard', {                                                                              // 109
            dash: 'dashSuggestions'                                                                                    // 109
        });                                                                                                            // 109
    }                                                                                                                  // 110
});                                                                                                                    // 106
FlowRouter.route('/login', {                                                                                           // 113
    waitOn: function () {                                                                                              // 114
        setTimeout(function () {                                                                                       // 115
            Accounts.loginServicesConfigured();                                                                        // 116
        }, 500);                                                                                                       // 117
    },                                                                                                                 // 118
    action: function () {                                                                                              // 119
        if (!Meteor.userId()) {                                                                                        // 120
            Session.set('redirectAfterLogin', '/');                                                                    // 121
            Session.set("DocumentTitle", "Please Login | uhs.life");                                                   // 122
            BlazeLayout.render('applicationLayout', {                                                                  // 123
                main: 'login'                                                                                          // 123
            });                                                                                                        // 123
        } else {                                                                                                       // 124
            FlowRouter.go('/');                                                                                        // 125
        }                                                                                                              // 126
    },                                                                                                                 // 127
    name: 'login'                                                                                                      // 128
});                                                                                                                    // 113
loggedIn.route('/stories', {                                                                                           // 131
    action: function () {                                                                                              // 132
        BlazeLayout.render('applicationLayout', {                                                                      // 133
            main: 'blogs'                                                                                              // 133
        });                                                                                                            // 133
    }                                                                                                                  // 134
});                                                                                                                    // 131
loggedIn.route('/blog/:postId', {                                                                                      // 137
    action: function (params) {                                                                                        // 138
        if (params.postId === 'preview') {                                                                             // 139
            Session.setPersistent('post_data', Session.get('preview_json'));                                           // 140
        } else {                                                                                                       // 141
            Tracker.autorun(function () {                                                                              // 142
                var post = Posts.findOne({                                                                             // 143
                    _id: params.postId                                                                                 // 143
                });                                                                                                    // 143
                                                                                                                       //
                if (post) {                                                                                            // 144
                    Session.set("DocumentTitle", post.title + " | uhs.life");                                          // 145
                    Session.setPersistent('post_data', post);                                                          // 146
                }                                                                                                      // 147
            });                                                                                                        // 148
        }                                                                                                              // 149
                                                                                                                       //
        window.scrollTo(0, 0);                                                                                         // 150
        BlazeLayout.render('applicationLayout', {                                                                      // 151
            main: 'details'                                                                                            // 151
        });                                                                                                            // 151
    }                                                                                                                  // 152
});                                                                                                                    // 137
admin.route('/dashboard', {                                                                                            // 155
    action: function () {                                                                                              // 156
        Session.set("DocumentTitle", "Administrative Dashboard | uhs.life");                                           // 157
        BlazeLayout.render('dashboard', {                                                                              // 158
            dash: 'dashHome'                                                                                           // 158
        });                                                                                                            // 158
    }                                                                                                                  // 159
});                                                                                                                    // 155
loggedIn.route('/course/:courseId', {                                                                                  // 162
    action: function (params) {                                                                                        // 163
        var tokenJson = Session.get('token');                                                                          // 164
        console.log(tokenJson);                                                                                        // 165
        tokenJson.subject_id = params.courseId;                                                                        // 166
        Meteor.call('getTeachAssistCourseDetails', tokenJson, function (err, data) {                                   // 167
            if (err || data.ERROR) {                                                                                   // 168
                if (err.error === 400) {                                                                               // 169
                    Modal.show('teachAssistPass');                                                                     // 170
                } else {                                                                                               // 171
                    alertError('Something went wrong', 'We are having problems talking to teach assist. You can visit ta.yrdsb.ca for more details on your mark.');
                }                                                                                                      // 173
            } else {                                                                                                   // 174
                console.log(data);                                                                                     // 175
                var a = Meteor.user().private.courses;                                                                 // 176
                console.log(a);                                                                                        // 177
                var found = void 0;                                                                                    // 178
                var entry = void 0;                                                                                    // 179
                                                                                                                       //
                for (var index = 0; index < a.length; ++index) {                                                       // 180
                    entry = a[index];                                                                                  // 181
                                                                                                                       //
                    if (entry.subject_id === params.courseId) {                                                        // 182
                        found = entry;                                                                                 // 183
                        break;                                                                                         // 184
                    }                                                                                                  // 185
                }                                                                                                      // 186
                                                                                                                       //
                Session.setPersistent('displayMark', found.mark);                                                      // 187
                Session.setPersistent('courseData', data);                                                             // 188
                window.scrollTo(0, 0);                                                                                 // 189
                BlazeLayout.render('applicationLayout', {                                                              // 190
                    main: 'course'                                                                                     // 190
                });                                                                                                    // 190
            }                                                                                                          // 191
        });                                                                                                            // 192
    },                                                                                                                 // 193
    name: 'course'                                                                                                     // 194
});                                                                                                                    // 162
loggedIn.route('/big-picture', {                                                                                       // 197
    action: function () {                                                                                              // 198
        BlazeLayout.render('applicationLayout', {                                                                      // 199
            main: 'bigPicture'                                                                                         // 199
        });                                                                                                            // 199
    },                                                                                                                 // 200
    name: 'bigPicture' // Optional route name.                                                                         // 201
                                                                                                                       //
});                                                                                                                    // 197
loggedIn.route('/', {                                                                                                  // 204
    action: function () {                                                                                              // 205
        Session.set("DocumentTitle", "Stream | uhs.life");                                                             // 206
        BlazeLayout.render('applicationLayout', {                                                                      // 207
            main: 'stream'                                                                                             // 207
        });                                                                                                            // 207
    },                                                                                                                 // 208
    name: 'root' // Optional route name.                                                                               // 209
                                                                                                                       //
});                                                                                                                    // 204
loggedIn.route('/stream', {                                                                                            // 212
    action: function () {                                                                                              // 213
        BlazeLayout.render('applicationLayout', {                                                                      // 214
            main: 'stream'                                                                                             // 214
        });                                                                                                            // 214
    },                                                                                                                 // 215
    name: 'stream' // Optional route name.                                                                             // 216
                                                                                                                       //
});                                                                                                                    // 212
loggedIn.route('/logout', {                                                                                            // 219
    action: function () {                                                                                              // 220
        Session.set("DocumentTitle", "Logging out...");                                                                // 221
        Meteor.logout(function () {                                                                                    // 222
            Session.clear();                                                                                           // 223
            FlowRouter.go('/');                                                                                        // 224
        });                                                                                                            // 225
    },                                                                                                                 // 226
    name: 'logout'                                                                                                     // 227
});                                                                                                                    // 219
loggedIn.route('/first', {                                                                                             // 230
    action: function () {                                                                                              // 231
        Session.set("DocumentTitle", "Welcome to uhs.life!");                                                          // 232
        BlazeLayout.render('applicationLayout', {                                                                      // 233
            main: 'firstTime'                                                                                          // 233
        }); /*Tracker.autorun(function () {                                                                            // 233
                let user = Meteor.user();                                                                              //
                if(user){                                                                                              //
                    if(user.profile.init){                                                                             //
                        FlowRouter.go('/')                                                                             //
                    }else{                                                                                             //
                        BlazeLayout.render('applicationLayout',{main: 'firstTime'});                                   //
                    }                                                                                                  //
                }                                                                                                      //
            });*/                                                                                                      //
    },                                                                                                                 // 244
    name: 'first'                                                                                                      // 245
});                                                                                                                    // 230
                                                                                                                       //
checkTokenExpiry = function () {                                                                                       // 248
    var now = new Date();                                                                                              // 249
    var diff = Math.abs(now - Session.get('tokenExpiry'));                                                             // 250
    var minutes = Math.floor(diff / 1000 / 60);                                                                        // 251
    return minutes < 15;                                                                                               // 252
};                                                                                                                     // 253
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return Spacebars.include(view.lookupTemplate("applicationLayout"));                                                  // 4
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("/imports/startup/client"));                                                                      // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"i18n":{"en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// i18n/en.i18n.json                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                                 // 9
// integrate the fallback language translations                                                                        // 10
translations = {};                                                                                                     // 11
translations[namespace] = {"branding":"uhs.life","tagline":"Built by students, for everyone.","loading":"Loading...","login":{"title":"Login","main_btn":"Login With Gapps","about":"About","branding":"uhs.life","help":"Help Center","legal":"Legal Stuff","read_more":"Read More","welcome":"Welcome"},"nav":{"left":"MENU","right":"SEARCH","close":"CLOSE","search_prompt":{"init":"Type something in the box above to search"},"logout":"LOGOUT","side_items":{"stream":"Stream","stories":"Stories","marks":"Academics","suggest":"Suggestions to Admin","admin":"Dashboard"},"teach":{"login":"Please Login to","submit_login":"Login","connect":"Connect your Teach Assist Account"}},"stream":{"all":"All","time_range":"Effective","read_more":"Read More","no":"There are no announcements today! 😅"},"details":{"scroll":"Scroll Down","posted_date":"Posted","course":{"knowledge":"Knowledge","thinking":"Thinking","communication":"Communication","application":"Application","culminating":"Culminating","other":"Other","menu":{"assess":"Assessments","insights":"Insights","resources":"Resources"},"expand_a":"You got","expand_b":"out of","no":"No Marks Available","weight":"Weight","timeline_graph":"Timeline of Your Mark","assignments_graph":"Section Marks by Assignment"}},"first":{"greet":"Hello There!","greet_more":"Thank you for signing up for uhs.life! Since it's your first time here, we would like to know some things about you, it's really short","teach":"Connect Your Teach Assist Account","teach_more":"Connecting your teach assist enables you to view your marks, assignments, academic progress and find resources written by UHS teachers on your subject. You do not have to opt-in for this service, and you can opt-out any time. (You can opt-in later)","teach_skip":"No, I do not want to connect my Teach Assist, please","teach_t":"Do you teach any courses or supervise any clubs?","teach_t_more":"Selecting these will help us build your profile, if you don't have any or prefer not to tell simply click skip.","teach_t_skip":"This section does not apply to me, I want to","news":"Sign Up For Newsletter Subscription","news_more":"We offer weekly briefings on everything that happened in our school and tips and tricks on studying at Unionville Highs School, why not subscribe to learn more about your school? You can opt-out and opt-in at any time. We'll never share your email with anyone else or spam you. Read more in our privacy policy.","news_inst":"If you would like the news to be on your gapps account, simply click sign up, if you would like to use a personal email, change the email in the box below, then hit sign up. If you do not want to subscribe, click skip.","news_skip":"No, I do not want weekly briefing, please","confirm":"We are almost there...","confirm_more":"We are almost done here, confirm the information bellow and agree to the Terms of Service of uhs.life.","confirm_t_more":"We are almost done here, why not give yourself a tag line, this will appear under your name in a story post. Then confirm the information bellow, and agree to the Terms of Service of uhs.life.","done":"Thank You!","done_more":"Welcome to uhs.life","btn":{"intro":"Let's go!","authorize":"AUTHORIZE","skip":"skip","signup":"Sign Up","done":"We are Done!"},"input":{"sNum":"Teach Assist Login","sPass":"Teach Assist Password","cName":"Your Name","cNum":"Your Student Number","cMail":"The email that we will be sending news letters to","cTerms":"I have read and agreed with the Terms of Service","tCourse":"What Courses do you teach? Select all that applies","tClub":"What Clubs do you supervise? Select all that applies"}}};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".less"
  ]
});
require("./client/template.main.js");
require("./i18n/en.i18n.json");
require("./client/main.js");