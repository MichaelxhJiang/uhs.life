var require = meteorInstall({"imports":{"api":{"blogCategories":{"blogCategories.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/blogCategories/blogCategories.js                                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({                                                                                              // 1
    BlogCategories: function () {                                                                            // 1
        return BlogCategories;                                                                               // 1
    }                                                                                                        // 1
});                                                                                                          // 1
var BlogCategories = new Mongo.Collection('blogcategories');                                                 // 4
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 6
    Meteor.publish('blogCategories', function () {                                                           // 7
        function blogCategoriesPublication() {                                                               // 7
            return BlogCategories.find({});                                                                  // 8
        }                                                                                                    // 9
                                                                                                             //
        return blogCategoriesPublication;                                                                    // 7
    }());                                                                                                    // 7
}                                                                                                            // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"categoriesMethods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/blogCategories/categoriesMethods.js                                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var BlogCategories = void 0;                                                                                 // 1
module.watch(require("./blogCategories.js"), {                                                               // 1
    BlogCategories: function (v) {                                                                           // 1
        BlogCategories = v;                                                                                  // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
Meteor.methods({                                                                                             // 6
    'blogCategory.addNew': function (details) {                                                              // 7
        var categoryInfo = {                                                                                 // 8
            name: details.name,                                                                              // 9
            description: details.description,                                                                // 10
            imageId: details.imgId || null,                                                                  // 11
            featured: details.featured || false,                                                             // 12
            tracking: {                                                                                      // 13
                numPost: 0,                                                                                  // 14
                lastestPostIds: []                                                                           // 15
            },                                                                                               // 13
            createdDate: new Date(),                                                                         // 17
            children: [],                                                                                    // 18
            isSubCategory: false                                                                             // 19
        };                                                                                                   // 8
        BlogCategories.insert(categoryInfo);                                                                 // 21
    },                                                                                                       // 22
    'blogCategory.remove': function (query) {                                                                // 23
        BlogCategories.remove({                                                                              // 24
            _id: query                                                                                       // 24
        });                                                                                                  // 24
    },                                                                                                       // 25
    'blogCategory.update': function (id, details) {                                                          // 26
        var newCategory = {                                                                                  // 27
            name: details.name,                                                                              // 28
            description: details.description,                                                                // 29
            imageId: details.imgId,                                                                          // 30
            featured: details.featured,                                                                      // 31
            tracking: {                                                                                      // 32
                numPost: 0,                                                                                  // 33
                lastestPostIds: []                                                                           // 34
            },                                                                                               // 32
            createdDate: new Date(),                                                                         // 36
            children: [],                                                                                    // 37
            isSubCategory: false                                                                             // 38
        };                                                                                                   // 27
        BlogCategories.update({                                                                              // 40
            _id: id                                                                                          // 40
        }, {                                                                                                 // 40
            $set: newCategory                                                                                // 40
        });                                                                                                  // 40
    }                                                                                                        // 41
});                                                                                                          // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"categories":{"categories.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/categories/categories.js                                                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({                                                                                              // 1
    Categories: function () {                                                                                // 1
        return Categories;                                                                                   // 1
    }                                                                                                        // 1
});                                                                                                          // 1
var Categories = new Mongo.Collection('categories');                                                         // 4
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 6
    Meteor.publish('categories', function () {                                                               // 7
        function categoriesPublication() {                                                                   // 7
            return Categories.find({});                                                                      // 8
        }                                                                                                    // 9
                                                                                                             //
        return categoriesPublication;                                                                        // 7
    }());                                                                                                    // 7
}                                                                                                            // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"categoriesMethods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/categories/categoriesMethods.js                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Categories = void 0;                                                                                     // 1
module.watch(require("./categories.js"), {                                                                   // 1
    Categories: function (v) {                                                                               // 1
        Categories = v;                                                                                      // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
Meteor.methods({                                                                                             // 6
    'category.addNew': function (details) {                                                                  // 7
        var categoryInfo = {                                                                                 // 8
            name: details.name,                                                                              // 9
            description: details.description,                                                                // 10
            imageId: details.imgId || null,                                                                  // 11
            featured: details.featured || false,                                                             // 12
            tracking: {                                                                                      // 13
                numPost: 0,                                                                                  // 14
                lastestPostIds: []                                                                           // 15
            },                                                                                               // 13
            createdDate: new Date(),                                                                         // 17
            children: [],                                                                                    // 18
            isSubCategory: false                                                                             // 19
        };                                                                                                   // 8
        Categories.insert(categoryInfo);                                                                     // 21
    },                                                                                                       // 22
    'category.remove': function (query) {                                                                    // 23
        Categories.remove({                                                                                  // 24
            _id: query                                                                                       // 24
        });                                                                                                  // 24
    },                                                                                                       // 25
    'category.update': function (id, details) {                                                              // 26
        var newCategory = {                                                                                  // 27
            name: details.name,                                                                              // 28
            description: details.description,                                                                // 29
            imageId: details.imgId,                                                                          // 30
            featured: details.featured,                                                                      // 31
            tracking: {                                                                                      // 32
                numPost: 0,                                                                                  // 33
                lastestPostIds: []                                                                           // 34
            },                                                                                               // 32
            createdDate: new Date(),                                                                         // 36
            children: [],                                                                                    // 37
            isSubCategory: false                                                                             // 38
        };                                                                                                   // 27
        Categories.update({                                                                                  // 40
            _id: id                                                                                          // 40
        }, {                                                                                                 // 40
            $set: newCategory                                                                                // 40
        });                                                                                                  // 40
    }                                                                                                        // 41
});                                                                                                          // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"drafts":{"draftMethods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/drafts/draftMethods.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor = void 0;                                                                                         // 1
module.watch(require("meteor/meteor"), {                                                                     // 1
    Meteor: function (v) {                                                                                   // 1
        Meteor = v;                                                                                          // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
var Drafts = void 0;                                                                                         // 1
module.watch(require("./drafts.js"), {                                                                       // 1
    Drafts: function (v) {                                                                                   // 1
        Drafts = v;                                                                                          // 1
    }                                                                                                        // 1
}, 1);                                                                                                       // 1
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 4
    Meteor.publish('drafts', function () {                                                                   // 5
        function draftsPublication(limit) {                                                                  // 5
            return Drafts.find({                                                                             // 6
                'author': this.userId                                                                        // 7
            }, {                                                                                             // 6
                limit: limit                                                                                 // 9
            });                                                                                              // 8
        }                                                                                                    // 11
                                                                                                             //
        return draftsPublication;                                                                            // 5
    }());                                                                                                    // 5
}                                                                                                            // 12
                                                                                                             //
Meteor.methods({                                                                                             // 14
    'drafts.postDraftTextImage': function (json) {                                                           // 15
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'announcementEditor'])) {                  // 16
            throw new Meteor.Error(403, "You do not have permission...Reported");                            // 17
        } //adds draft to the Drafts collection                                                              // 18
                                                                                                             //
                                                                                                             //
        Drafts.insert(json, function (err, content) {                                                        // 21
            //error catch for algolia issues                                                                 // 22
            if (err) {                                                                                       // 23
                console.error(err);                                                                          // 24
            }                                                                                                // 25
        });                                                                                                  // 26
    },                                                                                                       // 27
    'drafts.postDraftText': function (json) {                                                                // 28
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'announcementEditor'])) {                  // 29
            throw new Meteor.Error(403, "You do not have permission...Reported");                            // 30
        } //adds draft to the Drafts collection                                                              // 31
                                                                                                             //
                                                                                                             //
        Drafts.insert(json, function (err, content) {                                                        // 34
            //error catch for algolia issues                                                                 // 35
            if (err) {                                                                                       // 36
                console.error(err);                                                                          // 37
            }                                                                                                // 38
        });                                                                                                  // 39
    },                                                                                                       // 40
    'drafts.postDraftImage': function (json) {                                                               // 41
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'announcementEditor'])) {                  // 42
            throw new Meteor.Error(403, "You do not have permission...Reported");                            // 43
        } //adds draft to the Drafts collection                                                              // 44
                                                                                                             //
                                                                                                             //
        Drafts.insert(json, function (err, content) {                                                        // 47
            //error catch for algolia issues                                                                 // 48
            if (err) {                                                                                       // 49
                console.error(err);                                                                          // 50
            }                                                                                                // 51
        });                                                                                                  // 52
    },                                                                                                       // 53
    'drafts.postDraftBlog': function (json) {                                                                // 54
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'announcementEditor'])) {                  // 55
            throw new Meteor.Error(403, "You do not have permission...Reported");                            // 56
        } //adds draft to the Drafts collection                                                              // 57
                                                                                                             //
                                                                                                             //
        Drafts.insert(json, function (err, content) {                                                        // 60
            //error catch for algolia issues                                                                 // 61
            if (err) {                                                                                       // 62
                console.error(err);                                                                          // 63
            }                                                                                                // 64
        });                                                                                                  // 65
    },                                                                                                       // 66
    'drafts.remove': function (id) {                                                                         // 67
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'announcementEditor'])) {                  // 68
            throw new Meteor.Error(403, "You do not have permission...Reported");                            // 69
        }                                                                                                    // 70
                                                                                                             //
        var draft = Drafts.findOne({                                                                         // 71
            _id: id                                                                                          // 71
        });                                                                                                  // 71
                                                                                                             //
        if (draft.author !== this.userId) {                                                                  // 72
            throw new Meteor.Error(403, "You do not have permission...Reported");                            // 73
        }                                                                                                    // 74
                                                                                                             //
        return Drafts.remove({                                                                               // 75
            _id: id                                                                                          // 75
        });                                                                                                  // 75
    }                                                                                                        // 76
});                                                                                                          // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"drafts.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/drafts/drafts.js                                                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({                                                                                              // 1
  Drafts: function () {                                                                                      // 1
    return Drafts;                                                                                           // 1
  }                                                                                                          // 1
});                                                                                                          // 1
var Mongo = void 0;                                                                                          // 1
module.watch(require("meteor/mongo"), {                                                                      // 1
  Mongo: function (v) {                                                                                      // 1
    Mongo = v;                                                                                               // 1
  }                                                                                                          // 1
}, 0);                                                                                                       // 1
var Drafts = new Mongo.Collection('drafts');                                                                 // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"images":{"images.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/images/images.js                                                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({                                                                                              // 1
   Images: function () {                                                                                     // 1
      return Images;                                                                                         // 1
   }                                                                                                         // 1
});                                                                                                          // 1
var imageStore = new FS.Store.GridFS("images");                                                              // 1
var Images = new FS.Collection("images", {                                                                   // 3
   stores: [imageStore]                                                                                      // 4
});                                                                                                          // 3
//Set the permissions for Images collection                                                                  // 7
Images.allow({                                                                                               // 8
   insert: function () {                                                                                     // 9
      return Roles.userIsInRole(this.userId, ['teacher', 'admin']);                                          // 10
   },                                                                                                        // 11
   update: function () {                                                                                     // 12
      return Roles.userIsInRole(this.userId, ['teacher', 'admin']);                                          // 13
   },                                                                                                        // 14
   remove: function () {                                                                                     // 15
      return Roles.userIsInRole(this.userId, ['teacher', 'admin']);                                          // 16
   },                                                                                                        // 17
   download: function () {                                                                                   // 18
      return Roles.userIsInRole(this.userId, ['teacher', 'admin']);                                          // 19
   }                                                                                                         // 20
});                                                                                                          // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imagesMethods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/images/imagesMethods.js                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Images = void 0;                                                                                         // 1
module.watch(require("./images.js"), {                                                                       // 1
   Images: function (v) {                                                                                    // 1
      Images = v;                                                                                            // 1
   }                                                                                                         // 1
}, 0);                                                                                                       // 1
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 3
   Meteor.publish('images', function () {                                                                    // 4
      function imagesPublication() {                                                                         // 4
         return Images.find({}); //TODO only show drafts of current user                                     // 5
      }                                                                                                      // 6
                                                                                                             //
      return imagesPublication;                                                                              // 4
   }());                                                                                                     // 4
}                                                                                                            // 7
                                                                                                             //
Meteor.methods({                                                                                             // 9
   'images.insert': function (image, callback) {                                                             // 10
      console.log(image);                                                                                    // 11
      Images.insert(image, function (err, fileObj) {                                                         // 12
         if (err) {                                                                                          // 13
            callback(err, null);                                                                             // 14
         } else {                                                                                            // 15
            console.log('upload success');                                                                   // 16
            callback(null, fileObj);                                                                         // 17
         }                                                                                                   // 18
      });                                                                                                    // 19
   }                                                                                                         // 20
});                                                                                                          // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"organizations":{"clubs.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/organizations/clubs.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({                                                                                              // 1
    Clubs: function () {                                                                                     // 1
        return Clubs;                                                                                        // 1
    }                                                                                                        // 1
});                                                                                                          // 1
var Clubs = new Mongo.Collection('clubs');                                                                   // 4
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 6
    Meteor.publish('allClubs', function () {                                                                 // 7
        function clubsPublication(limit) {                                                                   // 7
            return Clubs.find({}, {                                                                          // 8
                limit: limit                                                                                 // 9
            });                                                                                              // 8
        }                                                                                                    // 11
                                                                                                             //
        return clubsPublication;                                                                             // 7
    }());                                                                                                    // 7
}                                                                                                            // 12
                                                                                                             //
Clubs.allow({                                                                                                // 14
    insert: function () {                                                                                    // 15
        return true;                                                                                         // 16
    },                                                                                                       // 17
    update: function () {                                                                                    // 18
        return true;                                                                                         // 19
    },                                                                                                       // 20
    remove: function () {                                                                                    // 21
        return true;                                                                                         // 22
    }                                                                                                        // 23
});                                                                                                          // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"clubsMethods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/organizations/clubsMethods.js                                                                 //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Clubs = void 0;                                                                                          // 1
module.watch(require("./clubs.js"), {                                                                        // 1
    Clubs: function (v) {                                                                                    // 1
        Clubs = v;                                                                                           // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 6
    Meteor.methods({                                                                                         // 7
        'clubs.add': function (json) {                                                                       // 8
            if (!Roles.userIsInRole(this.userId, 'admin')) {                                                 // 9
                throw Meteor.Error(403, "Your account is not allowed to do so.");                            // 10
            }                                                                                                // 11
                                                                                                             //
            Clubs.insert(json);                                                                              // 12
        },                                                                                                   // 13
        'clubs.remove': function (id) {                                                                      // 14
            if (!Roles.userIsInRole(this.userId, 'admin')) {                                                 // 15
                throw Meteor.Error(403, "Your account is not allowed to do so.");                            // 16
            }                                                                                                // 17
                                                                                                             //
            Clubs.remove(id);                                                                                // 18
        }                                                                                                    // 19
    });                                                                                                      // 7
}                                                                                                            // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"courses.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/organizations/courses.js                                                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({                                                                                              // 1
    Courses: function () {                                                                                   // 1
        return Courses;                                                                                      // 1
    }                                                                                                        // 1
});                                                                                                          // 1
var Courses = new Mongo.Collection('courses');                                                               // 4
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 6
    Meteor.publish('allCourses', function () {                                                               // 7
        function coursesPublication(limit) {                                                                 // 7
            return Courses.find({}, {                                                                        // 8
                limit: limit                                                                                 // 9
            });                                                                                              // 8
        }                                                                                                    // 11
                                                                                                             //
        return coursesPublication;                                                                           // 7
    }());                                                                                                    // 7
}                                                                                                            // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"coursesMethods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/organizations/coursesMethods.js                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Courses = void 0;                                                                                        // 1
module.watch(require("./courses.js"), {                                                                      // 1
    Courses: function (v) {                                                                                  // 1
        Courses = v;                                                                                         // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
Meteor.methods({                                                                                             // 7
    'courses.addSeveral': function (names, codes) {                                                          // 8
        var nameList = names.split('\n');                                                                    // 9
        var codeList = codes.split('\n');                                                                    // 10
        console.log(nameList.length);                                                                        // 11
        console.log(codeList.length);                                                                        // 12
                                                                                                             //
        if (nameList.length !== codeList.length) {                                                           // 13
            Meteor.Error(400, "List not the same length");                                                   // 14
        }                                                                                                    // 15
                                                                                                             //
        for (var i = 0; i < nameList.length; i++) {                                                          // 16
            var json = {                                                                                     // 17
                name: nameList[i],                                                                           // 18
                code: codeList[i],                                                                           // 19
                description: "",                                                                             // 20
                imgLink: null                                                                                // 21
            };                                                                                               // 17
            Courses.insert(json);                                                                            // 23
        }                                                                                                    // 24
    }                                                                                                        // 25
});                                                                                                          // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"posts":{"posts.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/posts/posts.js                                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({                                                                                              // 1
  Posts: function () {                                                                                       // 1
    return Posts;                                                                                            // 1
  }                                                                                                          // 1
});                                                                                                          // 1
var Mongo = void 0;                                                                                          // 1
module.watch(require("meteor/mongo"), {                                                                      // 1
  Mongo: function (v) {                                                                                      // 1
    Mongo = v;                                                                                               // 1
  }                                                                                                          // 1
}, 0);                                                                                                       // 1
var Posts = new Mongo.Collection('posts');                                                                   // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"postsMethods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/posts/postsMethods.js                                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor = void 0;                                                                                         // 1
module.watch(require("meteor/meteor"), {                                                                     // 1
    Meteor: function (v) {                                                                                   // 1
        Meteor = v;                                                                                          // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
var Posts = void 0;                                                                                          // 1
module.watch(require("./posts.js"), {                                                                        // 1
    Posts: function (v) {                                                                                    // 1
        Posts = v;                                                                                           // 1
    }                                                                                                        // 1
}, 1);                                                                                                       // 1
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 4
    Meteor.publish('posts', function () {                                                                    // 5
        function postsPublication() {                                                                        // 5
            if (this.userId) {                                                                               // 6
                console.log(this.userId);                                                                    // 7
                return Posts.find({});                                                                       // 8
            }                                                                                                // 9
        }                                                                                                    // 10
                                                                                                             //
        return postsPublication;                                                                             // 5
    }());                                                                                                    // 5
    Meteor.publish('announcements', function () {                                                            // 11
        function announcementsPublication(limit) {                                                           // 11
            var userLevel = '1';                                                                             // 12
                                                                                                             //
            if (Roles.userIsInRole(this.userId, 'student')) {                                                // 13
                userLevel = '2';                                                                             // 14
            } else if (Roles.userIsInRole(this.userId, ['teacher', 'admin'])) {                              // 15
                userLevel = '3';                                                                             // 16
            }                                                                                                // 17
                                                                                                             //
            return Posts.find({                                                                              // 18
                'type': 'announcement',                                                                      // 19
                'meta.approved': true,                                                                       // 20
                $or: [{                                                                                      // 21
                    'meta.visibility': '1'                                                                   // 22
                }, {                                                                                         // 21
                    'meta.visibility': userLevel                                                             // 24
                }]                                                                                           // 23
            }, {                                                                                             // 18
                limit: limit                                                                                 // 27
            });                                                                                              // 26
        }                                                                                                    // 29
                                                                                                             //
        return announcementsPublication;                                                                     // 11
    }());                                                                                                    // 11
    Meteor.publish('blogs', function () {                                                                    // 30
        function blogsPublication(limit) {                                                                   // 30
            return Posts.find({                                                                              // 31
                'type': 'blog'                                                                               // 32
            }, {                                                                                             // 31
                limit: limit                                                                                 // 34
            });                                                                                              // 33
        }                                                                                                    // 36
                                                                                                             //
        return blogsPublication;                                                                             // 30
    }());                                                                                                    // 30
    Meteor.publish('postsByCourse', function (code, limit) {                                                 // 37
        return Posts.find({                                                                                  // 38
            'type': 'blog',                                                                                  // 39
            'organizationsValues': code                                                                      // 40
        }, {                                                                                                 // 38
            limit: limit                                                                                     // 42
        });                                                                                                  // 41
    });                                                                                                      // 44
    Meteor.publish('postsByUser', function (limit) {                                                         // 45
        return Posts.find({                                                                                  // 46
            'author': this.userId                                                                            // 47
        }, {                                                                                                 // 46
            limit: limit                                                                                     // 49
        });                                                                                                  // 48
    });                                                                                                      // 51
}                                                                                                            // 52
                                                                                                             //
Meteor.methods({                                                                                             // 54
    'posts.removeAll': function () {                                                                         // 55
        throw new Meteor.Error(403, "No, just no."); //Posts.remove({});                                     // 56
    },                                                                                                       // 58
    'posts.postTextImage': function (json) {                                                                 // 59
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'announcementEditor'])) {                  // 60
            throw new Meteor.Error(403, "You do not have permission to execute the following action.");      // 61
        }                                                                                                    // 62
                                                                                                             //
        var errStr = "",                                                                                     // 63
            err = false;                                                                                     // 63
                                                                                                             //
        if (json.type !== "announcement") {                                                                  // 64
            err = true;                                                                                      // 65
            errStr += "Not an announcement. ";                                                               // 66
        }                                                                                                    // 67
                                                                                                             //
        if (json.subType !== "imageText") {                                                                  // 68
            err = true;                                                                                      // 69
            errStr += "Not correct announcement type. ";                                                     // 70
        }                                                                                                    // 71
                                                                                                             //
        if (!json.headline) {                                                                                // 72
            err = true;                                                                                      // 73
            errStr += "Missing headline. ";                                                                  // 74
        }                                                                                                    // 75
                                                                                                             //
        if (!json.content) {                                                                                 // 76
            err = true;                                                                                      // 77
            errStr += "Missing content. ";                                                                   // 78
        }                                                                                                    // 79
                                                                                                             //
        console.log(json.imgId);                                                                             // 80
                                                                                                             //
        if (!json.imgId) {                                                                                   // 81
            err = true;                                                                                      // 82
            errStr += "Missing image. ";                                                                     // 83
        }                                                                                                    // 84
                                                                                                             //
        var sDate = new Date(json.startDate),                                                                // 85
            eDate = new Date(json.endDate),                                                                  // 85
            currentDate = new Date();                                                                        // 85
                                                                                                             //
        if (sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()) {
            err = true;                                                                                      // 89
            errStr = "Your date selection is illegal. ";                                                     // 90
        }                                                                                                    // 91
                                                                                                             //
        if (err) {                                                                                           // 92
            throw new Meteor.Error(400, errStr);                                                             // 93
        }                                                                                                    // 94
                                                                                                             //
        json.meta.approved = false;                                                                          // 95
        json.meta.screeningStage = 0;                                                                        // 96
        json.meta.display = false; //adds draft to the Posts collection                                      // 97
                                                                                                             //
        Posts.insert(json, function (err, content) {                                                         // 100
            //error catch for algolia issues                                                                 // 101
            if (err) {                                                                                       // 102
                console.error(err);                                                                          // 103
            }                                                                                                // 104
        });                                                                                                  // 105
    },                                                                                                       // 107
    'posts.postText': function (json) {                                                                      // 108
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'announcementEditor'])) {                  // 109
            throw new Meteor.Error(403, "You do not have permission...Reported");                            // 110
        }                                                                                                    // 111
                                                                                                             //
        var errStr = "",                                                                                     // 113
            err = false;                                                                                     // 113
                                                                                                             //
        if (json.type !== "announcement") {                                                                  // 114
            err = true;                                                                                      // 115
            errStr += "Not an announcement. ";                                                               // 116
        }                                                                                                    // 117
                                                                                                             //
        if (json.subType !== "textOnly") {                                                                   // 118
            err = true;                                                                                      // 119
            errStr += "Not correct announcement type. ";                                                     // 120
        }                                                                                                    // 121
                                                                                                             //
        if (!json.headline) {                                                                                // 122
            err = true;                                                                                      // 123
            errStr += "Missing headline. ";                                                                  // 124
        }                                                                                                    // 125
                                                                                                             //
        if (!json.content) {                                                                                 // 126
            err = true;                                                                                      // 127
            errStr += "Missing content. ";                                                                   // 128
        }                                                                                                    // 129
                                                                                                             //
        var sDate = new Date(json.startDate),                                                                // 130
            eDate = new Date(json.endDate),                                                                  // 130
            currentDate = new Date();                                                                        // 130
                                                                                                             //
        if (sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()) {
            err = true;                                                                                      // 134
            errStr = "Your date selection is illegal. ";                                                     // 135
        }                                                                                                    // 136
                                                                                                             //
        if (err) {                                                                                           // 137
            throw new Meteor.Error(400, errStr);                                                             // 138
        }                                                                                                    // 139
                                                                                                             //
        json.meta.approved = false;                                                                          // 141
        json.meta.screeningStage = 0;                                                                        // 142
        json.meta.display = false; //adds draft to the Posts collection                                      // 143
                                                                                                             //
        Posts.insert(json, function (err, content) {                                                         // 146
            //error catch for algolia issues                                                                 // 147
            if (err) {                                                                                       // 148
                console.error(err);                                                                          // 149
            }                                                                                                // 150
        });                                                                                                  // 151
    },                                                                                                       // 152
    'posts.postImage': function (json) {                                                                     // 153
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'announcementEditor'])) {                  // 154
            throw new Meteor.Error(403, "You do not have permission...Reported");                            // 155
        }                                                                                                    // 156
                                                                                                             //
        var errStr = "",                                                                                     // 158
            err = false;                                                                                     // 158
                                                                                                             //
        if (json.type !== "announcement") {                                                                  // 159
            err = true;                                                                                      // 160
            errStr += "Not an announcement. ";                                                               // 161
        }                                                                                                    // 162
                                                                                                             //
        if (json.subType !== "imageOnly") {                                                                  // 163
            err = true;                                                                                      // 164
            errStr += "Not correct announcement type. ";                                                     // 165
        }                                                                                                    // 166
                                                                                                             //
        console.log(json.headline);                                                                          // 167
                                                                                                             //
        if (!json.headline) {                                                                                // 168
            err = true;                                                                                      // 169
            errStr += "Missing headline. ";                                                                  // 170
        }                                                                                                    // 171
                                                                                                             //
        if (!json.imgId) {                                                                                   // 172
            err = true;                                                                                      // 173
            errStr += "Missing image. ";                                                                     // 174
        }                                                                                                    // 175
                                                                                                             //
        var sDate = new Date(json.startDate),                                                                // 176
            eDate = new Date(json.endDate),                                                                  // 176
            currentDate = new Date();                                                                        // 176
                                                                                                             //
        if (sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()) {
            err = true;                                                                                      // 180
            errStr = "Your date selection is illegal. ";                                                     // 181
        }                                                                                                    // 182
                                                                                                             //
        if (err) {                                                                                           // 183
            throw new Meteor.Error(400, errStr);                                                             // 184
        }                                                                                                    // 185
                                                                                                             //
        json.meta.approved = false;                                                                          // 187
        json.meta.screeningStage = 0;                                                                        // 188
        json.meta.display = false; //adds draft to the Posts collection                                      // 189
                                                                                                             //
        Posts.insert(json, function (err, content) {                                                         // 192
            //error catch for algolia issues                                                                 // 193
            if (err) {                                                                                       // 194
                console.error(err);                                                                          // 195
            }                                                                                                // 196
        });                                                                                                  // 197
    },                                                                                                       // 198
    'posts.postBlog': function (json) {                                                                      // 199
        if (!Roles.userIsInRole(this.userId, ['teacher', 'admin', 'blogEditor'])) {                          // 200
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 201
        }                                                                                                    // 202
                                                                                                             //
        var errStr = "",                                                                                     // 204
            err = false;                                                                                     // 204
                                                                                                             //
        if (json.type !== "blog") {                                                                          // 205
            err = true;                                                                                      // 206
            errStr += "Not a blog. ";                                                                        // 207
        }                                                                                                    // 208
                                                                                                             //
        if (!json.title) {                                                                                   // 209
            err = true;                                                                                      // 210
            errStr += "Missing title. ";                                                                     // 211
        }                                                                                                    // 212
                                                                                                             //
        if (!json.subtitle) {                                                                                // 213
            err = true;                                                                                      // 214
            errStr += "Missing subtitle. ";                                                                  // 215
        }                                                                                                    // 216
                                                                                                             //
        if (!json.content) {                                                                                 // 217
            err = true;                                                                                      // 218
            errStr += "Missing content. ";                                                                   // 219
        }                                                                                                    // 220
                                                                                                             //
        if (!json.imgId) {                                                                                   // 221
            err = true;                                                                                      // 222
            errStr += "Missing image. ";                                                                     // 223
        }                                                                                                    // 224
                                                                                                             //
        var sDate = new Date(json.releaseDate),                                                              // 225
            currentDate = new Date();                                                                        // 225
                                                                                                             //
        if (sDate < currentDate) {                                                                           // 227
            err = true;                                                                                      // 228
            errStr = "Your date selection is illegal. ";                                                     // 229
        }                                                                                                    // 230
                                                                                                             //
        if (err) {                                                                                           // 231
            throw new Meteor.Error(400, errStr);                                                             // 232
        }                                                                                                    // 233
                                                                                                             //
        json.meta.approved = false;                                                                          // 235
        json.meta.screeningStage = 0;                                                                        // 236
        json.meta.display = false; //adds draft to the Posts collection                                      // 237
                                                                                                             //
        Posts.insert(json, function (err, content) {                                                         // 240
            //error catch for algolia issues                                                                 // 241
            if (err) {                                                                                       // 242
                console.error(err);                                                                          // 243
            }                                                                                                // 244
        });                                                                                                  // 245
    },                                                                                                       // 246
    'posts.getPostById': function (id) {                                                                     // 247
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 251
        }                                                                                                    // 252
                                                                                                             //
        return Posts.findOne({                                                                               // 253
            '_id': id                                                                                        // 253
        });                                                                                                  // 253
    },                                                                                                       // 254
    'posts.getDisplayPosts': function () {                                                                   // 255
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 259
        }                                                                                                    // 260
                                                                                                             //
        return Posts.find({                                                                                  // 262
            'meta.approved': true,                                                                           // 262
            'display': true                                                                                  // 262
        }).fetch();                                                                                          // 262
    },                                                                                                       // 263
    'posts.getUnapprovedPosts': function () {                                                                // 264
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 268
        }                                                                                                    // 269
                                                                                                             //
        return Posts.find({                                                                                  // 271
            'meta.approved': false,                                                                          // 271
            'meta.screeningStage': {                                                                         // 271
                $ne: -1                                                                                      // 271
            }                                                                                                // 271
        }).fetch();                                                                                          // 271
    },                                                                                                       // 272
    'posts.getApprovedPosts': function () {                                                                  // 273
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 277
        }                                                                                                    // 278
                                                                                                             //
        return Posts.find({                                                                                  // 280
            'meta.approved': true,                                                                           // 280
            'meta.screeningStage': 3                                                                         // 280
        }).fetch();                                                                                          // 280
    },                                                                                                       // 281
    'posts.getRejectedPosts': function () {                                                                  // 282
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 286
        }                                                                                                    // 287
                                                                                                             //
        return Posts.find({                                                                                  // 289
            'meta.approved': false,                                                                          // 289
            'meta.screeningStage': -1                                                                        // 289
        }).fetch();                                                                                          // 289
    },                                                                                                       // 290
    'posts.getPostsByUserId': function (userId) {                                                            // 291
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 295
        }                                                                                                    // 296
                                                                                                             //
        return Posts.find({                                                                                  // 298
            'authorId': userId                                                                               // 298
        }).fetch();                                                                                          // 298
    },                                                                                                       // 299
    'posts.removePost': function (postId) {                                                                  // 300
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 304
        }                                                                                                    // 305
                                                                                                             //
        Posts.remove({                                                                                       // 307
            _id: postId                                                                                      // 307
        });                                                                                                  // 307
    },                                                                                                       // 308
    'posts.approvePost': function (postId) {                                                                 // 309
        if (!Roles.userIsInRole(this.userId, ['admin'])) {                                                   // 310
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 311
        }                                                                                                    // 312
                                                                                                             //
        Posts.update({                                                                                       // 314
            '_id': postId                                                                                    // 314
        }, {                                                                                                 // 314
            $set: {                                                                                          // 314
                'meta.approved': true,                                                                       // 314
                'meta.screeningStage': 3                                                                     // 314
            }                                                                                                // 314
        }, function (err, response) {                                                                        // 314
            if (err) {                                                                                       // 315
                console.log(err);                                                                            // 316
            } else {                                                                                         // 317
                var obj = Posts.findOne({                                                                    // 318
                    '_id': postId                                                                            // 318
                });                                                                                          // 318
                var type = obj.type,                                                                         // 319
                    subType = obj.subType;                                                                   // 319
                Meteor.call('scheduleAnnouncement', postId, function (err) {                                 // 321
                    if (err) {                                                                               // 322
                        console.log(err);                                                                    // 323
                    }                                                                                        // 324
                });                                                                                          // 325
                                                                                                             //
                if (type === 'announcement') {                                                               // 326
                    if (subType === 'textOnly') {                                                            // 327
                        Meteor.call('postTextAlgolia', postId);                                              // 328
                    } else if (subType === 'imageOnly') {                                                    // 329
                        Meteor.call('postImageAlgolia', postId);                                             // 330
                    } else {                                                                                 // 331
                        Meteor.call('postTextImageAlgolia', postId);                                         // 332
                    }                                                                                        // 333
                } else {                                                                                     // 334
                    Meteor.call('postBlogAlgolia', postId);                                                  // 335
                } //Post on twitter                                                                          // 336
                                                                                                             //
                                                                                                             //
                Meteor.call('setupTwitterAPI', function (err, response) {                                    // 339
                    if (err) {                                                                               // 340
                        console.log(err);                                                                    // 341
                    } else {                                                                                 // 342
                        if (type === 'announcement') {                                                       // 344
                            if (subType === 'textOnly') {                                                    // 345
                                Meteor.call('postTextAnnouncementTwitter', obj, function (err) {             // 346
                                    if (err) {                                                               // 347
                                        console.log(err);                                                    // 348
                                    }                                                                        // 349
                                });                                                                          // 350
                            } else if (subType === 'imageOnly') {                                            // 351
                                Meteor.call('postImageAnnouncementTwitter', obj, function (err) {            // 352
                                    if (err) {                                                               // 353
                                        console.log(err);                                                    // 354
                                    }                                                                        // 355
                                });                                                                          // 356
                            } else {                                                                         // 357
                                Meteor.call('postTextImageAnnouncementTwitter', obj, function (err) {        // 358
                                    if (err) {                                                               // 359
                                        console.log(err);                                                    // 360
                                    }                                                                        // 361
                                });                                                                          // 362
                            }                                                                                // 363
                        } else {                                                                             // 364
                            console.log('This post is not announcement');                                    // 365
                            return -1;                                                                       // 366
                        }                                                                                    // 367
                    }                                                                                        // 368
                });                                                                                          // 369
            }                                                                                                // 370
        });                                                                                                  // 371
    },                                                                                                       // 372
    'posts.unApprovePost': function (postId) {                                                               // 373
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 377
        }                                                                                                    // 378
                                                                                                             //
        Posts.findOneAndUpdate({                                                                             // 380
            '_id': postId                                                                                    // 380
        }, {                                                                                                 // 380
            $set: {                                                                                          // 380
                'meta.approved': false,                                                                      // 380
                'meta.screeningStage': 0,                                                                    // 380
                'display': false                                                                             // 380
            }                                                                                                // 380
        });                                                                                                  // 380
    },                                                                                                       // 381
    'posts.rejectPost': function (postId, reason) {                                                          // 382
        if (!Roles.userIsInRole(this.userId, ['admin'])) {                                                   // 383
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 384
        }                                                                                                    // 385
                                                                                                             //
        Posts.update({                                                                                       // 386
            '_id': postId                                                                                    // 386
        }, {                                                                                                 // 386
            $set: {                                                                                          // 386
                'meta.screeningStage': -1,                                                                   // 386
                'meta.rejectedReason': reason                                                                // 386
            }                                                                                                // 386
        });                                                                                                  // 386
    },                                                                                                       // 387
    'posts.unRejectPost': function (postId) {                                                                // 388
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 392
        }                                                                                                    // 393
                                                                                                             //
        Posts.findOneAndUpdate({                                                                             // 395
            '_id': postId                                                                                    // 395
        }, {                                                                                                 // 395
            $set: {                                                                                          // 395
                'meta.screeningStage': 0                                                                     // 395
            }                                                                                                // 395
        });                                                                                                  // 395
    }                                                                                                        // 396
});                                                                                                          // 54
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"suggestions":{"suggestionMethods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/suggestions/suggestionMethods.js                                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Suggestions = void 0;                                                                                    // 1
module.watch(require("./suggestions.js"), {                                                                  // 1
    Suggestions: function (v) {                                                                              // 1
        Suggestions = v;                                                                                     // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
Meteor.methods({                                                                                             // 3
    'suggestions.postSuggestion': function (json) {                                                          // 4
        var accessLevel = Meteor.users.find({                                                                // 5
            _id: Meteor.userId()                                                                             // 5
        }).accessLevel;                                                                                      // 5
                                                                                                             //
        if (accessLevel === 'teacher' || accessLevel === 'admin') {//TODO                                    // 6
        }                                                                                                    // 8
                                                                                                             //
        var errStr = "",                                                                                     // 9
            err = false;                                                                                     // 9
                                                                                                             //
        if (json.type !== "suggestion") {                                                                    // 10
            err = true;                                                                                      // 11
            errStr += "Not an announcement. ";                                                               // 12
        }                                                                                                    // 13
                                                                                                             //
        if (!json.headline) {                                                                                // 14
            err = true;                                                                                      // 15
            errStr += "Missing headline. ";                                                                  // 16
        }                                                                                                    // 17
                                                                                                             //
        if (!json.content) {                                                                                 // 18
            err = true;                                                                                      // 19
            errStr += "Missing content. ";                                                                   // 20
        }                                                                                                    // 21
                                                                                                             //
        if (err) {                                                                                           // 22
            throw new Meteor.Error(400, errStr);                                                             // 23
        } //adds draft to the Posts collection                                                               // 24
                                                                                                             //
                                                                                                             //
        Suggestions.insert(json, function (err, content) {                                                   // 27
            //error catch for algolia issues                                                                 // 28
            if (err) {                                                                                       // 29
                console.error(err);                                                                          // 30
            }                                                                                                // 31
        });                                                                                                  // 32
    },                                                                                                       // 34
    'suggestions.getSuggestions': function () {                                                              // 35
        return Suggestions.find();                                                                           // 36
    },                                                                                                       // 37
    'suggestions.removeSuggestions': function (id) {                                                         // 38
        return Suggestions.remove({                                                                          // 39
            '_id': id                                                                                        // 39
        });                                                                                                  // 39
    }                                                                                                        // 40
});                                                                                                          // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"suggestions.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/suggestions/suggestions.js                                                                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({                                                                                              // 1
    Suggestions: function () {                                                                               // 1
        return Suggestions;                                                                                  // 1
    }                                                                                                        // 1
});                                                                                                          // 1
var Mongo = void 0;                                                                                          // 1
module.watch(require("meteor/mongo"), {                                                                      // 1
    Mongo: function (v) {                                                                                    // 1
        Mongo = v;                                                                                           // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
var Suggestions = new Mongo.Collection('suggestions');                                                       // 3
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 5
    Meteor.publish('suggestions', function () {                                                              // 6
        function suggestionsPublication() {                                                                  // 6
            if (this.userId) {                                                                               // 7
                return Suggestions.find({});                                                                 // 8
            }                                                                                                // 9
        }                                                                                                    // 10
                                                                                                             //
        return suggestionsPublication;                                                                       // 6
    }());                                                                                                    // 6
}                                                                                                            // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"server":{"accounts.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/accounts.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor = void 0;                                                                                         // 1
module.watch(require("meteor/meteor"), {                                                                     // 1
    Meteor: function (v) {                                                                                   // 1
        Meteor = v;                                                                                          // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
var Banned = new Mongo.Collection('blacklist');                                                              // 3
Meteor.users.allow({                                                                                         // 5
    update: function () {                                                                                    // 6
        return true;                                                                                         // 7
    },                                                                                                       // 8
    remove: function () {                                                                                    // 9
        return true;                                                                                         // 10
    }                                                                                                        // 11
});                                                                                                          // 5
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 14
    Meteor.publish('allUsers', function () {                                                                 // 15
        function usersPublication() {                                                                        // 15
            return Meteor.users.find({});                                                                    // 16
        }                                                                                                    // 17
                                                                                                             //
        return usersPublication;                                                                             // 15
    }());                                                                                                    // 15
    Meteor.publish('theUser', function () {                                                                  // 18
        function theUserPublication() {                                                                      // 18
            return Meteor.users.find({                                                                       // 19
                _id: this.userId                                                                             // 19
            });                                                                                              // 19
        }                                                                                                    // 20
                                                                                                             //
        return theUserPublication;                                                                           // 18
    }());                                                                                                    // 18
    Meteor.publish('allUsersLite', function () {                                                             // 21
        function usersLitePublication() {                                                                    // 21
            return Meteor.users.find({}, {                                                                   // 22
                'services.google.picture': 1,                                                                // 23
                'services.google.name': 1                                                                    // 24
            });                                                                                              // 22
        }                                                                                                    // 26
                                                                                                             //
        return usersLitePublication;                                                                         // 21
    }());                                                                                                    // 21
}                                                                                                            // 27
                                                                                                             //
Accounts.validateNewUser(function (user) {                                                                   // 29
    var email = user.services.google.email;                                                                  // 30
                                                                                                             //
    if (email.indexOf("gapps.yrdsb.ca") !== -1) {                                                            // 31
        //check for teacher or student                                                                       // 32
        return true;                                                                                         // 33
    } else {                                                                                                 // 35
        console.log('not gapps yrdsb account');                                                              // 36
        throw new Meteor.Error(403, "Currently uhs.life is only available to YRDSB GAPPS users, stay tuned for parental support!");
    }                                                                                                        // 38
});                                                                                                          // 39
Accounts.onCreateUser(function (options, user) {                                                             // 41
    if (!user.profile) {                                                                                     // 42
        user.profile = {                                                                                     // 43
            init: false,                                                                                     // 44
            teacher: false                                                                                   // 45
        };                                                                                                   // 43
        user.private = {                                                                                     // 47
            courses: null,                                                                                   // 48
            token: null                                                                                      // 49
        };                                                                                                   // 47
    }                                                                                                        // 51
                                                                                                             //
    var email = user.services.google.email;                                                                  // 52
    var hasNumbers = email.match(/\d+/g);                                                                    // 53
                                                                                                             //
    if (!hasNumbers) {                                                                                       // 54
        user.profile.teacher = true;                                                                         // 55
    }                                                                                                        // 56
                                                                                                             //
    return user;                                                                                             // 57
});                                                                                                          // 58
Accounts.validateLoginAttempt(function (info) {                                                              // 59
    var status = true;                                                                                       // 60
                                                                                                             //
    try {                                                                                                    // 61
        status = !Roles.userIsInRole(info.user._id, 'banned');                                               // 62
    } catch (e) {                                                                                            // 63
        status = true;                                                                                       // 64
    }                                                                                                        // 65
                                                                                                             //
    console.log(status);                                                                                     // 66
                                                                                                             //
    if (!status) {                                                                                           // 67
        throw new Meteor.Error(403, "Sorry you have been banned from uhs.life by the administration for the following reason: ");
    }                                                                                                        // 69
                                                                                                             //
    return true;                                                                                             // 70
});                                                                                                          // 71
Meteor.methods({                                                                                             // 72
    'initUserProfile': function (id, info) {                                                                 // 73
        Meteor.users.update({                                                                                // 74
            _id: id                                                                                          // 74
        }, {                                                                                                 // 74
            $set: {                                                                                          // 74
                "profile.init": true                                                                         // 74
            }                                                                                                // 74
        });                                                                                                  // 74
        Meteor.users.update({                                                                                // 75
            _id: id                                                                                          // 75
        }, {                                                                                                 // 75
            $set: {                                                                                          // 75
                "profile.terms": true                                                                        // 75
            }                                                                                                // 75
        });                                                                                                  // 75
    },                                                                                                       // 76
    'addUserToRole': function (userId, roles) {                                                              // 77
        Roles.setUserRoles(userId, roles);                                                                   // 78
    },                                                                                                       // 79
    'accounts.setPersonalEmail': function (email) {                                                          // 80
        Meteor.users.update({                                                                                // 81
            _id: this.userId                                                                                 // 81
        }, {                                                                                                 // 81
            $set: {                                                                                          // 81
                "profile.email": email                                                                       // 81
            }                                                                                                // 81
        });                                                                                                  // 81
    },                                                                                                       // 82
    'accounts.initRoles': function () {                                                                      // 83
        var user = Meteor.users.findOne({                                                                    // 84
            _id: this.userId                                                                                 // 84
        });                                                                                                  // 84
        var email = user.services.google.email;                                                              // 85
        var hasNumbers = email.match(/\d+/g);                                                                // 86
                                                                                                             //
        if (hasNumbers) {                                                                                    // 87
            Roles.addUsersToRoles(this.userId, ['student']);                                                 // 88
        } else {                                                                                             // 89
            Roles.addUsersToRoles(this.userId, ['teacher']);                                                 // 90
        }                                                                                                    // 91
    },                                                                                                       // 92
    'accounts.ban': function (id, reason) {                                                                  // 93
        if (!Roles.userIsInRole(this.userId, 'admin')) {                                                     // 94
            throw new Meteor.Error(403, "You do not have the power to ban a user.");                         // 95
        }                                                                                                    // 96
                                                                                                             //
        Meteor.users.update({                                                                                // 97
            _id: id                                                                                          // 97
        }, {                                                                                                 // 97
            $set: {                                                                                          // 97
                'private.bannedReason': reason                                                               // 97
            }                                                                                                // 97
        });                                                                                                  // 97
        Roles.addUsersToRoles(id, 'banned');                                                                 // 98
    }                                                                                                        // 99
});                                                                                                          // 72
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"algoliaPost.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/algoliaPost.js                                                                     //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Posts = void 0;                                                                                          // 1
module.watch(require("../../api/posts/posts.js"), {                                                          // 1
    Posts: function (v) {                                                                                    // 1
        Posts = v;                                                                                           // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
//Server side method to be called from client to post announcement                                           // 1
// api key that connects the client side to Algolia's server                                                 // 3
var client = AlgoliaSearch("GJDCY9DKEW", "31f60dc3cc7926270934909c81f867ee"); // select indice (collection) of data to be accesed. In this case it would be the announcements
                                                                                                             //
var index = client.initIndex('announcement');                                                                // 7
index.setSettings({                                                                                          // 9
    searchableAttributes: ['headline', 'content', 'type', 'tags', 'categories', 'subType']                   // 10
});                                                                                                          // 9
Meteor.methods({                                                                                             // 22
    /**                                                                                                      // 23
    @params title : string; text: string; fileType: string; textFirst: boolean                               //
    **/'postTextImageAlgolia': function (postId) {                                                           //
        var json = Posts.findOne({                                                                           // 27
            '_id': postId                                                                                    // 27
        });                                                                                                  // 27
        var newJson = {                                                                                      // 29
            type: json.type,                                                                                 // 30
            subType: json.subType,                                                                           // 31
            headline: json.headline,                                                                         // 32
            content: json.content,                                                                           // 33
            tags: json.tags,                                                                                 // 34
            categories: json.categories,                                                                     // 35
            imgId: json.imgId //adds object to the indice announcement                                       // 36
                                                                                                             //
        };                                                                                                   // 29
        index.addObject(newJson, Meteor.bindEnvironment(function (err, content) {                            // 39
            //error catch for algolia issues                                                                 // 41
            if (err) {                                                                                       // 42
                console.error('Algolia returned an error', err);                                             // 43
            } else {                                                                                         // 44
                //prints the announcement posted                                                             // 45
                console.log(content);                                                                        // 46
                Posts.update({                                                                               // 47
                    '_id': postId                                                                            // 47
                }, {                                                                                         // 47
                    $set: {                                                                                  // 47
                        'meta.algoliaId': content.objectID                                                   // 47
                    }                                                                                        // 47
                }, function (err, response) {                                                                // 47
                    if (err) {                                                                               // 48
                        console.log(err);                                                                    // 49
                    } else {                                                                                 // 50
                        console.log(response);                                                               // 51
                    }                                                                                        // 52
                });                                                                                          // 53
            }                                                                                                // 54
        }));                                                                                                 // 55
    },                                                                                                       // 56
    'postTextAlgolia': function (postId) {                                                                   // 57
        var json = Posts.findOne({                                                                           // 58
            '_id': postId                                                                                    // 58
        });                                                                                                  // 58
        var newJson = {                                                                                      // 60
            type: json.type,                                                                                 // 61
            subType: json.subType,                                                                           // 62
            headline: json.headline,                                                                         // 63
            content: json.content,                                                                           // 64
            tags: json.tags,                                                                                 // 65
            categories: json.categories //adds object to the indice announcement                             // 66
                                                                                                             //
        };                                                                                                   // 60
        index.addObject(newJson, Meteor.bindEnvironment(function (err, content) {                            // 70
            //error catch for algolia issues                                                                 // 72
            if (err) {                                                                                       // 73
                console.error('Algolia returned an error', err);                                             // 74
            } else {                                                                                         // 75
                //prints the announcement posted                                                             // 76
                console.log(content);                                                                        // 77
                Posts.update({                                                                               // 78
                    '_id': postId                                                                            // 78
                }, {                                                                                         // 78
                    $set: {                                                                                  // 78
                        'meta.algoliaId': content.objectID                                                   // 78
                    }                                                                                        // 78
                }, function (err, response) {                                                                // 78
                    if (err) {                                                                               // 79
                        console.log(err);                                                                    // 80
                    } else {                                                                                 // 81
                        console.log(response);                                                               // 82
                    }                                                                                        // 83
                });                                                                                          // 84
            }                                                                                                // 85
        }));                                                                                                 // 86
    },                                                                                                       // 87
    'postImageAlgolia': function (postId) {                                                                  // 88
        var json = Posts.findOne({                                                                           // 89
            '_id': postId                                                                                    // 89
        });                                                                                                  // 89
        var newJson = {                                                                                      // 91
            type: json.type,                                                                                 // 92
            subType: json.subType,                                                                           // 93
            headline: json.headline,                                                                         // 94
            tags: json.tags,                                                                                 // 95
            categories: json.categories,                                                                     // 96
            imgId: json.imgId //adds object to the indice announcement                                       // 97
                                                                                                             //
        };                                                                                                   // 91
        index.addObject(newJson, Meteor.bindEnvironment(function (err, content) {                            // 101
            //error catch for algolia issues                                                                 // 103
            if (err) {                                                                                       // 104
                console.error('Algolia returned an error', err);                                             // 105
            } else {                                                                                         // 106
                //prints the announcement posted                                                             // 107
                console.log(content);                                                                        // 108
                Posts.update({                                                                               // 109
                    '_id': postId                                                                            // 109
                }, {                                                                                         // 109
                    $set: {                                                                                  // 109
                        'meta.algoliaId': content.objectID                                                   // 109
                    }                                                                                        // 109
                }, function (err, response) {                                                                // 109
                    if (err) {                                                                               // 110
                        console.log(err);                                                                    // 111
                    } else {                                                                                 // 112
                        console.log(response);                                                               // 113
                    }                                                                                        // 114
                });                                                                                          // 115
            }                                                                                                // 116
        }));                                                                                                 // 117
    },                                                                                                       // 118
    'postBlogAlgolia': function (postId) {                                                                   // 119
        var json = Posts.findOne({                                                                           // 120
            '_id': postId                                                                                    // 120
        });                                                                                                  // 120
        var newJson = {                                                                                      // 121
            type: json.type,                                                                                 // 122
            headline: json.title,                                                                            // 123
            subType: json.subtitle,                                                                          // 124
            content: json.content,                                                                           // 125
            tags: json.tags,                                                                                 // 126
            categories: json.categories,                                                                     // 127
            imgId: json.imgId //adds object to the indice announcement                                       // 128
                                                                                                             //
        };                                                                                                   // 121
        index.addObjects(newJson, Meteor.bindEnvironment(function (err, content) {                           // 131
            //error catch for algolia issues                                                                 // 133
            if (err) {                                                                                       // 134
                console.error('Algolia returned an error', err);                                             // 135
            } else {                                                                                         // 136
                //prints the announcement posted                                                             // 137
                Posts.update({                                                                               // 138
                    '_id': postId                                                                            // 138
                }, {                                                                                         // 138
                    $set: {                                                                                  // 138
                        'meta.algoliaId': content.objectID                                                   // 138
                    }                                                                                        // 138
                }, function (err, response) {                                                                // 138
                    if (err) {                                                                               // 139
                        console.log(err);                                                                    // 140
                    } else {                                                                                 // 141
                        console.log(response);                                                               // 142
                    }                                                                                        // 143
                });                                                                                          // 144
                console.log(content);                                                                        // 145
            }                                                                                                // 147
        }));                                                                                                 // 148
    }                                                                                                        // 149
});                                                                                                          // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"algoliaRemove.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/algoliaRemove.js                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
//Server side method to be called from client to remove an existing announcement                             // 1
// api key that connects the client side to Algolia's server                                                 // 3
var client = AlgoliaSearch("GJDCY9DKEW", "31f60dc3cc7926270934909c81f867ee"); // select indice (collection) of data to be accesed. In this case it would be the announcements
                                                                                                             //
var index = client.initIndex('announcement');                                                                // 7
Meteor.methods({                                                                                             // 9
    'removeAnnouncement': function (myID) {                                                                  // 10
        //removes object to the indice announcement                                                          // 12
        //myID is hidden and can be accessed using .objectID on the announcement                             // 13
        index.deleteObject('myID', function (err) {                                                          // 14
            if (err) {                                                                                       // 15
                //error catch (server down, or algolia issue)                                                // 16
                console.error('Algolia returned an error', err);                                             // 17
            } else {                                                                                         // 18
                //object succesfully removed                                                                 // 19
                console.log('announcement removed');                                                         // 20
            }                                                                                                // 21
        });                                                                                                  // 22
    }                                                                                                        // 24
});                                                                                                          // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"algoliaUpdate.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/algoliaUpdate.js                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
//Server side method to be called from client to update an existing announcement                             // 1
// api key that connects the client side to Algolia's server                                                 // 3
var client = AlgoliaSearch("GJDCY9DKEW", "31f60dc3cc7926270934909c81f867ee"); // select indice (collection) of data to be accesed. In this case it would be the announcements
                                                                                                             //
var index = client.initIndex('announcement');                                                                // 7
Meteor.methods({                                                                                             // 9
    'updateAnnouncement': function (announcement, description, imgId, myID) {                                // 10
        //updates object to the indice announcement                                                          // 12
        //myID is hidden and can be accessed using .objectID on the announcement                             // 13
        index.saveObject({                                                                                   // 14
            announcement: announcement,                                                                      // 15
            description: description,                                                                        // 16
            imgId: imgId,                                                                                    // 17
            objectID: myID                                                                                   // 18
        }, function (err, content) {                                                                         // 14
            //error catch (server down, or algolia issue)                                                    // 21
            if (err) {                                                                                       // 22
                console.error('Algolia returned an error', err);                                             // 23
            } else {                                                                                         // 24
                //Spits out the updated announcement with the keyword                                        // 26
                console.log('content', content);                                                             // 27
            }                                                                                                // 28
        });                                                                                                  // 29
    }                                                                                                        // 32
});                                                                                                          // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"categories.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/categories.js                                                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 1
   Meteor.publish('keywords', function () {                                                                  // 2
      function postsPublication() {                                                                          // 2
         return Posts.find({});                                                                              // 3
      }                                                                                                      // 4
                                                                                                             //
      return postsPublication;                                                                               // 2
   }());                                                                                                     // 2
}                                                                                                            // 5
                                                                                                             //
var categories = new Map(); //athletics                                                                      // 7
                                                                                                             //
categories.set('gym', 'athletics');                                                                          // 9
categories.set('athletic', 'athletics');                                                                     // 10
categories.set('athletics', 'athletics');                                                                    // 11
categories.set('sport', 'athletics');                                                                        // 12
categories.set('sports', 'athletics');                                                                       // 13
categories.set('volleyball', 'athletics');                                                                   // 14
categories.set('soccer', 'athletics');                                                                       // 15
categories.set('frisbee', 'athletics');                                                                      // 16
categories.set('workout', 'athletics');                                                                      // 17
categories.set('curling', 'athletics');                                                                      // 18
categories.set('baseball', 'athletics');                                                                     // 19
categories.set('basketball', 'athletics');                                                                   // 20
categories.set('football', 'athletics');                                                                     // 21
categories.set('volleyball', 'athletics'); //academics                                                       // 22
                                                                                                             //
categories.set('math', 'academics');                                                                         // 25
categories.set('english', 'academics');                                                                      // 26
categories.set('calculus', 'academics');                                                                     // 27
categories.set('science', 'academics');                                                                      // 28
categories.set('physics', 'academics');                                                                      // 29
categories.set('chemistry', 'academics');                                                                    // 30
categories.set('biology', 'academics');                                                                      // 31
categories.set('computing', 'academics');                                                                    // 32
categories.set('academics', 'academics');                                                                    // 33
categories.set('academic', 'academics');                                                                     // 34
categories.set('class', 'academics');                                                                        // 35
categories.set('tutor', 'academics');                                                                        // 36
categories.set('marks', 'academics');                                                                        // 37
categories.set('mark', 'academics'); //competition                                                           // 38
                                                                                                             //
categories.set('contest', 'competition');                                                                    // 41
categories.set('contests', 'competition');                                                                   // 42
categories.set('competition', 'competition');                                                                // 43
categories.set('competitions', 'competition');                                                               // 44
categories.set('vs', 'competition');                                                                         // 45
categories.set('fight', 'competition');                                                                      // 46
categories.set('battle', 'competition');                                                                     // 47
Meteor.methods({                                                                                             // 49
   //return all categories found within text                                                                 // 50
   'keywords.getKeywords': function (text) {                                                                 // 51
      text = text.toLowerCase();                                                                             // 52
      var separators = [' , ', ', ', ',', ' ,', ' ']; //                                                     // 53
                                                                                                             //
      var keys = text.split(/[ ,.]+/); //console.log(keys);                                                  // 55
                                                                                                             //
      var len = keys.length;                                                                                 // 57
      var ans = [];                                                                                          // 58
                                                                                                             //
      for (var i = 0; i < len; ++i) {                                                                        // 59
         var key = keys[i];                                                                                  // 60
                                                                                                             //
         if (categories.has(key)) {                                                                          // 61
            if (!ans.includes(categories.get(key))) {                                                        // 62
               ans.push(categories.get(key));                                                                // 63
            }                                                                                                // 64
         }                                                                                                   // 65
      }                                                                                                      // 66
                                                                                                             //
      return ans;                                                                                            // 67
   }                                                                                                         // 68
});                                                                                                          // 49
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"facebook.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/facebook.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor = void 0;                                                                                         // 1
module.watch(require("meteor/meteor"), {                                                                     // 1
    Meteor: function (v) {                                                                                   // 1
        Meteor = v;                                                                                          // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
Meteor.methods({                                                                                             // 3
    //return the facebook app id                                                                             // 4
    'getFBAppId': function () {                                                                              // 5
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 9
        }                                                                                                    // 10
                                                                                                             //
        return '443985995958874';                                                                            // 11
    },                                                                                                       // 12
    'getFBSecret': function () {                                                                             // 13
        if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 17
        }                                                                                                    // 18
                                                                                                             //
        return '8d9cbbb60eb7f71e105f23ca026f391c';                                                           // 19
    },                                                                                                       // 20
    'extendToken': function (accessToken) {                                                                  // 21
        /*$.get("https://graph.facebook.com/oauth/access_token?", {                                          // 22
        grant_type:'fb_exchange_token',                                                                      //
        client_id:appId,                                                                                     //
        client_secret:appSec,                                                                                //
        fb_exchange_token:accessToken },                                                                     //
        function (data) {                                                                                    //
        console.log(data);                                                                                   //
        })*/if (!(Roles.userIsInRole(this.userId, 'teacher') || Roles.userIsInRole(this.userId, 'admin') || Roles.userIsInRole(this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");                            // 33
        }                                                                                                    // 34
                                                                                                             //
        Meteor.call('getFBAppId', function (err, response) {                                                 // 36
            var appId = response;                                                                            // 37
            Meteor.call('getFBSecret', function (err, response2) {                                           // 38
                var appSec = response2;                                                                      // 39
                console.log("proceeding to HTTP call");                                                      // 40
                HTTP.call('GET', "https://graph.facebook.com/oauth/access_token?", {                         // 41
                    grant_type: 'fb_exchange_token',                                                         // 42
                    client_id: appId,                                                                        // 43
                    client_secret: appSec,                                                                   // 44
                    fb_exchange_token: accessToken                                                           // 45
                }, function (err, data) {                                                                    // 41
                    if (err) {                                                                               // 47
                        console.log(err);                                                                    // 48
                    } else {                                                                                 // 49
                        console.log("HELLO");                                                                // 50
                        console.log(data);                                                                   // 51
                    }                                                                                        // 52
                });                                                                                          // 53
            });                                                                                              // 54
        });                                                                                                  // 55
    }                                                                                                        // 56
});                                                                                                          // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imports.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/imports.js                                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.watch(require("./unsplash.js"));                                                                      // 1
module.watch(require("./facebook.js"));                                                                      // 1
module.watch(require("./twitter.js"));                                                                       // 1
module.watch(require("./algoliaPost.js"));                                                                   // 1
module.watch(require("./algoliaUpdate.js"));                                                                 // 1
module.watch(require("./algoliaRemove.js"));                                                                 // 1
module.watch(require("./accounts.js"));                                                                      // 1
module.watch(require("./mailchimp.js"));                                                                     // 1
module.watch(require("./categories.js"));                                                                    // 1
module.watch(require("./scheduler.js"));                                                                     // 1
module.watch(require("../../api/drafts/draftMethods.js"));                                                   // 1
module.watch(require("../../api/posts/postsMethods.js"));                                                    // 1
module.watch(require("../../api/suggestions/suggestionMethods.js"));                                         // 1
module.watch(require("../../api/categories/categoriesMethods.js"));                                          // 1
module.watch(require("../../api/blogCategories/categoriesMethods.js"));                                      // 1
module.watch(require("./teachAssist.js"));                                                                   // 1
module.watch(require("../../api/suggestions/suggestions.js"));                                               // 1
module.watch(require("../../api/images/images.js"));                                                         // 1
module.watch(require("../../api/images/imagesMethods.js"));                                                  // 1
module.watch(require("../../api/organizations/clubs.js"));                                                   // 1
module.watch(require("../../api/organizations/clubsMethods.js"));                                            // 1
module.watch(require("../../api/organizations/courses.js"));                                                 // 1
module.watch(require("../../api/organizations/coursesMethods.js"));                                          // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/index.js                                                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.watch(require("./imports.js"));                                                                       // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mailchimp.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/mailchimp.js                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Mailchimp = void 0;                                                                                      // 1
module.watch(require("mailchimp-api-v3"), {                                                                  // 1
   "default": function (v) {                                                                                 // 1
      Mailchimp = v;                                                                                         // 1
   }                                                                                                         // 1
}, 0);                                                                                                       // 1
//const Mailchimp = require('mailchimp-api-v3')                                                              // 3
var mailchimp = new Mailchimp('c63e149751b5b34657fc48286f336650-us16');                                      // 5
Meteor.methods({                                                                                             // 7
   'getSubscribers': function () {                                                                           // 8
      mailchimp.get('/lists/b7d23cbf79', function (results) {                                                // 9
         return results;                                                                                     // 10
      });                                                                                                    // 11
   },                                                                                                        // 12
   'news.addSubscriber': function (email, fname, lname) {                                                    // 13
      mailchimp.post('/lists/b7d23cbf79/members', {                                                          // 14
         email_address: email,                                                                               // 14
         status: 'subscribed',                                                                               // 14
         merge_fields: {                                                                                     // 14
            FNAME: fname,                                                                                    // 14
            LNAME: lname                                                                                     // 14
         }                                                                                                   // 14
      }, function (err, response) {                                                                          // 14
         if (err) {                                                                                          // 15
            console.log(err);                                                                                // 16
         } else {                                                                                            // 17
            console.log(JSON.stringify(response, null, 2));                                                  // 18
         }                                                                                                   // 19
                                                                                                             //
         return response;                                                                                    // 20
      });                                                                                                    // 21
   },                                                                                                        // 22
   'getTemplates': function () {                                                                             // 23
      mailchimp.get('/templates', function (err, response) {                                                 // 24
         if (err) {                                                                                          // 25
            console.log(err);                                                                                // 26
         } else {                                                                                            // 27
            console.log(JSON.stringify(response, null, 2));                                                  // 28
         }                                                                                                   // 29
      });                                                                                                    // 30
   },                                                                                                        // 31
   'createCampaign': function (subjectLine, title) {                                                         // 32
      mailchimp.post('/campaigns', {                                                                         // 33
         type: 'regular',                                                                                    // 35
         recipients: {                                                                                       // 36
            list_id: 'b7d23cbf79'                                                                            // 37
         },                                                                                                  // 36
         settings: {                                                                                         // 39
            subject_line: subjectLine,                                                                       // 40
            title: title,                                                                                    // 41
            from_name: 'UHS Life Bulletin',                                                                  // 42
            reply_to: 'hello@uhs.life',                                                                      // 43
            template_id: 60467                                                                               // 44
         }                                                                                                   // 39
      }, function (err, response) {                                                                          // 34
         if (err) {                                                                                          // 47
            console.log(err);                                                                                // 48
         } else {                                                                                            // 49
            console.log(JSON.stringify(response, null, 2));                                                  // 50
            var campaignID = response.id;                                                                    // 51
            mailchimp.put('/campaigns/' + campaignID + '/content', {                                         // 52
               template: {                                                                                   // 54
                  id: 60467,                                                                                 // 55
                  sections: {                                                                                // 56
                     "image": "<img src='https://www.sitebuilderreport.com/assets/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg'>",
                     "text": "<p>Changed text 2</p>"                                                         // 58
                  }                                                                                          // 56
               }                                                                                             // 54
            }, function (err, response) {                                                                    // 53
               if (err) {                                                                                    // 62
                  console.log(err);                                                                          // 63
               } else {                                                                                      // 64
                  //console.log(JSON.stringify(response, null, 2));                                          // 65
                  mailchimp.post('/campaigns/' + campaignID + '/actions/send', function (err, response) {    // 66
                     if (err) {                                                                              // 67
                        console.log(err);                                                                    // 68
                     } else {                                                                                // 69
                        console.log(JSON.stringify(response, null, 2));                                      // 70
                     }                                                                                       // 71
                  });                                                                                        // 72
               }                                                                                             // 73
            });                                                                                              // 74
         }                                                                                                   // 75
      });                                                                                                    // 76
   }                                                                                                         // 77
});                                                                                                          // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"scheduler.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/scheduler.js                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor = void 0;                                                                                         // 1
module.watch(require("meteor/meteor"), {                                                                     // 1
   Meteor: function (v) {                                                                                    // 1
      Meteor = v;                                                                                            // 1
   }                                                                                                         // 1
}, 0);                                                                                                       // 1
var schedule = void 0;                                                                                       // 1
module.watch(require("node-schedule"), {                                                                     // 1
   "default": function (v) {                                                                                 // 1
      schedule = v;                                                                                          // 1
   }                                                                                                         // 1
}, 1);                                                                                                       // 1
var Posts = void 0;                                                                                          // 1
module.watch(require("../../api/posts/posts.js"), {                                                          // 1
   Posts: function (v) {                                                                                     // 1
      Posts = v;                                                                                             // 1
   }                                                                                                         // 1
}, 2);                                                                                                       // 1
Meteor.methods({                                                                                             // 5
   'scheduleAnnouncement': function (announcementId) {                                                       // 6
      var announcement = Posts.findOne({                                                                     // 7
         '_id': announcementId                                                                               // 7
      });                                                                                                    // 7
                                                                                                             //
      if (announcement.type === 'announcement') {                                                            // 9
         var sDate = new Date(announcement.startDate);                                                       // 10
         var eDate = new Date(announcement.endDate);                                                         // 11
         var cDate = new Date();                                                                             // 12
         var flag = false;                                                                                   // 13
         sDate.setHours(8);                                                                                  // 15
         eDate.setHours(8);                                                                                  // 16
                                                                                                             //
         if (eDate.getTime() === sDate.getTime()) {                                                          // 18
            //scheduled for one day                                                                          // 18
            eDate = new Date(eDate.setTime(eDate.getTime() + 86400000)); //move end day to next day midnight
         }                                                                                                   // 20
                                                                                                             //
         if (sDate.getTime() < cDate.getTime()) {                                                            // 21
            //already past start date                                                                        // 21
            console.log("updated start date");                                                               // 22
            sDate = new Date(); //update the start date                                                      // 23
                                                                                                             //
            sDate.setSeconds(sDate.getSeconds() + 5); //add a delay                                          // 24
         }                                                                                                   // 25
                                                                                                             //
         if (eDate.getTime() < cDate.getTime()) {                                                            // 26
            //already past end date                                                                          // 26
            console.log("updated end date");                                                                 // 27
            flag = true;                                                                                     // 28
         }                                                                                                   // 29
                                                                                                             //
         if (!flag) {                                                                                        // 32
            var j = schedule.scheduleJob(sDate, Meteor.bindEnvironment(function () {                         // 33
               //Set display to TRUE                                                                         // 34
               console.log("DISPLAY TRUE");                                                                  // 35
               Posts.update({                                                                                // 36
                  '_id': announcementId                                                                      // 36
               }, {                                                                                          // 36
                  $set: {                                                                                    // 36
                     'meta.display': true                                                                    // 36
                  }                                                                                          // 36
               });                                                                                           // 36
            }));                                                                                             // 37
            var k = schedule.scheduleJob(eDate, Meteor.bindEnvironment(function () {                         // 38
               //Set display to FALSE                                                                        // 39
               console.log("DISPLAY FALSE");                                                                 // 40
               Posts.update({                                                                                // 41
                  '_id': announcementId                                                                      // 41
               }, {                                                                                          // 41
                  $set: {                                                                                    // 41
                     'meta.display': false                                                                   // 41
                  }                                                                                          // 41
               });                                                                                           // 41
            }));                                                                                             // 42
         }                                                                                                   // 43
      } else {                                                                                               // 44
         console.log('Not an announcement');                                                                 // 45
         return -1;                                                                                          // 46
      }                                                                                                      // 47
   },                                                                                                        // 48
   'scheduleBlog': function (blogId) {                                                                       // 49
      var blog = Posts.findOne({                                                                             // 50
         '_id': blogId                                                                                       // 50
      });                                                                                                    // 50
                                                                                                             //
      if (blog.type === 'blog') {                                                                            // 52
         var rDate = new Date(blog.releaseDate);                                                             // 53
         var cDate = new Date();                                                                             // 54
                                                                                                             //
         if (rDate.getTime() < cDate.getTime()) {                                                            // 56
            //already past start date                                                                        // 56
            rDate = new Date(); //update the start date                                                      // 57
                                                                                                             //
            rDate.setSeconds(rDate.getSeconds() + 5); //add a delay                                          // 58
         }                                                                                                   // 59
                                                                                                             //
         var j = schedule.scheduleJob(rDate, Meteor.bindEnvironment(function () {                            // 61
            //Set display to TRUE                                                                            // 62
            Posts.update({                                                                                   // 63
               '_id': blogId                                                                                 // 63
            }, {                                                                                             // 63
               $set: {                                                                                       // 63
                  'meta.display': true                                                                       // 63
               }                                                                                             // 63
            });                                                                                              // 63
         }));                                                                                                // 64
      } else {                                                                                               // 65
         console.log('not a blog');                                                                          // 66
         return -1;                                                                                          // 67
      }                                                                                                      // 68
   }                                                                                                         // 69
});                                                                                                          // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"teachAssist.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/teachAssist.js                                                                     //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
Meteor.methods({                                                                                             // 1
    'getTeachAssistTokens': function (json) {                                                                // 2
        if (!(json.student_number && json.password)) {                                                       // 3
            throw new Meteor.Error(400, "Need a student number and password");                               // 4
        }                                                                                                    // 5
                                                                                                             //
        var response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {                        // 6
            data: {                                                                                          // 7
                "student_number": json.student_number,                                                       // 8
                "password": json.password                                                                    // 9
            }                                                                                                // 7
        });                                                                                                  // 6
        var res = JSON.parse(response.content);                                                              // 12
                                                                                                             //
        if (res[0].ERROR) {                                                                                  // 13
            console.log(res[0].ERROR);                                                                       // 14
            throw new Meteor.Error(403, "Your password is invalid.");                                        // 15
        }                                                                                                    // 16
                                                                                                             //
        var id = res[0].student_id;                                                                          // 18
        var token = res[0].token;                                                                            // 19
        return {                                                                                             // 21
            "student_id": id,                                                                                // 21
            "token": token                                                                                   // 21
        };                                                                                                   // 21
    },                                                                                                       // 22
    'getTeachAssistCourses': function (json) {                                                               // 23
        if (!(json.student_id && json.token)) {                                                              // 24
            throw new Meteor.Error(400, "Need a student id and token");                                      // 25
        }                                                                                                    // 26
                                                                                                             //
        console.log("hello courses");                                                                        // 27
        var response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {                        // 28
            data: {                                                                                          // 29
                "student_id": json.student_id,                                                               // 30
                "token": json.token                                                                          // 31
            }                                                                                                // 29
        });                                                                                                  // 28
                                                                                                             //
        if (JSON.parse(response.content)[0].ERROR) {                                                         // 35
            throw new Meteor.Error(400, JSON.parse(response.content)[0].ERROR);                              // 36
        }                                                                                                    // 37
                                                                                                             //
        return JSON.parse(response.content)[0].data[0].subjects;                                             // 38
    },                                                                                                       // 40
    'getTeachAssistCourseDetails': function (json) {                                                         // 41
        if (!(json.student_id && json.token && json.subject_id)) {                                           // 42
            throw new Meteor.Error(400, "Need a student id and token and subject id");                       // 43
        }                                                                                                    // 44
                                                                                                             //
        var response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {                        // 45
            data: {                                                                                          // 46
                "student_id": json.student_id,                                                               // 47
                "token": json.token,                                                                         // 48
                "subject_id": json.subject_id                                                                // 49
            }                                                                                                // 46
        });                                                                                                  // 45
                                                                                                             //
        if (JSON.parse(response.content)[0].ERROR) {                                                         // 52
            throw new Meteor.Error(400, JSON.parse(response.content)[0].ERROR);                              // 53
        } //console.log(JSON.parse(response.content)[0]);                                                    // 54
                                                                                                             //
                                                                                                             //
        var cat = [0, 0, 0, 0, 0]; //K T C A O                                                               // 57
                                                                                                             //
        var catWeight = [0, 0, 0, 0, 0];                                                                     // 58
        var catExist = [false, false, false, false, false];                                                  // 59
        var timeline = [];                                                                                   // 60
        var preParse = JSON.parse(response.content)[0];                                                      // 62
        var postParse = JSON.parse(response.content)[0];                                                     // 63
        postParse.data.assessment = [];                                                                      // 65
        postParse.categoryMarks = [0, 0, 0, 0, 0];                                                           // 66
        var categories = preParse.data.assessment.data.categories;                                           // 68
        var cnt = 0;                                                                                         // 70
                                                                                                             //
        _.each(preParse.data.assessment.data, function (k, v) {                                              // 71
            if (v === 'categories') {                                                                        // 72
                postParse.categories = k;                                                                    // 73
            } else {                                                                                         // 74
                var assess = k;                                                                              // 75
                                                                                                             //
                if (assess.K) {                                                                              // 76
                    catExist[0] = true;                                                                      // 77
                    cat[0] += parseFloat(assess.K.mark) / parseFloat(assess.K.outOf) * 100 * parseFloat(assess.K.weight);
                    catWeight[0] += parseFloat(assess.K.weight);                                             // 79
                }                                                                                            // 80
                                                                                                             //
                if (assess.T) {                                                                              // 81
                    catExist[1] = true;                                                                      // 82
                    cat[1] += parseFloat(assess.T.mark) / parseFloat(assess.T.outOf) * 100 * parseFloat(assess.T.weight);
                    catWeight[1] += parseFloat(assess.T.weight);                                             // 84
                }                                                                                            // 85
                                                                                                             //
                if (assess.C) {                                                                              // 86
                    catExist[2] = true;                                                                      // 87
                    cat[2] += parseFloat(assess.C.mark) / parseFloat(assess.C.outOf) * 100 * parseFloat(assess.C.weight);
                    catWeight[2] += parseFloat(assess.C.weight);                                             // 89
                }                                                                                            // 90
                                                                                                             //
                if (assess.A) {                                                                              // 91
                    catExist[3] = true;                                                                      // 92
                    cat[3] += parseFloat(assess.A.mark) / parseFloat(assess.A.outOf) * 100 * parseFloat(assess.A.weight);
                    catWeight[3] += parseFloat(assess.A.weight);                                             // 94
                    console.log(cat[3] + " " + catWeight[3]);                                                // 95
                }                                                                                            // 96
                                                                                                             //
                if (assess[""]) {                                                                            // 97
                    catExist[4] = true;                                                                      // 98
                    cat[4] += parseFloat(assess[""].mark) / parseFloat(assess[""].outOf) * 100 * parseFloat(assess[""].weight);
                    catWeight[4] += parseFloat(assess[""].weight);                                           // 100
                }                                                                                            // 101
                                                                                                             //
                k.O = k[""]; //transfer to Other                                                             // 102
                                                                                                             //
                delete k[""];                                                                                // 103
                var mark = 0;                                                                                // 104
                var K = void 0,                                                                              // 105
                    T = void 0,                                                                              // 105
                    C = void 0,                                                                              // 105
                    A = void 0,                                                                              // 105
                    O = 0;                                                                                   // 105
                var catTotalWeight = 0;                                                                      // 106
                                                                                                             //
                if (catExist[0]) {                                                                           // 107
                    mark += cat[0] / catWeight[0] * categories.K;                                            // 108
                    K = cat[0] / catWeight[0];                                                               // 109
                    catTotalWeight += categories.K;                                                          // 110
                }                                                                                            // 111
                                                                                                             //
                if (catExist[1]) {                                                                           // 112
                    mark += cat[1] / catWeight[1] * categories.T;                                            // 113
                    T = cat[1] / catWeight[1];                                                               // 114
                    catTotalWeight += categories.T;                                                          // 115
                }                                                                                            // 116
                                                                                                             //
                if (catExist[2]) {                                                                           // 117
                    mark += cat[2] / catWeight[2] * categories.C;                                            // 118
                    C = cat[2] / catWeight[2];                                                               // 119
                    catTotalWeight += categories.C;                                                          // 120
                }                                                                                            // 121
                                                                                                             //
                if (catExist[3]) {                                                                           // 122
                    mark += cat[3] / catWeight[3] * categories.A;                                            // 123
                    A = cat[3] / catWeight[3];                                                               // 124
                    catTotalWeight += categories.A;                                                          // 125
                }                                                                                            // 126
                                                                                                             //
                if (catExist[4]) {                                                                           // 127
                    mark += cat[4] / catWeight[4] * categories.O;                                            // 128
                    O = cat[4] / catWeight[4];                                                               // 129
                    catTotalWeight += categories.O;                                                          // 130
                }                                                                                            // 131
                                                                                                             //
                mark /= catTotalWeight;                                                                      // 132
                timeline[cnt] = {                                                                            // 133
                    mark: Math.round(mark * 100) / 100,                                                      // 134
                    K: Math.round(K * 100) / 100,                                                            // 135
                    T: Math.round(T * 100) / 100,                                                            // 136
                    C: Math.round(C * 100) / 100,                                                            // 137
                    A: Math.round(A * 100) / 100,                                                            // 138
                    O: Math.round(O * 100) / 100                                                             // 139
                };                                                                                           // 133
                postParse.data.assessment[cnt++] = k;                                                        // 141
            }                                                                                                // 142
        });                                                                                                  // 143
                                                                                                             //
        for (var i = 0; i < 5; i++) {                                                                        // 144
            if (cat[i] !== 0) {                                                                              // 145
                postParse.categoryMarks[i] = Math.round(cat[i] / catWeight[i] * 100) / 100;                  // 146
            } else {                                                                                         // 147
                postParse.categoryMarks[i] = 0;                                                              // 148
            }                                                                                                // 149
        }                                                                                                    // 150
                                                                                                             //
        postParse.timeline = timeline;                                                                       // 151
        return postParse;                                                                                    // 152
    }                                                                                                        // 153
});                                                                                                          // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twitter.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/twitter.js                                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor = void 0;                                                                                         // 1
module.watch(require("meteor/meteor"), {                                                                     // 1
    Meteor: function (v) {                                                                                   // 1
        Meteor = v;                                                                                          // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
var Images = void 0;                                                                                         // 1
module.watch(require("../../api/images/images.js"), {                                                        // 1
    Images: function (v) {                                                                                   // 1
        Images = v;                                                                                          // 1
    }                                                                                                        // 1
}, 1);                                                                                                       // 1
Meteor.methods({                                                                                             // 4
    //return the twitter api key                                                                             // 5
    'getTwitterAPIKey': function () {                                                                        // 6
        return 'cwR4tCHFOTFRIyiLQVacIzns8';                                                                  // 7
    },                                                                                                       // 8
    //return the twitter api secret                                                                          // 9
    'getTwitterAPISecret': function () {                                                                     // 10
        return 'MP0Pphmcp6HL0FF6WXYhZa2M8b8cTH297MNqRR7M6wwCOBxfwU';                                         // 11
    },                                                                                                       // 12
    //return the twitter access token                                                                        // 13
    'getTwitterAccessToken': function () {                                                                   // 14
        return '882355763771043840-8uCzofs2q4HHE8m0GS2QZUxqNxzOvEG';                                         // 15
    },                                                                                                       // 16
    //return the twitter access token secret                                                                 // 17
    'getTwitterAccessTokenSecret': function () {                                                             // 18
        return 'vpw7YwWu9tic20VI2qDh8W73zJoROenAnDEQoh7PMlM5l';                                              // 19
    },                                                                                                       // 20
    //setup the twitter api                                                                                  // 21
    'setupTwitterAPI': function () {                                                                         // 22
        //Initialize the twitter API                                                                         // 24
        T = new Twit({                                                                                       // 25
            consumer_key: 'cwR4tCHFOTFRIyiLQVacIzns8',                                                       // 26
            consumer_secret: 'MP0Pphmcp6HL0FF6WXYhZa2M8b8cTH297MNqRR7M6wwCOBxfwU',                           // 27
            access_token: '882355763771043840-8uCzofs2q4HHE8m0GS2QZUxqNxzOvEG',                              // 28
            access_token_secret: 'vpw7YwWu9tic20VI2qDh8W73zJoROenAnDEQoh7PMlM5l'                             // 29
        });                                                                                                  // 25
        console.log("setting up twitter");                                                                   // 31
    },                                                                                                       // 33
    //post to twitter account                                                                                // 34
    'postTextAnnouncementTwitter': function (obj) {                                                          // 35
        var headline = obj.headline,                                                                         // 36
            content = obj.content;                                                                           // 36
        var status = obj.headline + '\n' + obj.content;                                                      // 38
                                                                                                             //
        if (status.length > 140) {                                                                           // 39
            status = status.substring(0, 137);                                                               // 40
        }                                                                                                    // 41
                                                                                                             //
        status += "...";                                                                                     // 42
        T.post('statuses/update', {                                                                          // 43
            status: status                                                                                   // 43
        }, function (err, data, response) {                                                                  // 43
            console.log(data);                                                                               // 44
        });                                                                                                  // 45
    },                                                                                                       // 46
    'postImageAnnouncementTwitter': function (obj) {                                                         // 47
        var fs = require('fs'); // post a tweet with media                                                   // 48
        //let b64content = fs.readFileSync('/Documents/TestFacebookAPI/facebookapi/public/images/stock1.jpg', { encoding: 'base64' });
                                                                                                             //
                                                                                                             //
        var getBase64Data = function (doc, callback) {                                                       // 52
            var buffer = new Buffer(0); // callback has the form function (err, res) {}                      // 53
                                                                                                             //
            var readStream = doc.createReadStream();                                                         // 55
            readStream.on('data', function (chunk) {                                                         // 56
                buffer = Buffer.concat([buffer, chunk]);                                                     // 57
            });                                                                                              // 58
            readStream.on('error', function (err) {                                                          // 59
                callback(err, null);                                                                         // 60
            });                                                                                              // 61
            readStream.on('end', function () {                                                               // 62
                // done                                                                                      // 63
                callback(null, buffer.toString('base64'));                                                   // 64
            });                                                                                              // 65
        };                                                                                                   // 66
                                                                                                             //
        var getBase64DataSync = Meteor.wrapAsync(getBase64Data);                                             // 67
        var file = Images.findOne({                                                                          // 69
            '_id': obj.imgId                                                                                 // 69
        });                                                                                                  // 69
        getBase64DataSync(file, function (err, b64content) {                                                 // 70
            // first we must post the media to Twitter                                                       // 71
            T.post('media/upload', {                                                                         // 72
                media_data: b64content                                                                       // 72
            }, function (err, data, response) {                                                              // 72
                // now we can reference the media and post a tweet (media will attach to the tweet)          // 74
                var mediaIdStr = data.media_id_string;                                                       // 75
                var params = {                                                                               // 76
                    status: obj.headline,                                                                    // 76
                    media_ids: [mediaIdStr]                                                                  // 76
                };                                                                                           // 76
                T.post('statuses/update', params, function (err, data, response) {                           // 78
                    console.log(data);                                                                       // 79
                });                                                                                          // 80
            });                                                                                              // 81
        });                                                                                                  // 82
    },                                                                                                       // 83
    'postTextImageAnnouncementTwitter': function (obj) {                                                     // 84
        var getBase64Data = function (doc, callback) {                                                       // 85
            var buffer = new Buffer(0); // callback has the form function (err, res) {}                      // 86
                                                                                                             //
            var readStream = doc.createReadStream();                                                         // 88
            readStream.on('data', function (chunk) {                                                         // 89
                buffer = Buffer.concat([buffer, chunk]);                                                     // 90
            });                                                                                              // 91
            readStream.on('error', function (err) {                                                          // 92
                callback(err, null);                                                                         // 93
            });                                                                                              // 94
            readStream.on('end', function () {                                                               // 95
                // done                                                                                      // 96
                callback(null, buffer.toString('base64'));                                                   // 97
            });                                                                                              // 98
        };                                                                                                   // 99
                                                                                                             //
        var getBase64DataSync = Meteor.wrapAsync(getBase64Data);                                             // 100
        var status = obj.headline + '\n' + obj.content;                                                      // 102
                                                                                                             //
        if (status.length > 140) {                                                                           // 103
            status = status.substring(0, 137);                                                               // 104
        }                                                                                                    // 105
                                                                                                             //
        status += "...";                                                                                     // 106
        var file = Images.findOne({                                                                          // 108
            '_id': obj.imgId                                                                                 // 108
        });                                                                                                  // 108
        getBase64DataSync(file, function (err, b64content) {                                                 // 109
            // first we must post the media to Twitter                                                       // 110
            T.post('media/upload', {                                                                         // 111
                media_data: b64content                                                                       // 111
            }, function (err, data, response) {                                                              // 111
                // now we can reference the media and post a tweet (media will attach to the tweet)          // 113
                var mediaIdStr = data.media_id_string;                                                       // 114
                var params = {                                                                               // 115
                    status: status,                                                                          // 115
                    media_ids: [mediaIdStr]                                                                  // 115
                };                                                                                           // 115
                T.post('statuses/update', params, function (err, data, response) {                           // 117
                    console.log(data);                                                                       // 118
                });                                                                                          // 119
            });                                                                                              // 120
        });                                                                                                  // 121
    }                                                                                                        // 122
});                                                                                                          // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"unsplash.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/server/unsplash.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor = void 0;                                                                                         // 1
module.watch(require("meteor/meteor"), {                                                                     // 1
    Meteor: function (v) {                                                                                   // 1
        Meteor = v;                                                                                          // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
var Unsplash = void 0,                                                                                       // 1
    toJson = void 0;                                                                                         // 1
module.watch(require("unsplash-js"), {                                                                       // 1
    "default": function (v) {                                                                                // 1
        Unsplash = v;                                                                                        // 1
    },                                                                                                       // 1
    toJson: function (v) {                                                                                   // 1
        toJson = v;                                                                                          // 1
    }                                                                                                        // 1
}, 1);                                                                                                       // 1
var es6Promise = void 0;                                                                                     // 1
module.watch(require("es6-promise"), {                                                                       // 1
    "default": function (v) {                                                                                // 1
        es6Promise = v;                                                                                      // 1
    }                                                                                                        // 1
}, 2);                                                                                                       // 1
var isomorphicFetch = void 0;                                                                                // 1
module.watch(require("isomorphic-fetch"), {                                                                  // 1
    "default": function (v) {                                                                                // 1
        isomorphicFetch = v;                                                                                 // 1
    }                                                                                                        // 1
}, 3);                                                                                                       // 1
es6Promise = require('es6-promise').polyfill();                                                              // 6
isomorphicFetch = require('isomorphic-fetch');                                                               // 7
Meteor.methods({                                                                                             // 9
    'setupUnsplash': function () {                                                                           // 10
        unsplash = new Unsplash({                                                                            // 11
            applicationId: "bb5b9c84132fd7a81bb83c76f31682d365611a88e4c4787c15c10e6f5c0dda1e",               // 12
            secret: "449740b9a733347f3476d7c87aff43054cb36c78b40ef88d8593605926d7ddb5",                      // 13
            callbackUrl: "localhost:3000"                                                                    // 14
        });                                                                                                  // 11
    },                                                                                                       // 16
    'searchKeyword': function (key) {                                                                        // 17
        return unsplash.search.photos(key, 1, 10).then(toJson).then(function (json) {                        // 18
            return json;                                                                                     // 21
        });                                                                                                  // 22
    },                                                                                                       // 23
    'getRandomPhoto': function () {                                                                          // 24
        return unsplash.photos.getRandomPhoto().then(toJson).then(function (json) {                          // 25
            return json;                                                                                     // 28
        });                                                                                                  // 29
    },                                                                                                       // 30
    'getPhoto': function (id) {                                                                              // 31
        return unsplash.photos.getPhoto(id).then(toJson).then(function (json) {                              // 32
            return json;                                                                                     // 35
        });                                                                                                  // 36
    }                                                                                                        // 37
});                                                                                                          // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"i18n":{"en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// i18n/en.i18n.json                                                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"branding":"uhs.life","tagline":"Built by students, for everyone.","loading":"Loading...","login":{"title":"Login","main_btn":"Login With Gapps","about":"About","branding":"uhs.life","help":"Help Center","legal":"Legal Stuff","read_more":"Read More","welcome":"Welcome"},"nav":{"left":"MENU","right":"SEARCH","close":"CLOSE","search_prompt":{"init":"Type something in the box above to search"},"logout":"LOGOUT","side_items":{"stream":"Stream","stories":"Stories","marks":"Academics","suggest":"Suggestions to Admin","admin":"Dashboard"},"teach":{"login":"Please Login to","submit_login":"Login","connect":"Connect your Teach Assist Account"}},"stream":{"all":"All","time_range":"Effective","read_more":"Read More","no":"There are no announcements today! 😅"},"details":{"scroll":"Scroll Down","posted_date":"Posted","course":{"knowledge":"Knowledge","thinking":"Thinking","communication":"Communication","application":"Application","culminating":"Culminating","other":"Other","menu":{"assess":"Assessments","insights":"Insights","resources":"Resources"},"expand_a":"You got","expand_b":"out of","no":"No Marks Available","weight":"Weight","timeline_graph":"Timeline of Your Mark","assignments_graph":"Section Marks by Assignment"}},"first":{"greet":"Hello There!","greet_more":"Thank you for signing up for uhs.life! Since it's your first time here, we would like to know some things about you, it's really short","teach":"Connect Your Teach Assist Account","teach_more":"Connecting your teach assist enables you to view your marks, assignments, academic progress and find resources written by UHS teachers on your subject. You do not have to opt-in for this service, and you can opt-out any time. (You can opt-in later)","teach_skip":"No, I do not want to connect my Teach Assist, please","teach_t":"Do you teach any courses or supervise any clubs?","teach_t_more":"Selecting these will help us build your profile, if you don't have any or prefer not to tell simply click skip.","teach_t_skip":"This section does not apply to me, I want to","news":"Sign Up For Newsletter Subscription","news_more":"We offer weekly briefings on everything that happened in our school and tips and tricks on studying at Unionville Highs School, why not subscribe to learn more about your school? You can opt-out and opt-in at any time. We'll never share your email with anyone else or spam you. Read more in our privacy policy.","news_inst":"If you would like the news to be on your gapps account, simply click sign up, if you would like to use a personal email, change the email in the box below, then hit sign up. If you do not want to subscribe, click skip.","news_skip":"No, I do not want weekly briefing, please","confirm":"We are almost there...","confirm_more":"We are almost done here, confirm the information bellow and agree to the Terms of Service of uhs.life.","confirm_t_more":"We are almost done here, why not give yourself a tag line, this will appear under your name in a story post. Then confirm the information bellow, and agree to the Terms of Service of uhs.life.","done":"Thank You!","done_more":"Welcome to uhs.life","btn":{"intro":"Let's go!","authorize":"AUTHORIZE","skip":"skip","signup":"Sign Up","done":"We are Done!"},"input":{"sNum":"Teach Assist Login","sPass":"Teach Assist Password","cName":"Your Name","cNum":"Your Student Number","cMail":"The email that we will be sending news letters to","cTerms":"I have read and agreed with the Terms of Service","tCourse":"What Courses do you teach? Select all that applies","tClub":"What Clubs do you supervise? Select all that applies"}}};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// server/main.js                                                                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor = void 0;                                                                                         // 1
module.watch(require("meteor/meteor"), {                                                                     // 1
    Meteor: function (v) {                                                                                   // 1
        Meteor = v;                                                                                          // 1
    }                                                                                                        // 1
}, 0);                                                                                                       // 1
module.watch(require("/imports/startup/server"));                                                            // 1
var Posts = void 0;                                                                                          // 1
module.watch(require("../imports/api/posts/posts.js"), {                                                     // 1
    Posts: function (v) {                                                                                    // 1
        Posts = v;                                                                                           // 1
    }                                                                                                        // 1
}, 1);                                                                                                       // 1
Meteor.startup(function () {                                                                                 // 7
    Accounts.loginServiceConfiguration.remove({                                                              // 8
        service: "google"                                                                                    // 9
    });                                                                                                      // 8
    Accounts.loginServiceConfiguration.insert({                                                              // 11
        service: "google",                                                                                   // 12
        clientId: "152156454960-h8olc9vhu7juk77p71et1aekkr6qslm1.apps.googleusercontent.com",                // 13
        secret: "nL2ZzKMfrfwja7VHa9jmlhvU"                                                                   // 14
    }); //on server restart, always re-run scheduler to reschedule all announcements                         // 11
    //TODO                                                                                                   // 17
                                                                                                             //
    Posts.find({                                                                                             // 18
        'meta.approved': true,                                                                               // 18
        'meta.screeningStage': 3                                                                             // 18
    }).forEach(function (obj) {                                                                              // 18
        Meteor.call('scheduleAnnouncement', obj._id, function (err, res) {                                   // 19
            if (err) {                                                                                       // 20
                console.log(err);                                                                            // 21
            }                                                                                                // 22
        });                                                                                                  // 23
    }); /*                                                                                                   // 24
         Meteor.call('posts.getApprovedPosts', function(err, data) {                                         //
         console.log("getting approved posts");                                                              //
         if (err) {                                                                                          //
         console.log (err);                                                                                  //
         } else {                                                                                            //
         //console.log(data);                                                                                //
         data.forEach(function(obj) {                                                                        //
         Meteor.call('scheduleAnnouncement', obj._id, function(err, res) {                                   //
         if (err) {                                                                                          //
         console.log(err);                                                                                   //
         }                                                                                                   //
         });                                                                                                 //
         });                                                                                                 //
         }                                                                                                   //
         })*/                                                                                                //
});                                                                                                          // 41
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./i18n/en.i18n.json");
require("./server/main.js");
//# sourceMappingURL=app.js.map
